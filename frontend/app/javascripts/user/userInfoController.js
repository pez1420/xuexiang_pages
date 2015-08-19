'use strict';
function userInfoController($scope, userInfoService) {
	var vm = this;
	vm.model = userInfoService.model;
	vm.getArray = function (count) {
		return new Array(count);
	};
	// refresh the date when year/month changed
	vm.birthChanged = function () {
		var changedBirth = vm.model.editingUser.birth;
		changedBirth.day = '1';
		changedBirth.dayInMonth = new Array(new Date(changedBirth.year, changedBirth.month, 0).getDate());
	};
}

xxModule.controller('userInfoController', ['$scope', 'userInfoService', userInfoController]);