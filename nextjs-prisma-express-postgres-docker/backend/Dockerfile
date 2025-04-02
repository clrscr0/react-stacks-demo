FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npx prisma generate

EXPOSE 3001

# Copy the script
COPY start.sh .

# Make the script executable
RUN chmod +x start.sh

# Set the script as the ENTRYPOINT
ENTRYPOINT ["./start.sh"]