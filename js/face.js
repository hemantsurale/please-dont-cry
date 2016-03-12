
/* 
*	Kauã Melo - 02/28/2016
*	Fortaleza - Brasil
*	virtual.kaua@gmail.com
*
*	www.kauamelo.com
*/




function face()
{
	var p1  = createVector(  0, -260);
	var p2  = createVector( 70, -248);
	var p3  = createVector(130, -214);
	var p4  = createVector(175, -166);

	var p5  = createVector(190, -138);
	var p6  = createVector(201, -110);
	var p7  = createVector(205, -80);
	var p8  = createVector(204, -60);
	var p9  = createVector(200, -30);
	var p10 = createVector(189, 20);
	var p11 = createVector(173, 90);
	var p12 = createVector(171, 100);
	var p13 = createVector(171, 110);
	var p14 = createVector(169, 125);
	var p15 = createVector(163, 145);
	var p16 = createVector(141, 185);
	var p17 = createVector(100, 227);
	var p18 = createVector( 50, 253);
	var p19 = createVector( 0, 261);

	noStroke();
	fill(255,0,0, 150);

/*
	ellipse( p1.x, p1.y, 5, 5);//1
	ellipse( p2.x, p2.y, 5, 5);//2
	ellipse( p3.x, p3.y, 5, 5);//3
	ellipse( p4.x, p4.y, 5, 5);//4
	ellipse( p5.x, p5.y, 5, 5);//5
	ellipse( p6.x, p6.y, 5, 5);//6
	ellipse( p7.x, p7.y, 5, 5);//7
	ellipse( p8.x, p8.y, 5, 5);//8
	ellipse( p9.x, p9.y, 5, 5);//9
	ellipse( p10.x, p10.y, 5, 5);//10
	ellipse( p11.x, p11.y, 5, 5);//11
	//ellipse( p12.x, p12.y, 5, 5);//12
	ellipse( p13.x, p13.y, 5, 5);//13
	ellipse( p14.x, p14.y, 5, 5);//14
	ellipse( p15.x, p15.y, 5, 5);//15
	ellipse( p16.x, p16.y, 5, 5);//16
	ellipse( p17.x, p17.y, 5, 5);//17
	ellipse( p18.x, p18.y, 5, 5);//18
	ellipse( p19.x, p19.y, 5, 5);//19
*/


	fill(skinColor);

	beginShape();
		curveVertex(p1.x, p1.y);  	
		curveVertex(p2.x, p2.y);  	
		curveVertex(p3.x, p3.y);  	
		curveVertex(p4.x, p4.y);  	
		//curveVertex(p5.x, p5.y);  	
		curveVertex(p6.x, p6.y);  	
		//curveVertex(p7.x, p7.y);  
		curveVertex(p8.x, p8.y);  
		curveVertex(p9.x, p9.y);  
		curveVertex(p10.x, p10.y);  
		curveVertex(p11.x, p11.y);  
		//curveVertex(p12.x, p12.y);  
		curveVertex(p13.x, p13.y);  
		curveVertex(p14.x, p14.y);  
		curveVertex(p15.x, p15.y);  
		curveVertex(p16.x, p16.y);  
		curveVertex(p17.x, p17.y);  
		curveVertex(p18.x, p18.y);  
		curveVertex(p19.x, p19.y);  
		curveVertex(-p18.x, p18.y);  
		curveVertex(-p17.x, p17.y);  
		curveVertex(-p16.x, p16.y);  
		curveVertex(-p15.x, p15.y);  
		curveVertex(-p14.x, p14.y);  
		curveVertex(-p13.x, p13.y);  
		//curveVertex(-p12.x, p12.y);  
		curveVertex(-p11.x, p11.y);  
		curveVertex(-p10.x, p10.y);  
		curveVertex(-p9.x, p9.y);  
		curveVertex(-p8.x, p8.y);  
		//curveVertex(-p7.x, p7.y);  
		curveVertex(-p6.x, p6.y);  
		//curveVertex(-p5.x, p5.y);  
		curveVertex(-p4.x, p4.y);  
		curveVertex(-p3.x, p3.y);  
		curveVertex(-p2.x, p2.y);  

		curveVertex(p1.x, p1.y);  	
		curveVertex(p2.x, p2.y);  	
		curveVertex(p3.x, p3.y); 
	endShape(); 
}

