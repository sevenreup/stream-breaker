import { BaseContext } from "koa";
import { request, summary, path, body, responsesAll, tagsAll, description } from "koa-swagger-decorator";
import { checkFFMPEG } from '../services/audio.service';

@tagsAll(["Main"])
export default class MainController {

    @request("get", "/")
    @summary("Welcome page")
    @description("A simple welcome message to verify the service is up and running.")
    public static async helloWorld(context: BaseContext): Promise<void> {
        context.body = "Hello World!";
    }

    @request("get", "/status")
    @summary("Welcome page")
    @description("A simple welcome message to verify the service is up and running.")
    public static async checkStatus(context: BaseContext): Promise<void> {
        try {
            const status = await checkFFMPEG();
            context.body = {
                ffmpeg: status,
            };
        } catch (error) {
            context.body = {
                ffmpeg: false,
            };
        }
    }
}

