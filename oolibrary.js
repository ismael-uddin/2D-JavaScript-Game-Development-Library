//===========================================================================================================
//Developer: ISMAEL UDDIN
//https://uk.linkedin.com/in/ismaeluddin
//===========================================================================================================

//===========================================================================================================
//CREATE CANVAS
//===========================================================================================================
var newCanvas = function(width,height){
	this.canvas = document.createElement("canvas");
	this.width = width;
	this.height = height;
	this.ctx = this.canvas.getContext("2d");
	document.body.appendChild(this.canvas);
	console.log("canvas created");
}

//===========================================================================================================
//LOADING IMAGES
//===========================================================================================================

	var game = {};
	game.images = [];
	game.doneImages = 0;
	game.requiredImages = 0;
	
	function initImages(paths){
		game.requiredImages = paths.length;
		for(i in paths){
			var img = new Image();
			img.src = paths[i];
			game.images[i] = img;
			game.images[i].onload = function(){
				game.doneImages++;
				console.log(this);
			}
		}
	}

//===========================================================================================================
// draw IMAGES
//===========================================================================================================
function drawImage(img,x,y,width,height){
	canvas.ctx.drawImage(img,x,y,width,height);
}

//===========================================================================================================
//EVENT LISTERNERS
//===========================================================================================================
document.onkeydown = checkKeyDown;

function keyinput(a,b){
	this.up = false; this.down = false; this.left = false; this.right = false;
	this.a = false; this.b = false; this.c = false; this.d = false; this.e = false; this.f = false; this.g = false; this.h = false;
	this.i = false; this.j = false;	this.k = false;	this.l = false;	this.m = false;	this.n = false;	this.o = false;	this.p = false;
	this.q = false;	this.r = false;	this.s = false;	this.t = false;	this.u = false;	this.v = false;	this.w = false;	this.x = false;	
	this.y = false;	this.z = false;
	
	switch (a)
			{
				case 37:
					keyinput.left = b;
					check(a,b);
					break;
				case 38:
					keyinput.up = b;
					check(a,b);
					break;
				case 39:
					keyinput.right = b;
					check(a,b);
					break;
				case 40:
					keyinput.down = b;
					check(a,b);
					break;
				case 65:
					keyinput.a = b;
					check(a,b);
					break;
				case 66:
					keyinput.b = b;
					check(a,b);
					break;
				case 67:
					keyinput.c = b;
					check(a,b);
					break;
				case 68:
					keyinput.d = b;
					check(a,b);
					break;
				case 69:
					keyinput.e = b;
					check(a,b);
					break;
				case 70:
					keyinput.f = b;
					check(a,b);
					break;
				case 71:
					keyinput.g = b;
					check(a,b);
					break;
				case 72:
					keyinput.h = b;
					check(a,b);
					break;
				case 73:
					keyinput.i = b;
					check(a,b);
					break;
				case 74:
					keyinput.j = b;
					check(a,b);
					break;
				case 75:
					keyinput.k = b;
					check(a,b);
					break;
				case 76:
					keyinput.l = b;
					check(a,b);
					break;
				case 77:
					keyinput.m = b;
					check(a,b);
					break;
				case 78:
					keyinput.n = b;
					check(a,b);
					break;
				case 79:
					keyinput.o = b;
					check(a,b);
					break;
				case 80:
					keyinput.p = b;
					check(a,b);
					break;
				case 81:
					keyinput.q = b;
					check(a,b);
					break;
				case 82:
					keyinput.r = b;
					check(a,b);
					break;
				case 83:
					keyinput.s = b;
					check(a,b);
					break;
				case 84:
					keyinput.t = b;
					check(a,b);
					break;
				case 85:
					keyinput.u = b;
					check(a,b);
					break;
				case 86:
					keyinput.v = b;
					check(a,b);
					break;
				case 87:
					keyinput.w = b;
					check(a,b);
					break;
				case 88:
					keyinput.x = b;
					check(a,b);
					break;
				case 89:
					keyinput.y = b;
					check(a,b);
					break;
				case 90:
					keyinput.z = b;
					check(a,b);
					break;		
			}; 			
}

	function checkKeyDown(e){
		e = e || window.event;
			
			switch (e.keyCode)
			{
				case 37:
					keyinput.left = true;
					keyinput(e.keyCode,keyinput.left);
					break;
				case 38:
					keyinput.up = true;
					keyinput(e.keyCode,keyinput.up);
					break;
				case 39:
					keyinput.right = true;
					keyinput(e.keyCode,keyinput.right);
					break;
				case 40:
					keyinput.down = true;
					keyinput(e.keyCode,keyinput.down);
					break;	
				case 65:
					keyinput.a = true;
					keyinput(e.keyCode,keyinput.a);
					break;
				case 66:
					keyinput.b = true;
					keyinput(e.keyCode,keyinput.b);
					break;
				case 67:
					keyinput.c = true;
					keyinput(e.keyCode,keyinput.c);
					break;
				case 68:
					keyinput.d = true;
					keyinput(e.keyCode,keyinput.d);
					break;
				case 69:
					keyinput.e = true;
					keyinput(e.keyCode,keyinput.e);
					break;
				case 70:
					keyinput.f = true;
					keyinput(e.keyCode,keyinput.f);
					break;
				case 71:
					keyinput.g = true;
					keyinput(e.keyCode,keyinput.g);
					break;
				case 72:
					keyinput.h = true;
					keyinput(e.keyCode,keyinput.h);
					break;
				case 73:
					keyinput.i = true;
					keyinput(e.keyCode,keyinput.i);
					break;
				case 74:
					keyinput.j = true;
					keyinput(e.keyCode,keyinput.j);
					break;
				case 75:
					keyinput.k = true;
					keyinput(e.keyCode,keyinput.k);
					break;
				case 76:
					keyinput.l = true;
					keyinput(e.keyCode,keyinput.l);
					break;
				case 77:
					keyinput.m = true;
					keyinput(e.keyCode,keyinput.m);
					break;
				case 78:
					keyinput.n = true;
					keyinput(e.keyCode,keyinput.n);
					break;
				case 79:
					keyinput.o = true;
					keyinput(e.keyCode,keyinput.o);
					break;
				case 80:
					keyinput.p = true;
					keyinput(e.keyCode,keyinput.p);
					break;
				case 81:
					keyinput.q = true;
					keyinput(e.keyCode,keyinput.q);
					break;
				case 82:
					keyinput.r = true;
					keyinput(e.keyCode,keyinput.r);
					break;
				case 83:
					keyinput.s = true;
					keyinput(e.keyCode,keyinput.s);
					break;
				case 84:
					keyinput.t = true;
					keyinput(e.keyCode,keyinput.t);
					break;
				case 85:
					keyinput.u = true;
					keyinput(e.keyCode,keyinput.u);
					break;
				case 86:
					keyinput.v = true;
					keyinput(e.keyCode,keyinput.v);
					break;
				case 87:
					keyinput.w = true;
					keyinput(e.keyCode,keyinput.w);
					break;
				case 88:
					keyinput.x = true;
					keyinput(e.keyCode,keyinput.x);
					break;
				case 89:
					keyinput.y = true;
					keyinput(e.keyCode,keyinput.y);
					break;
				case 90:
					keyinput.z = true;
					keyinput(e.keyCode,keyinput.z);
					break;		
			}; 
	}
	
