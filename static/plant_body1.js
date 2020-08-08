(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"plant_body1_atlas_", frames: [[0,846,32,32],[34,846,32,32],[68,846,32,32],[102,846,32,32],[136,846,32,32],[0,0,826,844]]}
];


// symbols:



(lib._021cancel = function() {
	this.initialize(ss["plant_body1_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._021cancelpngcopy2 = function() {
	this.initialize(ss["plant_body1_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._057tappngcopy = function() {
	this.initialize(ss["plant_body1_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._057tappngcopy2 = function() {
	this.initialize(ss["plant_body1_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._057tappngcopy3 = function() {
	this.initialize(ss["plant_body1_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.daun = function() {
	this.initialize(img.daun);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2367,2810);


(lib.flower2 = function() {
	this.initialize(img.flower2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5617,3744);


(lib.fruit = function() {
	this.initialize(img.fruit);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2200,2874);


(lib.plant_body = function() {
	this.initialize(ss["plant_body1_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.roots = function() {
	this.initialize(img.roots);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3000,2025);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
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


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.fruit();
	this.instance.setTransform(-94,-117.95,0.0855,0.0821);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-94,-117.9,188,235.9), null);


(lib.click_x4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._021cancelpngcopy2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,32,32);


(lib.click_root = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.roots();
	this.instance.setTransform(0,0,0.1308,0.1454);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.click_root, new cjs.Rectangle(0,0,392.5,294.5), null);


(lib.click_flower = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.flower2();
	this.instance.setTransform(0,0,0.0857,0.0888);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.click_flower, new cjs.Rectangle(0,0,481.5,332.4), null);


(lib.button_x = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._021cancel();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,32,32);


(lib.button_root = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._057tappngcopy2();
	this.instance.setTransform(0,22.65,1,1,-44.9994);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,45.3,45.3);


(lib.button_leaves = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._057tappngcopy3();
	this.instance.setTransform(16,0,1,1,29.9992);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,43.7,43.7);


(lib.button_fruit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._057tappngcopy();
	this.instance.setTransform(32,32,1,1,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,32,32);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.click_flower = new lib.click_flower();
	this.click_flower.setTransform(0,0,1,1,0,0,0,240.7,166.2);

	this.timeline.addTween(cjs.Tween.get(this.click_flower).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-240.7,-166.2,481.5,332.4), null);


(lib.click_roots = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.click_root = new lib.button_root();
	this.click_root.setTransform(32.05,32.1,1,1,44.9994,0,0,22.7,22.7);
	new cjs.ButtonHelper(this.click_root, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.click_root).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,64.1,64.1);


(lib.button_x2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.click_x1 = new lib.button_x();
	this.click_x1.setTransform(14.55,14.45,0.9035,0.8979,0,0,0,16.1,16.1);
	new cjs.ButtonHelper(this.click_x1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.click_x1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,28.9,28.8);


// stage content:
(lib.plant_body1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{root:7,bunga:6,daun:5,buah:4});

	// timeline functions:
	this.frame_0 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/

		this.stop();

		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.

		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/


		this.click_fruit.addEventListener("click", fl_ClickToGoToAndStopAtFrame_7.bind(this));

		function fl_ClickToGoToAndStopAtFrame_7()
		{
			this.gotoAndStop("buah");
		}


		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.

		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/


		this.click_leaf.addEventListener("click", fl_ClickToGoToAndStopAtFrame_9.bind(this));

		function fl_ClickToGoToAndStopAtFrame_9()
		{
			this.gotoAndStop("daun");
		}




		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.

		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/


		/*this.click_flower.addEventListener("click", fl_ClickToGoToAndStopAtFrame_10.bind(this));

		function fl_ClickToGoToAndStopAtFrame_10()
		{
			this.gotoAndStop("bunga");
		}*/


		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.

		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/


		this.click_roots.addEventListener("click", fl_ClickToGoToAndStopAtFrame_19.bind(this));

		function fl_ClickToGoToAndStopAtFrame_19()
		{
			this.gotoAndStop("root");
		}
	}
	this.frame_4 = function() {
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.

		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/


		this.click_x1.addEventListener("click", fl_ClickToGoToAndStopAtFrame_8.bind(this));

		function fl_ClickToGoToAndStopAtFrame_8()
		{
			this.gotoAndStop(0);
		}


		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		this.click_x2.addEventListener("click", fl_ClickToGoToAndStopAtFrame_8.bind(this));

		function fl_ClickToGoToAndStopAtFrame_8()
		{
			this.gotoAndStop(0);
		}


		/*this.click_x3.addEventListener("click", fl_ClickToGoToAndStopAtFrame_8.bind(this));

		function fl_ClickToGoToAndStopAtFrame_8()
		{
			this.gotoAndStop(0);
		}/*

		this.stop();
	}
	this.frame_6 = function() {
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.

		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/


		this.click_flower.addEventListener("click", fl_ClickToGoToAndStopAtFrame_11.bind(this));

		function fl_ClickToGoToAndStopAtFrame_11()
		{
			this.gotoAndStop("bunga");
		}


		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.

		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/


		this.click_x3.addEventListener("click", fl_ClickToGoToAndStopAtFrame_12.bind(this));

		function fl_ClickToGoToAndStopAtFrame_12()
		{
			this.gotoAndStop(0);
		}
	}
	this.frame_7 = function() {
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.

		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/


		this.click_x4.addEventListener("click", fl_ClickToGoToAndStopAtFrame_20.bind(this));

		function fl_ClickToGoToAndStopAtFrame_20()
		{
			this.gotoAndStop(0);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(2).call(this.frame_6).wait(1).call(this.frame_7).wait(4));

	// stciker_r
	this.click_x4 = new lib.click_x4();
	this.click_x4.setTransform(767.25,574.5,1.2506,1.248,0,0,0,16.1,16.1);
	new cjs.ButtonHelper(this.click_x4, 0, 1, 1);

	this.click_root = new lib.click_root();
	this.click_root.setTransform(625.2,694.2,1,1.018,0,0,0,196.2,147.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.click_root},{t:this.click_x4}]},7).to({state:[]},1).wait(3));

	// sticker_flwr
	this.click_x3 = new lib.button_x2();
	this.click_x3.setTransform(786.7,202.9,1.1147,1.1487,0,0,0,14.6,14.5);
	new cjs.ButtonHelper(this.click_x3, 0, 1, 1);

	this.movieClip_3 = new lib.Symbol2();
	this.movieClip_3.setTransform(721,340.95,0.9558,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.movieClip_3},{t:this.click_x3}]},6).to({state:[]},1).wait(4));

	// sticker_d
	this.click_x1 = new lib.button_x();
	this.click_x1.setTransform(269.45,463.1,0.8895,0.9216,0,0,0,16.1,16.1);
	new cjs.ButtonHelper(this.click_x1, 0, 1, 1);

	this.instance = new lib.daun();
	this.instance.setTransform(4,440,0.118,0.1003);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance},{t:this.click_x1}]},5).to({state:[]},1).wait(5));

	// sticker_f
	this.click_x2 = new lib.button_x2();
	this.click_x2.setTransform(270.05,52.45,1.1147,1.1487,0,0,0,14.6,14.5);
	new cjs.ButtonHelper(this.click_x2, 0, 1, 1);

	this.movieClip_1 = new lib.Symbol1();
	this.movieClip_1.setTransform(139.6,183.75,1.4772,1.3045,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.movieClip_1},{t:this.click_x2}]},4).to({state:[]},1).wait(6));

	// fruit
	this.click_fruit = new lib.button_fruit();
	this.click_fruit.setTransform(321.8,269,1,1,180,0,0,16,16);
	new cjs.ButtonHelper(this.click_fruit, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.click_fruit).wait(11));

	// leaves
	this.click_leaf = new lib.button_leaves();
	this.click_leaf.setTransform(269.1,425,0.9999,0.9999,-29.9978,0,0,22,21.9);
	new cjs.ButtonHelper(this.click_leaf, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.click_leaf).wait(11));

	// flower
	this.click_flower = new lib.button_fruit();
	this.click_flower.setTransform(353.8,374.4,1,1,180,0,0,16,16);
	new cjs.ButtonHelper(this.click_flower, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.click_flower).wait(11));

	// root
	this.click_roots = new lib.click_roots();
	this.click_roots.setTransform(409.2,729,1,1,0,0,0,32,32);
	new cjs.ButtonHelper(this.click_roots, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.click_roots).wait(11));

	// background
	this.instance_1 = new lib.plant_body();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(413,422,538.1,422.1);
// library properties:
lib.properties = {
	id: 'A762B41E2137884DB84EAF8676323A38',
	width: 826,
	height: 844,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"./../static/images/daun.png", id:"daun"},
		{src:"./../static/images/flower2.png", id:"flower2"},
		{src:"./../static/images/fruit.png", id:"fruit"},
		{src:"./../static/images/roots.png", id:"roots"},
		{src:"./../static/images/plant_body1_atlas_.png", id:"plant_body1_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.StageGL();

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
an.compositions['A762B41E2137884DB84EAF8676323A38'] = {
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


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
