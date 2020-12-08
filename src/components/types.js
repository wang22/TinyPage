export default {
    String(def) {
        if (!def) {
            def = ''
        }
        return {
            type: String,
            default: def
        }
    },
    Bool(def) {
        return {
            type: Boolean,
            default: def
        }
    }
}