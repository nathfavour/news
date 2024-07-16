import Joi from 'joi';
import { ValidationSchema } from '@core/interfaces/validationSchema';

const createCardsValidation: ValidationSchema = {
  body: Joi.object().keys({
    name: Joi.string(),
    title: Joi.string().required(),
    description: Joi.string(),
    svg: Joi.string(),
  }),
};

export default createCardsValidation;
