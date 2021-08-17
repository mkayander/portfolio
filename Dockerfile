FROM node:lts

# Install Yarn globally
#RUN npm install -g yarn

# Create app directory
WORKDIR /usr/src/portfolio-app

# Copy package.json & yarn.lock for installation
COPY package.json yarn.lock ./

# Install app dependencies with the continuous integration system strategy
RUN yarn install --frozen-lockfile --network-timeout 600000

# Bundle app source
COPY . .

# Build app
RUN yarn build:prod

# Bind port
EXPOSE 80

CMD [ "yarn", "start:prod" ]
