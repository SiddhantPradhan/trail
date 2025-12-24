
import React, { useState, useEffect, useCallback } from 'react';
import TimerBlock from './components/TimerBlock';
import { TimeRemaining } from './types';

const TARGET_DATE = new Date('2026-02-17T00:00:00').getTime();

const App: React.FC = () => {
  const calculateTimeRemaining = useCallback((): TimeRemaining => {
    const now = new Date().getTime();
    const difference = TARGET_DATE - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isComplete: true };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
      isComplete: false,
    };
  }, []);

  const [timeLeft, setTimeLeft] = useState<TimeRemaining>(calculateTimeRemaining());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="h-screen w-full flex items-center justify-center bg-gradient-to-br from-black via-slate-900 to-blue-950 overflow-hidden select-none">
      <div className="flex flex-wrap justify-center gap-4 md:gap-8 lg:gap-12 max-w-7xl px-4">
        <TimerBlock value={timeLeft.days} label="Days" />
        <TimerBlock value={timeLeft.hours} label="Hours" />
        <TimerBlock value={timeLeft.minutes} label="Minutes" />
        <TimerBlock value={timeLeft.seconds} label="Seconds" />
      </div>
    </main>
  );
};

export default App;
