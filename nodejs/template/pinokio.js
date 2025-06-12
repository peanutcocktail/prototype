module.exports = {
  version: "4.0",
  icon: "icon.png",
  menu: async (kernel, info) => {
    let installed = info.exists("app/node_modules")
    let cmds = ["cursor", "windsurf", "code", ].filter((cmd) => {
      return kernel.which(cmd)
    }).map((cmd) => {
      return {
        text: cmd.toUpperCase(),
        href: "app",
        command: cmd
      }
    })
    cmds.push({
      icon: "fa-solid fa-terminal",
      text: "Shell",
      href: "shell.js"
    })
    let running = {
      install: info.running("install.js"),
      start: info.running("start.js"),
      update: info.running("update.js"),
      reset: info.running("reset.js"),
      shell: info.running("shell.js"),
    }
    if (running.install) {
      return [{
        id: "shell",
        icon: "fa-solid fa-plug",
        text: "Installing",
        href: "install.js",
      }]
    } else if (installed) {
      let menu = [{
        icon: "fa-solid fa-up-right-from-square",
        text: "Open in...",
        menu: cmds,
      }, {
        icon: "fa-solid fa-power-off",
        text: "Server",
        href: "start.js",
      }, {
        icon: "fa-solid fa-plug",
        text: "Install",
        href: "install.js",
      }, {
        icon: "fa-solid fa-plug",
        text: "Update",
        href: "update.js",
      }, {
        icon: "fa-regular fa-circle-xmark",
        text: "<div><strong>Reset</strong><div>Revert to pre-install state</div></div>",
        href: "reset.js",
        confirm: "Are you sure you wish to reset the app?"
      }]
      let local = info.local("start.js")
      if (local && local.url) {
        menu = [{
          icon: "fa-solid fa-rocket",
          text: "Open Web UI",
          href: local.url,
        }].concat(menu)
      }
      if (running.shell) {
        menu = [{
          icon: "fa-solid fa-terminal",
          text: "Shell",
          href: "shell.js"
        }].concat(menu)
      }
      return menu
    } else {
      return [{
        default: true,
        icon: "fa-solid fa-plug",
        text: "Install",
        href: "install.js",
      }]
    }
  }
}
