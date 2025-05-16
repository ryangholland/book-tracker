# Book Tracker Project Plan

## Project Overview
A web application to track books you've read, are currently reading, and want to read in the future.

## Tech Stack
- Frontend: React (with Vite)
- Styling: TailwindCSS
- Backend: Express.js
- Database: PostgreSQL
- ORM: Prisma

## Project Structure
```
book-tracker/
├── client/           # React frontend
├── server/           # Express backend
├── prisma/           # Database schema and migrations
└── README.md
```

## Development Phases

### Phase 1: Project Setup
- [ ] Initialize project structure
- [ ] Set up Git repository
- [ ] Create basic README
- [ ] Configure development environment

### Phase 2: Frontend Development (with Mock Data)
- [ ] Set up Vite + React
- [ ] Install and configure TailwindCSS
- [ ] Create basic component structure
- [ ] Implement mock data structure
- [ ] Build UI components:
  - [ ] Book list view
  - [ ] Add book form
  - [ ] Book status management
  - [ ] Basic CRUD operations

### Phase 3: Backend Development
- [ ] Set up Express server
- [ ] Configure PostgreSQL database
- [ ] Set up Prisma schema
- [ ] Create API endpoints:
  - [ ] GET /books (all books)
  - [ ] POST /books (add book)
  - [ ] PUT /books/:id (update book)
  - [ ] DELETE /books/:id (delete book)

### Phase 4: Integration
- [ ] Connect frontend with backend
- [ ] Replace mock data with API calls
- [ ] Error handling
- [ ] Loading states

## Core Features

### MVP (Minimum Viable Product)
1. Book Management
   - Add new books
   - Edit book details
   - Delete books
   - View all books

2. Book Properties
   - Title
   - Author
   - Reading Status (Want to Read, Currently Reading, Completed)
   - Page Count

3. User Interface
   - Clean, responsive design
   - Separate lists for different reading statuses
   - Simple navigation
   - Basic form for adding/editing books

## Future Enhancements (Backlog)
- User authentication
- Book ratings
- Reading progress tracking
- Book notes/reviews
- Book categories/tags
- Reading goals
- Book search functionality
- Book cover images
- Reading statistics

## Git Workflow & Conventions

### Branch Strategy
- `main`: Production-ready code
- `dev`: Development branch, main integration branch for features
- Feature branches: Created from `dev` for each new feature
  - Format: `feature/feature-name`
  - Example: `feature/add-book-form`
  - Merge back into `dev` when complete

### Branch Workflow
1. Create feature branch from `dev`
2. Make changes in feature branch
3. Commit using Conventional Commits
4. Push feature branch to GitHub
5. Create Pull Request to merge into `dev`
6. After review, merge into `dev`
7. Periodically merge `dev` into `main` for releases

### Conventional Commits
We follow the Conventional Commits specification for commit messages:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

Types:
- feat: New feature
- fix: Bug fix
- docs: Documentation changes
- style: Code style changes (formatting, missing semi colons, etc)
- refactor: Code refactoring
- test: Adding missing tests
- chore: Maintenance tasks

Examples:
- feat: add book rating component
- fix: resolve book status not updating
- docs: update README with setup instructions
- style: format BookList component
- refactor: extract book card into separate component

### Commit Practices
- Make small, focused commits
- Each commit should represent one logical change
- Write clear, descriptive commit messages
- Reference issue numbers when applicable

## Design Approach
- Start with clean, minimal Tailwind CSS styling
- Focus on functionality and user experience first
- Establish basic consistency in spacing and typography
- Use a simple, accessible color scheme
- Iterate and enhance visual design based on needs
- Keep components modular for easy style updates

## Notes
- Starting with frontend development using mock data
- Using TailwindCSS for styling
- Following React best practices
- Implementing responsive design 