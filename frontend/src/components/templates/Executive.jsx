export default function Executive({ data }) {
  return (
    <div className="bg-gray-100 p-6 w-full max-w-3xl mx-auto">
      
      <div className="bg-primary text-white p-4">
        <h1 className="text-xl font-bold">{data.name}</h1>
        <p>{data.email}</p>
      </div>

      <div className="p-4">
        <h2 className="font-semibold">Skills</h2>
        <p>{data.skills}</p>

        <h2 className="font-semibold mt-4">Experience</h2>
        <p>{data.experience}</p>
      </div>

    </div>
  );
}