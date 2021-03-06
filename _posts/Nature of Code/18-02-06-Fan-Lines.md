---

 layout: post
 title: "Fan Lines"
 category: "Nature of Code"
 
---

I decided to continue working on my drunk Perlin walker, so I created a variation that ended up resembling what I think could be fabric or smoke with a force blowing upwards. 

###### Click into a window and hit enter to add an additional object. 

#### [Perlin Walker with Trails](https://alpha.editor.p5js.org/patchbae/sketches/By7EkrArG)

My first step towards this was creating an array to store each object's color and opacity history, allowing me to draw trails. 
This was the result applied to the radial version of the Perlin walker. The length of the the history is controlled by the slider in the top left. 

<iframe frameborder="no" width="100%" height="720" align="center" margin="0 auto" display="block" src="https://alpha.editor.p5js.org/embed/By7EkrArG" scrolling="no"></iframe>

#### [Decay](https://alpha.editor.p5js.org/patchbae/sketches/ry2NfvIIM)

I then created an opacity decay, so that each object starts with full opacity and slowly loses opacity over its lifespan. In addition to this opacity decay, I created a function so that when the opacity reached 0, the arrays would stop updating and slowly begin erasing its oldest entries until there are none left, create a smooth fade out for the object. 

<iframe frameborder="no" width="100%" height="720" align="center" margin="0 auto" display="block" src="https://alpha.editor.p5js.org/embed/ry2NfvIIM" scrolling="no"></iframe>


#### [Quad](https://alpha.editor.p5js.org/patchbae/sketches/BkBI8d8Uz)

I then switched out the lines for quads, which formed very interesting patterns, especially Moire lines, but the movement was still largely random.

<iframe frameborder="no" width="100%" height="720" align="center" margin="0 auto" display="block" src="https://alpha.editor.p5js.org/embed/BkBI8d8Uz" scrolling="no"></iframe>

#### [A Force](https://alpha.editor.p5js.org/patchbae/sketches/rJV7UFUIf)

Since the movement was still random, I decided to first create a downward force that would act on the object. This was done by simply creating an offset that was always going in the positive direction (i.e. downwards). 

<iframe frameborder="no" width="100%" height="720" margin="0 auto" align="center" display="block" src="https://alpha.editor.p5js.org/embed/rJV7UFUIf" scrolling="no"></iframe>


#### [An Upwards Gust](https://alpha.editor.p5js.org/patchbae/sketches/B1YGas8Uf)

Lastly, I moved the starting points so that they originated at the top of the screen and had an initial acceleration downwards. However, there is also an upwards force acting on all objects. So the objects initially fall, and are then blown back up.

<iframe frameborder="no" width="100%" height="720" align="center" src="https://alpha.editor.p5js.org/embed/B1YGas8Uf" scrolling="no"></iframe>


