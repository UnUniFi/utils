# telescope-extension

## Install

### UnUniFi

```bash
mkdir telescope
cd telescope
curl -O https://raw.githubusercontent.com/ununifi/utils/main/projects/telescope-extension/editions/ununifi/docker-compose.yml
curl -O https://raw.githubusercontent.com/ununifi/utils/main/projects/telescope-extension/nginx.conf
curl -O https://raw.githubusercontent.com/ununifi/utils/main/projects/telescope-extension/editions/ununifi/launch/[chain-id]/[full | standard | light]/config.js
docker-compose up -d
```
