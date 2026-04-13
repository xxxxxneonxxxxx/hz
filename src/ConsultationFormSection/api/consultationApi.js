export async function submitConsultationRequest(payload) {
    // Заглушка под реальный API.
    // Здесь потом можно заменить логику на fetch/axios без изменения view/model.
    await new Promise((resolve) => setTimeout(resolve, 700))

    return {
        ok: true,
        message: 'Заявка отправлена',
        payload,
    }
}
