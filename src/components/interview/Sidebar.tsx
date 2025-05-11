interface Question {
  id: number;
  question: string;
}

interface SidebarProps {
  questions: Question[];
  selectedQuestion: Question;
  onSelectQuestion: (question: Question) => void;
}

export default function Sidebar({ questions, selectedQuestion, onSelectQuestion }: SidebarProps) {
  return (
    <div className="w-1/4 bg-gray-100 dark:bg-gray-800 p-4 overflow-y-auto border-r border-gray-200 dark:border-gray-700">
      <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">React Interview Questions</h2>
      <div className="space-y-2">
        {questions.map((question) => (
          <button
            key={question.id}
            onClick={() => onSelectQuestion(question)}
            className={`w-full text-left p-3 rounded-lg transition-colors ${
              selectedQuestion.id === question.id
                ? 'bg-blue-500 text-white'
                : 'bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            {question.question}
          </button>
        ))}
      </div>
    </div>
  );
} 