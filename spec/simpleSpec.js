describe("Simple Examples of unit tests", function() {

    beforeEach(function() {
        foo = {
            setBar: function(value) {
                bar = value;
            }
        };

        spyOn(foo, 'setBar');
        foo.setBar(10);
    });
    afterEach(function () {

    });


    it("expects to be true", function() {
        expect(true).toBe(true);
    });

    it("expects to have been called", function(){
        expect(foo.setBar).toHaveBeenCalled();
    });
});
