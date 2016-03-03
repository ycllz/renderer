import ShaderBase					= require("awayjs-renderergl/lib/shaders/ShaderBase");
import ShaderRegisterCache			= require("awayjs-renderergl/lib/shaders/ShaderRegisterCache");
import ShaderRegisterElement		= require("awayjs-renderergl/lib/shaders/ShaderRegisterElement");
import GL_TriangleElements			= require("awayjs-renderergl/lib/elements/GL_TriangleElements");
import ShaderRegisterData			= require("awayjs-renderergl/lib/shaders/ShaderRegisterData");

/**
 *
 * @class away.pool.GL_SkyboxElements
 */
class GL_SkyboxElements extends GL_TriangleElements
{
	public static vertexAttributesOffset:number = 1;

	public static _iIncludeDependencies(shader:ShaderBase)
	{
	}

	/**
	 * @inheritDoc
	 */
	public static _iGetVertexCode(shader:ShaderBase, registerCache:ShaderRegisterCache, sharedRegisters:ShaderRegisterData):string
	{
		return "mul vt0, va0, vc5\n" +
			"add vt0, vt0, vc4\n" +
			"m44 op, vt0, vc0\n";
	}

	public static _iGetFragmentCode(shader:ShaderBase, registerCache:ShaderRegisterCache, sharedRegisters:ShaderRegisterData):string
	{
		return "";
	}
}

export = GL_SkyboxElements;