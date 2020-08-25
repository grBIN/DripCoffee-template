// import Swiper JS
import Swiper, {Autoplay} from 'swiper';
Swiper.use([Autoplay]);

var mySwiper = new Swiper('.offer__items', {
    slidesPerView: "auto",
    speed: 300,
    autoplay: {
        delay: 3000,
    },
});