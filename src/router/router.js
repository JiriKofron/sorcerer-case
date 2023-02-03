import TheHomePage from '@/components/TheHomePage.vue'
import TheGameContainer from '@/components/TheGameContainer.vue'

const routes = [
    {
        path: '/',
        component: TheHomePage
    },
    {
        path: '/game',
        component: TheGameContainer
    }
]

export default routes