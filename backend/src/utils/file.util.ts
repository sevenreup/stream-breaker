import { Request } from "@loopback/rest";

export function getFilesAndFields(request: Request) {
  const uploadedFiles = request.files;
  const mapper = (f: globalThis.Express.Multer.File) => ({
    fieldname: f.fieldname,
    originalname: f.originalname,
    encoding: f.encoding,
    mimetype: f.mimetype,
    size: f.size,
  });
  let files: object[] = [];
  if (Array.isArray(uploadedFiles)) {
    files = uploadedFiles.map(mapper);
  } else {
    for (const filename in uploadedFiles) {
      files.push(...uploadedFiles[filename].map(mapper));
    }
  }
  return { files, fields: request.body };
}
