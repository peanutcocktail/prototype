const fs = require('fs')
const path = require('path')
module.exports = {
  version: "4.0",
  title: "Clone a Node.js Project",
  icon: "nodejs.png",
  description: "clone a node.js project",
  input: [{
    title: "Git URL",
    description: "Enter a git url to clone from",
    key: "url"
  }],
  create: async (kernel, input) => {
    if (input.path) {
      // copy the template
      const folder_path = kernel.path("api", input.path)
      await fs.promises.cp(path.resolve(__dirname, "template"), folder_path, { recursive: true })

      // clone the remote git repository
      await kernel.exec({
        message: `git clone ${input.url} app`,
        path: folder_path
      }, (e) => {
        process.stdout.write(e.raw)
      })
    } else {
      throw new Error("please specify a folder name")
    }
  }
}
