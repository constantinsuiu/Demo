import { Given, When, Then } from '@wdio/cucumber-framework';
import HomePage from '../pages/HomePage';
import WhoWeArePage from '../pages/WhoWeArePage';
import ContactPage from '../pages/ContactPage';
import CreditRatingsPage from '../pages/CreditRatingsPage';

import data from '../data/ratings'
import { isExportDeclaration } from 'typescript';


Given(/^I navigate to (.*)/, async (page) => {
    switch(page) {
        case 'RaboBank':
            browser.url('https://www.rabobank.com/en/home/index.html')
            HomePage.raboLogo.waitForDisplayed();
            break;
        case 'Who We are card':
            HomePage.whoWeAreTile.scrollIntoView();
            HomePage.whoWeAreTile.click();
            WhoWeArePage.ratingsLink.waitForDisplayed();
            break;
        case 'Contact':
            HomePage.contactUsButton.click();
            ContactPage.emailUsButton.waitForDisplayed();
            break;
        default:
            throw new Error(`The ${page} page was not found`)
    }
});


Then(/I view the company ratings/, () => {
    let columnIndex, rowIndex;

    WhoWeArePage.ratingsLink.click();
    CreditRatingsPage.pageContent.waitForDisplayed()
    Object.keys(data).forEach((agency) => {
        Object.keys(data[agency]).forEach((rating) => {
            columnIndex = CreditRatingsPage.getHeaderIndex(rating) + 1;
            rowIndex = CreditRatingsPage.getRowIndex(agency);
            console.log(`Checking ${rating} for ${data[agency]}`)
            expect(CreditRatingsPage.tableCell(rowIndex, columnIndex).getText()).toEqual(data[agency][rating]);
        })
        
    });

    
});