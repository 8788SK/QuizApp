import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
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
    {
      "question": "What does HTML stand for?",
      "options": [
        "HyperText Markup Language",
        "Hyper Transfer Markup Language",
        "High-Level Text Markup Language",
        "Hyperlink and Text Markup Language"
      ],
      "answer": 0,
      "explanation": "HTML stands for HyperText Markup Language."
    },
    {
      "question": "Which HTML tag is used to define an internal style sheet?",
      "options": ["<script>", "<style>", "<css>", "<link>"],
      "answer": 1,
      "explanation": "The <style> tag is used to define internal CSS styles."
    },
    {
      "question": "Which property is used to change the background color in CSS?",
      "options": ["color", "bgcolor", "background-color", "background"],
      "answer": 2,
      "explanation": "The background-color property is used to change the background color."
    },
    {
      "question": "What is the correct way to apply a CSS className to an element?",
      "options": [
        "<div id='classname'>",
        "<div className='classname'>",
        "<div style='classname'>",
        "<div css='classname'>"
      ],
      "answer": 1,
      "explanation": "CSS classes are applied using the className attribute, like <div className='classname'>."
    },
    {
      "question": "Which unit is NOT relative in CSS?",
      "options": ["em", "rem", "px", "%"],
      "answer": 2,
      "explanation": "px (pixels) is an absolute unit, whereas em, rem, and % are relative units."
    },
    {
      "question": "Which pseudo-className is used to style an element when a user hovers over it?",
      "options": [":hover", ":focus", ":active", ":visited"],
      "answer": 0,
      "explanation": "The :hover pseudo-className applies styles when the user hovers over an element."
    },
    {
      "question": "Which of the following is NOT a valid CSS position value?",
      "options": ["static", "fixed", "absolute", "relative-fixed"],
      "answer": 3,
      "explanation": "'relative-fixed' is not a valid CSS position value."
    },
    {
      "question": "Which CSS property controls the text size?",
      "options": ["font-size", "text-style", "text-size", "font-style"],
      "answer": 0,
      "explanation": "The font-size property is used to control text size in CSS."
    },
    
    {
      "question": "How do you make a flex container in CSS?",
      "options": [
        "display: flex;",
        "display: grid;",
        "flexbox: true;",
        "container: flex;"
      ],
      "answer": 0,
      "explanation": "To create a flex container, use 'display: flex;'."
    },
    {
      "question": "How do you make a flex container in CSS?",
      "options": [
        "display: flex;",
        "display: grid;",
        "flexbox: true;",
        "container: flex;"
      ],
      "answer": 0,
      "explanation": "To create a flex container, use 'display: flex;'."
    }
  ],
  JavaScript: [
    {
      question: 'Which function is used to serialize an object into a JSON string in Javascript?',
      options: ['stringify()', 'parse()', 'convert()', 'None of the above'],
      answer: 0,
      explanation: 'stringify() is used to serialize an object into a JSON string in Javascript.',
    },
    {
      question: 'Which of the following keywords is used to define a variable in Javascript?',
      options: ['var', 'let', 'var and let', 'None of the above'],
      answer: 2,
      explanation: 'Both "var" and "let" are used to define a variable in Javascript.',
    },
    {
      question: 'Which of the following methods can be used to display data in some form using Javascript?',
      options: ['document.write()', 'console.log()', 'window.alert', 'All of the above'],
      answer: 3,
      explanation: 'All of the above methods can be used to display data in some form.',
    },
    {
      question: 'How can a datatype be declared to be a constant type?',
      options: ['const', 'var', 'let', 'constant'],
      answer: 0,
      explanation: 'const is used to declare a constant type in Javascript.',
    },
    {
      question: 'Inside which HTML element do we put the JavaScript?',
      options: ['<javascript>', '<js>', '<src>', '<script>'],
      answer: 3,
      explanation: 'The correct element is <script> for including Javascript code in HTML.',
    },
    {
      question: 'Where is the correct place to insert a JavaScript?',
      options: ['Both the head section and the body section are correct', 'The head section', 'The body section', 'None of the above'],
      answer: 0,
      explanation: 'JavaScript can be inserted in both the head section and the body section of HTML.',
    },
    {
      question: "What is the correct syntax for referring to an external script called 'gfg.js'?",
      options: ['<script name="gfg.js">', '<script href="gfg.js">', '<script src="gfg.js">', 'None of these'],
      answer: 2,
      explanation: 'The correct syntax is <script src="gfg.js"> to refer to an external script.',
    },
    {
      question: 'How many ways are there with which we can declare a variable in Javascript?',
      options: ['Only one', 'Three', 'Infinitely many', 'None of the above'],
      answer: 1,
      explanation: 'There are three ways to declare a variable: var, let, and const.',
    },
    {
      question: "What will be the output of the following code? document.write(typeof('1' + 2));",
      options: ['boolean', 'string', 'number', 'None of the above'],
      answer: 1,
      explanation: 'The result of the expression "1" + 2 will be a string, so the output will be "string".',
    },
    {
      question: "What will be the output of the following code snippet: let gfg = 'GeeksforGeeks'; console.log(gfg.indexOf('G'));",
      options: ['8', '0', '-1', '2'],
      answer: 1,
      explanation: 'The method indexOf returns the index of the first occurrence of the specified character, in this case, "G" at index 0.',
    }
  ],
  ReactQuiz: [
    {
      question: "1. What is React primarily used for?",
      options: [
        "Backend development",
        "Building user interfaces",
        "Database management",
        "None of the above",
      ],
      answer: 1,
      explanation: "React is a library for building user interfaces.",
    },
    {
      question:
        "2. Which hook is used to manage state in function components? ",
      options: ["useEffect", "useState", " useContext", " useReducer"],
      answer: 1,
      explanation:
        "useState hook allows you to add state to functional Component",
    },

    {
      question: "3. Which of the following is true about React Router? ",
      options: [
        "It is used for state management",
        "It is used to handle navigation between components",
        "It is used for styling components",
        "It is used for managing API requests",
      ],
      answer: 1,
      explanation: "It is used to handle navigation between components",
    },

    {
      question:
        "4. Which of the following is used in React.js to increase performance?",
      options: [
        "Virtual DOM",
        "Original DOM",
        "Both A and B",
        "None of the above",
      ],
      answer: 0,
      explanation: "Virtual DOM is used in React.js to increase performance.",
    },

    {
      question: "5. What are Props in React?",
      options: [
        "Data passed from a parent component to a child component",
        "Internal state of a component",
        "External libraries used in React",
        "Functions inside a component",
      ],
      answer: 0,
      explanation:
        "props are immutable input passed from a parent component to a child component",
    },

    {
      question: "6.	Which of the following is true about React components?",
      options: [
        "They must always be written as ES6 classes",
        "They can only return one root element",
        "They can return multiple root elements",
        "They cannot handle events",
      ],
      answer: 1,
      explanation:
        "React components must return a single root element, but this root element can contain any number of children.",
    },
    {
      question:
        "7. Which of the following is a correct way to define a component's initial state in a className component?",
      options: [
        "Inside the render() method",
        "Inside the constructor() method",
        "Outside the className definition",
        "Directly inside the className body",
      ],
      answer: 1,
      explanation:
        "The initial state of a className component in React should be set inside the constructor() method of the className.",
    },
    {
      question:
        "8. In React, how do you attach an event handler to an element?",
      options: [
        "Using the onEvent attribute",
        "Using the addEventListener method",
        "Using the handleEvent method",
        "None of the above",
      ],
      answer: 0,
      explanation:
        "In React, event handlers are attached using attributes like onClick, onChange, etc., which correspond to standard DOM events.",
    },
    {
      question: "9. How do you pass an argument to an event handler in React?",
      options: [
        "By using an arrow function in the onClick attribute",
        "By using the bind method",
        "Both a and b",
        "None of the above",
      ],
      answer: 2,
      explanation:
        "In React, you can pass an argument to an event handler either by using an arrow function or by using the bind method in the event handler attribute.",
    },
    {
      question:
        "10. Which operator is commonly used for inline conditional rendering in React?",
      options: [
        "&& (Logical AND)",
        "|| (Logical OR)",
        "? : (Ternary Operator)",
        "== (Equality)",
      ],
      answer: 0,
      explanation:
        "In React, the logical AND (&&) operator is commonly used for inline conditional rendering, allowing components or elements to render only if a specific condition is true.",
    },
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
  const renderAbout=()=>{
    <h1>About US</h1>
  }
 const renderContact =() =>{
  <>
  <div className="contact-us">
                <div
                  className="p-5"
                  style={{
                    backgroundColor: "rgb(14 83 142)",
                    color: "white",
                  }}
                >
                  <div className="header-content-wrapper p-3">
                    <div className="header-content">
                      <h1 className="header-heading pb-4">Get in touch</h1>
                      <div className="header-description pb-2">
                        Want to get in touch? We'd love to hear from you.
                      </div>
                      <div className="pb-5">Here's how you can reach us.</div>
                    </div>
                  </div>
                </div>

                <div
                  className="row d-flex justify-content-end gap-5 pe-3"
                  style={{
                    position: "relative",
                    top: "-50px",
                    width: "95%",
                    marginLeft: "2rem",
                    marginRight: "2rem",
                  }}
                >
                  <div className="col-lg-4 col-md-4 col-sm-6 card p-4 m-2">
                    <div className="d-flex justify-content-center fw-bold">
                      Talk to us
                    </div>
                    <div className="p-3">
                      Just pick up the phone to call our team member.
                    </div>
                    <div className="d-flex justify-content-center fw-bold">
                      +91-1111-000-222
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6 card p-4 m-2 d-flex justify-content-center">
                    <div className="d-flex justify-content-center fw-bold">
                      Contact Customer Support
                    </div>
                    <div className="p-3 d-flex justify-content-center">
                      Need a little help...
                    </div>
                    <div className="d-flex justify-content-center">
                      Don't worry… we're here for you.
                    </div>
                    <div className="d-flex justify-content-center pt-2 fw-bold">
                      quiz-help@gmail.com
                    </div>
                  </div>
                </div>
              </div>
  </>
 }
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
    <BrowserRouter>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark my-1">
          <div className="container">
            <a className="navbar-brand" href="/">
              Quiz App
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className=" collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="contact"
                  >
                    Contact
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="about"
                  >
                    About Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              {/* Renders the Navigation Bar on the appropriate screen based on the current step */}
              {step === "register" && renderRegister()}
              {step === "selectTopic" && renderSelectTopic()}
              {step === "quiz" && renderQuiz()}
              {step === "result" && renderResult()}
              {step === "certificate" && renderCertificate()}
              {step === "home" && renderHome()}
              {step === "about" && renderAbout()}
              {step === "contact" && renderContact()}
            </div>
          }
        />
        <Route
          path="contact"
          element={
            <>
              <div className="contact-us">
                <div
                  className="p-5"
                  style={{
                    backgroundColor: "rgb(14 83 142)",
                    color: "white",
                  }}
                >
                  <div className="header-content-wrapper p-3">
                    <div className="header-content">
                      <h1 className="header-heading pb-4">Get in touch</h1>
                      <div className="header-description pb-2">
                        Want to get in touch? We'd love to hear from you.
                      </div>
                      <div className="pb-5">Here's how you can reach us.</div>
                    </div>
                  </div>
                </div>

                <div
                  className="row d-flex justify-content-end gap-5 pe-3"
                  style={{
                    position: "relative",
                    top: "-50px",
                    width: "95%",
                    marginLeft: "2rem",
                    marginRight: "2rem",
                  }}
                >
                  <div className="col-lg-4 col-md-4 col-sm-6 card p-4 m-2">
                    <div className="d-flex justify-content-center fw-bold">
                      Talk to us
                    </div>
                    <div className="p-3">
                      Just pick up the phone to call our team member.
                    </div>
                    <div className="d-flex justify-content-center fw-bold">
                      +91-1111-000-222
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6 card p-4 m-2 d-flex justify-content-center">
                    <div className="d-flex justify-content-center fw-bold">
                      Contact Customer Support
                    </div>
                    <div className="p-3 d-flex justify-content-center">
                      Need a little help...
                    </div>
                    <div className="d-flex justify-content-center">
                      Don't worry… we're here for you.
                    </div>
                    <div className="d-flex justify-content-center pt-2 fw-bold">
                      quiz-help@gmail.com
                    </div>
                  </div>
                </div>
              </div>
            </>
          }
        />
        <Route
          path="home"
          element={
            <>
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
            </>
          }
        />
        {/* <Route path="about" element={}/> */}
        <Route path="/" element={<><div style={{
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
    </div></>}/>
    <Route path="about" element={<>
      <div style={{
      backgroundImage: 'url(./assets/under.webp)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '20px',
    }}></div></>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;