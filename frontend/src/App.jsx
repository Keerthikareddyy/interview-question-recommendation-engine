import ResumeUploader from "./components/ResumeUploader";
import { useState } from "react";
import api from "./services/api";
import Header from "./components/Header";
import Loading from "./components/Loading";
import MatchCard from "./components/MatchCard";
import SkillCard from "./components/SkillCard";
import QuestionCard from "./components/QuestionCard";

function App() {
  const [resume, setResume] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const generateInterviewPlan = async () => {
    if (!resume.trim() || !jobDescription.trim()) {
      alert("Please enter both Resume and Job Description");
      return;
    }

    try {
      setLoading(true);

      const response = await api.post("/generate", {
        resume,
        jobDescription,
      });

      let data = response.data;

      if (typeof data === "string") {
        data = JSON.parse(data);
      }

      setResult(data);
    } catch (err) {
      console.error(err);
      alert("Failed to generate interview plan.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100">

      <div className="max-w-7xl mx-auto p-8">

        <Header />

        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-white rounded-2xl shadow-lg p-6">

            <h2 className="text-2xl font-bold mb-4">
              Candidate Resume
            </h2>
<ResumeUploader
  onTextExtracted={(text) => setResume(text)}
/>
            <textarea
              rows={15}
              className="w-full border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Paste candidate resume..."
              value={resume}
              onChange={(e) => setResume(e.target.value)}
            />

          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">

            <h2 className="text-2xl font-bold mb-4">
              Job Description
            </h2>

            <textarea
              rows={15}
              className="w-full border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Paste job description..."
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
            />

          </div>

        </div>

        <div className="text-center mt-8">

          <button
            onClick={generateInterviewPlan}
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 hover:scale-105 transition-all duration-300 text-white px-10 py-4 rounded-xl font-semibold shadow-lg"
          >
            ✨ Generate Interview Plan
          </button>

        </div>

        {loading && <Loading />}

        {!loading && !result && (

          <div className="bg-white rounded-2xl shadow-lg mt-10 p-12 text-center">

            <h2 className="text-3xl font-bold text-blue-700">
              Ready to Analyze
            </h2>

            <p className="text-gray-500 mt-4">
              Paste a resume and a job description above, then click
              <strong> Generate Interview Plan </strong>
              to let AI evaluate the candidate.
            </p>

          </div>

        )}

        {result && !loading && (

          <>

            {(result.matchScore !== undefined ||
              result.recommendation ||
              result.summary) && (

              <div className="mt-10">

                <MatchCard
                  score={result.matchScore ?? 0}
                  recommendation={result.recommendation ?? "N/A"}
                  summary={result.summary ?? ""}
                />

              </div>

            )}

            <div className="grid md:grid-cols-2 gap-6 mt-8">

              <SkillCard
                title="Candidate Strengths"
                items={result.strengths || []}
                color="text-green-600"
              />

              <SkillCard
                title="Missing Skills"
                items={result.missingSkills || []}
                color="text-red-600"
              />

            </div>

            <div className="mt-10">

              <h2 className="text-3xl font-bold mb-6">
                Recommended Interview Questions
              </h2>

              {(result.questions || []).map((question, index) => (

                <QuestionCard
                  key={index}
                  question={question}
                />

              ))}

            </div>

          </>

        )}

      </div>

    </div>
  );
}

export default App;