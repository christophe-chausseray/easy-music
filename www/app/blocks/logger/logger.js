/**
 * Logger
 * @namespace Loggers
 */
(function() {
    'use strict';

    angular
        .module('blocks.logger')
        .factory('logger', logger);

    /* @ngInject */
    logger.$inject = ['$log'];

    /**
     * @name logger
     * @desc Define all types of logger.
     * @memberOf Blocks
     */
    function logger($log) {
        var service = {
            error: error,
            info: info,
            success: success,
            warning: warning,
            log: $log.log
        };

        return service;

        ///////////////

        /**
         * @name error
         * @desc Define the error type.
         * @memberOf Blocks.logger
         */
        function error(message) {
            $log.error('Error : ' + message);
        }

        /**
         * @name info
         * @desc Define the error type.
         * @memberOf Blocks.logger
         */
        function info(message) {
            $log.info('Info : ' + message);
        }

        /**
         * @name success
         * @desc Define the error type.
         * @memberOf Blocks.logger
         */
        function success(message) {
            $log.info('Success : ' + message);
        }

        /**
         * @name warning
         * @desc Define the error type.
         * @memberOf Blocks.logger
         */
        function warning(message) {
            $log.warn('Warning : ' + message);
        }
    }
})();
