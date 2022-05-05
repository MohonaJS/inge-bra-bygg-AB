const dashboard = (req, res) => {
  res.send("client Dashboard");
};

const createMessage = (req, res) => {
  let { message } = req.body;
  res.send(message);
};

module.exports = {
  dashboard,
  createMessage,
};
