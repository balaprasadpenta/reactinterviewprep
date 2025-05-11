'use client';

import { Question } from '@/types/interview';
import { useState } from 'react';
import CodeEditor from './CodeEditor';
import SecurePreview from './SecurePreview';

interface QuestionContentProps {
  question: Question;
}

export default function QuestionContent({ question }: QuestionContentProps) {
  const [currentCode, setCurrentCode] = useState(question.visualization);

  const handleCodeChange = (newCode: string) => {
    setCurrentCode(newCode);
  };

  return (
    <div className="flex-1 p-6 overflow-y-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">{question.question}</h1>
      
      {/* Concept Visualization Section */}
      {question.conceptVisualization && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Concept Visualization</h2>
          <SecurePreview code={question.conceptVisualization} />
        </div>
      )}

      {/* Code Editor Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Try it Yourself</h2>
        <CodeEditor
          initialCode={question.visualization}
          onCodeChange={handleCodeChange}
        />
        <button
          onClick={() => setCurrentCode(question.visualization)}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Reset Code
        </button>
      </div>

      {/* Preview Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Your Code Preview</h2>
        <SecurePreview code={currentCode} />
      </div>

      {/* Solution Section */}
      <div>
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Solution</h2>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
          <code>{question.solution}</code>
        </pre>
      </div>
    </div>
  );
} 