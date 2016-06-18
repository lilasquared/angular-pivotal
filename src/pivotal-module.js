import CoreServiceProvider from './core/pivotal-core-provider';
import PivotalProject from './core/pivotal-project';


angular
  .module('pivotalTracker', [])
  .provider('CoreService', CoreServiceProvider)
  .service('PivotalProject', PivotalProject);