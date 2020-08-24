(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"DD_CE_300x250_atlas_P_1", frames: [[0,0,250,247]]},
		{name:"DD_CE_300x250_atlas_NP_1", frames: [[0,0,300,600]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CE300x600bkgd15 = function() {
	this.initialize(ss["DD_CE_300x250_atlas_NP_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Pinwheel = function() {
	this.initialize(ss["DD_CE_300x250_atlas_P_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.pinwheel_stick = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F84984").s().p("Agxf8MAAAg/2IBjAAMAAAA/2g");
	this.shape.setTransform(-0.025,-204.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pinwheel_stick, new cjs.Rectangle(-5,-408.7,10,408.7), null);


(lib.pinwheel = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Pinwheel();
	this.instance.setTransform(-125,-123.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pinwheel, new cjs.Rectangle(-125,-123.5,250,247), null);


(lib.HEAD1shad = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5E4788").s().p("EhE9gReQhahYAAiAIAAgCQAAiABbhZQBJhHBigPIkhiQID7pTIB8AAQjsjJgXgWQhZhXAAiDIAAgCQAAiCBZhYQBUhVB/gEIkZiMIAApPIHbAAIB1A6IAQgPQA/g1BpAAQCSAABhBOIAvAYIAAhcIIFAAIBMAmIAAgmICkAAIAAB4IBsA2IAAiuICtAAICNDlICMjlICtAAID/B/IA3iDICdAAIDJBkIAAhgIIFAAIBIAkIAAgkIHbAAMBJ1BJ8Mg9xAu1gEglXg4UIgCgDIAAACIACABgEgQ6g5aIAAgqIhSAAg");
	this.shape.setTransform(0,-387.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD1shad, new cjs.Rectangle(-453.1,-774,906.2,774), null);


(lib.HEADEndshad = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5E4788").s().p("AmGPnI8P7RIAAj4IBFAAIAgAgIAAggIDZAAIAZAYIAAgYIBGAAIAmAmQAGgLAKgJQAbgWAsAAQA9AAApAgICVCVIBLizIBCAAIDkDjIAAjhIB/AAQAtAAAXAWIA6A6IAAhQIB2AAQA2AAAbAaIA4A5IAAhTIDIAAIAlAlIAAglIDIAAIAiAiIAAgiIDWAAIAkAjIAAgjIDIAAIcPbRIABD4g");
	this.shape.setTransform(0.025,-99.925);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEADEndshad, new cjs.Rectangle(-219.8,-199.8,439.70000000000005,199.8), null);


(lib.HEAD_MSshad = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5E4788").s().p("Egu/gU5IAAmrIB9AAIB/B/IAQgbIgBgBIAkg6IABgCIADgFIAAABIAWgjIB+AAIBhBhIBDAAIBiBhIAehhIB4AAIAfAfQABg8ArglQAugnBMAAQBpAABGA5IA/A+IAAgOIB0AAIAVAWQAigeArAAQBDAAAcA2QAug2BAAAQA1AAAeAgIBdBdIAAh1IAbAAIgegeIAAhWIB4AAIBCBCIAAhCIBzAAICECEQAmgYAyAAQBQAAAtA2QARAVaNaIIaLaFMgqxAArgAmW4xQgOgPAAgVQAAgVAOgPQAPgPAVAAQAWAAAOAPMA0OAz5IhABOg");
	this.shape.setTransform(0,-178.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD_MSshad, new cjs.Rectangle(-300.7,-356.7,601.5,356.7), null);


(lib.DeltaDentalLogo_NoBox_Whiteai = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Delta Dental Logo_No Box_White.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnFB/IBXj5IBTAAIBZD4IhUAAIgriAIgBAAIgpCBgAonB/IAAioIgxAAIAAhRIC/AAIAABRIgzAAIAACogArdB/IAAj5IBaAAIAACoIBMAAIAABRgAuVB/IAAj5ICoAAIAABEIhMAAIAAAYIBFAAIAABAIhFAAIAAAYIBOAAIAABFgAyNB/IAAj5IBdAAQBDAAAmAeQArAhAABAQgBA4giAhQgjAhg3AAgAwyA0IAGAAQAYAAAOgLQAPgMAAgYQAAgxg1AAIgGAAgAPmB7IAAj4IBcAAIAACoIBLAAIAABQgALZB7IBXj4IBSgBIBZD5IhTAAIgsiBIgBABIgnCAgAHgB7IhGhyIABByIheAAIAAj4IBWAAIBHB3IAAh4IBcABIAAD4gACIB7IAAj4ICnAAIAABEIhMAAIAAAYIBFAAIAAA/IhFAAIAAAZIBPAAIAABEgAh0B7IAAj4IBdAAQBCAAAlAdQArAhAABBQAAA3gjAhQgjAhg2AAgAgZAwIAFAAQAXAAAOgLQAPgMAAgXQABgxg1AAIgFAAgAJyB7IAAinIgxgBIAAhRIC+AAIAABRIgyABIAACng");
	this.shape.setTransform(165.15,20.825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiLCmIgzheIBZiWIBdAAIg1hXIBpAAICSDzIg0BYgAhUBLICpAAIhZiUg");
	this.shape_1.setTransform(19.05,16.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,281.7,33.4);


(lib.CTA = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5E4788").s().p("Ag5BNIAAiZIByAAIAAAYIhXAAIAAAoIBNAAIAAAXIhNAAIAAAqIBYAAIAAAYg");
	this.shape.setTransform(80.65,24.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5E4788").s().p("Ag4BNIAAiZIBxAAIAAAYIhWAAIAAAoIBLAAIAAAXIhLAAIAAAqIBXAAIAAAYg");
	this.shape_1.setTransform(65.95,24.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5E4788").s().p("Ag7A2IARgTQAXAUAYAAQANAAAIgFQAGgGAAgIIAAgBQABgIgHgFQgHgFgUgFQgbgHgLgHQgNgLAAgUIAAgBQgBgTAPgMQAPgNAXAAQAfAAAYATIgPAVQgUgQgUAAQgMAAgGAFQgIAFABAIIAAAAQAAAJAHAGQAIAEAVAGQAZAGALAJQAMAKAAATIAAAAQAAAWgOAMQgPAMgaAAQgjAAgcgZg");
	this.shape_2.setTransform(51.05,24.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5E4788").s().p("Ag5A4QgXgWABgiIAAAAQgBggAXgXQAYgXAhgBQAjAAAXAYQAWAXABAgIAAAAQgBAhgWAXQgYAYgigBQgiAAgXgXgAgkgmQgPAQAAAWIAAAAQAAAXAPAPQAPARAVgBQAXAAAPgPQAOgQAAgXIAAAAQAAgWgOgPQgQgRgWAAQgWAAgOAQg");
	this.shape_3.setTransform(28.2,24.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5E4788").s().p("AgNBNIAAiAIgwAAIAAgZIB7AAIAAAZIgwAAIAACAg");
	this.shape_4.setTransform(12.575,24.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5E4788").s().p("AAtBNIhVhsIAABsIgaAAIAAiZIAZAAIBRBpIAAhpIAbAAIAACZg");
	this.shape_5.setTransform(-9.8,24.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5E4788").s().p("AgNBNIAAiZIAaAAIAACZg");
	this.shape_6.setTransform(-21.95,24.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5E4788").s().p("AAsBNIhThsIAABsIgbAAIAAiZIAZAAIBSBpIAAhpIAaAAIAACZg");
	this.shape_7.setTransform(-40.7,24.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#5E4788").s().p("AgxA5QgWgXAAgiIAAAAQAAggAWgXQAXgXAigBQAiABAYAUIgRAVQgTgRgXAAQgVAAgOARQgOAPgBAWIAAAAQAAAYAPAQQAOAPAXAAQAVAAAQgLIAAgdIgnAAIAAgXIBBAAIAAA/QgcAYgkAAQgiABgXgXg");
	this.shape_8.setTransform(-58.1,24.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#5E4788").s().p("AgMBNIAAiZIAaAAIAACZg");
	this.shape_9.setTransform(-70.05,24.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#5E4788").s().p("Ag7A2IARgTQAXAUAYAAQANAAAIgFQAGgGAAgIIAAgBQABgIgHgFQgHgFgUgFQgbgHgLgHQgNgLAAgUIAAgBQgBgTAQgMQAOgNAXAAQAfAAAYATIgPAVQgUgQgUAAQgMAAgGAFQgIAFABAIIAAAAQAAAJAHAGQAHAEAVAGQAaAGALAJQAMAKAAATIAAAAQAAAWgOAMQgPAMgaAAQgjAAgcgZg");
	this.shape_10.setTransform(-80.7,24.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AwtD6IAAnzMAhbAAAIAAHzg");
	this.shape_11.setTransform(0,25);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CTA, new cjs.Rectangle(-107,0,214,50), null);


(lib.pinwheel_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_29 = function() {
		if(!this.alreadyExecuted){
		this.alreadyExecuted=true;
		this.loopNum=1;
		} else {
		this.loopNum++;
		if(this.loopNum==5){
		this.stop();
		}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(2));

	// pinwheel
	this.instance = new lib.pinwheel();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-179.0006,y:-0.05},15).to({rotation:-350.001,y:0},14).wait(2));

	// stick
	this.instance_1 = new lib.pinwheel_stick();
	this.instance_1.setTransform(3.5,204.45,1,1,1.5337,0,0,-0.1,-204.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(31));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-175.6,-175.6,351.2,584.4);


(lib.HEAD1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjvEnIAApNIHaAAIAACKIk4AAIAABaIEbAAIAACAIkbAAIAABeIE9AAIAACLg");
	this.shape.setTransform(250.25,129.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ACXEnIAAlRIiXDlIgCAAIiXjlIAAFRIigAAIAApNICtAAICMDkICNjkICtAAIAAJNg");
	this.shape_1.setTransform(184.45,129.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhREnIAApNICjAAIAAJNg");
	this.shape_2.setTransform(134.05,129.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhREnIAAm9IixAAIAAiQIIFAAIAACQIiyAAIAAG9g");
	this.shape_3.setTransform(92.375,129.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AjrEnIAApNIHXAAIAACQIk0AAIAABkIEXAAIAACHIkXAAIAADSg");
	this.shape_4.setTransform(15.275,129.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AjjDaQhahYAAiBIAAgBQAAh/BbhZQBdhaCGAAQCIAABbBZQBaBYAACAIAAABQAACAhbBZQhcBaiHAAQiIAAhbhZgAhthwQgpAuAABBIAAABQAABBArAuQArAwBBAAQBBAAArgvQApgtAAhCIAAgBQAAhBgqguQgqgwhCAAQhCAAgrAvg");
	this.shape_5.setTransform(-48.65,129.525);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AkYEnIAApNIDlAAQCaAABaBSQBYBPAACDIAAABQAACChZBSQhcBVibgBgAh0CWIBDAAQBJABAtgnQAsgoAAhHIAAgBQAAhGgsgoQgtgohJAAIhDAAg");
	this.shape_6.setTransform(204.3,55.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ACaEpIgqhqIjkAAIgqBqIirAAID6pSICeAAID7JSgABABAIhBimIhDCmICEAAg");
	this.shape_7.setTransform(137.55,55.05);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AjuEnIAApNIHZAAIAACKIk3AAIAABaIEaAAIAACAIkaAAIAABeIE8AAIAACLg");
	this.shape_8.setTransform(76.75,55.25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ABpEnIAAjgIjRAAIAADgIikAAIAApNICkAAIAADdIDRAAIAAjdICkAAIAAJNg");
	this.shape_9.setTransform(15.475,55.25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("ACaEpIgqhqIjkAAIgqBqIirAAID6pSICdAAID8JSgABABAIhBimIhCCmICDAAg");
	this.shape_10.setTransform(-50.15,55.05);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AkBDPIBchsQBZBHBlAAQBEAAAAgpIAAgCQAAgTgUgMQgVgMg6gOQhwgZgvghQhAgrAAhTIAAgBQAAhUA9g0QA/g2BoAAQCRAABhBPIhSB0QhQg7hTAAQg8AAAAAmIAAACQAAAUAVAMQAVALA8AOQBvAZAxAlQA8ArAABOIAAACQAABahBAzQhBA0htAAQilAAhvhjg");
	this.shape_11.setTransform(180.25,-18.975);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhREnIAAm9IixAAIAAiQIIFAAIAACQIiyAAIAAG9g");
	this.shape_12.setTransform(127.175,-19);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AkBDPIBchsQBZBHBlAAQBEAAAAgpIAAgCQAAgTgUgMQgVgMg6gOQhwgZgvghQhAgrAAhTIAAgBQAAhUA9g0QA/g2BpAAQCQAABiBPIhSB0QhRg7hUAAQg7AAAAAmIAAACQAAAUAVAMQAVALA8AOQBuAZAyAlQA8ArAABOIAAACQAABahCAzQhAA0htAAQilAAhvhjg");
	this.shape_13.setTransform(72.5,-18.975);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AjjDaQhahYAAiBIAAgBQAAh/BbhZQBdhaCGAAQCIAABbBZQBaBYAACAIAAABQAACAhbBZQhcBaiHAAQiHAAhchZgAhthwQgpAuAABBIAAABQAABBArAuQAqAwBCAAQBCAAArgvQAogtAAhCIAAgBQAAhBgpguQgsgwhBAAQhCAAgrAvg");
	this.shape_14.setTransform(11.35,-18.975);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AjBDcQhZhYAAiDIAAgBQAAiBBYhYQBZhZCFAAQChAABZB6Ih7BfQg4hFhJAAQg8AAgpAuQgnAuAABBIAAABQAABDAnAtQAoAuA9AAQBKAAA7hIIB8BYQhhCFikAAQh/AAhYhXg");
	this.shape_15.setTransform(-52.175,-18.975);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AjvEnIAApNIHbAAIAACKIk5AAIAABaIEbAAIAACAIkbAAIAABeIE8AAIAACLg");
	this.shape_16.setTransform(326.9,-93.25);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhREnIAAm9IixAAIAAiQIIFAAIAACQIiyAAIAAG9g");
	this.shape_17.setTransform(269.875,-93.25);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("ACbEpIgrhqIjkAAIgqBqIirAAID7pSICcAAID8JSgABABAIhBimIhCCmICDAAg");
	this.shape_18.setTransform(216.1,-93.45);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("ACWEnIAAlRIiWDlIgDAAIiWjlIAAFRIigAAIAApNICtAAICMDkICMjkICuAAIAAJNg");
	this.shape_19.setTransform(145.9,-93.25);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhREnIAApNICjAAIAAJNg");
	this.shape_20.setTransform(95.5,-93.25);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AhREnIAAm9IixAAIAAiQIIFAAIAACQIiyAAIAAG9g");
	this.shape_21.setTransform(53.825,-93.25);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AkBDPIBchsQBZBHBlAAQBEAAAAgpIAAgCQAAgTgUgMQgVgMg6gOQhwgZgvghQhAgrAAhTIAAgBQAAhUA9g0QA/g2BpAAQCQAABiBPIhSB0QhRg7hUAAQg7AAAAAmIAAACQAAAUAVAMQAVALA8AOQBuAZAyAlQA8ArAABOIAAACQAABahCAzQhAA0htAAQilAAhvhjg");
	this.shape_22.setTransform(-0.85,-93.225);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AjuEnIAApNIHaAAIAACKIk4AAIAABaIEaAAIAACAIkaAAIAABeIE7AAIAACLg");
	this.shape_23.setTransform(-54.55,-93.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1 copy
	this.instance = new lib.HEAD1shad();
	this.instance.setTransform(369.95,263.15,1,1,0,0,0,0,-387.1);
	this.instance.alpha = 0.8008;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD1, new cjs.Rectangle(-87.1,-134.6,910.2,784.9), null);


(lib.HEADEndFrame = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// HEAD type
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhkB8IAAj3IDHAAIAAA6IiDAAIAAAmIB3AAIAAA1Ih3AAIAAAoICFAAIAAA6g");
	this.shape.setTransform(253.225,17.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhtB8IAAgyIB8iLIh3AAIAAg6IDWAAIAAAxIh8CMIB8AAIAAA6g");
	this.shape_1.setTransform(228.625,17.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhkB8IAAj3IDHAAIAAA6IiDAAIAAAmIB3AAIAAA1Ih3AAIAAAoICFAAIAAA6g");
	this.shape_2.setTransform(204.775,17.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhkB8IAAj3IDHAAIAAA6IiDAAIAAAmIB3AAIAAA1Ih3AAIAAAoICFAAIAAA6g");
	this.shape_3.setTransform(181.075,17.975);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAjB8IgxhLIgeAAIAABLIhFAAIAAj3IB0AAQA3AAAaAaQAWAWAAAkIAAABQAAA2gzAWIA7BWgAgsgEIAsAAQASAAAKgIQAJgIAAgNIAAgBQAAgeglAAIgsAAg");
	this.shape_4.setTransform(156.925,17.975);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhuB8IAAj3IB/AAQAsAAAXAWQAQAQABAYIAAABQAAAngnAQQAxAQAAAsIAAABQAAAggZASQgYASgtAAgAgrBFIA1AAQAgAAABgXIAAgBQgBgWghAAIg0AAgAgrgYIArAAQAgAAAAgWIAAgBQABgVggAAIgsAAg");
	this.shape_5.setTransform(131.25,17.975);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABBB9IgSgsIhfAAIgSAsIhIAAIBqj5IBBAAIBqD5gAAbAbIgbhFIgcBFIA3AAg");
	this.shape_6.setTransform(94.075,17.875);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhsBXIAnguQAmAeApAAQAdAAABgRIAAgBQAAgIgJgFQgJgEgYgHQgvgLgUgNQgbgSAAgjIAAAAQAAgkAagVQAbgXArAAQA9ABApAgIgiAxQgjgYgiAAQgZAAAAAPIAAABQAAAJAIAFQAKAEAYAGQAuAKAVAQQAZASAAAhIAAABQABAlgcAWQgbAVguABQhFAAgvgqg");
	this.shape_7.setTransform(58.2,18);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgmAmQAkgEgBgdIgbAAIAAhEIBFAAIAAA4QAABFhHACg");
	this.shape_8.setTransform(41.75,11.975);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgiB8IAAi7IhKAAIAAg8IDZAAIAAA8IhLAAIAAC7g");
	this.shape_9.setTransform(25.325,17.975);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgiB8IAAj3IBFAAIAAD3g");
	this.shape_10.setTransform(7.8,17.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// shad
	this.instance = new lib.HEADEndshad();
	this.instance.setTransform(224.15,105,1,1,0,0,0,0,-100);
	this.instance.alpha = 0.8008;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEADEndFrame, new cjs.Rectangle(0,0,444,205), null);


(lib.HEAD_MySmile = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// reg mark
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgjAkQgPgPAAgVQAAgUAPgPQAPgPAUAAQAVAAAPAPQAPAPgBAUIAAAAQABAVgPAPQgPAPgVAAQgUAAgPgPgAgfgfQgNAOAAARQAAATANANQANANASAAQASAAANgNQAOgNAAgTIAAAAQAAgSgOgNQgMgNgTAAQgSAAgNANgAAJAaIgJgQIgFAAIAAAQIgRAAIAAg1IAZAAQAXAAAAATQAAALgLAEIANATgAgFgBIAHAAQAIAAAAgGQgBgGgGAAIgIAAg");
	this.shape.setTransform(266.5,22.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Live Type
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ah0B9QgxgwAAhMIAAgBQAAhIAugxQAwgzBHAAQBRAAAtA2QApAxAABNIgBAYIjcAAQAOA2A4AAQAnAAAigiIBAA1Qg1BEhaAAQhMAAgygwgAA6gaQgDgcgPgQQgQgQgYAAQguAAgKA8IByAAIAAAAg");
	this.shape_1.setTransform(244.15,34.325);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag5DfIAAm9IBzAAIAAG9g");
	this.shape_2.setTransform(216.55,28.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag4DfIAAlJIByAAIAAFJgAg7iIIAAhWIB3AAIAABWg");
	this.shape_3.setTransform(198.175,28.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ACWCpIAAizQAAg3gtAAQgVAAgNAOQgNAPAAAaIAACzIhyAAIAAizQAAg3guAAQgVAAgNAOQgNAPAAAaIAACzIh0AAIAAlJIB0AAIAAAtQApg1A5AAQBCAAAcA2QAvg2A/AAQA1AAAeAgQAeAgAAA5IAADYg");
	this.shape_4.setTransform(159.525,33.925);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ai5CWIBBhOQBBAyBJAAQAxAAAAgdIAAgBQAAgOgOgJQgPgIgqgLQhRgRgigYQgvggABg7IAAgBQAAg9AsgmQAtgmBMAAQBoAABHA5Ig8BUQg6gqg8gBQgrABAAAbIAAABQAAAPAPAIQAPAIArALQBRARAjAbQAsAfgBA5IAAABQABBAgwAmQgvAlhOAAQh3AAhQhHg");
	this.shape_5.setTransform(109.25,29.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AioC6IAkhRQAfASAUAAQARAAAKgOIiBlDIB5AAIBADHIA+jHIB4AAIh5FBQgWA7gbAYQgbAZgxAAQg4AAgygdg");
	this.shape_6.setTransform(71.05,39.275);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ABtDVIAAj0IhtCnIgBAAIhuimIAADzIhzAAIAAmqIB9AAIBlClIBlilIB+AAIAAGqg");
	this.shape_7.setTransform(25.5,29.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// shad
	this.instance = new lib.HEAD_MSshad();
	this.instance.setTransform(303.55,184.6,1,1,0,0,0,0,-178.4);
	this.instance.alpha = 0.8008;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD_MySmile, new cjs.Rectangle(-3,0,607.3,363), null);


(lib.DD_logo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.DeltaDentalLogo_NoBox_Whiteai();
	this.instance.setTransform(0.2,15.55,0.5902,0.59,0,0,0,141.1,16.9);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DD_logo, new cjs.Rectangle(-83,5.7,166.2,19.7), null);


// stage content:
(lib.DD_CE_300x250 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,166];
	// timeline functions:
	this.frame_0 = function() {
		//if(!this.alreadyyExecuted){
		//this.alreadyyExecuted=true;
		//	this.clickthru_btn.on("click", function(evt){
		//  window.open(clickTag, "_blank");
		//});
		//} else {
		//gotoAndPlay(2);
		//}
	}
	this.frame_166 = function() {
		//if(!this.alreadyExecuted){
		//this.alreadyExecuted=true;
		//this.loopNum=1;
		//} else {
		//this.loopNum++;
		//if(this.loopNum==2){
		this.stop();
		//}
		//}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(166).call(this.frame_166).wait(1));

	// pinwheel
	this.instance = new lib.pinwheel_mc();
	this.instance.setTransform(150,320.05,0.65,0.65,0,0,0,0.1,0.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(57).to({_off:false},0).to({y:160.05},5,cjs.Ease.quadOut).wait(29).to({y:320.05},4,cjs.Ease.quadIn).to({_off:true},10).wait(62));

	// CTA
	this.instance_1 = new lib.CTA();
	this.instance_1.setTransform(150.1,199.35,0.89,0.89,0,0,0,0.1,25.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(113).to({_off:false},0).to({alpha:1},6).wait(48));

	// HEAD-MySmile
	this.instance_2 = new lib.HEAD_MySmile();
	this.instance_2.setTransform(468.75,431.05,0.95,0.95,0,0,0,300.8,181.7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(105).to({_off:false},0).to({x:308.75,y:271.05},8,cjs.Ease.quadOut).wait(54));

	// HEAD-EndFrame
	this.instance_3 = new lib.HEADEndFrame();
	this.instance_3.setTransform(433.5,382,1,1,0,0,0,197,132);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(47).to({_off:false},0).to({x:213.5,y:178.95},10,cjs.Ease.quadOut).wait(38).to({x:413.5,y:378.95},9).to({_off:true},1).wait(62));

	// logo
	this.instance_4 = new lib.DD_logo();
	this.instance_4.setTransform(279.45,63.3,1,1,0,0,0,129.5,15.3);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(105).to({_off:false},0).wait(62));

	// HEAD1
	this.instance_5 = new lib.HEAD1();
	this.instance_5.setTransform(147.35,165.85,0.6,0.6,0,0,0,135.6,93.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(42).to({regY:93,x:358.35,y:385.8},5,cjs.Ease.quadIn).to({_off:true},1).wait(119));

	// bkgd
	this.instance_6 = new lib.CE300x600bkgd15();

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(167));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(150,125,620.8,595.1);
// library properties:
lib.properties = {
	id: '0957C5EC3B874C629166840920B09671',
	width: 300,
	height: 250,
	fps: 24,
	color: "#999999",
	opacity: 1.00,
	manifest: [
		{src:"images/DD_CE_300x250_atlas_P_1.png?1598132700896", id:"DD_CE_300x250_atlas_P_1"},
		{src:"images/DD_CE_300x250_atlas_NP_1.jpg?1598132700896", id:"DD_CE_300x250_atlas_NP_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['0957C5EC3B874C629166840920B09671'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;