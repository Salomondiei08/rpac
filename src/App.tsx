import "./index.css";

const App = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white flex items-center justify-center px-6">
      <div className="text-center space-y-4">
        <h1 className="text-3xl sm:text-4xl font-bold">Site en construction</h1>
        <p className="text-lg sm:text-xl text-white/90">
          Réalisé par{" "}
          <a
            href="https://github.com/Salomondiei08"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline underline-offset-4 hover:text-white"
          >
            Salomon Diei
          </a>
          . Revenez bientôt.
        </p>
      </div>
    </div>
  );
};

export default App;
