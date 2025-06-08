module.exports = {
  daemon: true,
  run: [{
    method: "shell.run",
    params: {
      message: "docsify serve .",
      path: "docs",
      on: [{
        event: "/http:\/\/\\S+(?=\s|$)/m",
        done: true,
      }]
    }
  }, {
    method: "local.set",
    params: {
      url: "{{input.event[0]}}"
    }
  }]
}
