describe('workflow from landing to projects', function () {
    beforeEach(function () {
        browser.loadAndWaitForAureliaPage('http://localhost:9000');
    });
    it('should show the welcome landing page', function () {
        var title = browser.getTitle();
        expect(title).toEqual('WELCOME | Portfolio');
    });
    it('should navigate to the home route', function () {
        browser.sleep(5000);
        var btn = element(by.id('t--enter')).click();
        browser.waitForRouterComplete();
        var title = browser.getTitle();
        expect(title).toEqual('HOME | Portfolio');
    });
});
