FROM ubuntu:20.04

RUN  apt update -y && apt upgrade -y && \
  apt install -y sudo curl git jq wget vim make build-essential


ENV GO_VERSION 1.20
RUN wget -O go.tgz https://golang.org/dl/go${GO_VERSION}.linux-amd64.tar.gz && \
  tar -C /usr/local -xzf go.tgz && \
  rm go.tgz
ENV PATH $PATH:/usr/local/go/bin

RUN echo 'PATH=$PATH:/usr/local/go/bin' >> $HOME/.bashrc && \
  echo 'PATH=$PATH:~/go/bin' >> $HOME/.bashrc

# RUN curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash - && sudo apt-get install -y nodejs

RUN useradd -m docker && echo "docker:docker" | chpasswd && adduser docker sudo

WORKDIR $HOME

ENV CHAIN_REPO https://github.com/UnUniFi/chain
ENV CHAIN_REPO_BRANCHE=v3.2.0
ENV TARGET=ununifid
ENV TARGET_HOME=.ununifi
ENV CHAIN_ID=test

ENV DAEMON_NAME=$TARGET
ENV DAEMON_HOME=/root/$TARGET_HOME
ENV DAEMON_ALLOW_DOWNLOAD_BINARIES=true
ENV DAEMON_LOG_BUFFER_SIZE=512
ENV DAEMON_RESTART_AFTER_UPGRADE=true
ENV UNSAFE_SKIP_BACKUP=true



RUN git clone $CHAIN_REPO chain_repo && \
  cd chain_repo && \
  git checkout $CHAIN_REPO_BRANCHE && \
  make install

RUN go install github.com/cosmos/cosmos-sdk/cosmovisor/cmd/cosmovisor@v1.0.0
RUN mkdir -p $DAEMON_HOME/cosmovisor && \
  mkdir -p $DAEMON_HOME/cosmovisor/genesis && \
  mkdir -p $DAEMON_HOME/cosmovisor/genesis/bin && \
  mkdir -p $DAEMON_HOME/cosmovisor/upgrades && \
  cp ~/go/bin/$DAEMON_NAME $DAEMON_HOME/cosmovisor/genesis/bin

CMD ["bash"]
