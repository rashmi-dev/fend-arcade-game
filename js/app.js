// Enemies our player must avoid
var Enemy = function(x,y,t) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    //initialize x-0,y=145
    //Y values :-225(last row),60/65(first row),145(middle row)
    //X value :-0,(first col) ,100 (2 column),200(3rd),300,400
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.t = t;//speed
    this.reset = false;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    //console.log("update prototype of enemy"+dt);
    if(this.x >= 0 && this.x <= 400) {
        this.x += dt * this.t;
    }
    else {
        this.x = 0;    
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    this.sprite = 'images/char-cat-girl.png';
    //Y values :- max 400 ,min 0/-10(water)
    //X value :-0,(first col) ,100 (2 column),200(3rd),300,400
    this.x = 150;
    this.y = 350;
    this.lives = 10;
};

var player = new Player();

Player.prototype.update = function() {};

//To draw the player on screen
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//Player movement,increases by +50
Player.prototype.handleInput = function(dt) {
    if(dt =='up' && this.y >= 50) {
        this.y -= 50;
    }
    else if(dt == 'down' && this.y <= 350) {
        this.y += 50;
    }
    else if(dt == 'right' && this.x <= 350) {
        this.x += 50;
    }
    else if(dt == 'left' && this.x >= 50) {
        this.x -= 50;
    }
    if(this.y <= 5 && key.hasKey == true) {
        var modal = document.getElementById('myModal');
        var header = document.getElementsByClassName("modal-header")[0];
        modal.style.display = "block";
        header.style.background = "#FFA500";
        modal.style.background = "url('../images/laurel-wreath.png') 50% 0% no-repeat";
        modal.style.backgroundSize = "1000px 700px";
        document.getElementById('warn').innerHTML = "Winner!";
        document.getElementById('modal-msg').innerHTML = "Congratulation! You have finished the game with:";
        document.getElementById('win-info').style.display = "block";
        document.getElementById("modal-lives").innerHTML = player.lives;
        document.getElementById("modal-hrt").innerHTML = document.getElementById("hrt").textContent;
        document.getElementById("modal-key").innerHTML = document.getElementById("key").textContent;
        document.getElementById("modal-gem").innerHTML = document.getElementById("gem").textContent;
    }
    else if(key.hasKey == false && this.y <= 10) {
        var modal = document.getElementById('myModal');
        modal.style.display = "block";
        document.getElementById('warn').innerHTML = "Warning!";
        document.getElementById('modal-msg').innerHTML = "You have to get the key to finish the game!";
    }
    else {
        console.log("Reached the end of "+dt+" side.");
    }
};

//Create gem object 
var Gem = function() {
    this.spirit = "images/gem-orange.png";
    this.x = 100;
    this.y = 85;
    this.gemBackGrd = "";
    this.remove = false;
    this.hasGem = false;
};

//create gem object
var allGems = new Gem();

//Removing the object after player collides with it
Gem.prototype.getGem = function (){
    this.remove = true;
    return true;
}

Gem.prototype.render = function() {
    //store the image space before drawing the gem to redraw when needed
    this.gemBackGrd = ctx.getImageData(this.x, this.y,100,140);
    ctx.drawImage(Resources.get(this.spirit), this.x, this.y,100,140);
};

Gem.prototype.checkCollisions = function () {
    if(((Math.floor(player.x) >= Math.floor(allGems.x) - 20) && (Math.floor(player.x) <= Math.floor(allGems.x) + 20)) && ((Math.floor(player.y) >= Math.floor(allGems.y) - 20) && (Math.floor(player.y) <= Math.floor(allGems.y) + 20))) {
        this.getGem(); 
    }  
};

var info = document.getElementsByClassName("fa-info-circle")[0];
info.addEventListener("click",function() {
    var modal = document.getElementById('infoModal');
    modal.style.display = "block";
});

//create key object
var Key = function() {
    this.spirit = "images/Key.png";
    this.x = 300;
    this.y = 340;
    this.keyBackgrd = "";
    this.remove = false;
    this.hasKey = false;
};

Key.prototype.render = function() {
    //store the key space area before drawing the key
    this.keyBackgrd = ctx.getImageData(this.x, this.y,100,140);
    ctx.drawImage(Resources.get(this.spirit), this.x, this.y,100,140);
};

//Removing the object after player collides with it
Key.prototype.getKey = function (){
    this.remove = true;
    return true;
}

var key = new Key();

Key.prototype.checkCollisions = function () {
    if(((Math.floor(player.x) >= Math.floor(key.x) - 20) && (Math.floor(player.x) <= Math.floor(key.x) + 20)) && ((Math.floor(player.y) >= Math.floor(key.y) - 20) && (Math.floor(player.y) <= Math.floor(key.y) + 20))) {
        this.getKey(); 
    }  
};

var Heart = function() {
    this.spirit = "images/Heart.png";
    this.x = 400;
    this.y = 420;
    this.hrtBackgrd = "";
    this.remove = false;
    this.hasHrt = false;
};

Heart.prototype.render = function() {
    this.hrtBackgrd = ctx.getImageData(this.x, this.y,100,140);
    ctx.drawImage(Resources.get(this.spirit ), this.x, this.y,100,140);
};

//Removing the object after player collides with it
Heart.prototype.getHrt = function (){
    this.remove = true;
    return true;
}

var heart = new Heart();
Heart.prototype.checkCollisions = function () {
    if(((Math.floor(player.x) >= Math.floor(heart.x) - 20) && (Math.floor(player.x) <= Math.floor(heart.x) + 20)) && ((Math.floor(player.y) >= Math.floor(heart.y) - 20) && (Math.floor(player.y) <= Math.floor(heart.y) + 20))) {
            this.getHrt();
    }  
};

var modal = document.getElementById('myModal');
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
    location.reload();
}

var infoModal = document.getElementById('infoModal');
var span = document.getElementsByClassName("info-close")[0];
window.onclick = function(event) {
    if (event.target == infoModal) {
        infoModal.style.display = "none";
    }
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    infoModal.style.display = "none";
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
var allEnemies = [new Enemy(0,145,50),new Enemy(0,60,100),new Enemy(0,225,100),new Enemy(0,145,200),new Enemy(0,225,50),new Enemy(0,60,150)];

//player collision and player lives value check.
Player.prototype.checkCollisions = function () {
    allEnemies.forEach(function(enemy) {
        //if the player has sufficient lives and to check for collision co ordinated of enemy and player
        if(player.lives >= 1) {
            if(((Math.floor(enemy.x) >= Math.floor(player.x) - 40) && (Math.floor(enemy.x) <= Math.floor(player.x) + 40)) && ((Math.floor(enemy.y) >= Math.floor(player.y) - 40) && (Math.floor(enemy.y) <= Math.floor(player.y) + 40))) {
                player.y = 350;
                player.lives--;
                document.getElementById("lives").innerHTML = player.lives;
            }  
        }
        else if(player.lives == 0){
            document.getElementById("lives").innerHTML = player.lives;
            var modal = document.getElementById('myModal');
            modal.style.display = "block";
            document.getElementById('warn').innerHTML = "Warning!";
            document.getElementById('modal-msg').innerHTML = "Sorry! You do not have sufficient player life to continue! Try again!";
          }
    });
};

//events 
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});



