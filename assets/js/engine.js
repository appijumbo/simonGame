/* Engine.js
 * This file provides the game loop functionality (update entities and render),
 * draws the initial game board on the screen, and then calls the update and
 * render methods as defined in app.js.
 *
 
 
 Steps of execution

    1)  The power button is turned 'on'
        game.state('powerOn')   outputSignal.powerOn
        
    2)  The 'start' button is pressed, causing game to be initialised; 
        rndSequence.reset()   game.state('ready') game.strict('off') humanPlayer.scorereset
        
    3)  output screen alerts that the start button has been pressed
        outputSignal.copyme() 
    
    4)  Chooses a button and pushed to the random sequence array.
        rndSequence.genNext
    
    5)  The AI player 'plays' the random sequence of buttons. 
        Each button lights up, for ½ a second
        Buttons won't function when AI is playing
        aiPlayer.play()  rndSequence.read()
    
    6)  If no response after 5 seconds 
        go back to 5)
    
    7)  The human player copies the AI player sequence
        humanPlayer.handleInput    humanSequence.write
    
    8)  compare human and random sequences:
    
            if humanPlayer.sequence.read =! rndSequence.read  & game.getStrict() = true
            game.state('Game Over') 
            
            else if humanPlayer.sequence.read =! rndSequence.read  & game.getStrict() = true
            game.state('fail')
            go to 5)
            
            
            else if if humanPlayer.sequence.read == rndSequence.read
            humanPlayer.countscore(1)
            
      9) If the game.score = 20 human player wins:
        game.state('you win') 
        
 
 */

var Engine = (function(global) {
    /* Predefine the variables we'll be using within this scope,
     * create the canvas element, grab the 2D context for that canvas
     * set the canvas elements height/width and add it to the DOM.
     In this case were using SVG not Canvas elements
     */
    var doc = global.document,
        win = global.window,
        lastTime;  // for the gaming loop timer

    /* This function serves as the kickoff point for the game loop itself
     * and handles properly calling the update and render methods.
     
     * In Simon' smooth animation isn't required as its just lights off/on
     * so the engine isnt strictly necessary, but primarily used for developing know-how
     */
    function main() {
        /* Get time delta information which is required if your game
         * requires smooth animation. Because everyone's computer processes
         * instructions at different speeds we need a constant value that
         * would be the same for everyone (regardless of how fast their
         * computer is)
         */
        var now = Date.now(),
            dt = (now - lastTime) / 1000.0;

        /* Call update/render functions, pass along the time delta to
         * update function since it may be used for smooth animation.
         */
        update(dt);
        render();

        /* Set lastTime variable which is used to determine the time delta
         * for the next time this function is called.
         */
        lastTime = now;

        /* Use the browser's requestAnimationFrame function to call this
         * function again as soon as the browser is able to draw another frame.
         */
        win.requestAnimationFrame(main);
    }

    /* This function does some initial setup that should only occur once,
     * particularly setting the lastTime variable that is required for the
     * game loop.
     */
    function init() {
        lastTime = Date.now();
        // checkIfSimonOn
        //              if true   resetGame();
        //                        main();
    }

    /* This function is called by main (our game loop) and itself calls all
     * of the functions which may need to update entity's data.
     */
    function update(dt){
        // stateUpdate();
        // buttonUpdate();
    }
    
    function render(){
        // buttonRender();
        // outputScreenRender();
        // http://www.petercollingridge.co.uk/data-visualisation/using-javascript-control-svg
    }
    
})(this);
