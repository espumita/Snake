var GAME_COLUMNS = 26;
var GAME_ROWS = 26;

function canvas(){
    this.htmlCanvas;
    this.createAndInitializeCanvas = function(){
        this.htmlCanvas = document.createElement("canvas");
        this.htmlCanvas.width = GAME_COLUMNS*20;
        this.htmlCanvas.height = GAME_ROWS*20;
        return this.htmlCanvas;
    }
}