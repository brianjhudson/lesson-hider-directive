angular.module("directivePractice").controller("lessonCtrl", function($scope, lessonService){
  $scope.lessons = ['Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server project', 'Node', 'Express', 'Mongo'];

  $scope.announceDay = function(lesson, day) {
      alert("The lesson on " + lesson + " is active on " + day + ".");
  }
  $scope.showEditScreen = false;
  $scope.newLesson = "";
  $scope.addLesson = function(newLesson){
    $scope.lessons.push(newLesson);
    $scope.newLesson = "";
    $scope.showEditScreen = false;
  }
})
