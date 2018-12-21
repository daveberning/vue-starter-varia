<template>
  <Modal :is-modal-open="isModalOpen" :transition="transition" size="md" @close="$emit('close')">
    <template slot="header">
      <h1>Header</h1>
    </template>
    <template slot="main">
      <p>The content for the modal is being inserted using "slots". This way, you can just wrap your content in a "Modal" component.</p>
      <p>The different animation options are:</p>
      <ul>
        <li>fade-in</li>
        <li>fade-in-down</li>
        <li>fade-in-up</li>
        <li>fade-in-left</li>
        <li>fade-in-right</li>
      </ul>
    </template>
    <template slot="footer">
      <button class="btn btn-cta" @click="$emit('close')">Dismiss</button>
    </template>
  </Modal>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import Modal from '@/components/Modal.vue'

@Component({
  components: {
    Modal,
  }
})
export default class ExampleModal extends Vue {
  @Prop({ type: Boolean, required: true }) isModalOpen: boolean
  @Prop({ type: String, required: true }) transition: string
}
</script>
