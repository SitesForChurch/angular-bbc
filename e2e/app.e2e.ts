import { BbcChurchPage } from './app.po';

describe('bbc-church App', function() {
  let page: BbcChurchPage;

  beforeEach(() => {
    page = new BbcChurchPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('bbc-church works!');
  });
});
