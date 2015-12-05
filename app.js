angular.module('myApp',['ngAnimate'])
.controller('MyCtrl', ['$scope', function($scope){

	$scope.text = 'text_hide';
	$scope.input = 'input_show';

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
		showMadLib : true
	};

	
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
		$scope.text = 'text_show';
		$scope.input = 'input_hide';
		$scope.data.showMadLib = true;
	};

	$scope.reset = function(){
		$scope.text = 'text_hide';
		$scope.input = 'input_show';
		$scope.data = '';
		$scope.choicesForm.$setPristine();
		$scope.choicesForm.$setUntouched();
	};

}]);