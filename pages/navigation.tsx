
// import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";

export default function Nav () {
  const [showLink, setShowLink] = useState(false);
  const [darkMode] = useState(false);

  const toggleLink = () => {
    setShowLink(!showLink);
  };

  return (
    <header className={darkMode ? "dark" : ""}>
        <button
          onClick={toggleLink}
          className='inline-block md:hidden dark:text-white'
        >
          <svg width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 17.5H0.25V14.6667H13V17.5ZM25.75 10.4167H0.25V7.58333H25.75V10.4167ZM25.75 3.33333H13V0.5H25.75V3.33333Z" fill="grey"></path>
          </svg>
        </button>
      <nav
        className={`${
          showLink ? '' : 'hidden'
        }  md:inline-flex absolute md:relative top-16 left-0 md:top-0 z-20 flex flex-col md:flex-row md:space-x-6 font-semibold w-full md:w-auto bg-white shadow-md rounded-lg md:rounded-none md:shadow-none md:bg-transparent p-10 pt-6 md:p-0 dark:text-white`}
      >
        <a href='#' className="block bg-gradient-to-r from-cyan-500 to-teal-500 text-white text-sm p-1 border-none rounded-md" >Home</a>
        <a href='#' className="block bg-gradient-to-r from-cyan-500 to-teal-500 text-white text-sm p-1 border-none rounded-md">My work</a>
        <a className="block bg-gradient-to-r from-cyan-500 to-teal-500 text-white text-sm p-1 border-none rounded-md" href="#"> 
          <button>Hire Me</button>
        </a>
      </nav>
  </header>
  )
}



