
describe('Unit: Snake Test Suit', function() {
    it('When_we_create_and_initialize_the_canvas_and_check_dimensions',function(){
        var canvas = new canvas().createAndInitializeCanvas();
        assert.equal(canvas.width,520);
        assert.equal(canvas.height,520);
    });
});