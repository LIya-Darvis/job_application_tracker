import { CardProps } from './entities/intefaces';
import { CardList } from './widgets/cardList';
import { Header } from './widgets/header';

const CardsData: CardProps[] = [
  {
    name: 'Специалист по техподдержке',
    city: 'Город 1',
    price: 'от 35000 р за месяц',
    tags: [
      { text: 'Опыт 1-3 года', type: 'experience' },
      { text: 'Можно удаленно', type: 'format' },
      { text: 'Выплаты: два раза в месяц', type: 'payment' },
    ],
    description: 'Длинное описание вакансии: ---=-=0-=-9- .=0- 0- 70..',
  },
  {
    name: 'Маркетолог',
    city: 'Город 2',
    price: 'от 35001 р за месяц',
    tags: [
      { text: 'Опыт 3-5 лет', type: 'experience' },
      { text: 'Выплаты: один раз в месяц', type: 'payment' },
    ],
    description:
      'Длинное описание вакансии: ---=-=0-=-9- .=0- 0- 70.. .7- -09 -09.- 0.9- 9-09-0 9-. .900- 9-090- 90-',
  },
  {
    name: 'Слесарь КИП и А',
    city: 'Город 3',
    price: 'от 205 000 р за месяц',
    tags: [
      { text: 'Опыт 10-12 лет', type: 'experience' },
      { text: 'Выплаты: один раз в месяц', type: 'payment' },
    ],
    description:
      'Длинное описание вакансии: -',
  },
];

function App() {
  return (
    <div className="bg-black py-32">
      <Header />
      <div className="flex md:max-w-4xl m-auto">
        <CardList data={CardsData} />
      </div>
    </div>
  );
}

export default App;
