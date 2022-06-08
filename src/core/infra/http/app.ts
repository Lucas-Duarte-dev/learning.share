import 'reflect-metadata';
import express  from 'express';
import {router} from "../../../presentation/routes";

const app = express();

app.use(express.json());

app.use(router);

export {app};