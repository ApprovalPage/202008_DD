(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"DD_CE_970x250_atlas_P_1", frames: [[0,0,194,400],[0,402,250,247],[196,0,194,400],[392,0,194,400],[588,0,194,400]]},
		{name:"DD_CE_970x250_atlas_NP_1", frames: [[0,0,300,600]]}
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
	this.initialize(ss["DD_CE_970x250_atlas_NP_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.iPhone = function() {
	this.initialize(ss["DD_CE_970x250_atlas_P_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Pinwheel = function() {
	this.initialize(ss["DD_CE_970x250_atlas_P_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.screendentist = function() {
	this.initialize(ss["DD_CE_970x250_atlas_P_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.screenhistory = function() {
	this.initialize(ss["DD_CE_970x250_atlas_P_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.screenplan = function() {
	this.initialize(ss["DD_CE_970x250_atlas_P_1"]);
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
	this.shape.graphics.f("#5E4788").s().p("EgdeAq9I8M8LMAbLg6xMBYJBX/g");
	this.shape.setTransform(376.8,291.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.iPhone_1, new cjs.Rectangle(0,0,745.9,572.9), null);


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
	this.shape.setTransform(182.675,28.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5E4788").s().p("AA3BqIgPgmIhQAAIgPAmIg9AAIBZjTIA3AAIBZDTgAAXAXIgXg7IgXA7IAuAAg");
	this.shape_1.setTransform(158.975,28.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5E4788").s().p("AhPBpIAAjRIA7AAIAACeIBkAAIAAAzg");
	this.shape_2.setTransform(138.4,28.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5E4788").s().p("AhYBpIAAjRIBaAAQAoAAAXAUQAYATAAAjIAAAAQAAAjgaAVQgYATgnAAIgdAAIAAA8gAgdAAIAbAAQAPAAAJgHQAJgIAAgMIAAgBQAAgbghAAIgbAAg");
	this.shape_3.setTransform(119.125,28.5);

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
	this.shape_8.graphics.f("#FFFFFF").s().p("AwQEnIAApNMAggAAAIAAJNg");
	this.shape_8.setTransform(104.05,29.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD2bPlan, new cjs.Rectangle(0,0,255,59), null);


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
	this.shape.graphics.f("#5E4788").s().p("AgcBpIAAhPIhQiCIBCAAIAqBMIAshMIBBAAIhQCBIAABQg");
	this.shape.setTransform(235.4,28.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5E4788").s().p("AAeBpIgqg/IgZAAIAAA/Ig7AAIAAjRIBjAAQAuAAAWAWQATATAAAeIAAABQAAAtgsATIAzBJgAglgDIAlAAQAPAAAIgHQAIgGAAgMIAAgBQAAgZgfAAIglAAg");
	this.shape_1.setTransform(215.275,28.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5E4788").s().p("AhQBOQggggAAguIAAAAQAAgtAggfQAhggAvAAQAxAAAgAgQAgAfAAAtIAAAAQAAAuggAfQghAggwAAQgvAAghgfgAgmgnQgPAQAAAXIAAAAQAAAXAPARQAQAQAWAAQAYAAAPgQQAOgQAAgYIAAAAQAAgXgOgQQgQgQgXAAQgXAAgPAQg");
	this.shape_2.setTransform(191.325,28.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5E4788").s().p("AgcBpIAAieIg/AAIAAgzIC3AAIAAAzIg/AAIAACeg");
	this.shape_3.setTransform(169.85,28.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5E4788").s().p("AhbBKIAhgnQAgAZAjABQAYAAAAgPIAAgBQAAgGgHgFQgHgEgUgFQgogJgRgLQgXgQAAgdIAAAAQAAgeAWgTQAWgSAlgBQAzAAAjAcIgdAqQgdgVgdAAQgVAAAAANIAAABQAAAHAHAEQAIAEAVAFQAnAJASANQAVAPAAAcIAAABQAAAfgYASQgXATgmgBQg6AAgogig");
	this.shape_4.setTransform(150.425,28.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5E4788").s().p("AgcBpIAAjRIA5AAIAADRg");
	this.shape_5.setTransform(136.125,28.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5E4788").s().p("AAlBpIAAhQIhJAAIAABQIg7AAIAAjRIA7AAIAABOIBJAAIAAhOIA7AAIAADRg");
	this.shape_6.setTransform(119.825,28.5);

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
	this.shape_11.graphics.f("#FFFFFF").s().p("A0UEnIAApNMAopAAAIAAJNg");
	this.shape_11.setTransform(130.05,29.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD2bHist, new cjs.Rectangle(0,0,260.1,59), null);


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
	this.shape.setTransform(233.35,28.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5E4788").s().p("AhbBKIAhgnQAgAZAjABQAYAAAAgPIAAgBQAAgGgHgFQgHgEgUgFQgogJgRgLQgXgQAAgdIAAAAQAAgeAWgTQAWgSAlgBQAzAAAjAcIgdAqQgdgVgdAAQgVAAAAANIAAABQAAAHAHAEQAIAEAVAFQAnAJASANQAVAPAAAcIAAABQAAAfgYASQgXATgmgBQg6AAgogig");
	this.shape_1.setTransform(213.925,28.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5E4788").s().p("AgcBpIAAjRIA5AAIAADRg");
	this.shape_2.setTransform(199.625,28.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5E4788").s().p("AgcBpIAAieIg/AAIAAgzIC3AAIAAAzIg/AAIAACeg");
	this.shape_3.setTransform(184.8,28.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5E4788").s().p("AAxBpIhahyIAAByIg5AAIAAjRIA2AAIBVBuIAAhuIA6AAIAADRg");
	this.shape_4.setTransform(163.125,28.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5E4788").s().p("AhUBpIAAjRICoAAIAAAxIhvAAIAAAgIBkAAIAAAtIhkAAIAAAhIBwAAIAAAyg");
	this.shape_5.setTransform(141.725,28.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5E4788").s().p("AhjBpIAAjRIBSAAQA2AAAgAdQAfAcAAAvIAAAAQAAAuggAdQggAeg3AAgAgoA1IAXAAQAaABAQgOQAPgOAAgaIAAAAQAAgYgPgOQgQgOgagBIgXAAg");
	this.shape_6.setTransform(120.225,28.5);

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
	this.shape_11.graphics.f("#FFFFFF").s().p("A0UEnIAApNMAopAAAIAAJNg");
	this.shape_11.setTransform(130.05,29.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD2bDent, new cjs.Rectangle(0,0,260.1,59), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AiNCvIAAldIEYAAIAABSIi4AAIAAA2ICnAAIAABLIinAAIAAA4IC7AAIAABSg");
	this.shape.setTransform(199.9,156.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABZCvIAAjIIhZCIIgBAAIhZiHIAADHIhfAAIAAldIBnAAIBSCIIBUiIIBmAAIAAFdg");
	this.shape_1.setTransform(160.9,156.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgwCvIAAldIBgAAIAAFdg");
	this.shape_2.setTransform(131.05,156.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgwCvIAAkIIhoAAIAAhVIExAAIAABVIhpAAIAAEIg");
	this.shape_3.setTransform(106.375,156.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AiLCvIAAldIEXAAIAABVIi2AAIAAA7IClAAIAABQIilAAIAAB9g");
	this.shape_4.setTransform(60.65,156.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AiGCBQg2g0ABhMIAAgBQAAhLA2g1QA2g1BQAAQBQAAA2A1QA1A0ABBMIAAAAQAABMg2A1Qg3A1hQAAQhQAAg2g1gAhAhCQgZAbABAnIAAAAQAAAnAZAbQAZAcAnABQAnAAAZgcQAYgbAAgnIAAgBQAAgmgZgcQgZgbgnAAQgnAAgZAbg");
	this.shape_5.setTransform(22.8,156.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AilCvIAAldICHAAQBbAAA2AwQAzAwAABNIAAABQAABMg0AxQg3AyhbAAgAhEBZIAnAAQAsAAAagXQAagXAAgqIAAgBQAAgpgagYQgagXgsAAIgnAAg");
	this.shape_6.setTransform(172.675,112.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ABcCwIgZg/IiHAAIgZA/IhlAAICUlfIBdAAICUFfgAAmAmIgmhiIgnBiIBNAAg");
	this.shape_7.setTransform(133.1,112.375);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AiNCvIAAldIEZAAIAABSIi5AAIAAA1ICnAAIAABMIinAAIAAA4IC7AAIAABSg");
	this.shape_8.setTransform(97.1,112.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AA+CvIAAiFIh7AAIAACFIhhAAIAAldIBhAAIAACDIB7AAIAAiDIBhAAIAAFdg");
	this.shape_9.setTransform(60.775,112.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("ABbCwIgZg/IiGAAIgZA/IhmAAICVlfIBcAAICWFfgAAmAmIgmhiIgoBiIBOAAg");
	this.shape_10.setTransform(21.9,112.375);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AiYB7IA2hBQA2AqA7ABQAoAAAAgZIAAgBQAAgLgMgHQgMgHgigJQhCgOgcgUQgmgZAAgxIAAgBQAAgxAkggQAlgfA+AAQBVAAA6AvIgwBEQgwgjgxAAQgjABAAAWIAAABQAAAMAMAHQAMAHAkAIQBBAOAeAXQAjAZAAAuIAAABQAAA1gnAfQgmAehBAAQhhAAhCg6g");
	this.shape_11.setTransform(158.425,68.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgwCvIAAkIIhoAAIAAhVIExAAIAABVIhpAAIAAEIg");
	this.shape_12.setTransform(126.975,68.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AiYB7IA2hBQA2AqA7ABQAoAAAAgZIAAgBQAAgLgMgHQgMgHgigJQhCgOgcgUQgmgZAAgxIAAgBQAAgxAkggQAlgfA+AAQBVAAA6AvIgwBEQgwgjgxAAQgjABAAAWIAAABQAAAMAMAHQAMAHAkAIQBBAOAeAXQAjAZAAAuIAAABQAAA1gnAfQgmAehBAAQhhAAhCg6g");
	this.shape_13.setTransform(94.575,68.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AiGCBQg2g0ABhMIAAgBQAAhLA2g1QA2g1BQAAQBQAAA2A1QA1A0ABBMIAAAAQAABMg2A1Qg3A1hQAAQhQAAg2g1gAhAhCQgZAbABAnIAAAAQAAAnAZAbQAZAdAngBQAnAAAYgbQAZgcAAgmIAAgBQAAgmgZgcQgZgcgnAAQgnAAgZAcg");
	this.shape_14.setTransform(58.35,68.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhxCCQg1g0AAhNIAAgBQgBhMA1g0QA0g1BOAAQBgAAA1BIIhJA5QghgpgsAAQgiAAgYAbQgYAbAAAnIAAAAQAAAnAYAcQAXAaAjAAQAsAAAjgqIBJA0Qg5BPhhAAQhKAAg0g0g");
	this.shape_15.setTransform(20.7,68.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AiNCvIAAldIEZAAIAABSIi5AAIAAA1ICnAAIAABMIinAAIAAA4IC7AAIAABSg");
	this.shape_16.setTransform(245.3,24.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgwCvIAAkIIhoAAIAAhVIExAAIAABVIhpAAIAAEIg");
	this.shape_17.setTransform(211.525,24.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("ABcCwIgZg/IiHAAIgZA/IhlAAICUlfIBdAAICUFfgAAmAmIgmhiIgoBiIBOAAg");
	this.shape_18.setTransform(179.65,24.375);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("ABZCvIAAjIIhZCIIgBAAIhZiHIAADHIhfAAIAAldIBmAAIBTCHIBUiHIBmAAIAAFdg");
	this.shape_19.setTransform(138.05,24.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgwCvIAAldIBgAAIAAFdg");
	this.shape_20.setTransform(108.2,24.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgwCvIAAkIIhoAAIAAhVIExAAIAABVIhpAAIAAEIg");
	this.shape_21.setTransform(83.525,24.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AiYB7IA2hBQA2AqA7ABQAoAAAAgZIAAgBQAAgLgMgHQgMgHgigJQhCgPgcgSQgmgaAAgxIAAgBQAAgyAkgfQAlgfA+AAQBVAAA6AvIgwBEQgwgjgxABQgjAAAAAWIAAABQAAAMAMAHQAMAGAkAJQBBAPAeAWQAjAYAAAvIAAABQAAA1gnAfQgmAehBAAQhhAAhCg6g");
	this.shape_22.setTransform(51.125,24.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AiNCvIAAldIEYAAIAABSIi4AAIAAA1ICnAAIAABMIinAAIAAA4IC7AAIAABSg");
	this.shape_23.setTransform(19.3,24.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1 copy
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#5E4788").s().p("Ego2gKWQg2g0ABhMIAAgBQAAhMA2g1QArgqA5gJIirhVICVlgIBJAAQiLh4gNgNQg1gzAAhOIAAgBQgBhNA1g0QAygzBLgCIimhTIAAleIEZAAIBFAiIAKgJQAlgfA+AAQBXAAA5AvIAcANIAAg2IEyAAIAtAXIAAgXIBhAAIAABHIBAAgIAAhnIBnAAIBUCHIBTiHIBnAAICWBLIAhhOIBdAAIB3A8IAAg5IEzAAIAqAVIAAgVIEaAAMArvArzMgknAbwgEgWIghXIgBgBIAAAAIABABgEgKBgiBIAAgYIgwAAg");
	this.shape_24.setTransform(270.8,235.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_24).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD1, new cjs.Rectangle(0,0,539.3,465), null);


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
	this.shape.graphics.f("#5E4788").s().p("Ag7BNIAAiZIA8AAQAbAAAQAOQAPAOAAAXIAAABQABAYgTAOQgQANgaAAIgfAAIAAAygAggADIAgAAQAOAAAJgGQAJgJAAgMIAAAAQAAgNgJgIQgJgGgOgBIggAAg");
	this.shape.setTransform(153.1,24.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5E4788").s().p("AgNBNIAAiZIAaAAIAACZg");
	this.shape_1.setTransform(141.7,24.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5E4788").s().p("AgNBNIAAiAIgwAAIAAgZIB7AAIAAAZIgwAAIAACAg");
	this.shape_2.setTransform(131.075,24.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5E4788").s().p("Ag4BNIAAiZIBwAAIAAAYIhVAAIAAAoIBLAAIAAAXIhLAAIAAAqIBXAAIAAAYg");
	this.shape_3.setTransform(110.4,24.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5E4788").s().p("Ag1BNIAAiZIAbAAIAACAIBQAAIAAAZg");
	this.shape_4.setTransform(96.45,24.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5E4788").s().p("AgNBNIAAiZIAaAAIAACZg");
	this.shape_5.setTransform(85.6,24.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5E4788").s().p("AAxBNIAAhuIgxBIIAAAAIgwhHIAABtIgaAAIAAiZIAcAAIAuBJIAvhJIAdAAIAACZg");
	this.shape_6.setTransform(72.6,24.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5E4788").s().p("Ag6A2IAQgTQAXAUAYAAQANAAAHgFQAIgGgBgIIAAgBQAAgIgGgFQgIgFgTgFQgbgHgLgHQgNgLAAgUIAAgBQAAgTAOgMQAPgNAXAAQAfAAAYATIgPAVQgUgQgUAAQgMAAgHAFQgGAFAAAIIAAAAQgBAJAIAGQAIAEAVAGQAZAGALAJQAMAKAAATIAAAAQABAWgPAMQgQAMgZAAQgjAAgbgZg");
	this.shape_7.setTransform(55.9,24.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#5E4788").s().p("AgNBNIAAg9Ig9hcIAgAAIAqBEIAshEIAfAAIg9BcIAAA9g");
	this.shape_8.setTransform(41.925,24.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#5E4788").s().p("AAxBNIAAhuIgxBIIAAAAIgwhHIAABtIgaAAIAAiZIAcAAIAuBJIAvhJIAdAAIAACZg");
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
	this.instance.setTransform(129.75,15.65,0.9194,0.9191,0,0,0,141.1,17.1);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DD_logo, new cjs.Rectangle(0,0,259,30.8), null);


// stage content:
(lib.DD_CE_970x250 = function(mode,startPosition,loop,reversed) {
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

	// pinwheel
	this.instance = new lib.pinwheel_mc();
	this.instance.setTransform(715,118.55);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(240).to({_off:false},0).wait(62));

	// HEAD-EndFrame
	this.instance_1 = new lib.HEADEndFrame();
	this.instance_1.setTransform(613.55,448.95,1.3999,1.3999,0,0,0,197.2,132.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(240).to({_off:false},0).to({regX:197.1,x:433.55,y:268.95},10,cjs.Ease.quadOut).wait(52));

	// HEAD2bDent
	this.instance_2 = new lib.HEAD2bDent();
	this.instance_2.setTransform(-221.35,139.5,1.2395,1.2395,0,0,0,88.5,25);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(179).to({_off:false},0).to({x:259.3},9,cjs.Ease.quadOut).wait(40).to({x:-212.6},11).to({_off:true},1).wait(62));

	// HEAD2bHist
	this.instance_3 = new lib.HEAD2bHist();
	this.instance_3.setTransform(-221.35,139.5,1.2395,1.2395,0,0,0,88.5,25);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(135).to({_off:false},0).to({x:259.3},9,cjs.Ease.quadOut).wait(26).to({x:-220.05},9,cjs.Ease.quintIn).to({_off:true},1).wait(122));

	// HEAD2bPlan
	this.instance_4 = new lib.HEAD2bPlan();
	this.instance_4.setTransform(-190.05,139.5,1.2395,1.2395,0,0,0,88.5,25);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(91).to({_off:false},0).to({x:259.3},9,cjs.Ease.quintOut).wait(26).to({x:-190.05},9,cjs.Ease.quintIn).to({_off:true},1).wait(166));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_188 = new cjs.Graphics().p("EAl5AQ2IAA8WIOqAAIAAcWg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(188).to({graphics:mask_graphics_188,x:336.2507,y:107.817}).wait(40).to({graphics:null,x:0,y:0}).wait(74));

	// screen-dentist
	this.instance_5 = new lib.screendentist_1();
	this.instance_5.setTransform(530.85,125.1,0.5553,0.5553,0,0,0,97,200);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(188).to({_off:false},0).to({x:623.6},9).wait(31).to({regY:200.1,x:762.4,y:263.95},11,cjs.Ease.quadIn).to({_off:true},1).wait(62));

	// mask copy 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_144 = new cjs.Graphics().p("EAl5AQ2IAA8WIOqAAIAAcWg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(144).to({graphics:mask_1_graphics_144,x:336.2507,y:107.817}).wait(54).to({graphics:null,x:0,y:0}).wait(104));

	// screen-history
	this.instance_6 = new lib.screenhistory_1();
	this.instance_6.setTransform(530.85,125.1,0.5553,0.5553,0,0,0,97,200);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(144).to({_off:false},0).to({x:623.6},9).wait(35).to({x:715.8},9).to({_off:true},1).wait(104));

	// mask copy (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_95 = new cjs.Graphics().p("EAl5AQ2IAA8WIOqAAIAAcWg");
	var mask_2_graphics_144 = new cjs.Graphics().p("EAl5AQ2IAA8WIOqAAIAAcWg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(95).to({graphics:mask_2_graphics_95,x:336.2507,y:107.817}).wait(49).to({graphics:mask_2_graphics_144,x:336.2507,y:107.817}).wait(10).to({graphics:null,x:0,y:0}).wait(148));

	// screen-plan
	this.instance_7 = new lib.screenplan_1();
	this.instance_7.setTransform(762.4,263.95,0.5553,0.5553,0,0,0,97,200.1);
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(86).to({_off:false},0).to({regY:200,x:623.6,y:125.1},9).wait(49).to({x:716.9},9).to({_off:true},1).wait(148));

	// iPhone
	this.instance_8 = new lib.iPhone_1();
	this.instance_8.setTransform(810.2,310.1,0.5553,0.5553,0,0,0,181,283.2);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(86).to({_off:false},0).to({regX:181.1,regY:283.1,x:671.4,y:171.25},9).wait(133).to({regX:181,regY:283.2,x:810.2,y:310.1},11,cjs.Ease.quadIn).to({_off:true},1).wait(62));

	// HEAD2a
	this.instance_9 = new lib.HEAD2a();
	this.instance_9.setTransform(260,85.55,1.2395,1.2395,0,0,0,90,17);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(86).to({_off:false},0).wait(142).to({alpha:0},11).to({_off:true},1).wait(62));

	// logo
	this.instance_10 = new lib.DD_logo();
	this.instance_10.setTransform(250,89.35,1,1,0,0,0,129.5,15.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(74).to({alpha:0},5).to({_off:true},1).wait(160).to({_off:false,x:290,y:49.35,alpha:1},0).wait(62));

	// HEAD1
	this.instance_11 = new lib.HEAD1();
	this.instance_11.setTransform(887.45,413.5,1,1,0,0,0,135.5,93);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(21).to({_off:false},0).to({x:599.45,y:125.5},25,cjs.Ease.quintOut).wait(34).to({x:879.45,y:405.5},5,cjs.Ease.quadIn).to({_off:true},1).wait(216));

	// HEAD0
	this.instance_12 = new lib.HEAD0();
	this.instance_12.setTransform(202.95,145,1,1,0,0,0,83,25);
	this.instance_12.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({alpha:1},9).wait(65).to({alpha:0},5).to({_off:true},1).wait(222));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C1B7D2").ss(6,1,0,3).p("EhLTgTDMCWnAAAMAAAAmHMiWnAAAg");
	this.shape.setTransform(485,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(302));

	// bkgd
	this.instance_13 = new lib.CE300x600bkgd15();
	this.instance_13.setTransform(588,303,1,1,-90);

	this.instance_14 = new lib.CE300x600bkgd15();
	this.instance_14.setTransform(3,303,1,1,-90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14},{t:this.instance_13}]}).wait(302));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(154,120.1,1137.2,696.9);
// library properties:
lib.properties = {
	id: '0957C5EC3B874C629166840920B09671',
	width: 970,
	height: 250,
	fps: 24,
	color: "#999999",
	opacity: 1.00,
	manifest: [
		{src:"images/DD_CE_970x250_atlas_P_1.png?1597619374701", id:"DD_CE_970x250_atlas_P_1"},
		{src:"images/DD_CE_970x250_atlas_NP_1.jpg?1597619374701", id:"DD_CE_970x250_atlas_NP_1"}
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