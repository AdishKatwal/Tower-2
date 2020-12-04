class Rope{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.1,
            length: 25
        }
        this.pointB = pointB;
        this.constraint = Constraint.create(options);
        World.add(world,this.constraint);
    }
    fly(){
        this.constraint.bodyA = null;
    }
    attached(body){
        this.constraint.bodyA=body;
    }
    display(){
        if(this.constraint.bodyA){
        var bodyA = this.constraint.bodyA.position;
        var pointB = this.pointB;
        push();
        strokeWeight(5);
        stroke("white");
        line(pointB.x,pointB.y,bodyA.x,bodyA.y);
        pop();
        }
        
    }
}