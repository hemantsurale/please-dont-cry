
/* 
*	Kauã Melo - 02/28/2016
*	Fortaleza - Brasil
*	virtual.kaua@gmail.com
*
*	www.kauamelo.com
*/


function blinkEyes()
{
	// how fast the eyes close/open
	var closingSpeed = 5; 
	var openingSpeed = 13;


// CLOSING EYES
//=============================================================================================
	if(blinkingStage <= closingSpeed) // first stage, closing the eyes
	{
		// LEFT EYE 
		//-------------------------------------------------------------------------------
		// Variable which determines the eye's mood
		var hEye = map (blinkingStage, 0, closingSpeed, 53, 0);

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


		// Erase eye shadow 
		//--------------------------------------------------------------------
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
		// -------------------------------------------------------------------------------------


		// RIGHT EYE -------------------------------------------------------------------------------
		// White
		fill(255);
		ellipse(90, 27, 80, hEye);

		// Dark Ball
		fill(darkEyeBallColor);
		ellipse(90, 27, 53, 53);

		// Light Ball
		fill(lightEyeBallColor);
		ellipse(90, 27, 29, 29);

		// Black Ball
		fill(0);
		ellipse(90, 27, 12, 12);

		// Light effect
		translate(180, 0);
		rotate(radians(30));
		fill(lightEyeEffectColor);
		ellipse(-80, 65, 18, 10);
		rotate(radians(-30));  
		translate(-180, 0);
	

		// Erase eye shadow 
		//--------------------------------------------------------------------
		// When white intercepts Dark Ball, (i.x, i.y) (-i.x, i.y) (i.x,-i.y) 
		// (-i.x, -i.y) are the four intersections between Dark Ball and White

		var i  = createVector( sqrt( (1600*(hEye/2)*(hEye/2) - 1123600)/((hEye/2)*(hEye/2)-1600) ) ,
							   sqrt( 702.25 - (1600*(hEye/2)*(hEye/2) - 1123600)/((hEye/2)*(hEye/2)-1600)));

		// Eye Center
		translate(90, 27);

		// Face's color
		fill(skinColor); 

		// Erase the bottom part
		beginShape();
			vertex(i.x, i.y); 							 	  // first bezier point 
			bezierVertex(0, hEye/2, 0, hEye/2, -i.x, i.y); 	  // focus1,focus2, last bezier point
			vertex(-27, 27); 							 	  // Change the color on '// Face's color'.
			vertex(27, 27);  							 	  //  these are the two bottom vertices 
		endShape();

		// Erase the top part
		beginShape();
			vertex(i.x, -i.y); 						  		  // first bezier point 
			bezierVertex(0, -hEye/2, 0, -hEye/2, -i.x, -i.y); // focus1,focus2, last bezier point
			vertex(-27, -27);						  		  // Change the color on '// Face's color',
			vertex(27, -27); 						  		  //  these are the two bottom vertices
		endShape();

		// back to face's center
		translate(-90, -27); 
		// -------------------------------------------------------------------------------------



		// LEFT EYEBROW 
		//-------------------------------------------------------------------------------
		// Variable which determines the eyebrow's mood
		var hEB= map(blinkingStage, 0, closingSpeed, 0, 6);

		// Positioning reference to the eyebrow's left point
		translate(-164, -25 +hEB*3);
		rotate(radians(hEB));
		translate(2*hEB, hEB/2);

	   	// Draw Eyebrow
		fill(eyebrowColor);
		noStroke();
		beginShape();
			// top part
			vertex(0, 0 -hEB); 							 		// first bezier point 
			bezierVertex(39, -45 + 0.7*hEB, 					// focus1
						 39+2*hEB, -45-0.29310345*hEB +0.7*hEB, // focus2
						 116 -hEB, -34); 						// last bezier point
			// bottom part
			vertex(116 -0*hEB, -34);							// first bezier point 
			bezierVertex(39, -29, 39, -29, 0, 0-hEB); 			// focus1,focus2, last bezier point
		endShape();

		// back to the Face's center
		translate(-2*hEB, -hEB/2);  							
		rotate(-radians(hEB));
	   	translate(164, 25 -hEB*3);
		// -------------------------------------------------------------------------------------


		// RIGHT EYEBROW -------------------------------------------------------------------------------
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
		// -------------------------------------------------------------------------------------
	}
//=============================================================================================


// OPENING EYES
//=============================================================================================
	else
	{
		// Variable which determines the eye's mood
		var hEye = map (blinkingStage, closingSpeed, openingSpeed, 0, 53);


		// LEFT EYE -------------------------------------------------------------------------------
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

		// Erase eye shadow 
		//--------------------------------------------------------------------
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
		// -------------------------------------------------------------------------------------



		// RIGHT EYE -------------------------------------------------------------------------------
		// White
		fill(255);
		ellipse(90, 27, 80, hEye);

		// Dark Ball
		fill(darkEyeBallColor );
		ellipse(90, 27, 53, 53);

		// Light Ball
		fill(lightEyeBallColor);
		ellipse(90, 27, 29, 29);

		// Black Ball
		fill(0);
		ellipse(90, 27, 12, 12);

		// Light effect
		translate(180, 0);
		rotate(radians(30));
		fill(lightEyeEffectColor);
		ellipse(-80, 65, 18, 10);
		rotate(radians(-30));  
		translate(-180, 0);
	

		// Erase eye shadow 
		//--------------------------------------------------------------------
		// When white intercepts Dark Ball, (i.x, i.y) (-i.x, i.y) (i.x,-i.y) 
		// (-i.x, -i.y) are the four intersections between Dark Ball and White
		var i  = createVector( sqrt( (1600*(hEye/2)*(hEye/2) - 1123600)/((hEye/2)*(hEye/2)-1600) ) ,
							   sqrt( 702.25 - (1600*(hEye/2)*(hEye/2) - 1123600)/((hEye/2)*(hEye/2)-1600)));

		// Eye Center
		translate(90, 27);

		// Face's color
		fill(skinColor); 

		// Erase the bottom part
		beginShape();
			vertex(i.x, i.y); 							 	  // first bezier point 
			bezierVertex(0, hEye/2, 0, hEye/2, -i.x, i.y); 	  // focus1,focus2, last bezier point
			vertex(-27, 27); 							 	  // Change the color on '// Face's color'.
			vertex(27, 27);  							 	  //  these are the two bottom vertices 
		endShape();

		// Erase the top part
		beginShape();
			vertex(i.x, -i.y); 						  		  // first bezier point 
			bezierVertex(0, -hEye/2, 0, -hEye/2, -i.x, -i.y); // focus1,focus2, last bezier point
			vertex(-27, -27);						  		  // Change the color on '// Face's color',
			vertex(27, -27); 						  		  //  these are the two bottom vertices
		endShape();

		// back to face's center
		translate(-90, -27); 
		// -------------------------------------------------------------------------------------




		// LEFT EYEBROW -------------------------------------------------------------------------------
		// Variable which determines the eyebrow's mood
		var hEB= map(blinkingStage, closingSpeed, openingSpeed, 6, 0);


		// Positioning to the eyebrow's left point
		translate(-164, -25 +hEB*3);
		rotate(radians(hEB));
		translate(2*hEB, hEB/2);

	   	// Draw Eyebrow
		fill(eyebrowColor);
		noStroke();
		beginShape();
			// top part
			vertex(0, 0 -hEB); 							 		// first bezier point 
			bezierVertex(39, -45 + 0.7*hEB, 					// focus1
						 39+2*hEB, -45-0.29310345*hEB +0.7*hEB, // focus2
						 116 -hEB, -34); 						// last bezier point
			// bottom part
			vertex(116 -0*hEB, -34);							// first bezier point 
			bezierVertex(39, -29, 39, -29, 0, 0-hEB); 			// focus1,focus2, last bezier point
		endShape();

		translate(-2*hEB, -hEB/2);  							// back to the Face's center
		rotate(-radians(hEB));
	   	translate(164, 25 -hEB*3);
		// -------------------------------------------------------------------------------------


		// RIGHT EYEBROW -------------------------------------------------------------------------------
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
		// -------------------------------------------------------------------------------------
	}
//=============================================================================================
	
	// goes to next stage
	blinkingStage++;

	// if blinking process is done
	if(blinkingStage >= openingSpeed)
	{
		blinkingStage=0;
		dryingEyes = 0;
		nBlinks--;
	}
}
