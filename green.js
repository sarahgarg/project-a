class green extends BaseClass
{
    constructor(x, y,width,height)
    {
      super(x,y,30,40);
      
    }
  display()
  { 
    fill("green");
    var pos =this.body.position;
    rectMode(CENTER);
    rect(pos.x, pos.y, this.width, this.height);
    if(this.body.speed<3){
    super.display();
    }
    else
    World.remove(world,this.body);
  }
  };