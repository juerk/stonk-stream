nano /etc/nginx/sites-enabled/default
ls -l /etc/nginx/sites-enabled/default
cat /etc/nginx/sites-available/default
nginx -t
systemctl reload nginx
ls /tmp/hls
apt update && apt upgrade -y
apt install -y nginx libnginx-mod-rtmp
nano /etc/nginx/nginx.conf
systemctl restart nginx
systemctl status nginx.service -l --no-pager
nginx -t
systemctl restart nginx
mkdir -p /var/www/html
nano /var/www/html/index.html
ls -l /tmp/hls
ss -tuln | grep :80
curl -I http://localhost/index.html
ufw status
curl -I http://64.226.106.14
nano /etc/nginx/sites-available/default
nginx -t && systemctl reload nginx
curl -I http://localhost
curl -I http://64.226.106.14
PS C:\Users\wuerk> nano /etc/nginx/sites-available/default
nano : The term 'nano' is not recognized as the name of a cmdlet, function, script file, or operable program. Check
nano /etc/nginx/sites-available/default
nginx -t && systemctl reload nginx
apt update && apt install tcpdump -y
tcpdump -i any port 80
curl -I http://wuerk.dev     # should 301 redirect to HTTPS
curl -I https://wuerk.dev    # should return 200 OK
sudo nginx -t && sudo systemctl reload nginx
# should return only your Hetzner IP (and IPv6 if set)
dig +short stonk.stream
dig +short www.stonk.stream
sudo nginx -t && sudo systemctl reload nginx
sudo apt update
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d stonk.stream -d www.stonk.stream
sudo apt update
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d stonk.stream -d www.stonk.stream
sudo nginx -t
sudo systemctl reload nginx
sudo nginx -t
sudo systemctl reload nginx
sudo certbot --nginx -d stonk.stream -d www.stonk.stream
grep -R "\.well-known/acme-challenge" /etc/nginx/sites-enabled
sudo nginx -t
sudo systemctl reload nginx
sudo certbot --nginx -d stonk.stream -d www.stonk.stream
curl -I http://localhost
curl -k -I https://localhost
sudo cat /etc/nginx/sites-enabled/default.conf
ls
sudo cat /etc/nginx/sites-enabled/default
sudo nginx -t && sudo systemctl reload nginx
curl -I http://stonk.stream    # should 301 → https://stonk.stream
curl -k -I https://localhost    # should 200 OK
curl -I https://stonk.stream    # should 200 OK
ls -l /tmp/hls
nano /etc/nginx/sites-available/default
nginx -t && systemctl reload nginx
cat /etc/nginx/sites-available/default
sudo nginx -t && sudo systemctl reload nginx
curl https://stonk.stream/stat
cd ~
mkdir -p viewer-counter
mv /var/www/html/viewer-counter.js ~/viewer-counter/
cd ~/viewer-counter
ls -l /var/www/html
find /var/www -type f -name "*viewer-counter*.js"
/etc/nginx/sites-enabled   # unlikely
/var/www/html/viewer-counter.js   # if it was there
npm init -y
npm install express
sudo apt update
sudo apt install -y nodejs npm
npm init -y
npm install express
node viewer-counter.js &
ps aux | grep viewer-counter.js
sudo nginx -t && sudo systemctl reload nginx
sudo nginx -t
sudo systemctl reload nginx
# On the VPS
curl -I http://localhost/api/viewers/count
curl    http://localhost/api/viewers/count
# On your workstation
Invoke-WebRequest -Uri https://stonk.stream/api/viewers/count
sudo nginx -t && sudo systemctl reload nginx
curl -I http://localhost/api/viewers/count   # should 200 OK
curl    http://localhost/api/viewers/count   # should return JSON
Invoke-WebRequest -Uri https://stonk.stream/api/viewers/count -UseBasicParsing
sudo nginx -t && sudo systemctl reload nginx
curl -I http://localhost/api/viewers/count
curl    http://localhost/api/viewers/count
sudo nginx -t && sudo systemctl reload nginx
curl -I http://localhost/api/viewers/count
curl    http://localhost/api/viewers/count
sudo nginx -t && sudo systemctl reload nginx
curl -I http://localhost/api/viewers/count
curl    http://localhost/api/viewers/count
sudo nginx -t && sudo systemctl reload nginx
curl -I http://localhost/api/viewers/count
curl    http://localhost/api/viewers/count
ss -tlnp | grep :3001
node viewer-counter.js &
curl -I http://127.0.0.1:3001/api/viewers/count
curl    http://127.0.0.1:3001/api/viewers/count
curl -I http://localhost/api/viewers/count
curl    http://localhost/api/viewers/count
ps aux | grep viewer-counter.js
kill 34720
node viewer-counter.js &
pkill -f viewer-counter.js
cd ~/viewer-counter
node viewer-counter.js &
sudo nginx -t && sudo systemctl reload nginx
node viewer-counter.js &
pkill -f viewer-counter.js
ss -tlnp | grep :3001
ps aux | grep viewer-counter.js
kill 38502
node viewer-counter.js &
kill 38502
node viewer-counter.js &
node viewer-counter.js &
node viewer-counter.js &ps aux | grep viewer-counter.js
kill -9 12345
nohup node viewer-counter.js &
lsof -i :3001
kill -9 40124
nohup node viewer-counter.js &
node viewer-counter.js &
systemctl restart nginx
systemctl status nginx
