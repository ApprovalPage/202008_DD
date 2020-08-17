(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"DD_Intro_300x250_atlas_P_1", frames: [[0,0,500,836],[502,0,194,400],[698,0,194,400],[502,402,194,400]]},
		{name:"DD_Intro_300x250_atlas_NP_1", frames: [[0,0,300,600]]}
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



(lib.INTRO300x600bkgd15 = function() {
	this.initialize(ss["DD_Intro_300x250_atlas_NP_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Intro_Calculator = function() {
	this.initialize(ss["DD_Intro_300x250_atlas_P_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.iPhone = function() {
	this.initialize(ss["DD_Intro_300x250_atlas_P_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.screenid = function() {
	this.initialize(ss["DD_Intro_300x250_atlas_P_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.screenplan = function() {
	this.initialize(ss["DD_Intro_300x250_atlas_P_1"]);
	this.gotoAndStop(3);
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


(lib.screenplan_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.screenplan();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.screenplan_1, new cjs.Rectangle(0,0,194,400), null);


(lib.screenid_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.screenid();
	this.instance.setTransform(3,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.screenid_1, new cjs.Rectangle(3,0,194,400), null);


(lib.iPhone_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.iPhone();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4BAE40").s().p("EgduArEI8M8LMAbLg6xMBYqBXxg");
	this.shape.setTransform(378.425,290.625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.iPhone_1, new cjs.Rectangle(0,0,749.1,571.5), null);


(lib.HEAD2b_Plan = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#4BAE40").s().p("AhbBKIAhgnQAgAZAjABQAYAAAAgPIAAgBQAAgGgHgFQgHgEgUgFQgogJgRgLQgXgQAAgdIAAAAQAAgeAWgTQAWgSAlgBQAzAAAjAcIgdAqQgdgVgdAAQgVAAAAANIAAABQAAAHAHAEQAIAEAVAFQAnAJASANQAVAPAAAcIAAABQAAAfgYASQgXATgmgBQg6AAgogig");
	this.shape.setTransform(231.825,28.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4BAE40").s().p("AhPBpIAAjRIA6AAIAACeIBlAAIAAAzg");
	this.shape_1.setTransform(213.75,28.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4BAE40").s().p("AgcBpIAAjRIA5AAIAADRg");
	this.shape_2.setTransform(199.025,28.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4BAE40").s().p("AA3BqIgPgmIhQAAIgPAmIg9AAIBZjTIA3AAIBZDTgAAXAXIgXg7IgXA7IAuAAg");
	this.shape_3.setTransform(182.175,28.425);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4BAE40").s().p("AgcBpIAAieIg/AAIAAgzIC3AAIAAAzIg/AAIAACeg");
	this.shape_4.setTransform(163.05,28.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4BAE40").s().p("AhUBpIAAjRICoAAIAAAxIhvAAIAAAgIBkAAIAAAtIhkAAIAAAhIBwAAIAAAyg");
	this.shape_5.setTransform(143.525,28.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4BAE40").s().p("AhjBpIAAjRIBSAAQA2AAAgAdQAfAcAAAvIAAAAQAAAuggAdQggAeg3AAgAgoA1IAXAAQAaABAQgOQAPgOAAgaIAAAAQAAgYgPgOQgQgOgagBIgXAAg");
	this.shape_6.setTransform(122.025,28.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4BAE40").s().p("AAxBpIhahyIAAByIg5AAIAAjRIA2AAIBVBuIAAhuIA6AAIAADRg");
	this.shape_7.setTransform(90.125,28.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4BAE40").s().p("AA3BqIgPgmIhQAAIgPAmIg9AAIBZjTIA3AAIBZDTgAAXAXIgXg7IgXA7IAuAAg");
	this.shape_8.setTransform(66.425,28.425);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4BAE40").s().p("AhPBpIAAjRIA7AAIAACeIBkAAIAAAzg");
	this.shape_9.setTransform(45.85,28.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4BAE40").s().p("AhYBpIAAjRIBaAAQAoAAAXAUQAYATAAAjIAAAAQAAAjgaAVQgYATgnAAIgdAAIAAA8gAgdAAIAbAAQAPAAAJgHQAJgIAAgMIAAgBQAAgbghAAIgbAAg");
	this.shape_10.setTransform(26.575,28.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("A0JDEIAAmHMAoTAAAIAAGHg");
	this.shape_11.setTransform(128.975,29.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD2b_Plan, new cjs.Rectangle(0,9.6,258,39.1), null);


(lib.HEAD2b_ID = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#4BAE40").s().p("AhjBpIAAjRIBSAAQA2AAAgAdQAfAcAAAvIAAAAQAAAuggAdQggAeg3AAgAgoA1IAXAAQAaABAQgOQAPgOAAgaIAAAAQAAgYgPgOQgQgOgagBIgXAAg");
	this.shape.setTransform(277.725,28.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4BAE40").s().p("AAeBpIgqg/IgZAAIAAA/Ig7AAIAAjRIBjAAQAuAAAWAWQATATAAAeIAAABQAAAtgsATIAzBJgAglgDIAlAAQAPAAAIgHQAIgGAAgMIAAgBQAAgZgfAAIglAAg");
	this.shape_1.setTransform(255.875,28.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4BAE40").s().p("AA3BqIgPgmIhQAAIgPAmIg9AAIBZjTIA3AAIBZDTgAAXAXIgXg7IgXA7IAuAAg");
	this.shape_2.setTransform(232.425,28.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4BAE40").s().p("AhDBPQghggAAgvIAAAAQABgtAfgfQAfggAvAAQA5AAAgAsIgsAhQgTgZgbABQgUAAgPAQQgOAQABAXIAAAAQgBAYAOAQQAPAQAUAAQAbAAAVgZIArAfQghAvg7AAQgtAAgegeg");
	this.shape_3.setTransform(209.95,28.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4BAE40").s().p("AhjBpIAAjRIBSAAQA2AAAgAdQAfAcAAAvIAAAAQAAAuggAdQggAeg3AAgAgoA1IAXAAQAaABAQgOQAPgOAAgaIAAAAQAAgYgPgOQgQgOgagBIgXAAg");
	this.shape_4.setTransform(179.325,28.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4BAE40").s().p("AgcBpIAAjRIA5AAIAADRg");
	this.shape_5.setTransform(162.625,28.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4BAE40").s().p("AhPBpIAAjRIA6AAIAACeIBlAAIAAAzg");
	this.shape_6.setTransform(140.75,28.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4BAE40").s().p("AA3BqIgPgmIhQAAIgPAmIg9AAIBZjTIA3AAIBZDTgAAXAXIgXg7IgXA7IAuAAg");
	this.shape_7.setTransform(118.975,28.425);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4BAE40").s().p("AhGBUQgbgZAAgwIAAh1IA7AAIAABzQAAAuAmgBQAnAAgBgrIAAh1IA8AAIAABzQAAAygbAZQgZAXguAAQguAAgYgXg");
	this.shape_8.setTransform(96.6,28.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4BAE40").s().p("AgcBpIAAieIg/AAIAAgzIC3AAIAAAzIg/AAIAACeg");
	this.shape_9.setTransform(75.3,28.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4BAE40").s().p("AAeBpIgqg/IgZAAIAAA/Ig7AAIAAjRIBjAAQAuAAAWAWQATATAAAeIAAABQAAAtgsATIAzBJgAglgDIAlAAQAPAAAIgHQAIgGAAgMIAAgBQAAgZgfAAIglAAg");
	this.shape_10.setTransform(55.375,28.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#4BAE40").s().p("AgcBpIAAjRIA5AAIAADRg");
	this.shape_11.setTransform(38.975,28.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4BAE40").s().p("AgaBqIhVjTIBBAAIAuCEIAxiEIA/AAIhVDTg");
	this.shape_12.setTransform(22.65,28.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("A3bDDIAAmFMAu3AAAIAAGFg");
	this.shape_13.setTransform(150,28.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD2b_ID, new cjs.Rectangle(0,9.1,328.8,39.1), null);


(lib.HEAD2b_EstCosts = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#4BAE40").s().p("AhbBKIAhgnQAgAZAjABQAYAAAAgPIAAgBQAAgGgHgFQgHgEgUgFQgogJgRgLQgXgQAAgdIAAAAQAAgeAWgTQAWgSAlgBQAzAAAjAcIgdAqQgdgVgdAAQgVAAAAANIAAABQAAAHAHAEQAIAEAVAFQAnAJASANQAVAPAAAcIAAABQAAAfgYASQgXATgmgBQg6AAgogig");
	this.shape.setTransform(268.825,28.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4BAE40").s().p("AgcBpIAAieIg/AAIAAgzIC3AAIAAAzIg/AAIAACeg");
	this.shape_1.setTransform(249.95,28.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4BAE40").s().p("AhbBKIAhgnQAgAZAjABQAYAAAAgPIAAgBQAAgGgHgFQgHgEgUgFQgogJgRgLQgXgQAAgdIAAAAQAAgeAWgTQAWgSAlgBQAzAAAjAcIgdAqQgdgVgdAAQgVAAAAANIAAABQAAAHAHAEQAIAEAVAFQAnAJASANQAVAPAAAcIAAABQAAAfgYASQgXATgmgBQg6AAgogig");
	this.shape_2.setTransform(230.525,28.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4BAE40").s().p("AhQBOQggggAAguIAAAAQAAgtAggfQAhggAvAAQAxAAAgAgQAgAfAAAtIAAAAQAAAuggAfQghAggwAAQgvAAghgfgAgmgnQgPAQAAAXIAAAAQAAAXAPARQAQAQAWAAQAYAAAPgQQAOgQAAgYIAAAAQAAgXgOgQQgQgQgXAAQgXAAgPAQg");
	this.shape_3.setTransform(208.825,28.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4BAE40").s().p("AhEBPQgfggAAgvIAAAAQgBgtAggfQAfggAvAAQA6AAAfAsIgsAhQgTgZgbABQgUAAgPAQQgOAQAAAXIAAAAQAAAYAOAQQAOAQAVAAQAbAAAVgZIArAfQghAvg7AAQgsAAgggeg");
	this.shape_4.setTransform(186.25,28.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4BAE40").s().p("AhUBpIAAjRICoAAIAAAxIhvAAIAAAgIBkAAIAAAtIhkAAIAAAhIBwAAIAAAyg");
	this.shape_5.setTransform(157.125,28.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4BAE40").s().p("AgcBpIAAieIg/AAIAAgzIC3AAIAAAzIg/AAIAACeg");
	this.shape_6.setTransform(136.85,28.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4BAE40").s().p("AA3BqIgPgmIhQAAIgPAmIg9AAIBZjTIA3AAIBZDTgAAXAXIgXg7IgXA7IAuAAg");
	this.shape_7.setTransform(117.725,28.425);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4BAE40").s().p("AA2BpIAAh4Ig2BSIAAAAIg2hSIAAB4Ig5AAIAAjRIA+AAIAxBRIAyhRIA+AAIAADRg");
	this.shape_8.setTransform(92.825,28.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4BAE40").s().p("AgcBpIAAjRIA5AAIAADRg");
	this.shape_9.setTransform(74.925,28.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4BAE40").s().p("AgcBpIAAieIg/AAIAAgzIC3AAIAAAzIg/AAIAACeg");
	this.shape_10.setTransform(60.1,28.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#4BAE40").s().p("AhbBKIAhgnQAgAZAjABQAYAAAAgPIAAgBQAAgGgHgFQgHgEgUgFQgogJgRgLQgXgQAAgdIAAAAQAAgeAWgTQAWgSAlgBQAzAAAjAcIgdAqQgdgVgdAAQgVAAAAANIAAABQAAAHAHAEQAIAEAVAFQAnAJASANQAVAPAAAcIAAABQAAAfgYASQgXATgmgBQg6AAgogig");
	this.shape_11.setTransform(40.675,28.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4BAE40").s().p("AhUBpIAAjRICoAAIAAAxIhvAAIAAAgIBkAAIAAAtIhkAAIAAAhIBwAAIAAAyg");
	this.shape_12.setTransform(21.625,28.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("A2tDDIAAmFMAtbAAAIAAGFg");
	this.shape_13.setTransform(145.4,28.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD2b_EstCosts, new cjs.Rectangle(0,9.1,316.3,39.1), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AhNBLQgfgfAAgrIAAgBQAAgrAfgfQAggfAtAAQAvABAfAeQAfAeAAAsIAAAAQAAAsgfAfQggAeguAAQguAAgfgegAglgmQgOAQAAAWIAAAAQAAAXAPAPQAOARAWAAQAXAAAOgRQAOgPAAgWIAAgBQAAgVgOgRQgPgQgWAAQgWAAgPAQg");
	this.shape.setTransform(249.725,15.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgbBlIAAiYIg9AAIAAgyICxAAIAAAyIg9AAIAACYg");
	this.shape_1.setTransform(229,15.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhYBIIAggmQAfAZAigBQAXABAAgOIAAgBQAAgHgHgEQgHgEgTgFQgngIgQgMQgWgOAAgdIAAAAQAAgdAVgSQAWgSAjAAQAyAAAhAbIgcAnQgcgTgcAAQgUAAAAANIAAABQAAAGAHAEQAHAEAUAFQAmAIARANQAVAOAAAbIAAABQAAAfgXARQgWASgmAAQg4AAgmghg");
	this.shape_2.setTransform(201.625,15.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhYBIIAggmQAfAZAigBQAXABAAgOIAAgBQAAgHgHgEQgHgEgTgFQgngIgQgMQgWgOAAgdIAAAAQAAgdAVgSQAWgSAjAAQAyAAAhAbIgcAnQgcgTgcAAQgUAAAAANIAAABQAAAGAHAEQAHAEAUAFQAmAIARANQAVAOAAAbIAAABQAAAfgXARQgWASgmAAQg4AAgmghg");
	this.shape_3.setTransform(183.025,15.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhRBlIAAjKICiAAIAAAwIhrAAIAAAfIBhAAIAAArIhhAAIAAAhIBsAAIAAAvg");
	this.shape_4.setTransform(164.575,15.05);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhBBLQgfgeAAgsIAAgBQAAgsAegeQAfgeAsgBQA4ABAfAqIgrAgQgTgXgZAAQgUAAgOAPQgNAQAAAWIAAAAQAAAXANAPQAOAQAUAAQAZAAAVgZIAqAeQghAvg5gBQgqAAgegeg");
	this.shape_5.setTransform(144.25,15.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhCBLQgegeAAgsIAAgBQAAgsAegeQAfgeAsgBQA4ABAeAqIgqAgQgTgXgZAAQgUAAgOAPQgNAQgBAWIAAAAQABAXANAPQAOAQAUAAQAZAAAVgZIAqAeQghAvg5gBQgrAAgegeg");
	this.shape_6.setTransform(123.65,15.05);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AA1BmIgOgkIhOAAIgPAkIg6AAIBVjLIA2AAIBWDLgAAWAWIgWg5IgWA5IAsAAg");
	this.shape_7.setTransform(102.6,14.975);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgbBlIAAhLIhOh/IBBAAIAoBLIArhLIA/AAIhOB9IAABNg");
	this.shape_8.setTransform(72.6,15.05);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhYBIIAggmQAfAZAigBQAXABAAgOIAAgBQAAgHgHgEQgHgEgTgFQgngIgQgMQgWgOAAgdIAAAAQAAgdAVgSQAWgSAjAAQAyAAAhAbIgcAnQgcgTgcAAQgUAAAAANIAAABQAAAGAHAEQAHAEAUAFQAmAIARANQAVAOAAAbIAAABQAAAfgXARQgWASgmAAQg4AAgmghg");
	this.shape_9.setTransform(53.225,15.05);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AA1BmIgPgkIhNAAIgPAkIg7AAIBWjLIA2AAIBXDLgAAWAWIgWg5IgXA5IAtAAg");
	this.shape_10.setTransform(32.9,14.975);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhRBlIAAjKICiAAIAAAwIhrAAIAAAfIBhAAIAAArIhhAAIAAAhIBsAAIAAAvg");
	this.shape_11.setTransform(12.025,15.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD2a, new cjs.Rectangle(0,0,280,33), null);


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
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4BAE40").s().p("A4x05IAAmrIB9AAIB/B/IAQgbIgBgBIAkg6IABgCIADgFIAAAAIAVgiIB+AAIBhBhIBEAAIBhBhIAfhhIB4AAIAfAfQAAg8AsglQAugnBMAAQBpAABGA5IA+A+IAAgOIB0AAIAWAWQAigeAqAAQBDAAAcA2QAug2BAAAQA1AAAdAgIBdBdIAAh1IAbAAIgegeIAAhWIB5AAIBCBCIAAhCIBzAAICDCEQAmgYAyAAQBQAAAuA2QAQAVEpEoIElEkMAAaArsg");
	this.shape_8.setTransform(161.4,184.625);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD1, new cjs.Rectangle(-3,0,323,363), null);


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
	this.shape.graphics.f("#4BAE40").s().p("Ag6A5QgYgXAAgiIAAAAQAAggAYgXQAYgYAiAAQAkAAAXAXQAYAXAAAhIAAAAQAAAigYAWQgYAYgjAAQgiAAgYgXgAgcgcQgLAMAAAQIAAAAQAAARALAMQAMANAQAAQARgBAMgMQAKgLAAgSIAAAAQAAgQgKgMQgMgMgRAAQgQAAgMAMg");
	this.shape.setTransform(69.65,24.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4BAE40").s().p("AgVBNIAAhzIgtAAIAAgmICFAAIAAAmIguAAIAABzg");
	this.shape_1.setTransform(53.925,24.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4BAE40").s().p("Ag+BNIAAiZIB7AAIAAAkIhQAAIAAAXIBJAAIAAAhIhJAAIAAAZIBRAAIAAAkg");
	this.shape_2.setTransform(33.55,24.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4BAE40").s().p("AAoBNIAAhXIgoA7IAAAAIgng7IAABXIgqAAIAAiZIAtAAIAkA7IAkg7IAuAAIAACZg");
	this.shape_3.setTransform(16.45,24.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4BAE40").s().p("Ag7A5QgXgXAAgiIAAAAQAAggAYgXQAYgYAiAAQAjAAAZAXQAXAXAAAhIAAAAQAAAigYAWQgYAYgjAAQgjAAgYgXgAgbgcQgLAMAAAQIAAAAQAAARALAMQALANAQAAQARgBALgMQALgLAAgSIAAAAQAAgQgLgMQgLgMgRAAQgRAAgKAMg");
	this.shape_4.setTransform(-2.2,24.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4BAE40").s().p("AgxA6QgYgXAAgjIAAAAQAAghAXgXQAYgXAhAAQAqAAAYAgIggAZQgPgTgTABQgPAAgLAMQgKAMAAAQIAAAAQAAARAKAMQALAMAPAAQATAAAQgSIAgAWQgaAjgqAAQghAAgWgWg");
	this.shape_5.setTransform(-18.725,24.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4BAE40").s().p("Ag6BNIAAiZIArAAIAAB0IBKAAIAAAlg");
	this.shape_6.setTransform(-32.375,24.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4BAE40").s().p("Ag+BNIAAiZIB7AAIAAAkIhQAAIAAAXIBJAAIAAAhIhJAAIAAAZIBRAAIAAAkg");
	this.shape_7.setTransform(-46.65,24.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4BAE40").s().p("AAfBOIgfhYIgeBYIglAAIg0iaIAtAAIAbBYIAehZIAkAAIAdBZIAbhYIAtAAIg0Cag");
	this.shape_8.setTransform(-66.5,24.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AuzD6IAAnzIdoAAIAAHzg");
	this.shape_9.setTransform(0.15,25);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD0, new cjs.Rectangle(-94.7,0,189.7,50), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("ABXDbIhXj4IhWD4IhpAAIiRm0IB/AAIBMD6IBTj7IBnAAIBUD7IBLj6IB9AAIiRG0g");
	this.shape.setTransform(134.3,85.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AimCgQhDhBAAheIAAgBQAAhdBDhCQBEhCBjAAQBjAABEBCQBCBAAABeIAAABQAABehDBBQhEBDhjAAQhjAAhDhCgAhQhSQgeAhAAAwIAAABQAAAwAfAiQAgAjAwAAQAwAAAfgjQAeghAAgwIAAgBQAAgwgegiQgggigwAAQgwAAggAig");
	this.shape_1.setTransform(76.425,85.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABkDZIi5jtIAADtIh3AAIAAmxIBxAAICxDkIAAjkIB3AAIAAGxg");
	this.shape_2.setTransform(26.35,85.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ai2DZIAAmxIC5AAQBTAAAwAoQAxApAABHIAAABQAABKg1AqQgyAohSAAIg8AAIAAB8gAg+AAIA6AAQAegBATgPQASgPAAgaIAAgCQAAg4hEAAIg5AAg");
	this.shape_3.setTransform(245.225,29.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AiTCsQg2gyAAhjIAAjzIB6AAIAADwQAABdBPAAQBQAAAAhaIAAjzIB6AAIAADvQAABmg4AzQg0AxhfAAQheAAg0gxg");
	this.shape_4.setTransform(199.625,30.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABkDZIi5jtIAADtIh3AAIAAmxIBwAAICxDkIAAjkIB4AAIAAGxg");
	this.shape_5.setTransform(134.65,29.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AiQCjQhDhAAAhiIAAgBQAAhfBChAQBDhCBjAAQBoAABIA/IhHBVQgwgpg4AAQguAAggAjQggAiAAAxIAAABQAAA1AhAiQAhAiAyAAQArAAAbgSIAAg1IhVAAIAAhXIDHAAIAADCQhRBEhsAAQhkAAhDg/g");
	this.shape_6.setTransform(86.275,29.925);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag7DZIAAmxIB3AAIAAGxg");
	this.shape_7.setTransform(52.575,29.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ai9CZIBEhQQBCA0BJAAQAyAAABgeIAAgCQgBgNgOgJQgPgJgrgLQhSgSgigYQgwggAAg8IAAgCQAAg9AtgnQAugnBNABQBqgBBHA6Ig8BVQg7gqg9AAQgsAAAAAbIAAABQABAQAPAIQAPAJAsAKQBRARAlAcQArAgAAA5IAAABQABBCgxAmQgvAmhQAAQh5AAhShIg");
	this.shape_8.setTransform(21.5,29.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// shad
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4BAE40").s().p("A8NvPIAAmyIBwAAICyDGIAAhEQkqkqgZgWIBDhQQA4AsA+AHQhvhugGgFQgwggAAg9IAAgBQAAg+AtgmQAugnBNAAQBrAABIA5IBJBJIAAh7IB4AAIBiBiQAOgWATgTQBDhBBkAAQBoAABIA+IBSBSIAAiIIBwAAICyCyIAAiyIB4AAIDzDzIAAjzIB4AAIChChIAAihIB5AAIBHBHIAAhHIC7AAQBSAAAxAoQAUARInIoIIiIlMgK2ArlgA4t6AQgCgKgMgHIAOARIAAAAg");
	this.shape_9.setTransform(186.475,205.175);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEADEndFrame, new cjs.Rectangle(0,0,370.4,403), null);


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
	this.shape.graphics.f("#4BAE40").s().p("Ag5BNIAAiZIBxAAIAAAYIhWAAIAAAoIBNAAIAAAXIhNAAIAAAqIBXAAIAAAYg");
	this.shape.setTransform(69.95,24.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4BAE40").s().p("AAhBNIgkg1IgiAAIAAA1IgbAAIAAiZIBDAAQAdAAAQAPQAMAOAAATIAAABQAAAjgkAKIApA7gAglAAIAmAAQAPAAAIgHQAJgGAAgNIAAAAQAAgMgJgHQgIgHgPAAIgmAAg");
	this.shape_1.setTransform(54.825,24.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4BAE40").s().p("Ag5A4QgXgWAAgiIAAAAQAAggAXgXQAYgXAhgBQAjAAAXAYQAXAXgBAgIAAAAQABAhgXAXQgXAYgjgBQgiAAgXgXgAgkgmQgPAQAAAWIAAAAQAAAXAPAPQAOARAWgBQAXAAAOgPQAPgQAAgXIAAAAQAAgWgPgPQgOgRgXAAQgWAAgOAQg");
	this.shape_2.setTransform(36.95,24.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4BAE40").s().p("AAwBNIAAhuIgwBIIAAAAIgwhHIAABtIgbAAIAAiZIAdAAIAuBJIAvhJIAcAAIAACZg");
	this.shape_3.setTransform(18.1,24.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4BAE40").s().p("AAsBNIhThsIAABsIgbAAIAAiZIAZAAIBSBpIAAhpIAaAAIAACZg");
	this.shape_4.setTransform(-6.7,24.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4BAE40").s().p("AAhBNIgkg1IgiAAIAAA1IgbAAIAAiZIBDAAQAdAAAQAPQAMAOAAATIAAABQAAAjgkAKIApA7gAglAAIAmAAQAPAAAIgHQAJgGAAgNIAAAAQAAgMgJgHQgIgHgPAAIgmAAg");
	this.shape_5.setTransform(-22.775,24.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4BAE40").s().p("AA0BNIgQglIhIAAIgPAlIgcAAIBEiZIAYAAIBDCZgAAaAQIgag8IgaA8IA0AAg");
	this.shape_6.setTransform(-39.975,24.85);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4BAE40").s().p("Ag5BNIAAiZIBxAAIAAAYIhWAAIAAAoIBNAAIAAAXIhNAAIAAAqIBXAAIAAAYg");
	this.shape_7.setTransform(-55.6,24.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4BAE40").s().p("Ag1BNIAAiZIAbAAIAACAIBQAAIAAAZg");
	this.shape_8.setTransform(-69.55,24.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AumD6IAAnzIdNAAIAAHzg");
	this.shape_9.setTransform(0,25);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CTA, new cjs.Rectangle(-93.5,0,187.1,50), null);


(lib.Calc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.instance = new lib.Intro_Calculator();
	this.instance.setTransform(0,0,0.385,0.385);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4BAE40").s().p("A8gJsMAc1gviIcMcLMgAeAvAI8YAig");
	this.shape.setTransform(187.5,250.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Calc, new cjs.Rectangle(0,0,370,492.4), null);


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
(lib.DD_Intro_300x250 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,349];
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
	this.frame_349 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(349).call(this.frame_349).wait(1));

	// CTA
	this.instance = new lib.CTA();
	this.instance.setTransform(150.05,211.35,0.77,0.77,0,0,0,0.1,25.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(298).to({_off:false},0).wait(52));

	// HEAD-EndFrame
	this.instance_1 = new lib.HEADEndFrame();
	this.instance_1.setTransform(493.5,473.9,1,1,0,0,0,197,132);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(288).to({_off:false},0).to({x:213.5,y:193.9},10,cjs.Ease.quadOut).wait(52));

	// HEAD2b_CE
	this.instance_2 = new lib.HEAD2b_EstCosts();
	this.instance_2.setTransform(-143.2,28.85,0.8,0.8,0,0,0,88.5,25.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(217).to({_off:false},0).to({x:89.55},9,cjs.Ease.quadOut).wait(38).to({x:-137.55},11).to({_off:true},1).wait(74));

	// HEAD2b_ID
	this.instance_3 = new lib.HEAD2b_ID();
	this.instance_3.setTransform(-143.2,60.9,0.8,0.8,0,0,0,88.5,25.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(145).to({_off:false},0).to({x:89.55},9,cjs.Ease.quadOut).wait(54).to({x:-142.35},9,cjs.Ease.quintIn).to({_off:true},1).wait(132));

	// HEAD2b_Plan
	this.instance_4 = new lib.HEAD2b_Plan();
	this.instance_4.setTransform(-142.35,60.9,0.8,0.8,0,0,0,88.5,25.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(91).to({_off:false},0).to({x:89.55},9,cjs.Ease.quintOut).wait(36).to({x:-142.35},9,cjs.Ease.quintIn).to({_off:true},1).wait(204));

	// mask copy 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_154 = new cjs.Graphics().p("AlHJ7IAAz1IKPAAIAAT1g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(154).to({graphics:mask_graphics_154,x:145.85,y:167.625}).wait(54).to({graphics:null,x:0,y:0}).wait(142));

	// screen-id
	this.instance_5 = new lib.screenid_1();
	this.instance_5.setTransform(79.5,167.8,0.3887,0.3887,0,0,0,96.9,200.2);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(154).to({_off:false},0).to({regX:97.1,x:144.4},9).wait(45).to({x:311.6,y:334.95},11,cjs.Ease.quadIn).to({_off:true},1).wait(130));

	// mask copy (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_95 = new cjs.Graphics().p("AlHJ7IAAz1IKPAAIAAT1g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(95).to({graphics:mask_1_graphics_95,x:145.85,y:167.625}).wait(69).to({graphics:null,x:0,y:0}).wait(186));

	// screen-plan
	this.instance_6 = new lib.screenplan_1();
	this.instance_6.setTransform(311.6,334.95,0.3887,0.3887,0,0,0,97.1,200.2);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(86).to({_off:false},0).to({x:144.4,y:167.8},9).wait(59).to({regX:97.2,x:209.75},9).to({_off:true},1).wait(186));

	// Calc
	this.instance_7 = new lib.Calc();
	this.instance_7.setTransform(375.95,387.4,0.5403,0.5403,0,0,0,181.2,283.2);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(220).to({_off:false},0).to({regX:181.1,x:200.85,y:212.35},9).wait(47).to({regX:181.2,x:375.95,y:387.4},11,cjs.Ease.quadIn).to({_off:true},1).wait(62));

	// iPhone
	this.instance_8 = new lib.iPhone_1();
	this.instance_8.setTransform(345,367.25,0.3887,0.3887,0,0,0,181,283.2);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(86).to({_off:false},0).to({regX:181.1,regY:283.1,x:177.85,y:200.05},9).wait(113).to({regX:181,regY:283.2,x:345,y:367.25},11,cjs.Ease.quadIn).to({_off:true},1).wait(130));

	// HEAD2a
	this.instance_9 = new lib.HEAD2a();
	this.instance_9.setTransform(89.95,32.5,0.8,0.8,0,0,0,90,17.1);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(86).to({_off:false},0).wait(122).to({alpha:0},11).to({_off:true},1).wait(130));

	// logo
	this.instance_10 = new lib.DD_logo();
	this.instance_10.setTransform(150,55.3,1,1,0,0,0,129.5,15.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(74).to({alpha:0},5).to({_off:true},1).wait(208).to({_off:false,y:35.3,alpha:1},0).wait(62));

	// HEAD1
	this.instance_11 = new lib.HEAD1();
	this.instance_11.setTransform(440.5,525.4,1,1,0,0,0,135.5,93);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(21).to({_off:false},0).to({x:152.5,y:237.4},25,cjs.Ease.quintOut).wait(34).to({x:432.5,y:517.4},5,cjs.Ease.quadIn).to({_off:true},1).wait(264));

	// HEAD0
	this.instance_12 = new lib.HEAD0();
	this.instance_12.setTransform(232.85,110.95,1,1,0,0,0,83,25);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(11).to({_off:false},0).to({alpha:1},9).wait(54).to({alpha:0},5).to({_off:true},1).wait(270));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#8ADA8F").ss(6,1,0,3).p("A29zDMAt7AAAMAAAAmHMgt7AAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(350));

	// bkgd
	this.instance_13 = new lib.INTRO300x600bkgd15();

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(350));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-64,125,734.1,670.4);
// library properties:
lib.properties = {
	id: '0957C5EC3B874C629166840920B09671',
	width: 300,
	height: 250,
	fps: 24,
	color: "#999999",
	opacity: 1.00,
	manifest: [
		{src:"images/DD_Intro_300x250_atlas_P_1.png?1597707887313", id:"DD_Intro_300x250_atlas_P_1"},
		{src:"images/DD_Intro_300x250_atlas_NP_1.jpg?1597707887313", id:"DD_Intro_300x250_atlas_NP_1"}
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