/**
 * Options for setting the animation mode of a vertex animator object.
 *
 * @see away.animators.VertexAnimator
 */
var VertexAnimationMode = (function () {
    function VertexAnimationMode() {
    }
    /**
     * Animation mode that adds all outputs from active vertex animation state to form the current vertex animation pose.
     */
    VertexAnimationMode.ADDITIVE = "additive";
    /**
     * Animation mode that picks the output from a single vertex animation state to form the current vertex animation pose.
     */
    VertexAnimationMode.ABSOLUTE = "absolute";
    return VertexAnimationMode;
})();
module.exports = VertexAnimationMode;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF3YXlqcy1yZW5kZXJlcmdsL2xpYi9hbmltYXRvcnMvZGF0YS92ZXJ0ZXhhbmltYXRpb25tb2RlLnRzIl0sIm5hbWVzIjpbIlZlcnRleEFuaW1hdGlvbk1vZGUiLCJWZXJ0ZXhBbmltYXRpb25Nb2RlLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiQUFBQSxBQUtBOzs7O0dBREc7SUFDRyxtQkFBbUI7SUFBekJBLFNBQU1BLG1CQUFtQkE7SUFXekJDLENBQUNBO0lBVEFEOztPQUVHQTtJQUNXQSw0QkFBUUEsR0FBVUEsVUFBVUEsQ0FBQ0E7SUFFM0NBOztPQUVHQTtJQUNXQSw0QkFBUUEsR0FBVUEsVUFBVUEsQ0FBQ0E7SUFDNUNBLDBCQUFDQTtBQUFEQSxDQVhBLEFBV0NBLElBQUE7QUFFRCxBQUE2QixpQkFBcEIsbUJBQW1CLENBQUMiLCJmaWxlIjoiYW5pbWF0b3JzL2RhdGEvVmVydGV4QW5pbWF0aW9uTW9kZS5qcyIsInNvdXJjZVJvb3QiOiIuLi8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIE9wdGlvbnMgZm9yIHNldHRpbmcgdGhlIGFuaW1hdGlvbiBtb2RlIG9mIGEgdmVydGV4IGFuaW1hdG9yIG9iamVjdC5cbiAqXG4gKiBAc2VlIGF3YXkuYW5pbWF0b3JzLlZlcnRleEFuaW1hdG9yXG4gKi9cbmNsYXNzIFZlcnRleEFuaW1hdGlvbk1vZGVcbntcblx0LyoqXG5cdCAqIEFuaW1hdGlvbiBtb2RlIHRoYXQgYWRkcyBhbGwgb3V0cHV0cyBmcm9tIGFjdGl2ZSB2ZXJ0ZXggYW5pbWF0aW9uIHN0YXRlIHRvIGZvcm0gdGhlIGN1cnJlbnQgdmVydGV4IGFuaW1hdGlvbiBwb3NlLlxuXHQgKi9cblx0cHVibGljIHN0YXRpYyBBRERJVElWRTpzdHJpbmcgPSBcImFkZGl0aXZlXCI7XG5cblx0LyoqXG5cdCAqIEFuaW1hdGlvbiBtb2RlIHRoYXQgcGlja3MgdGhlIG91dHB1dCBmcm9tIGEgc2luZ2xlIHZlcnRleCBhbmltYXRpb24gc3RhdGUgdG8gZm9ybSB0aGUgY3VycmVudCB2ZXJ0ZXggYW5pbWF0aW9uIHBvc2UuXG5cdCAqL1xuXHRwdWJsaWMgc3RhdGljIEFCU09MVVRFOnN0cmluZyA9IFwiYWJzb2x1dGVcIjtcbn1cblxuZXhwb3J0ID0gVmVydGV4QW5pbWF0aW9uTW9kZTsiXX0=