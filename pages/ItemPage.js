const BasePage = require("./basePage");
const { By, until } = require("selenium-webdriver");

class ItemPage extends BasePage {
  constructor(driver) {
    super(driver);
  }

  async onAddToBagClick() {
    const element = await this.driver.findElement(By.className('addItemToShoppingBagButton'));
    await element.click();
    return this;
  }

  async onBagClick(){
    const element = await this.findByXpath('//*[@id="item"]/header/div/div[3]/div/nav[3]/div/button');
    await element.click();
    return this;
  }

  async onSizeClick(){
    const element = await this.findByXpath('//*[@id="sizeSelection-5_16115677su"]');
    await element.click();
    return this;
  }

  async getProductName(){
    const element = await this.findByXpath(`//*[@id="minicartSection"]/div/section`);
    return element.getText();
    return element;
  }

  async getProductQuantity(){
    const element = await this.findByXpath(`//*[@id="minicartSection"]/div/section/div[2]/div[2]/div[3]/span[2]`);
    return element.getText();
  }
}

module.exports = ItemPage;
