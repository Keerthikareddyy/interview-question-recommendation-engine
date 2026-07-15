import { FaRobot } from "react-icons/fa";

function Header() {
  return (
    <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 rounded-3xl p-10 text-white shadow-xl mb-8">

      <div className="flex items-center gap-5">

        <div className="bg-white text-blue-700 p-4 rounded-full text-3xl">
          <FaRobot />
        </div>

        <div>

          <h1 className="text-4xl font-bold">
            Intelligent Interview Question Recommendation Engine
          </h1>

          <p className="mt-3 text-blue-100 text-lg">
            AI powered candidate analysis, skill gap detection and interview planning.
          </p>

        </div>

      </div>

    </div>
  );
}

export default Header;