import { MyjrLoveAppPage } from './app.po';

describe('myjr-love-app App', () => {
  let page: MyjrLoveAppPage;

  beforeEach(() => {
    page = new MyjrLoveAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
