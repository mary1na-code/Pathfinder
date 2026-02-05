

export default function App() {
  return (
    <main className="min-h-screen bg-background text-text font-body">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-margin-inline-base py-space-sm flex items-center justify-between">
        <div className="text-sm font-semibold uppercase text-primary">LEVEL UP YOUR CAREER</div>
        <img 
        src="../assets/hero-image.png" alt="Hero illustration for interview prep"
        className="w-80 h-96 object-cover rounded-md p-md"
        loading="lazy"/>
      </section>

      
      <section className="max-w-7xl mx-auto px-margin-inline-base py-space-xl grid grid-cols-1 md:grid-cols-12 gap-space-lg items-center">
        {/* Left column */}
        <div className="md:col-span-7">
          <h1 className="font-heading text-h1 leading-tight text-primary">
            Scrum your way to a confident interview with role-based flashcards.
          </h1>
          <p className="mt-space-md text-lg text-text font-medium">
            Level up with Chingus worldwide! practise anytime, anywhere!
          </p>

          <div className="mt-space-lg flex gap-space-sm">
            <button className="bg-primary text-white px-xl py-md rounded-md font-semibold">
              Get Started
            </button>
            <button className="border border-secondary text-secondary px-md py-sm rounded-md">
              Learn More
            </button>
          </div>
        </div>

        {/* Right column - blank card area for manual image placement */}
        <div className="md:col-span-5 flex items-center justify-center">
          <div
            className="w-80 h-96 rounded-lg border-2 border-dashed border-secondary"
            aria-hidden="true"
            title="Card image placeholder - drop your image here manually"
          />
        </div>
      </section>

      {/* Features Card row */}
      <section className="max-w-7xl mx-auto px-margin-inline-base py-space-xl grid grid-cols-1 md:grid-cols-3 gap-space-lg">
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm transform hover:scale-105 transition">
      <h2 className="text-xl font-bold flex items-center gap-2 mb-2">
        <span role="img" aria-label="flexed bicep">💪</span>
        Confidence Booster
      </h2>
      <p className="text-gray-600">
        Practise one question at a time in a focused flashcard flow that builds comfort and interview readiness.
      </p>
    </div>

        <div className="p-md rounded-lg shadow-md bg-surface">
          <h3 className="text-lg font-semibold">Targeted Practise Questions</h3>
          <p className="mt-space-sm text-md text-muted">
            Select your Scrum role and get questions tailored to your specific role.
          </p>
        </div>

        <div className="p-md rounded-lg shadow-md bg-surface">
          <h3 className="text-lg font-semibold">Instant Feedback</h3>
          <p className="mt-space-sm text-md text-muted">
            Know immediately if you're right or wrong, with clear rationale to help you improve as you go.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-margin-inline-base py-space-xl flex justify-center">
          <button className="bg-primary text-white px-xxl py-md rounded-md font-semibold">
            Get Started
          </button>
        </div>
      </section>
    </main>
  );
}
