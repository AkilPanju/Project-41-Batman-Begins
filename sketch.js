const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var thunder1,thunder2,thunder3,thunder4,drops,umbrella,drop = [],maxDrops;

function preload(){
    thunder1 = loadImage("images 2/thunderbolt/1.png");
    
}

function setup(){
    engine = Engine.create();
    world = engine.world;
    

   var canvas = createCanvas(1000,1000);
    umbrella = new Umbrella(150,600,10);
   maxDrops=100;
   for(var i=0; i<maxDrops; i++)
   {
       drop.push(new Drops(random(0,400), random(0,400),20));
   }
    
}

function draw(){
    background(rgb(0,0,0));
    Engine.update(engine);
    umbrella.display();
    for(var i=0; i<maxDrops; i++)
   {
       drop[i].display();
       console.log(drop[i].body.position);
       drop[i].update();
   }

    if(frameCount >= 1)
    {
        image(thunder1);
    }

}   

