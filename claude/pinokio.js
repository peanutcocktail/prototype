const fs = require('fs')
module.exports = {
  version: "4.0",
  title: "claude code",
  icon: "icon.webp",
  description: "add claude code to the menu",
  run: [{
    method: "shell.run",
    params: {
      message: "npm install -g @anthropic-ai/claude-code",
    }
  }, {
    method: async (req, ondata, kernel) => {
      let json = await kernel.require(req.cwd, "pinokio.json")
      console.log("json", json)
      console.log("cwd", req.cwd)
      json.plugin.menu.push({
        text: "Claude Code",
        shell: {
          message: "claude",
          input: true
        }
      })
      console.log({ json })
      await fs.promises.writeFile(path.resolve(req.cwd, "pinokio.json"), JSON.stringify(json, null, 2)
    }
  }]
}
