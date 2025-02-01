'use client';

import { useState } from 'react';
import Squares from './comp/Backgrounds/Squares/Squares';
import DecryptedText from './comp/TextAnimations/DecryptedText/DecryptedText';
import ShinyText from './comp/TextAnimations/ShinyText/ShinyText';
import ElasticSlider from './comp/Components/ElasticSlider/ElasticSlider';
import SpotlightCard from './comp/Components/SpotlightCard/SpotlightCard';
import { HiSpeakerXMark, HiSpeakerWave } from 'react-icons/hi2';
import { DiscordInfo } from './discordInfo';

export default function Home() {
  const [squaresLoaded, setSquaresLoaded] = useState(false);

  return (
    <>
      <main className="min-h-screen relative">
        <div className="fixed inset-0 -z-10 opacity-10">
          <Squares 
            speed={0.2} 
            squareSize={40}
            direction='diagonal'
            borderColor='#fff'
            hoverFillColor='#222'
            onLoad={() => setSquaresLoaded(true)}
          />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-start w-full h-screen pt-32">
          {squaresLoaded && (
            <>
              <div className='absolute top-20 left-14 z-0'> 
                <ElasticSlider
                  leftIcon={<HiSpeakerXMark size={24} />}
                  rightIcon={<HiSpeakerWave size={24} />}
                  startingValue={0}
                  defaultValue={50}
                  maxValue={100}
                  isStepped
                  stepSize={10}
                />
              </div>

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

              <ShinyText 
                text="Full Stack Developer" 
                disabled={false} 
                speed={3} 
                className='custom-class text-2xl mt-10 font-bold tracking-tight' 
              />

              <div className="mt-10">
                <SpotlightCard className="custom-spotlight-card w-[500px] h-[500px]" spotlightColor="rgba(0, 229, 255, 0.2)">
                  <div className="p-6">
                    <DiscordInfo />
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