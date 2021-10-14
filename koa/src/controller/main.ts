import { BaseContext } from "koa";
import { request, summary, path, body, responsesAll, tagsAll, description } from "koa-swagger-decorator";

@tagsAll(["Main"])
export default class MainController {

    @request("get", "/")
    @summary("Welcome page")
    @description("A simple welcome message to verify the service is up and running.")
    public static async helloWorld(context: BaseContext): Promise<void> {
        context.body = "Hello World!";
    }
}