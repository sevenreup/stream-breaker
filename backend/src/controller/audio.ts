import { Controller, Get } from "routing-controllers";
import { Service } from "typedi";

@Controller()
@Service()
export default class AudioController {

    @Get('/stuff')
    uploadAudio() {
        console.log("audio");
    }
}