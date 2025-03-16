// module.exports = [
//   "strapi::logger",
//   "strapi::errors",
//   /* Replace 'strapi::security', with this snippet */
//   /* Beginning of snippet */
//   {
//     name: "strapi::security",
//     config: {
//       contentSecurityPolicy: {
//         useDefaults: true,
//         directives: {
//           "connect-src": ["'self'", "https:"],
//           "img-src": [
//             "'self'",
//             "data:",
//             "blob:",
//             "dl.airtable.com",
//             "wonwon-files.sgp1.digitaloceanspaces.com",
//           ],
//           "media-src": [
//             "'self'",
//             "data:",
//             "blob:",
//             "dl.airtable.com",
//             "wonwon-files.sgp1.digitaloceanspaces.com",
//           ],
//           upgradeInsecureRequests: null,
//         },
//       },
//     },
//   },
//   /* End of snippet */
//   "strapi::cors",
//   "strapi::poweredBy",
//   "strapi::query",
//   "strapi::body",
//   "strapi::session",
//   "strapi::favicon",
//   "strapi::public",
// ];


module.exports = [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
