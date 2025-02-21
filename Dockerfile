FROM node:23-bullseye-slim

# ENV NODE_ENV=production

RUN addgroup --gid 1017 --system appgroup \
  && adduser --uid 1017 --system appuser --gid 1017

WORKDIR /app

COPY package.json .

RUN npm install

RUN npm i -g serve

COPY . .

RUN npm run build

RUN chown -R appuser:appgroup /app

USER 1017

EXPOSE 3000

CMD [ "serve", "-s", "dist" ]