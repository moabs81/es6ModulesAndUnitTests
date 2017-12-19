'use strict';

import {
    apiCall
} from './jsmodules/ajaxCall';
import {
    tableContainer
} from './jsmodules/buildUI';
require('./styles/webPartStyle.less');

const buildAjaxCall = function (cbReturn) {
    const buildAPIReq = {
        baseURI: 'http://localhost:3000',
        searchURI: '/offices',
        method: 'GET',
        success: function (result) {
            cbReturn(result.currentTarget.responseText);
        }
    };
    apiCall.call(buildAPIReq);
};

const WebPart = function () {
    var targetDiv = this;
    let tableObject;
    buildAjaxCall(function (result) {
        tableObject = JSON.parse(result);
        $(targetDiv).append(tableContainer.call(tableObject));
    });
};

export {
    WebPart
};