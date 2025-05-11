# React Interview Preparation Platform

A comprehensive platform for learning React concepts through interactive examples and visualizations.

## 🚀 Getting Started

### Option 1: Local Development

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000)

### Option 2: Docker Development

1. Ensure Docker Desktop is installed and running
2. Build and run using Docker Compose:
   ```bash
   docker-compose up
   ```
3. Open [http://localhost:3000](http://localhost:3000)

### Option 3: Docker Production Build

1. Build the Docker image:
   ```bash
   docker build -t nextjs-learning .
   ```
2. Run the container:
   ```bash
   docker run -p 3000:3000 nextjs-learning
   ```

## 🐳 Docker Configuration

The project includes Docker support for both development and production environments:

- `Dockerfile`: Multi-stage build for production
- `docker-compose.yml`: Development environment with hot-reloading
- `.dockerignore`: Optimized build context

### Development with Docker

The development environment includes:
- Hot-reloading
- Volume mounting for live code updates
- Node modules isolation
- Development-specific configurations

### Production with Docker

The production build includes:
- Multi-stage builds for smaller image size
- Production optimizations
- Security best practices
- Standalone output

## 🎯 Available Topics

### React Hooks
Path: `/interview/react/hookques`

Covers:
- Basic Hooks (useState, useEffect, useContext)
- Additional Hooks (useReducer, useCallback, useMemo)
- Custom Hooks
- Performance Hooks

### React Router
Path: `/interview/react/router`

Covers:
- useParams
- useNavigate
- useSearchParams
- Route Configuration
- Nested Routes

### State Management
Path: `/interview/react/state`

Covers:
- Redux (useSelector, useDispatch, useStore)
- Context API
- React Query
- State Management Patterns

## 🎯 Features

### Interactive Learning
- Live code examples
- Real-time preview
- Code editor integration
- Immediate feedback

### Visual Explanations
- Animated concepts
- Step-by-step breakdowns
- Visual flow diagrams
- Interactive demonstrations

### Comprehensive Coverage
- Core React concepts
- Advanced patterns
- Best practices
- Performance optimization

## 🎨 Navigation Guide

### React Hooks Section
- Basic Hooks: `/interview/react/hookques#basic-hooks`
- Additional Hooks: `/interview/react/hookques#additional-hooks`
- Custom Hooks: `/interview/react/hookques#custom-hooks`
- Performance Hooks: `/interview/react/hookques#performance-hooks`

### React Router Section
- Route Parameters: `/interview/react/router#params`
- Navigation: `/interview/react/router#navigation`
- Search Parameters: `/interview/react/router#search`
- Route Configuration: `/interview/react/router#config`

### State Management Section
- Redux: `/interview/react/state#redux`
- Context API: `/interview/react/state#context`
- React Query: `/interview/react/state#query`
- Patterns: `/interview/react/state#patterns`

## 🎨 Technologies Used

- Next.js 13+
- React 18
- Tailwind CSS
- Framer Motion
- TypeScript
- Monaco Editor

## 📖 Learning Path

1. Start with Basic Hooks
   - Understand useState and useEffect
   - Practice with simple examples
   - Move to more complex scenarios

2. Explore Additional Hooks
   - Learn useReducer for complex state
   - Master useCallback and useMemo
   - Understand useRef and its use cases

3. Dive into Routing
   - Learn route configuration
   - Master navigation patterns
   - Understand route parameters

4. Master State Management
   - Start with Context API
   - Move to Redux
   - Learn React Query

## 🎨 Customization

The platform is built with customization in mind:

- Theme customization in `tailwind.config.js`
- Animation settings in `framer-motion` configurations
- Code editor settings in Monaco Editor configuration

## 🤝 Contributing

Contributions are welcome! Please read our contributing guidelines before submitting pull requests.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- React Documentation
- Next.js Team
- Framer Motion
- Tailwind CSS
