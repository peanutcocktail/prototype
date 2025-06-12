const fs = require('fs')
const path = require('path')
module.exports = {
  version: "4.0",
  type: "extension",
  title: "AI Coding",
  icon: "icon.webp",
  description: "add claude code to the menu",
  run: [{
    method: async (req, ondata, kernel) => {
      let json = await kernel.require(req.cwd, "pinokio.json")
      console.log("json", json)
      json.plugin.menu = json.plugin.menu.concat([{
        image: "claude.png",
        text: "Claude Code",
        href: "claude.json"
      }, {
        image: "openai.webp",
        text: "OpenAI Codex",
        href: "codex.json"
      }, {
        image: "cursor.jpeg",
        text: "Cursor",
        run: "cursor ."
      }, {
        image: "windsurf.png",
        text: "Windsurf",
        run: "windsurf ."
      }])
      await fs.promises.writeFile(path.resolve(req.cwd, "pinokio.json"), JSON.stringify(json, null, 2))
    }
  }]
}
