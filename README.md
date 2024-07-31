# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Prerequisites

Install homebrew if you don't already have it by pasting and running in Terminal.

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Install Xcode via the Mac App store. If you are installing on windows you will not be able to run iOS simulators.
https://apps.apple.com/us/app/xcode/id497799835?mt=12

## Get started

1. Install Watchman

   ```bash
   brew install watchman
   ```

2. Install OpenJDK distribution called Azul Zulu using Homebrew. This distribution offers JDKs for both Apple Silicon and Intel Macs.

   Run the following commands in a terminal:

   ```bash
   brew install --cask zulu@17
   ```

3. Follow the instructions [here](https://docs.expo.dev/get-started/set-up-your-environment/?mode=development-build&buildEnv=local#set-up-android-studio) to install and configure android studio.

4. Install dependencies

   ```bash
   npm install
   ```

5. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project - start from scratch

If you want to move the demo project into a demo folder you can run the command below:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
