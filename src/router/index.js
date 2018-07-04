import Vue from 'vue'
import Router from 'vue-router'
const HelloWorld = () => import('@/view/HelloWorld')
const tMessagePage = () => import('@/view/tMessagePage')
const tButtonPage = () => import('@/view/tButtonPage')
const tTabPage = () => import('@/view/tTabPage')
const tHeadPage = () => import('@/view/tHeadPage')
const tItemswiperPage = () => import('@/view/tItemswiperPage')
const tRecordPage = () => import('@/view/tRecordPage')
const tCellPage = () => import('@/view/tCellPage')
const tPopPickerPage = () => import('@/view/tPopPickerPage')
const tInputPage = () => import('@/view/tInputPage')
const tToastPage = () => import('@/view/tToastPage')
const tActionSheetPage = () => import('@/view/tActionSheetPage')
const tHeadTabPage = () => import('@/view/tHeadTabPage')
const tFullHeadTabPage = () => import('@/view/tFullHeadTabPage')
const tSwiperPage = () => import('@/view/tSwiperPage')
const tStepsPage = () => import('@/view/tStepsPage')
const directive = () => import('@/view/directive')
const api = () => import('@/view/api')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/tMessagePage',
      name: 'tMessagePage',
      component: tMessagePage
    },
    {
      path: '/tButtonPage',
      name: 'tButtonPage',
      component: tButtonPage
    },
    {
      path: '/tTabPage',
      name: 'tTabPage',
      component: tTabPage
    },
    {
      path: '/tHeadPage',
      name: 'tHeadPage',
      component: tHeadPage
    },
    {
      path: '/tItemswiperPage',
      name: 'tItemswiperPage',
      component: tItemswiperPage
    },
    {
      path: '/tRecordPage',
      name: 'tRecordPage',
      component: tRecordPage
    },
    {
      path: '/tCellPage',
      name: 'tCellPage',
      component: tCellPage
    },
    {
      path: '/tPopPickerPage',
      name: 'tPopPickerPage',
      component: tPopPickerPage
    },
    {
      path: '/tInputPage',
      name: 'tInputPage',
      component: tInputPage
    },
    {
      path: '/tToastPage',
      name: 'tToastPage',
      component: tToastPage
    },
    {
      path: '/tActionSheetPage',
      name: 'tActionSheetPage',
      component: tActionSheetPage
    },
    {
      path: '/tHeadTabPage',
      name: 'tHeadTabPage',
      component: tHeadTabPage
    },
    {
      path: '/tFullHeadTabPage',
      name: 'tFullHeadTabPage',
      component: tFullHeadTabPage
    },    
    {
      path: '/tSwiperPage',
      name: 'tSwiperPage',
      component: tSwiperPage
    },    
    {
      path: '/tStepsPage',
      name: 'tStepsPage',
      component: tStepsPage
    },
    {
      path: '/directive',
      name: 'directive',
      component: directive
    },
    {
      path: '/api',
      name: 'api',
      component: api
    }
  ]
})
