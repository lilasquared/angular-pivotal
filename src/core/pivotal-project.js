const DEPENDENCIES = ['CoreService'];

class PivotalProject {

  constructor(coreService) {
    this.coreService = coreService
  }

  all() {
    return this.coreService.get('projects');
  }

}

PivotalProject.$inject = DEPENDENCIES;

export default PivotalProject