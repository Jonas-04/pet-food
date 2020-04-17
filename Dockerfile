FROM node:10-alpine

LABEL maintainer "yu704198352@gmail.com"

COPY . /app

WORKDIR /app

RUN yarn \
  && yarn build
  
CMD ["node","bar.js"]

EXPOSE 3000