# VDS Server Deploy Guide

## 1. Sunucuya Bağlanma
```bash
ssh root@sunucu-ip-adresiniz
```

## 2. Proje Dizinine Git
```bash
cd /var/www/random-generator-tools
# veya projenizin bulunduğu dizin
```

## 3. En Son Değişiklikleri Çek
```bash
git pull origin main
# veya
git pull origin master
```

## 4. Bağımlılıkları Güncelle
```bash
npm install --production
```

## 5. Projeyi Yeniden Build Et
```bash
npm run build
```

## 6. Uygulamayı Yeniden Başlat
### PM2 Kullanıyorsanız:
```bash
pm2 restart random-generator-tools
# veya
pm2 reload random-generator-tools
```

### Systemd Kullanıyorsanız:
```bash
systemctl restart random-generator-tools
```

### Docker Kullanıyorsanız:
```bash
docker-compose down
docker-compose up -d --build
```

## 7. Nginx Konfigürasyonu (HTTP/2 için)
```nginx
server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    
    server_name alan-adiniz.com www.alan-adiniz.com;
    
    ssl_certificate /path/to/ssl/cert.pem;
    ssl_certificate_key /path/to/ssl/private.key;
    
    root /var/www/random-generator-tools/.next;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
    
    # HTTP/2 optimizasyonu
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
        add_header Alt-Svc "h3=\":443\"; ma=86400, h2=\":443\"; ma=86400";
    }
}

# HTTP'den HTTPS'e yönlendirme
server {
    listen 80;
    listen [::]:80;
    server_name alan-adiniz.com www.alan-adiniz.com;
    return 301 https://$server_name$request_uri;
}
```

## 8. Nginx'i Yeniden Başlat
```bash
nginx -t  # Konfigürasyonu test et
systemctl reload nginx
```

## 9. SSL Sertifikası (HTTP/2 için gerekli)
### Let's Encrypt ile SSL:
```bash
certbot --nginx -d alan-adiniz.com -d www.alan-adiniz.com
```

## 10. Otomatik Deploy Script'i
`deploy.sh` oluşturun:
```bash
#!/bin/bash
echo "Deploy başlatılıyor..."

# Proje dizinine git
cd /var/www/random-generator-tools

# En son değişiklikleri çek
git pull origin main

# Bağımlılıkları güncelle
npm install --production

# Build et
npm run build

# Uygulamayı yeniden başlat
pm2 restart random-generator-tools

# Nginx'i yeniden yükle
systemctl reload nginx

echo "Deploy tamamlandı!"
```

Script'i çalıştırılabilir yapın:
```bash
chmod +x deploy.sh
```

## 11. Cron ile Otomatik Deploy (İsteğe Bağlı)
```bash
crontab -e
```

Her 5 dakikada bir kontrol için:
```bash
*/5 * * * * cd /var/www/random-generator-tools && git pull origin main && npm run build && pm2 restart random-generator-tools
```

## 12. Kontrol ve Test
```bash
# Uygulamanın çalıştığını kontrol et
pm2 status
curl http://localhost:3000

# HTTP/2 test
curl -I --http2 https://alan-adiniz.com
```

## Hızlı Deploy Komutu
Tek komutla her şeyi yapmak için:
```bash
cd /var/www/random-generator-tools && git pull && npm install --production && npm run build && pm2 restart random-generator-tools && systemctl reload nginx
```

## Notlar
- HTTP/2 için SSL sertifikası zorunludur
- Nginx konfigürasyonunda `http2` parametresi ekli olmalı
- Next.js production modunda çalışmalı
- Cache header'ları doğru yapılandırılmalı
