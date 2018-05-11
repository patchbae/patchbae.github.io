var Repeller = function(x, y, c) {
  this.power = 1.0;
  this.position = createVector(x, y);
  var colour = c;

  this.display = function() {
    stroke(255);
    strokeWeight(2);
    fill(colour);
    ellipse(this.position.x, this.position.y, 32, 32);
  };

  this.repel = function(p) {
    var dir = p5.Vector.sub(this.position, p.position); // Calculate direction of force
    var d = dir.mag();                                // Distance between objects
    dir.normalize();                                  // Normalize vector (distance doesn't matter here, we just want this vector for direction)
    d = constrain(d, 1.0, 20);                         // Keep distance within a reasonable range
    var force = 1.0 * this.power/ (d * d);             // Repelling force is inversely proportional to distance
    dir.mult(force);                                  // Get force vector --> magnitude * direction
    return dir;
  };

  this.update = function(x, y, z) {
    this.position = createVector(x, y);
    this.power = this.power + z;
  }
};