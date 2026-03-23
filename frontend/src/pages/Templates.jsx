import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getTemplates } from "../api/templateApi";

export default function Templates() {
  const navigate = useNavigate();

  const [templates, setTemplates] = useState([]);
  const [active, setActive] = useState("All");

  // 🔥 FETCH DATA
  useEffect(() => {
    const fetchTemplates = async () => {
      const res = await getTemplates(active);
      setTemplates(res.data);
    };

    fetchTemplates();
  }, [active]);

  const filters = ["All", "modern", "professional", "minimal", "creative"];

  return (
    <div className="bg-background min-h-screen py-12 px-6">

      {/* TITLE */}
      <h1 className="text-4xl font-bold text-center">
        Resume <span className="text-primary">Templates</span>
      </h1>

      <p className="text-center text-gray-500 mt-3">
        Choose from our professionally designed templates.
      </p>

      {/* FILTER BUTTONS */}
      <div className="flex justify-center gap-4 mt-8 flex-wrap">
        {filters.map((item, i) => (
          <button
            key={i}
            onClick={() => setActive(item)}
            className={`px-5 py-2 rounded-full border ${
              active === item
                ? "bg-primary text-white"
                : "bg-white text-gray-600"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* TEMPLATE GRID */}
      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8 mt-12">
        {templates.map((t, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 relative"
          >
            {/* PRO BADGE */}
            {t.is_pro && (
              <span className="absolute top-3 right-3 bg-secondary text-white text-xs px-3 py-1 rounded-full">
                Pro
              </span>
            )}

            {/* IMAGE */}
            <img
              src={t.image}
              alt={t.name}
              className="rounded-lg h-64 w-full object-cover"
            />

            {/* NAME */}
            <h2 className="font-semibold mt-4">{t.name}</h2>

            <p className="text-sm text-gray-500">
              ATS-Friendly
            </p>

            {/* BUTTON */}
            <button
              onClick={() =>
                navigate("/builder", { state: { template: t.name } })
              }
              className="mt-3 w-full bg-primary text-white py-2 rounded"
            >
              Use Template
            </button>
          </div>
        ))}
      </div>

      {/* CTA (UNCHANGED) */}
      <div className="mt-16 bg-gradient-to-r from-primary to-purple-500 text-white rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">
            Found a Template You Like?
          </h2>
          <p className="text-sm mt-2">
            Start building your professional resume.
          </p>

          <button className="mt-4 bg-secondary px-6 py-2 rounded">
            Start Building Resume
          </button>
        </div>

        <img src="/girl.png" className="h-40 mt-6 md:mt-0" />
      </div>
    </div>
  );
}