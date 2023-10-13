FROM node:20-alpine3.17 as build
WORKDIR /app
COPY package.json /app/package.json
RUN npm install 
COPY . /app
RUN npm run build
FROM nginx:1.25.2
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

