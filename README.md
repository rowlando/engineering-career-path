# Engineering Career Framework

## Installing and running

### Dependencies

- [Node JS](http://nodejs.org/)

### Installation

Clone the repository:

```
git clone
```

Next, install the Node packages:

```
npm install
```

### Build locally

Run eleventy:

```shell
# Searches the current directory, outputs to ./_site
npx @11ty/eleventy
```

Re-run Eleventy when you save:

```shell
# Boot up a Browsersync web server to apply changes and
# refresh automatically. We’ll also --watch for you.
npx @11ty/eleventy --serve
```

### Building the assets
The CSS is generated from [govuk-frontend](https://www.npmjs.com/package/govuk-frontend), with a few customisations in [src/scss/custom.scss](). 

If you need to change the style, recompile the sass:

```
npx gulp css
```

You can copy the fonts and images from [govuk-frontend](https://www.npmjs.com/package/govuk-frontend) by running:

```
npx gulp assets
```

**Note**: To reduce build-time, the the CSS is pre-compiled and the images and fonts are stored in this repo.

## Releasing

TODO: Use a GitHub Action to deploy to GitHub Pages
