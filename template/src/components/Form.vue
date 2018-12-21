<template>
  <form class="well">
    <div class="row">
      <div class="col">
        <label for="username">Username</label>
        <input id="username" v-model="username" type="text" name="username" class="form-control gutter-bottom">
      </div>
      <div class="col">
        <label for="username">Password</label>
        <input id="password" v-model="password" type="password" name="password" class="form-control gutter-bottom">
      </div>
    </div>
    <div class="row">
      <div class="col">
        <button class="btn btn-block btn-cta" type="submit">Sign In</button>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class Form extends Vue {
  username: string = ''
  password: string = ''
}
</script>

<style lang="scss" scoped>
.well {
  padding: 15px;
}
</style>
