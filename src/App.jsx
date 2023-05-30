import CrossIcon from "./components/CrossIcon";
import MoonIcon from "./components/MoonIcon";

const App = () => {
    return (
        <div className="min-h-screen bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat">
            <header className="container mx-auto px-4 pt-8">
                <div className="flex justify-between">
                    <h1 className="text-3xl font-semibold uppercase tracking-[0.4em] text-white">
                        Todo
                    </h1>
                    <button>
                        <MoonIcon className="fill-red-400" />
                    </button>
                </div>
                <form className="mt-8 flex items-center gap-4 overflow-hidden rounded-md bg-white px-3 py-3">
                    <span className="inline-block h-5 w-5 rounded-full border-2"></span>
                    <input
                        className="w-full text-gray-400 outline-none"
                        type="text"
                        placeholder="Create a new project..."
                    />
                </form>
            </header>

            <main className="container mx-auto mt-8 px-4">
                <div className="rounded-md bg-white px-4">
                    <article className="flex justify-between gap-4 border-b border-b-gray-400 py-4">
                        <button className="inline-block h-5 w-5 flex-none rounded-full border-2"></button>
                        <p className="grow text-gray-600">
                            Complete online Javascript course
                        </p>
                        <button className="flex-none">
                            <CrossIcon />
                        </button>
                    </article>
                    <article className="flex justify-between gap-4 border-b border-b-gray-400 py-4">
                        <button className="inline-block h-5 w-5 flex-none rounded-full border-2"></button>
                        <p className="grow text-gray-600">
                            Complete online Javascript course
                        </p>
                        <button className="flex-none">
                            <CrossIcon />
                        </button>
                    </article>
                    <article className="flex justify-between gap-4 border-b border-b-gray-400 py-4">
                        <button className="inline-block h-5 w-5 flex-none rounded-full border-2"></button>
                        <p className="grow text-gray-600">
                            Complete online Javascript course
                        </p>
                        <button className="flex-none">
                            <CrossIcon />
                        </button>
                    </article>
                    <section className="p-x-4 mt-6 flex justify-between gap-2 py-4">
                        <span className="text-gray-400">5 items left</span>
                        <button className="text-gray-400">
                            Clear completed
                        </button>
                    </section>
                </div>
            </main>

            <section className="container mx-auto mt-8 px-4 ">
                <div className="flex justify-center gap-4 bg-white">
                    <button className="text-blue-600">All</button>
                    <button className="hover:text-blue-600">Active</button>
                    <button className="hover:text-blue-600">Completed</button>
                </div>
            </section>
            <p className="mt-8 text-center">Drag and drop</p>
        </div>
    );
};

export default App;
