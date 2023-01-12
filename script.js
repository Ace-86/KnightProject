
// employing a graph breadth-first-search algo for the moves
const squareRegistry = new Map();

// get and set current cordinates to the board
const chessSquare = (x , y) => {
    const xPosition = x;
    const yPosition = y;
    let predeccessor;


//defined possible knight moves
const Knight_Moves = [
        [1, 2], [1, -2], [2 , 1],
        [2, -1], [-1, 2], [-1 , -2],
        [-2, 1], [-2, -1]
    ]
    const getPredeccessor = () => predeccessor;
    const setPredeccessor = (newPredeccessor) => {
    predeccessor = predeccessor || newPredeccessor;
    }
    
    const name = () => `${x}, ${y}`;
    
    //evalvaluate current possible knight moves against offsets
    const possibleKnightMoves = () => {
    return Knight_Moves
    .map((offsset) => newSquareFrom(offset[0], offset[1]))
    }

}
