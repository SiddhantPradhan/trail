
import React from 'react';

interface TimerBlockProps {
  value: number;
  label: string;
}

const TimerBlock: React.FC<TimerBlockProps> = ({ value, label }) => {
  // Ensure we show at least two digits for visual consistency
  const formattedValue = value.toString().padStart(2, '0');

  return (
    <div className="flex flex-col items-center justify-center p-4 min-w-[120px] md:min-w-[160px]">
      <span className="text-6xl md:text-8xl lg:text-9xl font-bold text-white tracking-tighter">
        {formattedValue}
      </span>
      <span className="text-sm md:text-lg font-medium uppercase tracking-[0.2em] text-blue-300 mt-2">
        {label}
      </span>
    </div>
  );
};

export default TimerBlock;
