/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurant');

Before(({
    I,
}) => {
    I.amOnPage('#/Favorite');
});

Scenario('liking one restaurant', async ({
    I,
}) => {
    I.amOnPage('/');

    I.waitForElement('.restaurant-content-title a', 10);

    const firstRestaurant = locate('.restaurant-content-title a').first();
    const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
    I.click(firstRestaurant);

    I.waitForElement('#likeButton', 10);
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.waitForElement('.restaurant-item');

    const likedRestaurantTitle = await I.grabTextFrom('.restaurant-content-title');

    assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('unliking one restaurant', async ({
    I,
}) => {
    I.amOnPage('/');

    I.waitForElement('.restaurant-content-title a');

    const firstRestaurant = locate('.restaurant-content-title a').first();
    const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
    I.click(firstRestaurant);

    I.waitForElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.waitForElement('.restaurant-item');

    const likedRestaurantTitle = await I.grabTextFrom('.restaurant-content-title');

    assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

    I.waitForElement('.restaurant-content-title a');
    I.click(firstRestaurant);

    I.waitForElement('#likeButton', 10);
    I.click('#likeButton');

    I.amOnPage('/#/favorite');

    I.dontSeeElement('.restaurant-content-title a');
});