FROM node:14.15.4-slim As build
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod

FROM nginx:stable-perl
COPY --from=build /usr/src/app/dist/frontend/ /usr/share/nginx/html