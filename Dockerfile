FROM node:9.2

# WORKDIR /src

# If you have native dependencies, you'll need extra tools
# RUN apk add --no-cache make gcc g++ python

RUN useradd --user-group --create-home --shell /bin/false app
ENV HOME=/home/app

COPY . $HOME/src
RUN chown -R app:app $HOME/*

USER app
WORKDIR $HOME/src
RUN yarn install
# RUN yarn run _build

EXPOSE 3001

# CMD npm run _production

