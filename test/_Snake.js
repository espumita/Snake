describe('Unit: Snake Test Suit', function() {
    it('When_we_create_the_canvas_with_520_x_520_dimensions',function(){
        var canvas = new createCanvas(520,520);
        assert.equal( canvas.width,520);
        assert.equal( canvas.height,520);
    });

    it('when_we_init_the_grid_and_we_get_some_values', function () {
        var grid = new createGird(26,26,0);
        grid.init();
        assert.equal(grid.width,26);
        assert.equal(grid.height,26);
        assert.equal(grid.get(0,0),0);
        grid.set(0,0,40);
        assert.equal(grid.get(0,0),40);
    });

    it('when_we_init_the_snake_with_length_1', function(){
        var snake = new createSnake(DIRECTION_UP,13,25);
        snake.init();
        assert.equal(snake.snakeQueue.length,1);
        snake.remove();
        assert.equal(snake.snakeQueue.length,0);
    });

});