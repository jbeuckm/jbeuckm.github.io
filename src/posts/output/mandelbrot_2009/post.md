---
path: "/mandelbrot_2009"
title: "Mandelbrot 2009"
date: "2009-09-21"
tags: []
hexagonImages: ["Screen%20shot%202011-07-21%20at%205.22.43%20PM.png_hexagon.png"]
---

 [![](Screen%20shot%202011-07-21%20at%205.22.43%20PM.png)](Screen%20shot%202011-07-21%20at%205.22.43%20PM.png)

Back in the days of i386 processors, long distance dialup connections and 5.25" floppy drives, I spent a lot of time with a program called [FractInt](http://spanky.triumf.ca/www/fractint/fractint.html). You could pick an algorithm, set up the location, zoom level and color palette and then wait minutes, hours or days for it to calculate a TOTALLY AWESOME image.

Now that processors are screaming fast and AS3 is about catching up to the speed of real programming languages, I decided to port the Mandelbrot algorithm and see how fast it could be rendered. This 132x132 image is being calculated each frame with up to 200 iterations per pixel.

<!-- swfobject.embedSWF("http://www.beigerecords.com/joe/sites/default/files/mandelbrotset.swf", "mandelbrot", "132", "132", "9.0.0"); // -->

Z = zoom in
X = zoom out
mouse = pan

[source](undefined) 11 
  <!---
  <div class="field field-type-filefield field-field-images" xmlns="http://www.w3.org/1999/xhtml">
      
    <div class="field-items">
            <div class="field-item odd">
                    <a href="http://www.beigerecords.com/joe-old/sites/default/files/Screen shot 2011-07-21 at 5.22.43 PM.png" class="imagecache imagecache-square_thumbnail imagecache-imagelink imagecache-square_thumbnail_imagelink"><img src="http://www.beigerecords.com/joe-old/sites/default/files/imagecache/square_thumbnail/Screen%20shot%202011-07-21%20at%205.22.43%20PM.png" alt="" title="" width="300" height="300" class="imagecache imagecache-square_thumbnail"/></a>        </div>
        </div>
</div> 
 <p xmlns="http://www.w3.org/1999/xhtml">Back in the days of i386 processors, long distance dialup connections and 5.25" floppy drives, I spent a lot of time with a program called <a href="http://spanky.triumf.ca/www/fractint/fractint.html">FractInt</a>.  You could pick an algorithm, set up the location, zoom level and color palette and then wait minutes, hours or days for it to calculate a TOTALLY AWESOME image.</p> 

 <p xmlns="http://www.w3.org/1999/xhtml">Now that processors are screaming fast and AS3 is about catching up to the speed of real programming languages, I decided to port the Mandelbrot algorithm and see how fast it could be rendered.  This 132x132 image is being calculated each frame with up to 200 iterations per pixel.</p> 

 <script type="text/javascript" xmlns="http://www.w3.org/1999/xhtml"><!--
swfobject.embedSWF("http://www.beigerecords.com/joe/sites/default/files/mandelbrotset.swf", "mandelbrot", "132", "132", "9.0.0");
// --></script> 
 <div style="text-align: center; width: 640px;" xmlns="http://www.w3.org/1999/xhtml"><div id="mandelbrot"></div>
<pre>Z = zoom in
X = zoom out
mouse = pan</pre>
</div> 
 <a href="http://www.beigerecords.com/joe/sites/default/files/mandelbrotset.as" xmlns="http://www.w3.org/1999/xhtml">source</a> 11
  --->