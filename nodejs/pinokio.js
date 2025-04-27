const fs = require('fs')
const path = require('path')
module.exports = {
  type: "prototype",
  title: "New Node.js Project",
  icon: "nodejs.png",
  description: "create a node.js project",
  run: async (kernel, input) => {
    if (input.path) {
      const folder_path = kernel.path("api", input.path)
      await fs.promises.cp(path.resolve(__dirname, "template"), folder_path, { recursive: true })
    } else {
      throw new Error("please specify a folder name")
    }
  }
}
