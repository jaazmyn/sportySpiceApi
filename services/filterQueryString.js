import Queries from "../db/postsQueries";

const ServiceObject = {
  filterQuery: (queryString) => {
    const { sort, search, topic } = queryString;

    if (sort) {
      return [Queries.sortedByRating];
    } else if (topic) {
      return [Queries.filterByTopic, ["%" + topic + "%"]];
    } else if (search) {
      return [Queries.searchPosts, ["%" + search + "%"]];
    } else {
      return [Queries.getAll];
    }
  },
};

export default ServiceObject;

