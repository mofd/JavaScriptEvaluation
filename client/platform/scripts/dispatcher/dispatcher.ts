///<reference path="../platform.ts"/>
///<reference path="../../../typed/angularjs/angular.d.ts"/>
"use strict";

module dispatcher {
    export interface IEventHandler {
        (eventData:any):void;
    }

    export interface IDispatcher {
        registerEvent(eventName:string, eventHandler:IEventHandler):void;

        fireEvent(eventName:string, eventData:any): void;
    }

    export class Dispatcher implements IDispatcher {
        private eventMap:Object = {};

        registerEvent(eventName:string, eventHandler:IEventHandler):void {
            if (eventName === undefined) {
                throw new Error("event name nicht vorhanden");
            } else if (eventHandler === undefined) {
                throw new Error("event handler nicht vorhanden");
            } else if (typeof eventHandler === 'function') {
                if (this.eventMap[eventName] === undefined) {
                    this.eventMap[eventName] = [eventHandler];
                } else {
                    this.eventMap[eventName].push(eventHandler);
                }
            } else {
                var message = "eventHandler " + eventName + " ist keine funktion";
                console.warn(message);
                throw new Error(message);
            }
        }

        fireEvent(eventName:string, eventData:any):void {
            var eventHandlerArray = this.eventMap[eventName];
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
        }

    }

    export class DispatcherProvider implements ng.IServiceProvider {

        private dispatcher:IDispatcher = new Dispatcher();

        $get():IDispatcher {
            return this.dispatcher;
        }
    }
}

platform.provider('dispatcher', new dispatcher.DispatcherProvider());

