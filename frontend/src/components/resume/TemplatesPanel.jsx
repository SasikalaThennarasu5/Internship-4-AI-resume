export default function TemplatesPanel({ selected, setSelected }) {
  const templates = ["modern", "minimal", "creative"];

  return (
    <>
      <h3 className="font-semibold mb-4">All Templates</h3>

      <div className="grid grid-cols-2 gap-3">
        {templates.map((t) => (
          <div
            key={t}
            onClick={() => setSelected(t)}
            className={`border cursor-pointer ${
              selected === t ? "border-primary" : ""
            }`}
          >
            <img src={`/templates/${t}.png`} />
          </div>
        ))}
      </div>
    </>
  );
}