---
path: "/solar_panel"
title: "Solar Panel"
date: "2010-07-27"
tags: ["arduino","electronics","house","solar"]
hexagonImages: ["solar_day_one.jpeg_hexagon.jpeg","solar_day_one-300x133.jpg_hexagon.jpeg","solar_day_one.jpg_hexagon.jpeg"]
---

 [![](solar_day_one.jpeg)](solar_day_one.jpeg)

A recent hobby has been to build and install a solar panel on our roof. It's comprised of 36 common Evergreen Solar 3"x6" 1.8W cells in a simple wooden frame with a sheet of acrylic to protect them. My Dad helped run conduit and wires last weekend and the open source hardware/software available these days makes it unbelievably easy to setup a voltage logging apparatus. A 10k then a 2.2k resistor straddle the wires coming into our basement from the panel. The junction of those is connected to an analog input on an [Arduino Mini](http://www.arduino.cc/en/Main/ArduinoBoardMini) . Every minute, the Atmega reports the value read at that input to the serial port. A simple processing sketch receives the value and makes an HTTP request to my web host, which stores the value in a database. [The "Flot" plugin for jQuery](http://code.google.com/p/flot/) makes rendering a nice line-graph of the incoming data straightforward. [![Day One Voltages From Solar Panel](solar_day_one-300x133.jpg "solar_day_one")](solar_day_one.jpg) 7 
  <!---
  <div class="field field-type-filefield field-field-images" xmlns="http://www.w3.org/1999/xhtml">
      
    <div class="field-items">
            <div class="field-item odd">
                    <a href="http://www.beigerecords.com/joe-old/sites/default/files/solar_day_one.jpeg" class="imagecache imagecache-square_thumbnail imagecache-imagelink imagecache-square_thumbnail_imagelink"><img src="http://www.beigerecords.com/joe-old/sites/default/files/imagecache/square_thumbnail/solar_day_one.jpeg" alt="" title="" width="300" height="300" class="imagecache imagecache-square_thumbnail"/></a>        </div>
        </div>
</div> 
A recent hobby has been to build and install a solar panel on our roof. It's comprised of 36 common Evergreen Solar 3"x6" 1.8W cells in a simple wooden frame with a sheet of acrylic to protect them. My Dad helped run conduit and wires last weekend and the open source hardware/software available these days makes it unbelievably easy to setup a voltage logging apparatus. A 10k then a 2.2k resistor straddle the wires coming into our basement from the panel. The junction of those is connected to an analog input on an  <a href="http://www.arduino.cc/en/Main/ArduinoBoardMini" xmlns="http://www.w3.org/1999/xhtml">Arduino Mini</a> . Every minute, the Atmega reports the value read at that input to the serial port. A simple processing sketch receives the value and makes an HTTP request to my web host, which stores the value in a database.  <a href="http://code.google.com/p/flot/" xmlns="http://www.w3.org/1999/xhtml">The "Flot" plugin for jQuery</a>  makes rendering a nice line-graph of the incoming data straightforward.

 <a href="http://www.beigerecords.com/joe/wp-content/uploads/2010/07/solar_day_one.jpg" xmlns="http://www.w3.org/1999/xhtml"><img src="/joe/newdrupal/sites/default/files/images/solar_day_one-300x133.jpg" alt="Day One Voltages From Solar Panel" title="solar_day_one" width="300" height="133" class="size-medium wp-image-501"/></a> 7
  --->