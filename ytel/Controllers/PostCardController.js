/**
  * Ytel
  *
  * This file was automatically generated for ytel by APIMATIC v2.0 ( https://apimatic.io )
  */

;(function (angular) {
'use strict';

angular.module('Ytel')
    .factory('PostCardController', ['$q',
        'Configuration',
        'Servers',
        'HttpClient',
        'APIHelper',
        'BaseController',
        PostCardController
    ]);

    function PostCardController($q, Configuration, Servers, HttpClient, APIHelper, BaseController) {
        return {
            /**
             * Retrieve a postcard object by its PostcardId.
             *
             * @param {array}  input    Array with all options for search
             * @param {string} input['postcardid'] The unique identifier for a postcard object.
             * @param {string} input['responseType'] Response Type either json or xml
             *
             * @return {promise<String>}
             */
            viewPostcard: function (input) {
                // Assign default values
                input = input || {};

                //Create promise to return
                var _deffered = $q.defer();
                
                // validating required parameters
                var _missingArgs = false;
                if (input.postcardid === null || input.postcardid === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `postcardid` in the input object cannot be null.',
                        errorCode: -1
                    });
                    _missingArgs = true;
                }

                if (_missingArgs) {
                    return _deffered.promise;
                }

                //prepare query string for API call
                var _baseUri = Configuration.getBaseUri();
                var _queryBuilder = _baseUri + '/Postcard/viewpostcard.{ResponseType}';
                
                // Process template parameters
                _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                    'ResponseType': input.responseType
                });

                //validate and preprocess url
                var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                
                // prepare form data
                var _form = {
                    'postcardid': input.postcardid
                };

                // Remove null values
                APIHelper.cleanObject(_form);

                // prepare and invoke the API call request to fetch the response
                var _config = {
                    method: 'POST',
                    queryUrl: _queryUrl,
                    username: Configuration.basicAuthUserName,
                    password: Configuration.basicAuthPassword,
                    form: _form,
                };
                
                var _response = new HttpClient(_config);
                
                //process response
                _response.then(function success(_result) {
                    _deffered.resolve(_result);
                }, function error(_result){
                    // Error handling for custom HTTP status codes
                    _deffered.reject(APIHelper.appendContext({
                        errorMessage:'HTTP Response Not OK',
                        errorCode: _result.code,
                        errorResponse: _result.message
                    }, _result.getContext()));
                });
                
                return _deffered.promise;
            },
            /**
             * Create, print, and mail a postcard to an address. The postcard front must be supplied as a PDF, image,
             * or an HTML string. The back can be a PDF, image, HTML string, or it can be automatically generated
             * by supplying a custom message.
             *
             * @param {array}  input    Array with all options for search
             * @param {string} input['to'] The AddressId or an object structured when creating an address by
             * addresses/Create.
             * @param {string} input['from'] The AddressId or an object structured when creating an address by
             * addresses/Create.
             * @param {string} input['attachbyid'] Set an existing postcard by attaching its PostcardId.
             * @param {string} input['front'] A 4.25"x6.25" or 6.25"x11.25" image to use as the front of the
             * postcard.  This can be a URL, local file, or an HTML string.
             * Supported file types are PDF, PNG, and JPEG.
             * @param {string} input['back'] A 4.25"x6.25" or 6.25"x11.25" image to use as the back of the postcard,
             * supplied as a URL, local file, or HTML string.  This allows you to
             * customize your back design, but we will still insert the recipient
             * address for you.
             * @param {string} input['message'] The message for the back of the postcard with a maximum of 350
             * characters.
             * @param {string} input['setting'] Code for the dimensions of the media to be printed.
             * @param {string} input['responseType'] Response Type either json or xml
             * @param {string|null} input['description'] [Optional] A description for the postcard.
             * @param {string|null} input['htmldata'] [Optional] A string value that contains HTML markup.
             *
             * @return {promise<String>}
             */
            createPostcard: function (input) {
                // Assign default values
                input = input || {};

                //Create promise to return
                var _deffered = $q.defer();
                
                // validating required parameters
                var _missingArgs = false;
                if (input.to === null || input.to === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `to` in the input object cannot be null.',
                        errorCode: -1
                    });
                    _missingArgs = true;
                } else if (input.from === null || input.from === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `from` in the input object cannot be null.',
                        errorCode: -1
                    });
                    _missingArgs = true;
                } else if (input.attachbyid === null || input.attachbyid === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `attachbyid` in the input object cannot be null.',
                        errorCode: -1
                    });
                    _missingArgs = true;
                } else if (input.front === null || input.front === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `front` in the input object cannot be null.',
                        errorCode: -1
                    });
                    _missingArgs = true;
                } else if (input.back === null || input.back === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `back` in the input object cannot be null.',
                        errorCode: -1
                    });
                    _missingArgs = true;
                } else if (input.message === null || input.message === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `message` in the input object cannot be null.',
                        errorCode: -1
                    });
                    _missingArgs = true;
                } else if (input.setting === null || input.setting === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `setting` in the input object cannot be null.',
                        errorCode: -1
                    });
                    _missingArgs = true;
                }

                if (_missingArgs) {
                    return _deffered.promise;
                }

                //prepare query string for API call
                var _baseUri = Configuration.getBaseUri();
                var _queryBuilder = _baseUri + '/Postcard/createpostcard.{ResponseType}';
                
                // Process template parameters
                _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                    'ResponseType': input.responseType
                });

                //validate and preprocess url
                var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                
                // prepare form data
                var _form = {
                    'to': input.to,
                    'from': input.from,
                    'attachbyid': input.attachbyid,
                    'front': input.front,
                    'back': input.back,
                    'message': input.message,
                    'setting': input.setting,
                    'description': input.description,
                    'htmldata': input.htmldata
                };

                // Remove null values
                APIHelper.cleanObject(_form);

                // prepare and invoke the API call request to fetch the response
                var _config = {
                    method: 'POST',
                    queryUrl: _queryUrl,
                    username: Configuration.basicAuthUserName,
                    password: Configuration.basicAuthPassword,
                    form: _form,
                };
                
                var _response = new HttpClient(_config);
                
                //process response
                _response.then(function success(_result) {
                    _deffered.resolve(_result);
                }, function error(_result){
                    // Error handling for custom HTTP status codes
                    _deffered.reject(APIHelper.appendContext({
                        errorMessage:'HTTP Response Not OK',
                        errorCode: _result.code,
                        errorResponse: _result.message
                    }, _result.getContext()));
                });
                
                return _deffered.promise;
            },
            /**
             * Retrieve a list of postcard objects. The postcards objects are sorted by creation date, with the most
             * recently created postcards appearing first.
             *
             * @param {array}  input    Array with all options for search
             * @param {string} input['responseType'] Response Type either json or xml
             * @param {int|null} input['page'] [Optional] The page count to retrieve from the total results in the
             * collection. Page indexing starts at 1.
             * @param {int|null} input['pagesize'] [Optional] The count of objects to return per page.
             * @param {string|null} input['postcardid'] [Optional] The unique identifier for a postcard object.
             * @param {string|null} input['dateCreated'] [Optional] The date the postcard was created.
             *
             * @return {promise<String>}
             */
            listPostcards: function (input) {
                // Assign default values
                input = input || {};

                //Create promise to return
                var _deffered = $q.defer();
                

                //prepare query string for API call
                var _baseUri = Configuration.getBaseUri();
                var _queryBuilder = _baseUri + '/Postcard/listpostcard.{ResponseType}';
                
                // Process template parameters
                _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                    'ResponseType': input.responseType
                });

                //validate and preprocess url
                var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                
                // prepare form data
                var _form = {
                    'page': (input.page !== null) ? input.page : 1,
                    'pagesize': (input.pagesize !== null) ? input.pagesize : 10,
                    'postcardid': input.postcardid,
                    'dateCreated': input.dateCreated
                };

                // Remove null values
                APIHelper.cleanObject(_form);

                // prepare and invoke the API call request to fetch the response
                var _config = {
                    method: 'POST',
                    queryUrl: _queryUrl,
                    username: Configuration.basicAuthUserName,
                    password: Configuration.basicAuthPassword,
                    form: _form,
                };
                
                var _response = new HttpClient(_config);
                
                //process response
                _response.then(function success(_result) {
                    _deffered.resolve(_result);
                }, function error(_result){
                    // Error handling for custom HTTP status codes
                    _deffered.reject(APIHelper.appendContext({
                        errorMessage:'HTTP Response Not OK',
                        errorCode: _result.code,
                        errorResponse: _result.message
                    }, _result.getContext()));
                });
                
                return _deffered.promise;
            },
            /**
             * Remove a postcard object.
             *
             * @param {array}  input    Array with all options for search
             * @param {string} input['postcardid'] The unique identifier of a postcard object.
             * @param {string} input['responseType'] Response Type either json or xml
             *
             * @return {promise<String>}
             */
            deletePostcard: function (input) {
                // Assign default values
                input = input || {};

                //Create promise to return
                var _deffered = $q.defer();
                
                // validating required parameters
                var _missingArgs = false;
                if (input.postcardid === null || input.postcardid === undefined) {
                    _deffered.reject({
                        errorMessage: 'The property `postcardid` in the input object cannot be null.',
                        errorCode: -1
                    });
                    _missingArgs = true;
                }

                if (_missingArgs) {
                    return _deffered.promise;
                }

                //prepare query string for API call
                var _baseUri = Configuration.getBaseUri();
                var _queryBuilder = _baseUri + '/Postcard/deletepostcard.{ResponseType}';
                
                // Process template parameters
                _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                    'ResponseType': input.responseType
                });

                //validate and preprocess url
                var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                
                // prepare form data
                var _form = {
                    'postcardid': input.postcardid
                };

                // Remove null values
                APIHelper.cleanObject(_form);

                // prepare and invoke the API call request to fetch the response
                var _config = {
                    method: 'POST',
                    queryUrl: _queryUrl,
                    username: Configuration.basicAuthUserName,
                    password: Configuration.basicAuthPassword,
                    form: _form,
                };
                
                var _response = new HttpClient(_config);
                
                //process response
                _response.then(function success(_result) {
                    _deffered.resolve(_result);
                }, function error(_result){
                    // Error handling for custom HTTP status codes
                    _deffered.reject(APIHelper.appendContext({
                        errorMessage:'HTTP Response Not OK',
                        errorCode: _result.code,
                        errorResponse: _result.message
                    }, _result.getContext()));
                });
                
                return _deffered.promise;
            }
        };
    }

}(angular));
