class Drops
{
    constructor(x,y,radius)
    {
        var options = 
    {
        restitution:1
    }
        this.body = Bodies.circle(x,y,radius,options);
        this.x = x;
        this.y = y;
        this.radius = radius;
        World.add(world,this.body);
    }

    display() 
    {
        fill("blue");
        circle(this.body.position.x,this.body.position.y,this.radius);

    }

    update() 
    {
        if(this.body.position.y >= 600) 
        {
            Matter.Body.setPosition(this.body,{x:random(1,999),y:random(1,3)});
        }
    }










}