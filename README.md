# Spotify Clone

Welcome to the Spotify Clone project! This project showcases a full-featured music streaming application built using modern web technologies.

## Overview

This Spotify Clone is built using Next.js and Supabase, leveraging TypeScript for type safety and Tailwind CSS for styling. The project demonstrates the integration of a database, user authentication, and various other services such as Stripe for payment processing.

## Features

- **User Authentication:** Secure authentication system using Supabase.
- **Database Integration:** Efficient data handling with Supabase.
- **Payment Processing:** Integration with Stripe for subscription management.
- **Responsive Design:** Beautiful and responsive UI built with Tailwind CSS.
- **State Management:** Using Zustand for managing global state.
- **Forms Handling:** Simplified form handling with React Hook Form.
- **Toasts Notifications:** User-friendly notifications with React Hot Toast.

## Tech Stack

- **Framework:** Next.js
- **Backend:** Supabase
- **Language:** TypeScript
- **Styling:** Tailwind CSS

## Dependencies

Here's a list of the main dependencies used in this project:
```markdown
```json
"dependencies": {
  "@radix-ui/react-dialog": "^1.1.1",
  "@supabase/auth-helpers-nextjs": "^0.10.0",
  "@supabase/auth-helpers-react": "^0.5.0",
  "@supabase/auth-ui-react": "^0.4.7",
  "@supabase/auth-ui-shared": "^0.1.8",
  "next": "14.2.4",
  "query-string": "^9.0.0",
  "react": "^18",
  "react-dom": "^18",
  "react-hook-form": "^7.52.1",
  "react-hot-toast": "^2.4.1",
  "react-icons": "^5.2.1",
  "stripe": "^16.1.0",
  "tailwind-merge": "^2.3.0",
  "uniqid": "^5.4.0",
  "zustand": "^4.5.4"
}
```

## Getting Started

Follow these steps to get the project up and running on your local machine.

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/pujanjoci/spotify-clone.git
   cd spotify-clone
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   - Create a `.env.local` file in the root directory.
   - Add your Supabase and Stripe credentials.

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open your browser and navigate to `http://localhost:3000`.

## Usage

- **Authentication:** Register and log in to access your music library.
- **Music Streaming:** Browse and play songs from the available collection.
- **Subscription:** Manage your subscription via Stripe integration.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Supabase](https://supabase.io/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Stripe](https://stripe.com/)
- [React Hook Form](https://react-hook-form.com/)
- [React Hot Toast](https://react-hot-toast.com/)
- Special thanks to [Coding with Antonio](https://www.youtube.com/watch?v=2aeMRB8LL4o) for providing a detailed breakdown for creating a Spotify clone.

## Contact

For any questions or feedback, feel free to reach out to me at [pujanjoci01@gmail.com].

---

Happy coding!
