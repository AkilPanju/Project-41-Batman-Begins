class Umbrella
{
    constructor(x,y,radius)
    {
        this.body = Bodies.circle(x,y,radius);
        this.image = loadImage("images 2/Walking Frame/walking_1.png");
    }

    display() 
    {
        image(this.image,200,300,500,500);
    }
}