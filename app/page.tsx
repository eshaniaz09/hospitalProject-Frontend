import Head from 'next/head';
import Chatbot from './components/chatbotBox';
import Contact from './components/contact';
import Services from './components/services'

export const metadata = {
  title: 'DeltaDev-hospital',
  description: 'Welcome to the Hospital Management System',
};

export default function Home() {
  return (
    <div className="flex flex-col overflow-hidden justify-center items-center ">
      <Head>
        <title>AI Chatbot</title>
        <meta name="description" content="Generated description for AI Chatbot" />
        <link rel="icon" href="/favicon.ico" />
      </Head>



      {/* Main Section */}
      <main className="flex flex-col items-center  text-center justify-center w-full h-full px-4 py-16" style={{ backgroundImage: 'url(/hospitalBG.jpg)', backgroundSize: 'cover', // Make the background image cover the entire width
    backgroundPosition: 'center', 
    height: '90vh', 
    width: '100vw', }}>
        <div className="max-w-screen-xl w-full gap-2 flex flex-col">
          <h1 className="text-4xl md:text-7xl font-bold text-blue-800">
            Empower Your Studies with <br /> AI Chatbot
          </h1>

          <p className="text-base md:text-lg text-blue-500 mt-4">
            Get instant answers and personalized study recommendations with our AI-powered research and study chatbot.
          </p>

          <div className="flex flex-wrap gap-4 text-center justify-center items-center mt-4">
            <button className="bg-blue-200 hover:bg-blue-700 hover:text-white text-blue-800 font-bold py-2 px-4 rounded-full">
              Learn More
            </button>
            <button className="bg-blue-800 hover:bg-blue-300 hover:text-blue-800 text-white font-bold py-2 px-4 rounded-full">
              Sign Up
            </button>
          </div>

          <Chatbot />
        </div>
      </main>
      <Services/>
      <Contact />
    </div>
  );
}
