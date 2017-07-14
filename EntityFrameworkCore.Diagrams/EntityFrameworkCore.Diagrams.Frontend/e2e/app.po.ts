import { browser, by, element } from 'protractor';

export class DbDiagramsPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('efd-root h1')).getText();
  }
}
