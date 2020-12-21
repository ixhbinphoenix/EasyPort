# EasyPort
Easily forward ports to your PC using EasyPort!

## Warning
USE AT YOUR OWN RISK!
UPnP is not recommended as most devices have exploits that allow External users to Open Ports and redirect them to a machine in your network.

## What?
Port Forwarding is used to map a port from your External IP to a Machine in your network. This is used to host servers that need to expose a port, like http servers, ftp servers, minecraft servers, etc.
EasyPort allows you to easily forward ports to your PC using UPnP. UPnP is short for Universal Plug and Play and has to be enabled in your routers settings for EasyPort to work.

## Instructions
Using EasyPort - as the name suggests - is pretty easy to use! You just have to have UPnP enabled on your router and download the program.
1. Downloading EasyPort from [here](https://github.com/PhoenixGames-Phoenix/EasyPort/releases) or building from source with pkg
2. Enable UPnP in your routers settings
3. Open a shell in your downloads folder and run ```./easyport(.exe) <External Port> <Internal Port> [<Protocol>]``` (remove the .exe if you're not on windows)
4. Finished! Now you're ready to expose your server to the public!
