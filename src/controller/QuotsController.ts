import {Request, Response, Router} from 'express';
import {StatusCodes} from 'http-status-codes';
import logger from '../shared/Logger';
import { ParamsDictionary } from 'express-serve-static-core';
import data from "../database/kogakure-de.json"

// Init shared
const router = Router();

/******************************************************************************
 *                      Get random quoat - "GET /api/quot/random"
 ******************************************************************************/

router.get('/random', async (req: Request, res: Response) => {
    let q = data[Math.floor(Math.random() * data.length)];
    return res.status(StatusCodes.OK).json(q);
});


export default router