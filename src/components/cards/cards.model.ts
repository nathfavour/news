import mongoose from 'mongoose';
import { ICards } from './cards.interface';

const cardsSchema = new mongoose.Schema<ICards>({
  name: { type: String },
  title: { type: String },
  description: { type: String },
  svg: { type: String },
});

const CardsModel = mongoose.model<ICards>('Cards', cardsSchema);

// eslint-disable-next-line import/prefer-default-export
export { CardsModel };
