class Rope{
constructor(bodyA,pointB){
    var option={
              bodyA:bodyA ,
              pointB:pointB,
              stiffness:0.4,
              length:200
            
    }
    this.pointB=pointB
this.chain=Constraint.create(option)
World.add(world,this.chain)

}
display(){
    strokeWeight(5);
    stroke("white");
line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.pointB.x,this.pointB.y)

}
}
