var challengeApp = angular.module( 'challengeApp', ['challengeRoutes', 'ui.bootstrap'] );

challengeApp.controller( 'EventCtrl', function( $scope ) {
	// this controller handles all click events on the page

	$scope.pageTwoEvents = {};

	$scope.pageTwoEvents.showNested = function( event ) {
		console.log( 'run click happened' );
	}

	$scope.pageTwoEvents.showTools = function( event ) {
		console.log( 'tools have been clicked' );
	}

	$scope.pageTwoEvents.btnPress = function( event ) {
		console.log( 'btn pressed!' );
	}

});


challengeApp.controller( 'BrandCtrl', function( $scope ) {
  $scope.oneAtATime = true;

  // controller to handle Brands and data
  // this section can be placed into a json file if the data grows
  // or if there were more brands
  $scope.brandsData = [
    {
      title: "Brand A"
      , steps: [
      	{
      		stepNum: '1'
		      , stepContent: [
		      	{
							stepHeader: 'Lorem Ipsum'
				  		, stepPercent: '100%'
				  	}
				  ]
		    }
		    , {
		    	stepNum: '2'
		    	, stepContent: [
		      	{
							stepHeader: 'Lorem Ipsum'
				  		, stepPercent: '100%'
				  	}
				  ]
		    }
		    , {
		    	stepNum: '3'
		    	, stepContent: [
		      	{
							stepHeader: 'Lorem Ipsum'
				  		, stepPercent: '99%'
				  	}
				  	, {
				  		stepHeader: 'Lorem Ipsum'
				  		, stepPercent: '99%'
				  	}
				  	, {
				  		stepHeader: 'Lorem Ipsum'
				  		, stepPercent: '99%'
				  	}
				  	, {
				  		stepHeader: 'Lorem Ipsum'
				  		, stepPercent: '99%'
				  	}
				  ]
		    }
		  ]
		}
    , {
      title: "Brand B"
      , steps: [
      	{
      		stepNum: '1'
		      , stepContent: [
		      	{
							stepHeader: 'Lorem Ipsum'
				  		, stepPercent: '99%'
				  	}
				  	, {
				  		stepHeader: 'Lorem Ipsum'
				  		, stepPercent: '99%'
				  	}
				  ]
		    }
		    , {
		    	stepNum: '2'
		    	, stepContent: [
		      	{
							stepHeader: 'Lorem Ipsum'
				  		, stepPercent: '99%'
				  	}
				  	, {
				  		stepHeader: 'Lorem Ipsum'
				  		, stepPercent: '99%'
				  	}
				  ]
		    }
		    , {
		    	stepNum: '3'
		    	, stepContent: [
		      	{
							stepHeader: 'Lorem Ipsum'
				  		, stepPercent: '99%'
				  	}
				  	, {
							stepHeader: 'Lorem Ipsum'
				  		, stepPercent: '99%'
				  	}
				  ]
		    }
		  ]
    }
    , {
    	title: "Brand C"
      , steps: [
      	{
      		stepNum: '1'
		      , stepContent: [
		      	{
							stepHeader: 'Lorem Ipsum'
				  		, stepPercent: '99%'
				  	}
				  	, {
							stepHeader: 'Lorem Ipsum'
				  		, stepPercent: '99%'
				  	}
				  ]
		    }
		    , {
		    	stepNum: '2'
		    	, stepContent: [
		      	{
							stepHeader: 'Lorem Ipsum'
				  		, stepPercent: '99%'
				  	}
				  	, {
				  		stepHeader: 'Lorem Ipsum'
				  		, stepPercent: '99%'
				  	}
				  ]
		    }
		    , {
		    	stepNum: '3'
		    	, stepContent: [
		      	{
							stepHeader: 'Lorem Ipsum'
				  		, stepPercent: '0%'
				  	}
				  	, {
				  		stepHeader: 'Lorem Ipsum'
				  		, stepPercent: '0%'
				  	}
				  ]
		    }
		  ]
		}
  ];

  // scope to handle percentage bg colors
  $scope.percentColors = [
  	{
  		'100%': '#6a8012'
  		,'99%': '#a2ad00'
  		, '0%': '#a5ada8'
  	}
  ];

});














