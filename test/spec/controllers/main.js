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
    expect(scope.teams.length).toEqual(3);
    expect(scope.teams[0].name).toEqual('Kitty');
    expect(scope.teams[1].name).toEqual('Vanz');
    expect(scope.teams[2].name).toEqual('Pikachu');
  });

  it('should not have the same dropdown item in both dropdown input',function(){
    scope.team1 = "s";
    scope.team2 = "s s";
    
    expect(scope.teamInputIsEqual()).toEqual("Let's Compete!");
  });

  it('should not have the empty selection in the list' , function(){
    scope.team1 = "s";
    scope.team2 = "";
    expect( scope.checkEmptySelection()).toEqual(false);
  });

});
