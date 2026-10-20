export type ProjectStatus = "Completed" | "In Progress";

export type Project = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  tech: string[];
  githubUrl: string;
  liveUrl?: string;
  status: ProjectStatus;
};

export const projects: Project[] = [
  {
    id: "job-application-tracker",
    title: "Job Application Tracker",
    tagline: "Track applications, hiring stages, and follow-ups in one workflow.",
    description:
      "A full-stack application that combines an ASP.NET Core Web API with a React frontend to manage job applications from first contact through final decision. The backend uses a layered architecture and includes authentication and request protection for real-world job tracking workflows.",
    highlights: [
      "Uses ASP.NET Core with JWT authentication and API security safeguards.",
      "Implements a layered architecture across Domain, Application, Infrastructure, and WebAPI projects.",
      "Uses FluentMigrator and MySQL-based persistence for structured schema management.",
      "Supports a modern React dashboard with Vite, React Router, and TanStack Query.",
    ],
    tech: [
      "C#",
      ".NET 10",
      "ASP.NET Core Web API",
      "MediatR",
      "JWT",
      "FluentMigrator",
      "MySQL",
      "React",
      "Vite",
      "Tailwind CSS",
      "TanStack Query",
    ],
    githubUrl: "https://github.com/nawaraaaj/JobApplicationTracker",
    liveUrl: "https://job-application-tracker-ci-cd.vercel.app/",
    status: "In Progress",
  },
  {
    id: "digitalwellbeing",
    title: "DigitalWellbeing",
    tagline: "Monitor digital usage and protect focus with a Windows desktop app.",
    description:
      "A .NET WPF desktop application built to monitor computer usage and reduce distractions by tracking sessions and pausing when the system sleeps or a session locks. It focuses on practical behavior-aware tracking rather than static reporting.",
    highlights: [
      "Built on WPF and Windows desktop APIs for system-aware monitoring.",
      "Uses SQLite for local data persistence and lightweight tracking storage.",
      "Automatically pauses tracking when the system sleeps or the session locks.",
      "Separates core logic from the UI through a layered solution structure.",
    ],
    tech: [
      "C#",
      ".NET 8",
      "WPF",
      "Windows Desktop",
      "SQLite",
      "System.Drawing.Common",
      "Microsoft.Win32.SystemEvents",
    ],
    githubUrl: "https://github.com/nawaraaaj/DigitalWellbeing",
    status: "Completed",
  },
  {
    id: "clean-architecture-api",
    title: "Clean Architecture API",
    tagline: "A layered ASP.NET Core API demonstrating clean backend structure.",
    description:
      "This project separates the API, application logic, domain model, and infrastructure so the backend stays maintainable as it grows. It is a solid example of structured .NET API design and service layering for future business logic expansion.",
    highlights: [
      "Uses a clean multi-layer structure with Core, Application, Infrastructure, and Web API projects.",
      "Built on ASP.NET Core with MySQL persistence and Swagger support.",
      "Keeps domain logic separated from infrastructure and API concerns.",
      "Demonstrates a practical design pattern for maintainable .NET backend architecture.",
    ],
    tech: [
      "C#",
      ".NET 8",
      "ASP.NET Core",
      "Entity Framework Core",
      "Pomelo.EntityFrameworkCore.MySql",
      "Swashbuckle",
      "Clean Architecture",
    ],
    githubUrl: "https://github.com/nawaraaaj/Rest-API-Clean-Architecture-DotNET",
    status: "Completed",
  },
  {
    id: "employee-management-system",
    title: "Employee Management System",
    tagline: "Manage employees, departments, salary workflows, and document exports.",
    description:
      "This ASP.NET MVC 5 application handles tasks such as employee management, salary operations, authentication, and reporting. It is a classic enterprise-style MVC system with business workflows, search, filtering, and export features.",
    highlights: [
      "Built on ASP.NET MVC 5 with .NET Framework 4.8.1 and classic MVC routing.",
      "Uses Entity Framework 6 and Dapper for data access and business operations.",
      "Implements document generation with ClosedXML, OpenXML, and iTextSharp.",
      "Includes payroll and reporting workflows with search, pagination, and exports.",
    ],
    tech: [
      "C#",
      "ASP.NET MVC 5",
      ".NET Framework 4.8.1",
      "Entity Framework 6",
      "Dapper",
      "SQL Server",
      "Bootstrap",
      "jQuery",
      "ClosedXML",
      "iTextSharp",
      "Newtonsoft.Json",
    ],
    githubUrl: "https://github.com/nawaraaaj/Employee-Management-System",
    status: "Completed",
  },
];
