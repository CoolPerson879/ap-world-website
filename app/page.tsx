"use client"
import React, { useState } from 'react';
import { ChevronRight, Menu, Share, HelpCircle, Clock, Lightbulb, BookOpen, Edit3, Book } from 'lucide-react';

const APWorldHistoryApp = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const units = [
    {
      id: 1,
      title: "The Global Tapestry",
      period: "1200-1450",
      weight: "8-10%",
      color: "bg-purple-500",
      topics: [
        "Developments in Song China and Dar-al-Islam",
        "Kingdoms in South and Southeast Asia", 
        "Developments in states in the Americas",
        "Developments in state-building in Africa",
        "Feudalism and developments in Europe and Japan"
      ]
    },
    {
      id: 2,
      title: "Networks of Exchange",
      period: "1200-1450",
      weight: "8-10%",
      color: "bg-purple-500",
      topics: [
        "Trade along networks of exchange",
        "The Silk Roads and the Mongol Empire",
        "Indian Ocean Trade Network",
        "Trans-Saharan Trade Network",
        "Cultures around the world changed with connection",
        "The spread of disease and migration of crops through networks of exchange"
      ]
    },
    {
      id: 3,
      title: "Land-Based Empires",
      period: "1450-1750",
      weight: "12-15%",
      color: "bg-green-500",
      topics: [
        "Gunpowder Empires: Ottoman, Safavid, Mughal Empires - expanded with gunpowder weapons",
        "The consolidation and legitimization of power of Gunpowder Empires",
        "Changes in religion, Protestant Reformation, syncretic beliefs"
      ]
    },
    {
      id: 4,
      title: "Maritime Empires",
      period: "1450-1750",
      weight: "12-15%",
      color: "bg-green-500",
      topics: [
        "Technological innovations allowed for maritime expansion",
        "The Columbian Exchange",
        "The effects of the Columbian Exchange, Atlantic System, Trans-Atlantic trade, Slave Trade",
        "New economic policies used by states"
      ]
    },
    {
      id: 5,
      title: "Revolutions",
      period: "1750-1900",
      weight: "12-15%",
      color: "bg-red-500",
      topics: [
        "Enlightenment ideals challenged traditional values",
        "Nationalism led to independence movements",
        "American, Latin American, French and Haitian Revolutions",
        "The Industrial Revolution, causes and changes to hierarchies"
      ]
    },
    {
      id: 6,
      title: "Consequences of Industrialization",
      period: "1750-1900",
      weight: "12-15%",
      color: "bg-red-500",
      topics: [
        "Rationales for imperialism",
        "State expansion and responses to expansion",
        "Economic development and economic imperialism",
        "Causes and effects of migration"
      ]
    },
    {
      id: 7,
      title: "Global Conflict",
      period: "1900-present",
      weight: "8-10%",
      color: "bg-yellow-500",
      topics: [
        "Shifting of power",
        "Causes and effects of World War I",
        "Great Depression and the Interwar Period",
        "Causes and effects of World War II",
        "Mass atrocities committed"
      ]
    },
    {
      id: 8,
      title: "Cold War and Decolonization",
      period: "1900-present",
      weight: "8-10%",
      color: "bg-yellow-500",
      topics: [
        "Causes and effects of the Cold War",
        "Spread and containment of communism",
        "Decolonization and state-building"
      ]
    },
    {
      id: 9,
      title: "Globalization",
      period: "1900-present",
      weight: "8-10%",
      color: "bg-yellow-500",
      topics: [
        "Advancements in technology, Green Revolution",
        "Spread of disease in the globalized world",
        "Environmental effects of globalization",
        "Reform, resistance, and cultural effects of globalization",
        "World Bank, IMF",
        "The United Nations"
      ]
    }
  ];

  const themes = [
    {
      id: 'ENV',
      title: 'Humans & The Environment',
      letter: 'I',
      description: 'Geography of regions of cities • Diseases, environmental factors for population change • How humans changed the environment'
    },
    {
      id: 'CDI',
      title: 'Cultural Developments and Interactions',
      letter: 'C',
      description: 'Cultures of societies • Religions • Diffusion of cultures, how cultures and religions interacted with each other'
    },
    {
      id: 'GOV',
      title: 'Governance',
      letter: 'P',
      description: 'Political structures • Revolutions • Laws passed • How people reacted to policies and political structures'
    },
    {
      id: 'ECN',
      title: 'Economic Systems',
      letter: 'E',
      description: 'Economic systems of a society • How money was generated and lost in a region • Trade networks • Labor systems'
    },
    {
      id: 'SIO',
      title: 'Social Interactions and Organization',
      letter: 'S',
      description: 'How people interact with each other within and outside a society'
    },
    {
      id: 'TEC',
      title: 'Technology and Innovation',
      letter: '',
      description: 'How humans developed new technologies • How new technologies changed societies and economic systems'
    }
  ];

  const NavigationBar = () => (
    <div className="bg-white px-6 py-4 flex items-center justify-between border-b shadow-sm">
      <Menu className="w-6 h-6 cursor-pointer" />
      <h1 className="text-lg font-semibold" style={{fontFamily: 'Playfair Display, serif'}}>AP World History</h1>
      <div className="flex items-center space-x-4">
        <Share className="w-6 h-6 cursor-pointer" />
        <HelpCircle className="w-6 h-6 cursor-pointer" />
      </div>
    </div>
  );

  const SideNavigation = () => (
    <div className="hidden lg:block w-64 bg-white border-r shadow-sm min-h-screen">
      <div className="p-6">
        <h2 className="text-xl font-bold mb-6" style={{fontFamily: 'Playfair Display, serif'}}>Navigation</h2>
        <nav className="space-y-3">
          <button 
            onClick={() => setCurrentPage('home')}
            className={`w-full text-left p-3 rounded-lg transition-colors ${
              currentPage === 'home' ? 'bg-orange-100 text-orange-700' : 'hover:bg-gray-100'
            }`}
          >
            Home
          </button>
          <button 
            onClick={() => setCurrentPage('units')}
            className={`w-full text-left p-3 rounded-lg transition-colors ${
              currentPage === 'units' ? 'bg-orange-100 text-orange-700' : 'hover:bg-gray-100'
            }`}
          >
            Major Events by Unit
          </button>
          <button 
            onClick={() => setCurrentPage('themes')}
            className={`w-full text-left p-3 rounded-lg transition-colors ${
              currentPage === 'themes' ? 'bg-orange-100 text-orange-700' : 'hover:bg-gray-100'
            }`}
          >
            Themes
          </button>
          <button 
            onClick={() => setCurrentPage('practice')}
            className={`w-full text-left p-3 rounded-lg transition-colors ${
              currentPage === 'practice' ? 'bg-orange-100 text-orange-700' : 'hover:bg-gray-100'
            }`}
          >
            Practice Questions
          </button>
          <button 
            onClick={() => setCurrentPage('writing')}
            className={`w-full text-left p-3 rounded-lg transition-colors ${
              currentPage === 'writing' ? 'bg-orange-100 text-orange-700' : 'hover:bg-gray-100'
            }`}
          >
            Free Response Practice
          </button>
          <button 
            onClick={() => setCurrentPage('content')}
            className={`w-full text-left p-3 rounded-lg transition-colors ${
              currentPage === 'content' ? 'bg-orange-100 text-orange-700' : 'hover:bg-gray-100'
            }`}
          >
            Content Review
          </button>
        </nav>
      </div>
    </div>
  );

  const MobileNavigation = () => (
    <div className="lg:hidden bg-white border-b">
      <div className="flex overflow-x-auto px-4 py-2 space-x-4">
        <button 
          onClick={() => setCurrentPage('home')}
          className={`whitespace-nowrap px-4 py-2 rounded-full text-sm ${
            currentPage === 'home' ? 'bg-orange-500 text-white' : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          Home
        </button>
        <button 
          onClick={() => setCurrentPage('units')}
          className={`whitespace-nowrap px-4 py-2 rounded-full text-sm ${
            currentPage === 'units' ? 'bg-orange-500 text-white' : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          Units
        </button>
        <button 
          onClick={() => setCurrentPage('themes')}
          className={`whitespace-nowrap px-4 py-2 rounded-full text-sm ${
            currentPage === 'themes' ? 'bg-orange-500 text-white' : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          Themes
        </button>
        <button 
          onClick={() => setCurrentPage('practice')}
          className={`whitespace-nowrap px-4 py-2 rounded-full text-sm ${
            currentPage === 'practice' ? 'bg-orange-500 text-white' : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          Practice
        </button>
        <button 
          onClick={() => setCurrentPage('content')}
          className={`whitespace-nowrap px-4 py-2 rounded-full text-sm ${
            currentPage === 'content' ? 'bg-orange-500 text-white' : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          Review
        </button>
      </div>
    </div>
  );

  const HomePage = () => (
    <div className="flex-1 bg-stone-200 min-h-screen">
      {/* Welcome Section */}
      <div className="bg-white mx-6 my-8 p-8 rounded-lg shadow-sm">
        <h2 className="text-4xl font-bold text-gray-800 mb-4" style={{fontFamily: 'Playfair Display, serif'}}>
          Welcome to AP World History Modern
        </h2>
        <p className="text-gray-600 text-lg">Master world history from 1200 CE to the present with comprehensive study materials</p>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Quick Access */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-700 mb-6" style={{fontFamily: 'Playfair Display, serif'}}>Quick Access</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            <div 
              onClick={() => setCurrentPage('units')}
              className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-between cursor-pointer hover:shadow-md transition-shadow border-l-4 border-orange-500"
            >
              <div className="flex items-center">
                <div className="bg-orange-100 p-3 rounded-lg mr-6">
                  <BookOpen className="w-8 h-8 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Big Events by Unit</h4>
                  <p className="text-gray-500">Explore major historical events organized by AP World units</p>
                </div>
              </div>
              <ChevronRight className="w-6 h-6 text-gray-400" />
            </div>

            <div 
              onClick={() => setCurrentPage('practice')}
              className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-between cursor-pointer hover:shadow-md transition-shadow border-l-4 border-orange-500"
            >
              <div className="flex items-center">
                <div className="bg-orange-100 p-3 rounded-lg mr-6">
                  <Edit3 className="w-8 h-8 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Practice Questions</h4>
                  <p className="text-gray-500">Test your knowledge with stimulus-based questions</p>
                </div>
              </div>
              <ChevronRight className="w-6 h-6 text-gray-400" />
            </div>

            <div 
              onClick={() => setCurrentPage('writing')}
              className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-between cursor-pointer hover:shadow-md transition-shadow border-l-4 border-orange-500"
            >
              <div className="flex items-center">
                <div className="bg-orange-100 p-3 rounded-lg mr-6">
                  <Edit3 className="w-8 h-8 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Free Response Practice</h4>
                  <p className="text-gray-500">Practice DBQ and LEQ writing skills</p>
                </div>
              </div>
              <ChevronRight className="w-6 h-6 text-gray-400" />
            </div>

            <div 
              onClick={() => setCurrentPage('content')}
              className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-between cursor-pointer hover:shadow-md transition-shadow border-l-4 border-orange-500"
            >
              <div className="flex items-center">
                <div className="bg-orange-100 p-3 rounded-lg mr-6">
                  <Book className="w-8 h-8 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Content Review</h4>
                  <p className="text-gray-500">Review key concepts and themes</p>
                </div>
              </div>
              <ChevronRight className="w-6 h-6 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Study Tips */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-700 mb-6" style={{fontFamily: 'Playfair Display, serif'}}>Study Tips</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-start">
              <div className="bg-yellow-100 p-3 rounded-lg mr-6 mt-1">
                <Lightbulb className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <h4 className="font-medium mb-2 text-lg">Focus on Themes</h4>
                <p className="text-gray-600">Remember the six AP World themes: humans and environment, cultural developments, governance, economic systems, social interactions, and technology.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm flex items-start">
              <div className="bg-blue-100 p-3 rounded-lg mr-6 mt-1">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-medium mb-2 text-lg">Chronological Thinking</h4>
                <p className="text-gray-600">Practice identifying patterns of continuity and change across different time periods and regions.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Exam Information */}
        <div className="mb-8">
          <div className="bg-orange-500 p-6 rounded-lg shadow-sm flex items-center text-white">
            <HelpCircle className="w-8 h-8 mr-4" />
            <div>
              <h4 className="font-medium text-lg">Exam Information</h4>
              <p className="opacity-90">Learn about the AP exam format, scoring, and key dates</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const UnitsPage = () => (
    <div className="flex-1 bg-stone-200 min-h-screen">
      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-8" style={{fontFamily: 'Playfair Display, serif'}}>
          Major Events by Unit
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {units.map((unit) => (
            <div key={unit.id} className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-800 text-lg">Unit {unit.id}: {unit.title}</h3>
              </div>
              <div className="flex gap-2 mb-4">
                <span className={`${unit.color} text-white text-sm px-3 py-1 rounded`}>
                  {unit.period}
                </span>
                <span className="bg-blue-500 text-white text-sm px-3 py-1 rounded">
                  {unit.weight}
                </span>
              </div>
              <div className="space-y-2 mb-6">
                {unit.topics.map((topic, index) => (
                  <p key={index} className="text-gray-600 text-sm leading-relaxed">- {topic}</p>
                ))}
              </div>
              <div className="flex justify-end">
                <button className="text-blue-500 font-medium flex items-center hover:text-blue-700">
                  Unit {unit.id} Content <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const ThemesPage = () => (
    <div className="flex-1 bg-stone-200 min-h-screen">
      <div className="max-w-5xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-8" style={{fontFamily: 'Playfair Display, serif'}}>
          Themes
        </h1>

        <div className="flex justify-center mb-8">
          <div className="flex bg-white rounded-full p-1 shadow-sm">
            <button className="px-6 py-3 bg-black text-white rounded-full">
              Themes
            </button>
            <button className="px-6 py-3 text-gray-600">
              Thinking Skills
            </button>
          </div>
        </div>

        <div className="space-y-0 bg-white rounded-lg shadow-sm overflow-hidden">
          {themes.map((theme, index) => (
            <div key={theme.id} className={`${index !== 0 ? 'border-t' : ''} border-gray-300`}>
              <div className="bg-stone-100 px-6 py-4">
                <h3 className="font-medium text-gray-800 text-lg">{theme.title}</h3>
              </div>
              <div className="p-6 flex">
                <div className="mr-6 min-w-0 flex-shrink-0">
                  <div className="text-center">
                    <div className="font-bold text-lg">({theme.id})</div>
                    <div className="text-sm text-gray-600 max-w-32">
                      {theme.letter ? `'${theme.letter}' of SPICES` : 'not in SPICES but is an AP theme'}
                      {theme.id === 'CDI' && <div>also (CUL)</div>}
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-gray-700">
                    {theme.description.split(' • ').map((item, index) => (
                      <div key={index} className="mb-2">• {item}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const ContentReviewPage = () => (
    <div className="flex-1 bg-stone-200 min-h-screen">
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-6" style={{fontFamily: 'Playfair Display, serif'}}>
          Content Review
        </h1>
        
        <div className="text-center mb-8">
          <p className="text-gray-600 text-lg">Test your content recall with these non AP style questions!</p>
          <p className="text-gray-600 text-lg">For AP Style Questions, go to Stimulus Based Practice</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-xl font-medium text-center mb-8 leading-relaxed">
            Which of the following best explains the growth of cities like Timbuktu during the period 1200–1450?
          </h2>

          <div className="space-y-4">
            {[
              "The establishment of European trading posts",
              "The expansion of the Atlantic slave trade", 
              "Their role as centers of trade and Islamic scholarship",
              "Military conquests by the Mongol Empire"
            ].map((option, index) => (
              <button
                key={index}
                onClick={() => setSelectedAnswer(index)}
                className={`w-full p-4 text-left rounded-lg border-2 transition-colors text-lg ${
                  selectedAnswer === index 
                    ? 'border-blue-500 bg-blue-50' 
                    : 'border-gray-200 bg-white hover:bg-gray-50'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const PracticePage = () => (
    <div className="flex-1 bg-stone-200 min-h-screen">
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-6" style={{fontFamily: 'Playfair Display, serif'}}>
          Stimulus-Based Practice MCs
        </h1>
        
        <div className="text-center mb-8">
          <p className="text-gray-600 text-lg">Test your recall skills with these AP style questions!</p>
          <p className="text-gray-600 text-lg">For more practice go to the Content Review page</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="mb-8">
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              The Ottoman government granted religious communities, such as Christians and Jews, the right to govern themselves in matters of personal law under the millet system.
            </p>
            <h2 className="text-xl font-medium">
              What does this system illustrate about governance in the Ottoman Empire?
            </h2>
          </div>

          <div className="space-y-4">
            {[
              "The millet system caused religious conflict and civil war.",
              "The empire sought to forcibly convert all subjects to Islam.",
              "Religious minorities held equal political power in the empire.",
              "The empire used religious tolerance to maintain control over diverse populations."
            ].map((option, index) => (
              <button
                key={index}
                onClick={() => setSelectedAnswer(index)}
                className={`w-full p-4 text-left rounded-lg border-2 transition-colors text-lg ${
                  selectedAnswer === index 
                    ? 'border-blue-500 bg-blue-50' 
                    : 'border-gray-200 bg-white hover:bg-gray-50'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const WritingPage = () => (
    <div className="flex-1 bg-stone-200 min-h-screen">
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-6" style={{fontFamily: 'Playfair Display, serif'}}>
          Free Response Practice
        </h1>
        <div className="bg-white rounded-lg shadow-sm p-8">
          <p className="text-gray-600 text-lg text-center">Practice DBQ and LEQ writing skills</p>
          <p className="text-gray-500 text-center mt-4">Coming soon...</p>
        </div>
      </div>
    </div>
  );

  const renderPage = () => {
    switch(currentPage) {
      case 'units':
        return <UnitsPage />;
      case 'themes':
        return <ThemesPage />;
      case 'content':
        return <ContentReviewPage />;
      case 'practice':
        return <PracticePage />;
      case 'writing':
        return <WritingPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet" />
      <div className="min-h-screen bg-stone-200">
        <NavigationBar />
        <MobileNavigation />
        <div className="flex">
          <SideNavigation />
          {renderPage()}
        </div>
      </div>
    </>
  );
};

export default APWorldHistoryApp;