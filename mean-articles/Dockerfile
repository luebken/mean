FROM dockerfile/nodejs

MAINTAINER Matthias Luebken, matthias@catalyst-zero.com

WORKDIR /home/meanarticles

# Install Mean.JS Prerequisites
RUN npm install -g grunt-cli
RUN npm install -g bower

# Install Mean.JS packages
ADD package.json /home/mean/package.json
RUN npm install

# Manually trigger bower. Why doesnt this work via npm install?
ADD .bowerrc /home/mean/.bowerrc
ADD bower.json /home/mean/bower.json
RUN bower install --config.interactive=false --allow-root

# Make everything available for start
ADD . /home/meanarticles

# currently only works for development
ENV NODE_ENV development

EXPOSE 3001
CMD ["grunt"]