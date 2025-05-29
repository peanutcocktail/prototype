module.exports = {
  version: "3.7",
  icon: "icon.png",
  menu: async (kernel, info) => {
    return [{
      icon: "fa-brands fa-github",
      text: "Create a repo",
      shell: {
        message: [
          "gh auth login",
          "gh repo create",
        ],
        input: true
      }
    }, {
      icon: "fa-brands fa-github",
      text: "Publish to Github",
      shell: {
        message: "git push"
      }
    }]
  }
}
