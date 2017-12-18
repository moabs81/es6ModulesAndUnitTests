'use strict';

import { buildTableComponent } from './components/workBenchContainer/jsModules/workBenchLayout'; //import the wrapper page. parallax baby #ForNoGoodReason
import { WebPart } from './components/application/app'; //import app entry point

buildTableComponent(function(result) { //callback function returns the DOM target for your app    
    const targetDiv = '#' + result;
    WebPart(targetDiv);
});