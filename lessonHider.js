angular.module("directivePractice").directive("lessonHider", function(){
  return {
    restrict: 'A'
    , replace: true
    , scope: {
        lesson: "="
        , dayAlert: "&"
    }
    , templateUrl: 'lessonHider.html'
    , controller: function($scope, lessonService){
      $scope.getSchedule = lessonService.getSchedule();
    }
    , link: function(scope, element, attributes) {
      scope.getSchedule.then(function(result){
        scope.schedule = result.data;
        for (var i = 0; i < scope.schedule.length; i++) {
          if (scope.lesson === scope.schedule[i].lesson) {
            scope.lessonDay = scope.schedule[i].weekday
            element.css("text-decoration", "line-through");
            return;
          }
        }
      })
    }
  }
});
