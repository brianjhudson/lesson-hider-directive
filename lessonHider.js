angular.module("directivePractice").directive("lessonHider", function(){
  return {
    restrict: 'E'
    , replace: true
    , scope: {
        lesson: "="
    }
    , templateUrl: 'lessonHider.html'
    , link: function(scope, element, attributes) {
        scope.getSchedule.then(function(result){
          scope.schedule = result.data;
        })
    }
    , controller: function($scope, lessonService){
      $scope.getSchedule = lessonService.getSchedule();
    }
  }
});
