# Control Room sample plugin

A template for a [Control Room](https://github.com/Tenjin-Tech/control-room) community plugin. Click **Use this template** to start yours.

`main.js` gives every agent one line of instructions and logs when a thread changes state. The plugin API is documented in [Tenjin-Tech/control-room](https://github.com/Tenjin-Tech/control-room/blob/main/docs/plugins.md).

## Try it

```sh
git clone https://github.com/Tenjin-Tech/control-room-sample-plugin ~/.nightshift/control-room/plugins/hello
```

The folder name must be the manifest's `id`. Turn it on in **Settings › Community plugins**. Any change to its files turns it off until you turn it on again.

## Make it yours

1. In `manifest.json`, set `id` (lowercase letters, digits and `-`), `name`, `description`, and `version` (`x.y.z`). Keep `access: "full"`.
2. Edit `main.js`. Everything the plugin needs goes in its own folder: Control Room approves exactly the files in it.
3. Say in this README what the plugin sends over the network and why, and whether it needs an account or payment.

## Publish it

1. Create a GitHub release whose tag is the manifest's `version` (for example `1.0.0`), and attach the plugin's files to it: `manifest.json`, `main.js` and any other file it needs, all flat (no folders).
2. Open a pull request on [Tenjin-Tech/control-room](https://github.com/Tenjin-Tech/control-room) that adds your plugin to `plugins.json`.

Control Room then lists it under **Available**, installs that release's files, and offers each newer version as an update.

## License

MIT
