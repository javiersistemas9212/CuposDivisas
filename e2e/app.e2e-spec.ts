import { CuposdivisasWebPage } from './app.po';

describe('cuposdivisas-web App', () => {
  let page: CuposdivisasWebPage;

  beforeEach(() => {
    page = new CuposdivisasWebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
