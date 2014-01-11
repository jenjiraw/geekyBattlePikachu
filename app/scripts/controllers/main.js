'use strict';

angular.module('geekyBattlePikachuApp')
  .controller('BattleCtrl', function ($scope) {
    $scope.teams = [{name:'-'},
                    {name:'Kitty'},
                    {name:'Vanz'},
                    {name:'Pikachu'},
                    ];

    $scope.team1 ="-";
    $scope.team2="-";

    $scope.teamInputIsEqual = function(){
      console.log("test");
      var dropdownOne = 'ab';
      var dropdownTwo = 'a  ';
      alert("I'm here");
      if(dropdownOne === dropdownTwo)
      {
        return true;
      }
      return true;
    };

  });
