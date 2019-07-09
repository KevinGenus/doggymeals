# Doggy Meals

## Unit / Coverage testing using Jest and Enzyme

---

## Requirements

### Required Installations

- Node version 8 or higher
  -- `node -v` should return something like `v12.4.0`
  -- Node 10.x is already installed on pair stations
- Create-react-app
  -- `create-react-app --version` should return something like 3.0.1.
  -- install globally: `npm install -g create-react-app`
- A code editor such as vscode, sublime, vim, emacs, etc...

### Optional Installations

###### VSCode Plugins

- Jest (IDE based feedback for tests)
- Jest Snippets
- Jest Runner (right-click on the test you which you to run)

###### Sublime Plugins

- Sublime Jest (snippets)

## Setup

### Initial Setup

1. Clone this repo.
1. Open a terminal and run `yarn test`.
1. Open the project's `<rootDir>` in your editor.
1. Run `yarn start` to start the server on `http://localhost:3000`.

### Jest, Enzyme and Snapshots

Snapshot testing is a way to assert the result of a given test by generating a JSON representation of its output. This was the preferred method of component testing up to and include Jest v23; however, as of Jest v24, this is no longer the default behavior, as the snapshot captured more than the desired components children. In `package.json` exists `enzyme-to-json` as an npm package, it is called, in the same file, at `"jest": { "snapshotSerializers": [ "enzyme-to-json/serializer" ]`. This provides the same functionality as previous versions of Jest (<=23), but only captures the children.

### Development Workflow with Jest

1. For the purposes of this project, please consider the following layout: 1/3 of your screen has an active session of `yarn test`, 1/3 `src/app.js`, and `1/3 src/app.test.js`.
1. This follows the same outside-in test-first methodology. When writing a new feature, first add or modify a test, then chaneg the next-lowest level of the architecture that implements the functionality you want. Repeat until the feature is complete.
   Note: If you are required to update snapshots for a component, select the terminal running your tests and `press the letter 'U'` to update the snapshot.

## Addon

- Dogs need something to drink their meal...
- Change the title to Doggy stuff and add a Toy feature...
