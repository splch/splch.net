---
title: Nextcloud + Syncthing = Better Together
date: 2022-05-09
image: https://i.imgur.com/TTizOiQ.png
draft: false
---

This guide will quickly walk through how to share a folder with Syncthing and manage it with Nextcloud. First, we'll cover Syncthing then get into Nextcloud. This tutorial is made with Debian in mind, so there might be some changes with different operating systems.

## Installation

### Syncthing

There are two primary methods of downloading Syncthing:

1. From the [releases](https://github.com/syncthing/syncthing/releases/) tab
2. or the apt repository.

**Releases Package**

To install from the releases, download your correct version, then extract it.

```
tar xf syncthing.tar.gz
```

Now register the syncthing binary.

```
sudo mv syncthing /usr/local/bin/
```

**Apt Repository**

From the [download's page](https://syncthing.net/downloads/), first download the public key.

```
# Add the release PGP keys:
sudo curl -s -o /usr/share/keyrings/syncthing-archive-keyring.gpg https://syncthing.net/release-key.gpg
```

Add the stable channel of the repository.

```
# Add the "stable" channel to your APT sources:
echo "deb [signed-by=/usr/share/keyrings/syncthing-archive-keyring.gpg] https://apt.syncthing.net/ syncthing stable" | sudo tee /etc/apt/sources.list.d/syncthing.list
```

Now update and install Syncthing.

```
# Update and install syncthing:
sudo apt update && sudo apt install syncthing
```

It's important to use the latest Syncthing package because Debian's doesn't support certain sharing protocols that the updated Android / iOS versions require.

### Nextcloud

Nextcloud needs php (along with some php-specific functions) and a sql database manager, so we'll install those.

```
sudo apt install apache2 mariadb-server libapache2-mod-php
sudo apt install php-gd php-json php-mysql php-curl php-mbstring php-intl php-imagick php-xml php-zip
```

Now change directories to the Apache server folder where Nextcloud will run.

```
cd /var/www/html/
```

And download a zip release from [Nextloud's releases](https://download.nextcloud.com/server/releases/). It will take the form of nextcloud-\*.\*.\*.zip. Now extract that into the directory.

```
sudo unzip nextcloud-*.*.*.zip
```

And give permissions to Apache.

```
sudo chmod 750 nextcloud -R
sudo chown www-data:www-data nextcloud -R
```

#### SQL

Now we need to give Nextcloud a database to use. We'll run mysql to do that.

```
sudo mysql
```

Within sql, let's create a user to own the database.

```
CREATE USER 'username' IDENTIFIED BY 'password';
```

Now let's create the database.

```
CREATE DATABASE nextcloud;
```

And give permissions to edit the DB.

```
GRANT ALL PRIVILEGES ON nextcloud.* TO 'username'@localhost IDENTIFIED BY 'password';
```

Finally, save the changes and quit.

```
FLUSH PRIVILEGES;
quit
```

This is all for installation, but now we have to set correct permissions for both Nextcloud and Syncthing to access Nextcloud data.

## Permissions

Now create the Syncthing configuration file and permission it for Apache.

```
sudo mkdir /opt/syncthing-config
sudo chown www-data:www-data /opt/syncthing-config
```

### Create a Service

To get Syncthing to start automatically, create a service

```
cd /lib/systemd/system
sudo cp syncthing@.service syncthing@www-data.service

sudoedit syncthing@www-data.service
```

Within that service file, change the user to www-data and binary call.

```
[Service]
User=www-data
ExecStart=/usr/bin/syncthing --no-browser --no-restart --home=/opt/syncthing-config
```

Start the service.

```
sudo systemctl start syncthing@www-data
sudo systemctl enable syncthing@www-data
```

This generates Syncthing files, so we'll need to change their permissions too. Stop the service.

```
sudo systemctl stop syncthing@www-data
```

And edit the newly generated config.

```
sudoedit /opt/syncthing-config/config.xml
```

Make the localhost, 127.0.0.1, address to be accessible within the network by changing it to 0.0.0.0.

```
<address>0.0.0.0:8384</address>
```

And now restart the service

```
sudo systemctl start syncthing@www-data
```

## Data

First, you'll need to set the Syncthing data directory to the Nextcloud data directory.

![Syncthing Data Directory](https://raw.githubusercontent.com/syncthing/docs-pre-rendered/main/v0.11.10/_images/gs1.png)

Remove the default folder and add a new folder pointing to `/var/www/html/nextcloud/data`.

Within Nextcloud be sure to enable encryption.

![Encryption Settings](https://raw.githubusercontent.com/nextcloud/documentation/master/admin_manual/configuration_files/images/encryption15.png)

---

# Bonus: Working with RetroPie

## Mounting Nextcloud

We'll need to mount Nextcloud first.

```
sudo apt install davfs2
```

Then give the `pi` user permissions to mount webdav.

```
sudo usermod -aG davfs2 pi
```

Now make a RetroPie folder to mount Nextcloud to.

```
sudoedit /etc/fstab
```

And append this line:

```
http://raspberrypi.local/nextcloud/remote.php/dav/files/USERNAME /home/pi/RetroPie davfs noauto,user,rw 0 0
```

Now you can test the mounting by running:

```
mount ~/RetroPie
```

> Optional steps

To have the folder mount on boot, create a webdav secrets file.

```
mkdir ~/.davfs2
sudo cp /etc/davfs2/secrets ~/.davfs2/secrets
```

Give permissions to read and write the secrets file now.

```
sudo chown pi:pi /home/pi/.davfs2/secrets
sudo chmod 600 /home/pi/.davfs2/secrets
```

And finally append the webdav authentication to secrets.

```
http://raspberrypi.local/nextcloud/remote.php/dav/files/USERNAME/ USERNAME PASSWORD
```

Now, you can mount on boot and auto authenticate.

In `/opt/retropie/configs/all/autostart.sh`:

```
mount /home/pi/RetroPie
```

In the mounted RetroPie folder, there should be a `roms/` and `saves/` directory. RetroArch will automatically use the `roms/` path, but we need to specify the folder in which to store save files and states. To do that, we edit the `/opt/retropie/configs/all/retroarch.cfg` file.

```
sudoedit /opt/retropie/configs/all/retroarch.cfg
```

And change the values of `savefile_directory` and `savestate_directory` from "default" to "/home/pi/RetroPie/saves".

## Sources

- <https://raspberrytips.com/install-nextcloud-raspberry-pi>
- <https://itcamefromtheinternet.com/blog/nextcloud-syncthing-integration>
- <https://retropie.org.uk/forum/topic/10109/changing-saved-state-directory-location-retropie-4-2>
- <https://retropie.org.uk/docs/Running-ROMs-from-a-Network-Share>
