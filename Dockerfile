# syntax=docker/dockerfile:1

# Adjust NODE_VERSION as desired
ARG NODE_VERSION=20.12.0
FROM node:${NODE_VERSION}-slim AS base

LABEL launch-runtime="Next.js"

# Next.js app lives here
WORKDIR /app

# Set production environment
ENV NODE_ENV="production"

# Throw-away build stage to reduce size of final image
FROM base AS build

# Install packages needed to build node modules
RUN apt-get update -qq && \
  apt-get install -y build-essential pkg-config python-is-python3

# Install node modules
COPY --link package.json package-lock.json ./
RUN npm ci --include=dev

# Copy application code
COPY --link . .

# Build application and Remove development dependencies
RUN npm run build

# Final stage for app image 
FROM base

# Copy built application
COPY --from=build /app /app

EXPOSE 3000

# Start the server by default, this can be overwritten at runtime
CMD [ "npm", "run", "start" ]


