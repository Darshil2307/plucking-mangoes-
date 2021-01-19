class Chain{
constructor(bodyA,pointB){
    var options = {
        bodyA : bodyA,
        pointB : pointB,
        stiffness : 0.04,
        length : 10,
    }
this.bodyA = bodyA;
    this.pointB = pointB;
    this.chain = Constraint.create(options);
    World.add(world,this.chain);
}
fly(){
this.chain.bodyA=null;
}

attach(body){
    this.chain.bodyA = body;
}
display(){

if(this.chain.bodyA){
    push();
    var pointA = this.chain.bodyA.position;
    var pointB = this.pointB;
    strokeWeight(4);
    stroke(48,22,8);
    fill("black");
    line(pointA.x, pointA.y, pointB.x, pointB.y);
    pop();
}
}

} 