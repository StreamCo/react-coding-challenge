# Stan Coding Challenge

> Welcome to the Stan Coding Challenge!

## Overview

To complete this challenge, you will need to write a simple [React](https://facebook.github.io/react/) based web app, and provide us the source files to be built.

The purpose of this challenge is to assess your **skills and approach to composing a simple web app** given a set of screens and an API feed. We will also assess the **generated HTML, CSS, and JS** output.

This challenge is expected to take about 2-4 hours.

## The Challenge

It's pretty simple. Using the provided screens as a reference, you'll need to build a set of React components to render the app. You'll also need to request a JSON feed, filter that data, and use the relevant fields.

Although this is a basic exercise, we'll be looking for **simple, well-designed, performant, and tested code** in the submission.

Please include a `README` with setup instructions, and any tests or other documentation you created as part of your solution.

Also, add the following info to your `README`:

- How did you decide on the technical and architectural choices used as part of your solution?
- Are there any improvements you could make to your submission?
- What would you do differently if you were allocated more time?

## Details

You will need to build the following 3 pages with React:

- A "Home" page
- A "Series" page
- A "Movies" page

The deployable solution should be built in a folder named **`dist`** with an entry point file of **`index.html`**.

Please create components for each part of the page (eg. header, content, footer, etc).
Assets are provided in the `assets` folder.

The pages should also be usable on mobile and tablet devices.

You can assume that you do not have to support legacy browsers without features such as `fetch` or `flexbox`.

### "Home" Page

Refer to the [screens/1-home.jpg](./screens/1-home.jpg) screen.

This will be your `index.html` screen.

You will need to display 2 tiles, which link to the "Series" page and the "Movies" page.

### "Series" and "Movies" Pages

Refer to the [screens/2-series.jpg](./screens/2-series.jpg) and [screens/3-movies.jpg](./screens/3-movies.jpg) screens.

For each page you will need to fetch this JSON feed [feed/sample.json](https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json), then:

- Display the first 21 `entries`
- Where the entry has a `releaseYear` attribute value >= `2010`
- Sorted by the `title` attribute value in ascending alphanumeric order

For the "Series" page filter on:

- Where the entry has a `programType` attribute value of `series`

For the "Movies" page filter on:

- Where the entry has a `programType` attribute value of `movie`

The attributes you should use to display the entries are:

- `title`
- `images` → `Poster Art` → `url`

You will also need to handle the loading and error states of fetching the JSON feed:

- "Loading" state [screens/1.1-loading.jpg](./screens/1.1-loading.jpg)
- "Error" state [screens/1.2-error.jpg](./screens/1.2-error.jpg)

## FAQ

### What language, framework, build tool... should I use?

You may use whatever you like as long as the solution is built using [React](https://facebook.github.io/react/) or an equivalent library.

We prefer it if you did not use any third party CSS frameworks.

We also prefer the use of minimal dependencies.

## Useful Links

- [Bitbucket](https://bitbucket.org/) - Source code hosting, with free private repositories for small teams.
- [Google Fonts - Raleway](https://fonts.google.com/?selection.family=Raleway)
- [React](https://facebook.github.io/react/)

## Other Notes

Please send through any other code or projects that you're proud of and would like to share with us.

Any feedback on the coding challenge once you're done is also appreciated!
