const fs = require('fs')
module.exports = {
  version: "4.0",
  title: "docsify",
  icon: "icon.png",
  description: "generate a documentation for any markdown file",
  run: [
    {
      method: "filepicker.open",
      params: {
        title: "Select a folder with README.md",
        type: "folder"
      }
    },
    {
      method: "shell.run",
      params: {
        message: "npx docsify-cli init ."
      }
    },
    {
      method: async (req, ondata, kernel) => {
        await fs.promises.cp(path.resolve(__dirname, "template/pinokio.js"), path.resolve(req.cwd, "pinokio.js"))
        await fs.promises.cp(req.input.paths[0], ".", { recursive: true, force: true })
      }
    },
  ]
}
