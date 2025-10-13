# @longevity/services

Express.js server package for the Longevity e-commerce application.

## Features

- Express.js server with TypeScript support
- Security middleware (Helmet)
- CORS enabled
- Request logging (Morgan)
- Structured routing
- Health check endpoint
- Error handling middleware

## Scripts

- `npm run build` - Build the package
- `npm run dev` - Build and watch for changes
- `npm start` - Start the production server

## API Endpoints

- `GET /` - Root endpoint with API information
- `GET /api` - API documentation and available endpoints
- `GET /api/health` - Health check with system information

## Development

The server runs on port 3001 by default. You can change this by setting the `PORT` environment variable.

```bash
# Install dependencies
pnpm install

# Build the package
pnpm run build

# Start in development mode
pnpm run dev

# Start the server
pnpm start
```

## Environment Variables

- `PORT` - Server port (default: 3001)
- `NODE_ENV` - Environment mode (development/production)
