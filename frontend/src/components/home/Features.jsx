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
    <div className="py-20 bg-gray-50 text-center">

      <h2 className="text-4xl font-bold mb-2">
        <span className="text-primary">Features</span>
      </h2>

      <p className="text-gray-500 mb-12">
        Smart Tools to Build the Perfect Resume
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 md:px-20">

        {features.map((f, i) => (
          <div
            key={i}
            className="relative bg-white p-6 rounded-2xl shadow-md text-left"
          >
            <img
              src={f.icon}
              className="absolute -top-6 left-6 w-14 h-14 rounded-full"
              alt=""
            />

            <div className="mt-10">
              <h3 className="font-semibold text-lg mb-2">
                {f.title}
              </h3>

              <p className="text-sm text-gray-500">
                {f.description}
              </p>
            </div>

            <div className="mt-6 h-2 bg-secondary rounded-full w-1/2"></div>
          </div>
        ))}

      </div>
    </div>
  );
}