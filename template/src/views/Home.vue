<template>
  <div>
    <h1>Home</h1>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class Home extends Vue {

  mounted() {
    this.$store.dispatch('updateName', 'Vue Starter Varia')
  }
}
</script>

<style lang="scss" scoped>
.swatches p {
  color: $white;
  text-align: center;
  padding: 15px;
  border-radius: 2px;
}
</style>