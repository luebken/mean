FROM dockerfile/nodejs

MAINTAINER Matthias Luebken, matthias@catalyst-zero.com

WORKDIR /home/meanarticles

# Install Mean.JS Prerequisites
RUN npm install -g grunt-cli
RUN npm install -g bower

# Install Mean.JS packages
ADD package.json /home/meanarticles/package.json
RUN npm install

# Make everything available for start
ADD . /home/meanarticles

# currently only works for development
ENV NODE_ENV development

# Port 3000 for server
EXPOSE 3000
CMD ["grunt"]