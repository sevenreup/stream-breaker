import { BaseContext } from "koa";
import { summary, description, request } from "koa-swagger-decorator";
import { PrismaClient } from '@prisma/client';

interface UploadRequest {
    autoId: boolean;
    id: string;
    extra: any;
}

export default class AudioController {

    @request("post", "/audio")
    @summary("Welcome page")
    @description("A simple welcome message to verify the service is up and running.")
    public static async uploadAudio(context: BaseContext): Promise<void> {
        console.log(context);
    }

    public static async saveAudioJob(filename: string, data: UploadRequest): Promise<any> {
        const prisma = new PrismaClient();
        try {
            console.log(data);
            const audio = await prisma.audio.create({
                data: {
                    path: filename,
                    ref: data.id
                }
            });
            return audio;
        } catch (error) {
            throw error;
        }
    }
}