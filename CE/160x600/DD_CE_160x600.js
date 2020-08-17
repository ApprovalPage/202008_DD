(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"DD_CE_160x600_atlas_P_1", frames: [[0,0,194,400],[0,402,250,247],[196,0,194,400],[392,0,194,400],[588,0,194,400]]},
		{name:"DD_CE_160x600_atlas_NP_1", frames: [[0,0,300,600]]}
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
	this.initialize(ss["DD_CE_160x600_atlas_NP_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.iPhone = function() {
	this.initialize(ss["DD_CE_160x600_atlas_P_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Pinwheel = function() {
	this.initialize(ss["DD_CE_160x600_atlas_P_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.screendentist = function() {
	this.initialize(ss["DD_CE_160x600_atlas_P_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.screenhistory = function() {
	this.initialize(ss["DD_CE_160x600_atlas_P_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.screenplan = function() {
	this.initialize(ss["DD_CE_160x600_atlas_P_1"]);
	this.gotoAndStop(4);
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


(lib.screenhistory_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.screenhistory();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.screenhistory_1, new cjs.Rectangle(0,0,194,400), null);


(lib.screendentist_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.screendentist();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.screendentist_1, new cjs.Rectangle(0,0,194,400), null);


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
	this.shape.graphics.f("#5E4788").s().p("A7qPTMAbLg6wIcKcLMgbLA6wg");
	this.shape.setTransform(184.875,287.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.iPhone_1, new cjs.Rectangle(0,0,362,566.2), null);


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
	this.shape.graphics.f("#5E4788").s().p("AAxBpIhahyIAAByIg5AAIAAjRIA2AAIBVBuIAAhuIA6AAIAADRg");
	this.shape.setTransform(85.525,72.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5E4788").s().p("AA3BqIgPgmIhQAAIgPAmIg9AAIBZjTIA3AAIBZDTgAAXAXIgXg7IgXA7IAuAAg");
	this.shape_1.setTransform(61.825,72.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5E4788").s().p("AhPBpIAAjRIA6AAIAACeIBlAAIAAAzg");
	this.shape_2.setTransform(41.25,72.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5E4788").s().p("AhYBpIAAjRIBaAAQAoAAAXAUQAYATAAAjIAAAAQAAAkgaAUQgYATgnAAIgdAAIAAA8gAgdAAIAbAAQAPAAAJgHQAJgIAAgMIAAAAQAAgcghAAIgbAAg");
	this.shape_3.setTransform(21.975,72.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5E4788").s().p("AAeBpIgqg/IgZAAIAAA/Ig7AAIAAjRIBjAAQAuAAAWAWQATATAAAeIAAABQAAAtgsATIAzBJgAglgDIAlAAQAPAAAIgHQAIgGAAgMIAAgBQAAgZgfAAIglAAg");
	this.shape_4.setTransform(90.075,28.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5E4788").s().p("AhGBUQgagZAAgwIAAh1IA6AAIAABzQAAAuAmgBQAnAAgBgrIAAh1IA8AAIAABzQAAAygbAZQgZAXguAAQguAAgYgXg");
	this.shape_5.setTransform(67.25,28.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5E4788").s().p("AhQBOQggggAAguIAAAAQAAgtAggfQAhggAvAAQAxAAAgAgQAgAfAAAtIAAAAQAAAuggAfQghAggwAAQgvAAghgfgAgmgnQgPAQAAAXIAAAAQAAAXAPARQAQAQAWAAQAYAAAPgQQAOgQAAgYIAAAAQAAgXgOgQQgQgQgXAAQgXAAgPAQg");
	this.shape_6.setTransform(43.425,28.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5E4788").s().p("AgcBpIAAhPIhQiCIBCAAIAqBMIAshMIBBAAIhQCBIAABQg");
	this.shape_7.setTransform(22.1,28.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ao7GAIAAlHIR3AAIAAFHgAo7g4IAAlHIR3AAIAAFHg");
	this.shape_8.setTransform(57.175,50.375);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD2bPlan, new cjs.Rectangle(0,12,255,79), null);


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
	this.shape.graphics.f("#5E4788").s().p("AgcBpIAAhOIhQiDIBDAAIAqBNIArhNIBBAAIhQCCIAABPg");
	this.shape.setTransform(138.25,72.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5E4788").s().p("AAeBpIgqg/IgZAAIAAA/Ig7AAIAAjRIBjAAQAuAAAWAXQATASAAAeIAAABQAAAtgsATIAzBJgAglgDIAlAAQAPAAAIgHQAIgGAAgMIAAgBQAAgZgfAAIglAAg");
	this.shape_1.setTransform(118.125,72.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5E4788").s().p("AhQBOQgggfAAgvIAAAAQAAgtAggfQAhggAvAAQAxAAAgAfQAgAgAAAtIAAAAQAAAuggAfQghAggwAAQgvAAghgfgAgmgnQgPAQAAAXIAAAAQAAAXAPAQQAQASAWgBQAYAAAPgQQAOgQAAgYIAAAAQAAgXgOgQQgQgQgXAAQgXAAgPAQg");
	this.shape_2.setTransform(94.175,72.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5E4788").s().p("AgcBpIAAieIg/AAIAAgzIC3AAIAAAzIg/AAIAACeg");
	this.shape_3.setTransform(72.7,72.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5E4788").s().p("AhbBKIAhgnQAgAZAjABQAYAAAAgPIAAgBQAAgGgHgFQgHgEgUgFQgogJgRgLQgXgQAAgdIAAgBQAAgdAWgTQAWgSAlgBQAzAAAjAcIgdAqQgdgVgdAAQgVAAAAANIAAABQAAAHAHAEQAIAEAVAFQAnAJASANQAVAPAAAbIAAACQAAAfgYASQgXASgmAAQg6AAgogig");
	this.shape_4.setTransform(53.275,72.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5E4788").s().p("AgcBpIAAjRIA5AAIAADRg");
	this.shape_5.setTransform(38.975,72.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5E4788").s().p("AAlBpIAAhQIhJAAIAABQIg7AAIAAjRIA7AAIAABOIBJAAIAAhOIA7AAIAADRg");
	this.shape_6.setTransform(22.675,72.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5E4788").s().p("AAeBpIgqg/IgZAAIAAA/Ig7AAIAAjRIBjAAQAuAAAWAWQATATAAAeIAAABQAAAtgsATIAzBJgAglgDIAlAAQAPAAAIgHQAIgGAAgMIAAgBQAAgZgfAAIglAAg");
	this.shape_7.setTransform(90.075,28.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#5E4788").s().p("AhGBUQgagZAAgwIAAh1IA6AAIAABzQAAAuAmgBQAnAAgBgrIAAh1IA8AAIAABzQAAAygbAZQgZAXguAAQguAAgYgXg");
	this.shape_8.setTransform(67.25,28.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#5E4788").s().p("AhQBOQggggAAguIAAAAQAAgtAggfQAhggAvAAQAxAAAgAgQAgAfAAAtIAAAAQAAAuggAfQghAggwAAQgvAAghgfgAgmgnQgPAQAAAXIAAAAQAAAXAPARQAQAQAWAAQAYAAAPgQQAOgQAAgYIAAAAQAAgXgOgQQgQgQgXAAQgXAAgPAQg");
	this.shape_9.setTransform(43.425,28.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#5E4788").s().p("AgcBpIAAhPIhQiCIBCAAIAqBMIAshMIBBAAIhQCBIAABQg");
	this.shape_10.setTransform(22.1,28.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AssGAIAAlHIZZAAIAAFHgAssg4IAAlHIR2AAIAAFHg");
	this.shape_11.setTransform(81.325,50.375);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD2bHist, new cjs.Rectangle(0,12,255,79), null);


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
	this.shape.graphics.f("#5E4788").s().p("AgcBpIAAieIg/AAIAAgzIC3AAIAAAzIg/AAIAACeg");
	this.shape.setTransform(136.2,72.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5E4788").s().p("AhbBKIAhgnQAgAZAjABQAYAAAAgPIAAgBQAAgGgHgFQgHgEgUgFQgogJgRgLQgXgQAAgdIAAgBQAAgdAWgTQAWgSAlgBQAzAAAjAcIgdAqQgdgVgdAAQgVAAAAANIAAABQAAAHAHAEQAIAEAVAFQAnAJASANQAVAPAAAbIAAACQAAAfgYASQgXASgmAAQg6AAgogig");
	this.shape_1.setTransform(116.775,72.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5E4788").s().p("AgcBpIAAjRIA5AAIAADRg");
	this.shape_2.setTransform(102.475,72.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5E4788").s().p("AgcBpIAAieIg/AAIAAgzIC3AAIAAAzIg/AAIAACeg");
	this.shape_3.setTransform(87.65,72.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5E4788").s().p("AAxBpIhahyIAAByIg5AAIAAjRIA2AAIBVBuIAAhuIA6AAIAADRg");
	this.shape_4.setTransform(65.975,72.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5E4788").s().p("AhUBpIAAjRICoAAIAAAxIhvAAIAAAgIBkAAIAAAtIhkAAIAAAhIBwAAIAAAyg");
	this.shape_5.setTransform(44.575,72.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5E4788").s().p("AhjBpIAAjRIBSAAQA2AAAgAdQAfAcAAAvIAAAAQAAAuggAdQggAeg3AAgAgoA1IAXAAQAaAAAQgOQAPgOAAgZIAAAAQAAgYgPgOQgQgOgagBIgXAAg");
	this.shape_6.setTransform(23.075,72.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5E4788").s().p("AAeBpIgqg/IgZAAIAAA/Ig7AAIAAjRIBjAAQAuAAAWAWQATATAAAeIAAABQAAAtgsATIAzBJgAglgDIAlAAQAPAAAIgHQAIgGAAgMIAAgBQAAgZgfAAIglAAg");
	this.shape_7.setTransform(90.075,28.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#5E4788").s().p("AhGBUQgagZAAgwIAAh1IA6AAIAABzQAAAuAmgBQAnAAgBgrIAAh1IA8AAIAABzQAAAygbAZQgZAXguAAQguAAgYgXg");
	this.shape_8.setTransform(67.25,28.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#5E4788").s().p("AhQBOQggggAAguIAAAAQAAgtAggfQAhggAvAAQAxAAAgAgQAgAfAAAtIAAAAQAAAuggAfQghAggwAAQgvAAghgfgAgmgnQgPAQAAAXIAAAAQAAAXAPARQAQAQAWAAQAYAAAPgQQAOgQAAgYIAAAAQAAgXgOgQQgQgQgXAAQgXAAgPAQg");
	this.shape_9.setTransform(43.425,28.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#5E4788").s().p("AgcBpIAAhPIhQiCIBCAAIAqBMIAshMIBBAAIhQCBIAABQg");
	this.shape_10.setTransform(22.1,28.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AssCjIAAlFIZZAAIAAFFg");
	this.shape_11.setTransform(79.5753,72.4,0.9785,1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ao7CkIAAlHIR3AAIAAFHg");
	this.shape_12.setTransform(57.175,28.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD2bDent, new cjs.Rectangle(0,12,255,79), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AAxBpIhahyIAAByIg5AAIAAjRIA2AAIBVBuIAAhuIA6AAIAADRg");
	this.shape.setTransform(154.425,15.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhQBNQgggfAAgtIAAgBQAAgsAgggQAhggAvAAQAxAAAgAfQAgAgAAAtIAAAAQAAAtggAgQghAggwAAQgvAAghgggAgmgnQgPAQAAAXIAAAAQAAAYAPAPQAQARAWAAQAYAAAPgQQAOgQAAgXIAAgBQAAgXgOgQQgQgQgXgBQgXABgPAQg");
	this.shape_1.setTransform(130.225,15.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhjBpIAAjRIBSAAQA2AAAgAdQAfAdAAAuIAAAAQAAAuggAdQggAeg3AAgAgoA2IAXAAQAaAAAQgPQAPgNAAgZIAAgBQAAgYgPgPQgQgOgaABIgXAAg");
	this.shape_2.setTransform(98.325,15.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhUBpIAAjRICoAAIAAAxIhvAAIAAAgIBkAAIAAAtIhkAAIAAAiIBwAAIAAAxg");
	this.shape_3.setTransform(76.875,15.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhbBKIAhgnQAgAZAjAAQAYAAAAgOIAAgBQAAgHgHgEQgHgEgUgFQgogJgRgMQgXgOAAgeIAAgBQAAgdAWgSQAWgUAlABQAzAAAjAcIgdAoQgdgUgdAAQgVAAAAANIAAABQAAAHAHAEQAIAEAVAFQAnAJASANQAVAPAAAbIAAABQAAAggYATQgXARgmABQg6AAgogjg");
	this.shape_4.setTransform(56.375,15.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AA3BqIgPgmIhQAAIgPAmIg9AAIBZjTIA3AAIBZDTgAAXAXIgXg7IgXA7IAuAAg");
	this.shape_5.setTransform(35.325,15.425);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhdBpIAAjRIBrAAQAmAAATASQANAPAAAUIAAAAQAAAhggAOQAqANAAAmIAAAAQAAAbgVAQQgVAPgmAAgAgkA6IAsAAQAcAAAAgTIAAAAQAAgTgdAAIgrAAgAgkgVIAkAAQAbABAAgTIAAAAQAAgSgaAAIglAAg");
	this.shape_6.setTransform(13.25,15.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD2a, new cjs.Rectangle(0,0,180,34), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AhNBgIAAi/ICaAAIAAAtIhlAAIAAAdIBbAAIAAAqIhbAAIAAAdIBmAAIAAAug");
	this.shape.setTransform(169.65,144.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAxBgIAAhtIgxBKIAAAAIgxhKIAABtIg0AAIAAi/IA5AAIAsBKIAuhKIA4AAIAAC/g");
	this.shape_1.setTransform(148.25,144.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgZBgIAAi/IAzAAIAAC/g");
	this.shape_2.setTransform(131.85,144.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgaBgIAAiRIg5AAIAAguICnAAIAAAuIg6AAIAACRg");
	this.shape_3.setTransform(118.325,144.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhMBgIAAi/ICZAAIAAAuIhkAAIAAAhIBaAAIAAAsIhaAAIAABEg");
	this.shape_4.setTransform(93.225,144.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhJBHQgdgcgBgqIAAgBQAAgoAegdQAfgeArAAQAsAAAdAdQAdAcAAAqIAAAAQAAApgdAdQgeAegsAAQgrAAgegdgAgigkQgOAPAAAVIAAAAQAAAVAOAPQAOAQAVAAQAUAAAOgPQAOgPAAgVIAAgBQAAgUgOgQQgNgPgWAAQgVAAgNAPg");
	this.shape_5.setTransform(72.45,144.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhaBgIAAi/IBKAAQAxAAAeAaQAcAaAAArIAAAAQAAAqgdAbQgdAbgyAAgAglAxIAWAAQAXAAAOgNQAPgNAAgXIAAAAQAAgWgPgNQgOgNgXAAIgWAAg");
	this.shape_6.setTransform(154.725,120.75);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAyBhIgOgjIhJAAIgOAjIg3AAIBRjBIAzAAIBRDBgAAVAVIgVg2IgVA2IAqAAg");
	this.shape_7.setTransform(132.975,120.675);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhNBgIAAi/ICZAAIAAAtIhlAAIAAAdIBcAAIAAApIhcAAIAAAfIBnAAIAAAtg");
	this.shape_8.setTransform(113.25,120.75);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAiBgIAAhJIhEAAIAABJIg1AAIAAi/IA1AAIAABIIBEAAIAAhIIA2AAIAAC/g");
	this.shape_9.setTransform(93.3,120.75);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAyBhIgOgjIhJAAIgOAjIg3AAIBRjBIAzAAIBRDBgAAVAVIgVg2IgVA2IAqAAg");
	this.shape_10.setTransform(71.975,120.675);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhTBDIAegjQAdAXAgAAQAWAAAAgNIAAgBQAAgGgGgEQgHgDgSgGQglgHgPgLQgVgNAAgbIAAgBQAAgbAUgRQAVgRAhAAQAvgBAgAaIgbAmQgagTgbAAQgTAAAAAMIAAAAQAAAIAHADQAHAEASAEQAkAJARALQATAOAAAZIAAABQAAAdgVAQQgVARgkABQg1AAgkghg");
	this.shape_11.setTransform(146.875,96.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgaBgIAAiRIg5AAIAAguICnAAIAAAuIg6AAIAACRg");
	this.shape_12.setTransform(129.625,96.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhTBDIAegjQAdAXAgAAQAWAAAAgNIAAgBQAAgGgGgEQgHgDgSgGQglgHgPgLQgVgNAAgbIAAgBQAAgbAUgRQAVgRAhAAQAvgBAgAaIgbAmQgagTgbAAQgTAAAAAMIAAAAQAAAIAHADQAHAEASAEQAkAJARALQATAOAAAZIAAABQAAAdgVAQQgVARgkABQg1AAgkghg");
	this.shape_13.setTransform(111.825,96.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhJBHQgdgdAAgpIAAgBQAAgpAdgdQAegdArAAQAsAAAeAdQAeAdAAApIAAAAQAAAqgeAdQgeAdgsAAQgrAAgegdgAgjgjQgNAOAAAVIAAAAQAAAVAOAPQAOAQAUAAQAWAAANgPQAOgPAAgVIAAgBQAAgUgOgPQgOgQgVAAQgVAAgOAQg");
	this.shape_14.setTransform(91.95,96.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag+BIQgdgdAAgqIAAgBQAAgpAdgdQAdgdAqAAQA1AAAdAoIgpAfQgSgXgXAAQgUABgNAPQgMAOAAAVIAAAAQAAAWAMAPQANAPAUAAQAYAAATgYIAoAcQgfAsg2AAQgpAAgcgcg");
	this.shape_15.setTransform(71.3,96.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhNBgIAAi/ICaAAIAAAtIhmAAIAAAdIBcAAIAAAqIhcAAIAAAdIBnAAIAAAug");
	this.shape_16.setTransform(194.55,72.45);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgaBgIAAiRIg5AAIAAguICnAAIAAAuIg6AAIAACRg");
	this.shape_17.setTransform(176.025,72.45);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAyBhIgOgjIhJAAIgOAjIg3AAIBRjBIAzAAIBRDBgAAVAVIgVg2IgVA2IAqAAg");
	this.shape_18.setTransform(158.525,72.375);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAxBgIAAhtIgxBKIAAAAIgxhKIAABtIg0AAIAAi/IA4AAIAtBKIAuhKIA4AAIAAC/g");
	this.shape_19.setTransform(135.7,72.45);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgZBgIAAi/IA0AAIAAC/g");
	this.shape_20.setTransform(119.35,72.45);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgaBgIAAiRIg5AAIAAguICnAAIAAAuIg6AAIAACRg");
	this.shape_21.setTransform(105.775,72.45);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhTBDIAegjQAdAXAgAAQAWAAAAgNIAAgBQAAgGgGgEQgHgEgSgFQglgIgPgKQgVgOAAgbIAAAAQAAgbAUgRQAVgRAhgBQAvAAAgAaIgbAmQgagTgbAAQgTAAAAAMIAAABQAAAGAHAEQAHAEASAFQAkAHARAMQATAOAAAZIAAABQAAAdgVARQgVARgkAAQg1gBgkggg");
	this.shape_22.setTransform(88.025,72.45);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AhNBgIAAi/ICaAAIAAAtIhlAAIAAAdIBbAAIAAAqIhbAAIAAAdIBmAAIAAAug");
	this.shape_23.setTransform(70.55,72.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1 copy
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#5E4788").s().p("Ego2gKWQg2g0ABhMIAAgBQAAhMA2g1QArgqA5gJIirhVICVlgIBJAAQiLh4gNgNQg1gzAAhOIAAgBQgBhNA1g0QAygzBLgCIimhTIAAleIEZAAIBFAiIAKgJQAlgfA+AAQBXAAA5AvIAcANIAAg2IEyAAIAtAXIAAgXIBhAAIAABHIBAAgIAAhnIBnAAIBUCHIBTiHIBnAAICWBLIAhhOIBdAAIB3A8IAAg5IEzAAIAqAVIAAgVIEaAAMArvArzMgknAbwgEgWIghXIgBgBIAAAAIABABgEgKBgiBIAAgYIgwAAg");
	this.shape_24.setTransform(208.6103,188.398,0.5488,0.5488);

	this.timeline.addTween(cjs.Tween.get(this.shape_24).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD1, new cjs.Rectangle(60,59,295.9,255.3), null);


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
	this.shape.graphics.f("#5E4788").s().p("AgwA/IAAh9IAxAAQAWAAANALQANAMAAATIAAABQAAATgPALQgOAMgUAAIgZAAIAAAogAgZACIAZAAQAMABAHgGQAHgGAAgKIAAAAQAAgLgHgGQgHgGgMAAIgZAAg");
	this.shape.setTransform(53.725,23.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5E4788").s().p("AgKA/IAAh9IAVAAIAAB9g");
	this.shape_1.setTransform(44.4,23.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5E4788").s().p("AgKA/IAAhpIgoAAIAAgUIBlAAIAAAUIgoAAIAABpg");
	this.shape_2.setTransform(35.725,23.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5E4788").s().p("AguA/IAAh9IBcAAIAAAUIhGAAIAAAgIA+AAIAAATIg+AAIAAAiIBHAAIAAAUg");
	this.shape_3.setTransform(18.775,23.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5E4788").s().p("AgrA/IAAh9IAWAAIAABpIBBAAIAAAUg");
	this.shape_4.setTransform(7.375,23.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5E4788").s().p("AgKA/IAAh9IAVAAIAAB9g");
	this.shape_5.setTransform(-1.5,23.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5E4788").s().p("AAoA/IAAhaIgoA7IAAAAIgng6IAABZIgWAAIAAh9IAYAAIAlA8IAng8IAXAAIAAB9g");
	this.shape_6.setTransform(-12.15,23.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5E4788").s().p("AgwAsIAOgPQASAQAUAAQALAAAFgEQAHgEAAgIIAAAAQgBgHgFgEQgGgEgPgFQgXgEgJgHQgLgIAAgRQAAgRAMgKQAMgKATAAQAaAAATAQIgMARQgSgNgPAAQgJAAgGAEQgGAEAAAHIAAAAQABAIAFADQAGAEASAFQAUAFAJAHQALAJAAAPQAAARgNALQgMAKgUAAQgdAAgXgVg");
	this.shape_7.setTransform(-25.8,23.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#5E4788").s().p("AgKA/IAAgxIgyhMIAaAAIAiA3IAkg3IAZAAIgyBLIAAAyg");
	this.shape_8.setTransform(-37.25,23.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#5E4788").s().p("AAoA/IAAhaIgoA7IAAAAIgng6IAABZIgWAAIAAh9IAYAAIAlA8IAng8IAXAAIAAB9g");
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
	this.shape.graphics.f("#FFFFFF").s().p("AiNCvIAAldIEYAAIAABSIi4AAIAAA1ICnAAIAABMIinAAIAAA4IC7AAIAABSg");
	this.shape.setTransform(192.7,68.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiZCvIAAhHICujFIioAAIAAhRIEtAAIAABGIiuDFICuAAIAABSg");
	this.shape_1.setTransform(158,68.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiNCvIAAldIEYAAIAABSIi4AAIAAA1ICnAAIAABMIinAAIAAA4IC7AAIAABSg");
	this.shape_2.setTransform(124.4,68.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiNCvIAAldIEYAAIAABSIi4AAIAAA1ICnAAIAABMIinAAIAAA4IC7AAIAABSg");
	this.shape_3.setTransform(91,68.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAyCvIhGhqIgrAAIAABqIhhAAIAAldIClAAQBMAAAlAlQAgAgAAAyIAAABQgBBNhHAeIBTB6gAg/gGIA/AAQAZAAAOgLQAOgLgBgUIAAgBQABgqg1AAIg/AAg");
	this.shape_4.setTransform(56.95,68.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AibCvIAAldICyAAQBAAAAfAfQAXAYAAAhIAAABQAAA2g2AYQBFAWAAA+IAAABQAAAugiAZQgjAag/AAgAg9BhIBKAAQAuAAABggIAAgBQgBgfgvgBIhJAAgAg9giIA9AAQAuAAgBgfIAAgBQAAgegsAAIg+AAg");
	this.shape_5.setTransform(20.75,68.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABbCwIgZg/IiGAAIgZA/IhmAAICVlfIBcAAICWFfgAAmAmIgmhiIgnBiIBNAAg");
	this.shape_6.setTransform(131.9,24.375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AiYB7IA2hBQA2AqA7ABQAoAAAAgZIAAgBQAAgLgMgHQgMgHgigJQhCgPgcgSQgmgaAAgxIAAgBQAAgyAkgfQAlgfA+AAQBVAAA6AvIgwBEQgwgjgxABQgjAAAAAWIAAABQAAAMAMAHQAMAGAkAJQBBAPAeAWQAjAYAAAvIAAABQAAA1gnAfQgmAehBAAQhhAAhCg6g");
	this.shape_7.setTransform(81.275,24.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag2A2QA0gGgCgpIgmAAIAAhgIBhAAIAABPQAABhhmAEg");
	this.shape_8.setTransform(58.05,16.05);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgwCvIAAkIIhoAAIAAhVIExAAIAABVIhpAAIAAEIg");
	this.shape_9.setTransform(34.875,24.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgwCvIAAldIBgAAIAAFdg");
	this.shape_10.setTransform(10.2,24.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// its a shad
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#5E4788").s().p("AEHT+MgidgihIAAleIBhAAIAtAtIAAgtIEyAAIAjAjIAAgjIBjAAIA1A2QAJgQAPgNQAlgfA+AAQBWAAA6AvIDSDRIBqj9IBeAAMAoNAoMg");
	this.shape_11.setTransform(199.675,135.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(1));

	// breeze shad
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#5E4788").s().p("A5H1ZIAAleIC0AAQA/AAAgAfIBTBTIAAhyIClAAQBNAAAlAlIBQBOIAAhzIEaAAIA0A0IAAg0IEaAAIAwAwIAAgwIEuAAIAyAzIAAgzIEaAAISwSwMgB/Ai/g");
	this.shape_12.setTransform(165.875,223);

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEADEndFrame, new cjs.Rectangle(0,0,394,395), null);


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
	this.instance.setTransform(-22,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-179.0006,x:43.95,y:-0.05},15).to({rotation:-350.001,x:-22,y:0},14).wait(2));

	// stick
	this.instance_1 = new lib.pinwheel_stick();
	this.instance_1.setTransform(-1,204.5,1,1,-3.9662,0,0,-0.1,-204.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:5.202,x:23.2,y:204.45},15).to({rotation:-3.9662,x:-1,y:204.5},14).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-185.4,-175.6,390.3,584.5);


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
(lib.DD_CE_160x600 = function(mode,startPosition,loop,reversed) {
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

	// CTA
	this.instance = new lib.CTA();
	this.instance.setTransform(80,510.85,0.64,0.64,0,0,0,0.1,25.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(250).to({_off:false},0).wait(52));

	// pinwheel
	this.instance_1 = new lib.pinwheel_mc();
	this.instance_1.setTransform(85,388.5,0.57,0.57,0,0,0,0.1,0.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(240).to({_off:false},0).wait(62));

	// HEAD-EndFrame
	this.instance_2 = new lib.HEADEndFrame();
	this.instance_2.setTransform(303.55,432.4,0.7,0.7,0,0,0,197,132);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(240).to({_off:false},0).to({x:143.55,y:282.4},10,cjs.Ease.quadOut).wait(52));

	// HEAD2bDent
	this.instance_3 = new lib.HEAD2bDent();
	this.instance_3.setTransform(-153,91.6,0.8131,0.8131,0,0,0,88.5,25.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(179).to({_off:false},0).to({x:83.5},9,cjs.Ease.quadOut).wait(40).to({x:-147.3},11).to({_off:true},1).wait(62));

	// HEAD2bHist
	this.instance_4 = new lib.HEAD2bHist();
	this.instance_4.setTransform(-153,91.6,0.8131,0.8131,0,0,0,88.5,25.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(135).to({_off:false},0).to({x:83.5},9,cjs.Ease.quadOut).wait(26).to({x:-152.15},9,cjs.Ease.quintIn).to({_off:true},1).wait(122));

	// HEAD2bPlan
	this.instance_5 = new lib.HEAD2bPlan();
	this.instance_5.setTransform(-152.15,91.6,0.8131,0.8131,0,0,0,88.5,25.1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(91).to({_off:false},0).to({x:83.5},9,cjs.Ease.quintOut).wait(26).to({x:-152.15},9,cjs.Ease.quintIn).to({_off:true},1).wait(166));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_188 = new cjs.Graphics().p("Ap+TWMAAAgmrIT9AAMAAAAmrg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(188).to({graphics:mask_graphics_188,x:79.475,y:370.075}).wait(40).to({graphics:null,x:0,y:0}).wait(74));

	// screen-dentist
	this.instance_6 = new lib.screendentist_1();
	this.instance_6.setTransform(-49.75,370.5,0.7575,0.7575,0,0,0,96.9,200.1);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(188).to({_off:false},0).to({regX:97,x:76.8},9).wait(31).to({regX:97.2,x:266.25,y:559.95},11,cjs.Ease.quadIn).to({_off:true},1).wait(62));

	// mask copy 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_144 = new cjs.Graphics().p("Ap+TWMAAAgmrIT9AAMAAAAmrg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(144).to({graphics:mask_1_graphics_144,x:79.475,y:370.075}).wait(54).to({graphics:null,x:0,y:0}).wait(104));

	// screen-history
	this.instance_7 = new lib.screenhistory_1();
	this.instance_7.setTransform(-49.75,370.5,0.7575,0.7575,0,0,0,96.9,200.1);
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(144).to({_off:false},0).to({regX:97,x:76.8},9).wait(35).to({regX:97.1,x:202.55},9).to({_off:true},1).wait(104));

	// mask copy (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_95 = new cjs.Graphics().p("Ap+TWMAAAgmrIT9AAMAAAAmrg");
	var mask_2_graphics_144 = new cjs.Graphics().p("Ap+TWMAAAgmrIT9AAMAAAAmrg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(95).to({graphics:mask_2_graphics_95,x:79.475,y:370.075}).wait(49).to({graphics:mask_2_graphics_144,x:79.475,y:370.075}).wait(10).to({graphics:null,x:0,y:0}).wait(148));

	// screen-plan
	this.instance_8 = new lib.screenplan_1();
	this.instance_8.setTransform(266.25,559.95,0.7575,0.7575,0,0,0,97.2,200.1);
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(86).to({_off:false},0).to({regX:97,x:76.8,y:370.5},9).wait(49).to({regX:97.1,x:204.05},9).to({_off:true},1).wait(148));

	// iPhone
	this.instance_9 = new lib.iPhone_1();
	this.instance_9.setTransform(331.3,622.9,0.7575,0.7575,0,0,0,181.1,283.2);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(86).to({_off:false},0).to({regX:181,regY:283.3,x:141.9,y:433.5},9).wait(133).to({regX:181.1,regY:283.2,x:331.3,y:622.9},11,cjs.Ease.quadIn).to({_off:true},1).wait(62));

	// HEAD2a
	this.instance_10 = new lib.HEAD2a();
	this.instance_10.setTransform(83.95,56.25,0.8131,0.8131,0,0,0,90,17.1);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(86).to({_off:false},0).wait(142).to({alpha:0},11).to({_off:true},1).wait(62));

	// logo
	this.instance_11 = new lib.DD_logo();
	this.instance_11.setTransform(209.5,129.35,1,1,0,0,0,129.5,15.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(74).to({alpha:0},5).to({_off:true},1).wait(160).to({_off:false,x:209.35,alpha:1},0).wait(62));

	// HEAD1
	this.instance_12 = new lib.HEAD1();
	this.instance_12.setTransform(370.5,599.45,1,1,0,0,0,135.5,93);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(21).to({_off:false},0).to({x:82.5,y:311.45},25,cjs.Ease.quintOut).wait(34).to({x:362.5,y:591.45},5,cjs.Ease.quadIn).to({_off:true},1).wait(216));

	// HEAD0
	this.instance_13 = new lib.HEAD0();
	this.instance_13.setTransform(162.95,201,1,1,0,0,0,83,25);
	this.instance_13.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({alpha:1},9).wait(65).to({alpha:0},5).to({_off:true},1).wait(222));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C1B7D2").ss(6,1,0,3).p("EgMBguZIYDAAMAAABczI4DAAg");
	this.shape.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(302));

	// bkgd
	this.instance_14 = new lib.CE300x600bkgd15();

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(302));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-144.9,300,735.8,537.3);
// library properties:
lib.properties = {
	id: '0957C5EC3B874C629166840920B09671',
	width: 160,
	height: 600,
	fps: 24,
	color: "#999999",
	opacity: 1.00,
	manifest: [
		{src:"images/DD_CE_160x600_atlas_P_1.png?1597704066457", id:"DD_CE_160x600_atlas_P_1"},
		{src:"images/DD_CE_160x600_atlas_NP_1.jpg?1597704066457", id:"DD_CE_160x600_atlas_NP_1"}
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