import Queries from "../db/queries";

const ServiceObject = {
  filterQuery: (queryString) => {
    const { sort, search, topic } = queryString;
    let queryArguements;

    if (sort) {
      queryArguements = [Queries.sortedByRating];
    } else if (topic) {
      queryArguements = [
        Queries.filterByTopic,
        ["%" + topic.toLowerCase() + "%"],
      ];
    } else if (search) {
      queryArguements = [
        Queries.searchPosts,
        ["%" + search.toLowerCase() + "%"],
      ];
    } else {
      queryArguements = [Queries.getAll];
    }
    return queryArguements;
  },
};

export default ServiceObject;
