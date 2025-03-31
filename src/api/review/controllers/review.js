"use strict";

/**
 * review controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::review.review", ({ strapi }) => ({
  async create(ctx, next) {
    const user = ctx.state.user;
    const { shop, review, username, score, tags, images } =
      ctx.request.body.data;
    const userReview = await strapi.documents("api::review.review").create({
      data: {
        shop,
        review,
        username,
        score,
        images,
      },
    });

    await Promise.all(
      tags.map(async (tag) => {
        const tag_link = await strapi.documents("api::review-tag-link.review-tag-link").create({
          data: {
            review: userReview.id,
            review_tag: tag,
          },
        });
      })
    );

    return { userReview };
  },
}));
