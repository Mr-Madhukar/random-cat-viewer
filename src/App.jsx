import { useEffect } from "react";
import { useCat } from "./hooks/useCat";
import CatCard from "./components/CatCard";

export default function App() {
  const { cat, loading, error, fetchCat } = useCat();

  // Auto-fetch on first load
  useEffect(() => {
    fetchCat();
  }, [fetchCat]);

  return (
    <div className="min-h-screen bg-[#02050a] text-white relative flex flex-col items-center justify-center p-4 sm:p-8 overflow-hidden selection:bg-cyan-500/30">
      {/* Background Grid & Scanlines */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(10,20,40,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(10,20,40,0.5)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      <div className="absolute inset-0 pointer-events-none bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.5)_2px,rgba(0,0,0,0.5)_4px)] z-50 mix-blend-overlay"></div>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-5xl">
        {/* Header */}
        <header className="text-center mb-8 sm:mb-12">
          <div className="flex items-center justify-center gap-4 mb-3 opacity-50 text-[10px] sm:text-xs text-blue-400 tracking-[0.5em] font-bold">
            <span>SYS.REQ.09</span>
            <span className="w-12 h-px bg-blue-400/50"></span>
            <span>SEC.CLR.A</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-yellow-500 tracking-[0.2em] drop-shadow-[0_0_15px_rgba(234,179,8,0.4)] font-display uppercase">
            <span className="text-yellow-500/50 mr-2 sm:mr-4 text-2xl sm:text-4xl">╳</span>
            Feline Fighters
            <span className="text-yellow-500/50 ml-2 sm:ml-4 text-2xl sm:text-4xl">╳</span>
          </h1>
          <p className="mt-4 text-xs sm:text-sm text-cyan-400 tracking-[0.4em] font-semibold opacity-80 uppercase">
            Cat Battle Intelligence : Classified
          </p>
        </header>

        {/* Content */}
        <CatCard cat={cat} loading={loading} fetchCat={fetchCat} />
        
        {/* Error State */}
        {error && !loading && (
           <div className="mt-8 text-red-500 text-center font-mono text-sm tracking-widest bg-red-900/20 border border-red-500/30 p-4 max-w-lg mx-auto rounded-sm backdrop-blur-sm">
             [ SYSTEM ERROR: {error} ]
           </div>
        )}
      </div>
    </div>
  );
}
