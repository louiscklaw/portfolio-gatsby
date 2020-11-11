const path = require( 'path' );
const puppeteer = require( 'puppeteer' );
const fs = require( 'fs' );
const assert = require('assert');
const chalk = require('chalk');

const visit_url=`http://127.0.0.1:${process.env['LOCAL_TEST_PORT']}/project-details/trading-view-dashboard/`

const SEO_SANITY_TEST_ERROR = -1
const ERR_ASSERT_WANTED_TEXT_NOT_FOUND = 'the wanted text not found'

function textMustAppear( content, wanted_text ) {
  var result = content.search( wanted_text ) != -1
  return result
}

function consoleHighlight( text_in){
  console.log(chalk.green(`puppeteer_helloworld.js ${text_in}`))
}

async function test_helloworld(){

  const browser = await puppeteer.launch( {
    defaultViewport: {
      width: 1920,
      height: 1080
    },
    ignoreHTTPSErrors: true,
    // headless: false,
    // slowMo: 1000
  } );

  const page = await browser.newPage();

  await page.goto( visit_url );
  var page_content = await page.content()

  await browser.close();

  var result = textMustAppear(page_content,'A simple page to monitor stock, while data provided by trading view')

  assert(result, ERR_ASSERT_WANTED_TEXT_NOT_FOUND)

}

( async () => {
  await test_helloworld()
  consoleHighlight('test done')
} )()
