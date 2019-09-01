const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("govuk-frontend");
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true
  });

  eleventyConfig.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(
      "dd LLLL yyyy"
    );
  });
};
