'use client';

import { useState } from 'react';
import Squares from './comp/Backgrounds/Squares/Squares';
import DecryptedText from './comp/TextAnimations/DecryptedText/DecryptedText';
import ShinyText from './comp/TextAnimations/ShinyText/ShinyText';
import { Tooltip } from 'react-tooltip';

import SpotlightCard from './comp/Components/SpotlightCard/SpotlightCard';

import { 
  SiJavascript, 
  SiTypescript, 
  SiReact, 
  SiNextdotjs, 
  SiNodedotjs,
  SiTailwindcss,
  SiGit,
  SiLaravel,
  SiMysql,
} from 'react-icons/si';
import { MdEmail } from 'react-icons/md';
import { DiscordInfo } from './discordInfo';

export default function Home() {
  const [squaresLoaded, setSquaresLoaded] = useState(false);

  return (
    <>
      <main className="min-h-screen relative pb-16">
        {/* Background color layer */}
        <div className="fixed inset-0 bg-[#0F0404] -z-20" />
        
        {/* Squares layer */}
        <div className="fixed inset-0 -z-10 opacity-10">
          <Squares 
            speed={0.2} 
            squareSize={40}
            direction='diagonal'
            borderColor='#999'
            hoverFillColor='#222'
            onLoad={() => setSquaresLoaded(true)}
          />
        </div>

        {/* Content layer */}
        <div className="relative z-10 flex flex-col items-center justify-start w-full h-screen pt-32">
          {squaresLoaded && (
            <>


              <div>
                <DecryptedText
                  text="Hello, I'm newaay!"
                  speed={60}
                  animateOn="view"
                  maxIterations={5}
                  sequential={true}
                  revealDirection="start"
                  className="text-8xl font-bold text-white tracking-tight"
                  encryptedClassName="text-8xl font-bold tracking-tight"
                  parentClassName="font-space-grotesk"
                />
              </div>

              <div className="flex items-center gap-10 mt-10">
                <div className="flex flex-col gap-8 h-[500px] justify-center">
                  <ShinyText 
                    text="Full Stack Developer" 
                    disabled={false} 
                    speed={3} 
                    className='custom-class text-6xl font-bold tracking-tight'
                  />
                  <p className="text-white-400 max-w-[450px] text-xl text-white leading-relaxed">
                    Hello! I'm a passionate Full Stack Developer dedicated to creating innovative solutions.
                    With experience in web and mobile development, I'm always eager to learn new technologies
                    and take on interesting challenges.
                  </p>
                  <div className="flex items-center gap-3">
                    <MdEmail size={24} className="text-white" />
                    <a href="mailto:your.email@example.com" className="text-white hover:text-blue-400 transition-colors">
                      your.email@example.com
                    </a>
                  </div>
                </div>

                <SpotlightCard className="custom-spotlight-card w-[500px] h-[500px]" spotlightColor="rgba(255, 255, 255, 0.1)">
                  <div className="p-6">
                    <DiscordInfo />
                  </div>
                </SpotlightCard>
              </div>

              <div className="mt-20 w-full flex justify-center">
                <SpotlightCard className="w-[1000px] h-[200px] mb-20" spotlightColor="rgba(255, 255, 255, 0.05)">
                  <div className="p-8 flex flex-col items-center gap-8">
                    <h2 className="text-2xl text-white font-bold">Techs</h2>
                    <div className="flex gap-12 items-center">
                      <span data-tooltip-id="tech-tooltip" data-tooltip-content="JavaScript">
                        <SiJavascript size={40} className="text-yellow-400" />
                      </span>
                      <span data-tooltip-id="tech-tooltip" data-tooltip-content="TypeScript">
                        <SiTypescript size={40} className="text-blue-400" />
                      </span>
                      <span data-tooltip-id="tech-tooltip" data-tooltip-content="React">
                        <SiReact size={40} className="text-blue-500" />
                      </span>
                      <span data-tooltip-id="tech-tooltip" data-tooltip-content="Next.js">
                        <SiNextdotjs size={40} className="text-white" />
                      </span>
                      <span data-tooltip-id="tech-tooltip" data-tooltip-content="Node.js">
                        <SiNodedotjs size={40} className="text-green-500" />
                      </span>
                      <span data-tooltip-id="tech-tooltip" data-tooltip-content="Tailwind CSS">
                        <SiTailwindcss size={40} className="text-cyan-400" />
                      </span>
                      <span data-tooltip-id="tech-tooltip" data-tooltip-content="Git">
                        <SiGit size={40} className="text-orange-600" />
                      </span>
                      <span data-tooltip-id="tech-tooltip" data-tooltip-content="Laravel">
                        <SiLaravel size={40} className="text-red-500" />
                      </span>
                      <span data-tooltip-id="tech-tooltip" data-tooltip-content="MySQL">
                        <SiMysql size={40} className="text-blue-500" />
                      </span>
                    </div>
                  </div>
                </SpotlightCard>
              </div>

              {/* Projects Section */}
              <div className="mt-20 mb-20 w-full flex flex-col items-center">
                <h2 className="text-4xl text-white font-bold mb-12">Projetos</h2>
                <div className="grid grid-cols-2 gap-8 w-[1000px]">
                  <SpotlightCard className="h-[300px] group" spotlightColor="rgba(255, 255, 255, 0.05)">
                    <div className="p-6 h-full flex flex-col">
                      <h3 className="text-2xl text-white font-bold mb-4 transition-colors duration-300 group-hover:text-blue-400">My CV</h3>
                      <p className="text-white/80 flex-grow">An interactive resume built with Next.js and React, featuring smooth animations and modern design.</p>
                      <div className="flex gap-3 mt-4">
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Next.js</span>
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">React</span>
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">TypeScript</span>
                      </div>
                    </div>
                  </SpotlightCard>

                  <SpotlightCard className="h-[300px] group" spotlightColor="rgba(255, 255, 255, 0.05)">
                    <div className="p-6 h-full flex flex-col">
                      <h3 className="text-2xl text-white font-bold mb-4 transition-colors duration-300 group-hover:text-green-400">Projeto 2</h3>
                      <p className="text-white/80 flex-grow">Desc</p>
                      <div className="flex gap-3 mt-4">
                        <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">Node.js</span>
                        <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm">Laravel</span>
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">MySQL</span>
                      </div>
                    </div>
                  </SpotlightCard>
                </div>
              </div>

              {/* Footer at the bottom */}
              <footer className="w-full py-4 border-t border-white/10 bg-[#0F0404]">
                <div className="text-center text-white/60 text-sm">
                  {new Date().getFullYear()} All rights reserved.
                </div>
              </footer>
              <Tooltip id="tech-tooltip" />
            </>
          )}
        </div>
      </main>

      {/* Footer at the bottom */}

    </>
  );
}