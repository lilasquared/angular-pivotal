angular
  .module('pivotal-example', ['pivotalTracker'])
  .config(function(CoreServiceProvider) {
    CoreServiceProvider.setApiToken('aa041709000781fd8cf69f835810ac3e');
  })
  .controller('PivotalExample', function(PivotalProject) {
    const vm = this;
    vm.getProjects = function() {
      PivotalProject.all().then(function(response) {
        vm.projects = JSON.stringify(response);
      });
    }
  });