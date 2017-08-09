import { AngularApppPage } from './app.po';

describe('angular-appp App', () => {
  let page: AngularApppPage;

  beforeEach(() => {
    page = new AngularApppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
