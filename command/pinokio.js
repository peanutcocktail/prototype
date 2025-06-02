const fs = require('fs')
const path = require('path')
module.exports = {
  version: "4.0",
  title: "command launcher",
  icon: "minimal.png",
  description: "create a launcher for ANY command",
  run: [
    {
      method: "input",
      params: {
        title: "Command Launcher",
        form: [{
          title: "Enter a command",
          key: "command"
        }]
      }
    },
    {
      method: async (req, ondata, kernel) => {
        await fs.promises.cp(path.resolve(__dirname, "template"), req.cwd, { recursive: true })
        await fs.promises.writeFile(path.resolve(req.cwd, "start.json"), JSON.stringify({
          run: [{
            method: "shell.run",
            params: {
              input: true,
              message: req.input.command
            }
          }]
        }, null, 2))
      },
    }
  ]
}
