export default function Hero() {
  return (
    <div className="text-center py-20 bg-gradient-to-r from-primary to-purple-500 text-white">
      <h1 className="text-5xl font-bold mb-4">
        Create a Professional Resume with AI
      </h1>

      <p className="max-w-2xl mx-auto mb-6">
        Build a job-winning resume in minutes using our AI-powered resume
        builder.
      </p>

      <div className="flex justify-center gap-4">
        <button className="bg-primary px-6 py-3 rounded shadow-lg">
          Create My Resume
        </button>

        <button className="bg-secondary px-6 py-3 rounded shadow-lg">
          View Templates
        </button>
      </div>

      <p className="mt-4 text-sm">
        No design skills required. ATS-friendly templates.
      </p>
    </div>
  );
}