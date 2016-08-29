(function () {
	'use strict';

	angular.module('awlert')
	.directive('awLert', AwesomeAlert);

	AwesomeAlert.$inject = ['$timeout'];

	function AwesomeAlert($timeout){
		return {
			template: '<div class="awlert">'+
									'<div class="content">'+
									'{{message}}'+
									'</div>'+
								'</div>',
			replace: 'true',
			restrict: 'E',
			scope: true, 
			link: function(scope, el){
				$timeout(function(){
					el.addClass('enter');

					$timeout(function(){
						scope.$apply(function(){
								el.addClass('exit');
								el.removeClass('enter');
						});
					}, scope.duration || 3000);


				}, 30, true);
			}
		}
	}

})();