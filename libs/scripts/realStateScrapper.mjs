import puppeteer from "puppeteer";
import fs from "fs";

const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

const browser = await puppeteer.launch({});
const page = await browser.newPage();
const userAgent =
  "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Mobile Safari/537.36";

await page.setUserAgent(userAgent);

await page.goto(
  "https://venda-imoveis.caixa.gov.br/sistema/busca-imovel.asp?sltTipoBusca=imoveis",
  { waitUntil: "networkidle0" }
);

await page.setViewport({ width: 1080, height: 1024 });

await page.waitForSelector("#cmb_estado");
// await page.select("#cmb_estado", "CE");
await page.$eval("#cmb_estado", (el) => {
  el.value = "CE";
  const event = new Event("change");
  el.dispatchEvent(event);
});

await sleep(2000);

await page.waitForSelector("#cmb_cidade");
await page.$eval("#cmb_cidade", (el) => {
  el.value = "1377";
  const event = new Event("change");
  el.dispatchEvent(event);
});
await sleep(2000);
// await page.select("#cmb_cidade", "Fortaleza");
await page.waitForSelector("#btn_next0");
await page.click("#btn_next0");

await sleep(2000);

await page.waitForSelector("#btn_next1");
await page.click("#btn_next1");

await sleep(2000);

await page.waitForSelector("#listaimoveispaginacao");

let myNumberPage = 1;
let bidData = [];
while (myNumberPage) {
  try {
    const currentBidData = await page.$$eval(
      "#listaimoveispaginacao ul",
      (elements) =>
        elements.map((el) => {
          const title = el.querySelector(
            ".dadosimovel-col2 > ul > li > div > span"
          ).textContent;
          return {
            title,
          };
        })
    );

    console.log("socorro", myNumberPage);
    bidData = [...bidData, ...currentBidData];
    await page.waitForSelector("#paginacao");

    myNumberPage += 1;

    console.log("socorro 2", myNumberPage);
    await page.$$eval(
      "#paginacao a",
      (elements, myNumberPage) => {
        const elToClick = elements.find(
          (el) => el.textContent === myNumberPage.toString()
        );

        elToClick.click();
      },
      myNumberPage
    );
    await sleep(2000);
  } catch (err) {
    myNumberPage = null;
  }
}


console.log(bidData);

await fs.writeFileSync("leiloes.json", JSON.stringify(bidData));

await page.screenshot({ path: "screenshot.jpg" });

await browser.close();
