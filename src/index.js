const fastify = require("fastify")({
  logger: true,
});

//db
const mongoose = require("mongoose");

//db connection
mongoose
  .connect(
    "mongodb+srv://Dk:Dinesh2626@travelondata.rspkr.mongodb.net/Data?retryWrites=true&w=majority"
  )
  .then(() => console.log("MONGODB is ready !!!"))
  .catch((err) => console.log(err));

// routes
fastify.get("/", async (request, reply) => {
  return "Welcome to travelOn Backend";
});

// starting server
const start = async () => {
  try {
    await fastify.listen(3000);
    fastify.log.info(`Server is running at &{address}`);
  } catch (error) {
    console.log(error);
  }
};

start();
