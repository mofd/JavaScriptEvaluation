describe("A dispatcher test", function () {

    beforeEach(module('platform'));

    var handler = function(){
        this.internalEventData = "";

        this.handleEvent = function(eventData){
            this.internalEventData = eventData;
        }
    };

    it("register event", inject(function (dispatcher) {
        dispatcher.registerEvent("event", handler());
//        expect(dispatcher.getApiKey()).toBe(exampleApiKey);
    }));

});