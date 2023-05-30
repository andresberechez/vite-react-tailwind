import CrossIcon from "./CrossIcon";
import TodoItem from "./TodoItem";

const TodoList = ({ todos }) => {
    return (
        <div className="mt-8 rounded-t-md bg-white [&>article]:p-4">
            {todos.map((todo) => (
                <TodoItem key={todos.id} todo={todo} />
            ))}
        </div>
    );
};

export default TodoList;
