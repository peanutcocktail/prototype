const fs = require('fs')
const path = require('path')
module.exports = {
  version: "4.0",
  type: "plugin",
  title: "claude code",
  icon: "icon.webp",
  description: "add claude code to the menu",
  run: [{
    method: "shell.run",
    params: {
      message: "npm install -g @anthropic-ai/claude-code",
    }
  }, {
    method: "filepicker.open",
    params: {
      type: "folder",
      title: "Select a path to run Claude code from",
    }
  }, {
    method: async (req, ondata, kernel) => {
      let cwd = req.input.paths[0]
      let json = await kernel.require(req.cwd, "pinokio.json")
      console.log("json", json)
      console.log("cwd", req.cwd)
      json.plugin.menu.push({
        icon: "fa-solid fa-laptop-code",
        text: "Claude Code",
        shell: {
          message: "claude",
          path: cwd,
          input: true
        }
      })
      console.log({ json })
      await fs.promises.writeFile(path.resolve(req.cwd, "pinokio.json"), JSON.stringify(json, null, 2))
    }
  }]
}
