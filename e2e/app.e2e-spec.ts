import { Ng4AngularProjectPage } from './app.po';

describe('ng4-angular-project App', () => {
  let page: Ng4AngularProjectPage;

  beforeEach(() => {
    page = new Ng4AngularProjectPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
