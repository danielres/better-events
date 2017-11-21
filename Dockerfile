FROM node:9.2

WORKDIR /src
COPY . .

# If you have native dependencies, you'll need extra tools
# RUN apk add --no-cache make gcc g++ python
RUN yarn install
# RUN yarn run _build

EXPOSE 3001

# CMD npm run _production

