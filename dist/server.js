"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
// Load environment variables
dotenv_1.default.config();
const dbUri = process.env.MONGODB_URI;
const PORT = process.env.PORT;
async function bootstrap() {
    await mongoose_1.default.connect(dbUri);
    console.log("DB connected!");
    app_1.default.listen(PORT ?? 3000, () => console.log(`DevLink API running at http://localhost:${PORT}`));
}
try {
    bootstrap();
}
catch (err) {
    console.log(`FATAL ERROR: ${err}`);
}
//# sourceMappingURL=server.js.map