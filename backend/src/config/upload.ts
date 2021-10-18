import Router from 'koa-router';
import multer from 'koa-multer';
import { saveAudioJob } from "../services/audio.service";


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'static/uploads')
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})

const upload = multer({ storage })

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

export default router