xxModule.directive('headBar', ['$rootScope', function ($rootScope) {
	return {
		templateUrl: 'partials/components/head-bar.html',
		link: function (scope, element, attrs) {
			scope.model = {
				register: {
					email: '',
					password: '',
					passwordConfirm: ''
				},
				login: {
					email: '',
					password: ''
				}
			};
			scope.register = function () {

			};
			scope.login = function () {
				$rootScope.userLogin = true;
				$('#loginModal').modal('hide');
			};
		}
	}
}]);