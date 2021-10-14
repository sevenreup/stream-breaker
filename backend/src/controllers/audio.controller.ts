import { inject } from "@loopback/core";
import {
  post,
  Request,
  requestBody,
  Response,
  RestBindings,
} from "@loopback/rest";
import { FILE_UPLOAD_SERVICE } from "../keys";
import { FileUploadHandler } from "../types";
import { getFilesAndFields } from "../utils/file.util";
export class AudioController {
  constructor(
    @inject(FILE_UPLOAD_SERVICE) private handler: FileUploadHandler
  ) {}

  @post("/audio")
  async uploadAudio(
    @requestBody.file()
    request: Request,
    @inject(RestBindings.Http.RESPONSE) response: Response
  ): Promise<object> {
    return new Promise<object>((resolve, reject) => {
      this.handler(request, response, (err: unknown) => {
        if (err) {
          reject(err);
        } else {
          resolve(getFilesAndFields(request));
        }
      });
    });
  }
}
