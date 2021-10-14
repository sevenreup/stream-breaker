import { SwaggerRouter } from "koa-swagger-decorator";
import { audio, main } from "./controller";

let router = new SwaggerRouter();

router.get('/', main.helloWorld)
router.get('/status', main.checkStatus)



router.swagger({
    title: "Stream server",
    description: "Description her.",
    version: "0.0.1"
});
router.mapDir(__dirname);

export { router }