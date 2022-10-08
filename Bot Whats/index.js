const pupper = require("puppeteer");
const fs = require('fs');



(async () => {
    try{
        const browser = await pupper.launch({headless: false});
        const page = await browser.newPage();
        await page.setUserAgent("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36");
        await page.goto('https://web.whatsapp.com/')

        await page.waitForSelector("._2vbn4");


        const numeros = await page.evaluate(() =>{
            const nodeList = document.querySelectorAll('.zoWT4 span'); 

            const list = nodeList.map( span =>({
                Contato: span.textContent
            }));

            return list
        });

        fs.writeFileSync('numeros.json', JSON.stringify(numeros, null, 2), err =>{
            if(err) throw new Error('something went wrong')

            console.log('well done!')
        })
    } catch (e){
        console.error("error mine", e);
    }
    //await browser.close()
})();