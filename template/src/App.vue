<template>
  <div id="app">
    <EnvironmentNotice :env="env" />
    <div class="container">

      <render-if :defined="[env]" :not-valid="['Foo']" class="foobar" tag="span">
        <img class="logo" src="@/assets/logo.png">
      </render-if>

      <Navigation />
      <router-view/>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import EnvironmentNotice from '@/components/EnvironmentNotice.vue'
import Navigation from '@/components/Navigation.vue'
import Notification from '@/components/Notification.vue'

@Component({
  components: {
    EnvironmentNotice,
    Navigation,
    Notification,
  }
})
export default class App extends Vue {
  env: string = 'Bar'
}
</script>


<style lang="scss">
@import "./../node_modules/bootstrap/dist/css/bootstrap.css";
@import "@/assets/scss/styles.scss";

.logo {
  max-width: 300px;
  width: 100%;
  display: block;
  margin: 0 auto;
}
</style>

<style scoped>
.container {
  padding: 3rem 15px;
}
</style>


