import { useEffect } from "react";
import { useCat } from "./hooks/useCat";
import CatCard from "./components/CatCard";

export default function App() {
  const { cat, loading, error, fetchCat } = useCat();

  // Auto-fetch on first load
  useEffect(() => {
    fetchCat();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 flex flex-col items-center justify-center px-4 py-14">

      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-5xl font-black text-orange-500 tracking-tight drop-shadow">
          🐱 CatSnap
        </h1>
        <p className="text-gray-400 mt-2 text-sm font-medium">
          A random cat, every single click
        </p>
      </div>

      {/* Loading */}
      {loading && (
        <div className="text-center space-y-3">
          <div className="text-6xl animate-bounce">🐾</div>
          <p className="text-orange-400 font-semibold animate-pulse">
            Fetching a cat...
          </p>
        </div>
      )}

      {/* Error */}
      {error && !loading && (
        <p className="text-red-400 font-medium text-center">{error}</p>
      )}

      {/* Cat Card */}
      {cat && !loading && <CatCard cat={cat} />}

      {/* Button */}
      <button
        onClick={fetchCat}
        disabled={loading}
        className="mt-8 px-9 py-3 rounded-full bg-orange-400 hover:bg-orange-500 active:scale-95 text-white font-bold shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed tracking-wide"
      >
        {loading ? "Loading..." : "🐾 New Cat"}
      </button>
    </div>
  );
}
