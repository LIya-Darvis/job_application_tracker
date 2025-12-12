import { CardProps } from "../entities/intefaces";

export const CardsData: CardProps[] = [
  {
    id: 1,
    name: 'Специалист по техподдержке',
    city: 'Город 1',
    price: 'от 35000 р за месяц',
    tags: [
      { text: 'Опыт 1-3 года', type: 'experience' },
      { text: 'Можно удаленно', type: 'format' },
      { text: 'Выплаты: два раза в месяц', type: 'payment' },
    ],
    description: 'Длинное описание вакансии: Lorem Ipsum is simply dummy text of the printing and typesetting industry',
  },
  {
    id: 2,
    name: 'Маркетолог',
    city: 'Город 2',
    price: 'от 35001 р за месяц',
    tags: [
      { text: 'Опыт 3-5 лет', type: 'experience' },
      { text: 'Выплаты: один раз в месяц', type: 'payment' },
    ],
    description:
      'Длинное описание вакансии: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publis',
  },
  {
    id: 3,
    name: 'Слесарь КИП и А',
    city: 'Город 3',
    price: 'от 205 000 р за месяц',
    tags: [
      { text: 'Опыт 10-12 лет', type: 'experience' },
      { text: 'Выплаты: один раз в месяц', type: 'payment' },
    ],
    description: 'Длинное описание вакансии: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make ',
  },
];