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
    <div className="py-20 bg-[#f3f4f8]">

      {/* TITLE */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">
          <span className="text-purple-600">Features</span>
        </h2>
        <p className="text-gray-500 text-sm mt-2">
          Smart Tools to Build the Perfect Resume
        </p>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 md:px-16">

        {features.map((f, i) => (
          <div
            key={i}
            className={`group relative bg-white p-6 pt-10 rounded-xl border border-gray-200 
            shadow-sm transition-all duration-300 ease-in-out
            hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(0,0,0,0.12)]
            
            ${i % 2 !== 0 ? "mt-6" : ""}`} // slight stagger
          >

            {/* ICON */}
            <div className="absolute -top-7 left-6 transition-all duration-300 group-hover:scale-110">
              <div className="bg-[#fde68a] p-2 rounded-full border-4 border-white shadow">
                <img
                  src={f.icon || "/default-icon.png"}
                  onError={(e) => (e.target.src = "/default-icon.png")}
                  className="w-9 h-9 rounded-full object-cover"
                  alt=""
                />
              </div>
            </div>

            {/* CONTENT */}
            <div className="text-left">
              <h3 className="font-semibold text-gray-800 text-sm mb-2">
                {f.title}
              </h3>

              <p className="text-xs text-gray-500 leading-relaxed">
                {f.description}
              </p>
            </div>

            {/* ORANGE BAR */}
            <div className="mt-6">
              <div className="h-2 bg-orange-400 rounded-full w-2/3 transition-all duration-300 group-hover:w-full"></div>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
}