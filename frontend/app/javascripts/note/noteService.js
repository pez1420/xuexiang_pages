'use strict';
function noteService() {
	var that = {};
	that.model = {
		searchOptions: {
			searchKey: '',
			searchBy: 0,
			searchComplete: false,
			searchByList: [{
				id: 0,
				name: '标题'
			}, {
				id: 1,
				name: '用户'
			}, {
				id: 2,
				name: '学校'
			}]
		},
		subjectMenuCollapsed: true,
		classifications: [{
			name: '工程学',
			onHover: false,
			subClasses: [{
				id: '',
				name: '课程一'
			}, {
				id: '',
				name: '课程二'
			}, {
				id: '',
				name: '课程三'
			}, {
				id: '',
				name: '课程四'
			}]
		}, {
			name: '商科',
			onHover: false,
			subClasses: [{
				id: '',
				name: '课程一'
			}, {
				id: '',
				name: '课程二'
			}, {
				id: '',
				name: '课程三'
			}, {
				id: '',
				name: '课程四'
			}]		
		}, {
			name: '法学',
			onHover: false,
			subClasses: [{
				id: '',
				name: '课程一'
			}, {
				id: '',
				name: '课程二'
			}, {
				id: '',
				name: '课程三'
			}]		
		}, {
			name: '计算机',
			onHover: false,
			subClasses: [{
				id: '',
				name: '课程一'
			}, {
				id: '',
				name: '课程二'
			}, {
				id: '',
				name: '课程三'
			}, {
				id: '',
				name: '课程四'
			}, {
				id: '',
				name: '课程五'
			}, {
				id: '',
				name: '课程六'
			}]		
		}],
		allSubjects: [{
			name: '工程学',
			allItems: ['item', 'item', 'item', 'item']
		}, {
			name: '商科',
			allItems: ['item', 'item', 'item', 'item', 'item', 'item', 'item', 'item', 'item', 'item', 'item', 'item', 'item', 'item', 'item', 'item', 'item']
		}, {
			name: '法学',
			allItems: ['item', 'item', 'item', 'item', 'item', 'item', 'item']
		}, {
			name: '计算机',
			allItems: ['item', 'item', 'item', 'item', 'item', 'item', 'item']
		}],
		hotNotes: [{
			title: 'GDP的组成部分',
			abstract: '消费（consumption）是家庭除购买新住房之外用于物品（goods）和劳务（services）的支出。“物品”包括家庭购买的汽车与家电等耐用品（durable goods），以及食品和衣服等非耐用品（nondurable goods）。',
			tags: ['GDP', '经济', '资本'],
			author: {
				name: 'Jack',
				school: '哥伦比亚大学',
				major: '经济学',
				followed: false
			},
			isFavorite: false
		}, {
			title: '国际关系理论 （international relation theories）',
			abstract: '消费（consumption）是家庭除购买新住房之外用于物品（goods）和劳务（services）的支出。“物品”包括家庭购买的汽车与家电等耐用品（durable goods），以及食品和衣服等非耐用品（nondurable goods）。',
			tags: ['资本', '权利'],
			author: {
				name: 'Aaron',
				school: '新加坡南洋理工大学',
				major: '国际关系学',
				followed: false
			},
			isFavorite: false
		}, {
			title: '国际货币基金组织（International Monetary Fund）',
			abstract: '消费（consumption）是家庭除购买新住房之外用于物品（goods）和劳务（services）的支出。“物品”包括家庭购买的汽车与家电等耐用品（durable goods），以及食品和衣服等非耐用品（nondurable goods）。',
			tags: ['货币'],
			author: {
				name: 'Mary',
				school: '华威大学',
				major: '国际政治经济学',
				followed: false
			},
			isFavorite: false
		}],
		hotMentors: [{
			name: 'Jack',
			school: '哥伦比亚大学',
			followed: false
		}, {
			name: 'Mary',
			school: '哈佛大学',
			followed: false
		}, {
			name: 'Jerry',
			school: '浙江大学',
			followed: false
		}, {
			name: 'Brian',
			school: '澳大利亚国立大学',
			followed: false
		}, {
			name: 'Nick',
			school: '清华大学',
			followed: false
		}, {
			name: 'Mike',
			school: '耶鲁大学',
			followed: false
		}],
		relatedNotes: [{
			title: 'GDP的组成部分',
			favoriteCount: 245,
			publishTime: 1,
			author: {
				name: 'Larry'
			}
		}, {
			title: '现实主义的主要观点',
			favoriteCount: 335,
			publishTime: 1,
			author: {
				name: 'Micky'
			}
		}, {
			title: '国际经济法和国际经济秩序',
			favoriteCount: 455,
			publishTime: 1,
			author: {
				name: 'Veronica'
			}
		}, {
			title: '国际金融法概述',
			favoriteCount: 1566,
			publishTime: 1,
			author: {
				name: 'Frida'
			}
		}, {
			title: '国际货币基金组织',
			favoriteCount: 234,
			publishTime: 1,
			author: {
				name: 'Candy'
			}
		}, {
			title: '国际货币基金组织',
			favoriteCount: 245,
			publishTime: 1,
			author: {
				name: 'Candy'
			}
		}]
	};
	return that;
}

xxModule.factory('noteService', noteService);