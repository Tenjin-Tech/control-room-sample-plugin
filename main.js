// Hello: the smallest Control Room plugin. Copy this repository, then change what it says and listens to.
module.exports = (api) => {
  // Added to every chat agent's instructions, at each launch. Removed when the plugin is turned off.
  api.prompt('session', 'When you finish a task, end your reply with one line that starts with "Done:".')

  // A thread changed state: working, idle, asking... Listeners are removed when the plugin is turned off.
  api.on('thread-state', (thread, state) => console.log(`[${api.id}] ${thread} is ${state}; ${api.workingAgents()} agent(s) working`))

  // Anything api.on does not undo goes here.
  api.onUnload(() => console.log(`[${api.id}] turned off`))
}
