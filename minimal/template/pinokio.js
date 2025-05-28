module.exports = {
  version: "3.7",
  icon: "icon.png",
  menu: async (kernel, info) => {
    return [{
      default: true,
      icon: "fa-solid fa-terminal",
      text: "Shell",
      href: "shell.js",
    }, {
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
