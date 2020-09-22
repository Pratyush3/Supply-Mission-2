class Box{
    constructor(x,y,width,height){
        var op = {
            isStatic : true
        }
        this.body = Bodies.rectangle(x,y,width,height,op);
        this.w = width;
        this.h = height;
        World.add(world,this.body);
        console.log(this.body);
    }

    display(){
        
        var po = this.body.position;

        push();
        translate(po.x,po.y);

        rectMode(CENTER);
       fill("red");
       rect(0,0,this.w,this.h);
       pop();






    }







}
    
