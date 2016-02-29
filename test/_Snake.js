
describe('Unit: Snake Test Suit', function() {
    it('When_we_create_the_canvas_with_520_x_520_dimensions',function(){
        var canvas = new createCanvas(520,520);
        assert.equal( canvas.width,520);
        assert.equal( canvas.height,520);
    });

    it('when_we_init_the_gird_and_we_get_some_values', function () {
        var gird = new gameGird(26,26,0);
        gird.init();
        assert.equal(gird.width,26);
        assert.equal(gird.height,26);
        assert.equal(gird.get(0,0),0);
        gird.set(0,0,40);
        assert.equal(gird.get(0,0),40);
    });
});