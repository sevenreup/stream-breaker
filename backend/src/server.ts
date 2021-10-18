import "reflect-metadata";
import bodyParser from "koa-bodyparser";
import serve from 'koa-static';
import path from 'path';
import multer from 'koa-multer';
import { createKoaServer } from 'routing-controllers';
import { MainController } from "./controller/main";
import { saveAudioJob } from "./services/audio.service";
import Router from 'koa-router';
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'static/uploads')
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})

const upload = multer({ storage })

const app = createKoaServer(
    {
        cors: true,
        controllers: [MainController]
    });
const PORT = 4000

app.use(bodyParser());

app.use(serve(path.join(__dirname, '/public')));
var router = new Router();
router.post('/upload/audio', upload.single('audio'), async (ctx, next) => {
    const { originalname, path, mimetype } = (ctx.req as any).file;
    try {
        ctx.body = await saveAudioJob(path, (ctx.req as any).body)
    } catch (error) {
        ctx.status = 500
        ctx.app.emit('error', error)
    }
});
app.use(router.routes());

app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});
