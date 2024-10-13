// Im making this project so that it can take wrong speling input from user and then return correct spelling of that word.
const puppeteer = require("puppeteer");

// Puppeteer
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://google.com");

  await page.locator("#APjFqb").fill("hew to makr an app");
  await page.locator(".gNO89b").click();
  await page.locator("#fprsl").click();

  const textAreaContent = await page.evaluate(() => {
    const textarea = document.querySelector("#APjFqb.gLFyf");
    return textarea.value;
  });

  console.log("Textarea content:", textAreaContent);
  // await page.screenshot({ path: "example.png" });
  await browser.close();
})();
