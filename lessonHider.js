angular.module("directivePractice").directive("lessonHider", function(){
  return {
    restrict: 'A'
    , replace: true
    , scope: {
        lesson: "="
        , lessons: "="
        , dayAlert: "&"

    }
    , templateUrl: 'lessonHider.html'
    , controller: function($scope, lessonService){
        $scope.getSchedule = lessonService.getSchedule();
    }
    , link: function(scope, element, attributes) {
      scope.getSchedule.then(function(result){
        scope.schedule = result.data;
        findLessons();
      })

      function findLessons() {
        var found = false;
        for (var i = 0; i < scope.schedule.length; i++) {
          if (scope.lesson === scope.schedule[i].lesson) {
            scope.lessonDay = scope.schedule[i].weekday
            element.css("color", "blue");
            found = true;
          }
          if (!found) {
            element.css("font-style", "italic");
            scope.lessonDay= "Unscheduled";
          }
        }
      }
      scope.removeLesson = function(lesson) {
        scope.lessons.splice(scope.lessons.indexOf(lesson), 1);
        console.log(scope.lessons)
      }
    }
  }
});
