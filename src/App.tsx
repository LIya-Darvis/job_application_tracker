import { useEffect, useRef, useState } from 'react';
import { CardProps } from './entities/intefaces';
import { CardList } from './widgets/cardList';
import { Header } from './widgets/header';
import { CardModal } from './widgets/cardModal';
import { CardsData } from './shared/cardsData';

export const App = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentCard, setCurrentCard] = useState<CardProps | null>(null);

  const btnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleCardEvent = (event: CustomEvent) => {
      const cardData = CardsData.filter((item) => item.id === event.detail);
      setCurrentCard(cardData[0]);
      setIsModalOpen(true);
    };

    window.addEventListener('openCardModal', handleCardEvent as EventListener);

    return () => {
      window.removeEventListener(
        'openCardModal',
        handleCardEvent as EventListener
      );
    };
  }, []);

  return (
    <div className="bg-black py-32">
      {isModalOpen && currentCard && (
        <CardModal
        data={currentCard}
        innerRef={btnRef}
        />
      )}
      <Header />
      <div className="flex md:max-w-4xl m-auto">
        <CardList data={CardsData} />
      </div>
    </div>
  );
};
