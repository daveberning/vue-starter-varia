import Vue, { ComponentOptions } from 'vue'

declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

declare module 'vue/types/vue' {
  interface Vue {
    // Custom Vue Instance properties
  }
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    // Custom Vue Instance properties
  }

  interface VueClass<V extends Vue> {
    // Custom Vue Instance properties
  }
}
