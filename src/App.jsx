import { DragDropContext } from "@hello-pangea/dnd";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import TodoComputed from "./components/TodoComputed";
import TodoCreate from "./components/TodoCreate";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

// const initialStateTodos = [
//     { id: 1, title: "Complete online Javascript course", completed: true },
//     { id: 2, title: "Go to the gym", completed: false },
//     { id: 3, title: "10 minutes meditation", completed: false },
//     { id: 4, title: "Pick up groceries", completed: false },
//     { id: 5, title: "Complete todo app on Fronend Mentor", completed: false },
// ];

const initialStateTodos = JSON.parse(localStorage.getItem("todos")) || [];

const reorder = (list, starIndex, endIndex) => {
    const result = [...list];
    const [removed] = result.splice(starIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

const App = () => {
    const [todos, setTodos] = useState(initialStateTodos);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const createTodo = (title) => {
        const newTodo = {
            id: Date.now(),
            title,
            completed: false,
        };
        setTodos([...todos, newTodo]);
    };
    const removeTodo = (id) => {
        setTodos(todos.filter((e) => e.id !== id));
    };
    const updateTodo = (id) => {
        setTodos(
            todos.map((e) =>
                e.id === id ? { ...e, completed: !e.completed } : e
            )
        );
    };
    const computedItemsLeft = todos.filter((e) => !e.completed).length;
    const clearCompleted = () => {
        setTodos(todos.filter((e) => !e.completed));
    };
    const [filter, setFilter] = useState("all");
    const changeFilter = (filter) => setFilter(filter);
    const filterTodos = () => {
        switch (filter) {
            case "all":
                return todos;
            case "active":
                return todos.filter((e) => !e.completed);
            case "completed":
                return todos.filter((e) => e.completed);
            default:
                return todos;
        }
    };

    const handleDragEnd = (result) => {
        const { destination, source } = result;
        if (!destination) return;
        if (
            source.index === destination.index &&
            source.droppableId === destination.droppableId
        )
            return;

        setTodos((e) => reorder(e, source.index, destination.index));
    };

    return (
        <div
            className="min-h-screen bg-gray-300 
        bg-[url('./assets/images/bg-mobile-light.jpg')] 
        bg-contain bg-no-repeat 
        transition-all duration-1000 dark:bg-gray-900 
        dark:bg-[url('./assets/images/bg-mobile-dark.jpg')]
        md:bg-[url('./assets/images/bg-desktop-light.jpg')]
        md:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')]"
        >
            <Header />
            <main className="container mx-auto mt-8 px-4 md:max-w-xl">
                <TodoCreate createTodo={createTodo} />

                <DragDropContext onDragEnd={handleDragEnd}>
                    <TodoList
                        todos={filterTodos()}
                        removeTodo={removeTodo}
                        updateTodo={updateTodo}
                    />
                </DragDropContext>

                <TodoComputed
                    computedItemsLeft={computedItemsLeft}
                    clearCompleted={clearCompleted}
                />
                <TodoFilter changeFilter={changeFilter} filter={filter} />
            </main>
            <footer className="mt-8 text-center dark:text-gray-400">
                Drag and drop
            </footer>
        </div>
    );
};

export default App;
