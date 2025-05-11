'use client';

import { useState, useEffect } from 'react';
import LivePreview from './LivePreview';

interface SecurePreviewProps {
  code: string;
}

export default function SecurePreview({ code }: SecurePreviewProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="h-[400px] flex items-center justify-center bg-gray-100 dark:bg-gray-900 rounded-lg">
        <div className="text-gray-500 dark:text-gray-400">Loading preview...</div>
      </div>
    );
  }

  return <LivePreview code={code} />;
} 