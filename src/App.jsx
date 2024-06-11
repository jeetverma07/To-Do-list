// import { useState } from "react";
// import PropTypes from "prop-types";

// export default function App() {
//   return <TodoList />;
// }

// function TodoList() {
//   const [text, setText] = useState("");
//   const [task, setTask] = useState([]);

//   function handleSubmit(e) {
//     e.preventDefault();
//     if (text === "") return;
//     setTask((old) => [...old, text]);
//     setText("");
//   }

//   function handleDelete(index) {
//     setTask((prevTasks) => {
//       const newTasks = [...prevTasks];
//       newTasks.splice(index, 1);
//       return newTasks;
//     });
//   }

//   return (
//     <div className="mx-auto mt-20 w-1/3 bg-purple-950 p-6 text-center text-white">
//       <h1 className="mb-8 text-4xl font-bold">Get Things Done!</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           className="w-80 border border-b-4 border-purple-700 bg-transparent p-2 pl-4 outline-none "
//           onChange={(e) => setText(e.target.value)}
//           value={text}
//           type="text"
//           placeholder="What is the task today?"
//         />

//         <button className="border border-b-4 border-purple-700 bg-purple-700 p-2 font-bold">
//           Add Task
//         </button>
//       </form>
//       {task.map((task, index) => (
//         <List key={index} task={task} onDelete={() => handleDelete(index)} />
//       ))}
//     </div>
//   );
// }

// function List({ task, onDelete }) {
//   return (
//     <div className="mx-6 mt-5 bg-purple-700 pl-4 rounded-lg">
//       <h1 className="flex justify-between text-xl font-semibold text-left p-3 pl-0">
//         {task}
//         <span className="cursor-pointer" onClick={onDelete}>
//           ❌
//         </span>
//       </h1>
//     </div>
//   );
// }

// List.propTypes = {
//   task: PropTypes.string.isRequired,
//   onDelete: PropTypes.func.isRequired,
// };

import { useState } from "react";
import PropTypes from "prop-types";

export default function App() {
  return <TodoList />;
}

function TodoList() {
  const [text, setText] = useState("");
  const [task, setTask] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    if (text === "") return;
    setTask((old) => [...old, text]);
    setText("");
  }

  function handleDelete(index) {
    setTask((prevTasks) => {
      const newTasks = [...prevTasks];
      newTasks.splice(index, 1);
      return newTasks;
    });
  }

  return (
    <div className="mx-auto mt-10 md:mt-20 max-w-xl md:w-2/3 lg:w-1/2 bg-purple-950 p-6 text-center text-white">
      <h1 className="mb-8 text-4xl font-bold">Get Things Done!</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="w-full md:w-80 border border-b-4 border-purple-700 bg-transparent p-2 pl-4 outline-none"
          onChange={(e) => setText(e.target.value)}
          value={text}
          type="text"
          placeholder="What is the task today?"
        />
        <button className="border border-b-4 border-purple-700 bg-purple-700 p-2 font-bold mt-2 md:mt-0 md:ml-2">
          Add Task
        </button>
      </form>
      {task.map((task, index) => (
        <List key={index} task={task} onDelete={() => handleDelete(index)} />
      ))}
    </div>
  );
}

function List({ task, onDelete }) {
  return (
    <div className="mx-6 mt-5 bg-purple-700 pl-4 rounded-lg">
      <h1 className="flex justify-between text-xl font-semibold text-left p-3 pl-0">
        {task}
        <span className="cursor-pointer" onClick={onDelete}>
          ❌
        </span>
      </h1>
    </div>
  );
}

List.propTypes = {
  task: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
