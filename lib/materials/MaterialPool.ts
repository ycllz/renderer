import {IAssetClass, IAbstractionPool} from "@awayjs/core";

import {Stage} from "@awayjs/stage";

import {IMaterial} from "@awayjs/graphics";

import {IElementsClassGL} from "../elements/IElementsClassGL";

import {IMaterialClassGL} from "./IMaterialClassGL";
import {GL_MaterialBase} from "./GL_MaterialBase";

/**
 * @class away.pool.MaterialPool
 */
export class MaterialPool implements IAbstractionPool
{
	private static _abstractionClassPool:Object = new Object();

	private _abstractionPool:Object = new Object();
	private _elementsClass:IElementsClassGL;
	private _stage:Stage;
	private _materialClassGL:IMaterialClassGL;

	get stage():Stage
	{
		return this._stage;
	}

	/**
	 * //TODO
	 *
	 * @param materialClassGL
	 */
	constructor(elementsClass:IElementsClassGL, stage:Stage, materialClassGL:IMaterialClassGL = null)
	{
		this._elementsClass = elementsClass;
		this._stage = stage;
		this._materialClassGL = materialClassGL;
	}

	/**
	 * //TODO
	 *
	 * @param elementsOwner
	 * @returns IElements
	 */
	public getAbstraction(material:IMaterial):GL_MaterialBase
	{
		return (this._abstractionPool[material.id] || (this._abstractionPool[material.id] = new (<IMaterialClassGL> this._materialClassGL || MaterialPool._abstractionClassPool[material.assetType])(material, this._elementsClass, this)));
	}

	/**
	 * //TODO
	 *
	 * @param elementsOwner
	 */
	public clearAbstraction(material:IMaterial):void
	{
		delete this._abstractionPool[material.id];
	}

	/**
	 *
	 * @param imageObjectClass
	 */
	public static registerAbstraction(materialClassGL:IMaterialClassGL, assetClass:IAssetClass):void
	{
		MaterialPool._abstractionClassPool[assetClass.assetType] = materialClassGL;
	}
}