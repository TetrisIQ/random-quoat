import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import express, {Request, Response, NextFunction} from 'express';
import {StatusCodes} from 'http-status-codes';
import logger from './shared/Logger';
import morgan from "morgan";
import QuotsController from "./controller/QuotsController";

// Init express
const app = express();

// Swagger parts
//const router = require('express').Router();



/************************************************************************************
 *                              Set basic express settings
 ***********************************************************************************/

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

// Show routes called in console during development
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Security
if (process.env.NODE_ENV === 'production') {
    app.use(helmet());
}

// Add APIs
app.use('/api/quot', QuotsController);

// Print API errors
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    logger.error(err.message, err);
    return res.status(StatusCodes.BAD_REQUEST).json({
        error: err.message,
    });
});

// Export express instance
export default app;
