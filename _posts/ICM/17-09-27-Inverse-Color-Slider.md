---

layout: post
title: Inverse Color Slider
categories: ICM

---

My goal setting out was to make an RGB color mixer with three faders created by a function. I will preface this all by saying I did not succeed. I began the assignment by tackling challenge 1 and 2 from the homework page, which involved using a for loop to generate multiple dots that would change color on rollover.

#### [Rollover Hold](https://alpha.editor.p5js.org/patchbae/sketches/S1ObN2ds-)
 The challenge was to have the dot which was last rolled over remain a different color until another dot was rolled over. The approach was to use if, else if, and else statements to determine if the mouse was over a dot, and if not, to remember which dot the mouse was last over. This took me a lot longer than I had hoped it would, but it all made sense once I figured it out. 
<iframe width="400" height="400" src="https://alpha.editor.p5js.org/embed/S1ObN2ds-" scrolling="no"></iframe>

#### [X-Fader](https://alpha.editor.p5js.org/patchbae/sketches/rJ2J_jusW)
I then moved on to designing a fader. I started with a simple crossfader that didn't rely on a mouse click, and also had left and right bounds. This was actually surprisingly simple to get going, the hardest part was making it look nice and having everything line up properly. Now to make it actually do something.
<iframe scrolling="no" width="400" height="400" src="https://alpha.editor.p5js.org/embed/rJ2J_jusW"></iframe>

#### [Contrast Fader](https://alpha.editor.p5js.org/patchbae/sketches/ByRKtodoZ)
I added some randomly generated circles above the fader, then associated the fader's position to the color of all the objects. The background color corresponded directly to the x-position of the fadar, while the color of the circles and the crossfader itself was inversely proportional. This ended up acting like a contrast fader, so that if the fader is in the middle, the colors are all the same and everything disappears. 
<iframe scrolling="no" width="400" height="400" src="https://alpha.editor.p5js.org/embed/ByRKtodoZ"></iframe>

After this I tried just to get two faders to work, but I was unable to figure out how to store and set thier individual positions without using arrays. I'm going to re-work it with arrays going forward, as this will probably solve this issue. 

#### [Contrasting Hues](https://alpha.editor.p5js.org/patchbae/sketches/Hk2zTadoZ)
Instead, I opted to make a single color fader that needs a click to drag, and modulates the background hue and its own hue. The result are the two colors at the opposite ends of the hue vector, which result in complementary pairings. The design is simple, intuitive and produces pleasing color schemes. 
<iframe scrolling="no" width="400" height="400" src="https://alpha.editor.p5js.org/embed/Hk2zTadoZ"></iframe>
