import { DbDiagramsWebsitePage } from './app.po';

describe('db-diagrams-website App', () => {
  let page: DbDiagramsWebsitePage;

  beforeEach(() => {
    page = new DbDiagramsWebsitePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to efd!');
  });
});
