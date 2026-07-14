# FOLDER STRUCTURE

---

# Document Information

| Property | Value |
|----------|-------|
| Document Name | Folder Structure |
| Project | StreamShield |
| Version | 1.0 |
| Status | Active |
| Last Updated | July 2026 |

---

# 1. Purpose

This document defines the official folder structure for the StreamShield project.

Every AI assistant and contributor must follow this structure. New folders should not be created unless approved through the engineering documentation.

---

# 2. Root Structure

```
StreamShield/

│
├── client/
├── server/
├── engineering/
├── docs/
├── prompts/
├── .gitignore
├── README.md
├── package.json
└── .env.example
```

---

# 3. Client Structure

```
client/

src/

assets/

components/

layouts/

pages/

hooks/

context/

services/

utils/

styles/

router/

App.jsx

main.jsx
```

---

# 4. Components

Reusable UI components only.

Examples:

```
Navbar

Sidebar

Footer

Button

Input

Modal

VideoCard

UploadForm

Loader
```

---

# 5. Pages

Every page represents a route.

Examples:

```
Home

Login

Register

Dashboard

Upload

Profile

VideoPlayer

Admin

Settings

404
```

---

# 6. Services

Contains API communication.

Examples:

```
auth.service.js

video.service.js

admin.service.js
```

---

# 7. Hooks

Contains reusable custom hooks.

Examples:

```
useAuth

useUpload

useFetchVideos
```

---

# 8. Utils

Utility functions.

Examples:

```
formatDate

generateSlug

validators

constants
```

---

# 9. Backend Structure

```
server/

config/

controllers/

middleware/

models/

routes/

services/

validators/

utils/

uploads/

logs/

server.js

app.js
```

---

# 10. Controllers

Business logic only.

Examples:

```
auth.controller.js

video.controller.js

admin.controller.js
```

---

# 11. Routes

API endpoints.

Examples:

```
auth.routes.js

video.routes.js

admin.routes.js
```

---

# 12. Models

MongoDB models.

Examples:

```
User.js

Video.js

Report.js

Subscription.js
```

---

# 13. Middleware

Examples:

```
auth.middleware.js

upload.middleware.js

error.middleware.js

rateLimit.middleware.js
```

---

# 14. Services

Contains business services.

Examples:

```
s3.service.js

aiModeration.service.js

email.service.js
```

---

# 15. Validators

Contains request validation logic.

Examples:

```
auth.validator.js

video.validator.js
```

---

# 16. Config

Configuration files.

Examples:

```
database.js

aws.js

jwt.js

multer.js
```

---

# 17. Logs

Application logs.

```
logs/

error.log

combined.log
```

---

# 18. Engineering Folder

```
engineering/

01_MASTER_AI_ENGINEERING_GUIDE.md

02_PROJECT_CONTEXT.md

03_CURRENT_MODULE.md

04_PROGRESS.md

05_DECISIONS.md

06_AI_ASSIGNMENTS.md

07_CODE_STANDARDS.md

08_FOLDER_STRUCTURE.md

09_API_CONTRACT.md

10_DATABASE_SCHEMA.md

11_SECURITY_POLICY.md

12_DEPLOYMENT_GUIDE.md

13_UI_UX_GUIDELINES.md

14_TESTING_STRATEGY.md

15_FUTURE_ROADMAP.md
```

---

# 19. Documentation Folder

Contains additional project documentation.

```
docs/

API.md

DATABASE.md

TODO.md

PROGRESS.md
```

---

# 20. Prompt Library

Stores AI prompts.

```
prompts/

backend/

frontend/

database/

testing/

architecture/
```

---

# 21. File Naming Rules

Use lowercase with descriptive names.

Examples:

```
auth.routes.js

video.controller.js

upload.service.js
```

Avoid:

```
file1.js

new.js

test.js

abc.js
```

---

# 22. Folder Rules

- Keep folders organized.
- Avoid deeply nested structures.
- Do not duplicate functionality.
- Group related files together.
- Remove unused files.

---

# 23. Future Expansion

The folder structure is designed to support future additions such as:

- Notifications
- Payment Integration
- Analytics
- AI Recommendations
- CDN Integration
- Video Processing
- Background Jobs
- WebSockets

without requiring major restructuring.