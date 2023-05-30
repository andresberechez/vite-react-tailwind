const TodoCreate = () => {
    return (
        <form className="flex items-center gap-4 overflow-hidden rounded-md bg-white px-3 py-3">
            <span className="inline-block h-5 w-5 rounded-full border-2"></span>
            <input
                className="w-full text-gray-400 outline-none"
                type="text"
                placeholder="Create a new project..."
            />
        </form>
    );
};

export default TodoCreate;
