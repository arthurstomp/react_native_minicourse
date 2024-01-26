# Module 2 - Starting a project, interfaces and navigation

Start a blank project with a typescript template

```bash
// Start your project
$ npx create-expo-app -t expo-template-blank-typescript <your-project-name>
$ npm run android
```

The default application is very simple just offer us a single screen and not much more.
To have more interesting app with multiple screen we will need to add `expo-router` and its dependencies.
[Link to doc](https://docs.expo.dev/router/installation/)

```bash
$ npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar
```

`expo-router` requires 2 changes on the default project to work properly.
First, it's requires us to create `app/index.tsx` and copy and paste the content of `App.tsx` into it.
After that we can delete `App.tsx`, the new `app/index.tsx` will be the new entrypoint to the application.
Second, we need to change the `main` attribute at `package.json` to `"main": "expo-router/entry",`.
With both set we can restart our dev server.

```bash
$ npm run android
```

