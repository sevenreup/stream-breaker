import { FfmpegCommand, getAvailableFormats, Formats } from "fluent-ffmpeg";
import { promisify } from "util";

export async function checkFFMPEG(): Promise<boolean> {
  try {
    await getFormarts();
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export const getFormarts = promisify(getAvailableFormats);
