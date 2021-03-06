import AnimationNodeBase				= require("awayjs-display/lib/animators/nodes/AnimationNodeBase");

import AnimatorBase						= require("awayjs-renderergl/lib/animators/AnimatorBase");

import SkeletonDifferenceState			= require("awayjs-renderergl/lib/animators/states/SkeletonDifferenceState");

/**
 * A skeleton animation node that uses a difference input pose with a base input pose to blend a linearly interpolated output of a skeleton pose.
 */
class SkeletonDifferenceNode extends AnimationNodeBase
{
	/**
	 * Defines a base input node to use for the blended output.
	 */
	public baseInput:AnimationNodeBase;

	/**
	 * Defines a difference input node to use for the blended output.
	 */
	public differenceInput:AnimationNodeBase;

	/**
	 * Creates a new <code>SkeletonAdditiveNode</code> object.
	 */
	constructor()
	{
		super();

		this._pStateClass = SkeletonDifferenceState;
	}

	/**
	 * @inheritDoc
	 */
	public getAnimationState(animator:AnimatorBase):SkeletonDifferenceState
	{
		return <SkeletonDifferenceState> animator.getAnimationState(this);
	}
}

export = SkeletonDifferenceNode