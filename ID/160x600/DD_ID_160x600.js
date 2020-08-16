(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"DD_ID_160x600_atlas_P_1", frames: [[0,0,300,600],[302,0,300,600],[604,0,300,600],[906,0,300,600]]},
		{name:"DD_ID_160x600_atlas_NP_1", frames: [[0,0,300,600]]}
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
	this.initialize(ss["DD_ID_160x600_atlas_P_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.IDonyourphoneext = function() {
	this.initialize(ss["DD_ID_160x600_atlas_P_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.IDprinter = function() {
	this.initialize(ss["DD_ID_160x600_atlas_P_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.IDSunBalloon = function() {
	this.initialize(ss["DD_ID_160x600_atlas_P_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.ID300x600bkgd15 = function() {
	this.initialize(ss["DD_ID_160x600_atlas_NP_1"]);
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
	this.shape.setTransform(-5,89.0916,1,3.2729);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IDSunBalloon_mc, new cjs.Rectangle(-150,-600,300,837.1), null);


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
	this.shape.graphics.f().s("#F5B4A5").ss(1,1,1).p("EANjgoTILGLGMgA8AycIgbTFMgv6gwCg");
	this.shape.setTransform(135.275,301.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DE4F2F").s().p("A4onuMAmLgglILGLGMgA8AycIgbTFg");
	this.shape_1.setTransform(135.275,301.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IDprinter_1, new cjs.Rectangle(-49,-189,343,749.1), null);


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
	this.instance = new lib.IDonyourphoneext();
	this.instance.setTransform(-42,26,0.9617,0.9617);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F5B4A5").ss(1,1,1).p("A/HExMAp+ApsIURARMgADg2cMgm+gm/g");
	this.shape.setTransform(206.15,352.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DE4F2F").s().p("EAK3AudMgp9gpsMAXNgzeMAm+Am/MAACA2bg");
	this.shape_1.setTransform(206.15,352.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IDphone, new cjs.Rectangle(-42,26,448.3,626.5), null);


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
	this.shape.graphics.f().s("#F5B4A5").ss(1,1,1).p("EAOEgj5ILGLGMgA8AydIgPKQMgxIgxTg");
	this.shape.setTransform(132.025,272.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DE4F2F").s().p("A5JtZMAnNgWgILGLGMgA8AydIgPKQg");
	this.shape_1.setTransform(132.025,272.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IDemailed_1, new cjs.Rectangle(-52,-189,346,692.7), null);


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
	this.shape.graphics.f("#DE4F2F").s().p("AhKBcIAAi3ICUAAIAAArIhhAAIAAAcIBXAAIAAAnIhXAAIAAAeIBhAAIAAArg");
	this.shape.setTransform(100.1,54.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DE4F2F").s().p("AAqBcIhNhkIAABkIgzAAIAAi3IAwAAIBKBgIAAhgIAzAAIAAC3g");
	this.shape_1.setTransform(80.775,54.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DE4F2F").s().p("AhGBEQgcgcAAgnIAAgBQAAgnAcgbQAdgcApAAQAqAAAcAbQAdAcAAAnIAAAAQAAAogdAbQgcAcgqAAQgpAAgdgbgAghgiQgNAOAAAUIAAAAQAAAUANAPQAOAPATAAQAVAAANgPQAMgOAAgUIAAgBQAAgTgMgPQgNgOgVAAQgUAAgNAOg");
	this.shape_2.setTransform(59.65,54.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DE4F2F").s().p("AAhBcIAAhGIhBAAIAABGIgzAAIAAi3IAzAAIAABFIBBAAIAAhFIAzAAIAAC3g");
	this.shape_3.setTransform(38.8,54.975);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DE4F2F").s().p("AhMBcIAAi3IBOAAQAjAAAUARQAVASAAAeIAAAAQgBAfgVASQgWAQgiAAIgaAAIAAA1gAgaAAIAZAAQAMAAAIgGQAIgHAAgLIAAAAQAAgYgdAAIgYAAg");
	this.shape_4.setTransform(20.6,54.975);

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
	this.shape_11.graphics.f("#FFFFFF").s().p("AsHGaIAAszIYPAAIAAMzg");
	this.shape_11.setTransform(77.6,41);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD2bDent, new cjs.Rectangle(0,0,169.6,82), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AhSBXIAAiuIBEAAQAsAAAbAZQAaAXAAAnIAAAAQAAAngaAYQgbAZgtgBgAgiAtIAUAAQAVAAANgMQANgMAAgVIAAAAQAAgUgNgMQgNgLgVAAIgUAAg");
	this.shape.setTransform(101.975,40.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAZBXIgig0IgWAAIAAA0IgxAAIAAiuIBSAAQAmABAUASQAPAQAAAZIAAABQAAAlgkAQIApA8gAgfgDIAfAAQAMABAHgGQAHgGAAgJIAAgBQAAgVgaAAIgfAAg");
	this.shape_1.setTransform(83.75,40.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAuBYIgNgfIhCAAIgNAfIgzAAIBLivIAtAAIBLCvgAATATIgTgxIgUAxIAnAAg");
	this.shape_2.setTransform(64.25,40.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag5BBQgagZAAgnIAAgBQAAgmAagZQAbgbAnAAQAvAAAbAlIglAcQgQgVgXAAQgQAAgNANQgLAOAAATIAAAAQAAAUALANQANAOAQAAQAXgBARgUIAlAZQgdAogxAAQgkAAgbgag");
	this.shape_3.setTransform(45.55,40.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhSBXIAAiuIBEAAQAsAAAbAZQAaAXAAAnIAAAAQAAAngaAYQgbAZgtgBgAgiAtIAUAAQAVAAANgMQANgMAAgVIAAAAQAAgUgNgMQgNgLgVAAIgUAAg");
	this.shape_4.setTransform(20.025,40.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgXBXIAAiuIAwAAIAACug");
	this.shape_5.setTransform(6.1,40.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAZBXIgig0IgWAAIAAA0IgxAAIAAiuIBSAAQAmABAUASQAPAQAAAZIAAABQAAAlgkAQIApA8gAgfgDIAfAAQANABAGgGQAHgGAAgJIAAgBQAAgVgaAAIgfAAg");
	this.shape_6.setTransform(127.05,13.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag6BGQgXgVAAgoIAAhhIAyAAIAABgQAAAlAfAAQAgAAAAgkIAAhhIAyAAIAABgQgBApgWAVQgVATgmAAQgmAAgUgTg");
	this.shape_7.setTransform(108,13.425);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhDBBQgagaAAgmIAAgBQAAglAagaQAcgbAnAAQAoAAAbAbQAbAZAAAmIAAAAQAAAmgbAbQgbAagoAAQgoAAgbgagAggghQgMAOAAATIAAAAQAAAUANANQANAOASAAQAUAAANgOQALgNABgTIAAgBQAAgSgNgOQgMgPgUAAQgTAAgNAOg");
	this.shape_8.setTransform(88.15,13.25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgXBXIAAhBIhDhtIA3AAIAjBAIAkhAIA3AAIhDBsIAABCg");
	this.shape_9.setTransform(70.35,13.25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgYBXIAAiDIg0AAIAAgrICZAAIAAArIg1AAIAACDg");
	this.shape_10.setTransform(46.175,13.25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhGBXIAAiuICMAAIAAAqIhcAAIAAAaIBTAAIAAAmIhTAAIAAAbIBdAAIAAApg");
	this.shape_11.setTransform(29.85,13.25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag6BBQgbgZAAgnIAAgBQAAgmAbgZQAbgbAoAAQApAAAeAZIgeAiQgTgQgWAAQgTAAgNAOQgNAOABATIAAABQAAAVANAOQANAOAUgBQARAAALgHIAAgVIgiAAIAAgjIBQAAIAABOQggAbgsAAQgoAAgbgag");
	this.shape_12.setTransform(11.55,13.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD2a, new cjs.Rectangle(0,0,150,56), null);


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
	this.shape_20.graphics.f("#DE4F2F").s().p("A9m0KIAAldIBhAAIBABAIAAhAIAmAAIhYhYIiNlgIBsAAIB4B3IATg+Ii0i0QgsgpAAhQIAAjEIBiAAICCCBIAAiBIBiAAIA6A5QAJgSAQgOQAmgfA+gBQBWAAA6AvIA4A5IAAhhIEaAAIEkEkIAAhKIiFjaIBuAAIBcBbIA1hbIBsAAIAsArQA1gzBOAAQBRAAA2A2IBiBjIAAiRIBiAAICCCBIAAiBIBiAAIA5A5IAAg5ICmAAQBMAAAmAlIS5S6MAAhA7Yg");
	this.shape_20.setTransform(194.875,259.05);

	this.timeline.addTween(cjs.Tween.get(this.shape_20).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD1, new cjs.Rectangle(0,0,387.4,511.8), null);


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
	this.shape.graphics.f("#DE4F2F").s().p("AgwA/IAAh9IAxAAQAWAAANALQANAMAAATIAAABQAAATgPALQgOAMgUAAIgZAAIAAAogAgZACIAZAAQAMABAHgGQAHgGAAgKIAAAAQAAgLgHgGQgHgGgMAAIgZAAg");
	this.shape.setTransform(53.725,23.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DE4F2F").s().p("AgKA/IAAh9IAVAAIAAB9g");
	this.shape_1.setTransform(44.4,23.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DE4F2F").s().p("AgKA/IAAhpIgoAAIAAgUIBlAAIAAAUIgoAAIAABpg");
	this.shape_2.setTransform(35.725,23.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DE4F2F").s().p("AguA/IAAh9IBcAAIAAAUIhGAAIAAAgIA+AAIAAATIg+AAIAAAiIBHAAIAAAUg");
	this.shape_3.setTransform(18.775,23.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DE4F2F").s().p("AgrA/IAAh9IAWAAIAABpIBBAAIAAAUg");
	this.shape_4.setTransform(7.375,23.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DE4F2F").s().p("AgKA/IAAh9IAVAAIAAB9g");
	this.shape_5.setTransform(-1.5,23.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DE4F2F").s().p("AAoA/IAAhaIgoA7IAAAAIgng6IAABZIgWAAIAAh9IAYAAIAlA8IAng8IAXAAIAAB9g");
	this.shape_6.setTransform(-12.15,23.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#DE4F2F").s().p("AgwAsIAOgPQASAQAUAAQALAAAFgEQAHgEAAgIIAAAAQgBgHgFgEQgGgEgPgFQgXgEgJgHQgLgIAAgRQAAgRAMgKQAMgKATAAQAaAAATAQIgMARQgSgNgPAAQgJAAgGAEQgGAEAAAHIAAAAQABAIAFADQAGAEASAFQAUAFAJAHQALAJAAAPQAAARgNALQgMAKgUAAQgdAAgXgVg");
	this.shape_7.setTransform(-25.8,23.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#DE4F2F").s().p("AgKA/IAAgxIgyhMIAaAAIAiA3IAkg3IAZAAIgyBLIAAAyg");
	this.shape_8.setTransform(-37.25,23.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#DE4F2F").s().p("AAoA/IAAhaIgoA7IAAAAIgng6IAABZIgWAAIAAh9IAYAAIAlA8IAng8IAXAAIAAB9g");
	this.shape_9.setTransform(-51.5,23.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AqxCNIAAkZIVjAAIAAEZg");
	this.shape_10.setTransform(0.025,23.475);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD0, new cjs.Rectangle(-75,9.4,150,28.200000000000003), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgpCXIAAhxIhyi8IBfAAIA8BuIA/huIBdAAIhyC7IAAByg");
	this.shape.setTransform(106.7,95.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiCBqIAug3QAuAjAzABQAigBAAgUIAAgBQAAgKgKgGQgKgGgegHQg5gNgXgQQghgWAAgrIAAgBQAAgqAfgaQAggbA1AAQBJAAAyAnIgqA8QgpgfgqAAQgeABAAATIAAABQAAAKAKAGQALAGAeAHQA5ANAZASQAeAWAAAoIAAAAQAAAvghAZQghAag3AAQhUABg4gyg");
	this.shape_1.setTransform(77.975,95.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABPCYIgWg2Ih0AAIgVA2IhXAAICAkvIBPAAICAEvgAAhAgIghhUIgiBUIBDAAg");
	this.shape_2.setTransform(47.825,95.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ah5CXIAAktIDxAAIAABHIifAAIAAAuICQAAIAABBIiQAAIAAAwIChAAIAABHg");
	this.shape_3.setTransform(16.875,95.35);

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
	this.shape_15.graphics.f("#DE4F2F").s().p("An2DVIw6w+IBCkrIhChCIAAkuIBYAAIhvhxIAug4QAnAfAqAEIhQhPQghgWAAgrIAAgBQAAgqAfgbQAggbA2AAQBKAAAxApIAxAvIAAhTIBYAAIBIB1IBIh1IBXAAIA4A4IAAg4IBUAAIA2A3IAAg3IBTAAIC5C4IAAi4IBTAAIA3A3IAAg3IBOAAIB7CgIAAigIBTAAIBDBDQAJgOANgNQAugtBFgBQBIAAAyAsIQ7Q7MAEsAqRgAkr7pIgEgFIAAABIAEAEg");
	this.shape_15.setTransform(163.2,197.35);

	this.timeline.addTween(cjs.Tween.get(this.shape_15).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEADEndFrame, new cjs.Rectangle(0,0,324,389), null);


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
	this.instance.setTransform(0.2,15.6,0.4901,0.49,0,0,0,141,16.9);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DD_logo, new cjs.Rectangle(-68.9,7.3,138.10000000000002,16.4), null);


// stage content:
(lib.DD_ID_160x600 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(79.95,492.1,0.5133,0.5133,0,0,0,0.1,-300);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(246).to({_off:false},0).wait(1).to({regX:0,regY:-176.9,x:79.9,y:459.95},0).wait(1).to({y:435.25},0).wait(1).to({y:421.3},0).wait(1).to({y:412.9},0).wait(1).to({y:407.95},0).wait(1).to({y:405.5},0).wait(1).to({y:404.9},0).wait(1).to({y:405.9},0).wait(1).to({y:408.1},0).wait(1).to({y:411.1},0).wait(1).to({y:412.35},0).wait(1).to({y:412},0).wait(1).to({y:411.05},0).wait(1).to({y:409.8},0).wait(1).to({y:408.4},0).wait(1).to({y:407.2},0).wait(1).to({y:405.8},0).wait(1).to({y:404.4},0).wait(1).to({y:403.15},0).wait(1).to({y:402.3},0).wait(1).to({y:401.85},0).wait(21).to({regX:0.1,regY:-299.9,x:79.95,y:338.65},0).wait(14));

	// HEAD-EndFrame
	this.instance_1 = new lib.HEADEndFrame();
	this.instance_1.setTransform(364.9,498.8,0.7482,0.7482,0,0,0,197.1,132.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(240).to({_off:false},0).to({x:155.4,y:289.3},10,cjs.Ease.quadOut).wait(52));

	// HEAD2bDent
	this.instance_2 = new lib.HEAD2bDent();
	this.instance_2.setTransform(-152.9,135.5,0.82,0.82,0,0,0,88.5,25.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(179).to({_off:false},0).to({x:85.7},9,cjs.Ease.quadOut).wait(40).to({x:-147.1},11).to({_off:true},1).wait(62));

	// HEAD2bHist
	this.instance_3 = new lib.HEAD2bHist();
	this.instance_3.setTransform(-152.9,135.5,0.82,0.82,0,0,0,88.5,25.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(135).to({_off:false},0).to({x:85.7},9,cjs.Ease.quadOut).wait(26).to({regX:88.4,x:-152.05},9,cjs.Ease.quintIn).to({_off:true},1).wait(122));

	// HEAD2bPlan
	this.instance_4 = new lib.HEAD2bPlan();
	this.instance_4.setTransform(-143.85,135.5,0.82,0.82,0,0,0,88.4,25.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(91).to({_off:false},0).to({regX:88.5,x:85.7},9,cjs.Ease.quintOut).wait(26).to({regX:88.4,x:-152.05},9,cjs.Ease.quintIn).to({_off:true},1).wait(166));

	// ID-phone
	this.instance_5 = new lib.IDphone();
	this.instance_5.setTransform(260.35,500.2,0.6096,0.6096,0,0,0,97,200);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(188).to({_off:false},0).to({regY:200.1,x:89.65,y:329.6},9).wait(31).to({regY:200,x:260.35,y:500.2},11,cjs.Ease.quadIn).to({_off:true},1).wait(62));

	// ID-printer
	this.instance_6 = new lib.IDprinter_1();
	this.instance_6.setTransform(230.25,474.6,0.5405,0.5405,0,0,0,97.2,200.3);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(144).to({_off:false},0).to({regY:200.2,x:78.95,y:323.25},9).wait(35).to({regY:200.3,x:230.25,y:474.6},9).to({_off:true},1).wait(104));

	// ID-emailed
	this.instance_7 = new lib.IDemailed_1();
	this.instance_7.setTransform(233.65,477.25,0.5472,0.5472,0,0,0,97,200.1);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(86).to({_off:false},0).to({x:80.45,y:324.05},9).wait(49).to({x:233.65,y:477.25},9).to({_off:true},1).wait(148));

	// HEAD2a
	this.instance_8 = new lib.HEAD2a();
	this.instance_8.setTransform(99,71.5,1,1,0,0,0,90,17);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(86).to({_off:false},0).wait(142).to({x:109},0).to({alpha:0},11).to({_off:true},1).wait(62));

	// logo
	this.instance_9 = new lib.DD_logo();
	this.instance_9.setTransform(209.5,129.35,1,1,0,0,0,129.5,15.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(74).to({alpha:0},5).to({_off:true},1).wait(160).to({_off:false,x:209.35,alpha:1},0).wait(62));

	// HEAD1
	this.instance_10 = new lib.HEAD1();
	this.instance_10.setTransform(226.8,457.55,0.5093,0.5093,0,0,0,135.7,93.2);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(21).to({_off:false},0).to({regX:135.5,x:80.1,y:310.9},25,cjs.Ease.quintOut).wait(34).to({x:222.7,y:453.5},5,cjs.Ease.quadIn).to({_off:true},1).wait(216));

	// HEAD0
	this.instance_11 = new lib.HEAD0();
	this.instance_11.setTransform(162.95,201,1,1,0,0,0,83,25);
	this.instance_11.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({alpha:1},9).wait(65).to({alpha:0},5).to({_off:true},1).wait(222));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F5B4A5").ss(6,1,0,3).p("EgMBguZIYDAAMAAABczI4DAAg");
	this.shape.setTransform(80,300.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(302));

	// bkgd
	this.instance_12 = new lib.ID300x600bkgd15();

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(302));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-145.4,300,605.3,475.70000000000005);
// library properties:
lib.properties = {
	id: '0957C5EC3B874C629166840920B09671',
	width: 160,
	height: 600,
	fps: 24,
	color: "#999999",
	opacity: 1.00,
	manifest: [
		{src:"images/DD_ID_160x600_atlas_P_1.png?1597537462211", id:"DD_ID_160x600_atlas_P_1"},
		{src:"images/DD_ID_160x600_atlas_NP_1.jpg?1597537462211", id:"DD_ID_160x600_atlas_NP_1"}
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