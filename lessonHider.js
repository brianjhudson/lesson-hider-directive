angular.module("directivePractice").directive("lessonHider", function(){
  return {
    restrict: 'E'
    , replace: true
    , scope: {
        lesson: "="
    }
    , templateUrl: 'lessonHider.html'
    , link: function(scope, element, attributes) {
      
    }
    // , controller:
  }
})
