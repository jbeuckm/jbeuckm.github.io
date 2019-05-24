---
path: "/laser_pointer_first_attempt"
title: "Laser Pointer First Attempt"
date: "2009-08-21"
tags: ["arduino","artwork","laser"]
hexagonImages: ["full1.jpeg_hexagon.jpeg","full1-768x1024.jpg_hexagon.jpeg","side-1024x768.jpg_hexagon.jpeg","close_motor_driver-1024x768.jpg_hexagon.jpeg","help-768x1024.jpg_hexagon.jpeg","full1.jpg_hexagon.jpeg","side.jpg_hexagon.jpeg","close_motor_driver.jpg_hexagon.jpeg","help.jpg_hexagon.jpeg"]
---


Here is a prototype two-axis pointing device designed to aim a laser diode's beam. It operates via USB to Arduino with my modified Firmata and AS3 Glue code and two EasyDriver stepper motor controller boards. 

[![full1](full1.jpg "full1")](full1.jpg) 

This design is movable over virtually the entire sphere but it's difficult to build a well-aligned bearing and gear or pulley system. And, the azimuth structure is massive enough to cause a lot of bounce when it starts/stops. 

[![side](side.jpg "side")](side.jpg) 

The rubber timing belts also contributed to the bounce. 

[![close_motor_driver](close_motor_driver.jpg "close_motor_driver")](close_motor_driver.jpg) 

Ultimately, the position was not repeatable. So, I'm working on a new prototype that will swivel on a lazy susan bearing and elevate across a sturdy hinge. The stepper motors will be joined to threaded rods which thread into t-nuts attached to the moveable parts. No play and no bounce should provide for positional repeatability. 

[![help](help.jpg "help")](help.jpg) 

And this time I have very good help. 