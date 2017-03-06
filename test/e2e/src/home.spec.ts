describe('workflow from landing to home route', () => {
    beforeEach(() => {
        browser.loadAndWaitForAureliaPage('http://localhost:9000');
    });

    it('should show the welcome landing page', () => {
        const title = browser.getTitle();
        expect(title).toEqual('WELCOME | Portfolio')
    });

    it('should navigate to the home route', () => {
        browser.sleep(5000); // for transitions
        const btn = element(by.id('t--enter')).click();
        browser.waitForRouterComplete();
        const title = browser.getTitle();
        expect(title).toEqual('HOME | Portfolio');

    })
})