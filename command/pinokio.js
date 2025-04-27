const fs = require('fs')
const path = require('path')
module.exports = {
  type: "prototype",
  title: "command launcher",
  icon: "minimal.png",
  description: "create a launcher for ANY command",
  input: [{
    title: "Command",
    key: "command"
  }],
  run: async (kernel, input) => {
    if (input.path) {
      const folder_path = kernel.path("api", input.path)
      await fs.promises.cp(path.resolve(__dirname, "template"), folder_path, { recursive: true })
      const script = {
        "run": [{
          "method": "shell.run",
          "params": {
            "input": true,
            "message": input.command
          }
        }]
      }
      await fs.promises.writeFile(path.resolve(folder_path, "start.json"), JSON.stringify(script, null, 2))

    } else {
      throw new Error("please specify a folder name")
    }
  }
}
