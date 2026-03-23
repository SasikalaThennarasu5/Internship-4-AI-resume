export default function DesignPanel({ styles, setStyles }) {
  return (
    <div className="space-y-6">

      {/* COLOR */}
      <div>
        <h3 className="font-semibold mb-2">Color</h3>

        <div className="grid grid-cols-6 gap-3">
          {[
            "#6C3BFF","#FF9800","#4CAF50","#2196F3",
            "#E91E63","#9C27B0","#795548","#FFC107"
          ].map((c) => (
            <div
              key={c}
              onClick={() => setStyles({ ...styles, primary: c })}
              className="w-7 h-7 rounded-full cursor-pointer border"
              style={{ background: c }}
            />
          ))}
        </div>
      </div>

      {/* FONT SIZE */}
      <div>
        <h3 className="font-semibold mb-2">Font Size</h3>

        <div className="flex gap-2">
          {["Small", "Medium", "Large"].map((size) => (
            <button
              key={size}
              onClick={() =>
                setStyles({
                  ...styles,
                  fontSize:
                    size === "Small"
                      ? "14px"
                      : size === "Medium"
                      ? "16px"
                      : "18px",
                })
              }
              className="border px-3 py-1 rounded hover:bg-primary hover:text-white"
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* FONT FAMILY */}
      <div>
        <h3 className="font-semibold mb-2">Font</h3>

        <select
          value={styles.font}
          onChange={(e) =>
            setStyles({ ...styles, font: e.target.value })
          }
          className="w-full border p-2 rounded"
        >
          <option>Inter</option>
          <option>Poppins</option>
          <option>Roboto</option>
        </select>
      </div>

      {/* LINE HEIGHT */}
      <div>
        <h3 className="font-semibold mb-2">Line Spacing</h3>

        <input
          type="range"
          min="1"
          max="2"
          step="0.1"
          value={styles.lineHeight}
          onChange={(e) =>
            setStyles({ ...styles, lineHeight: e.target.value })
          }
          className="w-full"
        />
      </div>
    </div>
  );
}