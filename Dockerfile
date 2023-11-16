FROM node
RUN mkdir -p /app
WORKDIR /app
COPY . .
RUN npm install
RUN npx prisma generate
RUN npm run build
EXPOSE 3000  
ENTRYPOINT ["npm", "run", "dev"]