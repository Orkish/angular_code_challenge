// this handles all of the angular routes

var challengeRoutes = angular.module( 'challengeRoutes', ['ui.router'] );

challengeRoutes.config( function( $stateProvider, $urlRouterProvider ) {

	$urlRouterProvider.otherwise( '/page2' );

	$stateProvider
		.state( 'page1', {
			url: '/page1'
			, templateUrl: 'views/partial-page1.html'
		})

		.state( 'page2', {
			url: '/page2'
			, templateUrl: 'views/partial-page2.html'
		})

		.state( 'page2.tools', {
			url: '/tools'
			, templateUrl: 'views/partial-tools.html'
		})

		.state( 'page3', {
			url: '/page3'
			, templateUrl: 'views/partial-page3.html'
		});

});