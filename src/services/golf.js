import http from "../http-common";

class GolfDataService {

  getNextTournament() {
    return http.get("/5kstats/golf");
  }

  getPlayerStats() {
    return http.get("/5kstats/golf/stats");
  }
}

export default new GolfDataService();
