---
path: "/box2d_planetary_gear_set"
title: "Box2D Planetary Gear Set"
date: "2009-09-17"
tags: ["physics","programming"]
hexagonImages: ["Screen%20shot%202011-07-21%20at%205.25.26%20PM.png_hexagon.png"]
---

 [![](Screen%20shot%202011-07-21%20at%205.25.26%20PM.png)](Screen%20shot%202011-07-21%20at%205.25.26%20PM.png)

All the [Box2D](http://box2dflash.sourceforge.net/) documentation says to use the automatic gear joint and not to mess with simulating gears this way ...so it had to be done! A little trigonometry and fidgeting with sizes produced this simple planetary set:

<!-- swfobject.embedSWF("http://www.beigerecords.com/joe/sites/default/files/plexpinballmodule.swf", "planetary", "400", "400", "9.0.0"); // -->

I quickly modified my sprocket construction code to make the annulus and spent a while scratching my head before remembering that the shape vertices have to be defined clockwise. Once they were, everything was interacting. But in all honesty, I have to nudge the annulus to get it going no matter how much torque I apply to the sun gear. It would be great to understand why if you know. And it would be really cool to develop an "eccentric drive" or two like these:

  

<embed src="http://www.youtube.com/v/QP5LN9jcsz4&amp;hl=en&amp;fs=1&amp;" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="425" height="344">  
<embed src="http://www.youtube.com/v/8dR38uQN74c&amp;hl=en&amp;fs=1&amp;" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="425" height="344">  
and eventually...  
<embed src="http://www.youtube.com/v/pHO1JTNPPOU&amp;hl=en&amp;fs=1&amp;" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="560" height="340">

9 
  <!---
  <div class="field field-type-filefield field-field-images" xmlns="http://www.w3.org/1999/xhtml">
      
    <div class="field-items">
            <div class="field-item odd">
                    <a href="http://www.beigerecords.com/joe-old/sites/default/files/Screen shot 2011-07-21 at 5.25.26 PM.png" class="imagecache imagecache-square_thumbnail imagecache-imagelink imagecache-square_thumbnail_imagelink"><img src="http://www.beigerecords.com/joe-old/sites/default/files/imagecache/square_thumbnail/Screen%20shot%202011-07-21%20at%205.25.26%20PM.png" alt="" title="" width="300" height="300" class="imagecache imagecache-square_thumbnail"/></a>        </div>
        </div>
</div> 
 <p xmlns="http://www.w3.org/1999/xhtml">All the <a href="http://box2dflash.sourceforge.net/">Box2D</a> documentation says to use the automatic gear joint and not to mess with simulating gears this way ...so it had to be done! A little trigonometry and fidgeting with sizes produced this simple planetary set:</p> <p xmlns="http://www.w3.org/1999/xhtml">

<script type="text/javascript"><!--
swfobject.embedSWF("http://www.beigerecords.com/joe/sites/default/files/plexpinballmodule.swf", "planetary", "400", "400", "9.0.0");
// --></script>
<div style="padding-left:120px; padding-right:120px;width:640px;">
<div id="planetary"></div>
</div>

</p> <p xmlns="http://www.w3.org/1999/xhtml">I quickly modified my sprocket construction code to make the annulus and spent a while scratching my head before remembering that the shape vertices have to be defined clockwise.  Once they were, everything was interacting.  But in all honesty, I have to nudge the annulus to get it going no matter how much torque I apply to the sun gear.  It would be great to understand why if you know.  And it would be really cool to develop an "eccentric drive" or two like these:</p> 
 <br xmlns="http://www.w3.org/1999/xhtml"/> 

 <center xmlns="http://www.w3.org/1999/xhtml">
<object width="425" height="344"><param name="movie" value="http://www.youtube.com/v/QP5LN9jcsz4&amp;hl=en&amp;fs=1&amp;"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="http://www.youtube.com/v/QP5LN9jcsz4&amp;hl=en&amp;fs=1&amp;" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="425" height="344"></embed></object>
<br/>
<object width="425" height="344"><param name="movie" value="http://www.youtube.com/v/8dR38uQN74c&amp;hl=en&amp;fs=1&amp;"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="http://www.youtube.com/v/8dR38uQN74c&amp;hl=en&amp;fs=1&amp;" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="425" height="344"></embed></object>
<br/>
and eventually...
<br/>
<object width="560" height="340"><param name="movie" value="http://www.youtube.com/v/pHO1JTNPPOU&amp;hl=en&amp;fs=1&amp;"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="http://www.youtube.com/v/pHO1JTNPPOU&amp;hl=en&amp;fs=1&amp;" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="560" height="340"></embed></object>

</center> 9
  --->