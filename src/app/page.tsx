'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [yearsAgo, setYearsAgo] = useState(7); // Default to 7, will update on client

  useEffect(() => {
    // Calculate years since 2017
    const currentYear = new Date().getFullYear();
    setYearsAgo(currentYear - 2017);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-[350px] text-center">
        <h1 className="text-2xl font-normal mb-6 text-[#1a1a1a] tracking-tight">
          👋 Hey, it&apos;s Saqif...
        </h1>
        <p className="text-base text-[#666] leading-relaxed mb-6">
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
