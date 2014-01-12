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
    scope.team1 = "Pikachu";
    scope.team2 = "Vanz";
    
    expect(scope.teamInputIsEqual()).toEqual("Let's Compete!");
  });

  it('should not have the empty selection in the list' , function(){
    scope.team1 = "Vanz";
    scope.team2 = "";
    expect(scope.checkEmptySelection()).toEqual(false);
  });

  it('should expect the warning msg to be red, if same team are selected', function(){
    scope.team1 = "Vanz";
    scope.team2 = "Vanz";
    scope.teamInputIsEqual();
    expect(scope.msgClass).toEqual("text-danger");
  });

  it('should expect the warning msg to be normal as default', function(){
    scope.team1 = "Vanz";
    scope.team2 = "Vanz";
    scope.teamInputIsEqual();
    expect(scope.msgClass).toEqual("text-danger");

    scope.team1 = "Vanz";
    scope.team2 = "Pikachu";
    scope.teamInputIsEqual();
    expect(scope.msgClass).toEqual("");

  });

  it('should  get the team object after input the name' , function(){
    var teamName = "Vanz";
    var vanzobj = {name:'Vanz' , logo:'logo_vanz.jpg'};

    expect(scope.getTeamObject(teamName).name).toEqual(vanzobj.name);
    expect(scope.getTeamObject(teamName).logo).toEqual(vanzobj.logo);

  });

  it('should display the image when the team is selected on the dropdown',function(){
    var teamName = "Vanz";
    var vanzobj = {name:'Vanz' , logo:'logo_vanz.jpg'};

    expect(scope.getTeamPicture(teamName).logo).toEqual(vanzobj.logo);
  });

});
