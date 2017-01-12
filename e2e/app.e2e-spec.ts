import { TakeTheInitiativePage } from './app.po';

describe('take-the-initiative App', function() {
  let page: TakeTheInitiativePage;

  beforeEach(() => {
    page = new TakeTheInitiativePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
