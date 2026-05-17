export default function CatCard({ cat, loading, fetchCat }) {
  const generateStat = (statName) => {
    if (cat && cat[statName] !== undefined) return cat[statName] * 20;
    return (Math.floor(Math.random() * 4) + 2) * 20;
  };

  const hp = generateStat('affection_level');
  const atk = generateStat('adaptability');
  const def = generateStat('child_friendly');
  const spd = generateStat('energy_level');
  const luk = generateStat('intelligence');

  const stats = [
    { label: 'HP', value: hp, color: 'bg-green-500', shadow: 'shadow-[0_0_10px_rgba(34,197,94,0.8)]' },
    { label: 'ATK', value: atk, color: 'bg-pink-500', shadow: 'shadow-[0_0_10px_rgba(236,72,153,0.8)]' },
    { label: 'DEF', value: def, color: 'bg-cyan-400', shadow: 'shadow-[0_0_10px_rgba(34,211,238,0.8)]' },
    { label: 'SPD', value: spd, color: 'bg-orange-400', shadow: 'shadow-[0_0_10px_rgba(251,146,60,0.8)]' },
    { label: 'LUK', value: luk, color: 'bg-purple-500', shadow: 'shadow-[0_0_10px_rgba(168,85,247,0.8)]' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-[380px_1fr] gap-4 sm:gap-6 bg-[#040812] border border-blue-900/60 p-4 sm:p-6 rounded-sm relative shadow-[0_0_30px_rgba(0,0,0,0.8)] mx-auto w-full backdrop-blur-sm">
      {/* Decorative corners */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-yellow-500"></div>
      <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-yellow-500"></div>
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-yellow-500"></div>
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-yellow-500"></div>

      {/* LEFT COLUMN: Image & Basic Info */}
      <div className="flex flex-col relative border border-blue-900/50 p-3 sm:p-4 bg-[#020408]">
         {/* Image Container — fixed height */}
         <div className="relative w-full h-[300px] sm:h-[340px] bg-[#010204] overflow-hidden group border border-blue-900/30 rounded-sm">
            {loading ? (
              <div className="w-full h-full flex flex-col items-center justify-center text-cyan-400 bg-[linear-gradient(rgba(10,20,40,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(10,20,40,0.5)_1px,transparent_1px)] bg-[size:10px_10px]">
                <div className="w-12 h-12 border-t-2 border-b-2 border-cyan-400 rounded-full animate-spin mb-4"></div>
                <span className="tracking-[0.3em] text-xs font-bold animate-pulse">ACQUIRING TARGET</span>
              </div>
            ) : cat ? (
              <>
                <img 
                  src={cat.image || cat.url} 
                  alt={cat.name || "Unknown Specimen"}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                {/* HUD Overlay on image */}
                <div className="absolute inset-2 pointer-events-none border border-cyan-500/20 z-10"></div>
                <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-cyan-400/60 z-10"></div>
                <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-cyan-400/60 z-10"></div>
              </>
            ) : (
              <div className="w-full h-full flex items-center justify-center text-blue-300 text-xs tracking-widest bg-[linear-gradient(rgba(10,20,40,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(10,20,40,0.5)_1px,transparent_1px)] bg-[size:10px_10px]">
                NO SIGNAL
              </div>
            )}
         </div>

         {/* Info & Button */}
         <div className="mt-5 flex flex-col items-center relative">
            <button 
              onClick={fetchCat}
              disabled={loading}
              className="px-8 py-3 w-full max-w-[220px] mb-4 bg-cyan-900/40 hover:bg-cyan-800/50 border-2 border-cyan-500 hover:border-cyan-300 text-cyan-200 font-bold tracking-[0.4em] text-sm transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.6)] disabled:opacity-50 disabled:cursor-not-allowed group relative overflow-hidden rounded-sm"
            >
               <span className="relative z-10">{loading ? "SCANNING" : "O M G"}</span>
               <div className="absolute inset-0 w-0 bg-cyan-500/20 transition-all duration-500 ease-out group-hover:w-full"></div>
            </button>
            <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent mb-4 max-w-[240px]"></div>
            <h2 className="text-xl sm:text-2xl font-black tracking-[0.15em] text-yellow-400 uppercase font-display text-center drop-shadow-[0_0_10px_rgba(234,179,8,0.6)]">
              {loading ? "..." : (cat?.name || "QUEEN")}
            </h2>
            <p className="text-[10px] sm:text-xs text-cyan-300 tracking-[0.4em] mt-2 text-center font-bold">
               {loading ? "..." : (cat?.origin ? `ORIGIN: ${cat.origin.toUpperCase()}` : "WILD SPEC")}
            </p>
         </div>
      </div>

      {/* RIGHT COLUMN: Stats & Lore */}
      <div className="flex flex-col border border-blue-900/50 p-4 sm:p-6 bg-[#020408] relative min-w-0">
         <div className="absolute top-3 right-3 text-[9px] text-blue-500 font-mono tracking-widest">SYS.VER.4.0.2</div>
         
         {/* Stats Section */}
         <div className="mb-6">
           <h3 className="text-sm font-bold text-yellow-400 tracking-[0.3em] mb-5 border-b border-blue-800/60 pb-3 flex items-center">
              <span className="w-2 h-2 bg-yellow-500 mr-3 shadow-[0_0_8px_rgba(234,179,8,0.9)]"></span> BATTLE STATS
           </h3>
           
           <div className="space-y-4 sm:space-y-5 px-1 sm:px-2">
              {stats.map((s, i) => (
                <div key={i} className="flex items-center gap-3 sm:gap-4 text-xs font-mono">
                   <span className="w-10 text-cyan-300 font-bold tracking-widest">► {s.label}</span>
                   <div className="flex-1 h-3 bg-[#0a1224] relative overflow-hidden border border-blue-800/40 rounded-sm">
                      <div 
                        className={`h-full ${s.color} transition-all duration-1000 ease-out relative ${s.shadow}`}
                        style={{ width: `${loading ? 0 : s.value}%` }}
                      >
                         <div className="absolute top-0 right-0 w-1 h-full bg-white/50"></div>
                      </div>
                   </div>
                   <span className="w-8 text-right text-white font-bold">{loading ? 0 : s.value}</span>
                </div>
              ))}
           </div>
         </div>

         {/* Lore Section */}
         <div className="flex-1 flex flex-col min-h-[140px]">
           <h3 className="text-sm font-bold text-yellow-400 tracking-[0.3em] mb-4 border-b border-blue-800/60 pb-3 flex items-center mt-2">
              <span className="w-2 h-2 bg-yellow-500 mr-3 shadow-[0_0_8px_rgba(234,179,8,0.9)]"></span> LORE / STORY
           </h3>
           <div className="flex-1 bg-[#060e1c] border border-blue-800/40 p-4 sm:p-5 overflow-hidden relative group rounded-sm">
              {/* Subtle grid pattern in lore box */}
              <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(10,20,40,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(10,20,40,0.2)_1px,transparent_1px)] bg-[size:10px_10px]"></div>
              
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400/60 to-transparent"></div>

              <p className="text-xs sm:text-sm leading-relaxed text-blue-100 font-mono text-justify h-full overflow-y-auto pr-3 custom-scrollbar relative z-10 transition-colors group-hover:text-white pl-3">
                {loading ? (
                  <span className="animate-pulse text-cyan-300">Decrypting classified records... Please wait.</span>
                ) : (
                  cat?.description || "WARNING: No records found for this specimen. Subject is considered highly dangerous and unpredictable. Approach with extreme caution. Last known sighting involved the destruction of multiple tactical laser pointers and unauthorized infiltration of secure feline containment facilities."
                )}
              </p>
           </div>
         </div>
      </div>

    </div>
  );
}
