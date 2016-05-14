export class BbcChurchPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('bbc-church-app h1')).getText();
  }
}
