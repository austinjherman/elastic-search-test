/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

const React = require('react');
const SiteSearchAPIConnector = require("@elastic/search-ui-site-search-connector").default;
const { SearchProvider } = require("@elastic/react-search-ui");

const connector = new SiteSearchAPIConnector({
  engineKey: "Z41R5U3Hi4s5gp1aw7kA",
  documentType: "national-parks"
});

exports.wrapRootElement = ({ element }) => (
  <SearchProvider config={{
    apiConnector: connector,
    autocompleteQuery: {
      results: {
        result_fields: {
          title: {snippet: {size: 100, fallback: true}},
          body: {snippet: {size: 100, fallback: true}},
          url: {raw: {}}
        },
        size: 10
      },
    },
    searchQuery: {
      result_fields: {
        title: {snippet: {size: 100, fallback: true}},
        url: {raw: {}},
        body: {snippet: {size: 300,fallback: true}}
      },
    },
    onSearch: (state, queryConfig, next) => {
      // const updatedState = someStateTransformation(state);
      // return next(updatedState, queryConfig);
      console.log("running onSearch!");
      return next(state, queryConfig);
    }
  }}>
    {element}
  </SearchProvider>
);
