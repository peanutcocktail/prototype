module.exports = {
  type: "prototype",
  title: "clone",
  icon: "git.png",
  description: "clone a git project",
  input: [{
    title: "Git URL",
    key: "url"
  }],
  run: async (kernel, input) => {
    if (input.path) {
      // copy the template
      const folder_path = kernel.path("api", input.path)
      await fs.promises.cp(path.resolve(__dirname, "template"), folder_path, { recursive: true })

      // clone the remote git repository
      await kernel.exec({
        message: `git clone ${input.url} app`,
        path: folder_path
      }, (e) => {
        process.stdout.write(e.raw)
      })
    } else {
      throw new Error("please specify a folder name")
    }
  }
}
