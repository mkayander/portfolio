FROM node:lts

# Install Yarn globally
#RUN npm install -g yarn

# Create app directory
WORKDIR /usr/src/portfolio-app

# Copy package.json & yarn.lock for installation
COPY package.json yarn.lock ./

# Install app dependencies with the continuous integration system strategy
RUN yarn install --frozen-lockfile

# Bundle app source
COPY . .

# Build app
RUN yarn next:build

# Bind port
EXPOSE 3000

CMD [ "yarn", "next:start" ]
