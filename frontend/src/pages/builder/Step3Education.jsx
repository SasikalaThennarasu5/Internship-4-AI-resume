import { useState } from "react";

export default function Step3Education({ next, back, updateData, data }) {
  const [educations, setEducations] = useState(
    data?.education?.length
      ? data.education
      : [
          {
            university: "",
            location: "",
            degree: "",
            field: "",
            startYear: "",
            endYear: "",
            cgpa: "",
          },
        ]
  );

  const [errors, setErrors] = useState([]);

  // ✅ VALIDATION
  const validate = () => {
    let newErrors = [];

    educations.forEach((edu, index) => {
      let err = {};

      if (!edu.university.trim()) err.university = "University is required";
      if (!edu.location.trim()) err.location = "Location is required";
      if (!edu.degree) err.degree = "Select a degree";
      if (!edu.field) err.field = "Select a field";
      if (!edu.startYear) {
  err.startYear = "Start year is required";
}

if (!edu.endYear) {
  err.endYear = "End year is required";
} else if (
  edu.startYear &&
  edu.endYear !== "Present" &&
  Number(edu.endYear) < Number(edu.startYear)
) {
  err.endYear = "End year must be after start year";
}
      if (!edu.cgpa) err.cgpa = "Select CGPA";

      newErrors[index] = err;
    });

    setErrors(newErrors);

    return newErrors.every((err) => Object.keys(err).length === 0);
  };

  // ✅ HANDLE CHANGE + CLEAR ERROR
  const handleChange = (index, field, value) => {
    const updated = [...educations];
    updated[index][field] = value;
    setEducations(updated);

    const updatedErrors = [...errors];
    if (updatedErrors[index]) {
      delete updatedErrors[index][field];
    }
    setErrors(updatedErrors);
  };

  // ✅ ADD DEGREE
  const addDegree = () => {
  setEducations([
    ...educations,
    {
      university: "",
      location: "",
      degree: "",
      field: "",
      startYear: "",
      endYear: "",
      cgpa: "",
    },
  ]);

  setErrors([...errors, {}]);
};

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6">
      
      {/* HEADER */}
      <h1 className="text-4xl font-bold mb-2 text-center">
        Let’s <span className="text-primary">Build Your Resume</span>
      </h1>

      <p className="text-gray-500 mb-6 text-center">
        Answer a few quick questions and we’ll create your professional resume.
      </p>

      {/* STEP BAR */}
      <div className="w-full max-w-4xl mb-8">
        <p className="text-sm mb-2 text-gray-500">Step 3 of 7</p>
        <div className="h-2 bg-gray-200 rounded-full">
          <div className="h-2 bg-primary w-[45%] rounded-full"></div>
        </div>
      </div>

      {/* CARD */}
      <div className="bg-white w-full max-w-3xl p-8 rounded-2xl shadow-md">
        <h2 className="text-xl font-semibold text-center mb-6">
          Education
        </h2>

        {/* TOP ERROR MESSAGE */}
        {errors.some((e) => Object.keys(e || {}).length > 0) && (
          <p className="text-red-600 text-center mb-4">
            Please fill all required fields before continuing
          </p>
        )}

        {educations.map((edu, index) => (
          <div key={index} className="mb-8 border-b pb-6">
            <h3 className="font-semibold mb-4">
              Degree {index + 1}
            </h3>

            <div className="grid md:grid-cols-2 gap-6">

              {/* University */}
              <div>
                <input
                  placeholder="University Name"
                  value={edu.university}
                  onChange={(e) =>
                    handleChange(index, "university", e.target.value)
                  }
                  className={`p-3 rounded w-full ${
                    errors[index]?.university
                      ? "bg-red-50 border border-red-400"
                      : "bg-gray-100"
                  }`}
                />
                {errors[index]?.university && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors[index].university}
                  </p>
                )}
              </div>

              {/* Location */}
              <div>
                <input
                  placeholder="Location"
                  value={edu.location}
                  onChange={(e) =>
                    handleChange(index, "location", e.target.value)
                  }
                  className={`p-3 rounded w-full ${
                    errors[index]?.location
                      ? "bg-red-50 border border-red-400"
                      : "bg-gray-100"
                  }`}
                />
                {errors[index]?.location && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors[index].location}
                  </p>
                )}
              </div>

              {/* Degree */}
              <div>
                <select
                  value={edu.degree}
                  onChange={(e) =>
                    handleChange(index, "degree", e.target.value)
                  }
                  className={`p-3 rounded w-full ${
                    errors[index]?.degree
                      ? "bg-red-50 border border-red-400"
                      : "bg-gray-100"
                  }`}
                >
                  <option value="">Select Degree</option>
                  <option>B.E</option>
                  <option>B.Tech</option>
                  <option>B.Sc</option>
                  <option>M.E</option>
                  <option>M.Tech</option>
                  <option>MBA</option>
                </select>
                {errors[index]?.degree && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors[index].degree}
                  </p>
                )}
              </div>

              {/* Field */}
              <div>
                <select
                  value={edu.field}
                  onChange={(e) =>
                    handleChange(index, "field", e.target.value)
                  }
                  className={`p-3 rounded w-full ${
                    errors[index]?.field
                      ? "bg-red-50 border border-red-400"
                      : "bg-gray-100"
                  }`}
                >
                  <option value="">Select Field</option>
                  <option>Computer Science Engineering</option>
                  <option>Information Technology</option>
                  <option>Electronics and Electrical Engineering</option>
                  <option>Electronics and Computer Engineering</option>
                  <option>Mechanical Engineering</option>
                  <option>MBA</option>
                </select>
                {errors[index]?.field && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors[index].field}
                  </p>
                )}
              </div>

              {/* START YEAR */}
