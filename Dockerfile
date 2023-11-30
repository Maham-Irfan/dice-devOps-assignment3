FROM node
RUN mkdir -p /app
WORKDIR /app
COPY . .
RUN npm install
RUN npm t
RUN npm run build
EXPOSE 3000  
ENTRYPOINT ["./migrate-and-start.sh"]