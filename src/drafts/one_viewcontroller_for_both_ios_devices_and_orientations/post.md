---
path: "/one_viewcontroller_for_both_ios_devices_and_orientations"
title: "One ViewController for Both iOS Devices and Orientations"
date: "2011-04-28"
tags: ["iOS","Uncategorized"]
hexagonImages: ["default_hexagon.png"]
---

 [![](Screen%20shot%202011-07-21%20at%2012.12.03%20AM_0.png)](Screen%20shot%202011-07-21%20at%2012.12.03%20AM_0.png)

Building a view to support iPad and iPhone is a little clunky. Apple suggests that separate UIViewController’s be built, one for each device. But the vast majority of ViewControllers will want to implement the same logic whether being run on iPad or iPhone. For instance, say my view shows an image and presents a text box and a button. The ViewController needs to respond to the button by doing something with the text in the text box. This functionality is exactly the same no matter the device. Building and maintaining two versions of the same functionality is redundant. Also clunky is the auto-sizing feature in Interface builder for handling landscape vs. portrait orientations. In all but the simplest views, it would be easier to build separate Nib’s than configure the springs and struts to manipulate the view correctly to the alternate orientation. So, here’s a UIViewController that detects the device and orientation (or change in orientation) and loads itself an appropriate Nib. It expects that four Nibs exist: MyView\_iPhone\_Portrait, MyView\_iPhone\_Landscape, MyView\_iPad\_Portrait and MyView\_iPad\_Landscape. And, it expects that they have the same connection profile to “File’s Owner” which is a class in the “Shared/” folder that extends UIUniversalOrientedViewController. Your UIViewController that extends UIUniversalOrientedViewController should override the function findNibName as follows:

\- (NSString \*) findNibName {
	baseNibName = @"MyView";
	return \[super findNibName\];
}

Here is the class: [UNUniversalOrientedViewController.h](uiuniversalorientedviewcontroller.h) [UNUniversalOrientedViewController.m](undefined) 8 
  <!---
  <div class="field field-type-filefield field-field-images" xmlns="http://www.w3.org/1999/xhtml">
      
    <div class="field-items">
            <div class="field-item odd">
                    <a href="http://www.beigerecords.com/joe-old/sites/default/files/Screen shot 2011-07-21 at 12.12.03 AM_0.png" class="imagecache imagecache-square_thumbnail imagecache-imagelink imagecache-square_thumbnail_imagelink"><img src="http://www.beigerecords.com/joe-old/sites/default/files/imagecache/square_thumbnail/Screen%20shot%202011-07-21%20at%2012.12.03%20AM_0.png" alt="" title="" width="300" height="300" class="imagecache imagecache-square_thumbnail"/></a>        </div>
        </div>
</div> 
Building a view to support iPad and iPhone is a little clunky. Apple suggests that separate UIViewController’s be built, one for each device. But the vast majority of ViewControllers will want to implement the same logic whether being run on iPad or iPhone. For instance, say my view shows an image and presents a text box and a button. The ViewController needs to respond to the button by doing something with the text in the text box. This functionality is exactly the same no matter the device. Building and maintaining two versions of the same functionality is redundant.

Also clunky is the auto-sizing feature in Interface builder for handling landscape vs. portrait orientations. In all but the simplest views, it would be easier to build separate Nib’s than configure the springs and struts to manipulate the view correctly to the alternate orientation.

So, here’s a UIViewController that detects the device and orientation (or change in orientation) and loads itself an appropriate Nib. It expects that four Nibs exist: MyView_iPhone_Portrait, MyView_iPhone_Landscape, MyView_iPad_Portrait and MyView_iPad_Landscape. And, it expects that they have the same connection profile to “File’s Owner” which is a class in the “Shared/” folder that extends UIUniversalOrientedViewController. Your UIViewController that extends UIUniversalOrientedViewController should override the function findNibName as follows:

 <pre class="brush: cpp;" xmlns="http://www.w3.org/1999/xhtml">
- (NSString *) findNibName {
	baseNibName = @"MyView";
	return [super findNibName];
}
</pre> 

Here is the class:

 <a href="http://www.beigerecords.com/joe/wp-content/uploads/2011/04/uiuniversalorientedviewcontroller.h" xmlns="http://www.w3.org/1999/xhtml">UNUniversalOrientedViewController.h</a> 

 <a href="http://www.beigerecords.com/joe/wp-content/uploads/2011/04/uiuniversalorientedviewcontroller.m" xmlns="http://www.w3.org/1999/xhtml">UNUniversalOrientedViewController.m</a> 
 8
  --->