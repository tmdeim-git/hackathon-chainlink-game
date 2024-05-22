import { GameTile } from "./GameTile";

const SelectedResourceRect = ({ selectedTile }: { selectedTile: GameTile }) => {
  const getTileId = (): number => {
    console.log(selectedTile);
    return selectedTile?._land.id || null;
  };

  const getRessourceType = (): any => {
    return selectedTile?._land.resources.map((r) => {
      return (
        <div>
          <div> Type: {r.resourceType} </div>
          <div> Rate: {r.productionRate} / min</div>
          <div>
            amount: {r.currentAmmount} / {r.maximumAmmount}
          </div>
        </div>
      );
    });
  };

  const getOwner = (): string => {
    console.log(selectedTile);
    if (selectedTile) {
      console.log("bla bla");
      return selectedTile._isUnclaimedTile
        ? "Nobody"
        : selectedTile._land.ownerAddress;
    }
  };

  return (
    <div className="tile-info-rect">
      <h2>TILE INFO</h2>
      <div>Tile ID : {getTileId()}</div>
      <div>Resources :</div>
      {getRessourceType()}
      <div>Owned By : {getOwner()}</div>
    </div>
  );
};

export default SelectedResourceRect;
