
//   // useEffect(()=>{
//   //   console.log(import.meta.env.VITE_API_URL)
//   // }, [])


  import "./App.css";
  import Portfolio from "./assets/Seran.png";
  import Project1 from "./assets/project1.png";
  import Project2 from "./assets/project2.jpg";
  import Project3 from "./assets/project3.jpg";
  import Project4 from "./assets/project4.jpg";
  import Facebook from "./assets/facebook.svg";
  import LinkedIn from "./assets/linkedin.svg";
  import Instagram from "./assets/instagram.svg";
  import ArrowDown from "./assets/arrow-down.svg";
  import Blog from "./components/blog";
  import { useEffect, useState } from "react";
  
  function App() {
    const [scrolling, setScrolling] = useState(false);
  
    const onPageScroll = () => {
      if(window.pageYOffset > 200) {
        setScrolling(true)
      } else {
        setScrolling(false);
      }
    }
  
    useEffect(() => {
      window.addEventListener("scroll", onPageScroll)
      return() => {
        window.removeEventListener("scroll", onPageScroll)
      }
    }, [])
  
    return (
      
      <div className="max-w-4xl m-auto relative">
        <section className="py-8" id="home">
        <header className={`${scrolling ? 'border-b border-gray-900' : ''}  fixed left-0 right-0 top-0 z-20`} >
          <div className="container m-auto px-4 py-6 max-w-4xl bg-black">
            <div className="flex flex-col gap-4 sm:flex-row justify-between items-center">
              <div>
                <a href="#home" className="font-bold text-2xl text-white-400   ">SERAN GEMECHU</a>
              </div>
              <div>
                <ul className="flex gap-4">
                  <li>
                    <a href="#aboutme" className="text-white-400 hover:text-white cursor-pointer">
                    Experience
                    </a>
                  </li>
                  <li>
                    <a href="#technologies" className="text-white-400 hover:text-white cursor-pointer">
                      Technologies
                    </a>
                  </li>
                  <li>
                    <a href="#projects" className="text-white-400 hover:text-white cursor-pointer">
                      Projects
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/serangemechu/" target="blank">
                      Linkedin
                    </a>
                  </li>
                  <li>
                    <a href="https://cyberwbo.blogspot.com/" target="blank">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>
        </section>
        <main className="relative mt-28">
          {/* Intro/Banner section */}
          <section>
            <div className="container m-auto px-80  pt-12 pb-12 sm:pt-20 flex flex-col sm:flex-row gap-6 text-center sm:text-left">
              <div>
                {/* <h2 className="font-bold text-4xl">Hello, I'm Seran,</h2> */}
                <div className="relative flex items-center justify-center ">
                  <img src={Portfolio} className="rounded-full w-320 h-320 sm:w-[400px]" />
                </div>
                <div>
                  <h2 className="font-bold text-4xl  mt-1 gradiant-text">Software Developer</h2>
                </div>
                <div>
                  {/* <p className="mt-4 text-gray-400">
                  Experienced professional with a Bsc. in Computer Science from CSU, Sacramento. 
                  Proven expertise in hardware-software troubleshooting, networking, programming, and support engineering. 
                  Successful track record as a Technical Support Engineer at Tesla and Applications Support Engineer at Embedded Works. 
                  Demonstrated ability to excel in dynamic technical environments.
                  </p> */}
                </div>
              </div>
              
            </div>
          </section>

          <section>
            <div className="">
            <div class=" flex justify-center items-center ">
              <div class="w-2/3 text-gray-300 rounded-t shadow-lg overflow-hidden text-xs">
                <div class="h-8 flex items-center p-2  justify-between bg-gradient-to-b from-gray-700 to-gray-800">
                  <div class="flex items-center gap-1">
                    <svg class="w-5 h-5 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                    <span class="font-bold select-none">Terminal</span>
                  </div>
                  <div class="flex items-center gap-1">
                    <svg class="w-4 h-4 cursor-pointer hover:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    <svg class="w-4 h-4 cursor-pointer hover:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg>
                    <svg class="w-4 h-4 cursor-pointer hover:text-red-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path></svg>
                  </div>
                </div>
                <div class="h-72 p-1 bg-gray-900 font-mono py-4">
                  <span>
                  {/* <h2 className="font-bold text-2xl mt-1 gradiant-text">
                    Hello, I am Seran
                  </h2> */}
                  </span>
                  <p className="mt-1 px-6 text-xl text-white-400 ">
                  <span class="text-green-500 text-2xl ">➜</span>
                  <span class="text-cyan-500 text-2xl"># </span>
                  Experienced professional with a Bsc. in Computer Science from CSU, Sacramento. 
                  Proven expertise in networking, programming, and technical support engineering. 
                  Successful track record as a Technical Support Engineer at Tesla and Applications Support Engineer at Embedded Works. 
                  Demonstrated ability to excel in dynamic technical environments.
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="container m-auto px-80">
              <button className=" px-5 shadow-gray-500 shadow-sm py- mt-6 bg-gradient-to-t  rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                Download resume
              </button>
            </div> */}
            </div>
          </section>

          
          {/* About section */}
          <section className="py-80" id="aboutme">
            <div className="container m-auto px-4 py-6">
              <h2 className="text-3xl font-semibold text-cyan-400">Work Experience</h2>
              <div className="mt-12 relative before:absolute before:top-0 before:left-16 before:rounded-full before:bottom-10 sm:before:bottom-2 before:w-1 before:bg-white">
                <div className="pl-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                  <h3 className="absolute left-0 text-lg font-semibold">2019</h3>
                  <p>
                    UbreakiFix - Electronic Repair Technician
                  </p>
                </div>
                <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                  <h3 className="absolute left-0 text-lg font-semibold">2020</h3>
                  <p>
                    Experimax - Apple Repair Technician
                  </p>
                </div>
                <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                  <h3 className="absolute left-0 text-lg font-semibold">2021</h3>
                  <p>
                    CSU, Sacramento - Resident Advisor
                  </p>
                </div>
                <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                  <h3 className="absolute left-0 text-lg font-semibold">2022</h3>
                  <p>
                    Tesla - Technical Support Engineer [DevOps]
                  </p>
                </div>
                <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                  <h3 className="absolute left-0 text-lg font-semibold">2023</h3>
                  <p>
                    Embedded Works Inc. - Applications Support Engineer
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* Technoglies section */}
          <section className="py-80" id="technologies">
            <div className="container m-auto px-4 py-6">
              <h2 className="text-3xl font-semibold text-cyan-400">Technologies</h2>
              <div className="mt-14">
                <div>
                  <div className="flex justify-between items-center">
                    <h2 className="font-semibold">html</h2>
                    <p className="text-gray-500">Advanced</p>
                  </div>
                  <span className="w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
                </div>
                
                <div className="mt-8">
                  <div className="flex justify-between items-center">
                    <h2 className="font-semibold">
                      Java
                    </h2>
                    <p className="text-gray-500">Advanced</p>
                  </div>
                  <span className="w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
                </div>
                <div className="mt-8">
                  <div className="flex justify-between items-center">
                    <h2 className="font-semibold">
                      Python
                    </h2>
                    <p className="text-gray-500">Advanced</p>
                  </div>
                  <span className="w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
                </div>
                <div className="mt-8">
                  <div className="flex justify-between items-center">
                    <h2 className="font-semibold">
                      Javascript
                    </h2>
                    <p className="text-gray-500">Advanced</p>
                  </div>
                  <span className="w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
                </div>
                <div className="mt-8">
                  <div className="flex justify-between items-center">
                    <h2 className="font-semibold">SQL</h2>
                    <p className="text-gray-500">Advanced</p>
                  </div>
                  <span className="w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
                </div>
                <div className="mt-8">
                  <div className="flex justify-between items-center">
                    <h2 className="font-semibold">Django</h2>
                    <p className="text-gray-500">Intermediate</p>
                  </div>
                  <span className="w-[75%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
                </div>
                <div className="mt-8">
                  <div className="flex justify-between items-center">
                    <h2 className="font-semibold">React JS</h2>
                    <p className="text-gray-500">Intermediate</p>
                  </div>
                  <span className="w-[50%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
                </div>
                
              </div>
            </div>

           {/* Additional skills section */}
            <div className="px-4 py-8 container m-auto  ">
              <h2 className="text-xl font-semibold  text-gray-400">
                Additional Skills and Tools
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-28 mt-12 w-[80%]">
                <div>
                  <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                    Git
                  </p>
                </div>
                <div>
                  <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                    Docker
                  </p>
                </div>
                <div>
                  <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                    Ansible
                  </p>
                </div>
                <div>
                  <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                    ASM x86
                  </p>
                </div>
                
              </div>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-36 mt-4 sm:mt-6 w-[80%]">
              <div>
                  <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                    Linux
                  </p>
                </div>
                <div>
                  <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                    SSH
                  </p>
                </div>
                <div>
                  <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Wireshark
                  </p>
                </div>
               
                <div>
                  <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                    JIRA
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-36 mt-4 sm:mt-6 w-[80%]">
                <div>
                  <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  SCCM
                  </p>
                </div>
                <div>
                  <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Jamf Pro
                  </p>
                </div>
                <div>
                  <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Intune
                  </p>
                </div>
               
                <div>
                  <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Cisco Meraki
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          <section className="py-8" id="projects">
            <div className="container m-auto px-4 sm:py-12">
              <h2 className="text-3xl font-semibold text-cyan-400 ">Projects</h2>
              <p className="text-md py-6">
              Following projects showcase my skills and experience through
              real-world examples of my work. Each project is briefly described with
              links to  live demos in it. It reflects my
              ability to solve complex problems, work with different technologies,
              and manage projects effectively.
              </p>
           
              <div className="flex flex-col sm:flex-row gap-10 mt-11">
                <div className="border border-gray-500 rounded-md p-5 flex-1">
                  <img src={Project1} className="w-full h-auto" />
                  <h3 className="text-2xl font-semibold mt-8">
                    Web Development
                  </h3>
                  <p className="text-gray-400 text-sm mt-2">
                    Responsive dynamic portfolio website that highlights my expertise and experience.
                  </p>
                  <div className="flex mt-12 gap-2">
                    <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    <a href="https://seran72.github.io/ReactViteApp/" target="blank">Live preview</a>
                    </button>
                    {/* <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                      Checkout github
                    </button> */}
                  </div>
                </div>
                <div className="border border-gray-500 rounded-md p-5 flex-1">
                  <img src={Project4} className="w-full h-auto" />
                  <h3 className="text-2xl font-semibold mt-8">
                    BLOG
                  </h3>
                  <p className="text-gray-400 text-sm mt-2">
                  #Networking #Software Engineering #Machine Learning
                  </p>
                  <div className="flex gap-2 mt-12">
                    <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                      <a href="https://cyberwbo.blogspot.com/" target="blank">Live preview</a>
                    </button>
                    {/* <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                      Checkout github
                    </button> */}
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row  gap-10 mt-11">
                <div className="border border-gray-500 rounded-md p-5 flex-1">
                  <img src={Project3} className="w-full h-auto" />
                  <h3 className="text-2xl font-semibold mt-8">
                  AI-based Network IDS
                  </h3>
                  <p className="text-gray-400 text-sm mt-2">
                  #Python #Machine Learning #CNN #DNN 
                  </p>
                  <div className="flex gap-4 mt-12">
                    <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                      Live preview
                    </button>
                    {/* <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                      Checkout github
                    </button> */}
                  </div>
                </div>
                
                <div className="border border-gray-500 rounded-md p-5 flex-1">
                  <img src={Project2} className="w-full h-auto" />
                  <h3 className="text-2xl font-semibold mt-8">
                  Ethical Hacking: WiFi 
                  </h3>
                  <p className="text-gray-400 text-sm mt-2">
                  #Kali Linux #nmap #Wifite #Burpsuit
                  </p>
                  <div className="flex gap-2 mt-12">
                    <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    <a href="https://cyberwbo.blogspot.com/2023/02/crack-wpawpa2-wifi-passwords-in-afaan.html" target="blank">Live preview</a>
                    </button>
                    {/* <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                      Checkout github
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer>
          <div className="container m-auto flex justify-between px-4 py-60">
            <div>
              <p className="text-gray-300 text-sm">Copyright @ 2024</p>
            </div>
            <div>
              <ul className="flex gap-4">
                <li>
                  <a>
                    <img src={Facebook} className="w-5" />
                  </a>
                </li>
                <li>
                  <a>
                    <img src={LinkedIn} className="w-5" />
                  </a>
                </li>
                <li>
                  <a>
                    <img src={Instagram} className="w-5" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
        {
          scrolling && (
            <button className="fixed block right-8 bottom-0 w-24" onClick={() => {
              window.scrollTo(0,0);
            }}>
              <img src={ArrowDown} />
            </button>
          )
        }
      </div>
    );
  }
  
  export default App;