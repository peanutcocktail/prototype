module.exports = {
  version: "4.0",
//  icon: "icon.png",
  menu: async (kernel, info) => {
    return [{
      default: true,
      icon: "fa-solid fa-power-off",
      text: "Start",
      shell: {
        message: "docsify serve .",
        path: "docs"
      }
    }]
  }
}
