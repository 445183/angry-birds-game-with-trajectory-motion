class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("bird.png");
    this.trajectory=[];
    this.smokeimage= loadImage("smoke.png");
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();

    if(this.body.speed>11.5 && this.body.position.x>200){
        var pos=[this.body.position.x,this.body.position.y];
        this.trajectory.push(pos); 
    }   
        for(var i=0;i<this.trajectory.length;i+=2) {
          image(this.smokeimage,this.trajectory[i][0],this.trajectory[i][1])
        }
    
    
  }
}
