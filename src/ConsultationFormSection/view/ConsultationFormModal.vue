<template>
  <Teleport to="body">
    <Transition name="consultation-modal-fade">
      <div
        v-if="modelValue"
        class="consultation-modal"
        @click.self="closeModal"
      >
        <div class="consultation-modal__dialog" role="dialog" aria-modal="true">
          <button
            type="button"
            class="consultation-modal__close"
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
import ConsultationFormBody from './ConsultationFormBody.vue'

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
.consultation-modal {
  position: fixed;
  inset: 0;
  z-index: 12000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px;
  background: var(--color--consultation-form-modal-overlay);
}

.consultation-modal__dialog {
  position: relative;
  width: min(100%, 860px);
  max-height: calc(100vh - 64px);
  overflow: auto;
  padding: 44px 40px 40px;
  border-radius: 28px;
  background: var(--color--consultation-form-modal-surface);
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.28);
}

.consultation-modal__close {
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

.consultation-modal-fade-enter-active,
.consultation-modal-fade-leave-active {
  transition: opacity 0.22s ease;
}

.consultation-modal-fade-enter-from,
.consultation-modal-fade-leave-to {
  opacity: 0;
}

@media (max-width: 900px) {
  .consultation-modal {
    padding: 16px;
  }

  .consultation-modal__dialog {
    width: 100%;
    max-height: calc(100vh - 32px);
    padding: 38px 20px 24px;
    border-radius: 20px;
  }

  .consultation-modal__close {
    top: 10px;
    right: 10px;
  }
}
</style>
