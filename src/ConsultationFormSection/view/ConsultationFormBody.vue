<template>
  <div
    class="consultation-form-body"
    :class="{ 'consultation-form-body--modal': modal }"
    :style="bodyStyle"
  >
    <div class="consultation-form-body__layout">
      <div class="consultation-form-body__content">
        <h2 class="consultation-form__title">{{ section.title }}</h2>

        <form class="consultation-form__form" @submit.prevent="submitForm">
          <input
            v-for="field in section.fields"
            :key="field.id"
            v-model="form[field.name]"
            :type="field.type"
            :name="field.name"
            :placeholder="field.placeholder"
            :autocomplete="field.autocomplete"
            class="consultation-form__input"
          />

          <button
            type="submit"
            class="consultation-form__submit"
            :disabled="isSubmitting"
          >
            {{ isSubmitting ? 'Отправка...' : section.submitLabel }}
          </button>

          <label
            v-for="agreement in section.agreements"
            :key="agreement.id"
            class="consultation-form__agreement"
          >
            <input
              v-model="form[agreement.id]"
              type="checkbox"
              class="consultation-form__checkbox"
            />
            <span>
              {{ agreement.prefix }}
              <a :href="agreement.linkHref" class="consultation-form__agreement-link">
                {{ agreement.linkLabel }}
              </a>
              {{ agreement.suffix ?? '' }}
            </span>
          </label>

          <p
            v-if="submitMessage"
            class="consultation-form__message"
            :class="{
              'consultation-form__message--success': submitState === 'success',
              'consultation-form__message--error': submitState === 'error',
            }"
          >
            {{ submitMessage }}
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import consultationPhoto from '../../Home/Details/assets/165.jpg'
import { useConsultationForm } from '../model/useConsultationForm.js'

