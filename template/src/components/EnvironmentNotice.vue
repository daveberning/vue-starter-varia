<template>
  <div v-if="isActive">
    <p>You are testing in the <strong>{{ environment }}</strong> environment. The data in this application will differ from Production (PROD).
      <button @click="active = false">Dismiss</button>
    </p>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({})
export default class EnvironmentNotice extends Vue {
  @Prop(String) env!: string

  active: boolean = true

  get environment(): string {
    if (this.env === 'dev' || this.env === 'local') return 'Development'
    else if (this.env === 'uat') return 'UAT'
    else if (this.env === 'preprod') return 'Pre-Production'
    else return '???????'
  }

  get isActive(): boolean {
    return this.env === 'dev' && this.active || this.env === 'uat' && this.active ? true : false
  }

  created(): void {
    this.active = true
  }
}
</script>

<style lang="scss" scoped>
div {
  background: $danger;
  color: white;
  text-align: center;
  padding: 15px;
  position: relative;

  p {
    margin: 0;
  }

  strong {
    text-decoration: underline;
  }
}

button {
  background: none;
  color: $white;
  border-radius: 2px;
  border-color: $white;
  font-size: 0.75rem;
  position: absolute;
  right: 15px;
  bottom: 15px;
}
</style>
