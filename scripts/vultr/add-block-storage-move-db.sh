#!/bin/bash

## It is safe to copy and paste them one by one.

lsblk
### Mount blockstorage
parted -s /dev/vdb mklabel gpt
parted -s /dev/vdb unit mib mkpart primary 0% 100%
mkfs.ext4 /dev/vdb1
mkdir /mnt/blockstorage
echo >> /etc/fstab
echo /dev/vdb1 /mnt/blockstorage ext4 defaults,noatime,nofail 0 0 >> /etc/fstab
mount /mnt/blockstorage

# DAEMON_HOME=~/.ununifi

### Stop cosmvisor
systemctl stop cosmovisor.service
cp -rvp $DAEMON_HOME /mnt/blockstorage


### Require!! edit /lib/systemd/system/cosmovisor.service
## Environment="DAEMON_HOME=/mnt/blockstorage/.ununifi"
## ExecStart=/root/go/bin/cosmovisor start --home /mnt/blockstorage/.ununifi

### Recreate symbolic link
### change current version & directory
ln -nfs /mnt/blockstorage/.ununifi/cosmovisor/upgrades/v2_1 /mnt/blockstorage/.ununifi/cosmovisor/current

## Rename old ununifi directory.

# Restart
systemctl daemon-reload
systemctl restart cosmovisor.service
systemctl status cosmovisor.service

## If you need to monitor the service after launch, you can view the logs using:
#journalctl -u cosmovisor -f -o cat
