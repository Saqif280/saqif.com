'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [yearsAgo, setYearsAgo] = useState(8); // Default to 8, will update on client

  useEffect(() => {
    // Calculate years since 2017
    const currentYear = new Date().getFullYear();
    setYearsAgo(currentYear - 2017);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-[350px] text-center flex flex-col gap-6">
        <h1 className="text-3xl font-normal text-[#1a1a1a] tracking-tight">
          👋 Hey, it&apos;s Saqif...
        </h1>
        <p className="text-base text-[#666] leading-relaxed">
          ...I haven&apos;t updated my{' '}
          <a
            href="/2017/"
            className="text-[#1a1a1a] underline decoration-[#ccc] underline-offset-[3px] hover:text-black hover:decoration-black transition-all duration-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            website
          </a>{' '}
          in {yearsAgo} years so checkout my{' '}
          <a
            href="https://www.linkedin.com/in/saqif/"
            className="text-[#1a1a1a] underline decoration-[#ccc] underline-offset-[3px] hover:text-black hover:decoration-black transition-all duration-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>{' '}
          for now.
        </p>
        <p className="text-sm text-[#999] leading-normal">
          Newer and cooler site coming soon 👀
        </p>
      </div>
    </div>
  );
}
