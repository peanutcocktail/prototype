const fs = require('fs')
const path = require('path')
module.exports = {
  version: "4.0",
  type: "extension",
  title: "AI Coding",
  icon: "icon.jpg",
  description: "add claude code to the menu",
  run: [{
    method: async (req, ondata, kernel) => {
      let json = await kernel.require(req.cwd, "pinokio.json")
      console.log("json", json)
      json.plugin.menu = json.plugin.menu.concat([{
        image: "/prototype/system/aicode/claude.png",
        text: "Claude Code",
        href: "/run/prototype/system/aicode/claude.json"
      }, {
        image: "/prototype/system/aicode/openai.webp",
        text: "OpenAI Codex",
        href: "/run/prototype/system/aicode/codex.json"
      }, {
        image: "/prototype/system/aicode/cursor.jpeg",
        text: "Cursor",
        run: "cursor ."
      }, {
        image: "/prototype/system/aicode/windsurf.png",
        text: "Windsurf",
        run: "windsurf ."
      }])
      await fs.promises.writeFile(path.resolve(req.cwd, "pinokio.json"), JSON.stringify(json, null, 2))
    }
  }]
}
