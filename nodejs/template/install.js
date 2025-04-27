module.exports = {
  run: [
    {
      method: "shell.run",
      params: {
        path: "app",
        message: [
          "pnpm install -g @anthropic-ai/claude-code"
        ],
      }
    },
    {
      method: "shell.run",
      params: {
        path: "app",
        message: [
          "pnpm install"
        ],
      }
    },
  ]
}
