export interface PostInfo {
  title: string;
  date: string;
  time: string;
  description: string;
  href?: string;
}

export const PostInfo: PostInfo[] = [
  {
    title: "Typescript + Vue linter config step by step",
    date: "17 August 2023",
    time: "10 min read",
    description: "How to configure Eslint with Typescript and Vue application",
    href: "https://dev.to/oscarprdev/typescript-vue-linter-config-step-by-step-ni8",
  },
  {
    title: "Frontend state management with clean architecture",
    date: "03 August 2023",
    time: "20 min read",
    description:
      "Manage a global frontend state using clean architecture and without any external libraries step-by-step",
    href: "https://dev.to/oscarprdev/frontend-state-management-with-clean-architecture-22d8",
  },
  {
    title: "Intersection Observer API & Lazy loading in REACT",
    date: "05 August 2023",
    time: "10 min read",
    description:
      "How to create an intersection observer wrapper component in react to manage the components lazy loading",
    href: "https://dev.to/oscarprdev/intersection-observer-api-lazy-loading-in-react-44",
  },
];
