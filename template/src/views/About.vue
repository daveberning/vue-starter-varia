<template>
  <div>
    <h1>About</h1>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class About extends Vue {
  mounted(): void {
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

.alert p:last-child {
  margin-bottom: 0;
}
</style>