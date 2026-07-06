const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/auth.routes");
const errorHandler = require("./middlewares/error.middleware");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./docs/swagger");
const promptRoutes = require("./routes/prompt.routes");
const collectionRoutes = require("./routes/collection.routes");
const tagRoutes = require("./routes/tag.routes");
const aiRoutes = require("./routes/ai.routes");

const app = express();

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
}));

app.use(express.json());
app.use(cookieParser());
app.use(errorHandler);

app.use("/api/v1/auth", authRoutes);
app.use("/api-docs",swaggerUi.serve,swaggerUi.setup(swaggerSpec));
app.use("/api/v1/prompts", promptRoutes);
app.use("/api/v1/collections", collectionRoutes);
app.use("/api/v1/tags", tagRoutes);
app.use("/api/v1/ai", aiRoutes);


app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "AI PromptVault API Running 🚀"
    })
})


module.exports = app;