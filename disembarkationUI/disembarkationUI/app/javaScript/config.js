
(function (window, angular, undefined) {
	
	var app = angular.module('config',['ngRoute','ui.router'])
	.config(function($stateProvider) {
		// Set default state
		//$urlRouterProvider.otherwise('/admin');
		$stateProvider
		.state('/admin', {
			url: '/admin',
			templateUrl: '/homepage/home.html'
		})
		.state('/admin/goods', {
			url: '/admin/goods',
			templateUrl: '/assets/admin/views/goods.list.html',
			data: {
				pageTitle: 'Goods list'
			}
		});
	});
})(window, window.angular, void 0);