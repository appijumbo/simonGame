/*******   List of Objects / methods/ functions   ********
 Classes, super classes, sub classes etc

rndSequence     the random sequece object:
                reset, genNext, read (AiPlayer)

humanPlayer     light up buttons pressed and make corresponding sound
                store buttons pressed in playerSequence
                score.reset    score.plus
                sequence.read   sequence.write

AiPlayer        get moves: rndSequence.read
                light up buttons and make corresponding sound: AiPlayer.play()


outputSignal    display: score, messages (oops wrong, copy me, game over, you win),
                strict on 
                light up buttons and make corresponding sound
                make sounds when: game over, you win


game            power off/on, startPressed, strict('on'), strict('off'), getStrict 
                state (won, lost, playing, ready) 

*********************************************************/


// Singleton Class
var rndSequence = function(){
    //reset, genNext, read (AiPlayer)
};  




var aiPlayer = function(){
    
};



var outputSignal = function(){
    //display: score, messages (oops wrong, copy me, game over, you win),
    // strict on 
    // light up buttons and make corresponding sound
    // make sounds when: game over, you win
    
    // needs update and render methods
};



var game = function(){
    // power off/on, startPressed, strict('on'), strict('off'), getStrict 
    // state (won, lost, playing, ready)
};



// the human player class (probably only one but will make a class anyhow)
var HumanPlayer = function() {
    
    // Set initial score value to 0
    this.score = 0;
    // Position character at the bottom of the game field
    this.startPlayer();
    // Transform keypress into movements of the character
    this.handleInput();
};


// Displays score on each player update
HumanPlayer.prototype.update = function() {
    //this.displayScore(this.score);
};


// makes any presses buttons light up **** not sure
HumanPlayer.prototype.render = function() {
   
};


// reset Player
HumanPlayer.prototype.startPlayer = function() {
    this.
    this.
};


// increment score (dScore)
HumanPlayer.prototype.countScore = function(dScore) {
    this.dScore = dScore;
    this.score = this.score + this.dScore;
};


// Send score value to the div above game field
HumanPlayer.prototype.displayScore = function(score) {
    //scoreDispl.innerHTML = 'Your score is: ' + score;
};










/***********  GLOBAL FUNCTIONS  & VARIABLES  **************/

var randomize = function(max, min) {
    //return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Set of global variables
var redButton = document.getElementById(redButton);
var greenButton = document.getElementById(greenButton);
var blueButton = document.getElementById(blueButton);
var yellowButton = document.getElementById(yellowButton);

var redbutton_state = mainmessage.dataset.redbutton_state;
var greenbutton_state = scoreDisplay.dataset.greenbutton_state;
var bluebutton_state = strictDisplay.dataset.bluebutton_state;
var yellowbutton_state = strictDisplay.dataset.yellowbutton_state;



var mainmessage = document.getElementById(mainMessage);
var scoreDisplay = document.getElementById(scoreDisplay);
var strictDisplay = document.getElementById(strictDisplay);

var mainmessage_state = mainmessage.dataset.mainmessage_display_state;
var scoreDisplay_state = scoreDisplay.dataset.score_display_state;
var strictDisplay_state = strictDisplay.dataset.strict_display_state;


var powerId = document.getElementById(powerId);
var startId = document.getElementById(startId);
var strictId = document.getElementById(strictId);

var power_state = mainmessage.dataset.power_state;
var strict_state = mainmessage.dataset.strict_state;
// Note: don't need start state !


// instantiate objects
//var humanPlayer = new HumanPlayer(),
      






/**********************************************************/
/***********  LISTEN for KEYPRESS or CLICKS  **************/

// do I 'talk' to global variables here?
HumanPlayer.prototype.handleInput = function(a) {
    switch (a) {
            
        //********** Red  **********         
        case "red":
            this.
            break;
        
            
        //********** Blue  **********    
        case "green":
            this.
            break;
            
            
        //********** Green  **********    
        case "blue":
            this.
            break;
            
            
        //********** Yellow  **********    
        case "yellow":
            this.
            break;
            
            
        //********** Strict  **********    
        case "strict":
            this.
            break;
            
            
        //********** fall back  **********    
        default:
            break;
    }
};



/*********/

game.prototype.handleInput = function(a) {
    switch (a) {
            
        //********** Start  **********         
        case "start":
            this.
            break;
        
            
        //********** Power  **********    
        case "power":
            this.
            break;
            
        //********** fall back  **********    
        default:
            break;
    }
};


/****

// Global random function. Used for different prototypes


// Set of global variables with digital values.
var score = 0,
    

// Here objects are instantiated.
var humanPlayer = new HumanPlayer(),
    aiPlayer = new AiPlayer,
    etc etc

****/

/**************************    CLICK EVENT BUBBLING     *************************/
/* identify click events and use the event object 'e' and switch case statement */

$('.page').on('click',function(e) {
    
    var buttonsPressed = {
        redButton: 'red',
        blueButton: 'blue',
        greenButton: 'green',
        yellowButton: 'yellow',
        startId: 'start',
        powerId: 'power',
        strictId: 'strict'
    };
    
    if(e.target.id==='red'||'blue'||'green'||'yellow'){
        humanPlayer.handleInput(buttonsPressed[e.target.id]);
        }
    else if (e.target.id==='start'||'power'||'strict'){
        game.handleInput(buttonsPressed[e.target.id]);
    }
    
    }
);
