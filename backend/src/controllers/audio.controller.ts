import { inject } from "@loopback/core";
import {
  post,
  Request,
  requestBody,
  Response,
  RestBindings,
} from "@loopback/rest";

export class AudioController {
  constructor(
    @inject(FILE_UPLOAD_SERVICE) private handler: FileUploadHandler
  ) {}
}
