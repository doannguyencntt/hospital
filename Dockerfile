# Sử dụng Node.js image
FROM node:10

# Set thư mục làm việc trong container
WORKDIR /app

# Copy toàn bộ source code vào container
COPY . .

# Cài đặt dependencies
RUN npm install

# Chạy ứng dụng (port 4202)
CMD ["npm", "run", "start"]

# Expose port để Railway kết nối
EXPOSE 4202
