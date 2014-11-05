var RequestAnimationFrame = require("awayjs-core/lib/utils/RequestAnimationFrame");
var Debug = require("awayjs-core/lib/utils/Debug");
var View = require("awayjs-display/lib/containers/View");
var PointLight = require("awayjs-display/lib/entities/PointLight");
var PrimitiveTorusPrefab = require("awayjs-display/lib/prefabs/PrimitiveTorusPrefab");
var DefaultRenderer = require("awayjs-renderergl/lib/DefaultRenderer");
var TriangleBasicMaterial = require("awayjs-renderergl/lib/materials/TriangleBasicMaterial");
var View3DTest = (function () {
    function View3DTest() {
        var _this = this;
        Debug.THROW_ERRORS = false;
        Debug.LOG_PI_ERRORS = false;
        this.meshes = new Array();
        this.light = new PointLight();
        this.view = new View(new DefaultRenderer());
        this.view.camera.z = 0;
        this.view.backgroundColor = 0x776655;
        this.torus = new PrimitiveTorusPrefab(150, 50, 32, 32, false);
        var l = 10;
        var radius = 1000;
        var matB = new TriangleBasicMaterial();
        this.torus.material = matB;
        for (var c = 0; c < l; c++) {
            var t = Math.PI * 2 * c / l;
            var mesh = this.torus.getNewObject();
            mesh.x = Math.cos(t) * radius;
            mesh.y = 0;
            mesh.z = Math.sin(t) * radius;
            this.view.scene.addChild(mesh);
            this.meshes.push(mesh);
        }
        this.view.scene.addChild(this.light);
        this.raf = new RequestAnimationFrame(this.tick, this);
        this.raf.start();
        this.resize(null);
        window.onresize = function (e) { return _this.resize(null); };
    }
    View3DTest.prototype.tick = function (e) {
        for (var c = 0; c < this.meshes.length; c++)
            this.meshes[c].rotationY += 2;
        this.view.camera.rotationY += .5;
        this.view.render();
    };
    View3DTest.prototype.resize = function (e) {
        this.view.y = 0;
        this.view.x = 0;
        this.view.width = window.innerWidth;
        this.view.height = window.innerHeight;
    };
    return View3DTest;
})();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhaW5lcnMvdmlldzNkdGVzdC50cyJdLCJuYW1lcyI6WyJWaWV3M0RUZXN0IiwiVmlldzNEVGVzdC5jb25zdHJ1Y3RvciIsIlZpZXczRFRlc3QudGljayIsIlZpZXczRFRlc3QucmVzaXplIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFPLHFCQUFxQixXQUFZLDZDQUE2QyxDQUFDLENBQUM7QUFDdkYsSUFBTyxLQUFLLFdBQWdCLDZCQUE2QixDQUFDLENBQUM7QUFFM0QsSUFBTyxJQUFJLFdBQWlCLG9DQUFvQyxDQUFDLENBQUM7QUFFbEUsSUFBTyxVQUFVLFdBQWUsd0NBQXdDLENBQUMsQ0FBQztBQUMxRSxJQUFPLG9CQUFvQixXQUFhLGlEQUFpRCxDQUFDLENBQUM7QUFFM0YsSUFBTyxlQUFlLFdBQWMsdUNBQXVDLENBQUMsQ0FBQztBQUM3RSxJQUFPLHFCQUFxQixXQUFZLHVEQUF1RCxDQUFDLENBQUM7QUFFakcsSUFBTSxVQUFVO0lBVWZBLFNBVktBLFVBQVVBO1FBQWhCQyxpQkF1RUNBO1FBMURDQSxLQUFLQSxDQUFDQSxZQUFZQSxHQUFHQSxLQUFLQSxDQUFDQTtRQUMzQkEsS0FBS0EsQ0FBQ0EsYUFBYUEsR0FBR0EsS0FBS0EsQ0FBQ0E7UUFFNUJBLElBQUlBLENBQUNBLE1BQU1BLEdBQUdBLElBQUlBLEtBQUtBLEVBQVFBLENBQUNBO1FBQ2hDQSxJQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxJQUFJQSxVQUFVQSxFQUFFQSxDQUFDQTtRQUM5QkEsSUFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsSUFBSUEsSUFBSUEsQ0FBQ0EsSUFBSUEsZUFBZUEsRUFBRUEsQ0FBQ0EsQ0FBQUE7UUFDM0NBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO1FBQ3ZCQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxlQUFlQSxHQUFHQSxRQUFRQSxDQUFDQTtRQUNyQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsR0FBR0Es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SUFBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsTUFBTUEsQ0FBQ0EsVUFBVUEsQ0FBQ0E7UUFDcENBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLEdBQUdBLE1BQU1BLENBQUNBLFdBQVdBLENBQUNBO0lBQ3ZDQSxDQUFDQTtJQUNGSCxpQkFBQ0E7QUFBREEsQ0F2RUEsQUF1RUNBLElBQUEiLCJmaWxlIjoiY29udGFpbmVycy9WaWV3M0RUZXN0LmpzIiwic291cmNlUm9vdCI6Ii4vdGVzdHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVxdWVzdEFuaW1hdGlvbkZyYW1lXHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi91dGlscy9SZXF1ZXN0QW5pbWF0aW9uRnJhbWVcIik7XG5pbXBvcnQgRGVidWdcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvdXRpbHMvRGVidWdcIik7XG5cbmltcG9ydCBWaWV3XHRcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtZGlzcGxheS9saWIvY29udGFpbmVycy9WaWV3XCIpO1xuaW1wb3J0IE1lc2hcdFx0XHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1kaXNwbGF5L2xpYi9lbnRpdGllcy9NZXNoXCIpO1xuaW1wb3J0IFBvaW50TGlnaHRcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWRpc3BsYXkvbGliL2VudGl0aWVzL1BvaW50TGlnaHRcIik7XG5pbXBvcnQgUHJpbWl0aXZlVG9ydXNQcmVmYWJcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtZGlzcGxheS9saWIvcHJlZmFicy9QcmltaXRpdmVUb3J1c1ByZWZhYlwiKTtcblxuaW1wb3J0IERlZmF1bHRSZW5kZXJlclx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLXJlbmRlcmVyZ2wvbGliL0RlZmF1bHRSZW5kZXJlclwiKTtcbmltcG9ydCBUcmlhbmdsZUJhc2ljTWF0ZXJpYWxcdFx0PSByZXF1aXJlKFwiYXdheWpzLXJlbmRlcmVyZ2wvbGliL21hdGVyaWFscy9UcmlhbmdsZUJhc2ljTWF0ZXJpYWxcIik7XG5cbmNsYXNzIFZpZXczRFRlc3RcbntcblxuXHRwcml2YXRlIHZpZXc6Vmlldztcblx0cHJpdmF0ZSB0b3J1czpQcmltaXRpdmVUb3J1c1ByZWZhYjtcblxuXHRwcml2YXRlIGxpZ2h0OlBvaW50TGlnaHQ7XG5cdHByaXZhdGUgcmFmOlJlcXVlc3RBbmltYXRpb25GcmFtZTtcblx0cHJpdmF0ZSBtZXNoZXM6QXJyYXk8TWVzaD47XG5cblx0Y29uc3RydWN0b3IoKVxuXHR7XG5cblx0XHREZWJ1Zy5USFJPV19FUlJPUlMgPSBmYWxzZTtcblx0XHREZWJ1Zy5MT0dfUElfRVJST1JTID0gZmFsc2U7XG5cblx0XHR0aGlzLm1lc2hlcyA9IG5ldyBBcnJheTxNZXNoPigpO1xuXHRcdHRoaXMubGlnaHQgPSBuZXcgUG9pbnRMaWdodCgpO1xuXHRcdHRoaXMudmlldyA9IG5ldyBWaWV3KG5ldyBEZWZhdWx0UmVuZGVyZXIoKSlcblx0XHR0aGlzLnZpZXcuY2FtZXJhLnogPSAwO1xuXHRcdHRoaXMudmlldy5iYWNrZ3JvdW5kQ29sb3IgPSAweDc3NjY1NTtcblx0XHR0aGlzLnRvcnVzID0gbmV3IFByaW1pdGl2ZVRvcnVzUHJlZmFiKDE1MCAsIDUwICwgMzIgLCAzMiAsIGZhbHNlKTtcblxuXHRcdHZhciBsOm51bWJlciAgICAgICAgPSAxMDtcblx0XHR2YXIgcmFkaXVzOm51bWJlciAgICAgICAgPSAxMDAwO1xuXHRcdHZhciBtYXRCOlRyaWFuZ2xlQmFzaWNNYXRlcmlhbCA9IG5ldyBUcmlhbmdsZUJhc2ljTWF0ZXJpYWwoKTtcblxuXHRcdHRoaXMudG9ydXMubWF0ZXJpYWwgPSBtYXRCO1xuXG5cdFx0Zm9yICh2YXIgYzpudW1iZXIgPSAwOyBjIDwgbDsgYysrKSB7XG5cblx0XHRcdHZhciB0Om51bWJlcj1NYXRoLlBJICogMiAqIGMgLyBsO1xuXG5cdFx0XHR2YXIgbWVzaDpNZXNoID0gPE1lc2g+IHRoaXMudG9ydXMuZ2V0TmV3T2JqZWN0KCk7XG5cdFx0XHRtZXNoLnggPSBNYXRoLmNvcyh0KSpyYWRpdXM7XG5cdFx0XHRtZXNoLnkgPSAwO1xuXHRcdFx0bWVzaC56ID0gTWF0aC5zaW4odCkqcmFkaXVzO1xuXG5cdFx0XHR0aGlzLnZpZXcuc2NlbmUuYWRkQ2hpbGQobWVzaCk7XG5cdFx0XHR0aGlzLm1lc2hlcy5wdXNoKG1lc2gpO1xuXG5cdFx0fVxuXG5cdFx0dGhpcy52aWV3LnNjZW5lLmFkZENoaWxkKHRoaXMubGlnaHQpO1xuXG5cdFx0dGhpcy5yYWYgPSBuZXcgUmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudGljayAsIHRoaXMpO1xuXHRcdHRoaXMucmFmLnN0YXJ0KCk7XG5cdFx0dGhpcy5yZXNpemUoIG51bGwgKTtcblxuXHRcdHdpbmRvdy5vbnJlc2l6ZSA9IChlKSA9PiB0aGlzLnJlc2l6ZShudWxsKTtcblxuXHR9XG5cblx0cHJpdmF0ZSB0aWNrKGUpXG5cdHtcblxuXHRcdGZvciAodmFyIGM6bnVtYmVyID0gMDsgYyA8IHRoaXMubWVzaGVzLmxlbmd0aDsgYysrKVxuXHRcdFx0dGhpcy5tZXNoZXNbY10ucm90YXRpb25ZICs9IDI7XG5cblx0XHR0aGlzLnZpZXcuY2FtZXJhLnJvdGF0aW9uWSArPSAuNTtcblx0XHR0aGlzLnZpZXcucmVuZGVyKCk7XG5cdH1cblxuXHRwdWJsaWMgcmVzaXplKGUpXG5cdHtcblx0XHR0aGlzLnZpZXcueSA9IDA7XG5cdFx0dGhpcy52aWV3LnggPSAwO1xuXG5cdFx0dGhpcy52aWV3LndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG5cdFx0dGhpcy52aWV3LmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblx0fVxufSJdfQ==