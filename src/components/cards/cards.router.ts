import { Router } from 'express';

import protectedByApiKey from '@core/middlewares/apiKey.middleware';
import validation from '@core/middlewares/validate.middleware';
import {
  createCards,
  readCards,
  updateCards,
  readAllCards,
  deleteCards,
} from './cards.controller';
import createCardsValidation from './createCards.validation';

const router: Router = Router();

// e.g. createCards request's body is validated and protected by api-key
router.post(
  '/cards/',
  [protectedByApiKey, validation(createCardsValidation)],
  createCards,
);
router.get('/cards/:id', readCards);

router.put(
  '/cards/:id',
  [protectedByApiKey, validation(createCardsValidation)],
  updateCards,
);

router.get('/cards/', readAllCards);

router.delete('/cards/:id', [protectedByApiKey], deleteCards);


export default router;
