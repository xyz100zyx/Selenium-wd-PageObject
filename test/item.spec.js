const { Builder, Capabilities } = require("selenium-webdriver");
const  assert  = require("assert");
const should = require("chai").should();
const ItemPage = require("../pages/ItemPage");

describe("Add item to cart", function () {
  const url = `https://www.fjallraven.com/eu/en-gb/men/jackets/winter-jackets/expedition-pack-down-hoodie-m?v=F86121%3a%3a7323450796235`;

  beforeEach(async function () {
    const capabilities = {
      ...Capabilities.chrome(),
    };
    this.driver = await new Builder()
      .usingServer("http://localhost:4444/wd/hub")
      .withCapabilities(capabilities)
      .build();
    await this.driver.manage().window().maximize();
  });

  it("Choose a size of item", async function () {
    //console.log('first test runned')
    const itemPage = new ItemPage(this.driver);
    await itemPage.openPage(url);
    await itemPage.onColorClick();
    await itemPage.onSizeClick();
    //console.log('first test finished')
    assert.equal(true, true);
    
  });

  it("The item appears in the bag", async function () {
    //console.log('second test runned')
     const itemPage = new ItemPage(this.driver);
     await itemPage.openPage(url);
     await itemPage.onColorClick();
     await itemPage.onSizeClick();
     //console.log('second test finished');
     await itemPage.closeSidebar();
     await itemPage.onAddToBagClick();
     //await itemPage.onBagClick();
     const element = await itemPage.getProductName();
     assert.equal(element.toLowerCase(), "Expedition Pack Down Hoodie M".toLowerCase());
   });

   it("Item price matches", async function () {
    //console.log('third test runned')
     const itemPage = new ItemPage(this.driver);
     await itemPage.openPage(url);
     await itemPage.onColorClick();
     await itemPage.onSizeClick();
     //console.log('third test finished');
     await itemPage.closeSidebar();
     await itemPage.onAddToBagClick();
     //await itemPage.onBagClick();
     const element = await itemPage.getProductPrice();
     console.log('text', element);
     assert.equal(element.toLowerCase(), "319,95 €".toLowerCase());
   });

  afterEach(async function () {
    await this.driver.quit();
  });
});
