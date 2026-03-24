export default function StatsBar() {
  return (
    <div className="overflow-hidden bg-purple-500 text-white py-3 text-sm">

      <div className="whitespace-nowrap flex gap-20 animate-marquee">
        {/* Duplicate content for smooth loop */}
        <div className="flex gap-20">
          <p>⭐ ATS-friendly template</p>
          <p>⭐ AI writing suggestions</p>
          <p>⭐ Instant download</p>
          <p>⭐ ATS-friendly template</p>
        </div>

        <div className="flex gap-20">
          <p>⭐ ATS-friendly template</p>
          <p>⭐ AI writing suggestions</p>
          <p>⭐ Instant download</p>
          <p>⭐ ATS-friendly template</p>
        </div>

        <div className="flex gap-20">
          <p>⭐ ATS-friendly template</p>
          <p>⭐ AI writing suggestions</p>
          <p>⭐ Instant download</p>
          <p>⭐ ATS-friendly template</p>
        </div>
      </div>

    </div>
  );
}