---
title: Gadget mode on raspberry pi
tags:
- raspberrypi
- linux
---

Gadget mode enables a raspberry pi to be connected and controlled by a computer with only a usb cable

Flash raspberry pi os(the full or lite version) on an SD card and modify the following in the boot folder:
- in `config.txt` add `dtoverlay=dwc2` at the end of the file
- in `cmdline.txt` add `modules-load=dwc2,g_ether` after `rootwait` word
- create a file name ssh (without extension)

You should be able to connect to the pi now:
```
ssh pi@raspberrypi.local
```

### Debugging wifi connectivity 

Command to see the network interfaces
```
ifconfig
```

Command to see the wireless interfaces
```
iwconfig
```

Command to scan wireless networks
```
iwlist wlan0 scan | grep ESSID
```

Commands to stop and start wpa_supplicant manually
```
sudo killall wpa_supplicant
sudo wpa_supplicant -c/etc/wpa_supplicant/wpa_supplicant.conf -iwlan0
``` 

### Internet via usb cable

You can also give internet to the pi with the usb connection:

On Windows:

Control Panel > Network and Internet > Network and Sharing Center

On Mac: 

Apple menu > System preferences > Sharing > Internet Sharing > RNDIS/Ethernet Gadget

