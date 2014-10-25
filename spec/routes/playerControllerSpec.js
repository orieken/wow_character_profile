describe("Unit: playerController", function() {
    var scope;
    var ctrl;
    var $httpBackend;

    beforeEach(module('App'));

    beforeEach(inject(function ($rootScope, $controller, _$httpBackend_) {
        $httpBackend = _$httpBackend_;
        scope = $rootScope.$new();
        ctrl = $controller;

        $httpBackend.whenGET('/player').respond( scope.player = {
            name: 'foo', thing: 'bar'
        });
        ctrl('playerController', {$scope: scope});
        $httpBackend.flush();
    }));

    afterEach(function(){
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('/player is defined', function(){
        expect(scope.player).toBeDefined();
    });
    it('/player returns an Object', function(){
        expect(scope.player).toEqual({name: 'foo', thing: 'bar'});
    });
});
