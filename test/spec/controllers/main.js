'use strict';

describe('Controller: BattleCtrl', function () {

  // load the controller's module
  beforeEach(module('geekyBattlePikachuApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('BattleCtrl', {
      $scope: scope
    });
  }));


  it('should have teams names for selection', function () {
    expect(scope.teams.length).toEqual(4);
    expect(scope.teams[0].name).toEqual('-');
    expect(scope.teams[1].name).toEqual('Kitty');
    expect(scope.teams[2].name).toEqual('Vanz');
    expect(scope.teams[3].name).toEqual('Pikachu');
  });

  it('should not have the same dropdown item in both dropdown input',function(){
    expect(scope.teamInputIsEqual() ).toEqual(true);
  });
});
