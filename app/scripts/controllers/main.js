'use strict';

angular.module('geekyBattlePikachuApp')
  .controller('BattleCtrl', function ($scope) {
    $scope.teams = [
                    {name:'Kitty'},
                    {name:'Vanz'},
                    {name:'Pikachu'},
                    ];

    $scope.team1;
    $scope.team2;
    $scope.teamBattleMessage;

    $scope.teamInputIsEqual = function(){
      // alert($scope.team1 + " " + $scope.team2);

      if( $scope.checkEmptySelection() )
      {
        if( $scope.team1 != $scope.team2)
        {
          $scope.teamBattleMessage="Let's Compete!"; 
        }
        else{
          $scope.teamBattleMessage="Team Name Shouldn't be the same!";
        };
      }

      return $scope.teamBattleMessage;
    };

    $scope.checkEmptySelection = function(){
      
      if($scope.team1 && $scope.team2)
      {
        return true;
      }
      else
      {
        $scope.teamBattleMessage="Please select another team";
        return false;
      }

    };

  });
