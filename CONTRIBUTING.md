# Contributing Guidelines

Thank you for considering contributing to this project! Here are some guidelines to help you get started.

## How to Contribute

### Reporting Bugs

If you find a bug:
1. Check if the issue already exists
2. Create a detailed bug report including:
   - Description of the bug
   - Steps to reproduce
   - Expected behavior
   - Actual behavior
   - Screenshots (if applicable)
   - Environment details (OS, browser, Node version)

### Suggesting Features

Feature requests are welcome! Please:
1. Check if the feature has already been requested
2. Provide a clear description of the feature
3. Explain why this feature would be useful
4. Include examples of how it would work

### Pull Requests

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Follow the code style**
   - Run `npm run lint` before committing
   - Run `npm run format` to format code
   - Ensure all tests pass with `npm test`

4. **Write tests**
   - Add tests for new features
   - Ensure existing tests still pass
   - Maintain or improve code coverage

5. **Commit your changes**
   ```bash
   git commit -m "feat: add amazing feature"
   ```
   
   Use conventional commit messages:
   - `feat:` - New feature
   - `fix:` - Bug fix
   - `docs:` - Documentation changes
   - `style:` - Code style changes (formatting)
   - `refactor:` - Code refactoring
   - `test:` - Adding or updating tests
   - `chore:` - Maintenance tasks

6. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

7. **Create a Pull Request**
   - Provide a clear title and description
   - Reference any related issues
   - Include screenshots for UI changes
   - Ensure CI checks pass

## Development Guidelines

### Code Style

- Use TypeScript for all new code
- Follow the existing code structure
- Use functional components and hooks
- Keep components small and focused
- Write self-documenting code with clear names

### File Organization

```
src/
├── components/     # Reusable UI components
├── pages/          # Page-level components
├── store/          # State management
├── hooks/          # Custom React hooks
├── utils/          # Utility functions
├── types/          # TypeScript types
└── __tests__/      # Test files
```

### Testing

- Write unit tests for utilities
- Write integration tests for components
- Use React Testing Library best practices
- Test user behavior, not implementation
- Aim for >80% code coverage

### Performance

- Use React.memo() for expensive components
- Implement proper key props for lists
- Avoid unnecessary re-renders
- Optimize images and assets
- Use code splitting for large features

## 🔍 Code Review Process

All pull requests will be reviewed for:
- Code quality and style
- Test coverage
- Documentation
- Performance considerations
- Security implications

## Resources

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev/guide/)
- [React Testing Library](https://testing-library.com/react)
- [Zustand Documentation](https://docs.pmnd.rs/zustand)

## Communication

- Be respectful and constructive
- Ask questions if you're unsure
- Help others in discussions
- Follow the code of conduct

## Checklist

Before submitting a PR, ensure:
- [ ] Code follows the style guidelines
- [ ] Tests pass (`npm test`)
- [ ] Linting passes (`npm run lint`)
- [ ] Types are correct (`npm run type-check`)
- [ ] Documentation is updated
- [ ] Commit messages follow conventions
- [ ] Branch is up to date with main

Thank you for contributing! 