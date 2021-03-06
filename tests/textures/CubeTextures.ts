import BitmapImageCube				= require("awayjs-core/lib/data/BitmapImageCube");
import Vector3D						= require("awayjs-core/lib/geom/Vector3D");
import LoaderEvent					= require("awayjs-core/lib/events/LoaderEvent");
import URLRequest					= require("awayjs-core/lib/net/URLRequest");
import AssetLibrary					= require("awayjs-core/lib/library/AssetLibrary");
import LoaderSession				= require("awayjs-core/lib/library/LoaderSession");
import RequestAnimationFrame		= require("awayjs-core/lib/utils/RequestAnimationFrame");
import Debug						= require("awayjs-core/lib/utils/Debug");

import View							= require("awayjs-display/lib/containers/View");
import DirectionalLight				= require("awayjs-display/lib/entities/DirectionalLight");
import Mesh							= require("awayjs-display/lib/entities/Mesh");
import Skybox						= require("awayjs-display/lib/entities/Skybox");
import PrimitiveTorusPrefab			= require("awayjs-display/lib/prefabs/PrimitiveTorusPrefab");
import SingleCubeTexture			= require("awayjs-display/lib/textures/SingleCubeTexture");

import DefaultRenderer				= require("awayjs-renderergl/lib/DefaultRenderer");

class CubeTextures
{
	private _view:View;
	private _timer:RequestAnimationFrame;
	private _skyboxSingleCubeTexture:SingleCubeTexture;

	private _skybox:Skybox;

	constructor()
	{
		Debug.LOG_PI_ERRORS    = false;
		Debug.THROW_ERRORS     = false;

		this._view = new View(new DefaultRenderer());
		this._view.camera.z = -500;
		this._view.camera.y	= 250;
		this._view.camera.rotationX = 20;
		this._view.camera.projection.near = 0.5;
		this._view.camera.projection.far = 14000;
		this._view.backgroundColor = 0x2c2c32;

		var session:LoaderSession = AssetLibrary.getLoaderSession();
		session.addEventListener(LoaderEvent.RESOURCE_COMPLETE, (event:LoaderEvent) => this.onResourceComplete(event));
		session.load(new URLRequest('assets/SingleCubeTextureTest.cube'));

		window.onresize = (event:UIEvent) => this.onResize(event);

		this.onResize();

		this._timer = new RequestAnimationFrame(this.render, this);
		this._timer.start();
	}

	public onResourceComplete(event:LoaderEvent)
	{
		var loader:LoaderSession = <LoaderSession> event.target;

		switch(event.url) {
			case 'assets/SingleCubeTextureTest.cube':
				this._skyboxSingleCubeTexture = new SingleCubeTexture(<BitmapImageCube> loader.baseDependency.assets[0]);

				this._skybox = new Skybox(this._skyboxSingleCubeTexture);
				this._view.scene.addChild(this._skybox);

				break;
		}
	}

	private render(dt:number)
	{
		this._view.camera.rotationY += 0.01 * dt;
		this._view.render();
	}

	public onResize(event:UIEvent = null)
	{
		this._view.y = 0;
		this._view.x = 0;
		this._view.width = window.innerWidth;
		this._view.height = window.innerHeight;
	}
}