import { inject } from "@loopback/core";
import {
  Request,
  RestBindings,
  get,
  response,
  ResponseObject,
} from "@loopback/rest";
import { checkFFMPEG } from "../services/audio.service";

export class MainController {
  constructor(@inject(RestBindings.Http.REQUEST) private req: Request) {}

  @get("/check")
  @response(200, {})
  async checkStatus(): Promise<object> {
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
