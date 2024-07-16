import httpStatus from 'http-status';
import AppError from '@core/utils/appError';
import logger from '@core/utils/logger';
import { CardsModel } from '@components/cards/cards.model';
import { ICards } from '@components/cards/cards.interface';

const create = async (cards: ICards): Promise<boolean> => {
  try {
    const newCards = await CardsModel.create(cards);
    logger.debug(`Cards created: %O`, newCards);
    return true;
  } catch (err) {
    logger.error(`Cards create err: %O`, err.message);
    throw new AppError(httpStatus.BAD_REQUEST, 'Cards was not created!');
  }
};

const read = async (id: string): Promise<ICards> => {
  logger.debug(`Sent cards.id ${id}`);
  const cards = await CardsModel.findOne({ _id: id });
  return cards as ICards;
};

const update = async (cards: ICards): Promise<boolean> => {
  try {
    const updatedCards = await CardsModel.findOneAndUpdate(
      { title: cards.title },
      // { name: cards.name },
      // { description: cards.description },
      // { svg: cards.svg },
      {
        name: cards.name,
        description: cards.description,
        svg: cards.svg,
      },
      { new: true },
    );
    logger.debug(`Cards updated: %O`, updatedCards);
    return true;
  } catch (err) {
    logger.error(`Cards update err: %O`, err.message);
    throw new AppError(httpStatus.BAD_REQUEST, 'Cards was not updated!');
  }
};

const deleteById = async (id: string): Promise<boolean> => {
  await CardsModel.findByIdAndDelete(id);
  logger.debug(`Cards ${id} has been removed`);
  return true;
};


// read all data
const readAll = async (): Promise<ICards[]> => {
  const cards = await CardsModel.find({});
  return cards;
};


export { create, read, update, deleteById, readAll };
