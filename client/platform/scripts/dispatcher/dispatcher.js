///<reference path="../platform.ts"/>
///<reference path="../../../typed/angularjs/angular.d.ts"/>
"use strict";
var dispatcher;
(function (dispatcher) {
    var Dispatcher = (function () {
        function Dispatcher() {
            this.eventMap = {};
        }
        Dispatcher.prototype.registerEvent = function (eventName, eventHandler) {
            if (eventName === undefined) {
                throw new Error("event name nicht vorhanden");
            }
            else if (eventHandler === undefined) {
                throw new Error("event handler nicht vorhanden");
            }
            else if (typeof eventHandler === 'function') {
                if (this.eventMap[eventName] === undefined) {
                    this.eventMap[eventName] = [eventHandler];
                }
                else {
                    this.eventMap[eventName].push(eventHandler);
                }
            }
            else {
                var message = "eventHandler " + eventName + " ist keine funktion";
                console.warn(message);
                throw new Error(message);
            }
        };
        Dispatcher.prototype.fireEvent = function (eventName, eventData) {
            var eventHandlerArray = this.eventMap[eventName];
            if (eventHandlerArray === undefined) {
                console.warn("kein event handler fuer " + eventName + " gefunden");
            }
            else if (eventHandlerArray instanceof Array) {
                for (var handlerIndex in eventHandlerArray) {
                    var eventHandler = eventHandlerArray[handlerIndex];
                    if (typeof eventHandler == 'function') {
                        eventHandler(eventData);
                    }
                    else {
                        console.warn("eventHandler " + eventName + " ist keine funktion");
                    }
                }
            }
            else {
                console.error("event handler konnte nicht ermittelt werden");
            }
        };
        return Dispatcher;
    })();
    dispatcher.Dispatcher = Dispatcher;
    var DispatcherProvider = (function () {
        function DispatcherProvider() {
            this.dispatcher = new Dispatcher();
        }
        DispatcherProvider.prototype.$get = function () {
            return this.dispatcher;
        };
        return DispatcherProvider;
    })();
    dispatcher.DispatcherProvider = DispatcherProvider;
})(dispatcher || (dispatcher = {}));
platform.provider('dispatcher', new dispatcher.DispatcherProvider());
//# sourceMappingURL=dispatcher.js.map