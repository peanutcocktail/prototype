const fs = require('fs')
const path = require('path')
module.exports = {
  version: "4.0",
  title: "New Python Project",
  icon: "python.png",
  description: "create a python project",
  run: [{
    method: async (req, ondata, kernel) => {
      await fs.promises.cp(path.resolve(__dirname, "template"), req.cwd, { recursive: true })
    }
  }]
}
