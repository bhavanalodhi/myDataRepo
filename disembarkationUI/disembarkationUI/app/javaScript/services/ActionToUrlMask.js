/**
 * Created by ramdas on 10/8/16.
 */
;
(function(window, angular, undefined) {

    // host, port and protocol should be the same (SOP)
    var base = '';
    
    angular.module('xiLodging').constant('actionToUrlMask', {
        'LostItem.addData': base + '/lostitemlog'
    });

})(window, angular, void 0);
