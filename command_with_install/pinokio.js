const fs = require('fs')
const path = require('path')
module.exports = {
  type: "prototype",
  title: "installable command launcher",
  icon: "minimal.png",
  description: "create a launcher for ANY command, with an initial install step",
  input: [{
    title: "Install command",
    key: "install"
  }, {
    title: "Start command",
    key: "start"
  }],
  run: async (kernel, input) => {
    if (input.path) {
      const folder_path = kernel.path("api", input.path)
      await fs.promises.cp(path.resolve(__dirname, "template"), folder_path, { recursive: true })
      const install_script = {
        "run": [{
          "method": "shell.run",
          "params": {
            "input": true,
            "message": input.install
          }
        }]
      }
      await fs.promises.writeFile(path.resolve(folder_path, "install.json"), JSON.stringify(install_script, null, 2))

      const start_script = {
        "run": [{
          "method": "shell.run",
          "params": {
            "input": true,
            "message": [
              input.start
            ]
          }
        }]
      }
      await fs.promises.writeFile(path.resolve(folder_path, "start.json"), JSON.stringify(start_script, null, 2))

    } else {
      throw new Error("please specify a folder name")
    }
  }
}
