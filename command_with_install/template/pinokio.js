const check = require('./check.json')
module.exports = {
  version: "3.7",
  icon: "icon.png",
  menu: async (kernel, info) => {
    let installed = info.exists(check.path)
    console.log({ installed })
    let running = {
      install: info.running("install.json"),
      start: info.running("start.json"),
    }
    if (running.install) {
      return [{
        default: true,
        icon: "fa-solid fa-plug",
        text: "Installing",
        href: "install.json",
      }]
    } else if (installed) {
      if (running.start) {
        return [{
          default: true,
          icon: 'fa-solid fa-terminal',
          text: "Terminal",
          href: "start.json",
        }]
      } else {
        return [{
          icon: "fa-solid fa-power-off",
          text: "Start",
          href: "start.json",
        }]
      }
    } else {
      return [{
        default: true,
        icon: "fa-solid fa-plug",
        text: "Install",
        href: "install.json",
      }]
    }
  }
}
