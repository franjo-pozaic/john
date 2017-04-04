import { SupremePage } from './app.po';

describe('supreme App', () => {
  let page: SupremePage;

  beforeEach(() => {
    page = new SupremePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
