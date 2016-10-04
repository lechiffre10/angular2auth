import { DailydealsPage } from './app.po';

describe('dailydeals App', function() {
  let page: DailydealsPage;

  beforeEach(() => {
    page = new DailydealsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
