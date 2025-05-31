module.exports = {
  version: "4.0",
  title: "clone",
  icon: "git.png",
  description: "clone a git project",
  run: [
    {
      method: "input",
      params: {
        title: "Git URL",
        form: [{
          title: "Enter a Git URL",
          key: "url"
        }]
      }
    },
    {
      method: "shell.run",
      params: {
        message: "git clone {{input.url}}"
      }
    }
  ]
}
