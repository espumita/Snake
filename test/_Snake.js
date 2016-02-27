
describe('Unit: Snake Test Suit', function() {
    it('When_we_create_and_initialize_the_canvas',function(){
        var canvasTest = new canvas().createAndInitializeCanvas();
        assert.equal(canvasTest.width,520);
        assert.equal(canvasTest.height,520);
    });
});