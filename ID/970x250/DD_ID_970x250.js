(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"DD_ID_970x250_atlas_P_1", frames: [[0,0,300,600],[302,0,300,600],[604,0,300,600],[906,0,300,600]]},
		{name:"DD_ID_970x250_atlas_NP_1", frames: [[0,0,300,600]]}
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



(lib.IDemailed = function() {
	this.initialize(ss["DD_ID_970x250_atlas_P_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.IDonyourphone = function() {
	this.initialize(ss["DD_ID_970x250_atlas_P_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.IDprinter = function() {
	this.initialize(ss["DD_ID_970x250_atlas_P_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.IDSunBalloon = function() {
	this.initialize(ss["DD_ID_970x250_atlas_P_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.ID300x600bkgd15 = function() {
	this.initialize(ss["DD_ID_970x250_atlas_NP_1"]);
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


(lib.IDSunBalloon_mc = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.IDSunBalloon();
	this.instance.setTransform(-150,-600);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// string
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(8,1,1).p("AAAm3IAANv");
	this.shape.setTransform(-5,39.9896,1,2.2505);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IDSunBalloon_mc, new cjs.Rectangle(-150,-600,300,743), null);


(lib.IDprinter_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.IDprinter();
	this.instance.setTransform(-49,-189);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F5B4A5").ss(1,1,1).p("EgL/gjxMA+LA9uMg0BgALIpYKAMgm+gm+g");
	this.shape.setTransform(298.75,272.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DE4F2F").s().p("EgyLgDMMAmNgglMA+KA9uMg0AgALIpZKAg");
	this.shape_1.setTransform(298.75,272.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IDprinter_1, new cjs.Rectangle(-49,-189,670,691), null);


(lib.IDphone = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.IDonyourphone();
	this.instance.setTransform(-50,-189);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F5B4A5").ss(1,1,1).p("EgrnATtILGLGMAgpgCqMArgADoMhACg/hg");
	this.shape.setTransform(286.225,256.875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DE4F2F").s().p("AAIcJMggpACqIrGrGMAXNgzdMBACA/hg");
	this.shape_1.setTransform(286.225,256.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IDphone, new cjs.Rectangle(-50,-189,616.5,650.2), null);


(lib.IDemailed_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.IDemailed();
	this.instance.setTransform(-52,-189);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DE4F2F").s().p("EgyKgIOMAnOgWgMA9HA9ZMg9WAAEg");
	this.shape.setTransform(292.1,239.775);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IDemailed_1, new cjs.Rectangle(-52,-189,665.2,625.5), null);


(lib.HEAD2bPlan = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#DE4F2F").s().p("AhWBcIAAi3IBHAAQAvAAAcAaQAbAZAAAoIAAAAQAAAogbAaQgdAagvAAgAgjAvIAVAAQAWAAANgMQAOgNAAgWIAAAAQAAgVgOgNQgNgMgWAAIgVAAg");
	this.shape.setTransform(124.775,26.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DE4F2F").s().p("AhKBcIAAi3ICTAAIAAArIhgAAIAAAcIBXAAIAAAnIhXAAIAAAeIBiAAIAAArg");
	this.shape_1.setTransform(106,26.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DE4F2F").s().p("AhFBcIAAi3IAzAAIAACKIBYAAIAAAtg");
	this.shape_2.setTransform(89.4,26.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DE4F2F").s().p("AgZBcIAAi3IAzAAIAAC3g");
	this.shape_3.setTransform(76.55,26.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DE4F2F").s().p("AAwBcIgNghIhGAAIgNAhIg1AAIBNi3IAwAAIBOC3gAAUAUIgUgzIgUAzIAoAAg");
	this.shape_4.setTransform(61.875,26.725);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DE4F2F").s().p("AAvBcIAAhpIgvBHIAAAAIguhGIAABoIgzAAIAAi3IA2AAIArBHIAshHIA2AAIAAC3g");
	this.shape_5.setTransform(40.1,26.775);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DE4F2F").s().p("AhJBcIAAi3ICSAAIAAArIhgAAIAAAcIBXAAIAAAnIhXAAIAAAeIBhAAIAAArg");
	this.shape_6.setTransform(20.3,26.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ArtETIAAolIXbAAIAAIlg");
	this.shape_7.setTransform(75.025,27.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD2bPlan, new cjs.Rectangle(0,0,150.1,55), null);


(lib.HEAD2bHist = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#DE4F2F").s().p("AhWBcIAAi3IBHAAQAvAAAcAaQAbAZAAAoIAAAAQAAAogbAaQgdAagvAAgAgjAvIAVAAQAWAAANgMQAOgNAAgWIAAAAQAAgVgOgNQgNgMgWAAIgVAAg");
	this.shape.setTransform(121.825,26.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DE4F2F").s().p("AhKBcIAAi3ICUAAIAAArIhhAAIAAAcIBXAAIAAAnIhXAAIAAAeIBiAAIAAArg");
	this.shape_1.setTransform(103.05,26.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DE4F2F").s().p("AgZBcIAAiKIg2AAIAAgtICfAAIAAAtIg3AAIAACKg");
	this.shape_2.setTransform(85.425,26.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DE4F2F").s().p("AAqBcIhNhkIAABkIgzAAIAAi3IAwAAIBKBgIAAhgIAzAAIAAC3g");
	this.shape_3.setTransform(66.475,26.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DE4F2F").s().p("AgYBcIAAi3IAyAAIAAC3g");
	this.shape_4.setTransform(51.95,26.775);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DE4F2F").s().p("AAaBcIgkg4IgXAAIAAA4IgzAAIAAi3IBWAAQApAAATAUQAQAQAAAbIAAAAQAAAogmAQIAsBAgAghgDIAiAAQAMAAAIgFQAHgGAAgKIAAgBQgBgWgbAAIghAAg");
	this.shape_5.setTransform(38.9,26.775);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DE4F2F").s().p("AhMBcIAAi3IBOAAQAjAAAUARQAVASAAAeIAAAAQgBAfgVASQgWAQgiAAIgaAAIAAA1gAgaAAIAZAAQAMAAAIgGQAIgHAAgLIAAAAQAAgYgdAAIgYAAg");
	this.shape_6.setTransform(20.6,26.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ArZETIAAolIWzAAIAAIlg");
	this.shape_7.setTransform(73.025,27.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD2bHist, new cjs.Rectangle(0,0,146.1,55), null);


(lib.HEAD2bDent = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#DE4F2F").s().p("AhJBcIAAi3ICSAAIAAArIhgAAIAAAcIBXAAIAAAnIhXAAIAAAeIBhAAIAAArg");
	this.shape.setTransform(234.5,26.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DE4F2F").s().p("AAqBcIhNhkIAABkIgzAAIAAi3IAwAAIBKBgIAAhgIAzAAIAAC3g");
	this.shape_1.setTransform(215.175,26.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DE4F2F").s().p("AhFBEQgdgcAAgnIAAgBQAAgnAdgbQAcgcAqAAQApAAAcAbQAdAcAAAnIAAAAQAAAogdAbQgcAcgqAAQgqAAgbgbgAghgiQgNAOAAAUIAAAAQAAAUANAPQANAPAVAAQATAAAOgPQANgOAAgUIAAgBQgBgTgNgPQgNgOgUAAQgUAAgNAOg");
	this.shape_2.setTransform(194.05,26.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DE4F2F").s().p("AAhBcIAAhGIhBAAIAABGIgyAAIAAi3IAyAAIAABFIBBAAIAAhFIAyAAIAAC3g");
	this.shape_3.setTransform(173.2,26.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DE4F2F").s().p("AhNBcIAAi3IBPAAQAiAAAVARQAUASAAAeIAAAAQABAfgWASQgWAQgiAAIgZAAIAAA1gAgZAAIAYAAQANAAAHgGQAIgHAAgLIAAAAQAAgYgdAAIgXAAg");
	this.shape_4.setTransform(155,26.775);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DE4F2F").s().p("AAaBcIgkg4IgXAAIAAA4IgyAAIAAi3IBVAAQAoAAAUAUQARAQAAAbIAAAAQgBAoglAQIArBAgAghgDIAhAAQANAAAHgFQAIgGgBgKIAAgBQABgWgcAAIghAAg");
	this.shape_5.setTransform(129.65,26.775);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DE4F2F").s().p("Ag9BJQgXgWAAgqIAAhlIAzAAIAABlQAAAnAhgBQAiAAAAglIAAhmIAzAAIAABlQAAAqgXAWQgWAUgoAAQgoAAgVgUg");
	this.shape_6.setTransform(109.675,26.95);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#DE4F2F").s().p("AhGBEQgcgcAAgnIAAgBQAAgnAcgbQAdgcApAAQAqAAAcAbQAdAcAAAnIAAAAQAAAogdAbQgcAcgqAAQgpAAgdgbgAghgiQgNAOAAAUIAAAAQAAAUANAPQAOAPATAAQAVAAANgPQAMgOAAgUIAAgBQAAgTgNgPQgMgOgVAAQgUAAgNAOg");
	this.shape_7.setTransform(88.9,26.775);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#DE4F2F").s().p("AgYBcIAAhFIhGhyIA6AAIAkBDIAmhDIA5AAIhFBxIAABGg");
	this.shape_8.setTransform(70.275,26.775);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#DE4F2F").s().p("AAqBcIhNhkIAABkIgzAAIAAi3IAwAAIBKBgIAAhgIAzAAIAAC3g");
	this.shape_9.setTransform(43.275,26.775);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#DE4F2F").s().p("AhFBEQgdgcAAgnIAAgBQAAgnAdgbQAcgcAqAAQApAAAcAbQAdAcAAAnIAAAAQAAAogdAbQgcAcgqAAQgqAAgbgbgAghgiQgNAOAAAUIAAAAQAAAUANAPQANAPAVAAQATAAAOgPQANgOAAgUIAAgBQgBgTgNgPQgNgOgUAAQgUAAgNAOg");
	this.shape_10.setTransform(22.15,26.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("A0UETIAAolMAopAAAIAAIlg");
	this.shape_11.setTransform(130.05,27.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD2bDent, new cjs.Rectangle(0,0,260.1,55), null);


(lib.HEAD2a = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AhVBbIAAi1IBGAAQAvAAAcAZQAaAZAAAoIAAAAQAAAogbAZQgcAagvAAgAgjAvIAVAAQAVgBAPgLQANgNAAgWIAAAAQAAgVgNgMQgPgMgVAAIgVAAg");
	this.shape.setTransform(251.9,13.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAaBbIgkg3IgWAAIAAA3IgzAAIAAi1IBVAAQAoAAAUAUQAQAPAAAbIAAABQAAAngmAQIAsA/gAgggDIAgAAQANAAAHgFQAHgHAAgJIAAgBQAAgVgbgBIggAAg");
	this.shape_1.setTransform(232.975,13.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAvBcIgMghIhGAAIgNAhIg0AAIBMi3IAwAAIBNC3gAAUAUIgUgzIgUAzIAoAAg");
	this.shape_2.setTransform(212.7,13.625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag7BEQgbgbAAgoIAAgBQAAgnAbgbQAbgbApgBQAxAAAcAmIgmAeQgSgWgWAAQgSAAgMAPQgMANAAAUIAAAAQAAAVAMAOQAMAOASgBQAXAAASgVIAmAbQgeApgygBQgnABgbgbg");
	this.shape_3.setTransform(193.225,13.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhVBbIAAi1IBGAAQAvAAAcAZQAbAZAAAoIAAAAQgBAogbAZQgcAagvAAgAgjAvIAUAAQAXgBAOgLQANgNAAgWIAAAAQAAgVgNgMQgOgMgXAAIgUAAg");
	this.shape_4.setTransform(166.65,13.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgYBbIAAi1IAxAAIAAC1g");
	this.shape_5.setTransform(152.175,13.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAaBbIgkg3IgWAAIAAA3IgzAAIAAi1IBVAAQAoAAAUAUQAQAPAAAbIAAABQAAAngmAQIAsA/gAgggDIAgAAQANAAAHgFQAHgHAAgJIAAgBQAAgVgbgBIggAAg");
	this.shape_6.setTransform(132.025,13.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag9BIQgXgVAAgqIAAhlIAzAAIAABkQAAAnAhAAQAiAAAAglIAAhmIAzAAIAABkQAAArgYAVQgVAVgoAAQgnAAgWgVg");
	this.shape_7.setTransform(112.225,13.875);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhFBDQgcgbAAgnIAAgBQAAgnAcgbQAdgbApgBQApABAdAbQAbAbAAAnIAAAAQAAAogcAbQgdAcgpgBQgpABgcgcgAghghQgMANAAAUIAAAAQAAAUAMAPQAOAOAUAAQATAAAOgOQANgOAAgUIAAgBQgBgTgNgOQgMgPgVAAQgTAAgOAPg");
	this.shape_8.setTransform(91.55,13.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgYBbIAAhEIhFhxIA5AAIAkBDIAmhDIA5AAIhGBwIAABFg");
	this.shape_9.setTransform(73.05,13.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgYBbIAAiIIg3AAIAAgtICfAAIAAAtIg3AAIAACIg");
	this.shape_10.setTransform(47.875,13.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhJBbIAAi1ICRAAIAAAqIhfAAIAAAcIBWAAIAAAoIhWAAIAAAcIBhAAIAAArg");
	this.shape_11.setTransform(30.95,13.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag8BEQgcgbAAgoIAAgBQAAgnAcgbQAcgbApgBQArAAAfAaIgeAkQgUgQgYgBQgSABgOAOQgNAOAAAUIAAABQAAAVANAPQAOAOAVAAQASAAALgHIAAgXIgkAAIAAgkIBUAAIAABRQgiAdgtgBQgqAAgcgag");
	this.shape_12.setTransform(11.9,13.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD2a, new cjs.Rectangle(0,0,274,30), null);


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

	// type
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AilCvIAAldICHAAQBbAAA2AwQAzAwAABNIAAABQAABMg0AxQg3AyhbAAgAhEBZIAnAAQAsAAAagXQAagXAAgqIAAgBQAAgpgagYQgagXgsAAIgnAAg");
	this.shape.setTransform(202.175,112.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAxCvIhFhqIgrAAIAABqIhhAAIAAldICkAAQBNAAAmAlQAeAgAAAyIAAABQABBNhJAeIBUB6gAg/gGIBAAAQAYAAAOgLQANgLAAgUIAAgBQAAgqg0AAIg/AAg");
	this.shape_1.setTransform(165.7,112.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABcCwIgag/IiGAAIgZA/IhmAAICVlfIBdAAICUFfgAAmAmIgmhiIgoBiIBOAAg");
	this.shape_2.setTransform(126.65,112.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhxCDQg2g0AAhOIAAgBQAAhMA1g0QA1g1BNAAQBgAAA1BIIhJA5QghgpgsAAQgjAAgXAbQgYAbAAAnIAAAAQAAAoAYAbQAXAbAjAAQAtAAAigrIBJA0Qg5BPhhAAQhKAAg0gzg");
	this.shape_3.setTransform(89.2,112.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AilCvIAAldICHAAQBbAAA2AwQAzAwAABNIAAABQAABMg0AxQg3AyhbAAgAhEBZIAnAAQAsAAAagXQAagXAAgqIAAgBQAAgpgagYQgagXgsAAIgnAAg");
	this.shape_4.setTransform(38.075,112.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgwCvIAAldIBgAAIAAFdg");
	this.shape_5.setTransform(10.2,112.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AiECvIAAldIBhAAIAAEIICoAAIAABVg");
	this.shape_6.setTransform(217.975,68.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ABcCwIgZg/IiHAAIgZA/IhlAAICUlfIBdAAICUFfgAAmAmIgmhiIgnBiIBNAAg");
	this.shape_7.setTransform(181.7,68.375);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ah2CLQgsgpAAhQIAAjDIBiAAIAADBQAABLBAAAQBBAAAAhIIAAjEIBiAAIAADBQAABSgtApQgqAnhMAAQhNAAgpgng");
	this.shape_8.setTransform(144.275,68.825);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgwCvIAAkIIhoAAIAAhVIExAAIAABVIhpAAIAAEIg");
	this.shape_9.setTransform(108.825,68.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAxCvIhFhqIgrAAIAABqIhhAAIAAldICkAAQBNAAAlAlQAfAgABAyIAAABQAABNhIAeIBTB6gAg/gGIA/AAQAZAAANgLQAOgLABgUIAAgBQgBgqg0AAIg/AAg");
	this.shape_10.setTransform(75.55,68.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgvCvIAAldIBfAAIAAFdg");
	this.shape_11.setTransform(48.2,68.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgsCwIiOlfIBsAAIBPDcIBQjcIBqAAIiOFfg");
	this.shape_12.setTransform(21.025,68.625);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAxCvIhFhqIgrAAIAABqIhhAAIAAldICkAAQBNAAAmAlQAeAgAAAyIAAABQABBNhJAeIBUB6gAg/gGIBAAAQAYAAANgLQAPgLAAgUIAAgBQAAgpg1AAIg/AAg");
	this.shape_13.setTransform(251.3,24.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ah2CLQgsgpAAhQIAAjDIBiAAIAADBQAABLBAAAQBBAAAAhIIAAjEIBiAAIAADBQAABSgtApQgqAnhMAAQhNAAgpgng");
	this.shape_14.setTransform(213.175,24.825);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AiGCBQg2g0ABhMIAAgBQAAhLA2g1QA2g1BQAAQBQAAA2A1QA2A0AABMIAAAAQAABMg2A0Qg3A2hQAAQhQAAg2g1gAhAhCQgZAbABAnIAAAAQAAAnAZAbQAZAdAngBQAnAAAZgcQAYgbAAgmIAAgBQAAgmgZgcQgZgcgnAAQgnAAgZAcg");
	this.shape_15.setTransform(173.45,24.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgvCvIAAiDIiGjaIBvAAIBHB/IBIh/IBtAAIiFDYIAACFg");
	this.shape_16.setTransform(137.825,24.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AiNCvIAAldIEZAAIAABSIi5AAIAAA1ICnAAIAABMIinAAIAAA4IC7AAIAABSg");
	this.shape_17.setTransform(89.8,24.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AiYB7IA2hBQA2AqA7ABQAoAAAAgZIAAgBQAAgLgMgHQgMgHgigJQhCgPgcgSQgmgaAAgxIAAgBQAAgyAkgfQAlgfA+AAQBVAAA6AvIgwBEQgwgjgxABQgjAAAAAWIAAABQAAAMAMAHQAMAGAkAJQBBAPAeAWQAjAYAAAvIAAABQAAA1gnAfQgmAehBAAQhhAAhCg6g");
	this.shape_18.setTransform(55.625,24.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("Ah2CLQgsgpAAhQIAAjDIBiAAIAADBQAABLBAAAQBBAAAAhIIAAjEIBiAAIAADBQAABSgtApQgqAnhMAAQhNAAgpgng");
	this.shape_19.setTransform(20.975,24.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// shad
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#DE4F2F").s().p("EAAgAnfMg7rg7qIAAldIBhAAIBABAIAAhAIAmAAIhYhYIiNlgIBsAAIB4B4IATg/Ii0i0QgsgpAAhQIAAjEIBiAAICCCBIAAiBIBiAAIA6A5QAJgSAQgOQAmgfA+gBQBWAAA6AvIA4A5IAAhhIEaAAIEkEkIAAhKIiFjaIBuAAIBcBbIA1hbIBsAAIAsArQA1gzBOAAQBRAAA2A2IBjBjIAAiRIBiAAICCCBIAAiBIBiAAIA5A5IAAg5ICmAAQBMAAAmAlMBOjBOUg");
	this.shape_20.setTransform(384.175,259.15);

	this.timeline.addTween(cjs.Tween.get(this.shape_20).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD1, new cjs.Rectangle(0,0,766,512), null);


(lib.HEAD0 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#DE4F2F").s().p("Ag7BNIAAiZIA8AAQAbAAAQAOQAPAOAAAXIAAABQABAYgTAOQgQANgaAAIgfAAIAAAygAggADIAgAAQAOAAAJgGQAJgJAAgMIAAAAQAAgNgJgIQgJgGgOgBIggAAg");
	this.shape.setTransform(153.1,24.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DE4F2F").s().p("AgNBNIAAiZIAaAAIAACZg");
	this.shape_1.setTransform(141.7,24.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DE4F2F").s().p("AgNBNIAAiAIgwAAIAAgZIB7AAIAAAZIgwAAIAACAg");
	this.shape_2.setTransform(131.075,24.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DE4F2F").s().p("Ag4BNIAAiZIBwAAIAAAYIhVAAIAAAoIBLAAIAAAXIhLAAIAAAqIBXAAIAAAYg");
	this.shape_3.setTransform(110.4,24.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DE4F2F").s().p("Ag1BNIAAiZIAbAAIAACAIBQAAIAAAZg");
	this.shape_4.setTransform(96.45,24.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DE4F2F").s().p("AgNBNIAAiZIAaAAIAACZg");
	this.shape_5.setTransform(85.6,24.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DE4F2F").s().p("AAxBNIAAhuIgxBIIAAAAIgwhHIAABtIgaAAIAAiZIAcAAIAuBJIAvhJIAdAAIAACZg");
	this.shape_6.setTransform(72.6,24.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#DE4F2F").s().p("Ag6A2IAQgTQAXAUAYAAQANAAAHgFQAIgGgBgIIAAgBQAAgIgGgFQgIgFgTgFQgbgHgLgHQgNgLAAgUIAAgBQAAgTAOgMQAPgNAXAAQAfAAAYATIgPAVQgUgQgUAAQgMAAgHAFQgGAFAAAIIAAAAQgBAJAIAGQAIAEAVAGQAZAGALAJQAMAKAAATIAAAAQABAWgPAMQgQAMgZAAQgjAAgbgZg");
	this.shape_7.setTransform(55.9,24.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#DE4F2F").s().p("AgNBNIAAg9Ig9hcIAgAAIAqBEIAshEIAfAAIg9BcIAAA9g");
	this.shape_8.setTransform(41.925,24.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#DE4F2F").s().p("AAxBNIAAhuIgxBIIAAAAIgwhHIAABtIgaAAIAAiZIAcAAIAuBJIAvhJIAdAAIAACZg");
	this.shape_9.setTransform(24.55,24.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("At0D6IAAnzIbpAAIAAHzg");
	this.shape_10.setTransform(88.525,25);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD0, new cjs.Rectangle(0,0,177.1,50), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgpCXIAAhxIhzi8IBgAAIA9BuIA+huIBdAAIhyC7IAAByg");
	this.shape.setTransform(251.65,58.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiCBqIAug4QAuAkAzAAQAiAAAAgUIAAgBQAAgKgKgGQgKgGgegHQg5gNgXgQQghgXAAgqIAAgBQAAgqAfgaQAggbA1AAQBJAAAyAnIgqA8QgpgfgqAAQgeAAAAAUIAAABQAAAKAKAGQALAGAeAHQA5ANAZASQAeAWAAAoIAAAAQAAAvghAZQghAag3AAQhUABg4gyg");
	this.shape_1.setTransform(222.925,58.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABPCYIgWg2Ih0AAIgVA2IhXAAICAkuIBPAAICAEugAAhAgIghhUIgiBUIBDAAg");
	this.shape_2.setTransform(192.775,58.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ah5CXIAAktIDxAAIAABHIifAAIAAAuICQAAIAABBIiQAAIAAAwIChAAIAABHg");
	this.shape_3.setTransform(161.825,58.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ah5CXIAAktIDxAAIAABHIifAAIAAAuICQAAIAABBIiQAAIAAAwIChAAIAABHg");
	this.shape_4.setTransform(121.225,58.35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AiOCXIAAktIB0AAQBOABAvAqQAsAoAABDIAAAAQAABCgtAqQgvArhOAAgAg7BMIAiAAQAmABAWgVQAXgTAAgkIAAgBQAAgjgXgUQgWgVgmAAIgiAAg");
	this.shape_5.setTransform(90.4,58.35);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABPCYIgWg2Ih0AAIgVA2IhXAAICAkuIBPAAICAEugAAhAgIghhUIgiBUIBDAAg");
	this.shape_6.setTransform(56.425,58.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ABNCXIAAitIhNB1IAAAAIhNh0IAACsIhSAAIAAktIBZAAIBGB1IBIh1IBYAAIAAEtg");
	this.shape_7.setTransform(20.65,58.35);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhkBxQgugsAAhEIAAgBQAAhBAugtQAugtBFgBQBIAAAxAsIgwA7QgjgcgmAAQgfAAgXAXQgWAZAAAhIAAABQAAAlAXAYQAXAXAiAAQAfAAASgNIAAgkIg7AAIAAg8ICKAAIAACGQg4AuhLAAQhGAAgugrg");
	this.shape_8.setTransform(172.05,21.35);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ABGCWIiBikIAACkIhSAAIAAksIBOAAIB6CfIAAifIBTAAIAAEsg");
	this.shape_9.setTransform(138.775,21.35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgpCWIAAksIBTAAIAAEsg");
	this.shape_10.setTransform(114.925,21.35);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhyCWIAAksIBUAAIAADjICRAAIAABJg");
	this.shape_11.setTransform(95.475,21.35);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgpCWIAAksIBTAAIAAEsg");
	this.shape_12.setTransform(74.375,21.35);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("ABNCWIAAisIhNB1IAAAAIhNh0IAACrIhSAAIAAksIBYAAIBHB1IBIh1IBYAAIAAEsg");
	this.shape_13.setTransform(48.65,21.35);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AiCBqIAug4QAuAkAzAAQAiAAAAgUIAAgBQAAgKgKgGQgKgGgegHQg5gNgXgRQghgVAAgrIAAgBQAAgqAfgbQAggbA1AAQBJAAAyApIgqA6QgpgegqAAQgeAAAAAUIAAABQAAAKAKAGQALAGAeAHQA5ANAZASQAeAWAAAoIAAAAQAAAvghAZQghAag3AAQhUABg4gyg");
	this.shape_14.setTransform(15.525,21.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// shad
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#DE4F2F").s().p("A6lzWIAAkuIBYAAIhuhxIAug4QAnAfAqAEIhQhPQgigWAAgrIAAgBQAAgqAggbQAggbA1AAQBKAAAyApIAwAvIAAhTIBYAAIBIB1IBIh1IBYAAIA3A4IAAg4IBUAAIA2A3IAAg3IBUAAIC4C4IAAi4IBTAAIA3A3IAAg3IBOAAIB8CgIAAigIBTAAIBCBDQAKgOANgNQAugtBGgBQBHAAAxAsIFMFMQATgFAVABQBKAAAyAnIBSBYIhLh7IBgAAIBQBQIAshQIBdAAIMhMgMgDpApggAmg7pIgDgFIAAABIADAEg");
	this.shape_15.setTransform(174.85,197.35);

	this.timeline.addTween(cjs.Tween.get(this.shape_15).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEADEndFrame, new cjs.Rectangle(0,0,347.3,389), null);


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
	this.instance.setTransform(129.75,15.65,0.9194,0.9191,0,0,0,141.1,17.1);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DD_logo, new cjs.Rectangle(0,0,259,30.8), null);


// stage content:
(lib.DD_ID_970x250 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,301];
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
	this.frame_301 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(301).call(this.frame_301).wait(1));

	// sun balloon
	this.instance = new lib.IDSunBalloon_mc();
	this.instance.setTransform(840,259.45,0.5667,0.5667,0,0,0,0.1,-300);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(246).to({_off:false},0).wait(1).to({regX:0,regY:-226,x:839.95,y:158.9},0).wait(1).to({y:121.95},0).wait(1).to({y:101.1},0).wait(1).to({y:88.5},0).wait(1).to({y:81.15},0).wait(1).to({y:77.45},0).wait(1).to({y:76.6},0).wait(1).to({y:78.05},0).wait(1).to({y:81.35},0).wait(1).to({y:85.85},0).wait(1).to({y:87.7},0).wait(1).to({y:87.15},0).wait(1).to({y:85.75},0).wait(1).to({y:83.9},0).wait(1).to({y:81.85},0).wait(1).to({y:80},0).wait(1).to({y:77.95},0).wait(1).to({y:75.8},0).wait(1).to({y:74},0).wait(1).to({y:72.7},0).wait(1).to({y:72.05},0).wait(1).to({y:72},0).wait(20).to({regX:0.1,regY:-299.9,x:840,y:30.05},0).wait(14));

	// HEAD-EndFrame
	this.instance_1 = new lib.HEADEndFrame();
	this.instance_1.setTransform(1002.35,675.75,1.4724,1.4724,0,0,0,197,132.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(240).to({_off:false},0).to({regY:131.9,x:606.05,y:267.25},10,cjs.Ease.quadOut).wait(52));

	// HEAD2bDent
	this.instance_2 = new lib.HEAD2bDent();
	this.instance_2.setTransform(-154.3,144.35,1.3192,1.3192,0,0,0,88.5,25);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(179).to({_off:false},0).to({x:229.55},9,cjs.Ease.quadOut).wait(40).to({x:-145},11).to({_off:true},1).wait(62));

	// HEAD2bHist
	this.instance_3 = new lib.HEAD2bHist();
	this.instance_3.setTransform(-154.3,144.35,1.3192,1.3192,0,0,0,88.5,25);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(135).to({_off:false},0).to({x:229.55},9,cjs.Ease.quadOut).wait(26).to({x:-152.9},9,cjs.Ease.quintIn).to({_off:true},1).wait(122));

	// HEAD2bPlan
	this.instance_4 = new lib.HEAD2bPlan();
	this.instance_4.setTransform(-139.7,144.35,1.3192,1.3192,0,0,0,88.5,25);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(91).to({_off:false},0).to({x:229.55},9,cjs.Ease.quintOut).wait(26).to({x:-152.9},9,cjs.Ease.quintIn).to({_off:true},1).wait(166));

	// ID-phone
	this.instance_5 = new lib.IDphone();
	this.instance_5.setTransform(829.2,301.95,0.6651,0.6651,0,0,0,97,200.1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(188).to({_off:false},0).to({regX:97.2,x:643.1,y:115.7},9).wait(31).to({regX:97,x:829.2,y:301.95},11,cjs.Ease.quadIn).to({_off:true},1).wait(62));

	// ID-printer
	this.instance_6 = new lib.IDprinter_1();
	this.instance_6.setTransform(921.15,353.05,0.8804,0.8804,0,0,0,97,200.1);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(144).to({_off:false},0).to({regY:200,x:674.65,y:106.5},9).wait(35).to({regY:200.1,x:921.15,y:353.05},9).to({_off:true},1).wait(104));

	// ID-emailed
	this.instance_7 = new lib.IDemailed_1();
	this.instance_7.setTransform(972.15,488.95,1,1,0,0,0,97,200);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(86).to({_off:false},0).to({x:692.15,y:208.95},9).wait(49).to({x:972.15,y:488.95},9).to({_off:true},1).wait(148));

	// HEAD2a
	this.instance_8 = new lib.HEAD2a();
	this.instance_8.setTransform(230.3,86.95,1.3192,1.3192,0,0,0,90,17);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(86).to({_off:false},0).wait(142).to({alpha:0},11).to({_off:true},1).wait(62));

	// logo
	this.instance_9 = new lib.DD_logo();
	this.instance_9.setTransform(270,92.35,1,1,0,0,0,129.5,15.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(74).to({alpha:0},5).to({_off:true},1).wait(160).to({_off:false,x:150,y:119.35,alpha:1},0).wait(62));

	// HEAD1
	this.instance_10 = new lib.HEAD1();
	this.instance_10.setTransform(918.1,437.45,1,1,0,0,0,135.5,93);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(21).to({_off:false},0).to({x:630.1,y:149.45},25,cjs.Ease.quintOut).wait(34).to({x:910.1,y:429.45},5,cjs.Ease.quadIn).to({_off:true},1).wait(216));

	// HEAD0
	this.instance_11 = new lib.HEAD0();
	this.instance_11.setTransform(222.95,148,1,1,0,0,0,83,25);
	this.instance_11.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({alpha:1},9).wait(65).to({alpha:0},5).to({_off:true},1).wait(222));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F5B4A5").ss(6,1,0,3).p("EhLTgTDMCWnAAAMAAAAmHMiWnAAAg");
	this.shape.setTransform(485,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(302));

	// bkgd
	this.instance_12 = new lib.ID300x600bkgd15();
	this.instance_12.setTransform(600,303,1,1,-90);

	this.instance_13 = new lib.ID300x600bkgd15();
	this.instance_13.setTransform(3,303,1,1,-90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12}]}).wait(302));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(214,-110.9,1334.6,1164.9);
// library properties:
lib.properties = {
	id: '0957C5EC3B874C629166840920B09671',
	width: 970,
	height: 250,
	fps: 24,
	color: "#999999",
	opacity: 1.00,
	manifest: [
		{src:"images/DD_ID_970x250_atlas_P_1.png?1597538981706", id:"DD_ID_970x250_atlas_P_1"},
		{src:"images/DD_ID_970x250_atlas_NP_1.jpg?1597538981706", id:"DD_ID_970x250_atlas_NP_1"}
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