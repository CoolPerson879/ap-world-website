"use client";
import React, { useState } from "react";
import { PracticeQuestions } from "./MCQuestionData";
import { units } from "./units";
import { tableDataA, tableDataB } from "./themesdata";
import {
  ChevronRight,
  Menu,
  Share,
  HelpCircle,
  Clock,
  Lightbulb,
  BookOpen,
  Edit3,
  Book,
} from "lucide-react";

const APWorldHistoryApp = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(() => Math.floor(Math.random() * PracticeQuestions.length));
  const [showFeedback, setShowFeedback] = useState(false);
  const [shuffledOptions, setShuffledOptions] = useState<string[]>(() => {
    const q = PracticeQuestions[Math.floor(Math.random() * PracticeQuestions.length)];
    const arr = [q.answer, q.option2, q.option3, q.option4];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  });

  const NavigationBar = () => (
    <div className="bg-white px-6 py-4 flex items-center justify-center border-b shadow-sm relative">
      {/* Menu button only on mobile */}
      <div className="lg:hidden absolute left-4">
        <Menu
          className="w-6 h-6 cursor-pointer"
          onClick={() => setShowMobileMenu(true)}
        />
      </div>
      <h1
        className="text-lg font-semibold text-center w-full"
        style={{ fontFamily: "Playfair Display, serif" }}
      >
        AP World History
      </h1>
    </div>
  );

  const SideNavigation = ({
    currentPage,
    setCurrentPage,
  }: {
    currentPage: string;
    setCurrentPage: (page: string) => void;
  }) => (
    <div className="hidden lg:block w-64 bg-white border-r shadow-sm min-h-screen">
      <div className="p-6">
        <h2
          className="text-xl font-bold mb-6"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          Navigation
        </h2>
        <nav className="space-y-3">
          <button
            onClick={() => setCurrentPage("home")}
            className={`w-full text-left p-3 rounded-lg transition-colors ${
              currentPage === "home"
                ? "bg-orange-100 text-orange-700"
                : "hover:bg-gray-100"
            }`}
          >
            Home
          </button>
          <button
            onClick={() => setCurrentPage("units")}
            className={`w-full text-left p-3 rounded-lg transition-colors ${
              currentPage === "units"
                ? "bg-orange-100 text-orange-700"
                : "hover:bg-gray-100"
            }`}
          >
            Major Events by Unit
          </button>
          <button
            onClick={() => setCurrentPage("themes")}
            className={`w-full text-left p-3 rounded-lg transition-colors ${
              currentPage === "themes"
                ? "bg-orange-100 text-orange-700"
                : "hover:bg-gray-100"
            }`}
          >
            Themes
          </button>
          <button
            onClick={() => setCurrentPage("practice")}
            className={`w-full text-left p-3 rounded-lg transition-colors ${
              currentPage === "practice"
                ? "bg-orange-100 text-orange-700"
                : "hover:bg-gray-100"
            }`}
          >
            Practice Questions
          </button>
          <button
            onClick={() => setCurrentPage("writing")}
            className={`w-full text-left p-3 rounded-lg transition-colors ${
              currentPage === "writing"
                ? "bg-orange-100 text-orange-700"
                : "hover:bg-gray-100"
            }`}
          >
            Free Response Practice
          </button>
          <button
            onClick={() => setCurrentPage("exam")}
            className={`w-full text-left p-3 rounded-lg transition-colors ${
              currentPage === "exam"
                ? "bg-orange-100 text-orange-700"
                : "hover:bg-gray-100"
            }`}
          >
            Exam Information
          </button>
          {/* Content Review tab removed */}
        </nav>
      </div>
    </div>
  );

  // Mobile menu state is already declared at the top of APWorldHistoryApp

  const MobileMenu = ({
    currentPage,
    setCurrentPage,
  }: {
    currentPage: string;
    setCurrentPage: (page: string) => void;
  }) =>
    showMobileMenu ? (
      <div className="fixed inset-0 z-50 flex lg:hidden pointer-events-none">
        {/* The menu slides in from the left, with backdrop blur and semi-transparent white */}
        <div className="w-64 h-full shadow-lg p-6 flex flex-col bg-white/80 backdrop-blur-lg pointer-events-auto animate-slide-in-left">
          <button
            className="self-end mb-6 text-gray-500"
            onClick={() => setShowMobileMenu(false)}
          >
            Close
          </button>
          <nav className="flex flex-col space-y-4">
            <button
              onClick={() => {
                setCurrentPage("home");
                setShowMobileMenu(false);
              }}
              className={`text-left p-3 rounded-lg transition-colors ${
                currentPage === "home"
                  ? "bg-orange-100 text-orange-700"
                  : "hover:bg-gray-100"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => {
                setCurrentPage("units");
                setShowMobileMenu(false);
              }}
              className={`text-left p-3 rounded-lg transition-colors ${
                currentPage === "units"
                  ? "bg-orange-100 text-orange-700"
                  : "hover:bg-gray-100"
              }`}
            >
              Units
            </button>
            <button
              onClick={() => {
                setCurrentPage("themes");
                setShowMobileMenu(false);
              }}
              className={`text-left p-3 rounded-lg transition-colors ${
                currentPage === "themes"
                  ? "bg-orange-100 text-orange-700"
                  : "hover:bg-gray-100"
              }`}
            >
              Themes
            </button>
            <button
              onClick={() => {
                setCurrentPage("practice");
                setShowMobileMenu(false);
              }}
              className={`text-left p-3 rounded-lg transition-colors ${
                currentPage === "practice"
                  ? "bg-orange-100 text-orange-700"
                  : "hover:bg-gray-100"
              }`}
            >
              Practice
            </button>
            <button
              onClick={() => {
                setCurrentPage("writing");
                setShowMobileMenu(false);
              }}
              className={`text-left p-3 rounded-lg transition-colors ${
                currentPage === "writing"
                  ? "bg-orange-100 text-orange-700"
                  : "hover:bg-gray-100"
              }`}
            >
              Free Response
            </button>
            <button
              onClick={() => {
                setCurrentPage("exam");
                setShowMobileMenu(false);
              }}
              className={`text-left p-3 rounded-lg transition-colors ${
                currentPage === "exam"
                  ? "bg-orange-100 text-orange-700"
                  : "hover:bg-gray-100"
              }`}
            >
              Exam Information
            </button>
            {/* Content Review tab removed from mobile menu */}
          </nav>
        </div>
      </div>
    ) : null;

  const HomePage = () => (
    <div className="flex-1 bg-stone-200 min-h-screen">
      {/* Welcome Section */}
      <div className="max-w-6xl mx-auto my-8">
        <div className="p-6 rounded-lg shadow-sm max-w-6xl mx-auto px-6 flex bg-white items-center text-center w-full">
          <div className="w-full">
            <h2
              className="text-4xl font-bold text-gray-800 mb-4"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Welcome to AP World History Modern
            </h2>
            <p className="text-gray-600 text-lg">
              Master world history from 1200 CE to the present with
              comprehensive study materials
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Quick Access */}
        <div className="mb-8">
          <h3
            className="text-2xl font-semibold text-gray-700 mb-6"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Quick Access
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            <div
              onClick={() => setCurrentPage("units")}
              className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-between cursor-pointer hover:shadow-md transition-shadow border-l-4 border-orange-500"
            >
              <div className="flex items-center">
                <div className="bg-orange-100 p-3 rounded-lg mr-6">
                  <BookOpen className="w-8 h-8 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Big Events by Unit</h4>
                  <p className="text-gray-500">
                    Explore major historical events organized by AP World units
                  </p>
                </div>
              </div>
              <ChevronRight className="w-6 h-6 text-gray-400" />
            </div>

            <div
              onClick={() => setCurrentPage("practice")}
              className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-between cursor-pointer hover:shadow-md transition-shadow border-l-4 border-orange-500"
            >
              <div className="flex items-center">
                <div className="bg-orange-100 p-3 rounded-lg mr-6">
                  <Edit3 className="w-8 h-8 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Practice Questions</h4>
                  <p className="text-gray-500">
                    Test your knowledge with stimulus-based questions
                  </p>
                </div>
              </div>
              <ChevronRight className="w-6 h-6 text-gray-400" />
            </div>

            <div
              onClick={() => setCurrentPage("writing")}
              className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-between cursor-pointer hover:shadow-md transition-shadow border-l-4 border-orange-500"
            >
              <div className="flex items-center">
                <div className="bg-orange-100 p-3 rounded-lg mr-6">
                  <Edit3 className="w-8 h-8 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">
                    Free Response Practice
                  </h4>
                  <p className="text-gray-500">
                    Practice DBQ and LEQ writing skills
                  </p>
                </div>
              </div>
              <ChevronRight className="w-6 h-6 text-gray-400" />
            </div>

            {/* Content Review quick access removed from home */}
            <div
              onClick={() => setCurrentPage("exam")}
              className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-between cursor-pointer hover:shadow-md transition-shadow border-l-4 border-orange-500"
            >
              <div className="flex items-center">
                <div className="bg-orange-100 p-3 rounded-lg mr-6">
                  <HelpCircle className="w-8 h-8 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Exam Information</h4>
                  <p className="text-gray-500">
                    Learn about the AP exam format, scoring, and key dates
                  </p>
                </div>
              </div>
              <ChevronRight className="w-6 h-6 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Study Tips */}
        <div className="mb-8">
          <h3
            className="text-2xl font-semibold text-gray-700 mb-6"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Study Tips
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-start">
              <div className="bg-orange-100 p-3 rounded-lg mr-6 mt-1">
                <Lightbulb className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h4 className="font-medium mb-2 text-lg">Focus on Themes</h4>
                <p className="text-gray-600">
                  Remember the six AP World themes: humans and environment,
                  cultural developments, governance, economic systems, social
                  interactions, and technology.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm flex items-start">
              <div className="bg-orange-100 p-3 rounded-lg mr-6 mt-1">
                <Clock className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h4 className="font-medium mb-2 text-lg">
                  Chronological Thinking
                </h4>
                <p className="text-gray-600">
                  Practice identifying patterns of continuity and change across
                  different time periods and regions.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );

  const UnitsPage = () => (
    <div className="flex-1 bg-stone-200 min-h-screen">
      <div className="max-w-7xl mx-auto p-6">
        <h1
          className="text-3xl font-bold text-center mb-8"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          Major Events by Unit
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {units.map((unit) => (
            <div key={unit.id} className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-800 text-lg">
                  Unit {unit.id}: {unit.title}
                </h3>
              </div>
              <div className="flex gap-2 mb-4">
                <span
                  className={`${unit.color} text-white text-sm px-3 py-1 rounded`}
                >
                  {unit.period}
                </span>
                <span className="bg-orange-200 text-orange-700 text-sm px-3 py-1 rounded">
                  {unit.weight}
                </span>
              </div>
              <div className="space-y-2 mb-6">
                {unit.topics.map((topic, index) => (
                  <p
                    key={index}
                    className="text-gray-600 text-sm leading-relaxed"
                  >
                    - {topic}
                  </p>
                ))}
              </div>
                <div className="flex justify-end">
                <a
                  href={`/units/${unit.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 font-medium flex items-center hover:text-blue-700"
                >
                  Unit {unit.id} Content{" "}
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const [themesTab, setThemesTab] = useState<"themes" | "skills">("themes");
  const ThemesPage = () => (
    <div className="flex-1 bg-stone-200 min-h-screen">
      <div className="max-w-5xl mx-auto p-6">
        <h1
          className="text-3xl font-bold text-center mb-8"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          {themesTab === "themes" ? "Themes" : "Historical Thinking Skills"}
        </h1>

        <div className="flex justify-center mb-8">
          <div className="flex bg-white rounded-full p-1 shadow-sm">
            <button
              className={`px-6 py-3 rounded-full transition-colors font-medium ${
                themesTab === "themes"
                  ? "bg-black text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
              onClick={() => setThemesTab("themes")}
            >
              Themes
            </button>
            <button
              className={`px-6 py-3 rounded-full transition-colors font-medium ${
                themesTab === "skills"
                  ? "bg-black text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
              onClick={() => setThemesTab("skills")}
            >
              Historical Skills
            </button>
          </div>
        </div>

        {themesTab === "themes" ? (
          <div className="space-y-0 bg-white rounded-lg shadow-sm overflow-hidden">
            {tableDataA.map((theme, index) => (
              <div
                key={theme.title}
                className={`${index !== 0 ? "border-t" : ""} border-gray-300`}
              >
                <div className="bg-stone-100 px-6 py-4 flex items-center">
                  <div className="mr-6 min-w-0 flex-shrink-0 text-center">
                    <div className="font-bold text-lg">{theme.leftTop}</div>
                    <div className="text-sm text-gray-600 max-w-32 whitespace-pre-line">{theme.leftBottom}</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-800 text-lg mb-2">{theme.title}</h3>
                    <div className="text-gray-700">
                      {theme.right.map((item, idx) => (
                        <div key={idx} className="mb-2">{item}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-0 bg-white rounded-lg shadow-sm overflow-hidden">
            {tableDataB.map((skill, index) => (
              <div
                key={skill.title}
                className={`${index !== 0 ? "border-t" : ""} border-gray-300`}
              >
                <div className="bg-stone-100 px-6 py-4 flex items-center">
                  <div className="mr-6 min-w-0 flex-shrink-0 text-center">
                    <div className="font-bold text-lg" style={{ color: skill.color }}>{skill.leftTop}</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-800 text-lg mb-2">{skill.title}</h3>
                    <div className="text-gray-700">
                      {skill.right.map((item, idx) => (
                        <div key={idx} className="mb-2 flex items-center">
                          <span className="inline-block bg-gray-200 text-gray-700 rounded px-2 py-0.5 text-xs font-semibold mr-2" style={{ minWidth: 38, textAlign: 'center' }}>{item.badge}</span>
                          <span>{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  // Removed duplicate Content Review section

  const PracticePage = () => {
    const q = PracticeQuestions[currentQuestionIdx];
    const options = shuffledOptions;
    const correctIdx = options.indexOf(q.answer);

    const handleSelect = (idx: number) => {
      setSelectedAnswer(idx);
      setShowFeedback(true);
    };

    const handleNext = () => {
      let nextIdx;
      do {
        nextIdx = Math.floor(Math.random() * PracticeQuestions.length);
      } while (nextIdx === currentQuestionIdx && PracticeQuestions.length > 1);
      const nextQ = PracticeQuestions[nextIdx];
      const arr = [nextQ.answer, nextQ.option2, nextQ.option3, nextQ.option4];
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      setShuffledOptions(arr);
      setCurrentQuestionIdx(nextIdx);
      setSelectedAnswer(null);
      setShowFeedback(false);
    };

    return (
      <div className="flex-1 bg-stone-200 min-h-screen">
        <div className="max-w-4xl mx-auto p-6">
          <h1
            className="text-3xl font-bold text-center mb-6"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Content Review
          </h1>
          <div className="text-center mb-8">
            <p className="text-gray-600 text-lg">
              Test your recall skills with these multiple-choice questions
            </p>
            <p className="text-gray-600 text-lg">
              AP-Style Stimulus-based Multiple Choice Questions coming soon!
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="mb-8">
              <h2 className="text-xl font-medium mb-2">{q.question}</h2>
            </div>
            <div className="space-y-4">
              {options.map((option, idx) => {
                let btnClass = 'border-gray-200 bg-white hover:bg-gray-50';
                if (showFeedback) {
                  if (selectedAnswer === idx && idx === correctIdx) {
                    btnClass = 'border-green-500 bg-green-50';
                  } else if (selectedAnswer === idx && idx !== correctIdx) {
                    btnClass = 'border-red-500 bg-red-50';
                  } else if (selectedAnswer !== correctIdx && idx === correctIdx) {
                    // If answered incorrectly, highlight correct answer
                    btnClass = 'border-green-500 bg-green-50';
                  } else {
                    btnClass = 'border-gray-200 bg-white';
                  }
                }
                return (
                  <button
                    key={idx}
                    onClick={() => !showFeedback && handleSelect(idx)}
                    className={`w-full p-4 text-left rounded-lg border-2 transition-colors text-lg ${btnClass}`}
                    disabled={showFeedback}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
            {showFeedback && (
              <div className="mt-6 flex justify-center">
                <button
                  onClick={handleNext}
                  className="px-6 py-3 bg-orange-500 text-white rounded-lg font-semibold text-lg shadow hover:bg-orange-600 transition-colors"
                >
                  Next Question
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  const WritingPage = () => (
    <div className="flex-1 bg-stone-200 min-h-screen">
      <div className="max-w-7xl mx-auto p-6">
        <h1
          className="text-3xl font-bold text-center mb-8"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          Free Response Practice
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {[
            { id: 'DBQ1', title: 'DBQ 1', desc: 'Practice Document-Based Question 1', href: '/units/DBQ1' },
            { id: 'DBQ2', title: 'DBQ 2', desc: 'Practice Document-Based Question 2', href: '/units/DBQ2' },
            { id: 'LEQ1', title: 'LEQ 1', desc: 'Practice Long Essay Question 1', href: '/units/LEQ1' },
            { id: 'LEQ2', title: 'LEQ 2', desc: 'Practice Long Essay Question 2', href: '/units/LEQ2' },
            { id: 'LEQ3', title: 'LEQ 3', desc: 'Practice Long Essay Question 3', href: '/units/LEQ3' },
            { id: 'LEQ4', title: 'LEQ 4', desc: 'Practice Long Essay Question 4', href: '/units/LEQ4' },
            { id: 'LEQ5', title: 'LEQ 5', desc: 'Practice Long Essay Question 5', href: '/units/LEQ5' },
          ].map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-sm p-6 flex flex-col justify-between">
              <div>
                <h3 className="font-semibold text-gray-800 text-lg mb-2">{item.title}</h3>
                <p className="text-gray-500 mb-4">{item.desc}</p>
              </div>
              <div className="flex justify-end">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 font-medium flex items-center hover:text-blue-700"
                >
                  Go to {item.title}
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
const ExamInfoPage = () => (
  <div className="flex-1 bg-stone-200 min-h-screen">
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6" style={{ fontFamily: "Playfair Display, serif" }}>
        AP World History Exam Information
      </h1>
      <div className="bg-white rounded-lg shadow-sm p-8">
        <h2 className="text-xl font-semibold mb-4">Exam Format</h2>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Section I: Multiple Choice (55 questions, 55 minutes, 40% of score)</li>
          <li>Section I: Short Answer (3 questions of 4, (1,2 required) 40 minutes, 20% of score)</li>
          <li>Section II: Document-Based Question (DBQ, 1 question, 60 minutes, 25% of score)</li>
          <li>Section II: Long Essay Question (LEQ, 1 of 3 prompts, 40 minutes, 15% of score)</li>
        </ul>
        <h2 className="text-xl font-semibold mb-4">Scoring</h2>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Multiple Choice: 1 point per correct answer, no penalty for guessing</li>
          <li>Free Response: Rubrics for DBQ and LEQ available on College Board</li>
          <li>Final score is a weighted combination of all sections</li>
          <li>Scores reported on a scale of 1-5</li>
          <li>Score of 3 or higher typically considered passing</li>
        </ul>
        <h2 className="text-xl font-semibold mb-4">Key Dates</h2>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>2026 AP World History Exam Date: May 7, 2026 (check College Board for updates)</li>
          <li>Scores typically released in early July</li>
        </ul>
        <h2 className="text-xl font-semibold mb-4">Resources</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li><a href="https://apstudents.collegeboard.org/courses/ap-world-history-modern" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">AP World History: Modern – College Board</a></li>
          <li><a href="https://apcentral.collegeboard.org/courses/ap-world-history/exam" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">AP World History Exam Details</a></li>
        </ul>
      </div>
    </div>
  </div>
);
  const renderPage = () => {
    switch (currentPage) {
      case "units":
        return <UnitsPage />;
      case "themes":
        return <ThemesPage />;
      case "practice":
        return <PracticePage />;
      case "writing":
        return <WritingPage />;
      case "exam":
        return <ExamInfoPage />;
      default:
        return <HomePage />;
    }
// ExamInfoPage must be declared before renderPage

  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <div className="min-h-screen bg-stone-200">
        <NavigationBar />
        <MobileMenu currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <div className="flex">
          <SideNavigation
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
          {renderPage()}
        </div>
      </div>
    </>
  );
};

export default APWorldHistoryApp;
