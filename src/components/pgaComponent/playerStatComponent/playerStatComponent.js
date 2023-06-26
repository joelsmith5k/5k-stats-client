function PlayerStatComponent({ player }) {
  return (
    <div className="my-auto mx-auto">
      <h1>Player Tournament Fantasy Projections</h1>
      <div>
        {player.player != undefined ? (
          <div>
            <h1>{player.player.Name}</h1>
            <h1>Rank: {player.player.Rank}</h1>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default PlayerStatComponent;
