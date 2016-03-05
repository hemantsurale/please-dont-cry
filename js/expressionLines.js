

/* 
*	Kauã Melo - 02/28/2016
*	Fortaleza - Brasil
*	virtual.kaua@gmail.com
*
*	www.kauamelo.com
*/


function laughingLines()
{
	translate(0, 135);
	
	// Variable which determines the laughing line's mood
	var hLL = map(h, -100, 0, 100, 0); 

	// Transition point. From this point the marks should
	// start to appear
	var t = 60; 
	
	// Goes from 0 to 1 according to h
	var factor = (hLL-t)/(100-t); 

	// Laughing lines appears after a certain degree of happiness
	if(hLL > t)
	{
		var p1  = createVector( 25 +   factor*5, -45);
		var p2  = createVector( 70 +  factor*30,   0);
		var p3  = createVector( 70 +  factor*30,   0);
		var p4  = createVector( 80 +  factor*20,  40);

		// white baby
		if(sk == 0)
		{
			fill(204, 159, 144, factor*110);
		}
		// black baby
		else
		{
			fill(92, 43, 39, factor*110);
		}

		// right
		beginShape();
			vertex(p1.x, p1.y);
			bezierVertex( p2.x, p2.y, p3.x, p3.y, p4.x, p4.y);
			vertex(p4.x, p4.y);
			bezierVertex( p3.x-10, p3.y, p2.x-10, p2.y, p1.x, p1.y);
		endShape();

		// left
		beginShape();
			vertex(-p1.x, p1.y);
			bezierVertex( -p2.x, p2.y, -p3.x, p3.y, -p4.x, p4.y);
			vertex(-p4.x, p4.y);
			bezierVertex( -p3.x+10, p3.y, -p2.x+10, p2.y, -p1.x, p1.y);
		endShape();
	}
	translate(0, -135);
}




function cryingLines()
{
	translate(0, 135);
	
	// Transition point. From this point the marks should
	// start to appear
	var t = 75; 
		
	// Crying lines appears after a certain degree of sadness
	if(h > t)
	{
		var factor =  (h-t)/(100-t); // Goes from 0 to 1 according to h

		var p1  = createVector(  30 +  factor*5,  -45);
		var p2  = createVector(  70 + factor*20,  -30 + factor*20);
		var p3  = createVector(  75 + factor*20,    factor*20);
		var p4  = createVector(  80 + factor*20,   40 + factor*20);

		// white baby
		if(sk ==0)
		{
			fill(204, 159, 144, factor*110);
		}
		// black baby
		else
		{
			fill(92, 43, 39, factor*110);
		}

		// right
		beginShape();
			vertex(p1.x, p1.y);
			bezierVertex( p2.x, p2.y, p3.x, p3.y, p4.x, p4.y);
			vertex(p4.x, p4.y);
			bezierVertex( p3.x-10, p3.y, p2.x-10, p2.y, p1.x, p1.y);
		endShape();

		// left
		beginShape();
			vertex(-p1.x, p1.y);
			bezierVertex( -p2.x, p2.y, -p3.x, p3.y, -p4.x, p4.y);
			vertex(-p4.x, p4.y);
			bezierVertex( -p3.x+10, p3.y, -p2.x+10, p2.y, -p1.x, p1.y);
		endShape();
	}
	translate(0, -135);
}



