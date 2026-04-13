<template>
  <div class="consultation-form-body" :class="{ 'consultation-form-body--modal': modal }">
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
</template>

<script setup>
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

async function submitForm() {
  const isSuccess = await handleSubmit()

  if (isSuccess) {
    emit('submitted')
  }
}
</script>

<style scoped>
.consultation-form-body--modal .consultation-form__title {
  margin-bottom: 28px;
}

.consultation-form__title {
  margin: 0 0 36px;
  text-align: center;
  color: var(--color--consultation-form-title-text);
  font-size: var(--font-size--consultation-form-title);
  font-weight: 700;
  line-height: 1.15;
}

.consultation-form__form {
  display: flex;
  flex-direction: column;
  gap: 26px;
}

.consultation-form__input {
  width: 100%;
  min-height: 86px;
  padding: 0 28px;
  border: 1px solid var(--color--consultation-form-input-border);
  background: var(--color--consultation-form-input-bg);
  color: var(--color--consultation-form-input-text);
  font-size: var(--font-size--consultation-form-input);
}

.consultation-form__input::placeholder {
  color: var(--color--consultation-form-input-placeholder);
}

.consultation-form__submit {
  align-self: center;
  min-width: 290px;
  min-height: 76px;
  margin-top: 10px;
  padding: 0 28px;
  border: 0;
  border-radius: 999px;
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
  text-decoration: none;
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

@media (max-width: 900px) {
  .consultation-form__title {
    font-size: var(--font-size--consultation-form-title-mobile);
  }

  .consultation-form__input {
    min-height: 72px;
    font-size: var(--font-size--consultation-form-input-mobile);
  }

  .consultation-form__submit {
    width: 100%;
    min-width: 0;
    min-height: 68px;
    font-size: var(--font-size--consultation-form-button-mobile);
  }

  .consultation-form__agreement {
    font-size: var(--font-size--consultation-form-agreement-mobile);
  }
}
</style>
