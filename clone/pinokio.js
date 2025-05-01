module.exports = {
  version: "4.0",
  title: "clone",
  icon: "git.png",
  description: "clone a git project",
  input: [{
    title: "Git URL",
    key: "url"
  }],
  create: async (kernel, input) => {
    if (input.path) {
      await kernel.exec({
        message: `git clone ${input.url} ${input.path}`,
        path: kernel.path("api")
      }, (e) => {
        process.stdout.write(e.raw)
      })
    } else {
      throw new Error("please specify a folder name")
    }
  }
}
