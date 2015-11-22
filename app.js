angular.module('myApp',[])
.controller('MyCtrl', ['$scope', function($scope){

	$scope.data = {
		personName : '',
		dirtyTask : '',
		obnoxiousCelebrity : '',
		jobTitle : '',
		celebrity : '',
		hugeNumber : '',
		tediousTask : '',
		uselessSkill : '',
		adjective : '',
		nominativePronoun : '',
		possessivePronoun : '',
		objectivePronoun : '',
		gender : '',
		showMadLib : false
	};

	$scope.origChoices = angular.copy($scope.data);

	$scope.$watch('data.gender', function(gender) {
		if(gender == 'male')
		{
			$scope.data.nominativePronoun = 'he';
			$scope.data.possessivePronoun = 'his';
			$scope.data.objectivePronoun = 'him';
		}
		else
		{
			$scope.data.nominativePronoun = 'she';
			$scope.data.possessivePronoun = 'her';
			$scope.data.objectivePronoun = 'her';
		}
	});

	$scope.submit = function(){
		$scope.data.showMadLib = true;
	};

	$scope.reset = function(){
		$scope.data = angular.copy($scope.origChoices);
		$scope.choicesForm.$setPristine();
		$scope.choicesForm.$setUntouched();
	};

}]);