export default {
  String (def) {
    if (!def) {
      def = ''
    }
    return {
      type: String,
      default: def
    }
  },
  Bool (def) {
    return {
      type: Boolean,
      default: def
    }
  },
  Object (def) {
    return {
      type: Object,
      default: () => def
    }
  },
  Array () {
    return {
      type: Array,
      default: () => []
    }
  }
}
