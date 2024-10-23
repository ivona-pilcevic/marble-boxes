import { useState } from "react";
import { GlobalStyles } from "./globalStyles";
import MarbleBox from "./components/MarbleBox";
import HoldButton from "./components/HoldButton";

function App() {
  const [boxes, setBoxes] = useState<{ id: number; marbleCount: number }[]>([]);

  const deleteBox = (boxId: number) => {
    const newBoxes = boxes?.filter((box) => box?.id !== boxId);
    setBoxes(newBoxes);
  };

  const incrementMarbles = (boxId: number) => {
    setBoxes((prevBoxes) =>
      prevBoxes.map((box) =>
        box.id === boxId ? { ...box, marbleCount: box.marbleCount + 1 } : box
      )
    );
  };

  const decrementMarbles = (boxId: number) => {
    setBoxes((prevBoxes) =>
      prevBoxes.map((box) =>
        box.id === boxId && box.marbleCount > 0
          ? { ...box, marbleCount: box.marbleCount - 1 }
          : box
      )
    );
  };

  return (
    <>
      <GlobalStyles />
      <p>Boxes count: {boxes?.length}</p>
      <p>
        Marbles count:
        {boxes?.reduce((total, box) => total + box.marbleCount, 0)}
      </p>
      <HoldButton boxes={boxes} setBoxes={setBoxes} />

      {boxes?.map((box) => (
        <MarbleBox
          decrementMarbles={decrementMarbles}
          incrementMarbles={incrementMarbles}
          boxId={box?.id}
          marbleCount={box?.marbleCount}
          deleteBox={deleteBox}
        />
      ))}
    </>
  );
}

export default App;
