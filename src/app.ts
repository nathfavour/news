import express, { Application } from 'express';

import api from 'api';
import lusca from 'lusca';
import httpContext from 'express-http-context';
import expressMongoSanitize from 'express-mongo-sanitize';
import consts from '@config/consts';
import httpLogger from '@core/utils/httpLogger';
import errorHandling from '@core/middlewares/errorHandling.middleware';
import uniqueReqId from '@core/middlewares/uniqueReqId.middleware';
import http404 from '@components/404/404.router';
import swaggerApiDocs from '@components/swagger-ui/swagger.router';
import db from '@db';

import AdminJS from 'adminjs';
import options from './components/admin/options.js'


// db.connect();

const app: Application = express();


// const admin = new AdminJS(options);
// if (process.env.NODE_ENV === 'production') {
//     await admin.initialize();
//   } else {
//     admin.watch();
//   }



// Wrap DB connection and AdminJS initialization in an async function
async function initializeApp() {
  await db.connect();

  const admin = new AdminJS(options);
  if (process.env.NODE_ENV === 'production') {
    await admin.initialize();
  } else {
    admin.watch();
  }
}

initializeApp().catch(console.error);




app.use(lusca.xssProtection(true));
app.use(expressMongoSanitize());
app.use(httpContext.middleware);
app.use(httpLogger.successHandler);
app.use(httpLogger.errorHandler);
app.use(uniqueReqId);
app.use(express.json());
app.use(consts.API_ROOT_PATH, api);
app.use(swaggerApiDocs);
app.use(http404);

app.use(errorHandling);

export default app;
