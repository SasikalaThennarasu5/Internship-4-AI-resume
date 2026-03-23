export default function ModernPro({ data }) {
  return (
    <div className="bg-white p-6 shadow-lg w-full max-w-3xl mx-auto">
      
      <h1 className="text-2xl font-bold text-primary">
        {data.name || "Your Name"}
      </h1>

      <p className="text-gray-600">{data.email}</p>

      <hr className="my-4" />

      <h2 className="font-semibold text-lg">Skills</h2>
      <p>{data.skills}</p>

      <h2 className="font-semibold text-lg mt-4">Experience</h2>
      <p>{data.experience}</p>

    </div>
  );
}