var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
    
    
    // Robot  
    var myRobot = {
        x: 90,
        y: 90,
        width: 20,
        height: 20,
        borderWidth: 0.5
    }; 
    
    function drawRobot(myRobot, ctx) {
          
          ctx.beginPath();

          ctx.rect(myRobot.x, myRobot.y, myRobot.width, myRobot.height);

          ctx.fillStyle = '#8ED6FF';
          
          ctx.fill();

          ctx.lineWidth = myRobot.borderWidth;
          ctx.strokeStyle = 'silver';
          ctx.stroke();
    }

    function drawRobotic(x,y,w,h) {
          
          ctx.beginPath();

          ctx.rect(x,y,w,h);

          ctx.fillStyle = '#8ED6FF';
          
          ctx.fill();

          ctx.lineWidth = myRobot.borderWidth;
          ctx.strokeStyle = 'silver';
          ctx.stroke();
    }

    function drawPath() { 
    //Angles arrondis
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    //Circuit
    a=100;  
    A=100;  
    b=300;
    B=100;
    //c=350;
    //C=200;
    /*d=
    D=
    e=
    E=
    fF
    gG
    */
    ctx.beginPath();
    ctx.moveTo(a,A);
    ctx.lineTo(b,B);
    //ctx.lineTo(c,C);
    //ctx.lineTo(x1,y2);
    //ctx.lineTo(x1,y1);
    ctx.lineWidth = 5;
    ctx.strokeStyle = "silver";
    
    ctx.stroke();
    }
    
    function drawCheckpoint(){
    //checkpoint
    ctx.beginPath();
    ctx.strokeStyle = "red";
    

    ctx.arc(150,100,1,1,Math.PI*2,true);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(200,100,1,1,Math.PI*2,true); 
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(250,100,1,1,Math.PI*2,true); 
    ctx.stroke();
    /*
    ctx.beginPath();
    ctx.arc(250,85,1,1,Math.PI*2,true); 
    ctx.stroke();
    
    
    ctx.beginPath();
    ctx.arc(210,120,1,1,Math.PI*2,true); 
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(160,120,1,1,Math.PI*2,true); 
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(110,120,1,1,Math.PI*2,true); 
    ctx.stroke();

    
    ctx.beginPath();
    ctx.arc(50,85,1,1,Math.PI*2,true); 
    ctx.stroke();
    
    
    */}
    
    //var image = new Image(); 
    //image.src = '/img/car.png';
    
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
      
      
      ctx.beginPath();
      ctx.strokeStyle = "green";
      ctx.arc(x,y,1,1,Math.PI*1,true);
      ctx.stroke();

    }


    function drawCloud(tabt,tabP){// xscale/yscale,position abscisse/ordonnée du robot
        
       /*for(i=0;i<=5;i++) {
        signe=Math.round(Math.random()) * 2 - 1;
        r=Math.random()*5;      // décalage   
        py=y-25+(signe*r);      //position du point capté
        r=Math.random()*15;
        px=x+r;
        ctx.fillRect(px,py,2,2);  //position,taille
        
        }*/

        //Affiche le nuage à partir des coordonnées récupérés de la bdd pour une position donnée
        
        ctx.save();
        ctx.translate ( 125 ,  30 ); 
        

        for(i=0;i<=tabt.length;i++){
          drawPoint(tabt[i],tabP[i]);
        }

        ctx.restore();
      
    }

    
    function drawLine(x,y)
  {
      ctx.save();
      ctx.translate ( 125 ,  30 );
      ctx.beginPath();
      
      for(i=0;i<=tabt.length;i++){

          ctx.moveTo(x[i],y[i]);   // x et y du premier point
          ctx.lineTo(x[i+1],y[i+1]);// x et y du deuxième point
          ctx.stroke();
        }
        ctx.restore();
        
  }
  

  //drawLine(140,90);
      
    window.requestAnimFrame = (function(callback) {
          return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
          function(callback) {
            window.setTimeout(callback, 1000 / 60);
          };
        })();
    
    drawCloud(150,100);
    drawCloud(200,100);
    drawCloud(250,100);
    
        
    function animate(myRobot, canvas, ctx, startTime) {
          // update
          var time = (new Date()).getTime() - startTime;
          // pixels / second
          var linearSpeed = 0.5;
          x1=140;
          y1=90;
          
          if(myRobot.x <290 && myRobot.y == 90) { //TOP
             
             if(myRobot.x ==x1 
              //||
              //myRobot.x==190 
              //|| 
              //myRobot.x==240
              && myRobot.y ==y1) {
                
                //var cx     = x1 + 1 * myRobot.width;   // x du centre de la figure
                //var cy     = y1 + 1* myRobot.height;  // y du centre de la figure
                
                //tabt=[0,10,20,30,40,50,60];
                //tabP=[7,12,13,14,10,21,12];
                drawCloud(tabt,tabP);
                drawLine(tabt,tabP);

                /*var cx     = 140 + 0.5* myRobot.width;   // x du centre de la figure 
                var cy     = 90 + 0.5* myRobot.height;  // y du centre de la figure
                //ctx.fillRect(x1, y1, myRobot.width, myRobot.height);  //draw normal shape
                ctx.translate(200, 100);              //translation du centre de la figure par rapport à l'origine
                
                //ctx.rotate( (Math.PI / 180) * 25);  //rotation de 25 degres
                ctx.clearRect(0,0,400,400);
                ctx.translate(-cx, -cy);            //translation du centre retour au 0,0
                ctx.fillRect(x1, y1, myRobot.width, myRobot.height);    
                */
                //Stoppe le robot, affiche le nuage, puis redemarre
                //console.log("Collecte de donnees veullez patienter ...");
                //drawCloud(140,90);

                //ctx.beginPath;
                
                //ctx.rotate((Math.PI / 180) * 25);
                
                
                //drawRobotic(151,90,20,20);
                
                animate(myRobot, canvas, ctx, startTime);
                     
               }else
               myRobot.x +=linearSpeed;
          }
          /*else if(myRobot.x ==290 && myRobot.y <115) { //RIGHT
              myRobot.y +=linearSpeed;
          }else if(myRobot.x >45 && myRobot.y ==115) { //BOTTOM
            myRobot.x -=linearSpeed;
          }else if(myRobot.x ==45 && myRobot.y >=45) {LEFT
            myRobot.y -=linearSpeed;
          }
          else if(myRobot.x==250 && myRobot.y<=50) {
          myRobot.y +=10;
          drawPath();
          drawPointsDarret();
          }*/ 
          
          //Dessin supprimé durant l'animation (attention à l'odre)
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          
          //Dessin à afficher durant l'animation
          drawRobot(myRobot, ctx);
          drawPath();
          drawCheckpoint();
          
          //Permet l'Animation
          requestAnimFrame(function() {
            animate(myRobot, canvas, ctx, startTime);
          });
      }  //Fin fonction animate

    //Initialisation du canvas
    drawRobot(myRobot, ctx);
    drawPath();
    drawCheckpoint();
  
      // Temps avant début de l'Animation
	   setTimeout(function() {
        var startTime = (new Date()).getTime();
        animate(myRobot, canvas, ctx, startTime);
        }, 2000);
