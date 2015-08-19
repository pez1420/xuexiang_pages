'use strict';
function noteController($scope, noteService) {
	var vm = this;
	vm.model = noteService.model;
	vm.onClassificationHover = function (subject) {
		subject.onHover = true;
	};
	vm.onClassificationLeave = function (subject) {
		subject.onHover = false;
	};
	vm.resetClassification = function () {
		vm.model.classifications.forEach(function (item, index) {
			item.onHover = false;
		});
	};
	vm.toggleSubjectMenu = function () {
		vm.model.subjectMenuCollapsed = !vm.model.subjectMenuCollapsed;
	};
	vm.onSearch = function ($event) {
		var keycode = window.event?$event.keyCode:$event.which;
        if (keycode === 13) {
            vm.search(vm.model.searchOptions.searchBy, vm.model.searchOptions.searchKey);
        }
	};
	vm.search = function (searchBy, searchKey) {
		if (searchKey.trim() === '') {
			searchKey = '';
			return;
		} else {
			$('.search-input input').blur();
			vm.model.searchOptions.searchComplete = true;
			console.log('Search by ' + searchBy + ' with ' + searchKey);
		}
	};
}

xxModule.controller('noteController', ['$scope', 'noteService', noteController]);