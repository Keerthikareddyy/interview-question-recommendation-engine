function MatchCard({ score, recommendation, summary }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">

      <h2 className="text-2xl font-bold mb-6">
        Candidate Match
      </h2>

      <div className="text-center">

        <div className="text-6xl font-bold text-blue-600">
          {score}%
        </div>

        <div className="mt-4 inline-block bg-green-100 text-green-700 px-5 py-2 rounded-full font-semibold">
          {recommendation}
        </div>

        <p className="mt-6 text-gray-600">
          {summary}
        </p>

      </div>

    </div>
  );
}

export default MatchCard;