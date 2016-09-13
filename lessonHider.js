angular.module("directivePractice").directive("lessonHider", function(){
  return {
    restrict: 'E'
    , replace: true
    , scope: {
        lesson: "="
    }
    , templateUrl: 'lessonHider.html'
    , controller: function($scope, lessonService){
      $scope.getSchedule = lessonService.getSchedule();
    }
    , link: function(scope, element, attributes) {
      scope.getSchedule.then(function(result){
        scope.schedule = result.data;
        console.log(scope.schedule);
        for (var i = 0; i < scope.schedule.length; i++) {
          if (scope.lesson === scope.schedule[i].lesson) {
            element.css("text-decoration", "line-through");
            return;
          }
        }
      })
    }
  }
});
