import TodoItem from "./TodoItem";

const TodoList = ({ todos, removeTodo, updateTodo }) => {
    return (
        <div className="mt-8 rounded-t-md bg-white [&>article]:p-4">
            {todos.map((e) => (
                <TodoItem
                    key={e.id}
                    todo={e}
                    removeTodo={removeTodo}
                    updateTodo={updateTodo}
                />
            ))}
        </div>
    );
};

export default TodoList;
