(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"DD_CE_160x600_atlas_P_1", frames: [[0,0,250,247]]},
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



(lib.Pinwheel = function() {
	this.initialize(ss["DD_CE_160x600_atlas_P_1"]);
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
	this.shape.graphics.f("#5E4788").s().p("A2alrQgegcABgqIAAAAQAAgqAdgdQAYgXAfgFIhdgvIBSjCIAnAAIhThIQgegcABgrIAAgBQAAgqAcgdQAcgbAqgCIhcgtIAAjAICbAAIAmATIAEgFQAVgSAiAAQAvAAAgAaIAPAIIAAgeICpAAIAYAMIAAgMIA1AAIAAAnIAjARIAAg4IA5AAIAuBKIAuhKIA4AAIBSApIASgqIA0AAIBAAgIAAgfICpAAIAXALIAAgLICaAAIYAYCI0GPPgAsJyTIgBgBIAAABIABAAgAlfyqIAAgNIgbAAg");
	this.shape.setTransform(0,-125.85);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD1shad, new cjs.Rectangle(-147.3,-251.7,294.6,251.7), null);


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
	this.shape.graphics.f("#5E4788").s().p("A+Yx6IAAleIBdAAIhahaIAAleIBhAAIAtAtIAAgtIEzAAIAiAjIAAgjIBjAAIA2A2QAJgQAOgNQAlgfA+AAQBWAAA6AvIDSDRIBqj9IBeAAIG7G7IEBAAISwSwIgOD0IKwKtIrWgEIhKUig");
	this.shape.setTransform(0,-194.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEADEndshad, new cjs.Rectangle(-194.4,-388.6,388.9,388.6), null);


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
	this.instance_1.setTransform(2.45,244.55,1,1.1967,1.5337,0,0,-0.1,-204.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(31));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-175.6,-175.6,351.2,664.7);


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
	this.shape.graphics.f("#FFFFFF").s().p("AhNBgIAAi/ICaAAIAAAtIhlAAIAAAdIBbAAIAAAqIhbAAIAAAeIBmAAIAAAtg");
	this.shape.setTransform(169.65,-69.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAxBgIAAhtIgxBKIAAAAIgxhKIAABtIg0AAIAAi/IA5AAIAsBKIAuhKIA4AAIAAC/g");
	this.shape_1.setTransform(148.25,-69.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgZBgIAAi/IAzAAIAAC/g");
	this.shape_2.setTransform(131.85,-69.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgaBgIAAiQIg5AAIAAgvICnAAIAAAvIg6AAIAACQg");
	this.shape_3.setTransform(118.325,-69.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhMBgIAAi/ICZAAIAAAvIhkAAIAAAgIBaAAIAAArIhaAAIAABFg");
	this.shape_4.setTransform(93.225,-69.05);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhJBHQgdgdgBgqIAAAAQAAgoAegeQAfgdArAAQAsAAAdAdQAdAcAAAqIAAAAQAAAqgdAcQgeAegsAAQgrAAgegdgAgigkQgOAPAAAVIAAAAQAAAVAOAPQAOAQAVAAQAUAAAOgQQAOgOAAgWIAAAAQAAgVgOgPQgNgPgWAAQgVAAgNAPg");
	this.shape_5.setTransform(72.45,-69.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhaBgIAAi/IBKAAQAxAAAeAaQAcAaAAArIAAAAQAAAqgdAbQgdAbgyAAgAglAxIAWAAQAXAAAOgNQAPgMAAgYIAAAAQAAgWgPgNQgOgNgXAAIgWAAg");
	this.shape_6.setTransform(154.725,-93.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAyBhIgOgjIhJAAIgOAjIg3AAIBRjBIAzAAIBRDBgAAVAVIgVg2IgVA2IAqAAg");
	this.shape_7.setTransform(132.975,-93.275);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhNBgIAAi/ICZAAIAAAtIhlAAIAAAdIBcAAIAAApIhcAAIAAAfIBnAAIAAAtg");
	this.shape_8.setTransform(113.25,-93.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAiBgIAAhJIhEAAIAABJIg1AAIAAi/IA1AAIAABIIBEAAIAAhIIA2AAIAAC/g");
	this.shape_9.setTransform(93.3,-93.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAyBhIgOgjIhJAAIgOAjIg3AAIBRjBIAzAAIBRDBgAAVAVIgVg2IgVA2IAqAAg");
	this.shape_10.setTransform(71.975,-93.275);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhTBDIAegjQAdAXAgAAQAWAAAAgNIAAgBQAAgGgGgEQgHgEgSgFQglgHgPgLQgVgOAAgbIAAAAQAAgbAUgRQAVgRAhAAQAvAAAgAZIgbAmQgagTgbAAQgTAAAAAMIAAABQAAAGAHAEQAHAEASAEQAkAJARALQATAOAAAZIAAABQAAAdgVARQgVARgkAAQg1gBgkggg");
	this.shape_11.setTransform(146.875,-117.35);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgaBgIAAiRIg5AAIAAguICnAAIAAAuIg6AAIAACRg");
	this.shape_12.setTransform(129.625,-117.35);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhTBDIAegjQAdAXAgAAQAWAAAAgNIAAgBQAAgGgGgEQgHgEgSgFQglgHgPgLQgVgOAAgbIAAAAQAAgbAUgRQAVgRAhAAQAvAAAgAZIgbAmQgagTgbAAQgTAAAAAMIAAABQAAAGAHAEQAHAEASAEQAkAJARALQATAOAAAZIAAABQAAAdgVARQgVARgkAAQg1gBgkggg");
	this.shape_13.setTransform(111.825,-117.35);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhJBHQgdgcAAgqIAAgBQAAgpAdgcQAegeArAAQAsAAAeAdQAeAcAAAqIAAAAQAAApgeAdQgeAegsAAQgrAAgegdgAgjgjQgNAOAAAVIAAAAQAAAVAOAPQAOAQAUAAQAWAAANgPQAOgPAAgVIAAgBQAAgUgOgPQgOgQgVAAQgVAAgOAQg");
	this.shape_14.setTransform(91.95,-117.35);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag+BIQgdgdAAgqIAAgBQAAgqAdgcQAdgdAqAAQA1AAAdAoIgpAfQgSgXgXABQgUgBgNAQQgMAOAAAVIAAAAQAAAWAMAPQANAOAUAAQAYAAATgXIAoAdQgfArg2AAQgpAAgcgcg");
	this.shape_15.setTransform(71.3,-117.35);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhNBgIAAi/ICaAAIAAAtIhmAAIAAAdIBcAAIAAAqIhcAAIAAAeIBnAAIAAAtg");
	this.shape_16.setTransform(194.55,-141.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgaBgIAAiQIg5AAIAAgvICnAAIAAAvIg6AAIAACQg");
	this.shape_17.setTransform(176.025,-141.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAyBhIgOgjIhJAAIgOAjIg3AAIBRjBIAzAAIBRDBgAAVAVIgVg2IgVA2IAqAAg");
	this.shape_18.setTransform(158.525,-141.575);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAxBgIAAhtIgxBKIAAAAIgxhKIAABtIg0AAIAAi/IA4AAIAtBKIAuhKIA4AAIAAC/g");
	this.shape_19.setTransform(135.7,-141.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgZBgIAAi/IA0AAIAAC/g");
	this.shape_20.setTransform(119.35,-141.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgaBgIAAiQIg5AAIAAgvICnAAIAAAvIg6AAIAACQg");
	this.shape_21.setTransform(105.775,-141.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhTBEIAegkQAdAXAgAAQAWAAAAgNIAAAAQAAgHgGgDQgHgFgSgEQglgJgPgKQgVgOAAgbIAAAAQAAgbAUgRQAVgSAhAAQAvABAgAZIgbAmQgagTgbAAQgTAAAAAMIAAABQAAAGAHAEQAHAEASAFQAkAHARANQATANAAAZIAAABQAAAdgVAQQgVASgkgBQg1AAgkgfg");
	this.shape_22.setTransform(88.025,-141.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AhNBgIAAi/ICaAAIAAAtIhlAAIAAAdIBbAAIAAAqIhbAAIAAAeIBmAAIAAAtg");
	this.shape_23.setTransform(70.55,-141.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1 copy
	this.instance = new lib.HEAD1shad();
	this.instance.setTransform(208.6,-25.65,1,1,0,0,0,0,-125.9);
	this.instance.alpha = 0.8008;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD1, new cjs.Rectangle(60,-155,295.9,255.3), null);


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

	// breeze shad
	this.instance = new lib.HEADEndshad();
	this.instance.setTransform(199.55,200.7,1,1,0,0,0,0,-194.3);
	this.instance.alpha = 0.8008;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEADEndFrame, new cjs.Rectangle(0,0,394,395), null);


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

	this.actionFrames = [0,153];
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
	this.frame_153 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(153).call(this.frame_153).wait(1));

	// pinwheel
	this.instance = new lib.pinwheel_mc();
	this.instance.setTransform(85,603.45,0.57,0.57,0,0,0,0.1,0.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(57).to({_off:false},0).to({y:373.45},5,cjs.Ease.quadOut).wait(28).to({y:603.45},5,cjs.Ease.quadIn).to({_off:true},1).wait(58));

	// CTA
	this.instance_1 = new lib.CTA();
	this.instance_1.setTransform(80,388.8,0.64,0.64,0,0,0,0.1,25.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(114).to({_off:false},0).to({alpha:1},5).wait(35));

	// HEAD-MySmile
	this.instance_2 = new lib.HEAD_MySmile();
	this.instance_2.setTransform(325.4,507.2,0.52,0.52,0,0,0,300.8,181.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(106).to({_off:false},0).to({x:165.4,y:347.2},8,cjs.Ease.quadOut).wait(40));

	// HEAD-EndFrame
	this.instance_3 = new lib.HEADEndFrame();
	this.instance_3.setTransform(303.55,433.4,0.7,0.7,0,0,0,197,132);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(47).to({_off:false},0).to({x:143.55,y:283.4},10,cjs.Ease.quadOut).wait(39).to({x:303.55,y:443.4},5,cjs.Ease.quadIn).to({_off:true},1).wait(52));

	// logo
	this.instance_4 = new lib.DD_logo();
	this.instance_4.setTransform(209.35,172,1,1,0,0,0,129.5,15.3);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(106).to({_off:false},0).wait(48));

	// HEAD1
	this.instance_5 = new lib.HEAD1();
	this.instance_5.setTransform(82.5,436,1,1,0,0,0,135.5,93);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(47).to({x:242.5,y:596},5,cjs.Ease.quadIn).to({_off:true},1).wait(101));

	// bkgd
	this.instance_6 = new lib.CE300x600bkgd15();

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(154));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(80,300,403.2,582.2);
// library properties:
lib.properties = {
	id: '0957C5EC3B874C629166840920B09671',
	width: 160,
	height: 600,
	fps: 24,
	color: "#999999",
	opacity: 1.00,
	manifest: [
		{src:"images/DD_CE_160x600_atlas_P_1.png?1598645114139", id:"DD_CE_160x600_atlas_P_1"},
		{src:"images/DD_CE_160x600_atlas_NP_1.jpg?1598645114139", id:"DD_CE_160x600_atlas_NP_1"}
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