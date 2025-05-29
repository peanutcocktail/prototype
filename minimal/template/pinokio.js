module.exports = {
  version: "3.7",
  icon: "icon.png",
  menu: async (kernel, info) => {
    return [{
      icon: "fa-brands fa-github",
      text: "Login",
      shell: {
        message: "gh auth login --web",
        input: true
      }
    }, {
      icon: "fa-brands fa-github",
      text: "Create a repo",
      shell: {
        message: "gh repo create",
        input: true
      }
    }, {
      icon: "fa-brands fa-github",
      text: "Publish to Github",
      shell: {
        message: "gh repo create --public --source=. --push"
      }
    }]
  }
}
