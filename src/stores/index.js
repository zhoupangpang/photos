import photoStore from './photoStore'
import createLogger from 'vuex/dist/logger'

export default {
    plugins: [createLogger()],
    modules: {
        photoStore
    }
}