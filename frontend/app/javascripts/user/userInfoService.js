'use strict';
function userInfoService() {
	var that = {};
	that.model = {
		editingUser: {
			name: 'Jack',
			school: '哈佛大学',
			major: '经济学',
			gender: 0,
			birth: {
				year: '1980',
				month: '1',
				day: '1',
				dayInMonth: new Array(31)
			}
		}
	};

	return that;
}

xxModule.factory('userInfoService', userInfoService);