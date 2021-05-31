import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  Footer: () => import('../../components/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c)),
  Hero: () => import('../../components/Hero.vue' /* webpackChunkName: "components/hero" */).then(c => wrapFunctional(c.default || c)),
  LargeCard: () => import('../../components/LargeCard.vue' /* webpackChunkName: "components/large-card" */).then(c => wrapFunctional(c.default || c)),
  LargeCardDisplay: () => import('../../components/LargeCardDisplay.vue' /* webpackChunkName: "components/large-card-display" */).then(c => wrapFunctional(c.default || c)),
  MainNav: () => import('../../components/MainNav.vue' /* webpackChunkName: "components/main-nav" */).then(c => wrapFunctional(c.default || c)),
  MyItem: () => import('../../components/MyItem.vue' /* webpackChunkName: "components/my-item" */).then(c => wrapFunctional(c.default || c)),
  PageNotFound: () => import('../../components/PageNotFound.vue' /* webpackChunkName: "components/page-not-found" */).then(c => wrapFunctional(c.default || c)),
  RentModal: () => import('../../components/RentModal.vue' /* webpackChunkName: "components/rent-modal" */).then(c => wrapFunctional(c.default || c)),
  ReviewCard: () => import('../../components/ReviewCard.vue' /* webpackChunkName: "components/review-card" */).then(c => wrapFunctional(c.default || c)),
  Reviews: () => import('../../components/Reviews.vue' /* webpackChunkName: "components/reviews" */).then(c => wrapFunctional(c.default || c)),
  SmallCard: () => import('../../components/SmallCard.vue' /* webpackChunkName: "components/small-card" */).then(c => wrapFunctional(c.default || c)),
  SmallCardsDisplay: () => import('../../components/SmallCardsDisplay.vue' /* webpackChunkName: "components/small-cards-display" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
