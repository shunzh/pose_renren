var canvas = $("#canvas");
var toolbox = $("#toolbox");
var grid; // the Array 
var width; //max 9
var height; //max 7
var session_key;

var currentTool = -1; // -1 to unable it

//initial interface
setPattern(0);
setToolBox();
getData();

/**
 * these are click listeners of toolbox
 */
$('.tool-item').click(function(event) {
	$('.tool-item-selected').removeClass("tool-item-selected");
	$(event.target).addClass("tool-item-selected");
	
	currentTool = parseInt($(event.target).attr("id").substring(2));
});

$('.tool-item').hover(
	function(event) {
		//mouse in
		if (!$(event.target).hasClass("tool-item-selected")) {
			// if this item is not selected, show hover effect
			event.target.style.cursor='pointer';
			$(event.target).addClass("tool-item-hover");
		}
	},
	function(event) {
		//mouse out
		if ($(event.target).hasClass("tool-item-hover")) {
			// if this item is not selected, show hover effect
			$(event.target).removeClass("tool-item-hover");
		}
	}
);

/**
 * for choosing patterns
 */
$("div.choice-item a").click(function(event) {
	$('.choice-selected').removeClass("choice-selected");
	
	var id = parseInt($(event.target).attr("id").substring(3));
	setPattern(id);
	
	$(event.target).addClass("choice-selected");
});

/**
 * nothing much, just change cursor to hand when hover to
 * choice options
 */
$("div.choice-item a").hover(function(event) {
	event.target.style.cursor='pointer';
});


/** 
 * get session_key from privous page
 */
function getData() {
	session_key = getValueFromLocation( 'session_key' );
}

/**
 * every reload needs a reset of click listener
 * called in setCanvas
 */
function setBlockEffect() {
	$('.block').click(function(event) {
		if (currentTool != -1) {
			//重置其类属性比较安全
			$(event.target).attr("class", "block p"+currentTool);
			
			//get the number of id 
			var id = parseInt($(event.target).attr("id").substring(2));
			grid[id] = currentTool; // give the correspondent signal
		}
	});
	
	$('.block').hover(
		function(event) {
			//mouse in
			if (currentTool != -1) {
				event.target.style.cursor='pointer';
			}
		},
		function(event) {
			//mouse out
			//null
		}
	);
}

/**
 * set the current pattern
 * patter==0, user mode, display sidebar
 * @param pattern choose one to display
 */
function setPattern(pattern) {
	//load pattern here
	width = source[pattern][1];
	height = source[pattern][2];
	if (source[pattern][0]) {
		setGrid();
	}
	else {
		setGrid(source[pattern][3]);
	}
}

/**
 * reset the grid
 * if img is set, pass img to grid
 * else, create a blank grid 
 * @param pattern: choose one to display, pattern==0, user
 */
function setGrid(img) {
	grid = new Array();
	
	if (typeof(img)=="undefined") {
		for (var i = 0; i < width * height; i++) {
			grid[i] = -1; //not drawn
		}
	}
	else {
		grid = img;
	}

	setCanvas();
}

/**
 * called after setGrid
 * set the canvas object
 */
function setCanvas() {
	//add drawing blocks
	canvas.css("width", width * 54);
	canvas.css("height", height * 54);
	canvas.empty();
	for (var i = 0; i < width * height; i++) {
		canvas.append('<div class="block p'+grid[i]+'" id="g-'+i+'"></div>');
	}
	
	//(re)set blocks
	setBlockEffect();
}

/**
 * as you see, set ToolBox~
 */
function setToolBox() {
	for (var i = 0; i < 17; i ++) {
		toolbox.append('<div class="tool-item i'+i+'" id="i-'+i+'"></div>');
	}
}

/**
 * a string split numbers with ','. return the array containing numbers
 */
function splitParseInt(str) {
	var array = str.split(",");
	var ans = new Array();
	
	for (var i = 0; i < array.length; i++) {
		ans[i] = parseInt(array[i]);
	}
	
	return ans;
}

function setNullClicked() {
	//passing no args to setGrid, thus, it's blank
	setGrid();
}

function leftClicked() {
	window.location = "start.html?session_key="+session_key;
}

function rightClicked() {
	window.location = "pose_intro.html?session_key="+session_key+"&width="+width+"&height="+height+"&grid="+grid.toString();
}