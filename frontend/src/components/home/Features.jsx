import { useEffect, useState } from "react";
import { getFeatures } from "../../api/featureApi";

export default function Features() {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    const fetchFeatures = async () => {
      try {
        const res = await getFeatures();
        setFeatures(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchFeatures();
  }, []);

  return (
    <div className="py-20 bg-[#f5f6fa] text-center">

      {/* TITLE */}
      <h2 className="text-4xl font-bold mb-2">
        <span className="text-purple-600">Features</span>
      </h2>

      <p className="text-gray-500 mb-14 text-sm">
        Smart Tools to Build the Perfect Resume
      </p>

      {/* GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 px-6 md:px-20 place-items-center">

        {features.map((f, i) => (
          <div
            key={i}
            className="relative bg-white w-[320px] p-6 pt-10 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
          >
            
            {/* ICON CIRCLE */}
            <div className="absolute -top-8 left-6">
              <div className="bg-[#fef3c7] p-2 rounded-full border-4 border-white shadow">
                <img
                  src={f.icon || "/default-icon.png"}
                  onError={(e) => (e.target.src = "/default-icon.png")}
                  className="w-10 h-10 rounded-full object-cover"
                  alt=""
                />
              </div>
            </div>

            {/* CONTENT */}
            <div className="mt-4 text-left">
              <h3 className="font-semibold text-gray-800 text-md mb-2">
                {f.title}
              </h3>

              <p className="text-sm text-gray-500 leading-relaxed">
                {f.description}
              </p>
            </div>

            {/* ORANGE BAR */}
            <div className="mt-6 h-2 bg-orange-400 rounded-full w-2/3"></div>
          </div>
        ))}

      </div>
    </div>
  );
}