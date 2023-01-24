const express = require("express");
const app = express();
const helmet = require("helmet");
const cors = require("cors");
const authRouter = require("./routes/auth");
const medicationRouter = require("./routes/medications");
const session = require("express-session");
const Redis = require("ioredis");
const RedisStore  = require("connect-redis")(session); 
const server = require("http").createServer(app);
require("dotenv").config();

const redisClient = new Redis();

app.use(helmet());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    credentials: true,
    name: "sid",
    store: new RedisStore({ client: redisClient }),
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.ENVIRONMENT === "production" ? "true" : "auto",
      httpOnly: true,
      expires: 1000 * 60 * 60 * 24 * 7,
      sameSite: process.env.ENVIRONMENT === "production" ? "none" : "lax",
    },
  })
);
app.use("/auth", authRouter);

app.use("/medications", medicationRouter);


server.listen(4000, () => {
  console.log("Server listening on port 4000");
});