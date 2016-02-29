var DIRECTION_UP = 0;
var DIRECTION_RIGHT = 1;
var DIRECTION_LEFT = 2;
var DIRECTION_DOWN= 3;

function createCanvas(widthSize,heightSize){
    var canvas = document.createElement("canvas");
    canvas.width = widthSize;
    canvas.height = heightSize;
    document.body.appendChild(canvas);
    return canvas;
}

function createGird(numberOfColumns, numberOfRows, defaultValue){
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

function createSnake(direction,horizontalCoordinate,verticalCoordinate){
    var snake = {
        direction: null,
        snakeQueue: null,
        last: null,
        init: function(){
            this.direction = direction;
            this.snakeQueue = [];
            this.insert(horizontalCoordinate,verticalCoordinate);
        },
        insert: function(horizontalCoordinate,verticalCoordinate){
            this.snakeQueue.unshift({
                x:horizontalCoordinate,
                y:verticalCoordinate
            });
            this.last = this.snakeQueue[0];
        }
    }
    return snake;
}