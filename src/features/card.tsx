import { CardProps } from '../entities/intefaces';
import { Tag } from './tag';

export const Card = (props: CardProps) => {
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
        <div className="prose prose-slate prose-sm text-slate-600">
          <p>{props.description}</p>
        </div>
      </div>
    </li>
  );
};
