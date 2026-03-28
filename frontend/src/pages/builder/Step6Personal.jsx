import { useState, useEffect } from "react";

export default function Step6Personal({ next, back, updateData, data }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    summary: "",
  });

  const [errors, setErrors] = useState({});

  // ✅ Prefill
  useEffect(() => {
    if (data) {
      setForm({
        name: data.name || "",
        email: data.email || "",
        phone: data.phone || "",
        summary: data.summary || "",
      });
    }
  }, [data]);

  // ✅ VALIDATION
  const validate = () => {
    let newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(form.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }

    if (!form.summary.trim()) {
      newErrors.summary = "Summary is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // ✅ HANDLE CHANGE + CLEAR ERROR
  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });

    setErrors((prev) => ({
      ...prev,
      [field]: "",
    }));
  };

  // ✅ AI SUMMARY
  const generateSummary = () => {
    const role = data?.role || "professional";
    const skills = data?.skills?.join(", ") || "modern technologies";

    const generated = `Motivated ${role} with strong skills in ${skills}. Passionate about problem-solving and building efficient solutions. Looking to contribute and grow in a dynamic work environment.`;

    setForm({ ...form, summary: generated });

    // clear summary error
    setErrors((prev) => ({ ...prev, summary: "" }));
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4">

      <h1 className="text-4xl font-bold mb-2">
        Let’s Build <span className="text-primary">Your Resume</span>
      </h1>

      <p className="text-gray-500 mb-6 text-center">
        Answer a few quick questions and we’ll create your professional resume.
      </p>

      <div className="w-full max-w-5xl mb-2 text-sm text-gray-500">
        Step 6 of 7
      </div>

      <div className="w-full max-w-5xl h-2 bg-gray-200 rounded-full mb-6">
        <div className="w-[85%] h-2 bg-primary rounded-full"></div>
      </div>

      <div className="bg-white w-full max-w-3xl p-10 rounded-2xl shadow-md border">

        <h2 className="text-xl font-semibold text-center mb-6">
          Personal Details
        </h2>

        {/* TOP ERROR */}
        {Object.keys(errors).length > 0 && (
          <p className="text-red-600 text-center mb-4">
            Please fill all required fields correctly
          </p>
        )}

        {/* FORM */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* NAME */}
          <div>
            <input
              placeholder="Name"
              value={form.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className={`p-3 w-full rounded ${
                errors.name
                  ? "bg-red-50 border border-red-400"
                  : "bg-gray-100"
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* EMAIL */}
          <div>
            <input
              placeholder="Email"
              value={form.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className={`p-3 w-full rounded ${
                errors.email
                  ? "bg-red-50 border border-red-400"
                  : "bg-gray-100"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* PHONE */}
          <div>
            <input
              placeholder="Phone"
              value={form.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              className={`p-3 w-full rounded ${
                errors.phone
                  ? "bg-red-50 border border-red-400"
                  : "bg-gray-100"
              }`}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

        </div>

        {/* SUMMARY */}
        <div className="mt-6">
          <textarea
            placeholder="Profile Summary"
            value={form.summary}
            onChange={(e) => handleChange("summary", e.target.value)}
            className={`w-full p-3 rounded ${
              errors.summary
                ? "bg-red-50 border border-red-400"
                : "bg-gray-100"
            }`}
          />
          {errors.summary && (
            <p className="text-red-500 text-sm mt-1">
              {errors.summary}
            </p>
          )}
        </div>

        <button
          onClick={generateSummary}
          className="mt-3 text-primary text-sm"
        >
          ✨ Generate Smart Summary
        </button>

        {/* BUTTONS */}
        <div className="flex justify-between mt-8 gap-4">

          <button onClick={back} className="flex-1 py-2 border rounded">
            Back
          </button>

          <button className="flex-1 py-2 border rounded">
            💾 Save as draft
          </button>

          <button
            onClick={() => {
              if (validate()) {
                updateData(form);
                next();
              }
            }}
            className="flex-1 py-2 bg-orange-500 text-white rounded"
          >
            Next
          </button>
        </div>

      </div>
    </div>
  );
}