
/* 
*	Kauã Melo - 02/28/2016
*	Fortaleza - Brasil
*	virtual.kaua@gmail.com
*
*	www.kauamelo.com
*/





function leftEye_l()
{
	// Variable which determines the eye's mood
	var hEye = map (h, -100, 0, 0, 60);

	// Eye is opened
	if(hEye>4)
	{
		// White
		fill(255);
		ellipse(-90, 27, 80, hEye);

		// Dark Ball
		fill(darkEyeBallColor);
		ellipse(-90, 27, 53, 53);

		// Light Ball
		fill(lightEyeBallColor);
	  	ellipse(-90, 27, 29, 29);

		// Black Ball
		fill(0);
		ellipse(-90,27,12,12);

		// Light effect
		rotate(radians(30));
	  	fill(lightEyeEffectColor);
	  	ellipse(-80, 65, 18, 10);
	  	rotate(radians(-30));


		// Erase eye shadow --------------------------------------------------------------------
		// If White intercepts Dark Ball
		if (hEye < 53)
		{
			// When white intercepts Dark Ball, (i.x, i.y) (-i.x, i.y) (i.x,-i.y) 
			// (-i.x, -i.y) are the four intersections between Dark Ball and White
			var i  = createVector( sqrt( (1600*(hEye/2)*(hEye/2) - 1123600)/((hEye/2)*(hEye/2)-1600) ),
 								   sqrt( 702.25 - (1600*(hEye/2)*(hEye/2) - 1123600)/((hEye/2)*(hEye/2)-1600)) );

			// Eye center
			translate(-90, 27);    

			// Face's color
			fill(skinColor); 

			// Erase the bottom part
			beginShape();
				vertex(i.x, i.y);								  // first bezier point 
				bezierVertex(0, hEye/2, 0, hEye/2, -i.x, i.y); 	  // focus1,focus2, last bezier point
				vertex(-27, 27); 							 	  // Change the color on '// Face's color',
				vertex(27, 27);  							 	  //  these are the two bottom vertices
			endShape();

			// Erase the top part
			beginShape();
				vertex(i.x, -i.y);  						      // first bezier point 
				bezierVertex(0, -hEye/2, 0, -hEye/2, -i.x, -i.y); // focus1,focus2, last bezier point
				vertex(-27, - 27);  							  // Change the color on '// Face's color',
				vertex(27, -27);    							  //  these are the two bottom vertices 
			endShape();

			// back to face's center
			translate(90, -27); 								
		}	
		// -------------------------------------------------------------------------------------
	}
	else // Eye is closed
	{
		fill(closedEyeColor);

		// Goes from 0 to 4
		var factor = 4-hEye; 

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




function leftEye_c()
{
	// Variable which determines the eye's mood
	var hEye = map (h, 0, 100, 60, 0);

	// Eye is opened
	if(hEye>4)
	{
		// White
		fill(255);
		ellipse(-90, 27, 80, hEye);

		// Dark Ball
		fill(darkEyeBallColor);
		ellipse(-90, 27, 53, 53);

		// Light Ball
		fill(lightEyeBallColor);
	  	ellipse(-90, 27, 29, 29);

		// Black Ball
		fill(0);
		ellipse(-90,27,12,12);

		// Light effect
		rotate(radians(30));
	  	fill(lightEyeEffectColor);
	  	ellipse(-80, 65, 18, 10);
	  	rotate(radians(-30));


		// Erase eye shadow --------------------------------------------------------------------
		// If White intercepts Dark Ball
		if (hEye <53)
		{
			// When white intercepts Dark Ball, (i.x, i.y) (-i.x, i.y) (i.x,-i.y) 
			// (-i.x, -i.y) are the four intersections between Dark Ball and White
			var i  = createVector( sqrt( (1600*(hEye/2)*(hEye/2) - 1123600)/((hEye/2)*(hEye/2)-1600) ),
 								   sqrt( 702.25 - (1600*(hEye/2)*(hEye/2) - 1123600)/((hEye/2)*(hEye/2)-1600)) );

			// Eye's center
			translate(-90, 27);    

				// Face's color
				fill(skinColor); 

				// Erase the bottom part
				beginShape();
					vertex(i.x, i.y);								  // first bezier point 
					bezierVertex(0, hEye/2, 0, hEye/2, -i.x, i.y); 	  // focus1,focus2, last bezier point
					vertex(-27, 27); 							 	  // Change the color on '// Face's color', 
					vertex(27, 27);  							 	  //  these are the two bottom vertices
				endShape();

				// Erase the top part
				beginShape();
					vertex(i.x, -i.y);  						      // first bezier point 
					bezierVertex(0, -hEye/2, 0, -hEye/2, -i.x, -i.y); // focus1,focus2, last bezier point
					vertex(-27, - 27);  							  // Change the color on '// Face's color',
					vertex(27, -27);    							  //  these are the two bottom vertices 
				endShape();

			// back to face's center
			translate(90, -27); 								  
		}	
		// -------------------------------------------------------------------------------------
	}
	else // Eye is closed
	{
		fill(closedEyeColor);

		// Goes from 0 to 4
		var factor = 4-hEye; 

		var p1  = createVector( -40 + 3*factor,              0);
		var p2  = createVector(       4*factor, -2 -1*factor);
		var p3  = createVector(   40 +3*factor,              0);
		var p4  = createVector(       4*factor,  2 -1*factor);

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

