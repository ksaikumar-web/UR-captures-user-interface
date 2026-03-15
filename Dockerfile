#stage 1: Build
FROM node:18 as build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

#stage 2: Serve
FROM nginx:alpine
COPY --from=build /app/dist /user/share/nginx/html
EXPOSE 80