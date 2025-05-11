'use client';

import { useState } from 'react';
import CodeEditor from './CodeEditor';
import SecurePreview from './SecurePreview';

interface Question {
  id: number;
  question: string;
  visualization: string;
  solution: string;
  conceptVisualization?: string;
}

interface QuestionContentProps {
  question: Question;
}

export default function QuestionContent({ question }: QuestionContentProps) {
  const [currentCode, setCurrentCode] = useState(question.visualization);
  const [isLoading, setIsLoading] = useState(false);

  const handleCodeChange = (newCode: string) => {
    setIsLoading(true);
    setCurrentCode(newCode);
    setTimeout(() => setIsLoading(false), 500);
  };

  return (
    <div className="flex-1 p-8 overflow-y-auto">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Question Section */}
        <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Question</h2>
          <p className="text-gray-700 dark:text-gray-300">{question.question}</p>
        </section>

        {/* Concept Visualization Section */}
        {question.conceptVisualization && (
          <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Concept Visualization</h2>
            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
              <SecurePreview code={question.conceptVisualization} />
            </div>
          </section>
        )}

        {/* Code Editor Section */}
        <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Try it yourself</h2>
          <div className="space-y-4">
            <CodeEditor 
              initialCode={question.visualization}
              onCodeChange={handleCodeChange}
            />
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => {
                  setIsLoading(true);
                  setCurrentCode(question.visualization);
                  setTimeout(() => setIsLoading(false), 500);
                }}
                className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                Reset Code
              </button>
            </div>
          </div>
        </section>

        {/* Live Preview Section */}
        <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Your Code Preview</h2>
          {isLoading ? (
            <div className="h-[400px] flex items-center justify-center bg-gray-100 dark:bg-gray-900 rounded-lg">
              <div className="text-gray-500 dark:text-gray-400">Updating preview...</div>
            </div>
          ) : (
            <SecurePreview code={currentCode} />
          )}
        </section>

        {/* Solution Section */}
        <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Solution</h2>
          <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-4 rounded-md overflow-x-auto">
            <code>{question.solution}</code>
          </pre>
        </section>
      </div>
    </div>
  );
} 