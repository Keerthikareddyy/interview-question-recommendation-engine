import { FaRobot } from "react-icons/fa";

function Loading() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-10 text-center mt-8">

      <div className="animate-bounce text-blue-600 text-6xl flex justify-center mb-6">
        <FaRobot />
      </div>

      <h2 className="text-2xl font-bold">
        AI is analyzing the candidate...
      </h2>

      <p className="text-gray-500 mt-3">
        Comparing resume with job description
      </p>

      <div className="mt-8 w-full bg-gray-200 rounded-full h-3">

        <div className="bg-blue-600 h-3 rounded-full animate-pulse w-3/4"></div>

      </div>

    </div>
  );
}

export default Loading;