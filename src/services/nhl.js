import http from "../http-common";

class GolfDataService {
  
  getNhlAggregates() {
    return http.get("/5kstats/nhl/aggregates");
  }

  getNhlGoalieStats() {
    return http.get("/5kstats/nhl/goalie/stats");
  }
}

export default new GolfDataService();