class Ball{
    constructor(x,y,r){
      
        var options = {
            isStatic: false,
            density: 0.1
        }

        this.body = Bodies.circle(x,y,r,options);
        this.r = r
        this.image = loadImage("polygon.png");
        World.add(world,this.body);
        
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        strokeWeight(3);
        stroke("white");
        fill("green");
        ellipse(0,0,this.r);
        imageMode(CENTER)
        image(this.image,-5,0,245,245);
        pop();
    }
}
