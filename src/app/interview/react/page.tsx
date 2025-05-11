'use client';

import { useState } from 'react';
import { Question } from '@/types/interview';
import Sidebar from '@/components/interview/Sidebar';
import QuestionContent from '@/components/interview/QuestionContent';
import ThemeToggle from '@/components/ThemeToggle';

// Sample React interview questions data
const interviewQuestions = [
  {
    id: 1,
    question: "Create a simple counter component using React hooks",
    visualization: `function Counter() {
  const [count, setCount] = React.useState(0);

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Count: {count}</h2>
      <button 
        onClick={() => setCount(count + 1)}
        style={{
          padding: '8px 16px',
          fontSize: '16px',
          marginRight: '8px'
        }}
      >
        Increment
      </button>
      <button 
        onClick={() => setCount(count - 1)}
        style={{
          padding: '8px 16px',
          fontSize: '16px'
        }}
      >
        Decrement
      </button>
    </div>
  );
}

ReactDOM.render(<Counter />, document.getElementById('root'));`,
    conceptVisualization: `function ConceptVisualization() {
  const [isAnimating, setIsAnimating] = React.useState(false);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setCount(prev => prev + 1);
      setTimeout(() => setIsAnimating(false), 1000);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ 
      padding: '20px',
      maxWidth: '600px',
      margin: '0 auto',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '20px'
      }}>
        <div style={{
          width: '45%',
          padding: '20px',
          background: '#f0f0f0',
          borderRadius: '8px',
          textAlign: 'center',
          transition: 'transform 0.3s ease',
          transform: isAnimating ? 'scale(1.05)' : 'scale(1)'
        }}>
          <h3 style={{ margin: '0 0 10px 0' }}>Component State</h3>
          <div style={{
            padding: '10px',
            background: '#fff',
            borderRadius: '4px',
            border: '1px solid #ddd',
            transition: 'all 0.3s ease',
            transform: isAnimating ? 'scale(1.1)' : 'scale(1)',
            boxShadow: isAnimating ? '0 0 10px rgba(0,0,0,0.1)' : 'none'
          }}>
            count: {count}
          </div>
        </div>
        <div style={{
          width: '45%',
          padding: '20px',
          background: '#f0f0f0',
          borderRadius: '8px',
          textAlign: 'center',
          transition: 'transform 0.3s ease',
          transform: isAnimating ? 'scale(1.05)' : 'scale(1)'
        }}>
          <h3 style={{ margin: '0 0 10px 0' }}>UI</h3>
          <div style={{
            padding: '10px',
            background: '#fff',
            borderRadius: '4px',
            border: '1px solid #ddd',
            transition: 'all 0.3s ease',
            transform: isAnimating ? 'scale(1.1)' : 'scale(1)',
            boxShadow: isAnimating ? '0 0 10px rgba(0,0,0,0.1)' : 'none'
          }}>
            Count: {count}
          </div>
        </div>
      </div>
      <div style={{
        textAlign: 'center',
        padding: '20px',
        background: '#e8f5e9',
        borderRadius: '8px',
        transition: 'all 0.3s ease',
        transform: isAnimating ? 'translateY(-5px)' : 'translateY(0)',
        boxShadow: isAnimating ? '0 5px 15px rgba(0,0,0,0.1)' : 'none'
      }}>
        <p style={{ margin: '0 0 10px 0' }}>When state updates:</p>
        <ol style={{ 
          textAlign: 'left', 
          margin: '0',
          opacity: isAnimating ? 1 : 0.7,
          transition: 'opacity 0.3s ease'
        }}>
          <li style={{
            transition: 'all 0.3s ease',
            transform: isAnimating ? 'translateX(10px)' : 'translateX(0)'
          }}>State updates (count + 1)</li>
          <li style={{
            transition: 'all 0.3s ease',
            transform: isAnimating ? 'translateX(10px)' : 'translateX(0)',
            transitionDelay: '0.1s'
          }}>Component re-renders</li>
          <li style={{
            transition: 'all 0.3s ease',
            transform: isAnimating ? 'translateX(10px)' : 'translateX(0)',
            transitionDelay: '0.2s'
          }}>UI updates to show new count</li>
        </ol>
      </div>
    </div>
  );
}

ReactDOM.render(<ConceptVisualization />, document.getElementById('root'));`,
    solution: `// Key concepts demonstrated:
// 1. useState hook for state management
// 2. Event handling with onClick
// 3. JSX syntax
// 4. Component structure`
  },
  {
    id: 2,
    question: "Create a todo list component",
    visualization: `function TodoList() {
  const [todos, setTodos] = React.useState([]);
  const [input, setInput] = React.useState('');

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, input]);
      setInput('');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <div style={{ marginBottom: '20px' }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ padding: '8px', marginRight: '8px' }}
          placeholder="Add a todo"
        />
        <button 
          onClick={addTodo}
          style={{ padding: '8px 16px' }}
        >
          Add
        </button>
      </div>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map((todo, index) => (
          <li 
            key={index}
            style={{
              padding: '8px',
              margin: '4px 0',
              background: '#f0f0f0',
              borderRadius: '4px'
            }}
          >
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
}

ReactDOM.render(<TodoList />, document.getElementById('root'));`,
    conceptVisualization: `function ConceptVisualization() {
  const [isAnimating, setIsAnimating] = React.useState(false);
  const [todos, setTodos] = React.useState(['Learn React', 'Build a project']);
  const [input, setInput] = React.useState('');

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTodos(prev => [...prev, 'New Todo ' + (prev.length + 1)]);
      setTimeout(() => setIsAnimating(false), 1000);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ 
      padding: '20px',
      maxWidth: '600px',
      margin: '0 auto',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
      }}>
        <div style={{
          padding: '20px',
          background: '#f0f0f0',
          borderRadius: '8px',
          transition: 'all 0.3s ease',
          transform: isAnimating ? 'scale(1.02)' : 'scale(1)'
        }}>
          <h3 style={{ margin: '0 0 10px 0' }}>State Management</h3>
          <div style={{
            display: 'flex',
            gap: '20px'
          }}>
            <div style={{
              flex: 1,
              padding: '10px',
              background: '#fff',
              borderRadius: '4px',
              border: '1px solid #ddd',
              transition: 'all 0.3s ease',
              transform: isAnimating ? 'scale(1.05)' : 'scale(1)'
            }}>
              <h4 style={{ margin: '0 0 5px 0' }}>todos: []</h4>
              <ul style={{ 
                margin: 0, 
                padding: 0,
                listStyle: 'none'
              }}>
                {todos.map((todo, index) => (
                  <li key={index} style={{
                    padding: '5px',
                    margin: '2px 0',
                    background: '#f8f8f8',
                    borderRadius: '4px',
                    transition: 'all 0.3s ease',
                    transform: index === todos.length - 1 && isAnimating 
                      ? 'scale(1.1)' 
                      : 'scale(1)'
                  }}>
                    {todo}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{
              flex: 1,
              padding: '10px',
              background: '#fff',
              borderRadius: '4px',
              border: '1px solid #ddd',
              transition: 'all 0.3s ease',
              transform: isAnimating ? 'scale(1.05)' : 'scale(1)'
            }}>
              <h4 style={{ margin: '0 0 5px 0' }}>input: ''</h4>
              <p style={{ margin: 0, fontSize: '14px' }}>Current input value</p>
            </div>
          </div>
        </div>
        
        <div style={{
          padding: '20px',
          background: '#e8f5e9',
          borderRadius: '8px',
          transition: 'all 0.3s ease',
          transform: isAnimating ? 'translateY(-5px)' : 'translateY(0)'
        }}>
          <h3 style={{ margin: '0 0 10px 0' }}>Data Flow</h3>
          <ol style={{ 
            margin: 0, 
            paddingLeft: '20px',
            opacity: isAnimating ? 1 : 0.7,
            transition: 'opacity 0.3s ease'
          }}>
            {[
              'User types in input field',
              'input state updates',
              'User clicks Add button',
              'todos array updates with new item',
              'input field clears',
              'UI re-renders with new todo'
            ].map((step, index) => (
              <li key={index} style={{
                transition: 'all 0.3s ease',
                transform: isAnimating ? 'translateX(10px)' : 'translateX(0)',
                transitionDelay: \`\${index * 0.1}s\`
              }}>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<ConceptVisualization />, document.getElementById('root'));`,
    solution: `// Key concepts demonstrated:
// 1. Multiple state variables
// 2. Array manipulation
// 3. Form handling
// 4. List rendering with map
// 5. Event handling`
  },
  {
    id: 3,
    question: "What is the difference between controlled and uncontrolled components?",
    visualization: `// Controlled Component
function ControlledForm() {
  const [value, setValue] = useState('');
  
  return (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

// Uncontrolled Component
function UncontrolledForm() {
  const inputRef = useRef(null);
  
  return (
    <input
      ref={inputRef}
      defaultValue="initial value"
    />
  );
}`,
    solution: `// Controlled Components:
// - Form data is handled by React state
// - Single source of truth
// - Immediate validation
// - Disable submit button
// - Enforce input format

// Uncontrolled Components:
// - Form data is handled by DOM
// - Use refs to access values
// - Better performance
// - Less code
// - Integration with non-React code`
  },
  {
    id: 4,
    question: "Explain React's Context API and when to use it",
    visualization: `// Creating a Theme Context
const ThemeContext = React.createContext('light');

// Provider Component
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Consumer Component
function ThemedButton() {
  const { theme } = useContext(ThemeContext);
  return <button className={theme}>Click me</button>;
}`,
    solution: `// When to use Context:
// 1. Global state management
// 2. Theme data
// 3. User authentication
// 4. Language preferences
// 5. UI state that affects multiple components

// Best Practices:
// - Keep contexts focused and small
// - Split contexts by domain
// - Use multiple contexts instead of one large context
// - Consider performance implications`
  },
  {
    id: 5,
    question: "What are React's lifecycle methods and how do they work with hooks?",
    visualization: `// Class Component Lifecycle
class Example extends React.Component {
  componentDidMount() {
    // Runs after first render
  }
  
  componentDidUpdate(prevProps, prevState) {
    // Runs after updates
  }
  
  componentWillUnmount() {
    // Runs before unmounting
  }
}

// Equivalent with Hooks
function Example() {
  useEffect(() => {
    // componentDidMount
    return () => {
      // componentWillUnmount
    };
  }, []); // Empty array = run once

  useEffect(() => {
    // componentDidUpdate
  }); // No array = run on every update`,
    solution: `// Lifecycle Methods with Hooks:
// componentDidMount → useEffect(() => {}, [])
// componentDidUpdate → useEffect(() => {})
// componentWillUnmount → useEffect(() => { return () => {} }, [])

// Additional Hook Benefits:
// - Simpler mental model
// - Reusable logic
// - Better code organization
// - Easier testing
// - No 'this' keyword issues`
  }
];

export default function ReactInterview() {
  const [selectedQuestion, setSelectedQuestion] = useState<Question>(interviewQuestions[0]);

  const handleQuestionSelect = (question: Question) => {
    setSelectedQuestion(question);
  };

  return (
    <div className="flex h-screen bg-white dark:bg-gray-900">
      <ThemeToggle />
      <Sidebar 
        questions={interviewQuestions}
        selectedQuestion={selectedQuestion}
        onSelectQuestion={handleQuestionSelect}
      />
      <QuestionContent question={selectedQuestion} />
    </div>
  );
} 