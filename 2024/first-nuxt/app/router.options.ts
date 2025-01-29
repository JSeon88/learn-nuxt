// https://router.vuejs.org/api/interfaces/routeroptions.html
import type { RouterConfig } from '@nuxt/schema'

export default {
    scrollBehavior(to, from, savedPosition) {
        // to : 사용자나 시스템이 현재 이동하고자 하는 목적지
        // from : 사용자나 시스템이 이전에 있었던 출발지의 경로의 위치
        // savedPosition : 이전에 저장된 위치가 있는 경우 저장된 위치로, 그렇지 않으면 Null
        if (savedPosition) {
            return savedPosition
        }

        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
                top: 30
            }
        }

        return { left: 0, top: 0, behavior: 'smooth' }
  }
} satisfies RouterConfig