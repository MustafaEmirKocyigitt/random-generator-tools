#!/bin/bash

# Random Generator Tools VPS Deploy Script
# Mevcut projenin yanına deploy etmek için

echo "🚀 Random Generator Tools VPS Deployment Başlatılıyor..."

# Proje bilgileri
PROJECT_NAME="random-generator-tools"
DEPLOY_DIR="/var/www/$PROJECT_NAME"
BACKUP_DIR="/var/backups/$PROJECT_NAME"
SERVICE_NAME="$PROJECT_NAME"
PORT=3001  # Mevcut projeden farklı port

# 1. Proje build
echo "📦 Proje build ediliyor..."
npm run build

# 2. Gerekli dosyaları kopyala
echo "📁 Dosyalar kopyalanıyor..."
# Bu script VPS'te çalışacak, yerel dosyaları VPS'e kopyalayın
# scp -r ./ user@your-vps-ip:/tmp/$PROJECT_NAME/

# 3. VPS üzerinde çalışacak komutlar
cat << 'EOF' > deploy_remote.sh
#!/bin/bash

PROJECT_NAME="random-generator-tools"
DEPLOY_DIR="/var/www/$PROJECT_NAME"
BACKUP_DIR="/var/backups/$PROJECT_NAME"
SERVICE_NAME="$PROJECT_NAME"
PORT=3001

echo "🔄 VPS üzerinde deployment devam ediyor..."

# 1. Eski projeyi yedekle
if [ -d "$DEPLOY_DIR" ]; then
    echo "💾 Eski proje yedekleniyor..."
    sudo mkdir -p $BACKUP_DIR
    sudo cp -r $DEPLOY_DIR $BACKUP_DIR/$(date +%Y%m%d_%H%M%S)
fi

# 2. Proje dizinini oluştur
sudo mkdir -p $DEPLOY_DIR
sudo chown $USER:$USER $DEPLOY_DIR

# 3. Yeni dosyaları kopyala
cp -r /tmp/$PROJECT_NAME/* $DEPLOY_DIR/

# 4. Node.js dependencies
cd $DEPLOY_DIR
npm ci --production

# 5. PM2 service oluştur
cat << EOL > ecosystem.config.js
module.exports = {
  apps: [{
    name: '$SERVICE_NAME',
    script: 'npm',
    args: 'start',
    cwd: '$DEPLOY_DIR',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: $PORT
    }
  }]
};
EOL

# 6. PM2 ile başlat
if pm2 list | grep -q $SERVICE_NAME; then
    pm2 reload $SERVICE_NAME
else
    pm2 start ecosystem.config.js
fi

pm2 save
pm2 startup

echo "✅ Deployment tamamlandı!"
echo "🌐 Uygulama http://localhost:$PORT adresinde çalışıyor"
EOF

chmod +x deploy_remote.sh

echo "📋 VPS Deployment adımları:"
echo "1. Proje dosyalarını VPS'e kopyalayın:"
echo "   scp -r ./ user@your-vps-ip:/tmp/$PROJECT_NAME/"
echo ""
echo "2. VPS'e bağlanın ve deploy script'ini çalıştırın:"
echo "   ssh user@your-vps-ip"
echo "   ./deploy_remote.sh"
echo ""
echo "3. Nginx konfigürasyonu için:"
echo "   sudo nano /etc/nginx/sites-available/$PROJECT_NAME"
echo ""
echo "4. SSL sertifikası için:"
echo "   sudo certbot --nginx -d rastgeleolusturucu.com.tr -d www.rastgeleolusturucu.com.tr"
