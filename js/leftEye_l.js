
function e(x)
{
	fill(255,0,0);
	ellipse(width/2, height/2, x, x);
}

function leftEye_l(h)
{
	// Variable which determines the eye's mood
	var hEye = map (h, -100, 0, 0, 60);

	// Eye is opened
	if(hEye>4)
	{
		// White
		fill(255);
		ellipse(-90, 27, 80, hEye);

		// Dark Blue
		fill(33, 126, 197);
		ellipse(-90, 27, 53, 53);

		// Light Blue
		fill(39, 146, 227);
	  	ellipse(-90, 27, 29, 29);

		// Black Ball
		fill(0);
		ellipse(-90,27,12,12);

		// Light effect
		rotate(radians(30));
	  	fill(156, 203, 239);
	  	ellipse(-80, 65, 18, 10);
	  	rotate(radians(-30));


		// Erase eye shadow --------------------------------------------------------------------
		// If White intercepts Dark Blue
		if (hEye <53)
		{
			// i.x and i.y are the intersection points between Dark Blue and White
			// (i.x, i.y) (-i.x, i.y) (i.x,-i.y) (-i.x, -i.y)
			// The four intersections between Dark Blue and White
			var i  = createVector( sqrt( (1600*(hEye/2)*(hEye/2) - 1123600)/((hEye/2)*(hEye/2)-1600) ),
 								   sqrt( 702.25 - (1600*(hEye/2)*(hEye/2) - 1123600)/((hEye/2)*(hEye/2)-1600)) );

			// Eye center
			translate(-90, 27);    

			fill(223, 184, 171); // Face's color

			// Erase the bottom part
			beginShape();
				vertex(i.x, i.y);								  // first bezier point 
				bezierVertex(0, hEye/2, 0, hEye/2, -i.x, i.y); 	  // focus1,focus2, last bezier point
				vertex(-27, 27); 							 	  // Change the color on '// Face's color'. 
				vertex(27, 27);  							 	  // These are the two bottom vertices
			endShape();

			// Erase the top part
			beginShape();
				vertex(i.x, -i.y);  						      // first bezier point 
				bezierVertex(0, -hEye/2, 0, -hEye/2, -i.x, -i.y); // focus1,focus2, last bezier point
				vertex(-27, - 27);  							  // Change the color on '// Face's color'.
				vertex(27, -27);    							  // These are the two bottom vertices 
			endShape();

			// back to face's center
			translate(90, -27); 								
		}	
		// -------------------------------------------------------------------------------------
	}
	else // Eye is closed
	{
		fill(84, 44, 31);
		var factor = 4-hEye; // Goes from 0 to 4

		var p1  = createVector( -40 + 3*factor,              0);
		var p2  = createVector(       4*factor, -2 -1.5*factor);
		var p3  = createVector(   40 +3*factor,              0);
		var p4  = createVector(       4*factor,  2 -1.5*factor);

		translate(-90, 27);
			beginShape();
				curveVertex( p1.x, p1.y);  	
				curveVertex( p2.x, p2.y);  	
				curveVertex( p3.x, p3.y);  	
				curveVertex( p4.x, p4.y);  	

				curveVertex( p1.x, p1.y);  	
				curveVertex( p2.x, p2.y);  	
				curveVertex( p3.x, p3.y);  	
			endShape(); 
		translate(90, -27);
	}
}

