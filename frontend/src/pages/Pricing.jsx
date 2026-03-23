import { useState, useEffect } from "react";
import { getPlans } from "../api/pricingApi";

export default function Pricing() {
  const [yearly, setYearly] = useState(false);
  const [plans, setPlans] = useState([]);

  // 🔥 FETCH DATA FROM BACKEND
  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const type = yearly ? "yearly" : "monthly";
        const res = await getPlans(type);

        // 🔥 merge with your frontend features
        const enrichedPlans = res.data.map((plan) => {
          let features = [];
          let button = "";
          let highlight = false;

          if (plan.name === "Free") {
            features = [
              "1 resume",
              "3 basic templates",
              "PDF download",
              "Basic AI suggestions",
              "Email support",
            ];
            button = "Get Started";
          }

          if (plan.name === "Pro") {
            features = [
              "Unlimited resumes",
              "All premium templates",
              "PDF & DOCX downloads",
              "Advanced AI content",
              "Cover letter builder",
              "ATS optimization",
              "Priority support",
              "Custom branding",
            ];
            button = "Upgrade to Pro";
            highlight = true;
          }

          if (plan.name === "Premium") {
            features = [
              "Everything in Pro",
              "Unlimited AI generations",
              "LinkedIn optimizer",
              "Interview prep",
              "Career coaching",
              "Personal website",
              "Job tracker",
              "Dedicated support",
            ];
            button = "Go Premium";
          }

          return {
            name: plan.name,
            price: `₹${plan.price}`,
            sub: yearly ? "/Year" : "/Month",
            features,
            button,
            highlight,
          };
        });

        setPlans(enrichedPlans);
      } catch (err) {
        console.error("Error fetching plans", err);
      }
    };

    fetchPlans();
  }, [yearly]);

  return (
    <div className="bg-background min-h-screen py-20 px-6 text-center">

      <h1 className="text-4xl font-bold mb-3">
        Simple, Transparent <span className="text-primary">Pricing</span>
      </h1>

      <p className="text-gray-500 mb-10">
        Choose the plan that's right for you.
      </p>

      {/* TOGGLE */}
      <div className="flex justify-center mb-12">
        <div className="bg-white p-1 rounded-full shadow flex">
          <button
            onClick={() => setYearly(false)}
            className={`px-6 py-2 rounded-full ${
              !yearly ? "bg-primary text-white" : ""
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setYearly(true)}
            className={`px-6 py-2 rounded-full ${
              yearly ? "bg-primary text-white" : ""
            }`}
          >
            Yearly
          </button>
        </div>
      </div>

      {/* PLANS */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {plans.map((plan, i) => (
          <div
            key={i}
            className={`bg-white p-8 rounded-2xl border shadow-md text-left ${
              plan.highlight ? "scale-105 border-secondary" : ""
            }`}
          >
            <h2 className="text-xl font-bold mb-2">{plan.name}</h2>

            <p className="text-3xl font-bold mb-6">
              {plan.price}
              <span className="text-sm text-gray-500">
                {plan.sub}
              </span>
            </p>

            <button
              className={`w-full py-2 rounded mb-6 ${
                plan.highlight
                  ? "bg-secondary text-white"
                  : "bg-gradient-to-r from-primary to-purple-600 text-white"
              }`}
            >
              {plan.button}
            </button>

            <ul className="space-y-2 text-sm text-gray-600">
              {plan.features.map((f, idx) => (
                <li key={idx}>✔ {f}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* COMPARE TABLE */}
      <div className="mt-20 max-w-5xl mx-auto bg-white p-8 rounded-2xl shadow text-left">

        <h2 className="text-2xl font-bold text-center mb-6">
          Compare <span className="text-primary">All Features</span>
        </h2>

        <table className="w-full text-sm">
          <thead>
            <tr className="text-gray-500">
              <th className="text-left py-2">Feature</th>
              <th>Free</th>
              <th>Pro</th>
              <th>Premium</th>
            </tr>
          </thead>

          <tbody className="text-center">
            <tr>
              <td className="text-left py-2">Number of Resumes</td>
              <td>1</td>
              <td>Unlimited</td>
              <td>Unlimited</td>
            </tr>

            <tr>
              <td className="text-left py-2">Templates</td>
              <td>3 Basic</td>
              <td>All Premium</td>
              <td>All Premium</td>
            </tr>

            <tr>
              <td className="text-left py-2">AI Suggestions</td>
              <td>✔</td>
              <td>✔</td>
              <td>✔</td>
            </tr>

            <tr>
              <td className="text-left py-2">Cover Letter</td>
              <td>-</td>
              <td>✔</td>
              <td>✔</td>
            </tr>

            <tr>
              <td className="text-left py-2">Career Coaching</td>
              <td>-</td>
              <td>-</td>
              <td>✔</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* CTA SECTION */}
      <div className="mt-20 max-w-5xl mx-auto bg-gradient-to-r from-primary to-purple-600 text-white rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between">

        <div className="text-left">
          <h2 className="text-2xl font-bold mb-2">
            Start Building Your Professional Resume Today
          </h2>
          <p className="text-sm opacity-90">
            Choose the plan that fits your needs.
          </p>
        </div>

        <div className="flex gap-4 mt-6 md:mt-0">
          <button className="bg-white text-primary px-6 py-2 rounded">
            Start Free
          </button>
          <button className="bg-secondary px-6 py-2 rounded">
            View Plans
          </button>
        </div>
      </div>

    </div>
  );
}