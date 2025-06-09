const fs = require('fs')
const path = require('path')
module.exports = {
  version: "4.0",
  title: "docsify",
  icon: "icon.png",
  description: "generate a documentation for any markdown file",
  run: [
    {
      method: "shell.run",
      params: {
        message: "npx docsify-cli init docs",
      }
    },
    {
      method: "input",
      params: {
        title: "Select a folder",
        description: "Select a local folder or a remote git to generate a documentation from",
        form: [{
          title: "Select a type",
          type: "select",
          key: "type",
          items: [{
            value: "local",
            text: "Local Folder",
          }, {
            value: "git",
            text: "Remote Git URL",
          }]
        }]
      }
    },
    {
      // jump to "local" or "git"
      method: "jump",
      params: {
        id: "{{input.type}}"
      }
    },
    {
      id: "local",
      method: "filepicker.open",
      params: {
        title: "Select a folder with README.md",
        type: "folder"
      }
    },
    {
      method: async (req, ondata, kernel) => {
        await fs.promises.cp(path.resolve(__dirname, "template"), req.cwd, { recursive: true, force: true })
        await fs.promises.cp(req.input.paths[0], path.resolve(req.cwd, 'docs'), { recursive: true, force: true })
      },
      next: null    // terminate
    },
    {
      id: "git",
      when: "{{local.type === 'git'}}",
      method: "input",
      params: {
        title: "Enter a git URL",
        form: [{
          title: "Git URL",
          key: "url",
        }]
      }
    },
    {
      method: async (req, ondata, kernel) => {
        await fs.promises.cp(path.resolve(__dirname, "template"), req.cwd, { recursive: true, force: true })
        await kernel.exec({
          message: `git clone ${req.input.url} docs`,
          path: req.cwd
        }, ondata)
      }
    },
  ]
}
