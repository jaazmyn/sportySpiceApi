import Queries from "../db/queries";

const ServiceObject = {
  filterQuery: (queryString) => {
    const { sort, search, topic } = queryString;
    let queryArguments;

    if (sort) {
      queryArguments = [Queries.sortedByRating];
    } else if (topic) {
      queryArguments = [
        Queries.filterByTopic,
        ["%" + topic + "%"],
      ];
    } else if (search) {
      queryArguments = [
        Queries.searchPosts,
        ["%" + search + "%"],
      ];
    } else {
      queryArguments = [Queries.getAll];
    }
    return queryArguments;
  },
};

export default ServiceObject;
