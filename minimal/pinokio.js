const fs = require('fs')
const path = require('path')
module.exports = {
  version: "4.0",
  title: "minimal",
  icon: "minimal.png",
  description: "create a minimal project",
  create: async (kernel, input) => {
    if (input.path) {
      const folder_path = kernel.path("api", input.path)
      await fs.promises.cp(path.resolve(__dirname, "template"), folder_path, { recursive: true })
    } else {
      throw new Error("please specify a folder name")
    }
  }
}
