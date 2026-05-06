export default function CatCard({ cat }) {
  return (
    <div className="w-full max-w-sm bg-white rounded-3xl shadow-2xl overflow-hidden border border-orange-100">

      {/* Image */}
      <div className="w-full h-10 bg-orange-15 overflow-hidden flex justify-center items-center">
        <img
          src={cat.image || cat.url}
          alt={cat.name || "Random Cat"}
          className="w-full h-full object-cover transition-all duration-700 ease-in-out"
        />
      </div>

      {/* Info */}
      <div className="p-5 space-y-3">
        {cat.name && (
          <h2 className="text-2xl font-bold text-gray-800">{cat.name}</h2>
        )}

        {/* Temperament Tags */}
        {cat.temperament && (
          <div className="flex flex-wrap gap-2">
            {cat.temperament.split(', ').map((tag, i) => (
              <span
                key={i}
                className="text-xs font-semibold bg-orange-100 text-orange-600 px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Meta */}
        <div className="text-sm text-gray-500 space-y-2 pt-2 border-t border-orange-50">
          {cat.origin && (
            <p>🌍 <span className="font-semibold text-gray-400">Origin:</span> <span className="text-gray-700 font-medium">{cat.origin}</span></p>
          )}
          {cat.life_span && (
            <p>⏳ <span className="font-semibold text-gray-400">Life Span:</span> <span className="text-gray-700 font-medium">{cat.life_span} years</span></p>
          )}
          {cat.description && (
            <p className="pt-2 text-gray-600 leading-relaxed text-xs">
              {cat.description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
