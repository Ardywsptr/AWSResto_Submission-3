import CONFIG from '../../globals/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

function foodsRestaurant(restaurant) {
    return restaurant.menus.foods.map((food) => `
    <li>${food.name}</li>
    `).join('');
}

function drinksRestaurant(restaurant) {
    return restaurant.menus.drinks.map((drink) => `
    <li>${drink.name}</li>
    `).join('');
}

function customerReviews(restaurant) {
    return restaurant.customerReviews.map((reviews) => `
    <li class="review">
        <div class="name-review">${reviews.name}</div>
        <div class="description-review">" ${reviews.review} "</div>
        <div class="date-review">${reviews.date}</div>
    </li>
    `).join('');
}

const createRestaurantDetailTemplate = (restaurant) => `
<div class="detail">
    <div class="restaurant-item-detail">
        <h1 tabindex="0" class="restaurant-item-title-detail">${restaurant.name}</h1>
        <img tabindex="0" class="restaurant-item-thumbnail-detail" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}"/>
    </div>

    <div class="restaurant-info">
        <h2 tabindex="0" class="restaurant-label">Address</h2>
        <h3 tabindex="0" class="restaurant-text">${restaurant.address}</h3>
        <h2 tabindex="0" class="restaurant-label">Kota</h2>
        <h3 tabindex="0" class="restaurant-text">${restaurant.city}</h3>
        <h2 tabindex="0" class="restaurant-label">Rating</h2>
        <h3 tabindex="0" class="restaurant-text">⭐️${restaurant.rating}</h3>
        <h2 tabindex="0" class="restaurant-label">Description</h2>
        <p tabindex="0" class="restaurant-item-description-detail">${restaurant.description}</p>
    </div>

    <div class="restaurant-menu">
        <h2 tabindex="0" class="restaurant-label"> Menu</h2>
        <div class="menu">
            <ul tabindex="0">
                <li>Foods</li>
                <ul>${foodsRestaurant(restaurant)}</ul>
            </ul>
            <ul tabindex="0">
                <li>Drinks</li> 
                <ul>${drinksRestaurant(restaurant)}</ul>
            </ul>
        </div>
    </div>

    <div class="restaurant-review">
        <h2 tabindex="0" class="restaurant-label">Customer Reviews</h2>
        <ul tabindex="0" class="review-boxs"> ${customerReviews(restaurant)}</ul>
    </div>
</div>
`;

const createRestaurantItemTemplate = (restaurant) => `
<article class="restaurant-item">
    <picture>
        <source type="image/webp" media="(min-width: 800px)" data-srcset="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}">
        <img class="restaurant-item-image lazyload" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}"
        data-src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL_SMALL + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}"
        sizes="(min-width: 800px) 480px, 800px">
    </picture> 

    <div tabindex="0" class="restaurant-item-city">${restaurant.city}</div>
    <div class="restaurant-content">
        <div tabindex="0" class="restaurant-content-rating">
            <p class="restaurant-content-rating-teks">Rating </p>
            <p class="restaurant-content-rating-star">★ ${restaurant.rating}</p>
        </div> 
        <h1 tabindex="0" class="restaurant-content-title">
            <a href="/#/detail/${restaurant.id}">${restaurant.name}</a>
        </h1>
        <p tabindex="0" class="restaurant-content-description">${restaurant.description}</p>
    </div> 
</article>
`;

const createLikeRestaurantButtonTemplate = () => `
    <button  aria-label="like this restaurant" id="likeButton" class="like">
        <i class="fa fa-heart-o" aria-hidden="true"></i>
    </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
    <button aria-label="unlike this restaurant" id="likeButton" class="like">
        <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
`;

export {
    createRestaurantItemTemplate,
    createRestaurantDetailTemplate,
    createLikeRestaurantButtonTemplate,
    createUnlikeRestaurantButtonTemplate,
};