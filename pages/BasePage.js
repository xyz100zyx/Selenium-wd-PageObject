const { By, until } = require("selenium-webdriver");

class BasePage {
  constructor(driver) {
    this.driver = driver;
  }

  async openPage(url) {
    await this.driver.get(url);
    return this;
  }

  async findByXpath(xpath) {
    return this.driver.wait(until.elementLocated(By.xpath(xpath)), 15000);
  }

  async findByClassName(className){
    return this.driver.wait(until.elementLocated(By.className(className)), 5000);
  }

}

module.exports = BasePage;

