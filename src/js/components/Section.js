import "/src/css/index.css";
import { useState } from "react";
import { nanoid } from "nanoid";

export default function Section(props) {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [activeFragment, setActiveFragment] = useState({
    all: true,
    active: false,
    completed: false,
  });

  function renderFragment(activeFragment) {
    if (activeFragment.all) {
      return todos.map((todo, index) => (
        <li className={todo[1]} key={todo[2]}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              onChange={() => {
                setTodos((prev) => {
                  console.log("ses");
                  prev[index][1] =
                    prev[index][1] === "completed"
                      ? "uncompleted"
                      : "completed";
                  return [...prev];
                });
              }}
            />
            <label>{todo[0]}</label>
            <button
              className="destroy"
              onClick={() => {
                setTodos((prev) => {
                  prev.splice(index, 1);
                  return [...prev];
                });
              }}
            ></button>
          </div>
        </li>
      ));
    } else if (activeFragment.active) {
      return todos
        .filter((todo) => todo[1] === "uncompleted")
        .map((todo, index) => (
          <li className={todo[1]} key={index}>
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
                onChange={() => {
                  setTodos((prev) => {
                    console.log("ses");
                    prev[index][1] =
                      prev[index][1] === "completed"
                        ? "uncompleted"
                        : "completed";
                    return [...prev];
                  });
                }}
              />
              <label>{todo[0]}</label>
              <button
                className="destroy"
                onClick={() => {
                  setTodos((prev) => {
                    prev.splice(index, 1);
                    return [...prev];
                  });
                }}
              ></button>
            </div>
          </li>
        ));
    } else if (activeFragment.completed) {
      return todos
        .filter((todo) => todo[1] === "completed")
        .map((todo, index) => (
          <li className={todo[1]} key={index}>
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
                onChange={() => {
                  setTodos((prev) => {
                    console.log("ses");
                    prev[index][1] =
                      prev[index][1] === "completed"
                        ? "uncompleted"
                        : "completed";
                    return [...prev];
                  });
                }}
              />
              <label>{todo[0]}</label>
              <button
                className="destroy"
                onClick={() => {
                  setTodos((prev) => {
                    prev.splice(index, 1);
                    return [...prev];
                  });
                }}
              ></button>
            </div>
          </li>
        ));
    }
  }

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setTodos([...todos, [task, "uncompleted", nanoid()]]);
            setTask("");
          }}
        >
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            autofocus
          />
        </form>
      </header>

      <section className="main">
        <input
          className="toggle-all"
          type="checkbox"
          onClick={() => {
            setTodos((prev) => {
              return [
                ...prev.map((todo) => {
                  todo[1] = "completed";
                  return todo;
                }),
              ];
            });
          }}
        />
        <label for="toggle-all">Mark all as complete</label>

        <ul className="todo-list">{renderFragment(activeFragment)}</ul>
      </section>

      <footer className="footer">
        <span className="todo-count">
          <strong>
            {
              todos.filter((item) => {
                return item[1] === "uncompleted";
              }).length
            }{" "}
          </strong>
          items left
        </span>

        <ul className="filters">
          <li>
            <button
              onClick={() => {
                setActiveFragment({
                  all: true,
                  active: false,
                  completed: false,
                });
              }}
            >
              <a className={activeFragment.all ? "selected" : ""}>All</a>
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setActiveFragment({
                  all: false,
                  active: true,
                  completed: false,
                });
              }}
            >
              <a className={activeFragment.active ? "selected" : ""}>Active</a>
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setActiveFragment({
                  all: false,
                  active: false,
                  completed: true,
                });
              }}
            >
              <a className={activeFragment.completed ? "selected" : ""}>
                Completed
              </a>
            </button>
          </li>
        </ul>

        <button
          className="clear-completed"
          onClick={() => {
            setTodos((prev) => {
              return prev.filter((todo) => todo[1] !== "completed");
            });
          }}
        >
          Clear completed
        </button>
      </footer>
    </section>
  );
}
