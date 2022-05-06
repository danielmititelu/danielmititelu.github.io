---
title: SSH key-based auth
tags:
- raspberrypi
- linux
---

# SSH key-based auth

1. Generate a public/private key pair and 
```
ssh-keygen
# add `~/.ssh/pi_rsa` when prompted for which file to save the key
```

2. Move the public key to the raspberry pi
```
ssh-copy-id -i ~/.ssh/pi_rsa.pub pi@raspberrypi.local
```

3. SSH into the raspberry pi
```
ssh pi@raspberrypi.local
```