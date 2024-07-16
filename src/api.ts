import { Router } from 'express';

import healthCheck from '@components/healthcheck/healthCheck.router';
import user from '@components/user/user.router';
import cards from '@components/cards/cards.router';


// import { adminBro, adminBroRouter } from '@components/adminbro/adminbro.router';
// import adminBroRouter from '@components/adminbro/adminbro.router';






const router: Router = Router();
router.use(healthCheck);
router.use(user);
router.use(cards);

// router.use(adminBro.options.rootPath, adminBroRouter);
// router.use('/admin', adminBroRouter);

export default router;
