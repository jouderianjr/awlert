(function (){
	'use strict';

	angular.module('awlert')
	.factory('AwlertProvider', AwlertProvider);

	AwlertProvider.$inject = ['$compile', '$document', '$rootScope'];
	
	function AwlertProvider($compile, $document, $rootScope){
	
		function _show(message, duration, type){
			var scope = $rootScope.$new(true);
			scope.message = message;

			var element = $compile('<aw-lert></aw-lert>')(scope);
			$document[0].body.appendChild(element[0]);				
		}
		return {
			show: _show
		};
	}

})();