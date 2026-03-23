FROM nginx:alpine

# Remove default nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy all static files to nginx html directory
COPY index.html /usr/share/nginx/html/
COPY assets /usr/share/nginx/html/assets
COPY script /usr/share/nginx/html/script
COPY style /usr/share/nginx/html/style

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
