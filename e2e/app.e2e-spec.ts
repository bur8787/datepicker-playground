import { DatepickerPlaygroundPage } from './app.po';

describe('datepicker-playground App', () => {
  let page: DatepickerPlaygroundPage;

  beforeEach(() => {
    page = new DatepickerPlaygroundPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
