import {AttributesBuffer} from "@awayjs/core";

import {IEntity, TriangleElements} from "@awayjs/graphics";

import {Skybox} from "@awayjs/scene";

import {GL_SkyboxElements} from "../elements/GL_SkyboxElements";
import {GL_MaterialBase} from "../materials/GL_MaterialBase";
import {ShaderBase} from "../shaders/ShaderBase";

import {RendererBase} from "../RendererBase";

import {GL_RenderableBase} from "./GL_RenderableBase";
import {RenderablePool} from "./RenderablePool";

/**
 * @class away.pool.GL_SkyboxRenderable
 */
export class GL_SkyboxRenderable extends GL_RenderableBase
{
	/**
	 *
	 */
	private static _elementsGL:GL_SkyboxElements;

	/**
	 *
	 */
	private _skybox:Skybox;

	/**
	 * //TODO
	 *
	 * @param pool
	 * @param skybox
	 */
	constructor(skybox:Skybox, entity:IEntity, renderer:RendererBase, pool:RenderablePool)
	{
		super(skybox, entity, renderer, pool);

		this._skybox = skybox;
	}

	/**
	 * //TODO
	 *
	 * @returns {away.base.TriangleElements}
	 * @private
	 */
	public _pGetElements():GL_SkyboxElements
	{
		var elementsGL:GL_SkyboxElements = GL_SkyboxRenderable._elementsGL;

		if (!elementsGL) {
			var elements:TriangleElements = new TriangleElements(new AttributesBuffer(11, 4));
			elements.autoDeriveNormals = false;
			elements.autoDeriveTangents = false;
			elements.setIndices(Array<number>(0, 1, 2, 2, 3, 0, 6, 5, 4, 4, 7, 6, 2, 6, 7, 7, 3, 2, 4, 5, 1, 1, 0, 4, 4, 0, 3, 3, 7, 4, 2, 1, 5, 5, 6, 2));
			elements.setPositions(Array<number>(-1, 1, -1, 1, 1, -1, 1, 1, 1, -1, 1, 1, -1, -1, -1, 1, -1, -1, 1, -1, 1, -1, -1, 1));

			elementsGL = GL_SkyboxRenderable._elementsGL = new GL_SkyboxElements(elements, this._stage);
		}

		return elementsGL;
	}

	public _pGetMaterial():GL_MaterialBase
	{
		return this._renderer.getMaterialPool(this.elementsGL).getAbstraction(this._skybox);
	}

	public static _iIncludeDependencies(shader:ShaderBase):void
	{

	}
}