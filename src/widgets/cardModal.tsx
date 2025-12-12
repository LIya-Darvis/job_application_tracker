import { forwardRef, useCallback, useImperativeHandle } from 'react';
import { CardProps } from '../entities/intefaces';
import { Tag } from '../features/tag';

interface ChildProps {
    data: CardProps;
    innerRef: React.Ref<HTMLDivElement>;
}

export const CardModal = ({data, innerRef}: ChildProps) => {
  const dispatchCardEvent = useCallback((data: any) => {
    const event = new CustomEvent('openCardModal', { detail: data });
    window.dispatchEvent(event);
  }, []);

  return (
    <div
      id="login-popup"
      className="bg-black/50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 h-full items-center justify-center flex"
    >
      <div className="relative p-4 w-full max-w-md h-full md:h-auto">
        <div className="relative bg-white rounded-lg shadow">
          <button
            type="button"
            onClick={() => dispatchCardEvent(null)}
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center popup-close"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="#c6c7c7"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              ></path>
            </svg>
            <span className="sr-only">Close popup</span>
          </button>

          <div className="p-5 order-1 space-y-4 m-2">
            <h3 className="mb-1 text-slate-900 font-semibold">
              <span className="block text-2xl leading-10 text-indigo-500">
                {data.name}
              </span>
            </h3>
            <h4 className="mb-1 text-slate-900">
              <span className="block text-2xl leading-6 text-white-500">
                {data.price}
              </span>
            </h4>
            <div className="relative flex flex-row gap-x-4 gap-y-2  flex-wrap text-sm">
              {data.tags?.map(({ text, type }, index) => {
                return <Tag key={index} text={text} type={type} />;
              })}
            </div>
            <div className="mb-1 text-slate-900">
          <p className="text-indigo-500">{data.city}</p>
        </div>
        <div className="prose prose-slate prose-sm text-slate-600">
          <p>{data.description}</p>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};
