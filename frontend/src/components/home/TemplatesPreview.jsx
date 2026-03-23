import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getTemplatePreview } from "../../api/templateApi";

export default function TemplatesPreview() {
  const [templates, setTemplates] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchPreview();
  }, []);

  const fetchPreview = async () => {
    try {
      const res = await getTemplatePreview();
      setTemplates(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="py-16 text-center">

      {/* TITLE */}
      <h2 className="text-3xl font-bold mb-10">
        Choose a Resume Template That Fits Your Style
      </h2>

      {/* CARDS */}
      <div className="flex justify-center gap-6 flex-wrap">

        {templates.map((t) => (
          <div
            key={t.id}
            className="w-64 bg-white rounded-xl shadow-md p-3 relative hover:shadow-lg transition"
          >
            {/* PRO BADGE */}
            {t.is_pro && (
              <span className="absolute top-3 right-3 bg-secondary text-white text-xs px-3 py-1 rounded-full">
                Pro
              </span>
            )}

            {/* IMAGE */}
            <img
              src={`http://127.0.0.1:8000${t.image}`}
              alt={t.name}
              className="rounded-lg h-72 w-full object-cover"
            />

            {/* NAME */}
            <h3 className="mt-3 font-semibold">{t.name}</h3>
          </div>
        ))}

      </div>

      {/* BUTTON */}
      <button
        onClick={() => navigate("/templates")}
        className="mt-8 bg-primary text-white px-6 py-2 rounded"
      >
        View All Templates
      </button>

    </div>
  );
}