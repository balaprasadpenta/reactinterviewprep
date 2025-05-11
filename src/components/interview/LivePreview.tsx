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
      const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
      
      if (iframeDoc) {
        iframeDoc.open();
        iframeDoc.write(htmlContent);
        iframeDoc.close();
      }
    }
  }, [code]);

  return (
    <iframe
      ref={iframeRef}
      className="w-full h-[400px] border border-gray-200 dark:border-gray-700 rounded-lg"
      sandbox="allow-scripts"
      title="Code Preview"
    />
  );
} 