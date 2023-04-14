// eslint-disable-next-line import/no-unresolved
import '../components/Hero';
import RestaurantSource from '../../data/restaurant-source';
import {
    createRestaurantItemTemplate,
} from '../templates/template-creator';

const Home = {
    async render() {
        return `
        <hero-header> </hero-header>
        <section class="content">
            <div class="list">
                <h1 tabindex="0" class="list-label">Daftar Restoran</h1>
                <div id="restaurant" class="restaurant"></div>
            </div>
        </section>
        `;
    },

    async afterRender() {
        const restaurant = await RestaurantSource.listRestaurant();
        const restaurantContainer = document.querySelector('#restaurant');
        restaurant.forEach((restaurants) => {
            restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurants);
        });
    },
};

export default Home;