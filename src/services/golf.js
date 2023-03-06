// use lirary called acios to do GET/POST requests

import http from "../http-common";

class GolfDataService {
  // all the functions for api calls to mongoDB
  // default page 0, http get request to base url.
  getNextTournament() {
    return http.get("/5kstats/golf");
  }

  getPlayerStats() {
    // console.log(id)
    return http.get("/5kstats/golf/stats");
  }
}

export default new GolfDataService();
