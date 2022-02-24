import { useState } from "react";
import Mint from "../mint";
import Transfer from "../transfer";

const MintTransfer = () => {
  const [transferToggle, setTransferToogle] = useState<boolean>(false);
  return (
    <div>
      {transferToggle ? (
        <div>
          <Transfer />
        </div>
      ) : (
        <div>
          <Mint setTransferToogle={setTransferToogle} />
        </div>
      )}
    </div>
  );
};

export default MintTransfer;
