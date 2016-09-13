angular.module("directivePractice").service("lessonService", function($http){
  this.test = "Service Working"
  this.getSchedule = function(){
    return $http.get("schedule.json");
  }
})
