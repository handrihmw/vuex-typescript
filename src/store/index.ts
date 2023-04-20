import { createStore } from 'vuex'
import userModule from '@/store/modules/userModules';

export default createStore({
    modules: {
        user: userModule
    }
})