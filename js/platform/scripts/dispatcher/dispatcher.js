"use strict";

function Dispatcher() {

    var eventMap = {};

    this.registerEvent = function (eventName, eventHandler) {
        if (eventName === undefined) {
            throw new Error("event name nicht vorhanden");
        } else if (eventHandler === undefined) {
            throw new Error("event handler nicht vorhanden");
        } else if (eventMap[eventName] === undefined) {
            eventMap[eventName] = [eventHandler];
        } else {
            eventMap[eventName].push(eventHandler);
        }
    };

    this.fireEvent = function (eventName, eventData) {
        var eventHandlerArray = eventMap[eventName];
        if (eventHandlerArray === undefined) {
            console.warn("kein event handler fuer " + eventName + " gefunden");
        } else if (eventHandlerArray instanceof Array) {
            for (var eventHandler in eventHandlerArray) {
                if (eventHandler.handleEvent === undefined) {
                    console.warn("eventHandler " + eventName + " hat keine methode handleEvent");
                } else {
                    eventHandler.handleEvent(eventData);
                }
            }
        } else {
            console.error("event handler konnte nicht ermittelt werden");
        }
    };

};


platform.provider('dispatcher', function () {
    this.$get = function () {
        return new Dispatcher();
    }
});

