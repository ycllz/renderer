import Image2D						= require("awayjs-core/lib/data/Image2D");

import Stage						= require("awayjs-stagegl/lib/base/Stage");

import Filter3DHBlurTask			= require("awayjs-renderergl/lib/filters/tasks/Filter3DHBlurTask");
import Filter3DVBlurTask			= require("awayjs-renderergl/lib/filters/tasks/Filter3DVBlurTask");
import Filter3DBase					= require("awayjs-renderergl/lib/filters/Filter3DBase");

class BlurFilter3D extends Filter3DBase
{
	private _hBlurTask:Filter3DHBlurTask;
	private _vBlurTask:Filter3DVBlurTask;
	
	/**
	 * Creates a new BlurFilter3D object
	 * @param blurX The amount of horizontal blur to apply
	 * @param blurY The amount of vertical blur to apply
	 * @param stepSize The distance between samples. Set to -1 to autodetect with acceptable quality.
	 */
	constructor(blurX:number = 3, blurY:number = 3, stepSize:number = -1)
	{
		super();

		this._hBlurTask = new Filter3DHBlurTask(blurX, stepSize);
		this._vBlurTask = new Filter3DVBlurTask(blurY, stepSize);

		this.addTask(this._hBlurTask);
		this.addTask(this._vBlurTask);
	}
	
	public get blurX():number
	{
		return this._hBlurTask.amount;
	}
	
	public set blurX(value:number)
	{
		this._hBlurTask.amount = value;
	}
	
	public get blurY():number
	{
		return this._vBlurTask.amount;
	}
	
	public set blurY(value:number)
	{
		this._vBlurTask.amount = value;
	}
	
	/**
	 * The distance between two blur samples. Set to -1 to autodetect with acceptable quality (default value).
	 * Higher values provide better performance at the cost of reduces quality.
	 */
	public get stepSize():number
	{
		return this._hBlurTask.stepSize;
	}
	
	public set stepSize(value:number)
	{
		this._hBlurTask.stepSize = value;
		this._vBlurTask.stepSize = value;
	}
	
	public setRenderTargets(mainTarget:Image2D, stage:Stage)
	{
		this._hBlurTask.target = this._vBlurTask.getMainInputTexture(stage);
		super.setRenderTargets(mainTarget, stage);
	}
}

export = BlurFilter3D;