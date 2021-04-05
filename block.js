class block extends BaseClass
{
    constructor(x, y,width,height)
    {
      super(x,y,30,40);
      
    }
  display()
  { 
    push();
    fill("yellow");
    var pos =this.body.position;
    rectMode(CENTER);
    rect(pos.x, pos.y, this.width, this.height);
    if(this.body.speed)
    {
      super.display();
    }
    else
    World.remove(world,this.body) ;
  
  }
  };
  