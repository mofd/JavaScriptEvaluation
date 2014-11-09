"use strict";

function Dispatcher() {

    var eventMap = {};

    this.registerEvent = function (eventName, eventHandler) {
        if (eventName === undefined) {
            throw new Error("event name nicht vorhanden");
        } else if (eventHandler === undefined) {
            throw new Error("event handler nicht vorhanden");
        } else if (typeof eventHandler == 'function') {
            if (eventMap[eventName] === undefined) {
                eventMap[eventName] = [eventHandler];
            } else {
                eventMap[eventName].push(eventHandler);
            }
        } else {
            var message = "eventHandler " + eventName + " ist keine funktion";
            console.warn(message);
            throw new Error(message);
        }
    };

    this.fireEvent = function (eventName, eventData) {
        var eventHandlerArray = eventMap[eventName];
        if (eventHandlerArray === undefined) {
            console.warn("kein event handler fuer " + eventName + " gefunden");
        } else if (eventHandlerArray instanceof Array) {
            for (var handlerIndex in eventHandlerArray) {
                var eventHandler = eventHandlerArray[handlerIndex];
                if (typeof eventHandler == 'function') {
                    eventHandler(eventData);
                } else {
                    console.warn("eventHandler " + eventName + " ist keine funktion");
                }
            }
        } else {
            console.error("event handler konnte nicht ermittelt werden");
        }
    };

};


platform.provider('dispatcher', function () {
    var dispatcher = new Dispatcher();

    this.$get = function () {
        return {
            registerEvent: function (eventName, eventHandler) {
                dispatcher.registerEvent(eventName, eventHandler);
            },
            fireEvent: function (eventName, eventData) {
                dispatcher.fireEvent(eventName, eventData);
            }
        };
    };
});
