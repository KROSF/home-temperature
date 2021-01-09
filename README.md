# home-temperature

Using ESP8266 + DHT22 to obtain my home temperature as json

## Steps

### Install platformio

### Create `secrets.sh` file on root of the project

```sh
#!/usr/bin/env bash
echo '-DWIFI_SSID=\"SSID\"' '-DWIFI_PASS=\"PASSWORD\"'
```
