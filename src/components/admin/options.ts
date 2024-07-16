import { AdminJSOptions } from 'adminjs';

import componentLoader from './component-loader.js';



import { UserModel } from '../user/user.model';
import { CardsModel } from '../cards/cards.model';


const options: AdminJSOptions = {
  componentLoader,
  rootPath: '/admin',
  // resources: [],


  resources: [
    {
      resource: UserModel,
      options: {
        /* resource options */
      },
    },
    // other resources...
    {
      resource: CardsModel,
      options: {
        /* resource options */
      },
    },
  ],

  databases: [],
};

export default options;
