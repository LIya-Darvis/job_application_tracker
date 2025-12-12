import { forwardRef, useCallback, useImperativeHandle } from 'react';
import { CardProps } from '../entities/intefaces';
import { Tag } from './tag';

export const Card = forwardRef((props: CardProps, ref) => {
  const dispatchCardEvent = useCallback((data: any) => {
    const event = new CustomEvent('openCardModal', { detail: data });
    window.dispatchEvent(event);
  }, []);

  useImperativeHandle(ref, () => ({
    triggerAction: () => dispatchCardEvent(''),
  }));

  return (
    <li className="relative flex flex-col items-start rounded-lg bg-slate-50">
      <div className="order-1 space-y-4 m-6">
        <h3 className="mb-1 text-slate-900 font-semibold">
          <span className="block text-3xl leading-6 text-indigo-500">
            {props.name}
          </span>
        </h3>
        <h4 className="mb-1 text-slate-900">
          <span className="block text-2xl leading-6 text-white-500">
            {props.price}
          </span>
        </h4>

        <div className="relative flex flex-row gap-x-4 gap-y-2 flex-wrap text-sm">
          {props.tags?.map(({ text, type }, index) => {
            return <Tag key={index} text={text} type={type} />;
          })}
        </div>
        <div className="mb-1 text-slate-900">
          <p className="text-indigo-500">{props.city}</p>
        </div>
        <div className="prose prose-slate prose-sm text-slate-600 line-clamp-2">
          <p>{props.description}</p>
        </div>

        <div>
          <button
            className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-white-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 mt-3"
            onClick={() => dispatchCardEvent(props.id)}
          >
            Посмотреть детали
          </button>
        </div>
      </div>
    </li>
  );
});
