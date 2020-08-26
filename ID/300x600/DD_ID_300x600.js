(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"DD_ID_300x600_atlas_P_1", frames: [[0,0,300,600]]},
		{name:"DD_ID_300x600_atlas_NP_1", frames: [[0,0,300,600]]}
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



(lib.IDSunBalloon = function() {
	this.initialize(ss["DD_ID_300x600_atlas_P_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ID300x600bkgd15 = function() {
	this.initialize(ss["DD_ID_300x600_atlas_NP_1"]);
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
	this.shape.graphics.f().s("#CCCCCC").ss(4,1,1).p("AAAvcIAAe5");
	this.shape.setTransform(-5,39.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IDSunBalloon_mc, new cjs.Rectangle(-150,-600,300,740.8), null);


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
	this.shape.graphics.f("#DF6032").s().p("A9m0JIAAleIBhAAIBABAIAAhAIAmAAIhYhYIiNlhIBsAAIB4B4IATg/Ii0izQgsgpAAhQIAAjFIBiAAICCCCIAAiCIBiAAIA6A7QAJgSAQgPQAmggA+AAQBWABA6AuIA4A5IAAhiIEaAAIEkElIAAhKIiFjbIBuAAIBcBcIA1hcIBsAAIAsAsQA1gyBOgBQBRAAA2A1IBiBkIAAiSIBiAAICCCCIAAiCIBiAAIA5A6IAAg6ICmAAQBMAAAmAmIS5S7MAAhA7Xg");
	this.shape.setTransform(0.025,-252.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD1shad, new cjs.Rectangle(-192.5,-505.5,385.1,505.5), null);


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
	this.shape.graphics.f("#DF6032").s().p("A6lzXIAAksIBYAAIhuhyIAug4QAmAfArAEIhRhPQgggWgBgrIAAAAQABgrAfgbQAggbA1AAQBKABAyAoIAwAvIAAhSIBYAAIBIB0IBIh0IBYAAIA3A3IAAg3IBUAAIA3A2IAAg2IBTAAIC4C3IAAi3IBUAAIA2A2IAAg2IBOAAIB7CeIAAieIBTAAIBEBCQAJgOANgNQAuguBFAAQBHAAAzAsIFLFMQATgFAVAAQBKAAAyApIBTBYIhMh7IBgAAIBQBPIAshPIBdAAIMgMgMgDpApggAmg7pIgDgEIAAAAIADAEg");
	this.shape.setTransform(0,-191.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEADEndshad, new cjs.Rectangle(-172.4,-383.3,344.9,383.3), null);


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
	this.shape.graphics.f("#DF6032").s().p("Egu/gU5IAAmrIB9AAIB/B/IAQgbIgBgBIAkg6IABgCIADgFIAAABIAWgjIB+AAIBhBhIBDAAIBiBhIAehhIB4AAIAfAfQABg8ArglQAugnBMAAQBpAABGA5IA/A+IAAgOIB0AAIAVAWQAigeArAAQBDAAAcA2QAug2BAAAQA1AAAeAgIBdBdIAAh1IAbAAIgegeIAAhWIB4AAIBCBCIAAhCIBzAAICECEQAmgYAyAAQBQAAAtA2QARAVaNaIIaLaFMgqxAArgAmW4xQgOgPAAgVQAAgVAOgPQAPgPAVAAQAWAAAOAPMA0OAz5IhABOg");
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
	this.shape.graphics.f("#DF6032").s().p("Ag5BNIAAiZIByAAIAAAYIhXAAIAAAoIBNAAIAAAXIhNAAIAAAqIBYAAIAAAYg");
	this.shape.setTransform(80.65,24.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DF6032").s().p("Ag4BNIAAiZIBxAAIAAAYIhWAAIAAAoIBLAAIAAAXIhLAAIAAAqIBXAAIAAAYg");
	this.shape_1.setTransform(65.95,24.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DF6032").s().p("Ag7A2IARgTQAXAUAYAAQANAAAIgFQAGgGAAgIIAAgBQABgIgHgFQgHgFgUgFQgbgHgLgHQgNgLAAgUIAAgBQgBgTAPgMQAPgNAXAAQAfAAAYATIgPAVQgUgQgUAAQgMAAgGAFQgIAFABAIIAAAAQAAAJAHAGQAIAEAVAGQAZAGALAJQAMAKAAATIAAAAQAAAWgOAMQgPAMgaAAQgjAAgcgZg");
	this.shape_2.setTransform(51.05,24.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DF6032").s().p("Ag5A4QgXgWABgiIAAAAQgBggAXgXQAYgXAhgBQAjAAAXAYQAWAXABAgIAAAAQgBAhgWAXQgYAYgigBQgiAAgXgXgAgkgmQgPAQAAAWIAAAAQAAAXAPAPQAPARAVgBQAXAAAPgPQAOgQAAgXIAAAAQAAgWgOgPQgQgRgWAAQgWAAgOAQg");
	this.shape_3.setTransform(28.2,24.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DF6032").s().p("AgNBNIAAiAIgwAAIAAgZIB7AAIAAAZIgwAAIAACAg");
	this.shape_4.setTransform(12.575,24.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DF6032").s().p("AAtBNIhVhsIAABsIgaAAIAAiZIAZAAIBRBpIAAhpIAbAAIAACZg");
	this.shape_5.setTransform(-9.8,24.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DF6032").s().p("AgNBNIAAiZIAaAAIAACZg");
	this.shape_6.setTransform(-21.95,24.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#DF6032").s().p("AAsBNIhThsIAABsIgbAAIAAiZIAZAAIBSBpIAAhpIAaAAIAACZg");
	this.shape_7.setTransform(-40.7,24.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#DF6032").s().p("AgxA5QgWgXAAgiIAAAAQAAggAWgXQAXgXAigBQAiABAYAUIgRAVQgTgRgXAAQgVAAgOARQgOAPgBAWIAAAAQAAAYAPAQQAOAPAXAAQAVAAAQgLIAAgdIgnAAIAAgXIBBAAIAAA/QgcAYgkAAQgiABgXgXg");
	this.shape_8.setTransform(-58.1,24.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#DF6032").s().p("AgMBNIAAiZIAaAAIAACZg");
	this.shape_9.setTransform(-70.05,24.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#DF6032").s().p("Ag7A2IARgTQAXAUAYAAQANAAAIgFQAGgGAAgIIAAgBQABgIgHgFQgHgFgUgFQgbgHgLgHQgNgLAAgUIAAgBQgBgTAQgMQAOgNAXAAQAfAAAYATIgPAVQgUgQgUAAQgMAAgGAFQgIAFABAIIAAAAQAAAJAHAGQAHAEAVAGQAaAGALAJQAMAKAAATIAAAAQAAAWgOAMQgPAMgaAAQgjAAgcgZg");
	this.shape_10.setTransform(-80.7,24.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AwtD6IAAnzMAhbAAAIAAHzg");
	this.shape_11.setTransform(0,25);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CTA, new cjs.Rectangle(-107,0,214,50), null);


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
	this.instance = new lib.HEAD1shad();
	this.instance.setTransform(194.85,259,1,1,0,0,0,0,-252.8);
	this.instance.alpha = 0.8008;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD1, new cjs.Rectangle(0,0,387.4,511.8), null);


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
	this.instance = new lib.HEADEndshad();
	this.instance.setTransform(174.85,197.3,1,1,0,0,0,0,-191.7);
	this.instance.alpha = 0.8008;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEADEndFrame, new cjs.Rectangle(0,0,347.3,389), null);


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
	this.instance.setTransform(129.75,15.65,0.9194,0.9191,0,0,0,141.1,17.1);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DD_logo, new cjs.Rectangle(0,0,259,30.8), null);


// stage content:
(lib.DD_ID_300x600 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,155];
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
	this.frame_155 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(155).call(this.frame_155).wait(1));

	// CTA
	this.instance = new lib.CTA();
	this.instance.setTransform(150.05,406.05,0.8,0.8,0,0,0,0.1,25.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(112).to({_off:false},0).to({alpha:1},7).wait(37));

	// pinwheel
	this.instance_1 = new lib.IDSunBalloon_mc();
	this.instance_1.setTransform(113,506.15,0.81,0.81);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(57).to({_off:false},0).to({x:404,y:456.15},38,cjs.Ease.quadIn).to({_off:true},1).wait(60));

	// HEAD-MySmile
	this.instance_2 = new lib.HEAD_MySmile();
	this.instance_2.setTransform(588.75,711.05,0.95,0.95,0,0,0,300.8,181.7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(104).to({_off:false},0).to({x:308.75,y:431.05},8,cjs.Ease.quadOut).wait(44));

	// HEAD-EndFrame
	this.instance_3 = new lib.HEADEndFrame();
	this.instance_3.setTransform(493.5,528.95,1,1,0,0,0,197,132);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(47).to({_off:false},0).to({x:213.5,y:248.95},10,cjs.Ease.quadOut).wait(38).to({x:493.5,y:528.95},8,cjs.Ease.quadIn).to({_off:true},1).wait(52));

	// logo
	this.instance_4 = new lib.DD_logo();
	this.instance_4.setTransform(150,159.35,1,1,0,0,0,129.5,15.3);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(104).to({_off:false},0).wait(52));

	// HEAD1
	this.instance_5 = new lib.HEAD1();
	this.instance_5.setTransform(152.5,301.45,1,1,0,0,0,135.5,93);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(42).to({x:432.5,y:581.45},5,cjs.Ease.quadIn).wait(109));

	// bkgd
	this.instance_6 = new lib.ID300x600bkgd15();

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(156));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(141.5,270.2,735.6,730.0999999999999);
// library properties:
lib.properties = {
	id: '0957C5EC3B874C629166840920B09671',
	width: 300,
	height: 600,
	fps: 24,
	color: "#999999",
	opacity: 1.00,
	manifest: [
		{src:"images/DD_ID_300x600_atlas_P_1.png?1598477721176", id:"DD_ID_300x600_atlas_P_1"},
		{src:"images/DD_ID_300x600_atlas_NP_1.jpg?1598477721176", id:"DD_ID_300x600_atlas_NP_1"}
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