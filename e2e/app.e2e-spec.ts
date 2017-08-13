import { SagenicAngularSeoPage } from './app.po';

describe('sagenic-angular-seo App', () => {
  let page: SagenicAngularSeoPage;

  beforeEach(() => {
    page = new SagenicAngularSeoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
