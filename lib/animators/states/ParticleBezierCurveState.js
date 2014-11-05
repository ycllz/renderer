var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var ContextGLVertexBufferFormat = require("awayjs-stagegl/lib/base/ContextGLVertexBufferFormat");
var ParticlePropertiesMode = require("awayjs-renderergl/lib/animators/data/ParticlePropertiesMode");
var ParticleStateBase = require("awayjs-renderergl/lib/animators/states/ParticleStateBase");
/**
 * ...
 */
var ParticleBezierCurveState = (function (_super) {
    __extends(ParticleBezierCurveState, _super);
    function ParticleBezierCurveState(animator, particleBezierCurveNode) {
        _super.call(this, animator, particleBezierCurveNode);
        this._particleBezierCurveNode = particleBezierCurveNode;
        this._controlPoint = this._particleBezierCurveNode._iControlPoint;
        this._endPoint = this._particleBezierCurveNode._iEndPoint;
    }
    Object.defineProperty(ParticleBezierCurveState.prototype, "controlPoint", {
        /**
         * Defines the default control point of the node, used when in global mode.
         */
        get: function () {
            return this._controlPoint;
        },
        set: function (value) {
            this._controlPoint = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParticleBezierCurveState.prototype, "endPoint", {
        /**
         * Defines the default end point of the node, used when in global mode.
         */
        get: function () {
            return this._endPoint;
        },
        set: function (value) {
            this._endPoint = value;
        },
        enumerable: true,
        configurable: true
    });
    ParticleBezierCurveState.prototype.setRenderState = function (stage, renderable, animationSubGeometry, animationRegisterCache, camera) {
        var controlIndex = animationRegisterCache.getRegisterIndex(this._pAnimationNode, ParticleBezierCurveState.BEZIER_CONTROL_INDEX);
        var endIndex = animationRegisterCache.getRegisterIndex(this._pAnimationNode, ParticleBezierCurveState.BEZIER_END_INDEX);
        if (this._particleBezierCurveNode.mode == ParticlePropertiesMode.LOCAL_STATIC) {
            animationSubGeometry.activateVertexBuffer(controlIndex, this._particleBezierCurveNode._iDataOffset, stage, ContextGLVertexBufferFormat.FLOAT_3);
            animationSubGeometry.activateVertexBuffer(endIndex, this._particleBezierCurveNode._iDataOffset + 3, stage, ContextGLVertexBufferFormat.FLOAT_3);
        }
        else {
            animationRegisterCache.setVertexConst(controlIndex, this._controlPoint.x, this._controlPoint.y, this._controlPoint.z);
            animationRegisterCache.setVertexConst(endIndex, this._endPoint.x, this._endPoint.y, this._endPoint.z);
        }
    };
    /** @private */
    ParticleBezierCurveState.BEZIER_CONTROL_INDEX = 0;
    /** @private */
    ParticleBezierCurveState.BEZIER_END_INDEX = 1;
    return ParticleBezierCurveState;
})(ParticleStateBase);
module.exports = ParticleBezierCurveState;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF3YXlqcy1yZW5kZXJlcmdsL2xpYi9hbmltYXRvcnMvc3RhdGVzL3BhcnRpY2xlYmV6aWVyY3VydmVzdGF0ZS50cyJdLCJuYW1lcyI6WyJQYXJ0aWNsZUJlemllckN1cnZlU3RhdGUiLCJQYXJ0aWNsZUJlemllckN1cnZlU3RhdGUuY29uc3RydWN0b3IiLCJQYXJ0aWNsZUJlemllckN1cnZlU3RhdGUuY29udHJvbFBvaW50IiwiUGFydGljbGVCZXppZXJDdXJ2ZVN0YXRlLmVuZFBvaW50IiwiUGFydGljbGVCZXppZXJDdXJ2ZVN0YXRlLnNldFJlbmRlclN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFLQSxJQUFPLDJCQUEyQixXQUFZLHFEQUFxRCxDQUFDLENBQUM7QUFLckcsSUFBTyxzQkFBc0IsV0FBYSw2REFBNkQsQ0FBQyxDQUFDO0FBRXpHLElBQU8saUJBQWlCLFdBQWMsMERBQTBELENBQUMsQ0FBQztBQUVsRyxBQUdBOztHQURHO0lBQ0csd0JBQXdCO0lBQVNBLFVBQWpDQSx3QkFBd0JBLFVBQTBCQTtJQXNDdkRBLFNBdENLQSx3QkFBd0JBLENBc0NqQkEsUUFBeUJBLEVBQUVBLHVCQUErQ0E7UUFFckZDLGtCQUFNQSxRQUFRQSxFQUFFQSx1QkFBdUJBLENBQUNBLENBQUNBO1FBRXpDQSxJQUFJQSxDQUFDQSx3QkFBd0JBLEdBQUdBLHVCQUF1QkEsQ0FBQ0E7UUFDeERBLElBQUlBLENBQUNBLGFBQWFBLEdBQUdBLElBQUlBLENBQUNBLHdCQUF3QkEsQ0FBQ0EsY0FBY0EsQ0FBQ0E7UUFDbEVBLElBQUlBLENBQUNBLFNBQVNBLEdBQUdBLElBQUlBLENBQUNBLHdCQUF3QkEsQ0FBQ0EsVUFBVUEsQ0FBQ0E7SUFDM0RBLENBQUNBO0lBOUJERCxzQkFBV0Esa0RBQVlBO1FBSHZCQTs7V0FFR0E7YUFDSEE7WUFFQ0UsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsYUFBYUEsQ0FBQ0E7UUFDM0JBLENBQUNBO2FBRURGLFVBQXdCQSxLQUFjQTtZQUVyQ0UsSUFBSUEsQ0FBQ0EsYUFBYUEsR0FBR0EsS0FBS0EsQ0FBQ0E7UUFDNUJBLENBQUNBOzs7T0FMQUY7SUFVREEsc0JBQVdBLDhDQUFRQTtRQUhuQkE7O1dBRUdBO2FBQ0hBO1lBRUNHLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBO1FBQ3ZCQSxDQUFDQTthQUVESCxVQUFvQkEsS0FBY0E7WUFFakNHLElBQUlBLENBQUNBLFNBQVNBLEdBQUdBLEtBQUtBLENBQUNBO1FBQ3hCQSxDQUFDQTs7O09BTEFIO0lBZ0JNQSxpREFBY0EsR0FBckJBLFVBQXNCQSxLQUFXQSxFQUFFQSxVQUF5QkEsRUFBRUEsb0JBQXlDQSxFQUFFQSxzQkFBNkNBLEVBQUVBLE1BQWFBO1FBRXBLSSxJQUFJQSxZQUFZQSxHQUFrQkEsc0JBQXNCQSxDQUFDQSxnQkFBZ0JBLENBQUNBLElBQUlBLENBQUNBLGVBQWVBLEVBQUVBLHdCQUF3QkEsQ0FBQ0Esb0JBQW9CQSxDQUFDQSxDQUFDQTtRQUMvSUEsSUFBSUEsUUFBUUEsR0FBa0JBLHNCQUFzQkEsQ0FBQ0EsZ0JBQWdCQSxDQUFDQSxJQUFJQSxDQUFDQSxlQUFlQSxFQUFFQSx3QkFBd0JBLENBQUNBLGdCQUFnQkEsQ0FBQ0EsQ0FBQ0E7UUFFdklBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLHdCQUF3QkEsQ0FBQ0EsSUFBSUEsSUFBSUEsc0JBQXNCQSxDQUFDQSxZQUFZQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUMvRUEsb0JBQW9CQSxDQUFDQSxvQkFBb0JBLENBQUNBLFlBQVlBLEVBQUVBLElBQUlBLENBQUNBLHdCQUF3QkEsQ0FBQ0EsWUFBWUEsRUFBRUEsS0FBS0EsRUFBRUEsMkJBQTJCQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQTtZQUNoSkEsb0JBQW9CQSxDQUFDQSxvQkFBb0JBLENBQUNBLFFBQVFBLEVBQUVBLElBQUlBLENBQUNBLHdCQUF3QkEsQ0FBQ0EsWUFBWUEsR0FBR0EsQ0FBQ0EsRUFBRUEsS0FBS0EsRUFBRUEsMkJBQTJCQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQTtRQUNqSkEsQ0FBQ0E7UUFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFDUEEsc0JBQXNCQSxDQUFDQSxjQUFjQSxDQUFDQSxZQUFZQSxFQUFFQSxJQUFJQSxDQUFDQSxhQUFhQSxDQUFDQSxDQUFDQSxFQUFFQSxJQUFJQSxDQUFDQSxhQUFhQSxDQUFDQSxDQUFDQSxFQUFFQSxJQUFJQSxDQUFDQSxhQUFhQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUN0SEEsc0JBQXNCQSxDQUFDQSxjQUFjQSxDQUFDQSxRQUFRQSxFQUFFQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxDQUFDQSxFQUFFQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxDQUFDQSxFQUFFQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUN2R0EsQ0FBQ0E7SUFDRkEsQ0FBQ0E7SUF6RERKLGVBQWVBO0lBQ0RBLDZDQUFvQkEsR0FBa0JBLENBQUNBLENBQUNBO0lBRXREQSxlQUFlQTtJQUNEQSx5Q0FBZ0JBLEdBQWtCQSxDQUFDQSxDQUFDQTtJQXNEbkRBLCtCQUFDQTtBQUFEQSxDQTVEQSxBQTREQ0EsRUE1RHNDLGlCQUFpQixFQTREdkQ7QUFFRCxBQUFrQyxpQkFBekIsd0JBQXdCLENBQUMiLCJmaWxlIjoiYW5pbWF0b3JzL3N0YXRlcy9QYXJ0aWNsZUJlemllckN1cnZlU3RhdGUuanMiLCJzb3VyY2VSb290IjoiLi4vIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZlY3RvcjNEXHRcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvZ2VvbS9WZWN0b3IzRFwiKTtcblxuaW1wb3J0IENhbWVyYVx0XHRcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWRpc3BsYXkvbGliL2VudGl0aWVzL0NhbWVyYVwiKTtcblxuaW1wb3J0IFN0YWdlXHRcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtc3RhZ2VnbC9saWIvYmFzZS9TdGFnZVwiKTtcbmltcG9ydCBDb250ZXh0R0xWZXJ0ZXhCdWZmZXJGb3JtYXRcdFx0PSByZXF1aXJlKFwiYXdheWpzLXN0YWdlZ2wvbGliL2Jhc2UvQ29udGV4dEdMVmVydGV4QnVmZmVyRm9ybWF0XCIpO1xuXG5pbXBvcnQgUGFydGljbGVBbmltYXRvclx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtcmVuZGVyZXJnbC9saWIvYW5pbWF0b3JzL1BhcnRpY2xlQW5pbWF0b3JcIik7XG5pbXBvcnQgQW5pbWF0aW9uUmVnaXN0ZXJDYWNoZVx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1yZW5kZXJlcmdsL2xpYi9hbmltYXRvcnMvZGF0YS9BbmltYXRpb25SZWdpc3RlckNhY2hlXCIpO1xuaW1wb3J0IEFuaW1hdGlvblN1Ykdlb21ldHJ5XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtcmVuZGVyZXJnbC9saWIvYW5pbWF0b3JzL2RhdGEvQW5pbWF0aW9uU3ViR2VvbWV0cnlcIik7XG5pbXBvcnQgUGFydGljbGVQcm9wZXJ0aWVzTW9kZVx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1yZW5kZXJlcmdsL2xpYi9hbmltYXRvcnMvZGF0YS9QYXJ0aWNsZVByb3BlcnRpZXNNb2RlXCIpO1xuaW1wb3J0IFBhcnRpY2xlQmV6aWVyQ3VydmVOb2RlXHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLXJlbmRlcmVyZ2wvbGliL2FuaW1hdG9ycy9ub2Rlcy9QYXJ0aWNsZUJlemllckN1cnZlTm9kZVwiKTtcbmltcG9ydCBQYXJ0aWNsZVN0YXRlQmFzZVx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLXJlbmRlcmVyZ2wvbGliL2FuaW1hdG9ycy9zdGF0ZXMvUGFydGljbGVTdGF0ZUJhc2VcIik7XG5pbXBvcnQgUmVuZGVyYWJsZUJhc2VcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLXJlbmRlcmVyZ2wvbGliL3Bvb2wvUmVuZGVyYWJsZUJhc2VcIik7XG4vKipcbiAqIC4uLlxuICovXG5jbGFzcyBQYXJ0aWNsZUJlemllckN1cnZlU3RhdGUgZXh0ZW5kcyBQYXJ0aWNsZVN0YXRlQmFzZVxue1xuXHQvKiogQHByaXZhdGUgKi9cblx0cHVibGljIHN0YXRpYyBCRVpJRVJfQ09OVFJPTF9JTkRFWDpudW1iZXIgLyppbnQqLyA9IDA7XG5cblx0LyoqIEBwcml2YXRlICovXG5cdHB1YmxpYyBzdGF0aWMgQkVaSUVSX0VORF9JTkRFWDpudW1iZXIgLyppbnQqLyA9IDE7XG5cblx0cHJpdmF0ZSBfcGFydGljbGVCZXppZXJDdXJ2ZU5vZGU6UGFydGljbGVCZXppZXJDdXJ2ZU5vZGU7XG5cdHByaXZhdGUgX2NvbnRyb2xQb2ludDpWZWN0b3IzRDtcblx0cHJpdmF0ZSBfZW5kUG9pbnQ6VmVjdG9yM0Q7XG5cblx0LyoqXG5cdCAqIERlZmluZXMgdGhlIGRlZmF1bHQgY29udHJvbCBwb2ludCBvZiB0aGUgbm9kZSwgdXNlZCB3aGVuIGluIGdsb2JhbCBtb2RlLlxuXHQgKi9cblx0cHVibGljIGdldCBjb250cm9sUG9pbnQoKTpWZWN0b3IzRFxuXHR7XG5cdFx0cmV0dXJuIHRoaXMuX2NvbnRyb2xQb2ludDtcblx0fVxuXG5cdHB1YmxpYyBzZXQgY29udHJvbFBvaW50KHZhbHVlOlZlY3RvcjNEKVxuXHR7XG5cdFx0dGhpcy5fY29udHJvbFBvaW50ID0gdmFsdWU7XG5cdH1cblxuXHQvKipcblx0ICogRGVmaW5lcyB0aGUgZGVmYXVsdCBlbmQgcG9pbnQgb2YgdGhlIG5vZGUsIHVzZWQgd2hlbiBpbiBnbG9iYWwgbW9kZS5cblx0ICovXG5cdHB1YmxpYyBnZXQgZW5kUG9pbnQoKTpWZWN0b3IzRFxuXHR7XG5cdFx0cmV0dXJuIHRoaXMuX2VuZFBvaW50O1xuXHR9XG5cblx0cHVibGljIHNldCBlbmRQb2ludCh2YWx1ZTpWZWN0b3IzRClcblx0e1xuXHRcdHRoaXMuX2VuZFBvaW50ID0gdmFsdWU7XG5cdH1cblxuXHRjb25zdHJ1Y3RvcihhbmltYXRvcjpQYXJ0aWNsZUFuaW1hdG9yLCBwYXJ0aWNsZUJlemllckN1cnZlTm9kZTpQYXJ0aWNsZUJlemllckN1cnZlTm9kZSlcblx0e1xuXHRcdHN1cGVyKGFuaW1hdG9yLCBwYXJ0aWNsZUJlemllckN1cnZlTm9kZSk7XG5cblx0XHR0aGlzLl9wYXJ0aWNsZUJlemllckN1cnZlTm9kZSA9IHBhcnRpY2xlQmV6aWVyQ3VydmVOb2RlO1xuXHRcdHRoaXMuX2NvbnRyb2xQb2ludCA9IHRoaXMuX3BhcnRpY2xlQmV6aWVyQ3VydmVOb2RlLl9pQ29udHJvbFBvaW50O1xuXHRcdHRoaXMuX2VuZFBvaW50ID0gdGhpcy5fcGFydGljbGVCZXppZXJDdXJ2ZU5vZGUuX2lFbmRQb2ludDtcblx0fVxuXG5cdHB1YmxpYyBzZXRSZW5kZXJTdGF0ZShzdGFnZTpTdGFnZSwgcmVuZGVyYWJsZTpSZW5kZXJhYmxlQmFzZSwgYW5pbWF0aW9uU3ViR2VvbWV0cnk6QW5pbWF0aW9uU3ViR2VvbWV0cnksIGFuaW1hdGlvblJlZ2lzdGVyQ2FjaGU6QW5pbWF0aW9uUmVnaXN0ZXJDYWNoZSwgY2FtZXJhOkNhbWVyYSlcblx0e1xuXHRcdHZhciBjb250cm9sSW5kZXg6bnVtYmVyIC8qaW50Ki8gPSBhbmltYXRpb25SZWdpc3RlckNhY2hlLmdldFJlZ2lzdGVySW5kZXgodGhpcy5fcEFuaW1hdGlvbk5vZGUsIFBhcnRpY2xlQmV6aWVyQ3VydmVTdGF0ZS5CRVpJRVJfQ09OVFJPTF9JTkRFWCk7XG5cdFx0dmFyIGVuZEluZGV4Om51bWJlciAvKmludCovID0gYW5pbWF0aW9uUmVnaXN0ZXJDYWNoZS5nZXRSZWdpc3RlckluZGV4KHRoaXMuX3BBbmltYXRpb25Ob2RlLCBQYXJ0aWNsZUJlemllckN1cnZlU3RhdGUuQkVaSUVSX0VORF9JTkRFWCk7XG5cblx0XHRpZiAodGhpcy5fcGFydGljbGVCZXppZXJDdXJ2ZU5vZGUubW9kZSA9PSBQYXJ0aWNsZVByb3BlcnRpZXNNb2RlLkxPQ0FMX1NUQVRJQykge1xuXHRcdFx0YW5pbWF0aW9uU3ViR2VvbWV0cnkuYWN0aXZhdGVWZXJ0ZXhCdWZmZXIoY29udHJvbEluZGV4LCB0aGlzLl9wYXJ0aWNsZUJlemllckN1cnZlTm9kZS5faURhdGFPZmZzZXQsIHN0YWdlLCBDb250ZXh0R0xWZXJ0ZXhCdWZmZXJGb3JtYXQuRkxPQVRfMyk7XG5cdFx0XHRhbmltYXRpb25TdWJHZW9tZXRyeS5hY3RpdmF0ZVZlcnRleEJ1ZmZlcihlbmRJbmRleCwgdGhpcy5fcGFydGljbGVCZXppZXJDdXJ2ZU5vZGUuX2lEYXRhT2Zmc2V0ICsgMywgc3RhZ2UsIENvbnRleHRHTFZlcnRleEJ1ZmZlckZvcm1hdC5GTE9BVF8zKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0YW5pbWF0aW9uUmVnaXN0ZXJDYWNoZS5zZXRWZXJ0ZXhDb25zdChjb250cm9sSW5kZXgsIHRoaXMuX2NvbnRyb2xQb2ludC54LCB0aGlzLl9jb250cm9sUG9pbnQueSwgdGhpcy5fY29udHJvbFBvaW50LnopO1xuXHRcdFx0YW5pbWF0aW9uUmVnaXN0ZXJDYWNoZS5zZXRWZXJ0ZXhDb25zdChlbmRJbmRleCwgdGhpcy5fZW5kUG9pbnQueCwgdGhpcy5fZW5kUG9pbnQueSwgdGhpcy5fZW5kUG9pbnQueik7XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCA9IFBhcnRpY2xlQmV6aWVyQ3VydmVTdGF0ZTsiXX0=