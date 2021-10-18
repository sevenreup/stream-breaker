import Koa from "koa";
import bodyParser from "koa-bodyparser";
import cors from "@koa/cors";
import { router } from "./routes";
import serve from 'koa-static';
import path from 'path';
import multer from 'koa-multer';
import AudioController from "./controller/audio";

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'static/uploads')
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})
const upload = multer({ storage })

const app = new Koa();
const PORT = 4000

app.use(bodyParser());
app.use(cors());

app.use(serve(path.join(__dirname, '/public')));

app.use(router.routes())
router.post('/upload/audio', upload.single('audio'), async (ctx, next) => {
    const { originalname, path, mimetype } = (ctx.req as any).file;
    try {
        ctx.body = await AudioController.saveAudioJob(path, (ctx.req as any).body)
    } catch (error) {
        ctx.status = 500
        ctx.app.emit('error', error)
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});
