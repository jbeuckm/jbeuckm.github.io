---
path: "/k_means_clustering_code"
title: "K-Means Clustering Code"
date: "2009-12-24"
tags: ["ai","artwork","mathematics","programming"]
hexagonImages: ["Screen%20shot%202011-07-21%20at%205.11.08%20PM.png_hexagon.png"]
---

 [![](Screen%20shot%202011-07-21%20at%205.11.08%20PM.png)](Screen%20shot%202011-07-21%20at%205.11.08%20PM.png)

I've been having a hard time [trying](http://www.punyblog.com/2009/12/self-organizing-maps.html) to train a [Self-Organizing Map](http://en.wikipedia.org/wiki/Self-organizing_map) to categorize a large pool of short documents by my selected keywords. The initial results were promising but I couldn't adjust the training parameters well enough to train the error sufficiently low that I would be confident of the categorizations, even after several days of training.

Some nice folks on [comp.ai.neural-nets](http://groups.google.com/group/comp.ai.neural-nets/topics) suggested a few other techniques and I've implemented simple routines to perform [K-Means Clustering](http://en.wikipedia.org/wiki/K-means_clustering). The categorization of my 3300 documents by 323 keywords now takes less than 10 seconds.

[download my k-means c source](k-means.zip)  
_(This source uses raw float arrays and includes a function to categorize the vectors in a [FANN](http://leenissen.dk/fann/) training data struct.)_ 11 
  <!---
  <div class="field field-type-filefield field-field-images" xmlns="http://www.w3.org/1999/xhtml">
      
    <div class="field-items">
            <div class="field-item odd">
                    <a href="http://www.beigerecords.com/joe-old/sites/default/files/Screen shot 2011-07-21 at 5.11.08 PM.png" class="imagecache imagecache-square_thumbnail imagecache-imagelink imagecache-square_thumbnail_imagelink"><img src="http://www.beigerecords.com/joe-old/sites/default/files/imagecache/square_thumbnail/Screen%20shot%202011-07-21%20at%205.11.08%20PM.png" alt="" title="" width="300" height="300" class="imagecache imagecache-square_thumbnail"/></a>        </div>
        </div>
</div> 
 <p xmlns="http://www.w3.org/1999/xhtml">I've been having a hard time <a href="http://www.punyblog.com/2009/12/self-organizing-maps.html">trying</a> to train a <a href="http://en.wikipedia.org/wiki/Self-organizing_map">Self-Organizing Map</a> to categorize a large pool of short documents by my selected keywords. The initial results were promising but I couldn't adjust the training parameters well enough to train the error sufficiently low that I would be confident of the categorizations, even after several days of training.</p>  

 <p xmlns="http://www.w3.org/1999/xhtml">Some nice folks on <a href="http://groups.google.com/group/comp.ai.neural-nets/topics">comp.ai.neural-nets</a> suggested a few other techniques and I've implemented simple routines to perform <a href="http://en.wikipedia.org/wiki/K-means_clustering">K-Means Clustering</a>. The categorization of my 3300 documents by 323 keywords now takes less than 10 seconds.
</p> 

 <a href="http://www.beigerecords.com/joe/wp-content/uploads/2009/12/k-means.zip" xmlns="http://www.w3.org/1999/xhtml">download my k-means c source</a> <br xmlns="http://www.w3.org/1999/xhtml"/> 

 <i xmlns="http://www.w3.org/1999/xhtml">(This source uses raw float arrays and includes a function to categorize the vectors in a <a href="http://leenissen.dk/fann/">FANN</a> training data struct.)</i> 

 11
  --->