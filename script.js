
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

    //calculate new set of square coords against the offsets
const newSquareFrom = (xOffset, yOffset) => {
    const [newX, newY] = [xPosition + xOffset, yPosition + yOffset];
    if (0 <= newX && newX < 8 && 0 <= newY && y < 8) {
    return chessSquare(newX, newY);
    }

//get/set map constructor object name(s)
if (squareRegistery.has(name())) {
    return squareRegistry.get(name());
    } else {
    const newSquare = { name, getPredeccessor, setPredeccessor, possibleKnightMoves}
    squareRegistry.set(name(), newSquare);
    return newSquare;
    }
}
//intake the click coords from user and run the search algo
const knightsTravails = (start, finish) => {
    squareRegistry.clear();
    
    const origin = chessSquare(...start);
    const target = chessSquare(...finish);
    
    const queue = [origin];
    while (!queue.includes(target)) {
    const currentSquare = queue.shift();
    const enqueueList = currentSquare.possibleKnightMoves();
    enqueueList.forEach((square) => square.setPredeccessor(currentSquare));
    queue.push(...enqueueList);
    }
    const path = [target]
    while (!path.includes(origin)) {
    const prevSquare = path[0].getPredeccessor();
    path.unshift(prevSquare); 
    }
    console.log (`this is the shortest path was ${path.length - 1} moves!`);
    console.log("the moves were:");
    path.forEach(square => console.log(square.name()));
    }

}
// export { knightsTravails };