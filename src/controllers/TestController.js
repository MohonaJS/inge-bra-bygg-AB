exports.index = (req, res) => {
  res.status(200).json({ status: "ok", data: "index" });
};

exports.create = (req, res) => {
  res.status(201).json({ status: "ok", data: "create" });
};
