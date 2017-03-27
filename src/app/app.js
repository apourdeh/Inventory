import 'angular-material/angular-material.css';
import 'material-design-icons/iconfont/material-icons.css';
import './app.css';

import angular from 'angular';
import angularAnimate from 'angular-animate';
import angularAria from 'angular-aria';
import angularMaterial from 'angular-material';
import angularUiRouter from 'angular-ui-router';
import angularMessages from 'angular-messages';
import mdDataTable from 'angular-material-data-table';

import storeModule from './store/store.module';
import gameModule from './game/game.module';
import customerModule from './customer/customer.module';
import serviceModule from './service/service.module';

import DialogController from './dialog.controller';

import app from './directive/app.directive';


const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [angularAnimate, angularAria, angularMaterial, angularUiRouter, angularMessages,
    mdDataTable, storeModule, gameModule, customerModule, serviceModule
  ])
  .directive('app', app)
  .controller('DialogController', DialogController)
  .constant('$apiUrl', API_URL);

export default MODULE_NAME;
