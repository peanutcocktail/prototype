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
      let menu = []
      if (json && json.plugin && json.plugin.menu) {
        menu = json.plugin.menu
      }
      menu.push({
        text: "Claude Code",
        shell: {
          message: "claude",
          input: true
        }
      })
      if (json.plugin) {
        json.plugin.menu = menu
      } else {
        json.plugin = { menu }
      }
    }
  }]
}
