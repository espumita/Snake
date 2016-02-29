var GAME_COLUMNS = 26;
var GAME_ROWS = 26;

function canvas(){
    this.canvas;
    this.createAndInitializeCanvas = function(){
        this.canvas = document.createElement("canvas");
        this.canvas.width = GAME_COLUMNS*20;
        this.canvas.height = GAME_ROWS*20;
        document.body.appendChild(this.canvas);
        return this.canvas;
    }
}