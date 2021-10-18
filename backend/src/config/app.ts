import "reflect-metadata";
import { createKoaServer, useContainer } from 'routing-controllers';
import { Container } from 'typedi';
import AudioController from "../controller/audio";
import { MainController } from "../controller/main";
import { useMiddlewares } from "./middleware";

export const createServer = async () => {
    useContainer(Container);
    const app = createKoaServer(
        {
            cors: true,
            controllers: [MainController, AudioController]
        });

    useMiddlewares(app);
    return app;
}