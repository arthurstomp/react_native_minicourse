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

With that setup, lets add some more tweaks for this blend application. Lets make use of `expo-router`. Lets make a page with a list of names in which clicking in the name will take the user to a new page and print the clicked name.

First lets create a new page at `app/char/[name].tsx`(code below). That file will hold the page to which the user will be transfered.

`expo-router` works with the following convention for files in the `app` directory.

- `app/index.js` matches /
- `app/home.js` matches /home
- `app/settings/index.js` matches /settings
- `app/[user].js` matches dynamic paths like /expo or /evanbacon

```typescript
// app/char/[name].tsx

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';

export default function CharPage() {
  const { name } = useLocalSearchParams();
  const clickBack = () => {
    router.back()
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Char name: {name}</Text>
      <TouchableOpacity style={styles.button} onPress={clickBack}>
        <Text style={{color: 'white'}}>Go back</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginVertical: 10
  },
  button: {
    marginVertical: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "purple",
    color: "white"
  }
});
```


```typescript
// app/index.tsx
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Select your character</Text>
      <Link style={styles.button} href="/char/luigi">Luigi</Link>
      <Link style={styles.button} href="/char/peach">Peach</Link>
      <Link style={styles.button} href="/char/toad">Toad</Link>
      <Link style={styles.button} href="/char/mario">Mario</Link>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginVertical: 10
  },
  button: {
    marginVertical: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "purple",
    color: "white"
  }
});
```

