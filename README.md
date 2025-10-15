# Home Listing Application

A modern home listing application built with React, TypeScript, TailwindCSS, and json-server. This application allows users to browse, view, add, edit, and delete home listings.

## Features

### Core Features

- ✅ **Home Listing**: Browse all available homes in a responsive card grid
- ✅ **Home Details**: View detailed information about each home including amenities
- ✅ **Add New Home**: Create new home listings with all required information
- ✅ **Edit Home**: Update existing home listings
- ✅ **Delete Home**: Remove home listings with confirmation
- ✅ **Search & Filter**: Search homes by title, location, or description
- ✅ **Responsive Design**: Mobile-first design with TailwindCSS
- ✅ **TypeScript**: Full type safety throughout the application

### Bonus Features

- ⭐ **Search Functionality**: Real-time search across home titles, locations, and descriptions
- ⭐ **Price Formatting**: International currency formatting using Intl API
- ⭐ **Loading States**: Skeleton loading and loading indicators
- ⭐ **Modern UI**: Clean, modern interface with hover effects and transitions

## Tech Stack

- **Frontend**: React 19 + TypeScript
- **Styling**: TailwindCSS
- **Routing**: React Router DOM
- **HTTP Client**: Axios
- **Backend**: json-server
- **Build Tool**: Vite
- **Package Manager**: npm

## Project Structure

```
src/
├── components/
│   ├── HomeCard.tsx      # Home listing card component
│   ├── HomeDetail.tsx    # Home detail view component
│   ├── HomeForm.tsx      # Add/Edit home form component
│   └── HomeList.tsx      # Home listing page component
├── services/
│   └── api.ts            # API service with Axios
├── types/
│   └── Home.ts           # TypeScript type definitions
├── App.tsx               # Main app component with routing
└── main.tsx              # Application entry point
```

## API Endpoints

The application uses json-server to provide the following REST API endpoints:

- `GET /homes` - Get all homes
- `GET /homes/:id` - Get home by ID
- `POST /homes` - Create new home
- `PUT /homes/:id` - Update home
- `DELETE /homes/:id` - Delete home

## Data Model

```typescript
interface Home {
  id: number;
  title: string;
  description: string;
  pricePerNight: number;
  location: string;
  imageUrl: string;
  guests: number;
  bedrooms: number;
  bathrooms: number;
  amenities: string[];
}
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd crud-router
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

This command will start both the json-server (on port 3001) and the Vite development server (on port 5173) concurrently.

### Available Scripts

- `npm run dev` - Start both json-server and Vite dev server
- `npm run client` - Start only the Vite dev server
- `npm run server` - Start only the json-server
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build

## Usage

### Navigation

- **Home Page** (`/`): Browse all available homes
- **Home Detail** (`/homes/:id`): View detailed information about a specific home
- **Add Home** (`/homes/new`): Create a new home listing
- **Edit Home** (`/homes/:id/edit`): Edit an existing home listing

### Features

1. **Browse Homes**: The main page displays all homes in a responsive grid
2. **Search**: Use the search bar to filter homes by title, location, or description
3. **View Details**: Click on any home card to view detailed information
4. **Add Home**: Click the "Add Home" button to create a new listing
5. **Edit Home**: Click the edit icon on the home detail page
6. **Delete Home**: Click the delete icon on the home detail page (with confirmation)

## Sample Data

The application comes with 3 sample homes in `db.json`:

1. **Cozy Downtown Loft** - Istanbul, Türkiye ($120/night)
2. **Beachfront Villa** - Antalya, Türkiye ($350/night)
3. **Mountain Cabin Retreat** - Bolu, Türkiye ($90/night)

## Development

### Adding New Features

1. Create new components in the `src/components/` directory
2. Add new API endpoints in `src/services/api.ts`
3. Update TypeScript types in `src/types/Home.ts`
4. Add new routes in `src/App.tsx`

### Styling

The application uses TailwindCSS for styling. All components are styled with utility classes for consistency and maintainability.

## Production Deployment

1. Build the application:

```bash
npm run build
```

2. The built files will be in the `dist/` directory
3. Deploy the `dist/` directory to your hosting provider

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test your changes
5. Submit a pull request

## License

This project is licensed under the MIT License.
