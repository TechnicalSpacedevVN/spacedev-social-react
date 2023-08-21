module.exports = {
  client: {
    service: {
      name: "mern",
      url: "http://localhost:8000/graphql",

      // optional headers
      // headers: {
      //   authorization: "Bearer lkjfalkfjadkfjeopknavadf",
      // },
      // optional disable SSL validation check
    },
    skipSSLValidation: true,
  },
};
