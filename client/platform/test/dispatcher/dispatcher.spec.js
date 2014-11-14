///<reference path="../../../typed/jasmine/jasmine.d.ts"/>
///<reference path="../../../typed/angularjs/angular-mocks.d.ts"/>
///<reference path="../../scripts/dispatcher/dispatcher.ts"/>
describe("A dispatcher test", function () {
    beforeEach(module('platform'));
    var internalEventData = null;
    var handler = function (eventData) {
        console.log("event abgefeuert");
        internalEventData = eventData;
    };
    beforeEach(function () {
        internalEventData = null;
    });
    it("register and fire event", inject(function (dispatcher) {
        dispatcher.registerEvent("event", handler);
        var eventData = new Object();
        dispatcher.fireEvent("event", eventData);
        expect(internalEventData).toBe(eventData);
    }));
    it("register object instead function", inject(function (dispatcher) {
        try {
            dispatcher.registerEvent("event", new Object());
            expect(true).toBe(false);
        }
        catch (e) {
            expect(e.message).toBe("eventHandler event ist keine funktion");
        }
    }));
    it("fire unknown event", inject(function (dispatcher) {
        dispatcher.fireEvent("foo", new Object());
        expect(internalEventData).toBeNull();
    }));
});
//# sourceMappingURL=dispatcher.spec.js.map