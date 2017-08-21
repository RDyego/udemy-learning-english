import { UdemyLearningEnglishPage } from './app.po';

describe('udemy-learning-english App', () => {
  let page: UdemyLearningEnglishPage;

  beforeEach(() => {
    page = new UdemyLearningEnglishPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
