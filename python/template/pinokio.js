module.exports = {
  version: "3.7",
  icon: "icon.png",
  menu: async (kernel, info) => {
    let installed = info.exists("app/env")
    console.log({ installed })
    let cmds = ["cursor", "windsurf", "code", ].filter((cmd) => {
      return kernel.which(cmd)
    }).map((cmd) => {
      return {
        text: cmd.toUpperCase(),
        href: "app",
        command: cmd
      }
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
        default: true,
        icon: "fa-solid fa-plug",
        text: "Installing",
        href: "install.js",
      }]
    } else if (installed) {
      if (running.shell) {
        return [{
          icon: "fa-solid fa-terminal",
          text: "Shell",
          href: "shell.js",
        }, {
          icon: "fa-solid fa-up-right-from-square",
          text: "Open in...",
          menu: cmds,
        }, {
          icon: "fa-solid fa-power-off",
          text: "Start",
          href: "start.js",
        }, {
          icon: "fa-solid fa-plug",
          text: "Update",
          href: "update.js",
        }, {
          icon: "fa-solid fa-plug",
          text: "Install",
          href: "install.js",
        }, {
          icon: "fa-regular fa-circle-xmark",
          text: "<div><strong>Reset</strong><div>Revert to pre-install state</div></div>",
          href: "reset.js",
          confirm: "Are you sure you wish to reset the app?"

        }]
      } else if (running.start) {
        let local = info.local("start.js")
        if (local && local.url) {
          return [{
            default: true,
            icon: "fa-solid fa-rocket",
            text: "Open Web UI",
            href: local.url,
          }, {
            icon: 'fa-solid fa-terminal',
            text: "Terminal",
            href: "start.js",
          }, {
            icon: "fa-solid fa-up-right-from-square",
            text: "Open in...",
            menu: cmds,
          }, {
            icon: "fa-solid fa-terminal",
            text: "Shell",
            href: "shell.js",
          }]
        } else {
          return [{
            default: true,
            icon: 'fa-solid fa-terminal',
            text: "Terminal",
            href: "start.js",
          }, {
            icon: "fa-solid fa-up-right-from-square",
            text: "Open in...",
            menu: cmds,
          }, {
            icon: "fa-solid fa-terminal",
            text: "Shell",
            href: "shell.js",
          }]
        }
      } else if (running.update) {
        return [{
          default: true,
          icon: 'fa-solid fa-terminal',
          text: "Updating",
          href: "update.js",
        }]
      } else if (running.reset) {
        return [{
          default: true,
          icon: 'fa-solid fa-terminal',
          text: "Resetting",
          href: "reset.js",
        }]
      } else {
        return [{
          default: true,
          icon: "fa-solid fa-terminal",
          text: "Shell",
          href: "shell.js",
        }, {
          icon: "fa-solid fa-up-right-from-square",
          text: "Open in...",
          menu: cmds,
        }, {
          icon: "fa-solid fa-power-off",
          text: "Start",
          href: "start.js",
        }, {
          icon: "fa-solid fa-plug",
          text: "Update",
          href: "update.js",
        }, {
          icon: "fa-solid fa-plug",
          text: "Install",
          href: "install.js",
        }, {
          icon: "fa-regular fa-circle-xmark",
          text: "<div><strong>Reset</strong><div>Revert to pre-install state</div></div>",
          href: "reset.js",
          confirm: "Are you sure you wish to reset the app?"

        }]
      }
    } else {
      return [{
        default: true,
        icon: "fa-solid fa-plug",
        text: "Install",
        href: "install.js",
      }, {
        icon: "fa-solid fa-terminal",
        text: "Shell",
        href: "shell.js",
      }]
    }
  }
}
