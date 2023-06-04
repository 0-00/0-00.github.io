const createCommand = (name, ascii, action, isKeyPressed) => {
  return {
    name,
    ascii,
    action,
    isKeyPressed,
  };
};

const rotateClockwise = (currentDirection) => {
  if (currentDirection === "RIGHT") return "DOWN";
  if (currentDirection === "DOWN") return "LEFT";
  if (currentDirection === "LEFT") return "UP";
  if (currentDirection === "UP") return "RIGHT";
};

const commands = [
  createCommand(
    "UP",
    24,
    (state) => ({ ...state, direction: "UP" }),
    (key, options) => key === "ArrowUp" && options.shift
  ),
  createCommand(
    "DOWN",
    25,
    (state) => ({ ...state, direction: "DOWN" }),
    (key, options) => key === "ArrowDown" && options.shift
  ),
  createCommand(
    "RIGHT",
    26,
    (state) => ({ ...state, direction: "RIGHT" }),
    (key, options) => key === "ArrowRight" && options.shift
  ),
  createCommand(
    "LEFT",
    27,
    (state) => ({ ...state, direction: "LEFT" }),
    (key, options) => key === "ArrowLeft" && options.shift
  ),
  createCommand(
    "EMPTY",
    " ".charCodeAt(0),
    (state) => state,
    (key, options) => key === " " || key === "delete" || key === "backspace"
  ),
  createCommand(
    "ZERO",
    "0".charCodeAt(0),
    (state) => ({ ...state, stack: [...state.stack, 0] }),
    (key, options) => key === "0"
  ),
  createCommand(
    "ONE",
    "1".charCodeAt(0),
    (state) => ({ ...state, stack: [...state.stack, 1] }),
    (key, options) => key === "1"
  ),
  createCommand(
    "TWO",
    "2".charCodeAt(0),
    (state) => ({ ...state, stack: [...state.stack, 2] }),
    (key, options) => key === "2"
  ),
  createCommand(
    "THREE",
    "3".charCodeAt(0),
    (state) => ({ ...state, stack: [...state.stack, 3] }),
    (key, options) => key === "3"
  ),
  createCommand(
    "FOUR",
    "4".charCodeAt(0),
    (state) => ({ ...state, stack: [...state.stack, 4] }),
    (key, options) => key === "4"
  ),
  createCommand(
    "FIVE",
    "5".charCodeAt(0),
    (state) => ({ ...state, stack: [...state.stack, 5] }),
    (key, options) => key === "5"
  ),
  createCommand(
    "SIX",
    "6".charCodeAt(0),
    (state) => ({ ...state, stack: [...state.stack, 6] }),
    (key, options) => key === "6"
  ),
  createCommand(
    "SEVEN",
    "7".charCodeAt(0),
    (state) => ({ ...state, stack: [...state.stack, 7] }),
    (key, options) => key === "7"
  ),
  createCommand(
    "EIGHT",
    "8".charCodeAt(0),
    (state) => ({ ...state, stack: [...state.stack, 8] }),
    (key, options) => key === "8"
  ),
  createCommand(
    "NINE",
    "9".charCodeAt(0),
    (state) => ({ ...state, stack: [...state.stack, 9] }),
    (key, options) => key === "9"
  ),
  createCommand(
    "A",
    "A".charCodeAt(0),
    (state) => ({ ...state, stack: [...state.stack, 10] }),
    (key, options) => key === "A"
  ),
  createCommand(
    "B",
    "B".charCodeAt(0),
    (state) => ({ ...state, stack: [...state.stack, 11] }),
    (key, options) => key === "B"
  ),
  createCommand(
    "C",
    "C".charCodeAt(0),
    (state) => ({ ...state, stack: [...state.stack, 12] }),
    (key, options) => key === "C"
  ),
  createCommand(
    "D",
    "D".charCodeAt(0),
    (state) => ({ ...state, stack: [...state.stack, 13] }),
    (key, options) => key === "D"
  ),
  createCommand(
    "E",
    "E".charCodeAt(0),
    (state) => ({ ...state, stack: [...state.stack, 14] }),
    (key, options) => key === "E"
  ),
  createCommand(
    "F",
    "F".charCodeAt(0),
    (state) => ({ ...state, stack: [...state.stack, 15] }),
    (key, options) => key === "F"
  ),
  createCommand(
    "ADD",
    "+".charCodeAt(0),
    (state) => {
      const [a, b] = state.stack.slice(-2);
      return { ...state, stack: [...rest, a + b] };
    },
    (key, options) => key === "+"
  ),
  createCommand(
    "SUB",
    "-".charCodeAt(0),
    (state) => {
      const [a, b] = state.stack.slice(-2);
      return { ...state, stack: [...rest, a - b] };
    },
    (key, options) => key === "-"
  ),
  createCommand(
    "MUL",
    "*".charCodeAt(0),
    (state) => {
      const [a, b] = state.stack.slice(-2);
      return { ...state, stack: [...rest, a * b] };
    },
    (key, options) => key === "*"
  ),
  createCommand(
    "DIV",
    "/".charCodeAt(0),
    (state) => {
      const [a, b] = state.stack.slice(-2);
      return { ...state, stack: [...rest, a / b] };
    },
    (key, options) => key === "/"
  ),
  createCommand(
    "MOD",
    "%".charCodeAt(0),
    (state) => {
      const [a, b] = state.stack.slice(-2);
      return { ...state, stack: [...rest, a % b] };
    },
    (key, options) => key === "%"
  ),
  createCommand(
    "POP",
    "^".charCodeAt(0),
    (state) => {
      const poppedStack = state.stack.slice(0, -1);
      return { ...state, stack: poppedStack };
    },
    (key, options) => key === "^"
  ),
  createCommand(
    "DUPLICATE",
    "D".charCodeAt(0),
    (state) => {
      const [a] = state.stack.slice(-1);
      return { ...state, stack: [...state.stack, a] };
    },
    (key, options) => key === "d" && options.shift
  ),
  createCommand(
    "STACK EMPTY TEST",
    "_".charCodeAt(0),
    (state) => {
      const isEmpty = state.stack.length === 0;
      return {
        ...state,
        direction: isEmpty ? rotateClockwise(state.direction) : state.direction,
      };
    },
    (key, options) => key === "_"
  ),
  createCommand(
    "ZERO TEST",
    "?".charCodeAt(0),
    (state) => {
      const [a] = state.stack.slice(-1);
      return {
        ...state,
        direction: a === 0 ? rotateClockwise(state.direction) : state.direction,
      };
    },
    (key, options) => key === "?"
  ),
  createCommand(
    "PRINT",
    "P".charCodeAt(0),
    (state) => {
      const [a] = state.stack.slice(-1);
      return { ...state, output: [...state.output, a] };
    },
    (key, options) => key === "p" && options.shift
  ),
  // copilot suggested this, seems good?
  //
  // createCommand(
  //     "SWAP",
  //     "S".charCodeAt(0),
  //     (state) => {
  //         const [a, b] = state.stack.slice(-2);
  //         return { ...state, stack: [...rest, b, a] };
  //     },
  //     (key, options) => key === "s" && options.shift
  // ),

  // future

  // QUEUE: toggles reading the stack data as FIFO rather than LIFO

  // COMMENTS: toggles actioning instructions

  // READ INSTRUCTION : pops the top of the stack, and pushes the instruction at that index (xXY) to the stack

  // WRITE INSTRUCTION :
  // index          : top of stack (format 0xXY)
  // instruction_id : second in stack
  // writes instruction_id at index of tokens
];
