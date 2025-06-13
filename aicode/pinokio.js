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
        text: "AI Coding",
        image: ".pinokio/system/aicode/icon.jpg?raw=true",
        menu: [{
          image: ".pinokio/system/aicode/claude.png?raw=true",
          text: "Claude Code",
          href: ".pinokio/system/aicode/claude.json"
        }, {
          image: ".pinokio/system/aicode/openai.webp?raw=true",
          text: "OpenAI Codex",
          href: ".pinokio/system/aicode/codex.json"
        }, {
          image: ".pinokio/system/aicode/cursor.jpeg?raw=true",
          text: "Cursor",
          run: "cursor ."
        }, {
          image: ".pinokio/system/aicode/windsurf.png?raw=true",
          text: "Windsurf",
          run: "windsurf ."
        }]
      }])
      await fs.promises.writeFile(path.resolve(req.cwd, "pinokio.json"), JSON.stringify(json, null, 2))
      await fs.promises.cp(path.resolve(__dirname, "template"), path.resolve(req.cwd, ".pinokio/system"), { recursive: true })
    }
  }]
}
