const cd = require('chromedriver');
const wd = require('selenium-webdriver');

const browser = new wd.Builder()
    .forBrowser('chrome')
    .build();

    browser.get("https://www.cricbuzz.com/live-cricket-scores/33773").then(function(){
        return driver.findElements(wd.By.className("cb-nav-tab"));
    });
