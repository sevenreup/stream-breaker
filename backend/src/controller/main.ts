import { checkFFMPEG } from '../services/audio.service';
import { Controller, Get } from 'routing-controllers';
import { Service } from 'typedi';

@Controller()
@Service()
export class MainController {

    @Get('/')
    helloWorld() {
        return "Hello World!";
    }

    @Get("/status")
    async checkStatus() {
        try {
            const status = await checkFFMPEG();
            return {
                ffmpeg: status,
            };
        } catch (error) {
            return {
                ffmpeg: false,
            };
        }
    }
}

