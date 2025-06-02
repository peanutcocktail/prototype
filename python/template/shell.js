module.exports = {
  run: [{
    method: "shell.start",
    params: {
      message: "{{args.message ? args.message : ''}}",
      path: "app",
      input: true
    }
  }]
}
