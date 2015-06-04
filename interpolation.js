//tabt=[1,2,3,4];
  //tabP=[2,2,4,7]; 

  tabt=[0,10,20,30,40,50,60];
  tabP=[7,12,13,14,10,21,12];

  function reg(tabt,tabP) {
   

  //console.log(tabt,tabP);
  x=[];
  y=[]; 
  for(i=0;i<tabt.length;i++){     
      x[i]=Math.log(tabt[i]);
        
  }
  for(i=0;i<tabP.length;i++){     
      y[i]=Math.log(tabP[i]);     
  }
  n=x.length;
    
  //Moyennes
  moyx=0.;
  moyy=0.;    
  for (i=0;i<n;i++){
  moyx=moyx + x[i];
  moyy=moyy + y[i];
  }
  moyx=moyx/n;
  moyy=moyy/n;
    
  //Variances
  varx=0.;
  vary=0.;
    
  for (i=0;i<n;i++){
      varx=varx + ( (x[i] - moyx)*(x[i] - moyx) );    
      vary=vary + ( (y[i] - moyy)*(y[i] - moyy) );
  }
  varx=varx/n;
  vary=vary/n;
    
  //Covariance
  covxy=0.;
      for (i=0;i<n;i++){
      covxy=covxy + ( (x[i] - moyx)*(y[i] - moyy) );
  }
  covxy=covxy/n;    
  //console.log(covxy);
  //console.log(varx);
  
  //Coefficient de corrélation
  corrxy=covxy / (Math.sqrt(varx) * Math.sqrt(vary) );
  //console.log("y"+moyy);
  //console.log("x"+moyx);
    
  //Droite de régression linéaire    
  a=covxy / varx;
  //console.log("a"+a);
  b=moyy - a*moyx;
  //console.log("b"+b); 
   
  for (i=0;i<n;i++){
      tabP[i]=a*tabt[i] + b;
  }    
       
  }


  reg(tabt,tabP);
  console.log(tabt);
  console.log(tabP);



	/*function form(x) {
	    a=2;
	    b=5;
	    y=a*x+b;
	    console.log(y);
	}
  */
