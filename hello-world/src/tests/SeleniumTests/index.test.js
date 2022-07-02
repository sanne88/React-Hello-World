
const { Builder, By, Key } = require("selenium-webdriver");
const url = "http://localhost:3000";


describe("selenium tests",  () => {

  let driver;

  beforeAll(async () => {
    driver = await new Builder().forBrowser("firefox").build();
    await driver.get(url);
  })
   
  afterAll(async () => {
      await driver.quit();
  })

  //Test Home Page
  test("renders home page as default", async () => {
    const eventsURL = await driver.getCurrentUrl();
    expect(eventsURL).toEqual('http://localhost:3000/'); 
  })

  //Test Add Input functionality
  test("renders TODO List page!", async () => {
      await driver.findElement(By.name("addtodo")).sendKeys("Automated Testing Todo", Key.RETURN);
      await driver.sleep(2000);
      await driver.findElement(By.name("submit")).click();
      await driver.sleep(2000);
      const elementdiv=   await driver.findElement(By.name("todolist")).getText();
      await driver.sleep(2000);
      expect(elementdiv).toEqual(elementdiv); 

  })




})
