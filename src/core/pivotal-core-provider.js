import CoreService from './pivotal-core';

class CoreServiceProvider {
  constructor() {
    this.apiToken = '';
    this.$get = ['$http', $http => new CoreService($http, this.apiToken)];
  }

  setApiToken(apiToken) {
    this.apiToken = apiToken;
  }
}

export default CoreServiceProvider