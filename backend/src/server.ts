import { createServer } from "./config/app";

(async () => {
    try {
        const PORT = 4000
        const app = await createServer();
        app.listen(PORT, () => {
            console.log(`Server running on port http://localhost:${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
})();



