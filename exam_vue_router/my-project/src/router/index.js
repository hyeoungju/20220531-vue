import Vue from 'vue'
import Router from 'vue-router'
import MainComponent from '@/components/MainComponent'
import IntroduceComponent from '@/components/IntroduceComponent'
import CiComponent from '@/components/CiComponent'
import HistoryComponent from '@/components/HistoryComponent'
import CommunityComponent from '@/components/CommunityComponent'
import FaqComponent from '@/components/FaqComponent'
import NoticeComponent from '@/components/NoticeComponent'
import GalleryComponent from '@/components/GalleryComponent'
import LocationComponent from '@/components/LocationComponent'
import ProductComponent from '@/components/ProductComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main-componentS',
      component: MainComponent
    },
    {
      path: '/introduce',
      name: 'introduce-component',
      component: IntroduceComponent
    },
    {
      path: '/ci',
      name: 'ci-componentS',
      component: CiComponent
    },
    {
      path: '/history',
      name: 'history-componentS',
      component: HistoryComponent
    },
    {
      path: '/community',
      name: 'community-component',
      component: CommunityComponent
    },
    {
      path: '/faq',
      name: 'faq-component',
      component: FaqComponent
    },
    {
      path: '/notice',
      name: 'notice-component',
      component: NoticeComponent
    },
    {
      path: '/gallery',
      name: 'gallery-component',
      component: GalleryComponent
    },
    {
      path: '/location',
      name: 'location-component',
      component: LocationComponent
    },
    {
      path: '/product',
      name: 'product-component',
      component: ProductComponent
    }
  ]
})
