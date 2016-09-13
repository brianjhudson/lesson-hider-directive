angular.module("directivePractice").controller("lessonCtrl", function($scope, lessonService){
  $scope.lessons = ['Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server project', 'Node', 'Express', 'Mongo'];

  $scope.announceDay = function(lesson, day) {
      alert("The lesson on " + lesson + " is active on " + day + ".");
  }
  $scope.removeLesson = function(lesson) {
    $
  }
})
