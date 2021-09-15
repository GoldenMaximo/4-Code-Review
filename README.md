# For Code Review

> A client-side application that queries the GitHub API with a little bit of NASA imagery sprinkled on top.

#### Built with:

-   [TypeScript](https://www.typescriptlang.org/) - Language used for the project.
-   [React.js](https://nodejs.org/en/) - JavaScript Framework.
-   [Next.js](https://nextjs.org/) - React Framework.
-   [Ant Design](https://ant.design/) - Design system / Components lib.
-   [Redux Toolkit](https://redux-toolkit.js.org/) - State & services/API management.
-   [Styled-Components](https://styled-components.com/) - CSS-in-JS solution.
-   [GitHub API](https://docs.github.com/en/rest) - Used to query repos, issues and stuff alike.
-   [NASA APOD API](https://github.com/nasa/apod-api) - Used to query images.

## Installation

_Make sure to have [Git](http://git-scm.com/) and [Node.js](http://nodejs.org/) 10.0.0 (or higher) installed._

1. Clone it or fork it.

2. Once you have your local copy, install its dependencies with a package manager (here we're going to be using npm):

```
npm install
```

3. Create an .env file with the following properties:

```
NEXT_PUBLIC_GITHUB_SEARCH_ENDPOINT=* (E.g.: https://api.github.com/search/)
```

## Running

After having installed the dependencies and having configured .env, you can then build the application with:

```
npm run build
```

Then after the build is done, start the application with:

```
npm run start
```

_This will start the server at `localhost:3000`_

## Testing

This project has no testing yet.

## Meta

This entire project was overdone (too big of a stack for such a small feature-set) with the sole intent and purpose of showcasing skill.
It is a good example of how I would normally code and perform on real applications.
A similar project concept can be found [here](https://github.com/GoldenMaximo/Github-User-Query) altough bear in mind that it does not accurately represent my abilities and stack preferences anymore.
This project is a closer rendition of what I would do in a real project. Nevertheless, the core concept and small feature set are too simple to properly and accurately depict the full extent of a real final product.
