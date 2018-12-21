<template>
  <div>
    <transition :name="transition">
      <div v-if="isModalOpen" :class="{ 'bordered': borders, 'modal-md': size === 'md', 'modal-sm': size === 'sm' }" class="modal">
        <header v-if="$slots.header" class="modal-header">
          <slot name="header" />
        </header>
        <main v-if="$slots.main" class="modal-body">
          <slot name="main" />
        </main>
        <footer v-if="$slots.footer" class="modal-footer">
          <slot name="footer" />
        </footer>
      </div>
    </transition>
    <transition name="fade-in">
      <div v-if="isModalOpen" class="overlay" @click="$emit('close');"></div>
    </transition>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator'

@Component({})
export default class Modal extends Vue {
  @Prop({ type: Boolean, required: true }) isModalOpen: boolean
  @Prop({ type: String, required: true }) transition: string
  @Prop({ type: Boolean, required: false, default: false }) borders: boolean
  @Prop({ type: String, required: false }) size: boolean

  @Watch('isModalOpen') onIsModalToggled(): void {
    if (this.isModalOpen === true) {
      document.querySelector('body').classList.add('no-scroll')
    } else {
      document.querySelector('body').classList.remove('no-scroll')
    }
  }
}
</script>

<style lang="scss" scoped>
.overlay {
  background: rgba($black, 0.5);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
}

.modal {
  text-align: left;
  display: block;
  overflow: hidden;
  background: $white;
  position: fixed;
  z-index: 99999;
  width: auto;
  right: auto;
  bottom: auto;
  border-radius: 3px;
  padding: 20px;
  width: 94vw;
  left: 3vw;
  max-height: 90vh;
  top: 5vh;

  .modal-header {
    border-bottom: none;
  }
  .modal-footer {
    border-top: none;
  }

  &.bordered {
    .modal-header {
      border-bottom: 1px solid #ccc;
    }
    .modal-footer {
      border-top: 1px solid #ccc;
    }
  }

  @media screen and (min-width: $sm) {
    .modal {
      width: 90vw;
      left: 5vw;
    }

    &.modal-sm {
      max-width: 50vw;
      left: 25vw;
    }

    &.modal-md {
      max-width: 75vw;
      left: 12.5vw;
    }
  }
}

main {
  overflow: auto;
  max-height: 80vh;
}

// Transitions

.fade-in-enter,
.fade-in-leave-to {
  transform: translateY(0%);
}

.fade-in-down-enter,
.fade-in-down-leave-to {
  transform: translateY(-100%);
}

.fade-in-left-enter,
.fade-in-left-leave-to {
  transform: translateX(100%);
}

.fade-in-up-enter,
.fade-in-up-leave-to {
  transform: translateY(100%);
}

.fade-in-right-enter,
.fade-in-right-leave-to {
  transform: translateX(-100%);
}

.fade-in-down-enter,
.fade-in-down-leave-to,
.fade-in-left-enter,
.fade-in-left-leave-to,
.fade-in-up-enter,
.fade-in-up-leave-to,
.fade-in-enter,
.fade-in-leave-to,
.fade-in-right-enter,
.fade-in-right-leave-to {
  opacity: 0;
}

.fade-in-down-enter-active,
.fade-in-down-leave-active,
.fade-in-left-enter-active,
.fade-in-left-leave-active,
.fade-in-up-enter-active,
.fade-in-up-leave-active,
.fade-in-enter-active,
.fade-in-leave-active,
.fade-in-right-enter-active,
.fade-in-right-leave-active {
  transition: all 0.5s ease;
}
</style>
