const express = require("express");
const kodersRouter = require("./koders.routes");
const mentorsRouter = require("./mentors.routes");

const app = express();
app.use(express.json());

// Middleware
app.use((request, response, next) => {
    console.log(`${request.method} ${request.url}: ${request.body}`);
    next();
});

// Middleware de autenticación
app.use((request, response, next) => {
     if (request.headers.authorization === "123") {
        next();
    } else {
        response.status(401)
        response.json({
            message: "No tienes autorización",
            success: false,
        });
    }
});

// Montar el router en el servidor
app.use("/koders", kodersRouter);
app.use("/mentors", mentorsRouter);

app.listen(8080, () => {
    console.log("Server is running");
});

