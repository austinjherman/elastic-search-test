# Gastby Elastic Search Provider Test

## Purpose

The goal of this repo is to figure out how to use the `SearchProvider` component provided by `@elastic/react-search-ui` with Gatsby.

## The Problem

As recommended by Gatsby, I wrap the root element with the `SearchProvider` component using the `wrapRootElement` hook in the `gatsby-ssr.js` and the `gatsby-browser.js` files. (See https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/#wrapRootElement)

After doing this, running `gatsby build` results in an empty root element. The `<div id="___gatsby"></div>` element has nothing inside of it.

## Reproducing

To see what should happen, switch to `master` branch. Run `gatsby build` followed by `gatsby serve`. `curl` your local production build and note that there *is* HTML inside the root element `<div id="___gatsby"></div>`.

To see what happens when using the `SearchProvider` component, switch to `elastic-search-provider` branch. Run `gatsby build` followed by `gatsby serve`. `curl` your local production build and note that there *is not* HTML inside the root element `<div id="___gatsby"></div>`.

## Implementation
The only files I changed are `gatsby-browser.js` and `gatsby-ssr.js` to wrap the root element.