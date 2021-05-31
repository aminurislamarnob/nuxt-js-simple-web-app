import { wrapFunctional } from './utils'

export { default as Footer } from '../../components/Footer.vue'
export { default as Hero } from '../../components/Hero.vue'
export { default as LargeCard } from '../../components/LargeCard.vue'
export { default as LargeCardDisplay } from '../../components/LargeCardDisplay.vue'
export { default as MainNav } from '../../components/MainNav.vue'
export { default as MyItem } from '../../components/MyItem.vue'
export { default as PageNotFound } from '../../components/PageNotFound.vue'
export { default as RentModal } from '../../components/RentModal.vue'
export { default as ReviewCard } from '../../components/ReviewCard.vue'
export { default as Reviews } from '../../components/Reviews.vue'
export { default as SmallCard } from '../../components/SmallCard.vue'
export { default as SmallCardsDisplay } from '../../components/SmallCardsDisplay.vue'

export const LazyFooter = import('../../components/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const LazyHero = import('../../components/Hero.vue' /* webpackChunkName: "components/hero" */).then(c => wrapFunctional(c.default || c))
export const LazyLargeCard = import('../../components/LargeCard.vue' /* webpackChunkName: "components/large-card" */).then(c => wrapFunctional(c.default || c))
export const LazyLargeCardDisplay = import('../../components/LargeCardDisplay.vue' /* webpackChunkName: "components/large-card-display" */).then(c => wrapFunctional(c.default || c))
export const LazyMainNav = import('../../components/MainNav.vue' /* webpackChunkName: "components/main-nav" */).then(c => wrapFunctional(c.default || c))
export const LazyMyItem = import('../../components/MyItem.vue' /* webpackChunkName: "components/my-item" */).then(c => wrapFunctional(c.default || c))
export const LazyPageNotFound = import('../../components/PageNotFound.vue' /* webpackChunkName: "components/page-not-found" */).then(c => wrapFunctional(c.default || c))
export const LazyRentModal = import('../../components/RentModal.vue' /* webpackChunkName: "components/rent-modal" */).then(c => wrapFunctional(c.default || c))
export const LazyReviewCard = import('../../components/ReviewCard.vue' /* webpackChunkName: "components/review-card" */).then(c => wrapFunctional(c.default || c))
export const LazyReviews = import('../../components/Reviews.vue' /* webpackChunkName: "components/reviews" */).then(c => wrapFunctional(c.default || c))
export const LazySmallCard = import('../../components/SmallCard.vue' /* webpackChunkName: "components/small-card" */).then(c => wrapFunctional(c.default || c))
export const LazySmallCardsDisplay = import('../../components/SmallCardsDisplay.vue' /* webpackChunkName: "components/small-cards-display" */).then(c => wrapFunctional(c.default || c))
