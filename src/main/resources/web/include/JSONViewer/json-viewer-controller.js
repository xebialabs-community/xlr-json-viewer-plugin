(function(module) {
    'use strict';

    function JsonViewerController(Backend, $routeParams) {
        var vm = this;

        vm.refresh = loadRelease;
        vm.jsonEditorOpts = {
            "mode": "code",
            "modes": [
                "tree",
                "form",
                "code",
                "text"
            ],
            "history": false
        };

        loadRelease();

        ///

        function loadRelease() {
            Backend.get('api/v1/releases/Applications/' + $routeParams.releaseId).then(function(response) {
                vm.release = response.data;
            });
        }
    }

    JsonViewerController.$inject = ['Backend', '$routeParams'];

    module.controller('json.jsonViewerController', JsonViewerController);

})(angular.module('xlrelease'));