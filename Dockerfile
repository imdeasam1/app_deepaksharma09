FROM node
WORKDIR /usr/appli
COPY ./ /usr/appli
RUN npm install
EXPOSE 8080/tcp
CMD ["npm","start"]
