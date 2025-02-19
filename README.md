# Next.js 15 Starter with Supabase, React Query

A modern Next.js 15 starter template with Supabase authentication, React Query for data fetching, and built-in wrappers for queries and authentication. This starter is designed to accelerate development by providing preconfigured hooks, utilities, and best practices.

## 🚀 Features

- **Next.js 15** – The latest Next.js version for optimized performance.
- **Supabase Authentication** – Built-in auth system with user session handling.
- **React Query** – Efficient data fetching and caching.
- **ShadCN Components** – Prebuilt UI components for faster development.
- **Tailwind CSS** – Utility-first styling for rapid UI building.
- **Zod Validation** – Schema-based form validation for better data handling.
- **Prebuilt Hooks** – Hooks for fetching data and mutations in client components.
- **Query & Auth Wrappers** – Easily manage authentication state and query handling.

## 📦 Installation

Create a new project using the CLI (if available):

```sh
npx create-next-supabase-starter@latest my-project
```

Or manually clone the repository:

```sh
git clone https://github.com/your-username/your-repo.git my-project
cd my-project
pnpm install
```

## 🛠 Setup

### 1. Environment Variables

Create a `.env.local` file and add:

```sh
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 2. Run Development Server

```sh
pnpm dev
```

Your app should be running at [http://localhost:3000](http://localhost:3000).

## 📌 Usage

### 🏗 Authentication

The `AuthContext` ensures user authentication is managed across the app.

```tsx
"use client";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { data: user, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const { data } = await supabase.auth.getUser();
      return data?.user ?? null; // ✅ Ensures it's never undefined
    },
    staleTime: 0,
  });

  return (
    <AuthContext.Provider value={{ user: user ?? null, loading: isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
```

### 🔄 Fetching Data

Use the `useClientFetch` hook for fetching data efficiently on client components:

```tsx
import { useClientFetch } from "@/hooks/useClientFetch";

const Posts = () => {
  const { data, isLoading } = useClientFetch("posts", "posts");

  if (isLoading) return <p>Loading...</p>;

  return (
    <ul>
      {data?.map((post) => (
        <li key={post.id}>{post.name}</li>
      ))}
    </ul>
  );
};
```

#### Advanced Filtering Example

```tsx
const FilteredUsers = () => {
  const { data, isLoading } = useClientFetch(
    "filtered-users", // key
    "users", // table name
    5000, // cache time
    (query) => query.eq("role", "admin") // Supabase query filter
  );

  if (isLoading) return <p>Loading...</p>;

  return (
    <ul>
      {data?.map((user) => (
        <li key={user.id}>
          {user.name} ({user.role})
        </li>
      ))}
    </ul>
  );
};
```

### 📮 Mutations

Use the `useClientMutate` hook for inserting, updating, and deleting data on client components:

```tsx
import { useClientMutate } from "@/hooks/useClientMutate";

const AddPost = () => {
  const mutation = useClientMutate("posts", "insert");

  const handleSubmit = async () => {
    mutation.mutate({ id: Date.now(), name: "New Post" });
  };

  return <button onClick={handleSubmit}>Add Post</button>;
};
```

#### Updating Data Example

```tsx
const UpdatePost = () => {
  const mutation = useClientMutate("posts", "update");

  const handleUpdate = () => {
    mutation.mutate({ id: 1, name: "Updated Post" });
  };

  return <button onClick={handleUpdate}>Update User</button>;
};
```

#### Deleting Data Example

```tsx
const DeleteUser = () => {
  const mutation = useClientMutate("users", "delete");

  const handleDelete = () => {
    mutation.mutate({ id: 1 });
  };

  return <button onClick={handleDelete}>Delete User</button>;
};
```

## 🏗 Folder Structure

```
📦 my-project
├── 📂 app                 # Next.js app directory
│   ├── 📂 (auth)           # Authentication pages
│   │   ├── 📂 auth         # Authentication utilities
│   │   │   ├── 📂 confirm  # Confirmation route
│   │   │   │   └── route.ts
│   │   ├── 📂 error        # Error handling
│   │   ├── 📂 login        # Login page
│   │   ├── 📂 register     # Register page
│   │   ├── actions.ts      # Auth actions
│   │   └── layout.tsx      # Auth layout
│   ├── 📂 (dashboard)      # Dashboard pages
│   ├── favicon.ico         # Favicon
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Main layout
│   ├── not-found.tsx       # 404 Page
│   └── page.tsx            # Home page
├── 📂 components          # Shared UI components
├── 📂 hooks               # Custom React Query hooks
├    └── use-client-fetch.ts
├    └── use-client-mutation.ts
├── 📂 lib                 # Utilities & helpers
├── 📂 public              # Static assets
├── 📂 supabase            # Supabase integrations clients
│   ├── client.ts          # Supabase client
│   ├── middleware.ts      # Middleware configuration
│   └── server.ts          # Server-side Supabase utilities
├── 📂 node_modules        # Dependencies
├── .env                   # Environment configuration
├── .env.example           # Example environment variables
├── .gitignore             # Git ignore file
├── components.json        # UI component configurations
├── eslint.config.mjs      # ESLint configuration
├── middleware.ts          # Global middleware
├── next-env.d.ts          # Next.js environment types
├── next.config.ts         # Next.js configuration
├── package.json           # Project dependencies
├── pnpm-lock.yaml         # Lock file
├── postcss.config.mjs     # PostCSS configuration
├── README.md              # Project documentation
├── tailwind.config.ts     # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration
```

## 🛠 Technologies I Used

- **Next.js 15**
- **Supabase**
- **React Query**
- **ShadCN Components**
- **Tailwind CSS**
- **Zod Validation**
- **TypeScript**
