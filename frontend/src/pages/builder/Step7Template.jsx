import { useState, useEffect } from "react";

export default function Step7Template({ next, back, updateData, data }) {
  const [selected, setSelected] = useState("Minimal");
  const [includePhoto, setIncludePhoto] = useState(true);

  // ✅ Prefill when user comes back
  useEffect(() => {
    if (data) {
      setSelected(data.template || "Minimal");
      setIncludePhoto(
        data.includePhoto !== undefined ? data.includePhoto : true
      );
    }
  }, [data]);

  const templates = [
    { name: "Minimal", img: "/templates/t3.png" },
    { name: "Modern", img: "/templates/t1.png" },
    { name: "Creative", img: "/templates/t4.png" },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4">

      <h1 className="text-4xl font-bold mb-2">
        Let’s Build <span className="text-primary">Your Resume</span>
      </h1>

      <p className="text-gray-500 mb-6 text-center">
        Answer a few quick questions and we’ll create your professional resume.
      </p>

      <div className="w-full max-w-5xl mb-2 text-sm text-gray-500">
        Step 7 of 7
      </div>

      <div className="w-full max-w-5xl h-2 bg-gray-200 rounded-full mb-6">
        <div className="w-full h-2 bg-primary rounded-full"></div>
      </div>

      {/* TEMPLATE CARD */}
      <div className="bg-white w-full max-w-3xl p-10 rounded-2xl shadow-md border text-center">

        <h2 className="text-xl font-semibold mb-8">
          Choose Template
        </h2>

        <div className="flex justify-center gap-8 mb-8">
          {templates.map((t) => (
            <div
              key={t.name}
              onClick={() => setSelected(t.name)}
              className={`cursor-pointer p-4 rounded-xl border w-40 transition ${
                selected === t.name
                  ? "border-primary shadow-lg scale-105"
                  : "border-gray-200 hover:shadow"
              }`}
            >
              <img
                src={t.img}
                alt={t.name}
                className="h-40 w-full object-cover rounded mb-3"
              />
              <p className="text-sm font-medium">{t.name}</p>
            </div>
          ))}
        </div>

        {/* CHECKBOX */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <div
            onClick={() => setIncludePhoto(!includePhoto)}
            className={`w-5 h-5 flex items-center justify-center rounded cursor-pointer ${
              includePhoto ? "bg-orange-500 text-white" : "border"
            }`}
          >
            {includePhoto && "✓"}
          </div>

          <p className="text-sm">Include Profile Photo</p>
        </div>

        {/* BUTTONS */}
        <div className="flex justify-between items-center">

          <button onClick={back} className="px-6 py-2 border rounded">
            Back
          </button>

          <button className="px-6 py-2 border rounded">
            💾 Save as draft
          </button>

          <button
            onClick={() => {
              updateData({
                template: selected,
                includePhoto,
              });
              next();
            }}
            className="px-8 py-2 bg-orange-500 text-white rounded"
          >
            Process Your CV
          </button>
        </div>
      </div>
    </div>
  );
}