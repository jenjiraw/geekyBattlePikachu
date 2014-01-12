'use strict';

angular.module('geekyBattlePikachuApp')
  .controller('BattleCtrl', function ($scope) {
    $scope.teams = [
                    {name:'Kitty' , logo:'logo_kitty.jpg'},
                    {name:'Vanz' , logo:'logo_vanz.jpg'},
                    {name:'Pikachu',  logo: 'logo_pikachu.jpg'},
                    ];

    $scope.team1;
    $scope.team2;
    $scope.teamBattleMessage;
    $scope.msgClass;

    $scope.teamInputIsEqual = function(){

      if( $scope.checkEmptySelection() )
      {
        if( $scope.team1 != $scope.team2)
        {
          $scope.teamBattleMessage="Let's Compete!"; 
          $scope.msgClass = "";
        }
        else{
          $scope.teamBattleMessage="Team name shouldn't be the same!";
          $scope.msgClass = "text-danger"; 
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
        $scope.teamBattleMessage="Please select another team.";
        return false;
      }

    };

    $scope.getTeamPicture = function(teamName){
      var folder = "../images/"
      if (!teamName){
        return folder + "default.png";
      }
      var teamPic = $scope.getTeamObject(teamName).logo;
      
      return folder + teamPic;
    };

    $scope.getTeamObject = function(teamName){
      var i;
      for(i =0 ; i < $scope.teams.length; i++)
      {
        if(teamName == $scope.teams[i].name)
        {
          return $scope.teams[i];
        }
      }
    };

  });
