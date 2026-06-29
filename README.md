# DevConnect — Job Posting Platform (React)

DevConnect is a React-based job board / recruitment platform where recruiters can post jobs, manage applications, save drafts, and track applicants — all from a clean, responsive dashboard. Job seekers can browse listings, save jobs, and submit quick applications.

![image alt](https://github.com/ALI-RAZA816/Job-Post-React/blob/b1b155c4afa789ff6c26d02b32e6ed759b326bdd/devconnect1.PNG)

## Features

- **Recruiter Dashboard** — At-a-glance stats for active jobs, saved jobs, drafts, and applications, with quick links to manage each.
- **Post a Job** — Create job listings with title, company, location, job type, description, required skills (tag input), salary range, and benefits, with full form validation.
- **Edit & Delete Jobs** — Update existing listings or remove them, with saved jobs cleaned up automatically.
- **Drafts** — Save an in-progress job post as a draft and publish it later.
- **Job Listings** — Browse all posted jobs with a live search bar in the navbar.
- **Save Jobs** — Bookmark jobs of interest and view them later in a dedicated Saved Jobs page.
- **Quick Apply** — Applicants can submit an application (name, email, address, GitHub, LinkedIn, portfolio, expected salary range, cover letter) directly from a job listing.
- **View Applications** — Recruiters can review all applications submitted for their jobs.
- **Responsive Sidebar Navigation** — Collapsible navigation for smaller screens.
- **Persistent Storage** — Posts, drafts, saved jobs, and applications are all persisted in the browser's `localStorage`, so data survives page refreshes.
- **Success / Confirmation Modals** — Contextual feedback for posting, updating, deleting, saving drafts, and applying.

## Tech Stack

- **[React 19](https://react.dev/)** — UI library
- **[Vite](https://vitejs.dev/)** — Build tool and dev server
- **[React Router v7](https://reactrouter.com/)** — Client-side routing
- **[Bootstrap 5](https://getbootstrap.com/)** — Base layout and utility classes
- **[React Icons](https://react-icons.github.io/react-icons/)** — Icon library
- **CSS Modules** — Scoped component styling
- **React Context API** — Global state management (no external state library)
- **Browser `localStorage`** — Client-side data persistence

## Project Structure

```
Job-Post-React/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/              # Images used across the app
│   ├── component/           # Reusable components (Navbar, Footer, ModalBox, NoPost)
│   ├── context/
│   │   └── AppContext.jsx   # Global state, handlers, and localStorage sync
│   ├── pages/                # Route-level pages (Dashboard, Jobs, PostJob, etc.)
│   ├── styles/                # CSS Modules, one per component/page
│   ├── App.jsx               # Route definitions
│   ├── main.jsx               # App entry point
│   └── index.css              # Global styles
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Pages & Routes

| Route            | Page               | Description                                  |
|-------------------|--------------------|-----------------------------------------------|
| `/`                | HomePage           | Landing page                                   |
| `/jobs`            | Jobs               | Browse all job listings                        |
| `/postjob`         | PostJob            | Create a new job post                          |
| `/dashboard`       | Dashboard          | Recruiter overview and stats                   |
| `/applyjob`        | ApplyJobForm       | Quick-apply form for a selected job            |
| `/savejob`         | SavedJob           | View saved/bookmarked jobs                     |
| `/view`            | ViewApplication    | View submitted applications                    |
| `/edit`            | EditPost           | Edit an existing job post                      |
| `/drafts`          | Draftsjob          | View and publish draft job posts               |
| `/applications`    | Applications        | View all applications received                |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm (comes with Node.js)

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/<your-username>/<your-repo-name>.git
   cd <your-repo-name>
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

4. Open the app in your browser at the URL shown in the terminal (typically `http://localhost:5173`).

### Available Scripts

| Command           | Description                              |
|--------------------|-------------------------------------------|
| `npm run dev`      | Start the Vite development server         |
| `npm run build`    | Build the app for production              |
| `npm run preview`  | Preview the production build locally      |
| `npm run lint`     | Run ESLint on the project                 |

## Data Persistence

This project currently uses the browser's `localStorage` to persist:
- Job posts
- Drafts
- Saved jobs
- Submitted applications

No backend/database is required to run the app locally — all data lives in the browser and will differ per device/browser.

## Future Improvements

- Connect to a real backend/API and database for persistent, multi-user data
- Add user authentication (recruiter vs. applicant roles)
- Add filtering/sorting on the Jobs page (by location, job type, salary, etc.)
- Add pagination for large job listings
- Add dark mode toggle (icon already present in the Navbar)

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

**Ali Raza**