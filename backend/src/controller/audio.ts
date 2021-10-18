import { BaseContext } from "koa";
import { Controller, Get } from "routing-controllers";

@Controller()
export default class AudioController {

    @Get('/stuff')
    uploadAudio() {
        console.log("audio");
    }
}