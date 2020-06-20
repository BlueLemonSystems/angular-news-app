import { AppPage } from './app.po';
import { browser, logging, element, by } from 'protractor';
import { setUncaughtExceptionCaptureCallback } from 'process';

fdescribe('Login testing', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display wrong credentials message', () => {
    page.navigateTo();

    const emailInput = element(by.name("email"));
    const pwdInput = element(by.name("password"));
    const btn = element(by.id("submitBtn"));

    emailInput.sendKeys("user@email.com");
    pwdInput.sendKeys("123456");

    btn.click();

    browser.wait(()=>{
      const el = element(by.id("error"));
      return el.getText();
    }, 5000);
    
    expect(element(by.id("error")).getText()).toEqual('Credenciales incorrectas');
  });


  it('should login to the application', () => {
    page.navigateTo();

    const emailInput = element(by.name("email"));
    const pwdInput = element(by.name("password"));
    const btn = element(by.id("submitBtn"));

    emailInput.sendKeys("lorem100@email.com");
    pwdInput.sendKeys("123456");

    btn.click();

    browser.wait(()=>{
      const el = element(by.id("welcome"));
      return el.getText();
    }, 5000);
    
    expect(element(by.id("welcome")).getText()).toEqual('Bienvenido a mi primera App');
  });



  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    // const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    // expect(logs).not.toContain(jasmine.objectContaining({
    //   level: logging.Level.SEVERE,
    // } as logging.Entry));
  });
});
