import { reactive, ref } from 'vue'
import { submitConsultationRequest } from '../api/consultationApi.js'

export function useConsultationForm() {
    const form = reactive({
        email: '',
        name: '',
        phone: '',
        offer: false,
        privacy: false,
    })

    const isSubmitting = ref(false)
    const submitState = ref('idle')
    const submitMessage = ref('')

    async function handleSubmit() {
        submitState.value = 'idle'
        submitMessage.value = ''

        if (!form.email || !form.name || !form.phone) {
            submitState.value = 'error'
            submitMessage.value = 'Заполните все поля формы.'
            return false
        }

        if (!form.offer || !form.privacy) {
            submitState.value = 'error'
            submitMessage.value = 'Подтвердите согласия перед отправкой.'
            return false
        }

        isSubmitting.value = true

        try {
            await submitConsultationRequest({
                email: form.email,
                name: form.name,
                phone: form.phone,
                offer: form.offer,
                privacy: form.privacy,
            })

            submitState.value = 'success'
            submitMessage.value = 'Заявка принята. Заглушка API сработала успешно.'

            form.email = ''
            form.name = ''
            form.phone = ''
            form.offer = false
            form.privacy = false
            return true
        } catch {
            submitState.value = 'error'
            submitMessage.value = 'Не удалось отправить форму. Проверьте интеграцию API.'
            return false
        } finally {
            isSubmitting.value = false
        }
    }

    return {
        form,
        isSubmitting,
        submitState,
        submitMessage,
        handleSubmit,
    }
}
