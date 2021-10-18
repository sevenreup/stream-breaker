import { PrismaClient } from "@prisma/client";
import { getAvailableFormats } from "fluent-ffmpeg";
import { promisify } from "util";

interface UploadRequest {
  autoId: boolean;
  id: string;
  extra: any;
}

export async function checkFFMPEG(): Promise<boolean> {
  try {
    await getFormarts();
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function saveAudioJob(filename: string, data: UploadRequest): Promise<any> {
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

export const getFormarts = promisify(getAvailableFormats);
