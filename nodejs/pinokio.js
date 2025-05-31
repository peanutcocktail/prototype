const fs = require('fs')
const path = require('path')
module.exports = {
  version: "4.0",
  title: "New Node.js Project",
  icon: "nodejs.png",
  description: "create a node.js project",
  run: [{
    method: async (req, ondata, kernel) => {
      await fs.promises.cp(path.resolve(__dirname, "template"), req.cwd, { recursive: true })
    }
  }]
}
