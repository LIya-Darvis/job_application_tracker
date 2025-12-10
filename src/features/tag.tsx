import { TagVariants } from '../entities/types';

enum BGColors {
  experience = 'bg-gray-200',
  format = 'bg-yellow-200',
  payment = 'bg-green-200',
}
enum TextColors {
  experience = 'text-gray-800',
  format = 'text-yellow-800',
  payment = 'text-green-800',
}

export const Tag = ({ text, type }: TagVariants) => {
  return <span className={`badge ${BGColors[type].toString()} ${TextColors[type].toString()}`}>{text}</span>;
};
