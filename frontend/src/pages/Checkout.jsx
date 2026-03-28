import { useLocation, useNavigate } from "react-router-dom";

export default function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();

  const { planName, billing, price } = location.state || {};

  const handlePayment = () => {
    alert("Payment Successful ✅ (Dummy)");
    navigate("/builder");
  };

  if (!planName) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>No plan selected ❌</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">

      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full">

        {/* TITLE */}
        <h1 className="text-2xl font-bold mb-6 text-center">
          Checkout
        </h1>

        {/* PLAN DETAILS */}
        <div className="border rounded-lg p-4 mb-6">
          <h2 className="text-lg font-semibold mb-2">{planName} Plan</h2>
          <p className="text-gray-600">
            Billing: <span className="capitalize">{billing}</span>
          </p>
          <p className="text-2xl font-bold mt-2">{price}</p>
        </div>

        {/* PAYMENT OPTIONS (Dummy) */}
        <div className="space-y-3 mb-6">
          <button className="w-full py-2 border rounded hover:bg-gray-100">
            Pay with Card 💳
          </button>
          <button className="w-full py-2 border rounded hover:bg-gray-100">
            Pay with UPI 📱
          </button>
        </div>

        {/* PAY BUTTON */}
        <button
          onClick={handlePayment}
          className="w-full py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
        >
          Confirm Payment
        </button>

        {/* BACK */}
        <button
          onClick={() => navigate("/pricing")}
          className="w-full mt-3 text-sm text-gray-500 hover:underline"
        >
          ← Back to Pricing
        </button>

      </div>
    </div>
  );
}