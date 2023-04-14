import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';
import {
    createRestaurantItemTemplate,
} from '../templates/template-creator';

const Favorite = {
    async render() {
        return `
        <section class="content">
            <div class="list">
                <h1 tabindex = "0" class="list-label">Daftar Favorite</h1>
                <div id="restaurant" class="restaurant"> </div>
            </div>
        </section>
        `;
    },

    async afterRender() {
        const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
        const restaurantsContainer = document.querySelector('#restaurant');

        restaurants.forEach((restaurant) => {
            restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
        });
    },
};

export default Favorite;