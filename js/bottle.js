class Bottle {
    constructor(x, y, width, height) {
        var options = {
            restitution: 0.8,
            friction: 1.0,
            density: 1.0,
        };

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("assets/bottle.png");

        World.add(world, this.body);
    }

    display() {

        push();
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
        noTint();
        pop();
    }

    remove(index) {
        Matter.World.remove(world, bottles[index].body)
        bottles.splice(index, 1)
    }
}
