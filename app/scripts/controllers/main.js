'use strict';

angular.module('geekyBattlePikachuApp')
  .controller('BattleCtrl', function ($scope) {
    $scope.teams = [{name:'-'},
                    {name:'Kitty'},
                    {name:'Vanz'},
                    {name:'Pikachu'},
                    ];

    $scope.teamInputIsEqual = function(){
      var dropdownOne = 'ab';
      var dropdownTwo = 'a  ';
      if(dropdownOne === dropdownTwo)
      {
        return true;
      }
      return true;
    };

  });
