import "./App.css";

function App() {
    return (
        <main className="min-h-screen bg-zinc-950 text-zinc-50 flex items-center justify-center p-6">
            <div className="max-w-md w-full bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-2xl text-center">
                <h1 className="text-3xl font-bold tracking-tight mb-3">
                    React + Tailwind v4
                </h1>
                <p className="text-zinc-400 mb-6 text-sm leading-relaxed">
                    Your project is successfully initialized with Vite and the
                    latest industry-standard styling setup.
                </p>
                <button className="w-full py-2.5 px-4 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-xl transition-colors cursor-pointer">
                    Get Started
                </button>
            </div>
        </main>
    );
}

export default App;
