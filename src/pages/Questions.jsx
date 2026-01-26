import questions from "../data/flashcards.js";
import { roles } from "../data/roles.js";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Questions() {
  const { roleId } = useParams();

  const roleExists = roles.find(function (role) {
    return role.id === roleId;
  });

  if (!roleExists) {
    return <h1>Role not found</h1>;
  }

  const roleLabel = roleExists.label;

  const roleQuestions = questions.find(function (q) {
    return q.role === roleLabel;
  });

  if (!roleQuestions) {
    return <h1>No questions available</h1>;
  }

  const flashcards = roleQuestions.flashcards;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(function () {
    setCurrentIndex(0);
  }, [roleId]);

  const currentQuestion = flashcards[currentIndex];

  function goToNextQuestion() {
    if (currentIndex < flashcards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
    else {
      setFinished(true);
    }
  }

  return (
    <>
      <h1>{roleLabel} Questions</h1>

      {finished ? (
        <div className="no-more-questions">
          You have completed all questions!
        </div>
      ) : (
        <section className="question-section">
          <div>
            <section className="question-title">
              Question {currentIndex + 1}: {flashcards[currentIndex].question}
            </section>
            <section className="question-choices">
              <div>A: {flashcards[currentIndex].options.A}</div>
              <div>B: {flashcards[currentIndex].options.B}</div>
              <div>C: {flashcards[currentIndex].options.C}</div>
              <div>D: {flashcards[currentIndex].options.D}</div>
            </section>
          </div>
          <button onClick={goToNextQuestion}>Next</button>
        </section>
      )}
    </>
  );
}
