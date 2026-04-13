export const HOME_CONSULTATION_FORM = {
    title: 'Бесплатная консультация',
    fields: [
        {
            id: 'email',
            name: 'email',
            type: 'email',
            placeholder: 'Введите ваш эл. адрес',
            autocomplete: 'email',
        },
        {
            id: 'name',
            name: 'name',
            type: 'text',
            placeholder: 'Введите ваше имя',
            autocomplete: 'name',
        },
        {
            id: 'phone',
            name: 'phone',
            type: 'tel',
            placeholder: 'Введите ваш телефон',
            autocomplete: 'tel',
        },
    ],
    submitLabel: 'Записаться',
    agreements: [
        {
            id: 'offer',
            prefix: 'Я согласен с условиями ',
            linkLabel: 'Оферты',
            linkHref: '#',
        },
        {
            id: 'privacy',
            prefix: 'Я согласен на обработку моих персональных данных. С ',
            linkLabel: 'Политикой обработки персональных данных',
            linkHref: '#',
            suffix: ' ознакомлен.',
        },
    ],
}