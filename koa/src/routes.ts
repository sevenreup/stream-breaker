import { SwaggerRouter } from "koa-swagger-decorator";
import { main } from "./controller";

let router = new SwaggerRouter();

router.get('/', main.helloWorld)

router.swagger({
    title: "Stream server",
    description: "Description her.",
    version: "0.0.1"
});
router.mapDir(__dirname);

export { router }