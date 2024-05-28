import { GameTile } from "./GameTile";
import "../style/selectedResourceRect.css";
import ResourceProduction from "../components/CountdownLoadingBar";

const SelectedResourceRect = ({ selectedTile }: { selectedTile: GameTile }) => {
  const admin = false;
  const getTileId = (): number => {
    return selectedTile?._land.id || null;
  };

  const getRessourceType = (): any => {
    return selectedTile?._land.resources.map((r) => {
      return <option value={r.resourceType}>{r.resourceType}</option>;
    });
  };

  const getRessources = () => {
    return selectedTile?._land.resources.map((r, key) => {
      return (
        <div className="resource-element" key={key}>
          <h3 className="resource-element-title"> {r.resourceType} </h3>
          <div> time: {r.productionTimeSeconds / 60} min</div>
          <div>amount: {r.Amount}</div>
          <ResourceProduction resource={r} land={selectedTile?._land} />
        </div>
      );
    });
  };

  const getOwner = (): string => {
    if (selectedTile) {
      return selectedTile._isUnclaimedTile
        ? "Nobody"
        : selectedTile._land.ownerAddress;
    }
  };

  return (
    <div className="tile-info-rect">
      <h2 className="tile-info-title">TILE INFO</h2>
      <div className="tile-info">
        <div>Tile ID : {getTileId()}</div>
        <div>Owned By : {getOwner()}</div>
        {admin && <div>Token ID : </div>}
        <h3 className="resources-title">Resources :</h3>
        <div className="resource-table">{getRessources()}</div>
      </div>
    </div>
  );
};

export default SelectedResourceRect;
