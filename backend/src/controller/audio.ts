import { BaseContext } from "koa";
import { summary, description, request } from "koa-swagger-decorator";
import { checkFFMPEG } from "../services/audio.service";
import path from "path";
import os from 'os';
import fs from 'fs/promises';
import mime from 'mime-types';

interface UploadRequest {
    files: any;
    fields: any;
}

export default class AudioController {

    @request("post", "/audio")
    @summary("Welcome page")
    @description("A simple welcome message to verify the service is up and running.")
    public static async uploadAudio(context: BaseContext): Promise<void> {
        console.log(context);
        
        // try {
        //     const { path, name, type } = (context.body as UploadRequest).files.avatar
        //     const fileExtension = mime.extension(type)
        //     console.log(`path: ${path}`)
        //     console.log(`filename: ${name}`)
        //     console.log(`type: ${type}`)
        //     console.log(`fileExtension: ${fileExtension}`)
        //     await fs.copy(path, `public/avatars/${name}`)
        //     context.body = 'uploaded';
        // } catch (err) {
        //     console.log(`error ${err.message}`)
        //     context.body = { error: { message: err.message } }
        // }
    }
}