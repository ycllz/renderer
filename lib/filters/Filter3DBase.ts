import Image2D						= require("awayjs-core/lib/data/Image2D");

import Camera						= require("awayjs-display/lib/entities/Camera");

import Stage						= require("awayjs-stagegl/lib/base/Stage");

import Filter3DTaskBase				= require("awayjs-renderergl/lib/filters/tasks/Filter3DTaskBase");

class Filter3DBase
{
	private _tasks:Array<Filter3DTaskBase>;
	private _requireDepthRender:boolean;
	private _textureWidth:number;
	private _textureHeight:number;

	constructor()
	{
		this._tasks = new Array<Filter3DTaskBase>();
	}

	public get requireDepthRender():boolean
	{
		return this._requireDepthRender;
	}

	public addTask(filter:Filter3DTaskBase)
	{
		this._tasks.push(filter);

		if (this._requireDepthRender == null)
			this._requireDepthRender = filter.requireDepthRender;
	}

	public get tasks():Filter3DTaskBase[]
	{
		return this._tasks;
	}

	public getMainInputTexture(stage:Stage):Image2D
	{
		return this._tasks[0].getMainInputTexture(stage);
	}

	public get textureWidth():number
	{
		return this._textureWidth;
	}

	public set textureWidth(value:number)
	{
		this._textureWidth = value;

		for (var i:number = 0; i < this._tasks.length; ++i)
			this._tasks[i].textureWidth = value;
	}

	public get textureHeight():number
	{
		return this._textureHeight;
	}

	public set textureHeight(value:number)
	{
		this._textureHeight = value;

		for (var i:number = 0; i < this._tasks.length; ++i)
			this._tasks[i].textureHeight = value;
	}

	// link up the filters correctly with the next filter
	public setRenderTargets(mainTarget:Image2D, stage:Stage)
	{
		this._tasks[this._tasks.length - 1].target = mainTarget;
	}

	public dispose()
	{
		for (var i:number = 0; i < this._tasks.length; ++i)
			this._tasks[i].dispose();
	}

	public update(stage:Stage, camera:Camera)
	{

	}
}

export = Filter3DBase;