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
    this.grid = {
        width : null,
        height : null,
        gridContent : null,
        init: function(){
            this.width = numberOfColumns;
            this.height = numberOfRows;
            this.gridContent = [];
            for(var i = 0;i < this.width;i++){
                this.gridContent.push([]);
                for(var j = 0;j < this.height;j++){
                    this.gridContent[i].push(defaultValue);
                }
            }
        },
        get: function(horizontalCoordinate,verticalCoordinate){
            return this.gridContent[horizontalCoordinate][verticalCoordinate];
        },
        set: function(horizontalCoordinate,verticalCoordinate,value){
            this.gridContent[horizontalCoordinate][verticalCoordinate] = value;
        }
    }
    return this.grid;
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
                i:horizontalCoordinate,
                j:verticalCoordinate
            });
            this.last = this.snakeQueue[0];
        },
        remove: function(){
            return this.snakeQueue.pop();
        }
    }
    return snake;
}

function gameUpdate() {
    frames++;
    if(frames%5 === 0){
        var horizontalNewCoordinates = snake.last.i;
        var verticalNewCoordinates = snake.last.j;
        if(snake.direction === DIRECTION_LEFT) horizontalNewCoordinates--;
        if(snake.direction === DIRECTION_UP)   verticalNewCoordinates--;
        if(snake.direction === DIRECTION_RIGHT) horizontalNewCoordinates++;
        if(snake.direction === DIRECTION_DOWN)   verticalNewCoordinates++;
        var removedSnakeTail = snake.remove();
        grid.set(removedSnakeTail.i, removedSnakeTail.j,0);
        grid.set(horizontalNewCoordinates, verticalNewCoordinates,1);
        snake.insert(horizontalNewCoordinates, verticalNewCoordinates);
    }
}
function scale() {
    return canvas.width / grid.width;
}
function gameRepaint() {
    for (var i=0; i < grid.width; i++) {
        for (var j=0; j < grid.height; j++) {
            if(grid.get(i,j) === 0) ctx.fillStyle = "#EEEEFF";
            if(grid.get(i,j) === 1) ctx.fillStyle = "#0011BB";
            ctx.fillRect(i * scale(), j*scale(),scale(), scale());
        }
    }
}
function gameIteration() {
    gameUpdate();
    gameRepaint();
    window.requestAnimationFrame(gameIteration,canvas);
}