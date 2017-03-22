import 'angular-material/angular-material.css';
import 'material-design-icons/iconfont/material-icons.css';

import angular from 'angular';
import angularAnimate from 'angular-animate';
import angularAria from 'angular-aria';
import angularMaterial from 'angular-material';
import angularUiRouter from 'angular-ui-router';
import angularMessages from 'angular-messages';

import storeModule from './store/store.module';
import gameModule from './game/game.module';

import app from './directive/app.directive';


const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [angularAnimate, angularAria, angularMaterial, angularUiRouter, angularMessages,
    storeModule, gameModule
  ])
  .directive('app', app);

export default MODULE_NAME;
