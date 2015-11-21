angular.module('myApp',[])
.controller('MyCtrl', ['$scope', function($scope){

	$scope.personName = 'Alex';
	$scope.dirtyTask = 'cleaning toilets';
	$scope.obnoxiousCelebrity = 'Donald Trump';
	$scope.jobTitle = 'musician';
	$scope.celebrity = 'Thom Yorke';
	$scope.hugeNumber = '10003000';
	$scope.tediousTask = 'washing dishes';
	$scope.uselessSkill = 'whistle';
	$scope.adjective = 'smelly';
	$scope.nominativePronoun = 'he';
	$scope.possessivePronoun = 'his';
	$scope.objectivePronoun = 'him';
	$scope.gender = 'male';

	$scope.$watch('gender', function(gender) {
		if(gender == 'male')
		{
			$scope.nominativePronoun = 'he';
			$scope.possessivePronoun = 'his';
			$scope.objectivePronoun = 'him';
		}
		else
		{
			$scope.nominativePronoun = 'she';
			$scope.possessivePronoun = 'her';
			$scope.objectivePronoun = 'her';
		}
	});

}]);