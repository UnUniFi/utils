# telescope-extension

## Install

### JPYX Edition

```bash
mkdir jpyx-telescope
cd jpyx-telescope
curl -O https://raw.githubusercontent.com/lcnem/botany/main/projects/telescope-extension/editions/jpyx/docker-compose.yml
curl -O https://raw.githubusercontent.com/lcnem/botany/main/projects/telescope-extension/nginx.conf
curl -O https://raw.githubusercontent.com/lcnem/botany/main/projects/telescope-extension/editions/jpyx/config.js
docker-compose up -d
```

### EURX Edition

```bash
mkdir eurx-telescope
cd eurx-telescope
curl -O https://raw.githubusercontent.com/lcnem/botany/main/projects/telescope-extension/editions/eurx/docker-compose.yml
curl -O https://raw.githubusercontent.com/lcnem/botany/main/projects/telescope-extension/nginx.conf
curl -O https://raw.githubusercontent.com/lcnem/botany/main/projects/telescope-extension/editions/eurx/config.js
docker-compose up -d
```
