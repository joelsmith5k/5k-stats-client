// use lirary called acios to do GET/POSST requests

import http from "../http-common";

class GolfDataService {
  // all the functions for api calls to mongoDB
  // default page 0, http get request to base url.
  getNextTournament() {
    return http.get("/golf");
  }

  getPlayerStats() {
    // console.log(id)
    return http.get("/golf/stats");
  }
}

export default new GolfDataService();
