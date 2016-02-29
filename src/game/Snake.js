var GAME_COLUMNS = 26;
var GAME_ROWS = 26;

function createCanvas(widthSize,heightSize){
    var canvas = document.createElement("canvas");
    canvas.width = widthSize;
    canvas.height = heightSize;
    document.body.appendChild(canvas);
    return canvas;
}

function gameGird(numberOfColumns,numberOfRows,defaultValue){
    this.gird = {
        width : null,
        height : null,
        girdContent : null,
        init: function(){
            this.width = numberOfColumns;
            this.height = numberOfRows;
            this.girdContent = [];
            for(var i = 0;i < this.width;i++){
                this.girdContent.push([]);
                for(var j = 0;j < this.height;j++){
                    this.girdContent[i].push(defaultValue);
                }
            }
        },
        get: function(horizontalCoordinate,verticalCoordinate){
            return this.girdContent[horizontalCoordinate][verticalCoordinate];
        },
        set: function(horizontalCoordinate,verticalCoordinate,value){
            this.girdContent[horizontalCoordinate][verticalCoordinate] = value;
        }
    }
    return this.gird;
}