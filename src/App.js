import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

const quizData = {
  HTML: [
    { question: "What does HTML stand for?", options: ["HyperText Markup Language", "Home Tool Markup Language", "Hyperlink Text Markup Language", "None of the above"], answer: 0, explanation: "HTML stands for HyperText Markup Language." },
    {
      "question": "What is the correct HTML element for inserting a line break?",
      "options": ["<break>", "<lb>", "<br>", "<line>"],
      "answer": 3,
      "explanation": "The <br> tag is used to insert a line break in HTML."
    },
    {
      "question": "Which HTML tag is used to define an unordered list?",
      "options": ["<ul>", "<ol>", "<li>", "<list>"],
      "answer": 1,
      "explanation": "The <ul> tag is used to define an unordered list in HTML."
    },
    {
      "question": "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
      "options": ["title", "alt", "src", "href"],
      "answer": 2,
      "explanation": "The alt attribute specifies an alternate text for an image."
    },
    {
      "question": "What is the correct HTML element for the largest heading?",
      "options": ["<heading>", "<h6>", "<h1>", "<head>"],
      "answer": 3,
      "explanation": "The <h1> element defines the largest heading in HTML."
    },
    {
      "question": "Which HTML tag is used to create a hyperlink?",
      "options": ["<link>", "<a>", "<href>", "<hyperlink>"],
      "answer": 2,
      "explanation": "The <a> tag is used to create a hyperlink in HTML."
    },
    {
      "question": "Which HTML tag is used to define a table?",
      "options": ["<table>", "<tab>", "<td>", "<tr>"],
      "answer": 1,
      "explanation": "The <table> tag is used to define a table in HTML."
    },
    {
      "question": "Which HTML tag is used to define an input field in a form?",
      "options": ["<input>", "<form>", "<textfield>", "<enter>"],
      "answer": 1,
      "explanation": "The <input> tag is used to define an input field in a form."
    },
    {
      "question": "Which HTML tag is used to define a footer for a document or section?",
      "options": ["<bottom>", "<footer>", "<foot>", "<section>"],
      "answer": 2,
      "explanation": "The <footer> tag is used to define a footer in HTML."
    },
    {
      "question": "Which doctype declaration is correct for HTML5?",
      "options": [
        "<!DOCTYPE HTML5>",
        "<!DOCTYPE html>",
        "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 5.0//EN\">",
        "<doctype html>"
      ],
      "answer": 2,
      "explanation": "The correct doctype for HTML5 is <!DOCTYPE html>."
    }
  ],
  CSS: [
    { question: "What does CSS stand for?", options: ["Cascading Style Sheets", "Colorful Style Sheets", "Creative Style Sheets", "Computer Style Sheets"], answer: 0, explanation: "CSS stands for Cascading Style Sheets." },
    // Add more CSS questions...
  ],
  JavaScript: [
    { question: "Which function is used to serialize an object into a JSON string in Javascript?", options: ["stringify()", "parse()", "convert()", "None of the above"], answer: 0, explanation: "stringify() is used to serialize an object into a JSON string in Javascript." },
    // Add more JavaScript questions...
  ],
  ReactQuiz: [
    { question: "What is React primarily used for?", options: ["Backend development", "Building user interfaces", "Database management", "None of the above"], answer: 1, explanation: "React is a library for building user interfaces." },
    
  ]
};

