import { Router } from 'express';

import healthCheck from '@components/healthcheck/healthCheck.router';
import user from '@components/user/user.router';
import cards from '@components/cards/cards.router';


// import { adminBro, adminBroRouter } from '@components/adminbro/adminbro.router';
// import adminBroRouter from '@components/adminbro/adminbro.router';

import { buildAuthenticatedRouter } from '@adminjs/express';
import AdminJS from 'adminjs';
import provider from './admin/auth-provider.js';
import options from './admin/options.js';


const admin = new AdminJS(options);



const router: Router = Router();





const routerAdmin = buildAuthenticatedRouter(
    admin,
    {
      cookiePassword: process.env.COOKIE_SECRET,
      cookieName: 'adminjs',
      provider,
    },
    null,
    {
      secret: process.env.COOKIE_SECRET,
      saveUninitialized: true,
      resave: true,
    },
  );


router.use(admin.options.rootPath, router);





router.use(healthCheck);
router.use(user);
router.use(cards);

// router.use(adminBro.options.rootPath, adminBroRouter);
// router.use('/admin', adminBroRouter);

export default router;
