FROM node

WORKDIR /usr/app/company_app

COPY package.json .

RUN npm install -g npm@7.7.4

RUN npm install

COPY . .

EXPOSE 4000

CMD [ "npm", "run", "dev:server" ]
