
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Draw button pulls up 5 bots', async () =>{
    const button = await driver.findElement(By.id('draw'))
    await button.click();

    await driver.sleep(3000)
})

test('See all bots button works', async () => {
    const seeAll = await driver.findElement(By.id('see-all'))
    await seeAll.click();
})