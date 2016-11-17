FROM ubuntu:14.04
MAINTAINER Vaibhav Rajadhykasha

RUN apt-get -y update
RUN apt-get -y install socat
RUN echo Hello > legacyAppFile.txt
CMD socat TCP-LISTEN:9001 SYSTEM:'cat legacyAppFile.txt'
