# Random Generator Tools VPS Deployment Guide

## 🚀 Hızlı Deploy

### 1. Proje Build
```bash
npm run build
```

### 2. Dosyaları VPS'e Kopyala
```bash
scp -r ./ user@your-vps-ip:/tmp/random-generator-tools/
```

### 3. VPS'te Deploy
```bash
ssh user@your-vps-ip
chmod +x /tmp/random-generator-tools/deploy-vps.sh
cd /tmp/random-generator-tools
./deploy-vps.sh
```

## 🔧 VPS Kurulumu

### Gereksinimler
- Node.js 18+ 
- PM2
- Nginx
- SSL (Let's Encrypt)

### Kurulum Komutları
```bash
# Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# PM2
sudo npm install -g pm2

# Nginx
sudo apt update
sudo apt install nginx

# SSL için Certbot
sudo apt install certbot python3-certbot-nginx
```

### Nginx Konfigürasyonu
```bash
# Site konfigürasyon dosyası oluştur
sudo cp nginx-config.conf /etc/nginx/sites-available/random-generator-tools

# Site'ı aktif et
sudo ln -s /etc/nginx/sites-available/random-generator-tools /etc/nginx/sites-enabled/

# Test et
sudo nginx -t

# Yeniden başlat
sudo systemctl restart nginx
```

### SSL Sertifikası
```bash
# SSL al
sudo certbot --nginx -d rastgeleolusturucu.com.tr -d www.rastgeleolusturucu.com.tr

# Otomatik yenileme
sudo crontab -e
# Ekle: 0 12 * * * /usr/bin/certbot renew --quiet
```

## 📁 Proje Yapısı

```
/var/www/random-generator-tools/
├── .next/          # Build dosyaları
├── public/         # Static assets
├── src/           # Source code
├── package.json   # Dependencies
├── ecosystem.config.js  # PM2 config
└── node_modules/  # Dependencies
```

## 🔍 Port Yönetimi

- Mevcut proje: Port 3000
- Random Generator Tools: Port 3001
- Nginx: 80/443 (reverse proxy)

## 🛠️ PM2 Yönetimi

```bash
# Durum kontrolü
pm2 status

# Log'ları gör
pm2 logs random-generator-tools

# Yeniden başlat
pm2 restart random-generator-tools

# Stop
pm2 stop random-generator-tools

# Monitor
pm2 monit
```

## 🔒 Güvenlik

### Firewall Ayarları
```bash
sudo ufw allow 22    # SSH
sudo ufw allow 80    # HTTP
sudo ufw allow 443   # HTTPS
sudo ufw enable
```

### Database (PostgreSQL)
```bash
# PostgreSQL kurulumu
sudo apt install postgresql postgresql-contrib

# Kullanıcı oluştur
sudo -u postgres createuser --interactive
sudo -u postgres createdb random_generator_tools
```

## 📊 Monitor

### Log Konumu
- PM2 log: `~/.pm2/logs/`
- Nginx log: `/var/log/nginx/`
- Uygulama log: `/var/www/random-generator-tools/logs/`

### Health Check
```bash
# Servis durumu
sudo systemctl status nginx
pm2 status

# Port kontrolü
sudo netstat -tlnp | grep :3001
```

## 🔄 Güncelleme

```bash
# Yeni versiyon deploy
scp -r ./ user@your-vps-ip:/tmp/random-generator-tools-new/
ssh user@your-vps-ip
cd /tmp/random-generator-tools-new
chmod +x deploy-vps.sh
./deploy-vps.sh
```
