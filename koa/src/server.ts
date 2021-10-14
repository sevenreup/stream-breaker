import Koa from "koa";
import bodyParser from "koa-bodyparser";
import cors from "@koa/cors";
import { router } from "./routes";

const app = new Koa();
const PORT = 4000

app.use(cors());
app.use(bodyParser());
app.use(router.routes())

app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});
