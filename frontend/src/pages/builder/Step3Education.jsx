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
            year: "",
            cgpa: "",
          },
        ]
  );

  // handle change
  const handleChange = (index, field, value) => {
    const updated = [...educations];
    updated[index][field] = value;
    setEducations(updated);
  };

  // add new degree
  const addDegree = () => {
    setEducations([
      ...educations,
      {
        university: "",
        location: "",
        degree: "",
        field: "",
        year: "",
        cgpa: "",
      },
    ]);
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

        {educations.map((edu, index) => (
          <div key={index} className="mb-8 border-b pb-6">

            <h3 className="font-semibold mb-4">
              Degree {index + 1}
            </h3>

            <div className="grid md:grid-cols-2 gap-6">

              {/* University */}
              <input
                placeholder="University Name"
                value={edu.university}
                onChange={(e) =>
                  handleChange(index, "university", e.target.value)
                }
                className="bg-gray-100 p-3 rounded"
              />

              {/* Location */}
              <input
                placeholder="Location"
                value={edu.location}
                onChange={(e) =>
                  handleChange(index, "location", e.target.value)
                }
                className="bg-gray-100 p-3 rounded"
              />

              {/* Degree */}
              <select
                value={edu.degree}
                onChange={(e) =>
                  handleChange(index, "degree", e.target.value)
                }
                className="bg-gray-100 p-3 rounded"
              >
                <option value="">Select Degree</option>
                <option>B.E</option>
                <option>B.Tech</option>
                <option>B.Sc</option>
                <option>M.E</option>
                <option>M.Tech</option>
                <option>MBA</option>
              </select>

              {/* Field */}
              <select
                value={edu.field}
                onChange={(e) =>
                  handleChange(index, "field", e.target.value)
                }
                className="bg-gray-100 p-3 rounded"
              >
                <option value="">Select Field</option>
                <option>Computer Science</option>
                <option>Information Technology</option>
                <option>Electronics</option>
                <option>Mechanical</option>
                <option>Business</option>
              </select>

              {/* Year */}
              <select
                value={edu.year}
                onChange={(e) =>
                  handleChange(index, "year", e.target.value)
                }
                className="bg-gray-100 p-3 rounded"
              >
                <option value="">Select Year</option>
                {Array.from({ length: 15 }, (_, i) => {
                  const year = new Date().getFullYear() - i;
                  return <option key={year}>{year}</option>;
                })}
              </select>

              {/* CGPA */}
              <select
                value={edu.cgpa}
                onChange={(e) =>
                  handleChange(index, "cgpa", e.target.value)
                }
                className="bg-gray-100 p-3 rounded"
              >
                <option value="">Select CGPA</option>
                <option>10</option>
                <option>9</option>
                <option>8</option>
                <option>7</option>
                <option>6</option>
              </select>

            </div>
          </div>
        ))}

        {/* ADD DEGREE BUTTON */}
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
              updateData({ education: educations });
              next();
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