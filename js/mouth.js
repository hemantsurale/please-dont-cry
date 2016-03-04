
/* 
*	Kauã Melo - 02/28/2016
*	Fortaleza - Brasil
*	virtual.kaua@gmail.com
*
*	www.kauamelo.com
*/



function mouth_l()
{
	// Variable which determines the mouth's mood
	var hM = map (h, -100, 0, 60, 0);

	// transition point from the first 
	// part of the movement to the second one
	var t = 20; 

	translate(0, 195);

  	fill(mouthColor);
	
	// First part of the movement 
	if(hM < t) 
	{
  		ellipse(0, - hM/4, 25 + hM, 35);
	}
	// Second part of the movement
	else 
	{
		var _a = 25 + t;
		var _b = 35;
	 
		var teta = 30;
		var x1 = sqrt( ( _a*_a*_b*_b )/( 4*( _b*_b + _a*_a*tan(radians(teta))*tan(radians(teta)) ) )  );
		var y1 = tan(radians(teta))*x1;

		var factor = -(t -hM)/(60-t); // Goes from 0 to 1 according to hM

		var p1  = createVector(                   0, -t/4 - 17.5 - factor*25);
		var p2  = createVector(      x1 + factor*20,     -y1 -t/4 -factor*28);
		var p3  = createVector( (25+t)/2 +factor*58,         -t/4 -factor*28);
		var p4  = createVector(      x1 + factor*25,     y1 -t/4 + factor*24);
		var p5  = createVector(                   0, -t/4 + 17.5 + factor*28);
		var p6  = createVector( -p4.x, p4.y);
		var p7  = createVector( -p3.x, p3.y);
		var p8  = createVector( -p2.x, p2.y);

		beginShape();
			curveVertex(p1.x, p1.y);  	
			curveVertex(p2.x, p2.y);  	
			curveVertex(p3.x, p3.y);  	
			curveVertex(p4.x, p4.y);  	
			curveVertex(p5.x, p5.y);  	
			curveVertex(p6.x, p6.y);  	
			curveVertex(p7.x, p7.y);  	
			curveVertex(p8.x, p8.y); 

			curveVertex(p1.x, p1.y);  	
			curveVertex(p2.x, p2.y);  	
			curveVertex(p3.x, p3.y); 
		endShape(); 
	}
	translate(0, -195);
}





function mouth_c()
{
	// Variable which determines the mouth's mood
	var hM = map (h, 0, 100, 0, 60);

	// transition point from the first 
	// part of the movement to the second one
	var t = 30; 


	translate(0, 195);

  	fill(mouthColor);

	if(hM<t) // First part of the movement 
	{
  		ellipse(0, - hM/4, 25 + hM, 35);
	}
	else 	// Second part of the movement
	{
		var _a = 25 + t;
		var _b = 35;
	 
		var teta = 30;
		var x1 = sqrt( ( _a*_a*_b*_b )/( 4*( _b*_b + _a*_a*tan(radians(teta))*tan(radians(teta)) ) )  );
		var y1 = tan(radians(teta))*x1;

		var factor = -(t -hM)/(60-t); // Goes from 0 to 1 according to hM
		
		var p1  = createVector(                     0,  -t/4 - 17.5 -factor*17);
		var p2  = createVector(        x1 + factor*40,     -y1 -t/4 -factor*10);
		var p3  = createVector(  (25+t)/2 + factor*60,        -t/4 + factor*15);
		var p4  = createVector(        x1 + factor*46,     y1 -t/4 + factor*29);
		var p5  = createVector(                     0, -t/4 + 17.5 + factor*10);
		var p6  = createVector(       -x1 - factor*46,     y1 -t/4 + factor*29);
		var p7  = createVector( -(25+t)/2 - factor*60,        -t/4 + factor*15);
		var p8  = createVector(       -x1 - factor*40,     -y1 -t/4 -factor*10);

		beginShape();
			curveVertex(p1.x, p1.y);  	
			curveVertex(p2.x, p2.y);  	
			curveVertex(p3.x, p3.y);  	
			curveVertex(p4.x, p4.y);  	
			curveVertex(p5.x, p5.y);  	
			curveVertex(p6.x, p6.y);  	
			curveVertex(p7.x, p7.y);  	
			curveVertex(p8.x, p8.y); 

			curveVertex(p1.x, p1.y);  	
			curveVertex(p2.x, p2.y);  	
			curveVertex(p3.x, p3.y); 
		endShape(); 
	}
	
	translate(0, -195);	
}



