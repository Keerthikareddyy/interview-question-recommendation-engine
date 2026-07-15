import { useState } from "react";

function QuestionCard({ question }) {
  const [approved, setApproved] = useState(false);
  const [rejected, setRejected] = useState(false);
  const [text, setText] = useState(question.question);

  const difficultyColor = {
    Easy: "bg-green-100 text-green-700",
    Medium: "bg-yellow-100 text-yellow-700",
    Hard: "bg-red-100 text-red-700",
  };

  return (
    <div className="bg-white rounded-xl shadow p-6 mb-6">

      <div className="flex justify-between items-center mb-4">

        <span
          className={`px-3 py-1 rounded-full text-sm font-semibold ${
            difficultyColor[question.difficulty] ||
            "bg-gray-100"
          }`}
        >
          {question.difficulty}
        </span>

      </div>

      <textarea
        className="w-full border rounded p-3 font-medium"
        rows={3}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <h3 className="font-semibold mt-4">
        Expected Answer Points
      </h3>

      <ul className="list-disc ml-6 mt-2">

        {question.expectedAnswer.map((point, index) => (

          <li key={index}>
            {point}
          </li>

        ))}

      </ul>

      <div className="mt-4">

        <h3 className="font-semibold">
          Reason
        </h3>

        <p className="text-gray-600">
          {question.reason}
        </p>

      </div>

      <div className="flex gap-4 mt-6">

        <button
          onClick={()=>{
            setApproved(true);
            setRejected(false);
          }}
          className={`px-4 py-2 rounded ${
            approved
              ? "bg-green-600 text-white"
              : "bg-gray-200"
          }`}
        >
          Approve
        </button>

        <button
          onClick={()=>{
            setRejected(true);
            setApproved(false);
          }}
          className={`px-4 py-2 rounded ${
            rejected
              ? "bg-red-600 text-white"
              : "bg-gray-200"
          }`}
        >
          Reject
        </button>

      </div>

    </div>
  );
}

export default QuestionCard;