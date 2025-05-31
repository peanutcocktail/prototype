module.exports = {
  version: "4.0",
  title: "claude code",
  icon: "icon.webp",
  description: "run claude code",
  run: [{
    method: "shell.run",
    params: {
      input: true,
      message: "claude"
    }
  }]
}
