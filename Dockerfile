FROM node:14
WORKDIR /app
RUN npm install live-server
COPY . .
EXPOSE 8080
CMD ["npx", "live-server", "--port=8080", "--host=0.0.0.0"]