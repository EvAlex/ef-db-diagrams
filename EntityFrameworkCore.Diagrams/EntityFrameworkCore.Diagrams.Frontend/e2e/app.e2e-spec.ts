import { DbDiagramsPage } from './app.po';

describe('db-diagrams App', () => {
  let page: DbDiagramsPage;

  beforeEach(() => {
    page = new DbDiagramsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to efd!');
  });
});
