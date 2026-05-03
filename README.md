# Solomax

A modern full-stack application built with Next.js, Express, PostgreSQL, and TypeScript.

## 🚀 Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **React 19** - Latest React features

### Backend
- **Express 5** - Node.js web server
- **PostgreSQL** - Relational database
- **Drizzle ORM** - Type-safe database toolkit
- **Zod** - Schema validation

### Development
- **pnpm** - Fast, disk space efficient package manager
- **Node.js 24** - Latest Node.js runtime
- **ESLint** - Code linting
- **Prettier** - Code formatting

## 📦 Project Structure

```
solomax/
├── src/
│   ├── app/                 # Next.js app directory
│   ├── components/          # React components
│   ├── lib/                 # Utilities and helpers
│   ├── hooks/              # Custom React hooks
│   └── types/              # TypeScript types
├── lib/                    # Shared libraries
│   ├── db/                 # Database layer
│   ├── api-client-react/   # API client hooks
│   └── api-zod/            # Zod schemas
├── scripts/                # Utility scripts
└── public/                 # Static assets
```

## 🏃 Getting Started

### Prerequisites
- Node.js 24+
- pnpm 9+

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Open [http://localhost:4028](http://localhost:4028) in your browser.

### Available Scripts

```bash
# Development
pnpm dev              # Start dev server
pnpm type-check      # Type check all code

# Production
pnpm build           # Build for production
pnpm start           # Start production server

# Code Quality
pnpm lint            # Lint code
pnpm lint:fix        # Fix linting issues
pnpm format          # Format code with Prettier
pnpm format:check    # Check formatting

# Database
pnpm --filter @workspace/db run push    # Push schema changes
pnpm --filter @workspace/db run studio  # Open Drizzle Studio
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file:

```env
# API
NEXT_PUBLIC_API_URL=http://localhost:3001

# Database
DATABASE_URL=postgresql://user:password@localhost/solomax
```

### Database Setup

1. Create a PostgreSQL database
2. Update `DATABASE_URL` in `.env.local`
3. Run migrations:

```bash
pnpm --filter @workspace/db run push
```

## 📚 API Integration

The frontend communicates with the Express backend via HTTP.

### Client-Side Example

```typescript
'use client';

import { useEffect, useState } from 'react';
import api from '@/lib/api';

export default function Example() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get('/api/example')
      .then((res) => setData(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading...</div>;
  return <div>{JSON.stringify(data)}</div>;
}
```

### Server-Side Route Example

```typescript
import { NextResponse } from 'next/server';

export async function GET() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/example`
  );
  const data = await response.json();
  return NextResponse.json(data);
}
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect repository to Vercel
3. Set environment variables
4. Deploy!

Vercel will automatically detect the Next.js project and optimize the build.

### Manual Deployment

```bash
# Build for production
pnpm build

# Start production server
pnpm start
```

## 📖 Migration Guide

See [MIGRATION_GUIDE.md](./MIGRATION_GUIDE.md) for detailed instructions on:
- Converting existing components
- Setting up API integration
- Configuring the database
- Deploying to production

## 🤝 Contributing

1. Create a feature branch: `git checkout -b feature/my-feature`
2. Commit changes: `git commit -m 'Add my feature'`
3. Push to branch: `git push origin feature/my-feature`
4. Open a Pull Request

## 📝 License

MIT

## 🆘 Support

For issues or questions:
1. Check the [Migration Guide](./MIGRATION_GUIDE.md)
2. Review [Next.js Documentation](https://nextjs.org/docs)
3. Check GitHub Issues

---

**Happy coding!** 🎉
