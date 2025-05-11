'use client';

import { useState } from 'react';
import Sidebar from '@/components/interview/Sidebar';
import QuestionContent from '@/components/interview/QuestionContent';

const hookQuestions = [
  {
    id: 1,
    question: "Explain useState Hook and its use cases",
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
          <h3 style={{ margin: '0 0 10px 0' }}>useState Hook</h3>
          <div style={{
            padding: '10px',
            background: '#fff',
            borderRadius: '4px',
            border: '1px solid #ddd',
            transition: 'all 0.3s ease',
            transform: isAnimating ? 'scale(1.1)' : 'scale(1)'
          }}>
            const [count, setCount] = useState(0)
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
          <h3 style={{ margin: '0 0 10px 0' }}>State Updates</h3>
          <div style={{
            padding: '10px',
            background: '#fff',
            borderRadius: '4px',
            border: '1px solid #ddd',
            transition: 'all 0.3s ease',
            transform: isAnimating ? 'scale(1.1)' : 'scale(1)'
          }}>
            setCount(count + 1)
          </div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<ConceptVisualization />, document.getElementById('root'));`,
    solution: `// Key points about useState:
// 1. useState is a Hook that lets you add state to functional components
// 2. It returns an array with two elements: the current state and a function to update it
// 3. The initial state is only used during the first render
// 4. State updates are asynchronous
// 5. Multiple state variables can be used in a single component

// Common use cases:
// - Form inputs
// - Toggle states
// - Counters
// - Modal visibility
// - Loading states`
  },
  {
    id: 2,
    question: "Explain useEffect Hook and its dependencies",
    visualization: `function DataFetcher() {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/data');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array means run once on mount

  if (loading) return <div>Loading...</div>;
  if (!data) return <div>No data found</div>;

  return (
    <div>
      <h2>Data:</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

ReactDOM.render(<DataFetcher />, document.getElementById('root'));`,
    conceptVisualization: `function ConceptVisualization() {
  const [isAnimating, setIsAnimating] = React.useState(false);
  const [phase, setPhase] = React.useState('mount');

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setPhase(prev => prev === 'mount' ? 'update' : 'mount');
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
          <h3 style={{ margin: '0 0 10px 0' }}>useEffect Lifecycle</h3>
          <div style={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'center'
          }}>
            <div style={{
              padding: '10px',
              background: '#fff',
              borderRadius: '4px',
              border: '1px solid #ddd',
              transition: 'all 0.3s ease',
              transform: phase === 'mount' && isAnimating ? 'scale(1.1)' : 'scale(1)'
            }}>
              Mount Phase
            </div>
            <div style={{
              padding: '10px',
              background: '#fff',
              borderRadius: '4px',
              border: '1px solid #ddd',
              transition: 'all 0.3s ease',
              transform: phase === 'update' && isAnimating ? 'scale(1.1)' : 'scale(1)'
            }}>
              Update Phase
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
          <h3 style={{ margin: '0 0 10px 0' }}>Dependency Array</h3>
          <ul style={{ 
            margin: 0, 
            paddingLeft: '20px',
            opacity: isAnimating ? 1 : 0.7,
            transition: 'opacity 0.3s ease'
          }}>
            <li style={{
              transition: 'all 0.3s ease',
              transform: isAnimating ? 'translateX(10px)' : 'translateX(0)'
            }}>[] - Run once on mount</li>
            <li style={{
              transition: 'all 0.3s ease',
              transform: isAnimating ? 'translateX(10px)' : 'translateX(0)',
              transitionDelay: '0.1s'
            }}>[dep1, dep2] - Run when dependencies change</li>
            <li style={{
              transition: 'all 0.3s ease',
              transform: isAnimating ? 'translateX(10px)' : 'translateX(0)',
              transitionDelay: '0.2s'
            }}>No array - Run on every render</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<ConceptVisualization />, document.getElementById('root'));`,
    solution: `// Key points about useEffect:
// 1. useEffect lets you perform side effects in function components
// 2. It runs after every render by default
// 3. The dependency array controls when the effect runs
// 4. Cleanup function can be returned to prevent memory leaks
// 5. Multiple effects can be used in a single component

// Common use cases:
// - Data fetching
// - Subscriptions
// - DOM manipulations
// - Event listeners
// - API calls`
  },
  {
    id: 3,
    question: "Explain useContext Hook and its implementation",
    visualization: `// Create a context
const ThemeContext = React.createContext('light');

// Provider component
function ThemeProvider({ children }) {
  const [theme, setTheme] = React.useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Consumer component
function ThemedButton() {
  const { theme, setTheme } = React.useContext(ThemeContext);

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      style={{
        padding: '10px 20px',
        background: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#333' : '#fff',
        border: '1px solid #ccc'
      }}
    >
      Toggle Theme
    </button>
  );
}

// App component
function App() {
  return (
    <ThemeProvider>
      <div style={{ padding: '20px' }}>
        <ThemedButton />
      </div>
    </ThemeProvider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));`,
    conceptVisualization: `function ConceptVisualization() {
  const [isAnimating, setIsAnimating] = React.useState(false);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
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
          <h3 style={{ margin: '0 0 10px 0' }}>Context Flow</h3>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            alignItems: 'center'
          }}>
            <div style={{
              padding: '10px',
              background: '#fff',
              borderRadius: '4px',
              border: '1px solid #ddd',
              transition: 'all 0.3s ease',
              transform: isAnimating ? 'scale(1.1)' : 'scale(1)'
            }}>
              Provider
            </div>
            <div style={{
              width: '2px',
              height: '20px',
              background: '#ddd',
              transition: 'all 0.3s ease',
              transform: isAnimating ? 'scaleY(1.2)' : 'scaleY(1)'
            }} />
            <div style={{
              padding: '10px',
              background: '#fff',
              borderRadius: '4px',
              border: '1px solid #ddd',
              transition: 'all 0.3s ease',
              transform: isAnimating ? 'scale(1.1)' : 'scale(1)'
            }}>
              Consumer
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
          <h3 style={{ margin: '0 0 10px 0' }}>Context Features</h3>
          <ul style={{ 
            margin: 0, 
            paddingLeft: '20px',
            opacity: isAnimating ? 1 : 0.7,
            transition: 'opacity 0.3s ease'
          }}>
            <li style={{
              transition: 'all 0.3s ease',
              transform: isAnimating ? 'translateX(10px)' : 'translateX(0)'
            }}>Global state management</li>
            <li style={{
              transition: 'all 0.3s ease',
              transform: isAnimating ? 'translateX(10px)' : 'translateX(0)',
              transitionDelay: '0.1s'
            }}>Avoid prop drilling</li>
            <li style={{
              transition: 'all 0.3s ease',
              transform: isAnimating ? 'translateX(10px)' : 'translateX(0)',
              transitionDelay: '0.2s'
            }}>Shared data between components</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<ConceptVisualization />, document.getElementById('root'));`,
    solution: `// Key points about useContext:
// 1. useContext is a Hook that lets you consume context in function components
// 2. It accepts a context object and returns the current context value
// 3. The context value is determined by the nearest Provider above
// 4. It re-renders when the context value changes
// 5. It can be used to avoid prop drilling

// Common use cases:
// - Theme management
// - User authentication
// - Language preferences
// - Global state
// - Shared data between components`
  },
  {
    id: 4,
    question: "Explain useReducer Hook and when to use it",
    visualization: `function TodoReducer() {
  const initialState = {
    todos: [],
    filter: 'all'
  };

  function reducer(state, action) {
    switch (action.type) {
      case 'ADD_TODO':
        return {
          ...state,
          todos: [...state.todos, action.payload]
        };
      case 'TOGGLE_TODO':
        return {
          ...state,
          todos: state.todos.map(todo =>
            todo.id === action.payload
              ? { ...todo, completed: !todo.completed }
              : todo
          )
        };
      case 'SET_FILTER':
        return {
          ...state,
          filter: action.payload
        };
      default:
        return state;
    }
  }

  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Add todo"
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              dispatch({
                type: 'ADD_TODO',
                payload: { id: Date.now(), text: e.target.value, completed: false }
              });
              e.target.value = '';
            }
          }}
          style={{ padding: '8px', marginRight: '8px' }}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <button
          onClick={() => dispatch({ type: 'SET_FILTER', payload: 'all' })}
          style={{ marginRight: '8px' }}
        >
          All
        </button>
        <button
          onClick={() => dispatch({ type: 'SET_FILTER', payload: 'active' })}
          style={{ marginRight: '8px' }}
        >
          Active
        </button>
        <button
          onClick={() => dispatch({ type: 'SET_FILTER', payload: 'completed' })}
        >
          Completed
        </button>
      </div>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {state.todos
          .filter(todo => {
            if (state.filter === 'active') return !todo.completed;
            if (state.filter === 'completed') return todo.completed;
            return true;
          })
          .map(todo => (
            <li
              key={todo.id}
              style={{
                padding: '8px',
                margin: '4px 0',
                background: '#f0f0f0',
                borderRadius: '4px',
                textDecoration: todo.completed ? 'line-through' : 'none'
              }}
              onClick={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}
            >
              {todo.text}
            </li>
          ))}
      </ul>
    </div>
  );
}

ReactDOM.render(<TodoReducer />, document.getElementById('root'));`,
    conceptVisualization: `function ConceptVisualization() {
  const [isAnimating, setIsAnimating] = React.useState(false);
  const [action, setAction] = React.useState('ADD_TODO');

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setAction(prev => prev === 'ADD_TODO' ? 'TOGGLE_TODO' : 'ADD_TODO');
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
          <h3 style={{ margin: '0 0 10px 0' }}>useReducer Flow</h3>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div style={{
              padding: '10px',
              background: '#fff',
              borderRadius: '4px',
              border: '1px solid #ddd',
              transition: 'all 0.3s ease',
              transform: isAnimating ? 'scale(1.1)' : 'scale(1)'
            }}>
              Action: {action}
            </div>
            <div style={{
              width: '40px',
              height: '2px',
              background: '#ddd',
              transition: 'all 0.3s ease',
              transform: isAnimating ? 'scaleX(1.2)' : 'scaleX(1)'
            }} />
            <div style={{
              padding: '10px',
              background: '#fff',
              borderRadius: '4px',
              border: '1px solid #ddd',
              transition: 'all 0.3s ease',
              transform: isAnimating ? 'scale(1.1)' : 'scale(1)'
            }}>
              Reducer
            </div>
            <div style={{
              width: '40px',
              height: '2px',
              background: '#ddd',
              transition: 'all 0.3s ease',
              transform: isAnimating ? 'scaleX(1.2)' : 'scaleX(1)'
            }} />
            <div style={{
              padding: '10px',
              background: '#fff',
              borderRadius: '4px',
              border: '1px solid #ddd',
              transition: 'all 0.3s ease',
              transform: isAnimating ? 'scale(1.1)' : 'scale(1)'
            }}>
              New State
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<ConceptVisualization />, document.getElementById('root'));`,
    solution: `// Key points about useReducer:
// 1. useReducer is a Hook for state management with complex logic
// 2. It takes a reducer function and initial state
// 3. Returns current state and dispatch function
// 4. Similar to Redux pattern
// 5. Better for complex state logic

// Common use cases:
// - Complex state logic
// - Multiple sub-values
// - State updates based on previous state
// - Form state management
// - Todo lists
// - Shopping carts`
  },
  {
    id: 5,
    question: "Explain useCallback and useMemo Hooks",
    visualization: `function PerformanceDemo() {
  const [count, setCount] = React.useState(0);
  const [text, setText] = React.useState('');

  // Memoized callback
  const handleClick = React.useCallback(() => {
    setCount(c => c + 1);
  }, []); // Empty deps array as it doesn't depend on any values

  // Memoized value
  const expensiveComputation = React.useMemo(() => {
    console.log('Computing...');
    return text.split('').reverse().join('');
  }, [text]); // Only recompute when text changes

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
      <div style={{ marginBottom: '20px' }}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type something..."
          style={{ padding: '8px', width: '100%' }}
        />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <button
          onClick={handleClick}
          style={{ padding: '8px 16px' }}
        >
          Count: {count}
        </button>
      </div>
      <div>
        <h3>Reversed Text:</h3>
        <p>{expensiveComputation}</p>
      </div>
    </div>
  );
}

ReactDOM.render(<PerformanceDemo />, document.getElementById('root'));`,
    conceptVisualization: `function ConceptVisualization() {
  const [isAnimating, setIsAnimating] = React.useState(false);
  const [hook, setHook] = React.useState('useCallback');

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setHook(prev => prev === 'useCallback' ? 'useMemo' : 'useCallback');
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
          <h3 style={{ margin: '0 0 10px 0' }}>{hook}</h3>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px'
          }}>
            <div style={{
              padding: '10px',
              background: '#fff',
              borderRadius: '4px',
              border: '1px solid #ddd',
              transition: 'all 0.3s ease',
              transform: isAnimating ? 'scale(1.1)' : 'scale(1)'
            }}>
              {hook === 'useCallback' ? 'Memoizes Functions' : 'Memoizes Values'}
            </div>
            <div style={{
              padding: '10px',
              background: '#fff',
              borderRadius: '4px',
              border: '1px solid #ddd',
              transition: 'all 0.3s ease',
              transform: isAnimating ? 'scale(1.1)' : 'scale(1)'
            }}>
              Prevents Unnecessary Re-renders
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<ConceptVisualization />, document.getElementById('root'));`,
    solution: `// Key points about useCallback and useMemo:
// 1. Both are performance optimization hooks
// 2. useCallback memoizes functions
// 3. useMemo memoizes values
// 4. Both take dependency arrays
// 5. Both prevent unnecessary re-renders

// useCallback use cases:
// - Event handlers
// - Callback props
// - Custom hooks
// - Performance optimization

// useMemo use cases:
// - Expensive calculations
// - Object creation
// - Array transformations
// - Computed values`
  },
  {
    id: 6,
    question: "Explain useRef Hook and its use cases",
    visualization: `function RefDemo() {
  const inputRef = React.useRef(null);
  const countRef = React.useRef(0);
  const [count, setCount] = React.useState(0);

  const focusInput = () => {
    inputRef.current.focus();
  };

  const incrementCount = () => {
    countRef.current += 1;
    console.log('Ref count:', countRef.current);
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
      <div style={{ marginBottom: '20px' }}>
        <input
          ref={inputRef}
          type="text"
          placeholder="Focus me..."
          style={{ padding: '8px', width: '100%' }}
        />
        <button
          onClick={focusInput}
          style={{ marginTop: '10px', padding: '8px 16px' }}
        >
          Focus Input
        </button>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <button
          onClick={() => setCount(c => c + 1)}
          style={{ padding: '8px 16px', marginRight: '8px' }}
        >
          State Count: {count}
        </button>
        <button
          onClick={incrementCount}
          style={{ padding: '8px 16px' }}
        >
          Ref Count: {countRef.current}
        </button>
      </div>
    </div>
  );
}

ReactDOM.render(<RefDemo />, document.getElementById('root'));`,
    conceptVisualization: `function ConceptVisualization() {
  const [isAnimating, setIsAnimating] = React.useState(false);
  const [useCase, setUseCase] = React.useState('DOM Reference');

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setUseCase(prev => 
        prev === 'DOM Reference' ? 'Previous Value' : 'DOM Reference'
      );
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
          <h3 style={{ margin: '0 0 10px 0' }}>useRef Use Cases</h3>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px'
          }}>
            <div style={{
              padding: '10px',
              background: '#fff',
              borderRadius: '4px',
              border: '1px solid #ddd',
              transition: 'all 0.3s ease',
              transform: isAnimating ? 'scale(1.1)' : 'scale(1)'
            }}>
              {useCase}
            </div>
            <div style={{
              padding: '10px',
              background: '#fff',
              borderRadius: '4px',
              border: '1px solid #ddd',
              transition: 'all 0.3s ease',
              transform: isAnimating ? 'scale(1.1)' : 'scale(1)'
            }}>
              Mutable Values
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<ConceptVisualization />, document.getElementById('root'));`,
    solution: `// Key points about useRef:
// 1. useRef returns a mutable ref object
// 2. The ref object persists for the full lifetime of the component
// 3. Changes to ref don't trigger re-renders
// 4. Can hold any mutable value
// 5. Commonly used for DOM references

// Common use cases:
// - DOM element references
// - Storing previous values
// - Storing mutable values
// - Accessing child components
// - Managing focus
// - Storing interval/timeout IDs`
  },
  {
    id: 7,
    question: "Explain React Router Hooks (useParams, useNavigate, useSearchParams)",
    visualization: `function RouterDemo() {
  // Simulating router hooks
  const params = { id: '123', category: 'books' };
  const searchParams = new URLSearchParams('?filter=active&sort=date');
  const navigate = (path) => console.log('Navigating to:', path);

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <div style={{ marginBottom: '20px' }}>
        <h3>useParams Example</h3>
        <div style={{ 
          padding: '10px', 
          background: '#f0f0f0', 
          borderRadius: '4px' 
        }}>
          <p>ID: {params.id}</p>
          <p>Category: {params.category}</p>
        </div>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3>useSearchParams Example</h3>
        <div style={{ 
          padding: '10px', 
          background: '#f0f0f0', 
          borderRadius: '4px' 
        }}>
          <p>Filter: {searchParams.get('filter')}</p>
          <p>Sort: {searchParams.get('sort')}</p>
        </div>
      </div>

      <div>
        <h3>useNavigate Example</h3>
        <button
          onClick={() => navigate('/products/123')}
          style={{ padding: '8px 16px', marginRight: '8px' }}
        >
          Go to Product
        </button>
        <button
          onClick={() => navigate(-1)}
          style={{ padding: '8px 16px' }}
        >
          Go Back
        </button>
      </div>
    </div>
  );
}

ReactDOM.render(<RouterDemo />, document.getElementById('root'));`,
    conceptVisualization: `function ConceptVisualization() {
  const [isAnimating, setIsAnimating] = React.useState(false);
  const [hook, setHook] = React.useState('useParams');

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setHook(prev => {
        if (prev === 'useParams') return 'useNavigate';
        if (prev === 'useNavigate') return 'useSearchParams';
        return 'useParams';
      });
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
          <h3 style={{ margin: '0 0 10px 0' }}>{hook}</h3>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px'
          }}>
            <div style={{
              padding: '10px',
              background: '#fff',
              borderRadius: '4px',
              border: '1px solid #ddd',
              transition: 'all 0.3s ease',
              transform: isAnimating ? 'scale(1.1)' : 'scale(1)'
            }}>
              {hook === 'useParams' && 'Access URL parameters'}
              {hook === 'useNavigate' && 'Programmatic navigation'}
              {hook === 'useSearchParams' && 'Access query parameters'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<ConceptVisualization />, document.getElementById('root'));`,
    solution: `// Key points about React Router Hooks:
// 1. useParams: Access URL parameters
// 2. useNavigate: Programmatic navigation
// 3. useSearchParams: Access and modify query parameters

// useParams use cases:
// - Dynamic routes
// - Resource IDs
// - Category pages
// - User profiles

// useNavigate use cases:
// - Form submissions
// - Authentication flows
// - Programmatic redirects
// - Back/forward navigation

// useSearchParams use cases:
// - Filtering
// - Sorting
// - Pagination
// - Search functionality`
  },
  {
    id: 8,
    question: "Explain Redux Hooks (useSelector, useDispatch, useStore)",
    visualization: `function ReduxDemo() {
  // Simulating Redux hooks
  const count = 42;
  const dispatch = (action) => console.log('Dispatching:', action);
  const store = {
    getState: () => ({ count: 42 }),
    subscribe: (listener) => console.log('Subscribed:', listener)
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <div style={{ marginBottom: '20px' }}>
        <h3>useSelector Example</h3>
        <div style={{ 
          padding: '10px', 
          background: '#f0f0f0', 
          borderRadius: '4px' 
        }}>
          <p>Count from store: {count}</p>
        </div>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3>useDispatch Example</h3>
        <button
          onClick={() => dispatch({ type: 'INCREMENT' })}
          style={{ padding: '8px 16px', marginRight: '8px' }}
        >
          Increment
        </button>
        <button
          onClick={() => dispatch({ type: 'DECREMENT' })}
          style={{ padding: '8px 16px' }}
        >
          Decrement
        </button>
      </div>

      <div>
        <h3>useStore Example</h3>
        <div style={{ 
          padding: '10px', 
          background: '#f0f0f0', 
          borderRadius: '4px' 
        }}>
          <p>Store state: {JSON.stringify(store.getState())}</p>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<ReduxDemo />, document.getElementById('root'));`,
    conceptVisualization: `function ConceptVisualization() {
  const [isAnimating, setIsAnimating] = React.useState(false);
  const [hook, setHook] = React.useState('useSelector');

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setHook(prev => {
        if (prev === 'useSelector') return 'useDispatch';
        if (prev === 'useDispatch') return 'useStore';
        return 'useSelector';
      });
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
          <h3 style={{ margin: '0 0 10px 0' }}>{hook}</h3>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px'
          }}>
            <div style={{
              padding: '10px',
              background: '#fff',
              borderRadius: '4px',
              border: '1px solid #ddd',
              transition: 'all 0.3s ease',
              transform: isAnimating ? 'scale(1.1)' : 'scale(1)'
            }}>
              {hook === 'useSelector' && 'Select state from store'}
              {hook === 'useDispatch' && 'Dispatch actions to store'}
              {hook === 'useStore' && 'Access store directly'}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

ReactDOM.render(<ConceptVisualization />, document.getElementById('root'));`,
    solution: `// Key points about Redux Hooks:
// 1. useSelector: Selects state from the Redux store
// 2. useDispatch: Returns the store's dispatch function
// 3. useStore: Access the store instance directly

// useSelector use cases:
// - Reading state
// - Memoized selectors
// - Derived data

// useDispatch use cases:
// - Dispatching actions
// - Triggering state changes

// useStore use cases:
// - Accessing store methods
// - Advanced scenarios (middleware, subscriptions)`
  },
  {
    id: 9,
    question: "Explain useQuery, useMutation, and useInfiniteQuery (React Query)",
    visualization: `function QueryDemo() {
  // Simulating React Query hooks
  const data = { user: { name: 'Alice' } };
  const isLoading = false;
  const error = null;
  const mutate = () => alert('Mutation triggered!');
  const fetchNextPage = () => alert('Fetching next page...');

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <div style={{ marginBottom: '20px' }}>
        <h3>useQuery Example</h3>
        <div style={{ 
          padding: '10px', 
          background: '#f0f0f0', 
          borderRadius: '4px' 
        }}>
          {isLoading ? 'Loading...' : error ? 'Error!' : 'User: ' + data.user.name}
        </div>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <h3>useMutation Example</h3>
        <button
          onClick={mutate}
          style={{ padding: '8px 16px' }}
        >
          Mutate Data
        </button>
      </div>
      <div>
        <h3>useInfiniteQuery Example</h3>
        <button
          onClick={fetchNextPage}
          style={{ padding: '8px 16px' }}
        >
          Fetch Next Page
        </button>
      </div>
    </div>
  );
}

ReactDOM.render(<QueryDemo />, document.getElementById('root'));`,
    conceptVisualization: `function ConceptVisualization() {
  const [isAnimating, setIsAnimating] = React.useState(false);
  const [hook, setHook] = React.useState('useQuery');

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setHook(prev => {
        if (prev === 'useQuery') return 'useMutation';
        if (prev === 'useMutation') return 'useInfiniteQuery';
        return 'useQuery';
      });
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
          <h3 style={{ margin: '0 0 10px 0' }}>{hook}</h3>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px'
          }}>
            <div style={{
              padding: '10px',
              background: '#fff',
              borderRadius: '4px',
              border: '1px solid #ddd',
              transition: 'all 0.3s ease',
              transform: isAnimating ? 'scale(1.1)' : 'scale(1)'
            }}>
              {hook === 'useQuery' && 'Fetch and cache data'}
              {hook === 'useMutation' && 'Perform mutations'}
              {hook === 'useInfiniteQuery' && 'Paginated fetching'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<ConceptVisualization />, document.getElementById('root'));`,
    solution: `// Key points about React Query Hooks:
// 1. useQuery: Fetches and caches data
// 2. useMutation: Handles create/update/delete operations
// 3. useInfiniteQuery: Fetches paginated data

// useQuery use cases:
// - Data fetching
// - Caching
// - Background updates

// useMutation use cases:
// - Creating/updating/deleting data
// - Optimistic updates

// useInfiniteQuery use cases:
// - Infinite scrolling
// - Pagination
// - Loading more data`
  },
  {
    id: 10,
    question: "Explain useForm (React Hook Form)",
    visualization: `function FormDemo() {
  // Simulating useForm
  const [values, setValues] = React.useState({ name: '', email: '' });
  const [submitted, setSubmitted] = React.useState(false);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
      <div style={{ marginBottom: '10px' }}>
        <input
          name="name"
          value={values.name}
          onChange={handleChange}
          placeholder="Name"
          style={{ padding: '8px', width: '100%' }}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <input
          name="email"
          value={values.email}
          onChange={handleChange}
          placeholder="Email"
          style={{ padding: '8px', width: '100%' }}
        />
      </div>
      <button type="submit" style={{ padding: '8px 16px' }}>
        Submit
      </button>
      {submitted && (
        <div style={{ marginTop: '10px', color: 'green' }}>
          Submitted! {JSON.stringify(values)}
        </div>
      )}
    </form>
  );
}

ReactDOM.render(<FormDemo />, document.getElementById('root'));`,
    conceptVisualization: `function ConceptVisualization() {
  const [isAnimating, setIsAnimating] = React.useState(false);
  const [step, setStep] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setStep(prev => (prev + 1) % 3);
      setTimeout(() => setIsAnimating(false), 1000);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const steps = [
    'Register fields',
    'Validate input',
    'Handle submit'
  ];

  return (
    <div style={{ 
      padding: '20px',
      maxWidth: '600px',
      margin: '0 auto',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <div style={{
        padding: '20px',
        background: '#f0f0f0',
        borderRadius: '8px',
        transition: 'all 0.3s ease',
        transform: isAnimating ? 'scale(1.02)' : 'scale(1)'
      }}>
        <h3 style={{ margin: '0 0 10px 0' }}>useForm Steps</h3>
        <ol style={{ 
          margin: 0, 
          paddingLeft: '20px',
          opacity: isAnimating ? 1 : 0.7,
          transition: 'opacity 0.3s ease'
        }}>
          {steps.map((s, i) => (
            <li key={i} style={{
              transition: 'all 0.3s ease',
              transform: step === i && isAnimating ? 'translateX(10px) scale(1.1)' : 'translateX(0) scale(1)'
            }}>{s}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

ReactDOM.render(<ConceptVisualization />, document.getElementById('root'));`,
    solution: `// Key points about useForm (React Hook Form):
// 1. useForm manages form state and validation
// 2. Register fields with register()
// 3. Validate input with built-in or custom rules
// 4. Handle submit with handleSubmit()
// 5. Integrates with UI libraries

// Common use cases:
// - Simple and complex forms
// - Validation
// - Performance optimization
// - Dynamic fields`
  },
  {
    id: 11,
    question: "Explain useFetch (custom hook for data fetching)",
    visualization: `function useFetch(url) {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);
    fetch(url)
      .then(res => res.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
}

function FetchDemo() {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/todos/1');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}

ReactDOM.render(<FetchDemo />, document.getElementById('root'));`,
    conceptVisualization: `function ConceptVisualization() {
  const [isAnimating, setIsAnimating] = React.useState(false);
  const [phase, setPhase] = React.useState('loading');

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setPhase(prev => {
        if (prev === 'loading') return 'success';
        if (prev === 'success') return 'error';
        return 'loading';
      });
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
        padding: '20px',
        background: '#f0f0f0',
        borderRadius: '8px',
        transition: 'all 0.3s ease',
        transform: isAnimating ? 'scale(1.02)' : 'scale(1)'
      }}>
        <h3 style={{ margin: '0 0 10px 0' }}>useFetch Phases</h3>
        <ul style={{ 
          margin: 0, 
          paddingLeft: '20px',
          opacity: isAnimating ? 1 : 0.7,
          transition: 'opacity 0.3s ease'
        }}>
          <li style={{
            transition: 'all 0.3s ease',
            color: phase === 'loading' ? 'blue' : 'inherit'
          }}>Loading</li>
          <li style={{
            transition: 'all 0.3s ease',
            color: phase === 'success' ? 'green' : 'inherit'
          }}>Success</li>
          <li style={{
            transition: 'all 0.3s ease',
            color: phase === 'error' ? 'red' : 'inherit'
          }}>Error</li>
        </ul>
      </div>
    </div>
  );
}

ReactDOM.render(<ConceptVisualization />, document.getElementById('root'));`,
    solution: `// Key points about useFetch (custom hook):
// 1. Encapsulates data fetching logic
// 2. Returns data, loading, and error states
// 3. Re-fetches on URL change
// 4. Can be extended for caching, retries, etc.

// Common use cases:
// - Data fetching in components
// - Reusable logic
// - API integration
// - Loading and error handling`
  },
  {
    id: 12,
    question: "Explain useAnimate and useMotionValue (Framer Motion)",
    visualization: `// This is a conceptual example, as Framer Motion is not available in this environment
function AnimateDemo() {
  // Simulate motion value and animation
  const [x, setX] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setX(prev => (prev + 50) % 300);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ height: '100px', position: 'relative', background: '#f0f0f0', borderRadius: '8px', overflow: 'hidden' }}>
      <div style={{
        width: '50px',
        height: '50px',
        background: '#0070f3',
        borderRadius: '50%',
        position: 'absolute',
        left: x,
        top: '25px',
        transition: 'left 0.5s cubic-bezier(0.4,0,0.2,1)'
      }} />
    </div>
  );
}

ReactDOM.render(<AnimateDemo />, document.getElementById('root'));`,
    conceptVisualization: `function ConceptVisualization() {
  const [isAnimating, setIsAnimating] = React.useState(false);
  const [motion, setMotion] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setMotion(prev => (prev + 50) % 300);
      setTimeout(() => setIsAnimating(false), 500);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ height: '100px', position: 'relative', background: '#f0f0f0', borderRadius: '8px', overflow: 'hidden' }}>
      <div style={{
        width: '50px',
        height: '50px',
        background: '#0070f3',
        borderRadius: '50%',
        position: 'absolute',
        left: motion,
        top: '25px',
        transition: 'left 0.5s cubic-bezier(0.4,0,0.2,1)'
      }} />
    </div>
  );
}

ReactDOM.render(<ConceptVisualization />, document.getElementById('root'));`,
    solution: `// Key points about useAnimate and useMotionValue (Framer Motion):
// 1. useAnimate: Animates elements with imperative API
// 2. useMotionValue: Creates and controls animated values
// 3. Both are part of Framer Motion for React

// useAnimate use cases:
// - Triggering animations on events
// - Sequenced animations

// useMotionValue use cases:
// - Draggable UI
// - Animated progress bars
// - Interactive motion effects`
  },
  {
    id: 13,
    question: "Explain useKeyPress, useDebounce, useThrottle, useMediaQuery, useLocalStorage (utility hooks)",
    visualization: `function UtilityDemo() {
  // Simulate key press, debounce, throttle, media query, and local storage
  const [key, setKey] = React.useState('');
  const [debounced, setDebounced] = React.useState('');
  const [throttled, setThrottled] = React.useState('');
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 600);
  const [storage, setStorage] = React.useState(localStorage.getItem('demo') || '');

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 600);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  React.useEffect(() => {
    const timeout = setTimeout(() => setDebounced(key), 500);
    return () => clearTimeout(timeout);
  }, [key]);

  React.useEffect(() => {
    const interval = setInterval(() => setThrottled(key), 1000);
    return () => clearInterval(interval);
  }, [key]);

  React.useEffect(() => {
    localStorage.setItem('demo', storage);
  }, [storage]);

  React.useEffect(() => {
    const handleKeyDown = (e) => setKey(e.key);
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <div style={{ marginBottom: '10px' }}>
        <strong>Key Pressed:</strong> {key}
      </div>
      <div style={{ marginBottom: '10px' }}>
        <strong>Debounced:</strong> {debounced}
      </div>
      <div style={{ marginBottom: '10px' }}>
        <strong>Throttled:</strong> {throttled}
      </div>
      <div style={{ marginBottom: '10px' }}>
        <strong>Media Query (isMobile):</strong> {isMobile ? 'Yes' : 'No'}
      </div>
      <div>
        <input
          value={storage}
          onChange={e => setStorage(e.target.value)}
          placeholder="LocalStorage"
          style={{ padding: '8px', width: '100%' }}
        />
      </div>
    </div>
  );
}

ReactDOM.render(<UtilityDemo />, document.getElementById('root'));`,
    conceptVisualization: `function ConceptVisualization() {
  const [isAnimating, setIsAnimating] = React.useState(false);
  const [hook, setHook] = React.useState('useKeyPress');

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setHook(prev => {
        if (prev === 'useKeyPress') return 'useDebounce';
        if (prev === 'useDebounce') return 'useThrottle';
        if (prev === 'useThrottle') return 'useMediaQuery';
        if (prev === 'useMediaQuery') return 'useLocalStorage';
        return 'useKeyPress';
      });
      setTimeout(() => setIsAnimating(false), 1000);
    }, 2000);

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
        padding: '20px',
        background: '#f0f0f0',
        borderRadius: '8px',
        transition: 'all 0.3s ease',
        transform: isAnimating ? 'scale(1.02)' : 'scale(1)'
      }}>
        <h3 style={{ margin: '0 0 10px 0' }}>{hook}</h3>
        <ul style={{ 
          margin: 0, 
          paddingLeft: '20px',
          opacity: isAnimating ? 1 : 0.7,
          transition: 'opacity 0.3s ease'
        }}>
          <li>Keyboard events</li>
          <li>Debounced input</li>
          <li>Throttled updates</li>
          <li>Responsive design</li>
          <li>Persistent state</li>
        </ul>
      </div>
    </div>
  );
}

ReactDOM.render(<ConceptVisualization />, document.getElementById('root'));`,
    solution: `// Key points about utility hooks:
// 1. useKeyPress: Listen for keyboard events
// 2. useDebounce: Debounce a value or function
// 3. useThrottle: Throttle a value or function
// 4. useMediaQuery: Respond to media queries
// 5. useLocalStorage: Persistent state in localStorage

// Common use cases:
// - Keyboard shortcuts
// - Search input optimization
// - Rate limiting
// - Responsive UI
// - Saving user preferences`
  }
];

export default function ReactHooksInterview() {
  const [selectedQuestion, setSelectedQuestion] = useState(hookQuestions[0]);

  return (
    <div className="flex h-screen bg-white dark:bg-gray-900">
      <Sidebar 
        questions={hookQuestions}
        selectedQuestion={selectedQuestion}
        onSelectQuestion={setSelectedQuestion}
      />
      <QuestionContent question={selectedQuestion} />
    </div>
  );
} 