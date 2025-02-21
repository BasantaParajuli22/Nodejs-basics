import express from 'express';
import url from 'url';
import path from 'path';

import errorHandler from './middleware/errorHandler.js';
import logger from './middleware/logger.js';
import pageNotFoundError from './middleware/notFound.js';
import routes from './routes/router.js';

const __filepath = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filepath);

const app = express();

//accessing static files using express.static
app.use(express.static(path.join( __dirname,'public')));

//middleware logger (runs for every request)
app.use(logger);

//routes
app.use( ('/api'), routes);

// error Handler (runs if no route matches)
app.use(pageNotFoundError);

//Error Handler (runs if an error is passed to next(err))
app.use(errorHandler);

app.listen( 5000 , () => {
    console.log("server running ", 5000);
})



/**
 * When a request comes in, Express tries to match it to a route or middleware.
 * 
 * The logger middleware runs first.
 * Express checks if /api/users matches any route in the routes file.
 *      If a match is found, the corresponding route handler processes the request.
 *      If no match is found, the request falls through to the next middleware.
 * If no route matches, the pageNotFoundError middleware is executed, sending a 404 response.
 * The errorHandler middleware is for handling errors (e.g., when next(err) is called)
 */