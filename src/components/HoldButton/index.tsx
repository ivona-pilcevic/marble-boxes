import { useState } from "react";
import { Container } from "./style";

interface HoldButtonProps {
  boxes: {
    id: number;
    marbleCount: number;
  }[];
  setBoxes: React.Dispatch<
    React.SetStateAction<
      {
        id: number;
        marbleCount: number;
      }[]
    >
  >;
}
const HoldButton: React.FC<HoldButtonProps> = ({ boxes, setBoxes }) => {
  const [isHolding, setIsHolding] = useState<boolean>(false);

  const addNewBox = () => {
    const newId = boxes?.length ? boxes[boxes.length - 1].id + 1 : 1;
    setBoxes((prevBoxes) => [...prevBoxes, { id: newId, marbleCount: 0 }]);
  };

  const handleMouseDown = (boxId: number, isIncrement: boolean) => {};
  const handleMouseUp = () => {};

  return <Container onClick={addNewBox}>ADD NEW BOX</Container>;
};

export default HoldButton;
