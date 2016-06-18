const DEPENDENCIES = ['$http'];

class CoreService {

  constructor($http, apiToken) {
    this._baseUrl = 'https://www.pivotaltracker.com/services/v5';
    this._http = $http;
    this._apiToken = apiToken;
  }

  get(urlPart, params) {
    return this._http({
      method: 'GET',
      url: `${this._baseUrl}/${urlPart}`,
      headers: {'X-TrackerToken': this._apiToken},
      params: params
    }).then(response => response.data, response => console.error(response));
  }

}

CoreService.$inject = DEPENDENCIES;

export default CoreService