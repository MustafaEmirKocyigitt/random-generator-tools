#!/bin/bash

# VDS Sunucuda Çalıştırılacak Komutlar
echo "🚀 Random Generator Tools VDS Kurulumu Başlatılıyor..."

# 1. Sistem güncelleme
echo "📦 Sistem güncelleniyor..."
sudo apt update && sudo apt upgrade -y

# 2. Gerekli paketler
echo "🔧 Gerekli paketler kuruluyor..."
sudo apt install -y curl wget git unzip

# 3. Node.js 18 kurulumu
echo "📚 Node.js kuruluyor..."
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# 4. PM2 kurulumu
echo "⚙️ PM2 kuruluyor..."
sudo npm install -g pm2

# 5. Nginx kurulumu
echo "🌐 Nginx kuruluyor..."
sudo apt install -y nginx

# 6. Certbot (SSL) kurulumu
echo "🔒 SSL için Certbot kuruluyor..."
sudo apt install -y certbot python3-certbot-nginx

# 7. Proje dizinlerini oluştur
echo "📁 Proje dizinleri oluşturuluyor..."
sudo mkdir -p /var/www/random-generator-tools
sudo mkdir -p /var/backups/random-generator-tools
sudo chown $USER:$USER /var/www/random-generator-tools
sudo chown $USER:$USER /var/backups/random-generator-tools

# 8. Firewall ayarları
echo "🛡️ Firewall ayarlanıyor..."
sudo ufw allow 22    # SSH
sudo ufw allow 80    # HTTP  
sudo ufw allow 443   # HTTPS
sudo ufw --force enable

echo "✅ VDS hazırlık tamamlandı!"
echo ""
echo "📋 Şimdi yapmanız gerekenler:"
echo "1. Proje dosyalarını sunucuya kopyalayın:"
echo "   scp -r ./ user@VPS_IP_ADRESINIZ:/tmp/random-generator-tools/"
echo ""
echo "2. Bu script'i çalıştırın:"
echo "   chmod +x vds-setup.sh"
echo "   ./vds-setup.sh"
echo ""
echo "3. Deploy script'ini çalıştırın:"
echo "   cd /tmp/random-generator-tools"
echo "   ./deploy_remote.sh"
