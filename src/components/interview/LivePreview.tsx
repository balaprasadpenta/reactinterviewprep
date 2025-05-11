'use client';

import { useEffect, useRef } from 'react';
import { previewTemplate } from './preview-template';

interface LivePreviewProps {
  code: string;
}

export default function LivePreview({ code }: LivePreviewProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    // Create a blob URL for the HTML content
    const htmlContent = previewTemplate(code);
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const blobUrl = URL.createObjectURL(blob);

    // Set the iframe src to the blob URL
    iframe.src = blobUrl;

    // Cleanup
    return () => {
      URL.revokeObjectURL(blobUrl);
    };
  }, [code]);

  return (
    <div className="h-[400px] border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
      <iframe
        ref={iframeRef}
        title="preview"
        className="w-full h-full"
        sandbox="allow-scripts"
        referrerPolicy="no-referrer"
        loading="lazy"
      />
    </div>
  );
} 