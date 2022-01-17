const express = require("express");
const app = express();
app.use(express.json());

const { selectAllMessages, addMessage } = require("./message");

// The "/messages" can vary student can type anything
// The purpose is get all the messages
app.get("/messages", async (req, res) => {
  const list = await selectAllMessages();
  res.json(list);
});

// The "/messages" can vary student can type anything
// The purpose is add new message
app.post("/add-message", async (req, res) => {
  const user = req.body;
  await addMessage(user);
  res.json({ message: "Message Added Successfully" });
});

// The PORT NUMBER Also can vary.
app.listen(4000, () => console.log("this is optional, server started"));
