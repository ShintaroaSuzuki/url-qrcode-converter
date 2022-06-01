FROM node:16
WORKDIR /app
COPY package.json ./
COPY tsconfig.json ./
COPY tsconfig.build.json ./
COPY src ./
RUN yarn install
RUN yarn build
CMD ["yarn", "start:prod"]
