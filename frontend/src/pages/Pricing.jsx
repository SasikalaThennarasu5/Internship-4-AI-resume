import { useState, useEffect, useRef } from "react";
import { getPlans } from "../api/pricingApi";
import { useNavigate } from "react-router-dom";

export default function Pricing() {
  const [yearly, setYearly] = useState(false);
  const [plans, setPlans] = useState([]);
  const navigate = useNavigate();
  const plansRef = useRef(null);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const type = yearly ? "yearly" : "monthly";
        const res = await getPlans(type);

        const enrichedPlans = res.data.map((plan) => {
          let features = [];
          let button = "";
          let highlight = false;
          let icon = "";

          if (plan.name === "Free") {
            features = [
              "1 resume",
              "3 basic templates",
              "PDF download",
              "Basic AI suggestions",
              "Email support",
            ];
            button = "Get Started";
            icon = "/images/free.png";
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
            icon = "/images/pro.png";
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
            icon = "/images/premium.png";
          }

          return {
            name: plan.name,
            price: `₹${plan.price}`,
            sub: yearly ? "/Year" : "/Month",
            features,
            button,
            highlight,
            icon,
            raw: plan, // ✅ keep original plan
          };
        });

        setPlans(enrichedPlans);
      } catch (err) {
        console.error("Error fetching plans", err);
      }
    };

    fetchPlans();
  }, [yearly]);

  // ✅ PLAN CLICK
  const handleSelectPlan = (plan) => {
    navigate("/checkout", {
      state: {
        planName: plan.name,
        billing: yearly ? "yearly" : "monthly",
        price: plan.price,
      },
    });
  };

  return (
    <div className="bg-background min-h-screen py-20 px-6 text-center">

      {/* TITLE */}
      <h1 className="text-4xl font-bold mb-3">
        Simple, Transparent <span className="text-primary">Pricing</span>
      </h1>

      <p className="text-gray-500 mb-10 text-sm">
        Choose the plan that's right for you.
      </p>

      {/* TOGGLE */}
      <div className="flex justify-center mb-14">
        <div className="bg-white p-1 rounded-full shadow flex">
          <button
            onClick={() => setYearly(false)}
            className={`px-6 py-2 rounded-full transition ${
              !yearly ? "bg-primary text-white shadow" : ""
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setYearly(true)}
            className={`px-6 py-2 rounded-full transition ${
              yearly ? "bg-primary text-white shadow" : ""
            }`}
          >
            Yearly
          </button>
        </div>
      </div>

      {/* PLANS */}
      <div
        ref={plansRef}
        className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto"
      >
        {plans.map((plan, i) => (
          <div
            key={i}
            className={`relative bg-white p-8 rounded-2xl border text-left transition-all duration-300 hover:scale-105 hover:shadow-xl ${
              plan.highlight
                ? "border-orange-400 scale-105 shadow-xl"
                : "border-gray-200 shadow-md"
            }`}
          >
            {/* ICON */}
            <div className="flex justify-center mb-4">
              <img src={plan.icon} className="w-12 h-12" alt="" />
            </div>

            {/* NAME */}
            <h2 className="text-xl font-bold mb-2 text-center">
              {plan.name}
            </h2>

            {/* PRICE */}
            <p className="text-3xl font-bold mb-6 text-center">
              {plan.price}
              <span className="text-sm text-gray-500">
                {plan.sub}
              </span>
            </p>

            {/* BUTTON */}
            <button
              onClick={() => handleSelectPlan(plan)}
              className={`w-full py-2 rounded mb-6 font-medium transition ${
                plan.highlight
                  ? "bg-orange-400 text-white hover:bg-orange-500 shadow-lg"
                  : "bg-gradient-to-r from-primary to-purple-600 text-white hover:opacity-90"
              }`}
            >
              {plan.button}
            </button>

            {/* FEATURES */}
            <ul className="space-y-2 text-sm text-gray-600">
              {plan.features.map((f, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="text-green-500">✔</span> {f}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* COMPARE TABLE */}
<div className="mt-20 max-w-5xl mx-auto bg-white p-8 rounded-2xl shadow text-left">

  {/* TITLE */}
  <h2 className="text-2xl font-bold text-center mb-6">
    Compare <span className="text-primary">All Features</span>
  </h2>

  {/* TABLE */}
  <table className="w-full text-sm border-collapse">

    {/* TABLE HEAD */}
    <thead>
      <tr className="text-gray-500 border-b">
        <th className="text-left py-3">Feature</th>
        <th className="py-3">Free</th>
        <th className="py-3">Pro</th>
        <th className="py-3">Premium</th>
      </tr>
    </thead>

    {/* TABLE BODY */}
    <tbody className="text-center">

      <tr className="border-b">
        <td className="text-left py-3">Number of Resumes</td>
        <td>1</td>
        <td>Unlimited</td>
        <td>Unlimited</td>
      </tr>

      <tr className="border-b">
        <td className="text-left py-3">Templates</td>
        <td>3 Basic</td>
        <td>All Premium</td>
        <td>All Premium</td>
      </tr>

      <tr className="border-b">
        <td className="text-left py-3">AI Suggestions</td>
        <td>✔</td>
        <td>✔</td>
        <td>✔</td>
      </tr>

      <tr className="border-b">
        <td className="text-left py-3">Cover Letter</td>
        <td>-</td>
        <td>✔</td>
        <td>✔</td>
      </tr>

      <tr>
        <td className="text-left py-3">Career Coaching</td>
        <td>-</td>
        <td>-</td>
        <td>✔</td>
      </tr>

    </tbody>
  </table>

</div>

      {/* CTA */}
      <div className="mt-20 max-w-5xl mx-auto bg-gradient-to-r from-primary to-purple-600 text-white rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between">

        <img src="/images/girl.png" className="w-40 md:w-56 mb-6 md:mb-0" alt="" />

        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold mb-2">
            Start Building Your Professional Resume Today
          </h2>
        </div>

        <div className="flex gap-4 mt-6 md:mt-0">
          {/* ✅ START FREE */}
          <button
            onClick={() => navigate("/builder")}
            className="bg-white text-primary px-6 py-2 rounded shadow hover:scale-105 transition"
          >
            Start Free
          </button>

          {/* ✅ VIEW PLANS */}
          <button
            onClick={() =>
              plansRef.current.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-orange-400 px-6 py-2 rounded shadow hover:bg-orange-500 transition"
          >
            View Plans
          </button>
        </div>
      </div>

    </div>
  );
}