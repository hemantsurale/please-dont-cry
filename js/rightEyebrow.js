

/* 
*	Kauã Melo - 02/28/2016
*	Fortaleza - Brasil
*	virtual.kaua@gmail.com
*
*	www.kauamelo.com
*/




function rightEyebrow_l()
{
	// Variable which determines the eyebrow's mood
	var hEB= map(h, -100, 0, 10, 0);

	// Positioning to the eyebrow's right point
	translate(164 -0*hEB, -25 +hEB*3);
	rotate(radians(-hEB));
	translate(-2*hEB, hEB/2);

	// Draw Eyebrow
	fill(eyebrowColor);
	noStroke();
	beginShape();
		// top part
		vertex(0, 0 -hEB); 									  // first bezier point
		bezierVertex(-39, -45 + 0.7*hEB, 					  // focus1
					 -39-2*hEB, -45-0.29310345*hEB + 0.7*hEB, // focus2
					 -116 +hEB, -34); 						  // last bezier point
		// bottom part
		vertex(-116 +hEB, -34);								  // first bezier point
		bezierVertex(-39, -29, -39, -29, 0, 0-hEB); 		  // focus1,focus2, last bezier point
	endShape();

	translate(2*hEB, -hEB/2);
	rotate(radians(hEB));	
	translate(-164 + 0*hEB, 25 - hEB*3);
}



function rightEyebrow_c()
{
	// Variable which determines the eyebrow's mood
	var hEB= map(h, 0, 100, 0, 30);

	// First part of the movement 
	if(h < 40)
	{
		// Positioning to the eyebrow's right point
		translate(164, -25);
		rotate(radians(-hEB));
		translate(-hEB/2, hEB/2);

		// Draw Eyebrow
		fill(eyebrowColor);
		noStroke();
		beginShape();
			// top part
			vertex(0, 0); 									// first bezier point
			bezierVertex(-39, -45, 							// focus1
						 -39-hEB, -45-0.29310345*hEB, 		// focus2
						 -116, -34); 						// last bezier point
			// bottom part
			vertex(-116, -34);								// first bezier point
			bezierVertex(-39, -29, -39, -29, 0, 0); 		// focus1,focus2, last bezier point
		endShape();

		translate(hEB/2, -hEB/2);
		rotate(radians(hEB));	
		translate(-164, 25);
	}
	// Second part of the movement
	else
	{
		// Positioning the origin on the eyebrow's right point
		translate(164, -25);
		rotate(radians(-12));
		translate(-6, 6);
		translate(-1.5*(hEB-12),1.5*(hEB-12));

		var f1  = createVector(    -39 - 0.5*(hEB-12) ,                 -45 +2*(hEB-12));
		var f2  = createVector(  -39-hEB - 1*(hEB-12) , -45-0.29310345*hEB + 2*(hEB-12));
	
		var _f1  = createVector( -39 - 3*(hEB-12) , -29 + 2*(hEB-12));
		var _f2  = createVector( -39 - 1*(hEB-12) , -29 + 1*(hEB-12));


	   	// Draw Eyebrow
		fill(eyebrowColor);
		noStroke();
		beginShape();
			// top part
			vertex(0, 0); 											// first bezier point 
			bezierVertex(f1.x, f1.y, 								// focus1
						 f2.x, f2.y, 							    // focus2
						 -116 + 1*(hEB -12), -34 - 1.4*(hEB -12));  // last bezier point
			// bottom part
			vertex(-116 + 1*(hEB -12), -34 - 1.4*(hEB -12));        // first bezier point 
			bezierVertex( _f1.x, _f1.y, 							// focus1
						 _f2.x, _f2.y, 								// focus2 
						 0, 0); 									// last bezier point
		endShape();

		translate(-1.5*(-hEB+12),  1.5*(-hEB+12));
		translate(6, -6);
		rotate(radians(12));
		translate(-164, 25);
	}
}

