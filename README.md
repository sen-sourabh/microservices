# 🚀 Microservices Architecture with NestJS

[![NestJS](https://img.shields.io/badge/NestJS-11.0.1-red.svg)](https://nestjs.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.3-blue.svg)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-22.10.7-green.svg)](https://nodejs.org/)
[![License](https://img.shields.io/badge/License-UNLICENSED-gray.svg)](LICENSE)

A robust, scalable microservices architecture built with **NestJS**, featuring an API Gateway, Authentication Service, and User Management Service. This project demonstrates modern microservices patterns, inter-service communication, and best practices for building distributed systems.

## ✨ Features

- **🏗️ Microservices Architecture**: Modular, scalable design with independent services
- **🔐 JWT Authentication**: Secure authentication with Passport.js and JWT tokens
- **🌐 API Gateway**: Centralized routing and request handling
- **📚 Swagger Documentation**: Auto-generated API documentation
- **🛡️ Security**: Helmet.js security headers and validation pipes
- **📧 Email Integration**: Nodemailer with Handlebars templating
- **☁️ AWS Integration**: S3 client for file storage
- **🧪 Testing**: Comprehensive Jest testing suite with E2E tests
- **📝 TypeScript**: Full TypeScript support with strict typing
- **🎨 Code Quality**: ESLint, Prettier, and modern development tools

## 🏗️ Architecture Overview

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   API Gateway  │    │   Auth Service  │    │  Users Service  │
│   (Port 3000)  │◄──►│   (Port 3001)   │    │   (Port 3002)   │
│                 │    │                 │    │                 │
│ • Route Proxy  │    │ • JWT Auth      │    │ • User CRUD     │
│ • Swagger Docs │    │ • Passport      │    │ • Validation    │
│ • Validation   │    │ • Email         │    │ • DTOs          │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+ 
- **npm** or **yarn**
- **TypeScript** knowledge

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd microservices
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   ```bash
   # Copy and configure environment variables
   cp .env.example .env
   ```

4. **Start Development**
   ```bash
   # Start all services in development mode
   npm run start:dev
   
   # Or start individual services
   npm run start:dev:api-gateway
   npm run start:dev:auth
   npm run start:dev:users
   ```

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm run start:dev` | Start API Gateway in watch mode |
| `npm run start:debug` | Start with debug mode |
| `npm run start:prod` | Start production build |
| `npm run build` | Build all applications |
| `npm run test` | Run unit tests |
| `npm run test:e2e` | Run end-to-end tests |
| `npm run test:cov` | Run tests with coverage |
| `npm run lint` | Lint and auto-fix code with ESLint v9 |
| `npm run format` | Format code with enhanced Prettier rules |
| `npm run lint:check` | Check linting without auto-fix |
| `npm run format:check` | Check formatting without changes |

## 📁 Project Structure

```
microservices/
├── apps/
│   ├── api-gateway/          # 🚪 Main API Gateway
│   │   ├── src/
│   │   │   ├── auth/         # Authentication routes
│   │   │   ├── users/        # User management routes
│   │   │   └── main.ts       # Gateway entry point
│   ├── auth/                 # 🔐 Authentication Service
│   │   └── src/
│   │       ├── auth.controller.ts
│   │       ├── auth.service.ts
│   │       └── main.ts
│   └── users/                # 👥 User Management Service
│       └── src/
│           ├── dto/          # Data Transfer Objects
│           ├── users.controller.ts
│           ├── users.service.ts
│           └── main.ts
├── shared/                   # 🔧 Shared utilities
│   ├── config/              # Configuration files
│   ├── dtos/                # Shared DTOs
│   ├── interceptors/        # HTTP interceptors
│   ├── pipes/               # Validation pipes
│   └── swagger/             # API documentation
└── dist/                    # Build outputs
```

## 🔧 Configuration

### Code Quality Configuration

**ESLint Configuration (`eslint.config.mjs`):**
- Modern ESLint v9 flat config format
- TypeScript ESLint v8 with strict rules
- NestJS-specific optimizations
- Auto-fix capabilities for most issues

**Prettier Configuration (`.prettierrc`):**
- Enhanced formatting rules for consistency
- File-specific overrides (Markdown, JSON, YAML)
- Modern formatting options for better readability

**Ignore Files:**
- `.prettierignore`: Controls which files Prettier formats
- ESLint ignores are configured in `eslint.config.mjs`

### Environment Variables

Create a `.env` file in the root directory:

```env
# Server Configuration
PROTOCOL=http
HOST=localhost
PORTS_GATEWAY=3000
PORTS_AUTH=3001
PORTS_USERS=3002

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key
JWT_EXPIRES_IN=1d

# Database Configuration (if applicable)
DATABASE_URL=your-database-connection-string

# AWS Configuration
AWS_ACCESS_KEY_ID=your-aws-access-key
AWS_SECRET_ACCESS_KEY=your-aws-secret-key
AWS_REGION=us-east-1
AWS_S3_BUCKET=your-s3-bucket-name

# Email Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

## 🌐 API Endpoints

### API Gateway (Port 3000)
- **Base URL**: `http://localhost:3000/api`
- **Swagger Docs**: `http://localhost:3000/api`

### Authentication Service (Port 3001)
- **Login**: `POST /auth/login`
- **Register**: `POST /auth/register`
- **Refresh Token**: `POST /auth/refresh`

### Users Service (Port 3002)
- **Get Users**: `GET /users`
- **Get User**: `GET /users/:id`
- **Create User**: `POST /users`
- **Update User**: `PUT /users/:id`
- **Delete User**: `DELETE /users/:id`

## 🧪 Testing

### Unit Tests
```bash
npm run test
```

### E2E Tests
```bash
npm run test:e2e
```

### Coverage Report
```bash
npm run test:cov
```

## 🎨 Code Quality & Development Tools

### Linting with ESLint v9
```bash
# Lint and auto-fix all TypeScript files
npm run lint

# Check linting without making changes
npm run lint:check
```

**Features:**
- **TypeScript ESLint v8** with strict type checking
- **Automatic error detection** and fixing
- **NestJS-specific optimizations** for microservices
- **Performance and security rules** for production code
- **Unused imports detection** and removal

### Code Formatting with Prettier
```bash
# Format all TypeScript files automatically
npm run format

# Check formatting without making changes
npm run format:check
```

**Features:**
- **Consistent code style** across the entire project
- **File-specific overrides** for different file types
- **Modern formatting rules** for better readability
- **Automatic formatting** on save (with IDE integration)

### Development Workflow
```bash
# Complete code quality check and formatting
npm run lint && npm run format

# Or run them individually
npm run lint
npm run format
```

**Best Practices:**
1. **Before committing**: Run `npm run lint` to catch issues
2. **IDE Integration**: Enable auto-format on save
3. **Pre-commit hooks**: Consider adding automated checks
4. **Team consistency**: All developers use the same rules

### IDE Setup & Extensions

**VS Code (Recommended):**
- **ESLint Extension**: `dbaeumer.vscode-eslint`
- **Prettier Extension**: `esbenp.prettier-vscode`
- **TypeScript Extension**: `ms-vscode.vscode-typescript-next`

**Settings for VS Code:**
```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "eslint.validate": ["typescript"],
  "prettier.requireConfig": true
}
```

**Other IDEs:**
- **WebStorm**: Built-in ESLint and Prettier support
- **Vim/Neovim**: Use ALE or coc.nvim for linting
- **Emacs**: Use flycheck and prettier-js

## 📚 API Documentation

The project includes comprehensive Swagger documentation. Once running, visit:

- **API Gateway**: `http://localhost:3000/api`
- **Interactive API Docs**: Full OpenAPI 3.0 specification with testing interface

## 🔒 Security Features

- **JWT Authentication**: Secure token-based authentication
- **Helmet.js**: Security headers for protection against common vulnerabilities
- **Validation Pipes**: Input validation and sanitization
- **CORS Protection**: Configurable Cross-Origin Resource Sharing
- **Rate Limiting**: Built-in request throttling (configurable)

## 🚀 Deployment

### Production Build
```bash
npm run build
npm run start:prod
```

### Docker (Recommended)
```dockerfile
# Example Dockerfile for production
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY dist ./dist
EXPOSE 3000
CMD ["npm", "run", "start:prod"]
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Write comprehensive tests
- Use conventional commit messages
- Ensure code passes linting and formatting
- Update documentation for new features

## 📝 Code Quality

This project maintains high code quality standards with:

- **ESLint**: Code linting and best practices enforcement
- **Prettier**: Consistent code formatting
- **TypeScript**: Strict type checking
- **Jest**: Comprehensive testing framework
- **Swagger**: Auto-generated API documentation

## 🔍 Troubleshooting

### Code Quality Issues

1. **ESLint Errors**
   ```bash
   # Check for linting issues
   npm run lint:check
   
   # Auto-fix most issues
   npm run lint
   ```

2. **Formatting Issues**
   ```bash
   # Check formatting without changes
   npm run format:check
   
   # Auto-format all files
   npm run format
   ```

3. **TypeScript Errors**
   ```bash
   # Check TypeScript compilation
   npm run build
   
   # Run with type checking
   npx tsc --noEmit
   ```

### Common Issues

1. **Port Already in Use**
   ```bash
   # Kill process using specific port
   lsof -ti:3000 | xargs kill -9
   ```

2. **Build Errors**
   ```bash
   # Clean and rebuild
   rm -rf dist/
   npm run build
   ```

3. **Microservice Connection Issues**
   - Ensure all services are running
   - Check port configurations in `.env`
   - Verify TCP transport settings

4. **Linting/Formatting Issues**
   - Ensure ESLint and Prettier extensions are installed in your IDE
   - Check that configuration files are properly set up
   - Verify file paths in package.json scripts match your project structure

## 📄 License

This project is [UNLICENSED](LICENSE). See the LICENSE file for details.

## 🙏 Acknowledgments

- **NestJS Team** for the amazing framework
- **Open Source Community** for the excellent packages
- **Contributors** who help improve this project

## 📞 Support

- **Issues**: [GitHub Issues](your-repo-url/issues)
- **Discussions**: [GitHub Discussions](your-repo-url/discussions)
- **Documentation**: [Project Wiki](your-repo-url/wiki)

---

<div align="center">
  <p>Made with ❤️ using <strong>NestJS</strong> and <strong>TypeScript</strong></p>
  <p>⭐ Star this repository if it helped you!</p>
</div>