/*
 * Polyfill from Mozilla Developer Network
 * Found at https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent
 */

(function () {
    'use strict';

    if (typeof window.CustomEvent === 'function' && typeof window.Event === 'function') {
        return false;
    }

    function CustomEvent(event, params) {
        var evt;

        params = params || { bubbles: false, cancelable: false, detail: undefined };
        evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
        return evt;
    }

    CustomEvent.prototype = window.Event.prototype;

    if (typeof window.CustomEvent !== 'function') {
        window.CustomEvent = CustomEvent;
    }
    if (typeof window.Event !== 'function') {
        window.Event = CustomEvent;
    }
})();
