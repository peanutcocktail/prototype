const fs = require('fs')
const path = require('path')
module.exports = {
  version: "4.0",
  title: "New Python Project",
  icon: "python.png",
  description: "create a python project",
  create: async (kernel, input) => {
    if (input.path) {
      const folder_path = kernel.path("api", input.path)
      await fs.promises.cp(path.resolve(__dirname, "template"), folder_path, { recursive: true })
    } else {
      throw new Error("please specify a folder name")
    }
  }
}
