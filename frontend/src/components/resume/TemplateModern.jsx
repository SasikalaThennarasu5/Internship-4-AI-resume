export default function TemplateModern({ data, styles, goToStep }) {
  return (
    <div className="flex w-full h-full">

      {/* LEFT SIDE */}
      <div
        className="w-[35%] p-6 text-white"
        style={{ background: `linear-gradient(${styles.primary}, #4c1d95)` }}
      >

        {/* NAME */}
        <div
          onClick={() => goToStep(6)}
          className="cursor-pointer hover:opacity-80 mb-4"
        >
          <h2 className="text-lg font-bold">
            {data.name || "Your Name"}
          </h2>
          <p className="text-sm">{data.role || "Your Role"}</p>
        </div>

        {/* CONTACT */}
        <div
          onClick={() => goToStep(6)}
          className="cursor-pointer hover:opacity-80 mb-6"
        >
          <h3 className="font-semibold mb-2">Contact</h3>
          <p>{data.email || "email@example.com"}</p>
          <p>{data.phone || "1234567890"}</p>
        </div>

        {/* SKILLS */}
        <div
          onClick={() => goToStep(4)}
          className="cursor-pointer hover:opacity-80"
        >
          <h3 className="font-semibold mb-2">Skills</h3>
          <ul className="list-disc ml-4 text-sm">
            {data.skills?.length > 0 ? (
              data.skills.map((s, i) => <li key={i}>{s}</li>)
            ) : (
              <li>Add skills</li>
            )}
          </ul>
        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="w-[65%] p-6 text-gray-800">

        {/* PROFILE */}
        <div
          onClick={() => goToStep(6)}
          className="cursor-pointer hover:bg-purple-50 p-2 rounded mb-6"
        >
          <h3 className="font-semibold mb-2">Profile</h3>
          <p>
            {data.summary || "Add your professional summary"}
          </p>
        </div>

        {/* EXPERIENCE */}
        <div
          onClick={() => goToStep(2)}
          className="cursor-pointer hover:bg-purple-50 p-2 rounded mb-6"
        >
          <h3 className="font-bold mb-2">Experience</h3>
          <p className="text-sm">
            {data.experienceLevel || "Add experience"}
          </p>
        </div>

        {/* EDUCATION */}
        <div
          onClick={() => goToStep(3)}
          className="cursor-pointer hover:bg-purple-50 p-2 rounded mb-6"
        >
          <h3 className="font-bold mb-2">Education</h3>

          {data?.education?.length > 0 ? (
            data.education.map((edu, i) => (
              <div key={i} className="mb-2 text-sm">
                <p className="font-semibold">
                  {edu.degree} - {edu.field}
                </p>
                <p>{edu.university}</p>
                <p>
                  {edu.year} | CGPA: {edu.cgpa}
                </p>
              </div>
            ))
          ) : (
            <p className="text-gray-400">Add education</p>
          )}
        </div>

        {/* PROJECTS */}
        <div
          onClick={() => goToStep(5)}
          className="cursor-pointer hover:bg-purple-50 p-2 rounded"
        >
          <h3 className="font-bold mb-2">Projects</h3>

          {data?.projects?.length > 0 ? (
            data.projects.map((proj, i) => (
              <div key={i} className="mb-3">
                <p className="font-semibold">{proj.title}</p>
                <p className="text-sm text-gray-600">
                  {proj.tools}
                </p>
                <p className="text-sm text-gray-500">
                  {proj.description}
                </p>
              </div>
            ))
          ) : (
            <p className="text-gray-400">Add projects</p>
          )}
        </div>

        {/* CERTIFICATES */}
{data.sections?.certificates && (
  <div className="mt-6">
    <h3 className="font-bold mb-2">Certificates</h3>
    <p className="text-sm text-gray-500">
      Add your certificates
    </p>
  </div>
)}

{/* LANGUAGES */}
{data.sections?.languages && (
  <div className="mt-6">
    <h3 className="font-bold mb-2">Languages</h3>
    <p className="text-sm text-gray-500">
      English, Tamil
    </p>
  </div>
)}

{/* INTERESTS */}
{data.sections?.interests && (
  <div className="mt-6">
    <h3 className="font-bold mb-2">Interests</h3>
    <p className="text-sm text-gray-500">
      Reading, Coding
    </p>
  </div>
)}

{/* PORTFOLIO */}
{data.sections?.portfolio && (
  <div className="mt-6">
    <h3 className="font-bold mb-2">Portfolio</h3>
    <p className="text-sm text-gray-500">
      www.yourportfolio.com
    </p>
  </div>
)}

{/* CUSTOM SECTIONS */}
{data.sections?.custom?.map((sec, i) => (
  <div key={i} className="mt-6">
    <h3 className="font-bold mb-2">{sec}</h3>
    <p className="text-sm text-gray-500">
      Add details
    </p>
  </div>
))}

      </div>
    </div>
  );
}