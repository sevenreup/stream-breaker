import Koa from 'koa';
import bodyParser from "koa-bodyparser";
import serve from 'koa-static';
import path from 'path';
import uploader from './upload';

export const useMiddlewares = <T extends Koa>(app: T): T => {

    app.use(bodyParser());

    app.use(serve(path.join(__dirname, '/public')));
    app.use(uploader.routes());

    return app
}