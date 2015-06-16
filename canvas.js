var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
    
    
    // Robot  
    var myRobot = {
        x1: 30,  
        y1: 145,

        x2: 90,
        y2: 410,

        x3: 350,
        y3: 345,

        x4: 290,
        y4: 90,

        x:[30,90,350,290],
        y:[145,410,345,90],

        width: 20,
        height: 20,
        borderWidth: 1
    
    }; 

   
    
 X1=[13,9,18,15,7,12,13,14,10,21,12,3,9,11,7,9,5];
    Y1=[-200,-175,-150,-125,-100,-75,-50,-25,0,25,50,75,100,125,150,175,200];
    
    X2=[-200,-175,-150,-125,-100,-75,-50,-25,0,25,50,75,100,125,150,175,200];
    Y2=[13,9,18,15,7,12,13,14,10,21,12,3,9,11,7,9,5];
    
    
    X3=[13,9,18,15,7,12,13,14,10,21,12,3,9,11,7,9,5]; 
    Y3=[-200,-175,-150,-125,-100,-75,-50,-25,0,25,50,75,100,125,150,175,200];

X4=[-200,-175,-150,-125,-100,-75,-50,-25,0,25,50,75,100,125,150,175,200];
Y4=[13,9,18,15,7,12,13,14,10,21,12,3,9,11,7,9,5];

    


    
    function drawRobot(myRobot, ctx) {
          
          ctx.beginPath();

          //ctx.rect(myRobot.xi, myRobot.yi, myRobot.width, myRobot.height);
          

          //if(){
          ctx.rect(myRobot.x1, myRobot.y1, myRobot.width, myRobot.height);
         //}
         //else if(){
          ctx.rect(myRobot.x2, myRobot.y2, myRobot.width, myRobot.height);
        //}else if(){
          ctx.rect(myRobot.x3, myRobot.y3, myRobot.width, myRobot.height);
        //}else if(){
          ctx.rect(myRobot.x4, myRobot.y4, myRobot.width, myRobot.height);
        //}
          
          

          ctx.fillStyle = '#8ED6FF';
          
          ctx.fill();

          ctx.lineWidth = myRobot.borderWidth;
          ctx.strokeStyle = 'silver';
          ctx.stroke();
    }

    /*function drawRobotic(x,y,w,h) {
          
          ctx.beginPath();

          ctx.rect(x,y,w,h);

          ctx.fillStyle = '#8ED6FF';
          
          ctx.fill();

          ctx.lineWidth = myRobot.borderWidth;
          ctx.strokeStyle = 'silver';
          ctx.stroke();
    }*/

    function drawPath() { 
    //Angles arrondis
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    z=10 //Ecart avec les coordonnées du robot et des checkpoints

    //Circuit
    a=90+z;  A=90+z;  
    b=290+z; B=90+z;

    c=338;   C=125;

    d=350+z; D=145+z;
    e=350+z; E=345+z;

    f=338;   F=395;

    g=290+z; G=410+z;
    h=90+z;   H=410+z;

    i=62;    I=395;

    j=30+z;    J=345+z;
    k=30+z;    K=145+z;

    l=62;    L=125; 
    
    ctx.beginPath();
    ctx.moveTo(a,A);
    ctx.lineTo(b,B);
    ctx.lineTo(c,C);
    ctx.lineTo(d,D);
    ctx.lineTo(e,E);
    ctx.lineTo(f,F);
    ctx.lineTo(g,G);
    ctx.lineTo(h,H);
    ctx.lineTo(i,I);
    ctx.lineTo(j,J);
    ctx.lineTo(k,K);
    ctx.lineTo(l,L);
    ctx.lineTo(a,A);
    ctx.lineWidth = 10;
    ctx.strokeStyle = "black";
    
    ctx.stroke();
    }
    
    function drawCheckpoint(){
    
    //TOP 
    ctx.strokeStyle = "rgb(50,255,50)";
    /*ctx.beginPath();ctx.arc(150,100,1,1,Math.PI*2,true);ctx.stroke();*/
    ctx.beginPath();
    //ctx.arc(200,100,1,1,Math.PI*2,true);
    ctx.rect(200,100,2,2); //200&99
    ctx.stroke();
    /*ctx.beginPath();ctx.arc(250,100,1,1,Math.PI*2,true);ctx.stroke();*/
    
    //RIGHT
    /*ctx.beginPath();ctx.arc(358,210,1,1,Math.PI*2,true);ctx.stroke();*/
    ctx.beginPath();
    //ctx.arc(358,260,1,1,Math.PI*2,true); 
    ctx.rect(360,255,2,2); //357&260
    ctx.stroke();
    /*ctx.beginPath();ctx.arc(358,310,1,1,Math.PI*2,true); ctx.stroke();*/
    
    //BOTTOM
    /*ctx.beginPath();
    ctx.arc(150,420,1,1,Math.PI*2,true); 
    ctx.stroke();*/
    ctx.beginPath();
    //ctx.arc(200,420,1,1,Math.PI*2,true);
    ctx.rect(200,420,2,2);  //200&419
    ctx.stroke();
    /*ctx.beginPath();ctx.arc(250,420,1,1,Math.PI*2,true);ctx.stroke();*/

    //LEFT
    /*ctx.beginPath();ctx.arc(42,210,1,1,Math.PI*2,true);ctx.stroke();*/
    ctx.beginPath();
    //ctx.arc(42,260,1,1,Math.PI*2,true);
    ctx.rect(40,255,2,2);  
    ctx.stroke();
    /*ctx.beginPath();ctx.arc(42,310,1,1,Math.PI*2,true);ctx.stroke();*/
    
    }
    
    
    /*
    image.onload = function() {
    // Cette fonction est appelée lorsque l'image a été chargée
    ctx.drawImage(this,20,20); // this fait référence à l'objet courant (=image)
    };*/
    
    //Time
    /*var text = 'Go!';
    ctx.font = "20pt Verdana";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    var textPxLength = ctx.measureText(text);
    ctx.fillStyle = "blue";
    ctx.fillText(text,100,80);
    */
    
    function drawPoint(x,y){//x et y de la bdd
      
      //console.log("point");
      ctx.beginPath();
      ctx.strokeStyle = "green";
      ctx.arc(x,y,1,1,Math.PI*1,true);

      ctx.stroke();

    }


    function drawCloud(X,Y,ox,oy){// xscale/yscale,position abscisse/ordonnée du robot
        //Simulation de points aléatoires
       /*for(i=0;i<=5;i++) {
        signe=Math.round(Math.random()) * 2 - 1;
        r=Math.random()*5;      // décalage   
        py=y-25+(signe*r);      //position du point capté
        r=Math.random()*15;
        px=x+r;
        ctx.fillRect(px,py,2,2);  //position,taille
        
        }*/
        //console.log("cloud");
        //Affiche le nuage à partir des coordonnées récupérés de la bdd pour une position donnée
        ctx.save();
        ctx.translate ( ox, oy ); 
        for(i=0;i<=X.length;i++){
          drawPoint(X[i],Y[i]);
        }
        ctx.restore();
    }

    
    function drawLine(x,y,ox,oy)
  {
      //console.log("line");
      ctx.save();
      ctx.translate (ox,oy);
      ctx.beginPath();
      
      for(i=0;i<=x.length;i++){

          ctx.moveTo(x[i],y[i]);   // x et y du premier point
          ctx.lineTo(x[i+1],y[i+1]);// x et y du deuxième point
          ctx.stroke();
        }
        ctx.restore();
        
  }
  

      
    window.requestAnimFrame = (function(callback) {
          return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
          function(callback) {
            window.setTimeout(callback, 1000 / 60);
          };
        })();
    

    function collect(x,y){ //origine de la rotation
        console.log("Collecte de donnees veullez patienter ...");
        
        ctx.save();
        



        //changer d'échelle
        ctx.translate (x,y);
        
        //Rotation
        ctx.beginPath();
        ctx.rotate(Math.PI / 180); 
        
        
         /* var cx     = x -0.5* myRobot.width;// x du centre de la figure
          var cy     = y+2* myRobot.height;  // y du centre de la figure

              
                  
          
          ctx.translate(-cx,-cy);            //translation du centre retour au 0,0

          ctx.fillRect(myRobot.x4,myRobot.y4, myRobot.width, myRobot.height); 
          ctx.stroke();


          
          ctx.translate(200, 100);              //translation du centre de la figure par rapport à l'origine
                
          
         */
          // Move registration point back to the top left corner of canvas
  ctx.translate(-x, -y);
  
  ctx.fillStyle = "red";
  ctx.fillRect(x, y, x/2, y/2);
  ctx.fillStyle = "blue";
  ctx.fillRect(x, y, x/2, y/2);
               
        setInterval(collect,100);
        ctx.fillRect(x1, y1, myRobot.width, myRobot.height);  //draw normal shape
       ctx.restore();
        //Clear 

    }


                        
                
        //xs = 90;
       // ys = 90;
             // xs=30; //xs=50
              //ys=345; //ys=105
        //myRobot.x1=30;
        //myRobot.y1=345;
    function animate(myRobot, canvas, ctx, startTime,data) {/*,runAnimation*/
        /*var runAnimation = {
        value: false
        };

        //if(runAnimation.value) {*/  
          // update
          var time = (new Date()).getTime() - startTime;
          // pixels / second
          var linearSpeed = 1.5;
          

                 
               
              /*
              
              function diag() {
                console.log("coucou");
                    dx = -0.003; 
                    dy = +0.005;

                    
                    console.log(ys);
                    
                    //xs=50; //xs=50
                    //ys=105; //ys=105
                    console.log(ys);
                    
                    xe = 35;
                    ye = 145;
                      

                  ctx.clearRect(0, 0, 500, 500);
                  drawPath();
                  drawCheckpoint();
                  ctx.fillStyle = 'silver';
                  ctx.fillRect(xs,ys, 20, 20); 

                  xs+= dx;
                  //console.log(xs);
                  ys+= dy;
                  
                  while (xs > xe/*|| xs > startPos[0] ||
                      ys < endPos[1] || ys > startPos[1] *//*) {
                    
                  
                      dx = +dx;
                      dy = +dy;   
                  }
                  setTimeout(diag, 300);
               }
               diag();
              */
                 
                if((myRobot.x1 == 30 && myRobot.y1>=145 && myRobot.y1<=244) ||
                   (myRobot.x1 == 30 && myRobot.y1>=246 && myRobot.y1<=345) ){ //LEFT
                    //ctx.clearRect(0,0,500,500);
                    //ctx.beginPath();
                    //ctx.fillRect(xe,ye, 20, 20);
                    //ctx.stroke();                    
                  myRobot.y1 +=linearSpeed;
                   //console.log(myRobot.y1);
                     if (myRobot.x1==30 && myRobot.y1==244) {
                      
                    console.log("checkpoint1");
                    //Etape 3 : Afficher les points
                    //drawCloud(data.Xi,data.Yi,0,245);
                    drawCloud(X1,Y1,0,245);
      
                    //Etape 4 : Afficher la courbe
                    drawLine(X1,Y1,0,245);
                    //drawLine(data.Xi,data.Yi,0,245);
                    setTimeout(function(){
                      myRobot.y1++;
                      //console.log(myRobot.y3);
                    },5000);
                    

                    };
                    console.log(myRobot.x1);
                    console.log(myRobot.y1);

                }else if(myRobot.x1==30 && myRobot.y1==345.5){
                 /* function diagonale(myRobot) {
                    dx = -0.005; 
                    dy = +0.003;

                    xe = 70;
                    ye = 360;  

                  //ctx.clearRect(0, 0, 500, 500);
                  //drawPath();
                  //drawCheckpoint();
                  //ctx.fillStyle = 'silver';
                  ctx.fillRect(myRobot.x1,myRobot.y1, 30, 30); 
                  console.log("diag");
                  myRobot.x1+=dx;
                  //xs+= dx;
                  //console.log(xs);
                  myRobot.y1+=dy;
                  //ys+= dy;
                  
                  while (myRobot.x1 <= xe/*|| xs > startPos[0] ||
                      ys < endPos[1] || ys > startPos[1] *//*) {
                    
                  
                      dx = +dx;
                      dy = +dy;   
                  }
                  setTimeout(diagonale, 100);
               }
                diagonale();
                */
                }else if((myRobot.x2<=189 && myRobot.x2>=90 && myRobot.y2==410)  ||
                         (myRobot.x2<=290 && myRobot.x2>=191 && myRobot.y2==410) ){ //BOTTOM
                 
                  myRobot.x2 +=linearSpeed;

                  //console.log(myRobot.x2);
                     if (myRobot.x2==189 && myRobot.y2==410) {
                      
                    console.log("checkpoint2"); 
                    //Etape 3 : Afficher les points
                    drawCloud(X2,Y2,190,440);
                     
          
                    //Etape 4 : Afficher la courbe
                    drawLine(X2,Y2,190,440);       
                  
                    setTimeout(function(){
                      myRobot.x2++;
                      //console.log(myRobot.x2);
                    },5000);
                    };   
                }else if((myRobot.x3==350 && myRobot.y3<=345 && myRobot.y3>246) ||
                         (myRobot.x3==350 && myRobot.y3<=245 && myRobot.y3>145)  ){ //RIGHT
                
                    myRobot.y3 -=linearSpeed;
                    //console.log(myRobot.y3);
                     if (myRobot.x3==350 && myRobot.y3==246) {
                      
                    console.log("checkpoint3");
                    
                  //Etape 3 : Afficher les points
                    drawCloud(X3,Y3,380,245);
                      
          
      
                    //Etape 4 : Afficher la courbe
                    drawLine(X3,Y3,380,245);

                    setTimeout(function(){
                      myRobot.y3--;
                      //console.log(myRobot.y3);
                    },5000);
                    

                    };   

                }
                 else if( (myRobot.x4<=290 && myRobot.x4>191 && myRobot.y4==90)|| 
                          (myRobot.x4<=190 && myRobot.x4>90 && myRobot.y4==90) ) { //TOP
                    myRobot.x4 -=linearSpeed;
                  //console.log(myRobot.x4);
                    if (myRobot.x4==191 && myRobot.y4==90) {
                      //collect(myRobot.x4,myRobot.y4);
                    console.log("checkpoint4");
                    
                    
                    //Etape 3 : Afficher les points
                    drawCloud(X4,Y4,190,60);
      
                    //Etape 4 : Afficher la courbe
                    drawLine(X4,Y4,190,60);


                    setTimeout(function(){
                      myRobot.x4--;
                      //console.log(myRobot.x4);
                    },5000);
                    

                    };   
   
                }
                else if(myRobot.x4==90 && myRobot.y4==90){
                  //console.log("diag");
                  //setTimeout(function(){
                    //diagonale();
                  //},2000);
                  
                
                }
                


          //Dessin supprimé durant l'animation (attention à l'odre)
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          
          //Dessin à afficher durant l'animation
          //For Linear Speed
          
          drawPath();
          drawCheckpoint();
          drawRobot(myRobot, ctx); 
          

          drawCloud(X1,Y1,0,245);
          //drawCloud(data.Xi,data.Yi,0,245);
          drawCloud(X2,Y2,190,440);
          drawCloud(X3,Y3,380,245);
          drawCloud(X4,Y4,190,60);

          drawLine(X1,Y1,0,245);
          //drawLine(data.Xi,data.Yi,0,245);
          drawLine(X2,Y2,190,440);
          drawLine(X3,Y3,380,245);
          drawLine(X4,Y4,190,60);
          

          //Permet l'Animation
           requestAnimFrame(function() {
            animate(myRobot, canvas, ctx, startTime,data);/*,runAnimation*/
          });
          
      }  //Fin fonction animate

    //Initialisation du canvas
    
    drawPath();
    drawCheckpoint();
    drawRobot(myRobot, ctx);

    //ctx.fillRect(xs,ys,20,20);

    
  
      // Temps avant début de l'Animation
	   setTimeout(function() {
        var startTime = (new Date()).getTime();
        animate(myRobot, canvas, ctx, startTime);
        }, 2000);
