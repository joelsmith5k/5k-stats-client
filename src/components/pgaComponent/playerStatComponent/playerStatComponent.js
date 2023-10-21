function PlayerStatComponent({ player }) {
  return (
    <div className="w-96">
      <div>
        {player.player != undefined ? (
          <div>
            <h1>
              {player.player.Name} - {player.player.Country}{" "}
            </h1>
            <h1>Rank: {player.player.Rank}</h1>
            <h2>Projected Score: {player.player.TotalScore}</h2>
            <h2>Projected Birdies: {player.player.Birdies}</h2>
            <h2>Projected Pars: {player.player.Pars}</h2>
            <h2>Projected Bogeys: {player.player.Bogeys}</h2>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default PlayerStatComponent;
