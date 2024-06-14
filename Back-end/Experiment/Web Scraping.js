const puppeteer = require('puppeteer');

(async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto('https://www.google.com/search?q=machne');

    // Wait for the "Showing results for" message to appear
    await page.waitForSelector('#fprsl');

    // Extract the text content of the "Showing results for" message
    const showingResultsForText = await page.$eval('#fprsl', element => element.textContent.trim());

    console.log(showingResultsForText);

    await browser.close();
  } catch (error) {
    console.error('Error:', error);
  }
})();


// not complected

// i want to make

// input >> machne output >> machine