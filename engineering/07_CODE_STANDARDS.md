# CODE STANDARDS

---

# Document Information

| Property | Value |
|----------|-------|
| Document Name | Code Standards |
| Project | StreamShield |
| Version | 1.0 |
| Status | Active |
| Last Updated | July 2026 |

---

# 1. Purpose

This document defines the coding standards that every contributor and AI assistant must follow when working on the StreamShield project.

The goal is to maintain a clean, readable, secure, and scalable codebase.

---

# 2. General Principles

- Write clean and readable code.
- Prefer simplicity over complexity.
- Avoid duplicate code (DRY).
- Follow the Single Responsibility Principle.
- Keep functions small and focused.
- Write reusable components and utilities.

---

# 3. JavaScript Standards

- Use modern ES6+ syntax.
- Prefer `const` over `let`.
- Avoid `var`.
- Use arrow functions where appropriate.
- Use template literals instead of string concatenation.
- Always use `async/await` for asynchronous operations.
- Do not use callback-based code for new features.

---

# 4. Naming Conventions

## Variables

Use camelCase.

Example:

```javascript
const uploadedVideo;
const userProfile;
```

---

## Functions

Use camelCase.

```javascript
uploadVideo();
createUser();
deleteAccount();
```

---

## Classes

Use PascalCase.

```javascript
UserService
VideoController
```

---

## React Components

Use PascalCase.

```javascript
Navbar.jsx
UploadCard.jsx
VideoPlayer.jsx
```

---

## Files

Examples:

```
user.routes.js
video.controller.js
auth.middleware.js
upload.service.js
```

---

# 5. Folder Organization

Every file must be placed in the correct folder.

Never create random folders.

Follow the official folder structure.

---

# 6. API Standards

All APIs must:

- Use REST principles.
- Return JSON responses.
- Validate incoming data.
- Use appropriate HTTP status codes.
- Handle errors consistently.

Example Success Response:

```json
{
    "success": true,
    "message": "Video uploaded successfully",
    "data": {}
}
```

Example Error Response:

```json
{
    "success": false,
    "message": "Invalid credentials"
}
```

---

# 7. Error Handling

Every controller must use:

- try/catch
- centralized error middleware
- meaningful error messages

Never expose internal server details to users.

---

# 8. Validation

Every incoming request must be validated.

Examples:

- Email
- Password
- Username
- File type
- File size

Never trust client-side validation alone.

---

# 9. Authentication Rules

- Passwords must be hashed using bcrypt.
- JWT authentication is required.
- Tokens must expire.
- Protected routes require authentication middleware.

---

# 10. Security Standards

- Never hardcode secrets.
- Use `.env` files.
- Sanitize user input.
- Validate uploaded files.
- Protect against common web vulnerabilities.

---

# 11. Database Standards

- Use Mongoose models.
- Keep schemas organized.
- Use timestamps where appropriate.
- Avoid unnecessary queries.
- Create indexes for frequently searched fields.

---

# 12. Frontend Standards

- Use functional React components.
- Keep components reusable.
- Use Tailwind CSS only.
- Avoid inline styles.
- Separate UI from business logic where practical.

---

# 13. Logging

Log important events:

- User login
- User registration
- Video upload
- AI moderation result
- Ban actions
- Server errors

Avoid logging sensitive information such as passwords or tokens.

---

# 14. Git Standards

Commit messages should be clear.

Examples:

```
Add authentication routes

Implement video upload controller

Fix JWT middleware

Update dashboard UI
```

Avoid messages like:

```
update

fix

changes

test
```

---

# 15. AI Coding Rules

Every AI assistant must:

- Read engineering documents before coding.
- Modify only assigned files.
- Avoid changing unrelated modules.
- Follow the project architecture.
- Explain complex code if requested.
- Generate production-quality code.

---

# 16. Code Review Checklist

Before code is merged:

- Code runs without errors.
- No unused variables.
- No duplicate logic.
- Proper error handling.
- Input validation present.
- Security considerations addressed.
- Documentation updated if necessary.

---

# 17. Definition of Clean Code

Clean code is:

- Readable
- Consistent
- Modular
- Reusable
- Secure
- Well-structured
- Easy to maintain