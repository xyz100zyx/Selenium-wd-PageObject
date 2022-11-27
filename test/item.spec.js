const { Builder, Capabilities, By  } = require("selenium-webdriver");
const { assert } = require("assert");
const should = require("chai").should();
const ItemPage = require("../pages/ItemPage");

describe("Add item to cart", function() {
  const url = `https://www.stoneisland.com/us/stone-island/vest_cod16115677su.html#dept=ctsndjck`;

  beforeEach(async function () {
    const capabilities = {
      ...Capabilities.chrome(),
    };
    this.driver = await new Builder().usingServer("http://localhost:4444/wd/hub").withCapabilities(capabilities).build();
    await this.driver.manage().window().maximize();
  });


  it("Choose a size of item", async function() {
    const itemPage = new ItemPage(this.driver);
    await itemPage.openPage(url);
    await itemPage.onSizeClick();
    await itemPage.onAddToBagClick();
    const element = await itemPage.getProductName();
    //assert.isTrue(element, "1");
  });

  // it("The item appears in the bag", async function() {
  //   const itemPage = new ItemPage(this.driver);
  //   await itemPage.openPage(url);
  //   await itemPage.onSizeClick();
  //   await itemPage.onAddToBagClick();
  //   await itemPage.onBagClick();
  //   const element = await itemPage.getProductName();
  //   assert.assertEquals(element, "43199 NEEDLE PUNCHED REFLECTIVE ")
  // }).timeout(2000);

  afterEach(async function () {
    await this.driver.quit();
  });

});
