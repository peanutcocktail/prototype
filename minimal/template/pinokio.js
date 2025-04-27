module.exports = {
  version: "3.7",
  icon: "icon.png",
  menu: async (kernel, info) => {
    return [{
      default: true,
      icon: "fa-solid fa-terminal",
      text: "Shell",
      href: "shell.js",
    }]
  }
}