//===========================================================================================================
//Collision Detection
//===========================================================================================================
//============================================rectangle bound================================================test

function rectangleCollision(a,b) {
	//detects if object is touching another object
    if (
        a.x < b.x + b.width &&
        a.x + a.width > b.x &&
        a.y < b.y + b.height &&
        a.y + a.height > b.y
    ) { 
	touch();	
    }
}

//============================================Canvas Collision================================================test

function canvasCollision(a){
	//if statement stops sprite from leaving the canvas.
	if( 
		a.x<0 || a.x>(canvas.width-10)
	)
	a.x=-a.x;
	if( 
		a.y<0 || a.y>(canvas.height-10)
	)
	a.y=-a.y;
}


//===========================================================================================================
//Game Loops
//===========================================================================================================
//=================================================Render====================================================
function render(){
	if(game.doneImages >= game.requiredImages){
		console.log("all images have been loaded");
		//place information for all images to draw here
		draw();
		
	} else {
		setTimeout(function(){
			render();
		}, 1);
		}
}

//=================================================Run Game==================================================test

function runGame(a){
	var time = Date.now();
	setInterval(run, a);
	//calls functions  
	run();
}

//=================================================Game Objects==================================================test

function newObject(x,y,width,height,speed,state){
	if(speed != 0){
		this.speed = speed;
	}else{
	speed = 0;
	}
	if(state!=0){
		this.state = state;	
	}else{
	state = 0;
	}
	this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
}

//MOVE  
newObject.prototype.moveLeft = function(newObjectx,newObjectspeed){
	newObjectx -= newObjectspeed; //left
	return newObjectx;
}
			
newObject.prototype.moveUp = function(newObjecty,newObjectspeed){
	newObjecty -= newObjectspeed; //up
	return newObjecty;
}
newObject.prototype.moveRight = function(newObjectx,newObjectspeed){
	newObjectx += newObjectspeed; //right
	return newObjectx;
}
newObject.prototype.moveDown = function(newObjecty,newObjectspeed){
	newObjecty += newObjectspeed; //down
	return newObjecty;
}		