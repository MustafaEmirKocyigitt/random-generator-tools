#!/bin/bash

echo "=== Mevcut Nginx Siteleri ==="
ls -la /etc/nginx/sites-enabled/

echo -e "\n=== Server Name Config'leri ==="
sudo grep -r "server_name" /etc/nginx/sites-enabled/

echo -e "\n=== Port Dinleme Durumu ==="
sudo ss -tlnp | grep nginx

echo -e "\n=== Config Test ==="
sudo nginx -t
