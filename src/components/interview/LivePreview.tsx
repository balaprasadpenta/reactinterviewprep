'use client';

import { useEffect, useRef } from 'react';
import { previewTemplate } from './preview-template';

interface LivePreviewProps {
  code: string;
}

export default function LivePreview({ code }: LivePreviewProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (iframeRef.current) {
      const htmlContent = previewTemplate(code);
      const iframe = iframeRef.current;
      
      // Create a blob URL for the content
      const blob = new Blob([htmlContent], { type: 'text/html' });
      const blobUrl = URL.createObjectURL(blob);
      
      // Set the iframe source to the blob URL
      iframe.src = blobUrl;

      // Clean up the blob URL when the component unmounts
      return () => {
        URL.revokeObjectURL(blobUrl);
      };
    }
  }, [code]);

  return (
    <iframe
      ref={iframeRef}
      className="w-full h-[400px] border border-gray-200 dark:border-gray-700 rounded-lg"
      sandbox="allow-scripts"
      title="Code Preview"
      loading="lazy"
    />
  );
} 