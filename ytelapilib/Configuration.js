/**
 * YtelAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io )
 */

;(function (angular) {
'use strict';

angular.module('YtelAPILib')
    .factory('Configuration', [Configuration]);

    function Configuration() {
        return {
            //The base Uri for API calls
            BASEURI : 'https://api.message360.com/api/v3',

            //The username to use with basic authentication
            //TODO: Replace the basicAuthUserName with an appropriate value
            basicAuthUserName : 'TODO: Replace',

            //The password to use with basic authentication
            //TODO: Replace the basicAuthPassword with an appropriate value
            basicAuthPassword : 'TODO: Replace'

        };
    }

}(angular));
