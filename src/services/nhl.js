// use lirary called acios to do GET/POST requests

import http from "../http-common";

class GolfDataService {
  // all the functions for api calls to mongoDB
  // default page 0, http get request to base url.
  getNhlAggregates() {
    return http.get("/5kstats/nhl/aggregates");
  }

  getNhlGoalieStats() {
    // console.log(id)
    return http.get("/5kstats/nhl/goalie/stats");
  }
}

export default new GolfDataService();