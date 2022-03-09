FROM golang:1.16-alpine AS build-env

# Set up dependencies
ENV PACKAGES curl make git libc-dev bash gcc linux-headers eudev-dev python3 wget ca-certificates lz4 jq


# # Set working directory for the build
WORKDIR /go/src/github.com/band
# # Install minimum necessary dependencies, build Cosmos SDK, remove packages
RUN apk add --no-cache $PACKAGES

# install and setup glibc
RUN wget -q -O /etc/apk/keys/sgerrand.rsa.pub https://alpine-pkgs.sgerrand.com/sgerrand.rsa.pub
RUN wget https://github.com/sgerrand/alpine-pkg-glibc/releases/download/2.25-r0/glibc-2.25-r0.apk
RUN wget https://github.com/sgerrand/alpine-pkg-glibc/releases/download/2.25-r0/glibc-bin-2.25-r0.apk
RUN wget https://github.com/sgerrand/alpine-pkg-glibc/releases/download/2.25-r0/glibc-i18n-2.25-r0.apk
RUN apk add --no-cache glibc-2.25-r0.apk glibc-bin-2.25-r0.apk glibc-i18n-2.25-r0.apk
ENV LD_LIBRARY_PATH /usr/glibc-compat/lib
RUN /usr/glibc-compat/bin/localedef -i en_US -f UTF-8 en_US.UTF-8

# build band
RUN git clone --depth 1 --branch extra/rest https://github.com/bandprotocol/chain
WORKDIR /go/src/github.com/band/chain
RUN make install

WORKDIR /opt/band
COPY mnt.txt mnt.txt
COPY setup_and_run.sh setup_and_run.sh

CMD ["/bin/ash"]