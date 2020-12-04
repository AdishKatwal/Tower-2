class Box{
    constructor(x,y,width,height){
      
        var options = {
            isStatic: false,
            density: 0.05,
            restitution: 0.8,
            friction: 1.0
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height=height;
        World.add(world,this.body);
        this.Visibility = 255;
    }
    display(){
      if(this.body.speed<8){
        var angle;
        var pos = this.body.position;
        angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
    
        strokeWeight(3);
        stroke("white");
        
        fill("blue");
        rect(0,0,this.width,this.height);
        pop();
      }
      else{
        World.remove(world,this.body);
        push();
        this.Visibility=this.Visibility-5;
        pop();
      }
    }
}