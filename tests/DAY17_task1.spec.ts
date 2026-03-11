import {test,expect}  from "@playwright/test"

test("",async({browser})=>{
    let context = await browser.newContext()
    let page = await context.newPage()

    await page.goto("https://www.automationtesting.co.uk/dropdown.html")
    await page.waitForLoadState('load')

    await page.locator('#cars').first().waitFor()

    let options = await page.locator('#cars option').all()

    let actualOptions: string[] = []

    for(let opt of options){
        let text = await opt.textContent()
        console.log(text)
        actualOptions.push(text?.trim() || "")
    }

    let expectedOptions = [
        "Audi",
        "BMW",
        "Ford",
        "Honda",
        "Jeep",
        "Mercedes",
        "Suzuki",
        "Volkswagen"
    ]

    expect(actualOptions).toEqual(expectedOptions)

    await page.screenshot({path:"dropdown.png", fullPage:true})
})