<div>
  <select
    value={edu.startYear || ""}
    onChange={(e) =>
      handleChange(index, "startYear", e.target.value)
    }
    className={`p-3 rounded w-full ${
      errors[index]?.startYear
        ? "bg-red-50 border border-red-400"
        : "bg-gray-100"
    }`}
  >
    <option value="">Start Year</option>
    {Array.from({ length: 20 }, (_, i) => {
      const year = new Date().getFullYear() - i;
      return <option key={year}>{year}</option>;
    })}
  </select>

  {errors[index]?.startYear && (
    <p className="text-red-500 text-sm mt-1">
      {errors[index].startYear}
    </p>
  )}
</div>

{/* END YEAR */}
<div>
  <select
    value={edu.endYear || ""}
    onChange={(e) =>
      handleChange(index, "endYear", e.target.value)
    }
    className={`p-3 rounded w-full ${
      errors[index]?.endYear
        ? "bg-red-50 border border-red-400"
        : "bg-gray-100"
    }`}
  >
    <option value="">End Year</option>
    <option value="Present">Present</option>

    {Array.from({ length: 20 }, (_, i) => {
      const year = new Date().getFullYear() - i;
      return <option key={year}>{year}</option>;
    })}
  </select>

  {errors[index]?.endYear && (
    <p className="text-red-500 text-sm mt-1">
      {errors[index].endYear}
    </p>
  )}
</div>

              {/* CGPA */}
              <div>
                <select
                  value={edu.cgpa}
                  onChange={(e) =>
                    handleChange(index, "cgpa", e.target.value)
                  }
                  className={`p-3 rounded w-full ${
                    errors[index]?.cgpa
                      ? "bg-red-50 border border-red-400"
                      : "bg-gray-100"
                  }`}
                >
                  <option value="">Select CGPA</option>
                  <option>10</option>
                  <option>9</option>
                  <option>8</option>
                  <option>7</option>
                  <option>6</option>
                </select>
                {errors[index]?.cgpa && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors[index].cgpa}
                  </p>
                )}
              </div>

            </div>
          </div>
        ))}

        {/* ADD DEGREE */}
        <button
          onClick={addDegree}
          className="bg-gradient-to-r from-primary to-purple-600 text-white px-5 py-2 rounded"
        >
          + Add Degree
        </button>

        {/* BUTTONS */}
        <div className="flex justify-between gap-4 mt-10">
          <button onClick={back} className="flex-1 border rounded py-2">
            Back
          </button>

          <button className="flex-1 border rounded py-2">
            💾 Save as draft
          </button>

          <button
            onClick={() => {
              if (validate()) {
                updateData({ education: educations });
                next();
              }
            }}
            className="flex-1 bg-secondary text-white rounded py-2"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}