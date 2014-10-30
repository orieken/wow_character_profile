describe("Unit: battlePetsController", function() {
    var scope;
    var ctrl;
    var $httpBackend;

    beforeEach(module('App'));
    beforeEach(module('battlePetsController'));

    beforeEach(inject(function ($rootScope, $controller, _$httpBackend_) {
        $httpBackend = _$httpBackend_;
        scope = $rootScope.$new();
        ctrl = $controller;

        $httpBackend.whenGET('/battle_pets').respond( scope.battlePets = {
            name: 'foo',
            thing: 'bar',
            pets: {
                collected:
                    [
                        { pet: 'bar' },
                        { pet: 'baz' }
                    ]
            }
        });
        ctrl('battlePetsController', {$scope: scope});
        $httpBackend.flush();
    }));

    afterEach(function(){
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('battlePets is defined', function(){
        expect(scope.battlePets).toBeDefined();
    });
    it('battlePets returns an Object', function(){
        expect(scope.battlePets).toEqual( { name : 'foo', thing : 'bar', pets : { collected : [ { pet : 'bar' }, { pet : 'baz' } ] } });
    });
});
