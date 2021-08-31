  var satelitte, satelitteImg;
  var earth, earthImg;
  var groundStationLeft, groundStationRight;
  var groundStationLeftImg, groundStationRightImg;
  var upLinkLeft, upLinkLeftImg;
  var dLinkLeft, dLinkLeftImg;
  var upLinkright, upLinkrightImg;
  var dLinkright, dLinkrightImg;


  function preload(){
  // satelite image
  satelitteImg = loadImage("other/satellite.png");
    
  // earth image
  earthImg=loadImage("other/earth1.png");
  // ground stations
  groundStationLeftImg=loadImage("other/gstation1.png");
  groundStationRightImg=loadImage("other/gstation2.png");
  // up links of right and left           
upLinkLeftImg=loadAnimation("leftu/upleft1.png","leftu/upleft2.png","leftu/upleft3.png","leftu/upleft4.png","leftu/upleft5.png", "leftu/upleft6.png","leftu/upleft7.png","leftu/upleft8.png");
    
upLinkrightImg=loadAnimation("rightu/upright1.png","rightu/upright2.png","rightu/upright3.png","rightu/upright4.png","rightu/upright5.png","rightu/upright6.png","rightu/upright7.png","rightu/upright8.png")
    
  // down links of ridht and left
dLinkLeftImg=loadAnimation("leftd/dleft1.png","leftd/dleft2.png","leftd/dleft3.png","leftd/dleft4.png","leftd/dleft5.png","leftd/dleft6.png","leftd/dleft7.png","leftd/dleft8.png","leftd/dleft9.png")
                           
dLinkrightImg=loadAnimation("rightd/dright1.png","rightd/dright2.png","rightd/dright3.png","rightd/dright4.png","rightd/dright5.png","rightd/dright6.png","rightd/dright7.png","rightd/dright8.png")
    
  }

  function setup(){
  createCanvas(700,500);
    
   earth = createSprite(350,820,20,50); 
   earth.addImage("earth",earthImg);
   earth.scale = 0.6;
    
    
  // satelite image
  satelitte = createSprite(350,70,20,50);
  satelitte.addImage("center", satelitteImg);
  satelitte.scale = 0.09;
  //groundStationLeft
  groundStationLeft= createSprite(90,390,20,50);
  groundStationLeft.addImage("station1",groundStationLeftImg)
  groundStationLeft.scale=0.05
    
  //groundStationRight  
  groundStationRight= createSprite(630,390,20,50);
  groundStationRight.addImage("station2",groundStationRightImg)
  groundStationRight.scale=0.05
  
  //UP LINK LEFT
  dLinkLeft= createSprite(200,260,20,50);
  dLinkLeft.addAnimation("linkleftup",dLinkLeftImg)
  dLinkLeft.scale=0.07
 
        
  //up right link
  dLinkright = createSprite(500,260,20,50);
  dLinkright.addAnimation("linkrightup",dLinkrightImg)
  dLinkright.scale=0.07
 
  // dowm left link
  upLinkLeft= createSprite(200,260,20,50);
  upLinkLeft.addAnimation("linkleftd",upLinkLeftImg)
  upLinkLeft.scale=0.07
  //dLinkLeft.visible = false;
  // dowm right link
  upLinkright = createSprite(500,260,20,50);
  upLinkright.addAnimation("linkrightd",upLinkrightImg)
  upLinkright.scale=0.07
}

function draw(){
  background("black")
  // INFORMATION IN GAME
  textSize(15)
  text("Press L & R keys",10,20)
  text("- to request data from satellite",10,35)
  text ("press Left & right arrow keys",10,50)
  text("-to recive data from satellite",10,65)
  //visiblity
  dLinkLeft.visible = false;
  dLinkright.visible = false;
  upLinkLeft.visible = false;
  upLinkright.visible = false;
  // requesting data from sattelite
  if(keyDown("l")) {
     
     upLinkLeft.visible = true;
     
     
}
  if(keyDown("r")) {
     
     upLinkright.visible = true;
     
}
  
 if(keyDown("LEFT_ARROW")) {
     
     dLinkLeft.visible = true;
     
} 
  
  if(keyDown("RIGHT_ARROW")) {
     
      dLinkright.visible = true;
     
} 
  
    
   drawSprites();
  textSize(15)
  fill("white")
  if(keyDown("l")) {
     
   text("requesting data from satellitte",10,300)
     
     
}
  
  if(keyDown("r")) {
     
   text("requesting data from satellitte",300,300)
     
     
}
  
  if(keyDown("LEFT_ARROW")) {
     
   text("transffeing data TO left base station",10,300)
     
     
}
  
  if(keyDown("RIGHT_ARROW")) {
     
   text("transffeing data TO right base station",390,300)
     
     
}
  
  
  
  
}






































































































































































































































































































































































































































































































































































































































































































































