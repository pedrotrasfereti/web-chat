import express from "express";

const PORT = process.env.PORT;
const app = express();

app.get('/', (_request, response) => {
  return response.json({ message: "Hello World" });
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
