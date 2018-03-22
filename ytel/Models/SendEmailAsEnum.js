/**
  * Ytel
  *
  * This file was automatically generated for ytel by APIMATIC v2.0 ( https://apimatic.io )
  */

;(function (angular) {
'use strict';

angular.module('Ytel')
    .factory('SendEmailAsEnum', [SendEmailAsEnumModel]);

    function SendEmailAsEnumModel() {
        return {
            //Email send as text format
            TEXT: 'text',
    
            //Email send as HTML format
            HTML: 'html'
        };
    }

}(angular));