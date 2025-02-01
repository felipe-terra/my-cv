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
import { DiscordInfo } from './discordInfo';

export default function Home() {
  const [squaresLoaded, setSquaresLoaded] = useState(false);

  return (
    <>
      <main className="min-h-screen relative pb-16">
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
                  className="text-8xl font-bold tracking-tight"
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
                  <p className="text-white-400 max-w-[450px] text-xl leading-relaxed">
                    Olá! Sou um desenvolvedor Full Stack apaixonado por criar soluções inovadoras. 
                    Com experiência em desenvolvimento web e mobile, busco sempre aprender novas tecnologias 
                    e enfrentar desafios interessantes.
                  </p>
                </div>

                <SpotlightCard className="custom-spotlight-card w-[500px] h-[500px]" spotlightColor="rgba(255, 255, 255, 0.1)">
                  <div className="p-6">
                    <DiscordInfo />
                  </div>
                </SpotlightCard>
              </div>

              <div className="mt-20 w-full flex justify-center">
                <SpotlightCard className="w-[1000px] h-[200px] mb-20" spotlightColor="rgba(255, 255, 255, 0.1)">
                  <div className="p-8 flex flex-col items-center gap-8">
                    <h2 className="text-2xl font-bold">Techs</h2>
                    <div className="flex gap-12 items-center">
                      <span data-tooltip-id="tech-tooltip" data-tooltip-content="JavaScript">
                        <SiJavascript size={40} className="text-yellow-400" />
                      </span>
                      <span data-tooltip-id="tech-tooltip" data-tooltip-content="TypeScript">
                        <SiTypescript size={40} className="text-blue-400" />
                      </span>
                      <span data-tooltip-id="tech-tooltip" data-tooltip-content="React">
                        <SiReact size={40} className="text-cyan-400" />
                      </span>
                      <span data-tooltip-id="tech-tooltip" data-tooltip-content="Node.js">
                        <SiNodedotjs size={40} className="text-green-500" />
                      </span>
                      <span data-tooltip-id="tech-tooltip" data-tooltip-content="Next.js">
                        <SiNextdotjs size={40} className="text-white" />
                      </span>
                      <span data-tooltip-id="tech-tooltip" data-tooltip-content="Tailwind CSS">
                        <SiTailwindcss size={40} className="text-cyan-400" />
                      </span>
                      <span data-tooltip-id="tech-tooltip" data-tooltip-content="Git">
                        <SiGit size={40} className="text-orange-500" />
                      </span>
                      <span data-tooltip-id="tech-tooltip" data-tooltip-content="MySQL">
                        <SiMysql size={40} className="text-green-500" />
                      </span>
                      <span data-tooltip-id="tech-tooltip" data-tooltip-content="Laravel">
                        <SiLaravel size={40} className="text-red-500" />
                      </span>
                      <Tooltip 
                        id="tech-tooltip" 
                        place="top"
                        className="!bg-zinc-800 !px-4 !py-2 !rounded-md !text-white"
                      />
                    </div>
                  </div>
                </SpotlightCard>
              </div>
            </>
          )}
        </div>


      </main>
    </>
  );
}