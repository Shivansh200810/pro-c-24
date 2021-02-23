class Hammer{
    constructor(x,y,width,height){
  
    var options={
       'friction':1,
       'density':2,
   'restitution':0.5
    }
     this.body=Bodies.rectangle(x,y,width,height,options)
     World.add(world,this.body)
     this.w=width
     this.h=height
     }
     display(){
    var pos=this.body.position 
    pos.x=mouseX
    pos.y=mouseY

    push()
  fill('red')
    translate(pos.x,pos.y)
    rect(0,0,this.w,this.h)
    pop()
    }
        
    }