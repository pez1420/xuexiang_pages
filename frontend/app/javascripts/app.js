var xxModule = angular.module('xxApp', ['ngAnimate']);

xxModule.run(function ($rootScope) {
	$rootScope.userLogin = false;
});
xxModule.animation('.view-slide-in', function () {
  return {
    enter: function(element, done) {
      $(element).slideDown(500);
  	}
  };
});
