describe('Angular event Page', function () {

    it('One Should load Angular homepage', function () {
        // browser.get(browser.baseUrl + 'events');
        browser.get('https://v2.angular.io/docs/ts/latest/');
        expect(browser.getTitle()).toEqual('Angular - EVENTS');
    });

    it('Two Should load Angular homepage', function () {
        browser.get('https://v2.angular.io/docs/ts/latest/');
        expect(browser.getTitle()).toEqual('Angular - EVENTS');
    });

    it('Three Should load Angular homepage', function () {
        browser.get('https://v2.angular.io/docs/ts/latest/');
        expect(browser.getTitle()).toEqual('Angular - EVENTS');
    });
});