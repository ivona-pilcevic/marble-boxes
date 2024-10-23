import { Container } from "./style";

interface MarbleBoxProps {
  decrementMarbles: (boxId: number) => void;
  boxId: number;
  marbleCount: number;
  incrementMarbles: (boxId: number) => void;
  deleteBox: (boxId: number) => void;
}

const MarbleBox: React.FC<MarbleBoxProps> = ({
  decrementMarbles,
  boxId,
  marbleCount,
  incrementMarbles,
  deleteBox,
}) => {
  return (
    <div>
      <button onClick={() => decrementMarbles(boxId)}>-</button>
      <Container>{marbleCount}</Container>
      <button
        onClick={() => incrementMarbles(boxId)}

        // onMouseDown={() => handleMouseDown()}
        // onMouseUp={handleMouseUp}
        // onMouseLeave={handleMouseUp}
      >
        +
      </button>

      <button style={{ background: "red" }} onClick={() => deleteBox(boxId)}>
        delete
      </button>
    </div>
  );
};

export default MarbleBox;
