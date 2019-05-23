---
path: "/12_bit_color_from_arduino_to_nokia_6100_knock_off_lcd"
title: "12-bit Color from Arduino to Nokia 6100 Knock-off LCD"
date: "2009-09-21"
tags: ["arduino","artwork","electronics","fractal"]
hexagonImages: ["pinecar.jpeg_hexagon.jpeg","pinecar-300x200.jpg_hexagon.jpeg","pinecar.jpg_hexagon.jpeg"]
---

 [![](pinecar.jpeg)](pinecar.jpeg)

This code draws a Mandelbrot pattern on the 132x132 Nokia 6100 type screen with Epson controller (will not work for the Phillips) from an [Arduino](http://arduino.cc). I started with the code example from [this post](http://www.arduino.cc/cgi-bin/yabb2/YaBB.pl?num=1237036119/45) and made some optimizations- especially to the serial communication code. Then I ported the Mandelbrot algorithm from [here](http://www.codeproject.com/KB/cpp/mandelbrot_obfuscation.aspx). The zoom level and viewport into the fractal can easily be changed or made to update each loop. But it's slow.

[![World's first 8Mhz pinewood derby car with 12-bit color?](pinecar-300x200.jpg "pinecar")](pinecar.jpg)

[source](undefined)

To send serial data a bit faster, one might reserve an entire Arduino port and rotate/clock, rotate/clock and so on, instead of repeatedly testing the data byte and flipping a single pin. I still haven't been able to engage the 8-bit color mode, which would again speed things up since I could send one byte per pixel instead of three bytes for two pixels. I used an 8Mhz and would only use 16Mhz or higher setup if I did this again. When will there be a 2Ghz Arduino? Then it might look more like this:

swfobject.embedSWF("/joe/wp-content/uploads/2009/09/mandelbrotset.swf", "mandelbrot", "132", "132", "10.0.0");

(needs flash)

(mouse left/right for pan, up/down for zoom) 14 
  <!---
  <div class="field field-type-filefield field-field-images" xmlns="http://www.w3.org/1999/xhtml">
      
    <div class="field-items">
            <div class="field-item odd">
                    <a href="http://www.beigerecords.com/joe-old/sites/default/files/pinecar.jpeg" class="imagecache imagecache-square_thumbnail imagecache-imagelink imagecache-square_thumbnail_imagelink"><img src="http://www.beigerecords.com/joe-old/sites/default/files/imagecache/square_thumbnail/pinecar.jpeg" alt="" title="" width="300" height="300" class="imagecache imagecache-square_thumbnail"/></a>        </div>
        </div>
</div> 
 <p xmlns="http://www.w3.org/1999/xhtml">This code draws a Mandelbrot pattern on the 132x132 Nokia 6100 type screen with Epson controller (will not work for the Phillips) from an <a href="http://arduino.cc">Arduino</a>.  I started with the code example from <a href="http://www.arduino.cc/cgi-bin/yabb2/YaBB.pl?num=1237036119/45">this post</a> and made some optimizations- especially to the serial communication code. Then I ported the Mandelbrot algorithm from <a href="http://www.codeproject.com/KB/cpp/mandelbrot_obfuscation.aspx">here</a>. The zoom level and viewport into the fractal can easily be changed or made to update each loop.  But it's slow.</p> 

 <a href="http://www.beigerecords.com/joe/wp-content/uploads/2009/09/pinecar.jpg" xmlns="http://www.w3.org/1999/xhtml"><img src="/joe/newdrupal/sites/default/files/images/pinecar-300x200.jpg" alt="World's first 8Mhz pinewood derby car with 12-bit color?" title="pinecar" width="300" height="200" class="size-medium wp-image-387"/></a> 

 <p xmlns="http://www.w3.org/1999/xhtml"><a href="http://www.beigerecords.com/joe/wp-content/uploads/2009/09/mandelbrot_zoomer.pde">source</a></p> 

 <p xmlns="http://www.w3.org/1999/xhtml">To send serial data a bit faster, one might reserve an entire Arduino port and rotate/clock, rotate/clock and so on, instead of repeatedly testing the data byte and flipping a single pin. I still haven't been able to engage the 8-bit color mode, which would again speed things up since I could send one byte per pixel instead of three bytes for two pixels.  I used an 8Mhz and would only use 16Mhz or higher setup if I did this again.  When will there be a 2Ghz Arduino?  Then it might look more like this:</p> 

 <script language="javascript" xmlns="http://www.w3.org/1999/xhtml">
swfobject.embedSWF("/joe/wp-content/uploads/2009/09/mandelbrotset.swf", "mandelbrot", "132", "132", "10.0.0");
</script> 
 <div id="mandelbrot" xmlns="http://www.w3.org/1999/xhtml">(needs flash)</div> 
(mouse left/right for pan, up/down for zoom)



 14
  --->