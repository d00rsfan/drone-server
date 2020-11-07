FROM ubuntu:20.04

RUN apt-get update && apt-get install -y apt-transport-https wget gnupg2

# Install Node.js
RUN apt-get install --yes curl
RUN curl --silent --location https://deb.nodesource.com/setup_14.x | bash -
RUN apt-get install --yes nodejs
RUN apt-get install --yes build-essential

# Set an environment variable to store where the app is installed to inside
# of the Docker image.
ENV INSTALL_PATH /app
RUN mkdir -p $INSTALL_PATH

# This sets the context of where commands will be ran in and is documented
# on Docker's website extensively.
WORKDIR $INSTALL_PATH

# Copy in the application code from your work station at the current directory
# over to the working directory.
COPY . .
RUN mkdir tmp
RUN npm install -s

CMD npm run start
