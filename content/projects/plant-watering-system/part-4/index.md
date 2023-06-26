---
title: "Plant watering system part 4 - Improving the code"
tags:
- raspberrypi
---

While Arduino studio is awesome, it didn't seem to have the best support for the Raspberry Pi Pico. The recommended languages for the Pico are C++ and Python and I decided to go with Python.

I rewrite the code in Python and did the following improvements:
- connect the board to wi-fi
- get the time from a NTP(Network Time Protocol) server
- open the pump every two days at 12:00 

Check the [github repo](https://github.com/danielmititelu/plant-watering-system) for the code.