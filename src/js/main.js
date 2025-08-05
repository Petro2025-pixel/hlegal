// js
import '../js/click.js';
import '../js/tabs.js';
import Swiper from 'swiper';
import { Pagination} from 'swiper/modules';

// css
import 'swiper/css';
import 'swiper/css/pagination';
import '../scss/style.scss';


const swiper = new Swiper('.swiper', {
  modules: [Pagination],
  // slidesPerView: 4,
  // spaceBetween: 30,
  pagination: {
      el: '.swiper-pagination',
  },
});
