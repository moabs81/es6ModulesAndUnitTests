import { apiCall } from './jsmodules/ajaxCall';
import { tableContainer } from './jsmodules/buildUI';
import { appController } from './jsmodules/appFunctions';
require('./styles/webPartStyle.less');

const buildAjaxCall = function(cbReturn) {
    const buildAPIReq = {
        baseURI: 'https://my-json-server.typicode.com/moabs81/fakeJSONServer',
        //baseURI: 'http://localhost:3000',
        searchURI: '/offices',
        method: 'GET',
        success: function(result) {
            cbReturn(result.currentTarget.responseText);
        }
    };
    apiCall.call(buildAPIReq);
};

const WebPart = function() {
    const targetDiv = this;
    let tableObject;
    buildAjaxCall(function(result) {
        tableObject = JSON.parse(result);
        //$(targetDiv).append(tableContainer.call(tableObject));
        appController.call({ data: JSON.parse(result), targetDiv: targetDiv });
    });
};

export { WebPart };