# MemoTag - AI-Powered Dementia Care Companion

MemoTag is a smart dementia care companion that uses AI to monitor and analyze behavioral and cognitive patterns in patients with dementia. This repository contains the landing page for MemoTag.

## Features

- Responsive design with dark mode support
- Smooth animations using Framer Motion
- Waitlist form with Supabase integration
- Modern UI with Tailwind CSS
- Built with Next.js 14 and TypeScript

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn
- Supabase account for waitlist functionality

### Installation

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/yourusername/memotag.git
   cd memotag
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install

# or

yarn install
\`\`\`

3. Create a \`.env.local\` file in the root directory and add your Supabase credentials:
   \`\`\`
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   \`\`\`

4. Run the development server:
   \`\`\`bash
   npm run dev

# or

yarn dev
\`\`\`

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

\`\`\`
memotag/
├── app/
│ ├── layout.tsx
│ ├── page.tsx
│ └── globals.css
├── components/
│ ├── ui/
│ │ ├── Button.tsx
│ │ └── ThemeToggle.tsx
│ ├── sections/
│ │ ├── Hero.tsx
│ │ ├── Problem.tsx
│ │ ├── Solution.tsx
│ │ ├── Traction.tsx
│ │ └── Waitlist.tsx
│ └── layout/
│ ├── Header.tsx
│ └── Footer.tsx
├── lib/
│ ├── supabase.ts
│ └── utils.ts
└── public/
└── images/
\`\`\`

## Technologies Used

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Supabase](https://supabase.io/)
- [React Icons](https://react-icons.github.io/react-icons/)

## Contributing

1. Fork the repository
2. Create your feature branch (\`git checkout -b feature/AmazingFeature\`)
3. Commit your changes (\`git commit -m 'Add some AmazingFeature'\`)
4. Push to the branch (\`git push origin feature/AmazingFeature\`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter)
Project Link: [https://github.com/yourusername/memotag](https://github.com/yourusername/memotag)