const props = defineProps({
  section: {
    type: Object,
    required: true,
  },
  modal: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['submitted'])

const {
  form,
  isSubmitting,
  submitState,
  submitMessage,
  handleSubmit,
} = useConsultationForm()

const bodyStyle = computed(() => {
  if (props.modal) {
    return undefined
  }

  return {
    '--consultation-form-bg-image': `url('${consultationPhoto}')`,
  }
})

async function submitForm() {
  const isSuccess = await handleSubmit()

  if (isSuccess) {
    emit('submitted')
  }
}
</script>

<style scoped>
.consultation-form-body {
  background: var(--color--consultation-form-bg);
}

.consultation-form-body__layout {
  display: block;
}

.consultation-form-body__content {
  min-width: 0;
  max-width: var(--size--consultation-section-container-max);
  margin: 0 auto;
  padding:
    var(--size--consultation-section-padding-y)
    var(--spacing--page-x)
    var(--size--consultation-section-padding-y);
}

.consultation-form-body--modal .consultation-form__title {
  margin-bottom: 28px;
}

.consultation-form__title {
  margin: 0 0 36px;
  text-align: left;
  color: var(--color--consultation-form-title-text);
  font-size: var(--font-size--consultation-form-title);
  font-family: var(--font--body);
  font-weight: 700;
  line-height: 1.08;
  letter-spacing: -0.02em;
}

.consultation-form__form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.consultation-form__input {
  width: 100%;
  min-height: 86px;
  padding: 0 28px;
  border: 1px solid var(--color--consultation-form-input-border);
  border-radius: 18px;
  background: var(--color--consultation-form-input-bg);
  color: var(--color--consultation-form-input-text);
  font-size: var(--font-size--consultation-form-input);
  line-height: 1.2;
}

.consultation-form__input::placeholder {
  color: var(--color--consultation-form-input-placeholder);
}

.consultation-form__submit {
  align-self: center;
  min-width: 260px;
  min-height: 68px;
  margin-top: 6px;
  padding: 0 30px;
  border: 0;
  border-radius: 16px;
  background: var(--color--consultation-form-button-bg);
  color: var(--color--consultation-form-button-text);
  font-size: var(--font-size--consultation-form-button);
  font-weight: 700;
  cursor: pointer;
}

.consultation-form__submit:disabled {
  opacity: 0.7;
  cursor: default;
}

.consultation-form__agreement {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  color: var(--color--consultation-form-agreement-text);
  font-size: var(--font-size--consultation-form-agreement);
  line-height: 1.45;
}

.consultation-form__checkbox {
  margin-top: 4px;
}

.consultation-form__agreement-link {
  color: var(--color--consultation-form-agreement-link);
  text-decoration: underline;
  text-underline-offset: 0.14em;
}

.consultation-form__message {
  margin: 0;
  font-size: var(--font-size--consultation-form-message);
  line-height: 1.4;
}

.consultation-form__message--success {
  color: var(--color--consultation-form-message-success);
}

.consultation-form__message--error {
  color: var(--color--consultation-form-message-error);
}

@media (min-width: 1200px) {
  .consultation-form-body:not(.consultation-form-body--modal) {
    background-image:
      linear-gradient(
        90deg,
        rgba(255, 255, 255, 0.92) 0%,
        rgba(255, 255, 255, 0.88) 38%,
        rgba(255, 255, 255, 0.56) 58%,
        rgba(255, 255, 255, 0.18) 100%
      ),
      var(--consultation-form-bg-image);
    background-position: left top, center right;
    background-repeat: no-repeat;
    background-size: 100% 100%, cover;
  }

  .consultation-form-body:not(.consultation-form-body--modal) .consultation-form-body__content {
    max-width: none;
    width: min(100%, 1460px);
    display: grid;
    grid-template-columns: minmax(320px, clamp(340px, 34vw, 500px)) minmax(360px, 1fr);
    column-gap: clamp(24px, 4vw, 88px);
    padding:
      clamp(48px, 4.4vw, 72px)
      clamp(28px, 3.6vw, var(--spacing--page-x))
      clamp(52px, 4.8vw, 76px);
  }

  .consultation-form-body:not(.consultation-form-body--modal) .consultation-form__title {
    grid-column: 1;
    margin-bottom: clamp(24px, 2.6vw, 42px);
    font-size: clamp(34px, 3vw, var(--font-size--consultation-form-title));
  }

  .consultation-form-body:not(.consultation-form-body--modal) .consultation-form__form {
    grid-column: 1;
    max-width: none;
    gap: clamp(12px, 1.1vw, 18px);
  }

  .consultation-form-body:not(.consultation-form-body--modal) .consultation-form__input {
    min-height: clamp(62px, 4.2vw, 76px);
    padding: 0 clamp(16px, 1.5vw, 24px);
    font-size: clamp(22px, 1.4vw, 32px);
  }

  .consultation-form-body:not(.consultation-form-body--modal) .consultation-form__submit {
    min-width: clamp(190px, 13vw, 230px);
    min-height: clamp(54px, 3.8vw, 62px);
    margin-top: clamp(2px, 0.6vw, 6px);
    padding: 0 clamp(20px, 1.7vw, 26px);
    font-size: clamp(16px, 1.1vw, 22px);
  }

  .consultation-form-body:not(.consultation-form-body--modal) .consultation-form__agreement {
    gap: clamp(10px, 1vw, 14px);
    font-size: clamp(16px, 1.15vw, var(--font-size--consultation-form-agreement));
  }

  .consultation-form-body:not(.consultation-form-body--modal) .consultation-form__checkbox {
    transform: scale(clamp(0.92, 0.96vw, 1));
    transform-origin: top left;
  }
}

@media (max-width: 900px) {
  .consultation-form-body__content {
    padding:
      var(--size--consultation-section-padding-y-mobile)
      var(--spacing--page-x-mobile)
      var(--size--consultation-section-padding-y-mobile);
  }

  .consultation-form__title {
    margin-bottom: 28px;
    font-size: var(--font-size--consultation-form-title-mobile);
  }

  .consultation-form__input {
    min-height: 72px;
    padding: 0 20px;
    font-size: var(--font-size--consultation-form-input-mobile);
  }

  .consultation-form__submit {
    width: 100%;
    min-width: 0;
    min-height: 60px;
    font-size: var(--font-size--consultation-form-button-mobile);
  }

  .consultation-form__agreement {
    font-size: var(--font-size--consultation-form-agreement-mobile);
    gap: 10px;
  }
}
</style>
