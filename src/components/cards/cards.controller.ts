import { Request, Response } from 'express';
import httpStatus from 'http-status';
import {
  create,
  read,
  update,
  deleteById,
  readAll,
} from '@components/cards/cards.service';
import { ICards } from '@components/cards/cards.interface';

const createCards = async (req: Request, res: Response) => {
  const cards = req.body as ICards;
  await create(cards);
  res.status(httpStatus.CREATED);
  return res.send({ message: 'Created' });
};

const readCards = async (req: Request, res: Response) => {
  res.status(httpStatus.OK);
  res.send({ message: 'Read', output: await read(req.params.id) });
};

const updateCards = async (req: Request, res: Response) => {
  const cards = req.body as ICards;
  await update(cards);
  res.status(httpStatus.OK);
  res.send({ message: 'Updated' });
};

const deleteCards = async (req: Request, res: Response) => {
  await deleteById(req.params.title);
  res.status(httpStatus.ACCEPTED);
  res.send({ message: 'Removed' });
};


const readAllCards = async (req: Request, res: Response) => {
  const cards = await readAll(); // Assuming read function can be used without parameters to fetch all
  res.status(httpStatus.OK).send({ message: 'All Cards Read', output: cards });
};

export { createCards, readCards, updateCards, deleteCards, readAllCards };

// const readAllCards = async (req: Request, res: Response) => {
//   const cards = await readAll(); // Assuming readAll is a function that fetches all cards
//   res.status(httpStatus.OK).send({ message: 'Read All', output: cards });
// };

// export { createUser, readUser, updateUser, deleteUser };
// export { createCards, readCards, updateCards, deleteCards };
