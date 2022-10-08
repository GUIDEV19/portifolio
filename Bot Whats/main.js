
const pupper = require("puppeteer");



(async function main(){
    try{
        const contacName = "Pai";

        const browser = await pupper.launch({ headless: false});
        const page = await browser.newPage();
        await page.setUserAgent("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36");


        await page.goto("https://web.whatsapp.com/")

        await page.waitForSelector("._2vbn4");

        await delay(5000);

        await page.click(`span[title='${contacName}']`);
        await page.waitForSelector(".zoWT4");

        const editor =  await page.$(".p3_M1");

        await editor.focus();

        const amountOfMessages = 1;

        for(var i = 0; i < amountOfMessages; i++){
            await page.evaluate(() =>{
                const message = `Olá, Tudo Bem?`;
                document.execCommand("insertText", false, message)
            });
            await page.click(`span[data-testid="send"]`)
            await delay(500);
        }

    } catch (e){
        console.error("error mine", e);
    }
})();

function delay(time){
    return new Promise(function (resolve){
        setTimeout(resolve, time);
    });
};