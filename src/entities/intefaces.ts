import { TagVariants } from './types';

export interface CardProps {
  name: string;
  price?: string;
  tags?: TagVariants[];
  city?: string;
  description?: string;
}
