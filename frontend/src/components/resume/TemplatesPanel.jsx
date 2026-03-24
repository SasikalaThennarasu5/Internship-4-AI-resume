import { useEffect, useState } from "react";
import { getTemplates } from "../../api/templateApi";

export default function TemplatesPanel({ selected, setSelected }) {
  const [templates, setTemplates] = useState([]);
  const [active, setActive] = useState("All");

  const filters = ["All", "modern", "professional", "minimal", "creative"];

  const mapTemplateName = (name) => {
    const n = name.toLowerCase();

    if (n.includes("modern")) return "modern";
    if (n.includes("minimal")) return "minimal";
    if (n.includes("creative")) return "creative";

    return "modern"; // fallback
  };

  useEffect(() => {
    const fetchTemplates = async () => {
      try {
        const res = await getTemplates(active);
        setTemplates(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchTemplates();
  }, [active]);

  return (
    <>
      {/* TITLE */}
      <h3 className="font-semibold mb-4">All Templates</h3>

      {/* FILTERS */}
      <div className="flex gap-2 mb-4 flex-wrap">
        {filters.map((item, i) => (
          <button
            key={i}
            onClick={() => setActive(item)}
            className={`px-3 py-1 text-sm rounded-full border ${
              active === item
                ? "bg-primary text-white"
                : "bg-white text-gray-600"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 gap-3">
        {templates.map((t, i) => (
          <div
            key={i}
            onClick={() => setSelected(mapTemplateName(t.name))}
            className={`border rounded-lg cursor-pointer overflow-hidden transition ${
              selected === t.name.toLowerCase()
                ? "border-primary ring-2 ring-primary/40"
                : "hover:shadow"
            }`}
          >
            {/* IMAGE */}
            <img
              src={t.image || "/default-template.png"}
              onError={(e) =>
                (e.target.src = "/default-template.png")
              }
              className="h-32 w-full object-cover"
            />

            {/* NAME */}
            <div className="p-2 text-sm font-medium text-center">
              {t.name}
            </div>

            {/* PRO BADGE */}
            {t.is_pro && (
              <span className="absolute top-2 right-2 bg-secondary text-white text-xs px-2 py-1 rounded-full">
                Pro
              </span>
            )}
          </div>
        ))}
      </div>
    </>
  );
}