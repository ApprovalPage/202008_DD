(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"DD_Intro_160x600_atlas_P_1", frames: [[0,0,500,836],[502,0,194,400],[698,0,194,400],[502,402,194,400]]},
		{name:"DD_Intro_160x600_atlas_NP_1", frames: [[0,0,300,600]]}
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
	this.initialize(ss["DD_Intro_160x600_atlas_NP_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Intro_Calculator = function() {
	this.initialize(ss["DD_Intro_160x600_atlas_P_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.iPhone = function() {
	this.initialize(ss["DD_Intro_160x600_atlas_P_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.screenid = function() {
	this.initialize(ss["DD_Intro_160x600_atlas_P_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.screenplan = function() {
	this.initialize(ss["DD_Intro_160x600_atlas_P_1"]);
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
	this.shape.graphics.f("#4BAE40").s().p("A7qPTMAbLg6wIcKcLMgbLA6wg");
	this.shape.setTransform(184.875,287.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.iPhone_1, new cjs.Rectangle(0,0,362,566.2), null);


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
	this.shape.graphics.f("#4BAE40").s().p("AhbBKIAhgnQAgAaAjgBQAYAAAAgOIAAgBQAAgGgHgFQgHgEgUgFQgogJgRgMQgXgOAAgeIAAAAQAAgeAWgSQAWgUAlAAQAzAAAjAdIgdAoQgdgUgdAAQgVAAAAANIAAABQAAAHAHAEQAIAEAVAFQAnAJASANQAVAPAAAcIAAAAQAAAggYATQgXASgmAAQg6AAgogjg");
	this.shape.setTransform(132.625,76.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4BAE40").s().p("AhPBpIAAjRIA7AAIAACeIBkAAIAAAzg");
	this.shape_1.setTransform(114.55,76.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4BAE40").s().p("AgcBpIAAjRIA5AAIAADRg");
	this.shape_2.setTransform(99.825,76.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4BAE40").s().p("AA3BqIgPgmIhQAAIgPAmIg9AAIBZjTIA3AAIBZDTgAAXAXIgXg7IgXA7IAuAAg");
	this.shape_3.setTransform(82.975,76.425);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4BAE40").s().p("AgcBpIAAieIg/AAIAAgzIC3AAIAAAzIg/AAIAACeg");
	this.shape_4.setTransform(63.85,76.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4BAE40").s().p("AhUBpIAAjRICoAAIAAAxIhvAAIAAAgIBkAAIAAAtIhkAAIAAAiIBwAAIAAAxg");
	this.shape_5.setTransform(44.325,76.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4BAE40").s().p("AhjBpIAAjRIBSAAQA2AAAgAdQAfAcAAAvIAAAAQAAAuggAdQggAeg3AAgAgoA1IAXAAQAaAAAQgNQAPgPAAgYIAAgBQAAgYgPgPQgQgNgaAAIgXAAg");
	this.shape_6.setTransform(22.825,76.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4BAE40").s().p("AAxBpIhahyIAAByIg5AAIAAjRIA2AAIBVBuIAAhuIA6AAIAADRg");
	this.shape_7.setTransform(85.275,28.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4BAE40").s().p("AA3BqIgPgmIhQAAIgPAmIg9AAIBZjTIA3AAIBZDTgAAXAXIgXg7IgXA7IAuAAg");
	this.shape_8.setTransform(61.575,28.425);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4BAE40").s().p("AhPBpIAAjRIA7AAIAACeIBkAAIAAAzg");
	this.shape_9.setTransform(41,28.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4BAE40").s().p("AhYBpIAAjRIBaAAQAoAAAXAUQAYATAAAjIAAAAQAAAjgaAVQgYATgnAAIgdAAIAAA8gAgdAAIAbAAQAPAAAJgHQAJgIAAgMIAAgBQAAgbghAAIgbAAg");
	this.shape_10.setTransform(21.725,28.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AsWGzIAAmGIYtAAIAAGGgAsWgsIAAmGIRRAAIAAGGg");
	this.shape_11.setTransform(79.05,52.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD2b_Plan, new cjs.Rectangle(0,9.1,237.5,87.10000000000001), null);


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
	this.shape.graphics.f("#4BAE40").s().p("AhjBpIAAjRIBSAAQA2AAAgAdQAfAcAAAvIAAAAQAAAuggAdQggAeg3AAgAgoA1IAXAAQAaAAAQgNQAPgPAAgYIAAgBQAAgYgPgPQgQgNgaAAIgXAAg");
	this.shape.setTransform(131.275,76.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4BAE40").s().p("AAeBpIgqhAIgZAAIAABAIg7AAIAAjRIBjAAQAuAAAWAWQATATAAAfIAAAAQAAAugsASIAzBJgAglgDIAlAAQAPAAAIgHQAIgHAAgLIAAgBQAAgZgfAAIglAAg");
	this.shape_1.setTransform(109.425,76.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4BAE40").s().p("AA3BqIgPgmIhQAAIgPAmIg9AAIBZjTIA3AAIBZDTgAAXAXIgXg7IgXA7IAuAAg");
	this.shape_2.setTransform(85.975,76.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4BAE40").s().p("AhEBOQgfgfAAguIAAgBQAAgtAfgfQAfggAvAAQA5AAAgArIgsAiQgTgYgbgBQgUAAgPARQgNAQAAAXIAAAAQAAAYANAQQAOAQAVAAQAbAAAVgZIArAfQghAvg7AAQgsAAgggfg");
	this.shape_3.setTransform(63.5,76.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4BAE40").s().p("AhjBpIAAjRIBSAAQA2AAAgAdQAfAcAAAvIAAAAQAAAuggAdQggAeg3AAgAgoA1IAXAAQAaAAAQgNQAPgPAAgYIAAgBQAAgYgPgPQgQgNgaAAIgXAAg");
	this.shape_4.setTransform(32.875,76.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4BAE40").s().p("AgcBpIAAjRIA5AAIAADRg");
	this.shape_5.setTransform(16.175,76.5);

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
	this.shape_13.graphics.f("#FFFFFF").s().p("AsWGzIAAmGIYtAAIAAGGgAsWgsIAAmGIYtAAIAAGGg");
	this.shape_13.setTransform(79.05,52.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD2b_ID, new cjs.Rectangle(0,9.1,185,87.10000000000001), null);


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
	this.shape.graphics.f("#4BAE40").s().p("AhbBKIAhgnQAgAaAjgBQAYAAAAgOIAAgBQAAgGgHgFQgHgEgUgFQgogJgRgMQgXgOAAgeIAAAAQAAgeAWgSQAWgUAlAAQAzAAAjAdIgdAoQgdgUgdAAQgVAAAAANIAAABQAAAHAHAEQAIAEAVAFQAnAJASANQAVAPAAAcIAAAAQAAAggYATQgXASgmAAQg6AAgogjg");
	this.shape.setTransform(105.025,76.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4BAE40").s().p("AgcBpIAAieIg/AAIAAgzIC3AAIAAAzIg/AAIAACeg");
	this.shape_1.setTransform(86.15,76.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4BAE40").s().p("AhbBKIAhgnQAgAaAjgBQAYAAAAgOIAAgBQAAgGgHgFQgHgEgUgFQgogJgRgMQgXgOAAgeIAAAAQAAgeAWgSQAWgUAlAAQAzAAAjAdIgdAoQgdgUgdAAQgVAAAAANIAAABQAAAHAHAEQAIAEAVAFQAnAJASANQAVAPAAAcIAAAAQAAAggYATQgXASgmAAQg6AAgogjg");
	this.shape_2.setTransform(66.725,76.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4BAE40").s().p("AhQBNQgggeAAguIAAgBQAAgsAgggQAhggAvAAQAxAAAgAgQAgAfAAAtIAAAAQAAAtggAgQghAggwAAQgvAAghgggAgmgnQgPAQAAAXIAAAAQAAAYAPAQQAQAQAWABQAYAAAPgRQAOgQAAgXIAAgBQAAgXgOgQQgQgRgXAAQgXAAgPARg");
	this.shape_3.setTransform(45.025,76.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4BAE40").s().p("AhEBOQgfgfAAguIAAgBQgBgtAggfQAfggAvAAQA6AAAfArIgsAiQgTgYgbgBQgUAAgPARQgOAQAAAXIAAAAQAAAYAOAQQAOAQAVAAQAbAAAVgZIArAfQghAvg7AAQgsAAgggfg");
	this.shape_4.setTransform(22.45,76.5);

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
	this.shape_13.graphics.f("#FFFFFF").s().p("AsWDDIAAmFIYtAAIAAGFg");
	this.shape_13.setTransform(63.7251,76.6,0.8061,1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AuBDDIAAmFIcDAAIAAGFg");
	this.shape_14.setTransform(89.775,28.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD2b_EstCosts, new cjs.Rectangle(0,9.1,185,87.10000000000001), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("Ag9A7QgZgYAAgjIAAAAQAAgiAZgYQAZgZAkAAQAlAAAZAYQAZAYAAAjIAAAAQAAAjgZAYQgZAZglAAQgkAAgZgZgAgdgeQgLAMAAASIAAAAQAAASALAMQAMANARAAQASAAAMgNQALgMAAgSIAAAAQAAgRgMgNQgLgNgSAAQgRAAgMANg");
	this.shape.setTransform(127.825,37.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgVBQIAAh4IgxAAIAAgnICMAAIAAAnIgwAAIAAB4g");
	this.shape_1.setTransform(111.4,37.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhFA4IAZgdQAYATAbAAQASAAAAgLIAAgBQAAgFgFgDQgGgDgPgEQgegHgNgJQgSgLAAgWIAAgBQAAgXARgOQARgOAcAAQAnAAAbAVIgWAfQgWgPgWAAQgRAAAAAKIAAAAQAAAGAGADQAGADAQAEQAeAHANAKQAQALAAAVIAAABQAAAYgRAOQgSAOgeAAQgsAAgegbg");
	this.shape_2.setTransform(89.725,37.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhFA4IAZgdQAYATAbAAQASAAAAgLIAAgBQAAgFgFgDQgGgDgPgEQgegHgNgJQgSgLAAgWIAAgBQAAgXARgOQARgOAcAAQAnAAAbAVIgWAfQgWgPgWAAQgRAAAAAKIAAAAQAAAGAGADQAGADAQAEQAeAHANAKQAQALAAAVIAAABQAAAYgRAOQgSAOgeAAQgsAAgegbg");
	this.shape_3.setTransform(74.975,37.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhABQIAAifICAAAIAAAlIhUAAIAAAZIBMAAIAAAiIhMAAIAAAZIBVAAIAAAmg");
	this.shape_4.setTransform(60.375,37.35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag0A8QgYgYAAgkIAAAAQAAgjAYgYQAZgYAiAAQAtAAAYAhIgiAaQgPgTgUAAQgPAAgMANQgKAMgBASIAAAAQABASAKAMQAMANAPAAQAUAAAQgUIAiAYQgaAlgtAAQgiAAgYgYg");
	this.shape_5.setTransform(44.2,37.375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag0A8QgYgYAAgkIAAAAQAAgjAYgYQAYgYAkAAQArAAAZAhIghAaQgQgTgUAAQgQAAgKANQgMAMAAASIAAAAQAAASAMAMQAKANAQAAQAVAAAQgUIAhAYQgbAlgsAAQgiAAgYgYg");
	this.shape_6.setTransform(27.85,37.375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAqBRIgLgdIg+AAIgLAdIgvAAIBFihIAqAAIBEChgAARASIgRgtIgSAtIAjAAg");
	this.shape_7.setTransform(11.15,37.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgVBRIAAg9Ig+hjIAzAAIAgA6IAig6IAyAAIg+BjIAAA9g");
	this.shape_8.setTransform(58.025,12.35);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhFA4IAZgdQAYATAbAAQASAAAAgLIAAgBQAAgFgFgDQgGgDgPgEQgegHgNgJQgSgLAAgWIAAgBQAAgXARgOQARgOAcAAQAnAAAbAVIgWAfQgWgPgWAAQgRAAAAAKIAAAAQAAAGAGADQAGADAQAEQAeAHANAKQAQALAAAVIAAABQAAAYgRAOQgSAOgeAAQgsAAgegbg");
	this.shape_9.setTransform(42.625,12.375);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAqBRIgMgdIg9AAIgLAdIgvAAIBFihIApAAIBFChgAASARIgSgtIgRAtIAjAAg");
	this.shape_10.setTransform(26.5,12.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhABRIAAigICAAAIAAAlIhUAAIAAAZIBMAAIAAAiIhMAAIAAAZIBVAAIAAAng");
	this.shape_11.setTransform(9.975,12.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD2a, new cjs.Rectangle(0,0,145,52), null);


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
	this.shape.graphics.f("#4BAE40").s().p("AgvAuQgUgSAAgcIAAAAQAAgbAUgTQATgSAcAAQAdAAAUASQATATAAAbIAAAAQAAAcgTASQgUAUgdgBQgcABgTgUgAgWgXQgJAKAAANIAAAAQAAAOAJAKQAJAKANAAQAOAAAJgKQAJgJAAgPIAAAAQAAgNgJgKQgJgKgOAAQgNAAgJAKg");
	this.shape.setTransform(56.975,23.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4BAE40").s().p("AgRA/IAAheIglAAIAAgfIBtAAIAAAfIgmAAIAABeg");
	this.shape_1.setTransform(44.15,23.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4BAE40").s().p("AgyA/IAAh9IBkAAIAAAdIhCAAIAAAUIA8AAIAAAbIg8AAIAAAUIBDAAIAAAdg");
	this.shape_2.setTransform(27.475,23.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4BAE40").s().p("AAhA/IAAhIIghAxIAAAAIgggwIAABHIgiAAIAAh9IAlAAIAdAxIAegxIAlAAIAAB9g");
	this.shape_3.setTransform(13.45,23.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4BAE40").s().p("AgvAuQgUgSAAgcIAAAAQAAgbAUgTQATgSAcAAQAdAAAUASQATATAAAbIAAAAQAAAcgTASQgUAUgdgBQgcABgTgUgAgWgXQgJAKAAANIAAAAQAAAOAJAKQAJAKANAAQAOAAAJgKQAJgJAAgPIAAAAQAAgNgJgKQgJgKgOAAQgNAAgJAKg");
	this.shape_4.setTransform(-1.825,23.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4BAE40").s().p("AgoAvQgTgSAAgdIAAAAQAAgbATgTQATgSAbAAQAiAAATAaIgaAUQgMgPgPAAQgMAAgJAKQgIAKAAANIAAAAQAAAPAIAJQAJAKAMAAQAQgBAMgPIAaATQgUAcgjAAQgbAAgSgSg");
	this.shape_5.setTransform(-15.325,23.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4BAE40").s().p("AgvA/IAAh9IAjAAIAABfIA8AAIAAAeg");
	this.shape_6.setTransform(-26.5,23.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4BAE40").s().p("AgyA/IAAh9IBkAAIAAAdIhCAAIAAAUIA8AAIAAAbIg8AAIAAAUIBDAAIAAAdg");
	this.shape_7.setTransform(-38.175,23.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4BAE40").s().p("AAZBAIgZhIIgYBIIgfAAIgqh+IAlAAIAWBIIAZhJIAcAAIAZBJIAVhIIAlAAIgqB+g");
	this.shape_8.setTransform(-54.45,23.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ArtCNIAAkZIXbAAIAAEZg");
	this.shape_9.setTransform(0.1256,23.475,0.9308,1);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));

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
	this.shape.graphics.f("#4BAE40").s().p("A8gkFMAc1gvjIcMcLMgBUBLGg");
	this.shape.setTransform(187.5,338.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Calc, new cjs.Rectangle(0,0,370,668.8), null);


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
(lib.DD_Intro_160x600 = function(mode,startPosition,loop,reversed) {
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

	// HEAD-EndFrame
	this.instance = new lib.HEADEndFrame();
	this.instance.setTransform(258.1,461.65,0.5211,0.5211,0,0,0,197.1,132);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(288).to({_off:false},0).to({regX:197,x:112.15,y:315.75},10,cjs.Ease.quadOut).wait(52));

	// HEAD2bDent
	this.instance_1 = new lib.HEAD2b_EstCosts();
	this.instance_1.setTransform(-140.4,84.2,0.7572,0.7572,0,0,0,88.4,25.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(217).to({_off:false},0).to({regX:88.5,x:79.95},9,cjs.Ease.quadOut).wait(38).to({x:-135.05},11).to({_off:true},1).wait(74));

	// HEAD2bHist
	this.instance_2 = new lib.HEAD2b_ID();
	this.instance_2.setTransform(-140.4,99.35,0.7572,0.7572,0,0,0,88.4,25.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(145).to({_off:false},0).to({regX:88.5,x:79.95},9,cjs.Ease.quadOut).wait(54).to({x:-139.6},9,cjs.Ease.quintIn).to({_off:true},1).wait(132));

	// HEAD2bPlan
	this.instance_3 = new lib.HEAD2b_Plan();
	this.instance_3.setTransform(-139.6,99.35,0.7572,0.7572,0,0,0,88.5,25.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(91).to({_off:false},0).to({x:79.95},9,cjs.Ease.quintOut).wait(36).to({x:-139.6},9,cjs.Ease.quintIn).to({_off:true},1).wait(204));

	// mask copy 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_154 = new cjs.Graphics().p("EgIiAlwMAAAgmTITwAAMAAAAmTg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(154).to({graphics:mask_graphics_154,x:71.775,y:241.575}).wait(54).to({graphics:null,x:0,y:0}).wait(142));

	// screen-id
	this.instance_4 = new lib.screenid_1();
	this.instance_4.setTransform(-47.6,361.05,0.7498,0.7498,0,0,0,97,200.1);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(154).to({_off:false},0).to({x:77.55},9).wait(45).to({regX:97.1,x:265,y:548.45},11,cjs.Ease.quadIn).to({_off:true},1).wait(130));

	// mask copy (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_95 = new cjs.Graphics().p("Ap4TKMAAAgmTITxAAMAAAAmTg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(95).to({graphics:mask_1_graphics_95,x:80.3,y:360.575}).wait(69).to({graphics:null,x:0,y:0}).wait(186));

	// screen-plan
	this.instance_5 = new lib.screenplan_1();
	this.instance_5.setTransform(265,548.45,0.7498,0.7498,0,0,0,97.1,200.1);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(86).to({_off:false},0).to({regX:97,x:77.55,y:361.05},9).wait(59).to({regX:97.2,x:203.6},9).to({_off:true},1).wait(186));

	// Calc
	this.instance_6 = new lib.Calc();
	this.instance_6.setTransform(319.8,595.95,0.7163,0.7163,0,0,0,181.1,283.2);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(220).to({_off:false},0).to({x:140.7,y:416.85},9).wait(47).to({x:319.8,y:595.95},11,cjs.Ease.quadIn).to({_off:true},1).wait(62));

	// iPhone
	this.instance_7 = new lib.iPhone_1();
	this.instance_7.setTransform(329.5,610.75,0.7498,0.7498,0,0,0,181.1,283.2);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(86).to({_off:false},0).to({x:142.05,y:423.35},9).wait(113).to({x:329.5,y:610.75},11,cjs.Ease.quadIn).to({_off:true},1).wait(130));

	// HEAD2a
	this.instance_8 = new lib.HEAD2a();
	this.instance_8.setTransform(99,49.5,1,1,0,0,0,90,17);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(86).to({_off:false},0).wait(122).to({alpha:0},11).to({_off:true},1).wait(130));

	// logo
	this.instance_9 = new lib.DD_logo();
	this.instance_9.setTransform(209.5,129.35,1,1,0,0,0,129.5,15.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(74).to({alpha:0},5).to({_off:true},1).wait(208).to({_off:false,x:209.35,y:189.35,alpha:1},0).wait(62));

	// HEAD1
	this.instance_10 = new lib.HEAD1();
	this.instance_10.setTransform(234.55,518.6,0.5296,0.5296,0,0,0,135.7,93.1);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(21).to({_off:false},0).to({regX:135.6,x:81.95,y:366.05},25,cjs.Ease.quintOut).wait(34).to({regX:135.7,x:230.3,y:514.35},5,cjs.Ease.quadIn).to({_off:true},1).wait(264));

	// HEAD0
	this.instance_11 = new lib.HEAD0();
	this.instance_11.setTransform(163,225,1,1,0,0,0,83,25);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(11).to({_off:false},0).to({alpha:1},9).wait(54).to({alpha:0},5).to({_off:true},1).wait(270));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#8ADA8F").ss(6,1,0,3).p("EgMBguZIYDAAMAAABczI4DAAg");
	this.shape.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(350));

	// bkgd
	this.instance_12 = new lib.INTRO300x600bkgd15();

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(350));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-127.3,300,592.5,572.2);
// library properties:
lib.properties = {
	id: '0957C5EC3B874C629166840920B09671',
	width: 160,
	height: 600,
	fps: 24,
	color: "#999999",
	opacity: 1.00,
	manifest: [
		{src:"images/DD_Intro_160x600_atlas_P_1.png", id:"DD_Intro_160x600_atlas_P_1"},
		{src:"images/DD_Intro_160x600_atlas_NP_1.jpg", id:"DD_Intro_160x600_atlas_NP_1"}
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