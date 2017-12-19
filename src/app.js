'use strict';
import {
    buildTableComponent
} from './components/workBenchContainer/jsModules/workBenchLayout';

import {
    WebPart
} from './components/application/app';

buildTableComponent(function (result) {
    WebPart.call('#' + result);
});