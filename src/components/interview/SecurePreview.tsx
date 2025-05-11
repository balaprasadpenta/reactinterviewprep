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
    return <div className="w-full h-[400px] border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-100 dark:bg-gray-800" />;
  }

  return <LivePreview code={code} />;
} 