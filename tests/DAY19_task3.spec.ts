import {test} from "@playwright/test"
import path from "path"

test("Upload profile photo",async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/upload")
    await page.locator('//input[@id="file-upload"]').setInputFiles("C:/Users/shrut/OneDrive/Desktop/CAP_TRAINING_ASSESSMENT/uploadphoto/task_image_cap.jpg")
    await page.locator('//input[@id="file-submit"]').click()
})