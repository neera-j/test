FROM quay.io/xelectra/xasena:latest
RUN git clone https://github.com/X-Electra/X-Asena /root/X-Asena
WORKDIR /root/X-Asena
RUN yarn install --network-concurrency 1
CMD ["node", "bot.js"] 