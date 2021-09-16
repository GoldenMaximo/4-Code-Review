# 4-Code-Review (GitHub Repo Search App)

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

3. (OPTIONAL) Get yourself a [NASA API key](https://api.nasa.gov/) or use my own (avaliable upon request).

4. Create an .env file with the following properties:

```
NEXT_PUBLIC_GITHUB_SEARCH_ENDPOINT=* (E.g.: https://api.github.com/search/)
NEXT_PUBLIC_NASA_PLANETARY_ENDPOINT=* (E.g: https://api.nasa.gov/planetary/)
NEXT_PUBLIC_NASA_APOD_KEY=*
```

_The planetary endpoint could very well be fixed however, setting all endpoints on .env is a project pattern I impose._

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

## Known issues

-   [NASA's APOD API is somewhat slow and will sometimes throw 504 GATEWAY_TIMEOUT.](https://github.com/nasa/apod-api#api-reliability)
-   NASA's APOD API video results that are hosted on 'https://apod.nasa.gov/' won't play because they set 'X-Frame-Options' to 'sameorigin'.
-   [Next.js will sometimes give a server side warning about Ant Design trying to use useLayoutEffect under the hood.](https://github.com/ant-design/ant-design/issues/30396)

## Things to keep in mind for further development

-   Pages must have .page.tsx exention.
-   Do not create /components level components unless you plan to use them in more than one page/component.
-   Texts are stored in `texts` object variables with alphabet letters as key and text as value, it sucks but I haven't found anything better yet. Alternative pattern suggestions are welcome.

## Things to keep in mind for audit

-   Brave Browser and other privacy oriented browsers will block stuff from NASA's embedded videos, filling up the console with "blocked by client" errors.

## Useful links that weighed heavily on key technical decisions / Project direction & patterns.

-   [Why would I need to freeze an object in JavaScript?](https://stackoverflow.com/q/14791302/10088643)
-   [Any performance benefit to "locking down" JavaScript objects?](https://stackoverflow.com/q/8435080/10088643)
-   [When should you NOT use React memo?](https://stackoverflow.com/questions/53074551/when-should-you-not-use-react-memo)

## Performance

TODO: Performance audit

## Meta

This entire project was overdone (too big of a stack for such a small feature-set) with the sole intent and purpose of showcasing skill.
It is a good example of how I would normally code and perform on real applications.
A similar project concept can be found [here](https://github.com/GoldenMaximo/Github-User-Query) altough bear in mind that it does not accurately represent my abilities and stack preferences anymore.
This project is a closer rendition of what I would do in a real project. Nevertheless, the core concept and small feature set are too simple to properly and accurately depict the full extent of a real final product.
