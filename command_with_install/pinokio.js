const fs = require('fs')
const path = require('path')
module.exports = {
  version: "4.0",
  type: "init",
  title: "installable command launcher",
  icon: "minimal.png",
  description: "create a launcher for ANY command, with an initial install step",
  run: [
    {
      method: "input",
      params: {
        title: "Installable Command Launcher",
        form: [{
          title: "Start command",
          key: "start"
        }, {
          title: "Install command",
          key: "install"
        }, {
          title: "Install check folder",
          description: "Enter the folder path to check in order to determine if already installed",
          key: "check"
        }]
      }
    },
    {
      method: async (req, ondata, kernel) => {
        await fs.promises.cp(path.resolve(__dirname, "template"), req.cwd, { recursive: true })
        await fs.promises.writeFile(path.resolve(req.cwd, "install.json"), JSON.stringify({
          run: [{
            method: "shell.run",
            params: {
              message: req.input.install
            }
          }]
        }, null, 2))
        await fs.promises.writeFile(path.resolve(req.cwd, "start.json"), JSON.stringify({
          run: [{
            method: "shell.run",
            params: {
              input: true,
              message: [ req.input.start ]
            }
          }]
        }, null, 2))
        await fs.promises.writeFile(path.resolve(req.cwd, "check.json"), JSON.stringify({
          path: req.input.check
        }, null, 2))

      }
    }
  ]
}
