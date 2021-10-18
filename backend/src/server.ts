import Koa from "koa";
import bodyParser from "koa-bodyparser";
import cors from "@koa/cors";
import { router } from "./routes";
import serve from 'koa-static';
import path from 'path';
import multer from 'koa-multer';

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
    ctx.body = path
});

app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});
