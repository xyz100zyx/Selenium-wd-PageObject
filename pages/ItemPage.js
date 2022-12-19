const BasePage = require("./basePage");
const { By, until } = require("selenium-webdriver");

class ItemPage extends BasePage {
  constructor(driver) {
    super(driver);
  }

  async onAddToBagClick() {
    const element = await this.findByXpath(`//*[@id="add-to-cart-button"]`);
    await element.click();
    return this;
  }

  async onBagClick(){
    const element = await this.findByXpath('//*[@id="item"]/header/div/div[3]/div/nav[3]/div/button');
    await element.click();
    return this;
  }

  async onSizeClick(){
    const element = await this.findByXpath('//*[@id="product-details"]/div/div/div[2]/div[1]/div[3]/div[2]/div[2]/button[2]');
    await element.click();
    return this;
  }

  async onColorClick(){
    const element = await this.findByXpath(`//*[@id="product-details"]/div/div/div[2]/div[1]/div[3]/div[1]/div/a[7]/span[2]/span[1]`);
    await element.click()
    return this;
  }

  async getProductName(){
    const element = await this.findByXpath(`//*[@id="product-details"]/div/div/div[2]/div[1]/div[2]/h1`);
    return element.getText();
  }

  async getProductPrice(){
    const element = await this.findByXpath(`//*[@id="mini-cart"]/div/dl/dd[3]`);
    console.log(element.getText(), 'loooool')
    return element.getText();
  }

  async closeSidebar(){
    const element = await this.findByXpath(`/html/body/section/div/div/div[3]/div[2]/button[2]`);
    await element.click();
    console.log('element', element);
    return this;
  }

}

module.exports = ItemPage;
