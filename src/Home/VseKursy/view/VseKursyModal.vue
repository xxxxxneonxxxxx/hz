<template>
  <Teleport to="body">
    <Transition name="vse-kursy-modal-fade">
      <div
        v-if="modelValue"
        class="vse-kursy-modal"
        @click.self="closeModal"
      >
        <div class="vse-kursy-modal__dialog" role="dialog" aria-modal="true">
          <button
            type="button"
            class="vse-kursy-modal__close"
            aria-label="Закрыть модальное окно"
            @click="closeModal"
          >
            ×
          </button>

          <ConsultationFormBody
            :section="section"
            modal
            @submitted="closeModal"
          />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { onBeforeUnmount, watch } from 'vue'
import ConsultationFormBody from '../../../ConsultationFormSection/view/ConsultationFormBody.vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  section: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['update:modelValue'])

function closeModal() {
  emit('update:modelValue', false)
}

function handleKeydown(event) {
  if (event.key === 'Escape' && props.modelValue) {
    closeModal()
  }
}

watch(
  () => props.modelValue,
  (isOpen) => {
    if (typeof document === 'undefined') return
    document.body.style.overflow = isOpen ? 'hidden' : ''
  }
)

if (typeof window !== 'undefined') {
  window.addEventListener('keydown', handleKeydown)
}

onBeforeUnmount(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('keydown', handleKeydown)
  }

  if (typeof document !== 'undefined') {
    document.body.style.overflow = ''
  }
})
</script>

<style scoped>
.vse-kursy-modal {
  position: fixed;
  inset: 0;
  z-index: 12000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px;
  background: var(--color--consultation-form-modal-overlay);
}

.vse-kursy-modal__dialog {
  position: relative;
  width: min(100%, 860px);
  max-height: calc(100vh - 64px);
  overflow: auto;
  padding: 44px 40px 40px;
  border-radius: 28px;
  background: var(--color--consultation-form-modal-surface);
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.28);
}

.vse-kursy-modal__close {
  position: absolute;
  top: 18px;
  right: 18px;
  width: 40px;
  height: 40px;
  border: 0;
  border-radius: 999px;
  background: transparent;
  color: var(--color--consultation-form-modal-close);
  font-size: 34px;
  line-height: 1;
  cursor: pointer;
}

.vse-kursy-modal-fade-enter-active,
.vse-kursy-modal-fade-leave-active {
  transition: opacity 0.22s ease;
}

.vse-kursy-modal-fade-enter-from,
.vse-kursy-modal-fade-leave-to {
  opacity: 0;
}

@media (max-width: 900px) {
  .vse-kursy-modal {
    padding: 16px;
  }

  .vse-kursy-modal__dialog {
    width: 100%;
    max-height: calc(100vh - 32px);
    padding: 38px 20px 24px;
    border-radius: 20px;
  }

  .vse-kursy-modal__close {
    top: 10px;
    right: 10px;
  }
}
</style>
