import { useEffect } from "react";
import { useRecoilSnapshot } from "recoil";

const DebugObserver = () => {
  const snapshot = useRecoilSnapshot();

  useEffect(() => {
    console.debug(`\nThe following atoms were modified:`);
    for (const node of snapshot.getNodes_UNSTABLE({ isModified: true })) {
      console.debug(node.key, snapshot.getLoadable(node));
    }
    console.debug(`Snapshot Loaded\n`);
  }, [snapshot]);

  return null;
};

export default DebugObserver;
