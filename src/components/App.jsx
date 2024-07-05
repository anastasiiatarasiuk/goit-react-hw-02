import { useState, useEffect } from "react";
import Description from "./Description/Description";
import descriptionData from "./Description/Description.json";
import Options from "./Options/Options";
import Feedback from "./Feedback/Feedback";
import Notification from "./Notification/Notification";

export default function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = JSON.parse(window.localStorage.getItem("feedback"));
    if (savedFeedback) {
      return savedFeedback;
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    window.localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const positive =
    totalFeedback > 0
      ? Math.round(((feedback.good + feedback.neutral) / totalFeedback) * 100)
      : 0;

  const updateFeedback = (feedbackType) => {
    setFeedback((prev) => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
  };

  const handleReset = () => {
    setFeedback({
      ...feedback,
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <>
      <Description
        title={descriptionData.title}
        description={descriptionData.description}
      />
      <Options
        onFeedback={updateFeedback}
        total={totalFeedback}
        reset={handleReset}
      />
      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <Feedback
          feedback={feedback}
          total={totalFeedback}
          positive={positive}
        />
      )}
    </>
  );
}