function App() {
  const [step, setStep] = useState('home');
  const [candidateName, setCandidateName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);

  const startQuiz = (topic) => {
    setSelectedTopic(topic);
    setStep('quiz');
    setCurrentQuestion(0);
    setScore(0);
    setAnswers([]);
  };

  const handleAnswer = (index) => {
    const correctAnswer = quizData[selectedTopic][currentQuestion].answer;
    const newAnswers = [...answers, {
      question: quizData[selectedTopic][currentQuestion].question,
      selectedOption: quizData[selectedTopic][currentQuestion].options[index],
      isCorrect: index === correctAnswer,
      explanation: quizData[selectedTopic][currentQuestion].explanation
    }];
    setAnswers(newAnswers);
    if (index === correctAnswer) setScore(score + 1);

    if (currentQuestion < 9) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setStep('result');
    }
  };

  const renderHome = () => (
    <div style={{
      backgroundImage: 'url(./assets/quize.avif)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '20px',
    }}>
      <div>
        <h1 className="text-primary">Let's Quiz</h1>
        <h2>Test your skills and become a master.</h2>
        <p>We organize quizzes on various topics.</p>
        <p>Sign up if you haven't already and get access to millions of quizzes on the topic of your interest.</p>
        <p><b>Start Your Journey Here:</b></p>
        <div>
          <button className="btn btn-warning" type="button" onClick={() => setStep('register')}>
            Start
          </button>
        </div>
      </div>
    </div>
  );

  const renderRegister = () => (
    <div style={{
      backgroundImage: 'url(./assets/pic1.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '20px',
    }}>
      <div className="container">
        <div className="">
          <div className="card-body">
            <h1 className="card-title text-light text-center mb-5">Welcome to the Quiz App</h1>
            <input
              type="text"
              placeholder="Enter your name"
              className="form-control bg-light m-3 w-50 mx-auto"
              value={candidateName}
              onChange={(e) => setCandidateName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Enter your email"
              className="form-control bg-light m-3 w-50 mx-auto"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className="btn btn-success btn-lg m-3 shadow-sm hover-zoom w-50 mx-auto d-block"
              onClick={() => setStep('selectTopic')}
              disabled={!candidateName.trim() || !email.trim()}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSelectTopic = () => (
    <div style={{
      backgroundImage: 'url(./assets/q.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '20px',
    }}>
      <div className="container">
        <div className="">
          <div className="card-body">
            <h1 className="card-title text-center text-light font-weight-bold mb-3" style={{ fontSize: '2.5rem' }}>
              Hello, {candidateName}! Select a topic:
            </h1>
            <div className="d-grid gap-4">
              {Object.keys(quizData).map((topic) => (
                <button
                  key={topic}
                  className="btn btn-info btn-lg m-3 shadow-sm hover-zoom w-50 mx-auto d-block"
                  onClick={() => startQuiz(topic)}
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderQuiz = () => (
    <div style={{
      backgroundImage: 'url(./assets/img.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '20px',
    }}>
      <div className="container mt-5">
        <div className="card shadow-lg p-3 mb-5 bg-white rounded" style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)" }}>
          <div className="card-body">
            <h2 className="card-title">Question {currentQuestion + 1}/10</h2>
            <p className="card-text fw-bold" style={{ fontWeight: "bold", fontSize: '1.5rem' }}>{quizData[selectedTopic][currentQuestion].question}</p>
            <div className="d-grid gap-2">
              {quizData[selectedTopic][currentQuestion].options.map((option, index) => (
                <button
                  type='radio'
                  key={index}
                  className="btn btn-outline-primary btn-block"
                  onClick={() => handleAnswer(index)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderResult = () => (
    <div style={{
      backgroundImage: 'url(./assets/img.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '20px',
    }}>
      <div className="container mt-5">
        <div className="card shadow-lg p-3 mb-5 bg-white rounded">
          <div className="card-body">
            <h1 className="card-title text-center">Quiz Completed</h1>
            <h2 className="card-subtitle mb-2 text-muted text-center">Your Score: {score}/10</h2>
            <p className="card-text text-center">
              {score < 5 ? "You did not clear the test." :
                score < 8 ? "You Passed! Keep up the good work." :
                  "Excellent!!"}
            </p>
            <h3 className="text-center">Review your answers:</h3>
            <ul className="list-group">
              {answers.map((answer, index) => (
                <li key={index} className="list-group-item">
                  <p><strong>Q: {answer.question}</strong></p>
                  <p>Your Answer: {answer.selectedOption}</p>
                  <p className={answer.isCorrect ? "text-success" : "text-danger"}>
                    {answer.isCorrect ? "Correct!" : "Wrong!"}
                  </p>
                  <p>Explanation: {answer.explanation}</p>
                </li>
              ))}
            </ul>
            <button
              className="btn btn-primary btn-block mt-3"
              onClick={() => setStep('selectTopic')}
            >
              Retake Quiz
            </button>
            <button
              className="btn btn-success btn-block mt-3"
              onClick={() => setStep('certificate')}
            >
              View Certificate
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCertificate = () => (
    <div style={{
      backgroundImage: 'url(./assets/Grad.webp)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '20px',
    }}>

      
      <div className="container mt-5">
      <div className="card shadow-lg p-5 mb-5 bg-white rounded" style={{ border: "10px solid gold" }}>
      <div className="card-body text-center">
      <h1 className="card-title">🎓 Certificate of Completion 🎓</h1>
      <p className="lead">This is to certify that</p>
      <h2>{candidateName}</h2>
      <p>has successfully completed the <strong>{selectedTopic}</strong> certification exam.</p>
      <p>They scored <strong>{score}/10</strong> in the exam.</p>
      <p>Congratulations on your achievement!</p>
          <button
            className="btn btn-primary mt-3"
            onClick={() => setStep('selectTopic')}
            >
            Retake Quiz
          </button>
        </div>
      </div>
    </div>
    </div>
  );

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light my-1" style={{ borderRadius: "20px" }}>
        <a className="navbar-brand" to="#"><b>QuizApp</b></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse pr-2" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" to="/">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" to="/about">About</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" to="contact" onClick={() => setStep('renderContact()')}>
              Contact
</a>
            </li>
          </ul> 
        </div>
      </nav>

      {step === 'home' && renderHome()}
      {step === 'register' && renderRegister()}
      {step === 'quiz' && renderQuiz()}
      {step === 'selectTopic' && renderSelectTopic()}
      {step === 'result' && renderResult()}
      {step === 'certificate' && renderCertificate()}
    </>
  );
}

export default App;