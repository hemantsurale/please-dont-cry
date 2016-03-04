
/* 
*	Kauã Melo - 02/28/2016
*	Fortaleza - Brasil
*	virtual.kaua@gmail.com
*
*	www.kauamelo.com
*/



// Mood variable 
//------------------------
var h; // how sad/happy he is. 
	   // it goes from -100 to 100
//------------------------


// Microphone variables
//------------------------
var mic, fft, energy;
var happy, angry, mood; 
var chromeOrFirefox;
//------------------------


// Blinking eyes' variables
//------------------------
var nBlinks;		   // How many times the eyes are gonna blink in a row
var blinkingStage;     // Tracks the blinking eye movement
var dryingEyes;        // How dry are the eyes... it goes from 0 to dryEyesThreshold
var dryEyesThreshold;  // Determines when the baby is gonna blink the eyes
//------------------------


// Audio Variables 
//------------------------
var cryAudio, laughAudio;
//------------------------


// Colors 
//------------------------
var skinColor;
var eyebrowColor;
var darkEyeBallColor;
var lighEyeBallColor;
var lighEyeEffectColor;
var closedEyeColor;
var noseColor;
var mouthColor;
//------------------------


// SkinColor Variable 
//------------------------
var sk; // randomly determines if 
		// the baby is black or white
//------------------------


// Mobile
//------------------------
var mobileDetected;
var gz;	  // Acceleration


var isMobile = 
{
    Android: function() 
	{
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() 
	{
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() 
	{
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() 
	{
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() 
	{
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function() 
	{
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

// Adding acceleration event
window.addEventListener("devicemotion", motion, false);
//------------------------





function isChromeOrFirefox() 
{ 
	var safe = false;

    if(navigator.userAgent.indexOf("Chrome") != -1 )
    {
        safe = true;
    }
    else if(navigator.userAgent.indexOf("Firefox") != -1 ) 
    {
        safe = true;
    }
   
	return safe;
}



function setup() 
{
	// Check if the user is a mobile
	mobileDetected = isMobile.any();

	
	// If it's a mobile
	if( mobileDetected ) 
	{
		// starts with a neutral mood
		gz = 0;

		var w = 500;
		var h = 750;

		var c = createCanvas( w, h);
		const canvasElt = c.elt; 

		c.id("canvas");
		
		// Portrait 
		if( window.innerWidth < window.innerHeight )
		{
			canvasElt.style.width  = '100%'; 
			
			// Firefox on mobile returns wrong window.innerWidth
			//  if you don't use setTimeout()
			setTimeout(function ()
			{
				canvasElt.style.height = window.innerWidth * (h/w);
			}, 0);
		}
		// Landscape 
		else
		{
			canvasElt.style.height = '100%';

			// Firefox on mobile returns wrong window.innerWidth
			//  if you don't use setTimeout()
			setTimeout(function ()
			{
				canvasElt.style.width  = window.innerHeight * (w/h);
				c.position( window.innerWidth/2 - ( (w/h)*window.innerHeight)/2, 0 );
			}, 0);
		}
	}
	// If it isn't a mobile
	else
	{

		// Force using 'https'.
		// To use the microphone on chrome you got to use https
		// - Comment the code below to run it locally - 
		if (window.location.protocol != "https:")
		{
    		window.location.href = "https:" + window.location.href.substring(window.location.protocol.length);
		}

		createCanvas(window.innerWidth, window.innerHeight);

		// Check if the user is Chrome or Firefox.
		// The usage of the microphone through 
		// getUserMedia() is currently only 
		// supported by Chrome and Firefox.
		// http://caniuse.com/#feat=stream
		chromeOrFirefox = isChromeOrFirefox();

		if(chromeOrFirefox)
		{
			// Setting microphone variables
			//--------------------------------------
			mic = new p5.AudioIn();
			fft = new p5.FFT();
			mic.start();
			fft.setInput(mic);
		}
		else
		{
			document.getElementById("experience").innerHTML = "Use Chrome or Mozilla Firefox for best experience :)";
			document.getElementById("experience").style.marginTop = window.innerHeight/4 +"px";
		}
	}
	

	// Initializing mood variables
	//----------------------------
	happy = 0; 
	angry = 0; 
	mood  = 0; 

	// Randomly determines the baby's color
	sk = randomInt(0,1);

	// Setting baby's colors 
	//----------------------------------------------
	if(sk == 0) // white baby
	{
		skinColor           = color(223, 184, 171);
		eyebrowColor        = color(191, 148,  92);
		darkEyeBallColor    = color( 33, 126, 197);
		lightEyeBallColor   = color( 39, 146, 227);
		lightEyeEffectColor = color(156, 203, 239);
		closedEyeColor      = color( 84,  44,  31);
		noseColor           = color(212, 161, 144);
		mouthColor          = color(127,  17,  20); 
	}
	else	// black baby
	{
		skinColor           = color(114, 52, 49);
		eyebrowColor        = color( 58, 19, 19);
		darkEyeBallColor    = color( 68, 39,  9);
		lightEyeBallColor   = color(110, 62, 15);
		lightEyeEffectColor = color(164, 99, 34);
		closedEyeColor      = color( 55, 18, 18);
		noseColor           = color(128, 62, 52);
		mouthColor          = color(191, 76, 76);
	}
	//----------------------------------------------


	// Setting blinking eyes' variables
	//--------------------------------------
	eyesAreBlinking  = false;  
	blinkingStage    =     0;      
	dryingEyes       =     0;	  
	nBlinks			 =     0; 	  
	dryEyesThreshold =   200;	  
	//--------------------------------------


	// Setting audio variables
	//--------------------------------------
	laughAudio = loadSound('audio/laughing.mp3');
	/* Laughing audio from: http://soundbible.com/2007-Kid-Laugh-Long.html
	*  Under Attribution 3.0 license: https://creativecommons.org/licenses/by/3.0/
	*  Author: Mike Koenig
	*  The audio was modified. */
	
	cryAudio = loadSound('audio/crying.mp3');
	/* Crying audio from: https://www.freesound.org/people/panikko/sounds/144473/
	*  Under Attribution-NonCommercial 3.0 license: http://creativecommons.org/licenses/by-nc/3.0/
	*  Author: panikko
	*  The audio was modified. */
	//--------------------------------------	
}






function draw() 
{
	// Mobile
	if(mobileDetected)
	{
		// Change the mood by the accelerometer
		h = map(gz, -9.8, 9.8, 100, -100);

		// On Iphone the reference is the opposite
		if(isMobile.iOS())
		{
			h = -h;
		}

		// Getting the body element from the HTML
		// It's needed on mobile because the canvas
		//  won't fill the whole screen, so we gotta
		//  paint the rest.
		var bd = select('body');

		// BACKGROUND COLOR
		//---------------------------------------------------------------------
			var factor = (h+100)/200; // goes from 0 to 1

			if(h<=0) // if baby is happy
			{
				var bcolor = "rgb(255,";
				bcolor = bcolor.concat(String( parseInt(237+36*factor) ));
				bcolor = bcolor.concat(",");
				bcolor = bcolor.concat(String( parseInt(117 + 276*factor) ));
				bcolor = bcolor.concat(")");

				// changing the HTML background color
				bd.style("background", bcolor);

				// from yellow to white
				background(255, 237 + 36*factor, 117 + 276*factor); 
			}
			else    // if baby is sad
			{
				if(factor<0.75) // first part of the sadness (white->gray)
				{
					var aux = map(factor, 0.5, 0.75, 0, 1);

					var bcolor = "rgb(";
					bcolor = bcolor.concat( String( parseInt(255 -87*aux) ) );
					bcolor = bcolor.concat(",");
					bcolor = bcolor.concat(String( parseInt(255 - 75*aux) ));
					bcolor = bcolor.concat(",");
					bcolor = bcolor.concat(String( parseInt(255 - 75*aux) ));
					bcolor = bcolor.concat(")");

					// changing the HTML background color
					bd.style("background", bcolor);

					// from white to gray
					background( 255 -87*aux, 255 - 75*aux,	255 - 75*aux);
				}
				else // second part of the sadness (gray->red)
				{
					var aux = map(factor, 0.75, 1, 0, 1);

					var bcolor = "rgb(168,";
					bcolor = bcolor.concat(String( parseInt(180 - 129*aux) ));
					bcolor = bcolor.concat(",");
					bcolor = bcolor.concat(String( parseInt(180 - 129*aux) ));
					bcolor = bcolor.concat(")");

					// changing the HTML background color
					bd.style("background", bcolor);

					// from gray to red
					background( 168, 180 - 129*aux, 180 - 129*aux);
				}	
			}
		//---------------------------------------------------------------------
	}
	// Not a mobile
	else
	{
		if(chromeOrFirefox)
		{
			// Change baby's mood by mic input
			microphone();

			// how sad/happy he is. It goes from -100 to 100
			h = -mood;
		}
		else // Neither chrome nor Firefox
		{
			// Change the mood by the mouse movement
			h = map(mouseY, 0, height, -100, 100);
		}


		// BACKGROUND COLOR
		//---------------------------------------------------------------------
			var factor = (h+100)/200; // goes from 0 to 1

			if(h<=0) // if baby is happy
			{
				// from yellow to white
				background(255, 237 + 36*factor, 117 + 276*factor); 
			}
			else    // if baby is sad
			{
				if(factor<0.75) // first part of the sadness (white->gray)
				{
					var aux = map(factor, 0.5, 0.75, 0, 1);

					// from white to gray
					background( 255 -87*aux, 255 - 75*aux,	255 - 75*aux);
				}
				else // second part of the sadness (gray->red)
				{
					var aux = map(factor, 0.75, 1, 0, 1);

					// from gray to red
					background( 168, 180 - 129*aux, 180 - 129*aux);
				}	
			}
		//---------------------------------------------------------------------
	}




	// move reference to the center of the window
	translate(width/2, height/2 -50);

	// Draw baby's head
	face();

	// Drawing expressions
	//-----------------------------------------
	if(h<=0) // if baby is happy
	{
		// if baby isn't blinking his eyes,
		// draw his eyes and eyebrows
		if(nBlinks == 0)
		{
			leftEye_l();
			rightEye_l();

			leftEyebrow_l();
			rightEyebrow_l();
		}
	
		nose();
		mouth_l();
		laughingLines();
	}
	else // if baby is sad
	{
		// if baby isn't blinking his eyes,
		// draw his eyes and eyebrows
		if(nBlinks == 0)
		{
			leftEye_c();
			rightEye_c();

			leftEyebrow_c();
			rightEyebrow_c();
		}

		nose();
		mouth_c();
		cryingLines();
	}
	//-----------------------------------------


	// Blinking eyes process
	//-----------------------------------------
	if(h>-20 && h<20) // eyes ~opened
	{
		dryingEyes++; // getting dry

		// if eyes are too dry
		if(dryingEyes > dryEyesThreshold)
		{
			// eyes are gonna blink, so they 
			// shouldn't be dry anymore
			dryingEyes = 0;

			// eyes blink different times in a row
			nBlinks = randomInt(1,3);

			// eyes take different time to get dry
			dryEyesThreshold = randomInt(150,300);
		}	
	}
	else // eyes are ~closed
	{
		// eyes are lubricated
		dryingEyes = 0;
	}

	// if eyes should blink
	if(nBlinks > 0)
	{
		blinkEyes();
	}
	//-----------------------------------------


	// return the reference to top left
	translate(-width/2, -height/2 +50);



	// Playing cry/laugh audio
	//--------------------------------------------------
	// If baby is very happy and audio is already loaded
	if(h<-75 && laughAudio.isLoaded())
	{
		// if audio isn't playing
		if(!laughAudio.isPlaying())
		{
			laughAudio.loop();
		}
		// if audio is playing
		else
		{
			laughAudio.setVolume( map(h, -75, -100, 0, 1) );
		}
	}
	else
	{
		laughAudio.setVolume(0);
		//laughAudio.pause();
	}

	// If baby is very sad and audio is already loaded
	if(h>75 && cryAudio.isLoaded())
	{
		// if audio isn't playing
		if(!cryAudio.isPlaying())
		{
			cryAudio.loop();
		}
		// if audio is playing
		else
		{
			cryAudio.setVolume( map(h, 75, 100, 0, 1) );
		}
	}
	else
	{
		cryAudio.setVolume(0);
		//cryAudio.pause();
	}
	//--------------------------------------------------
	
}


// Get the acceleration of the Z axis
function motion(event)
{
	var ac = event.accelerationIncludingGravity.z;

	gz = constrain(ac, -9.8, 9.8);
}


function randomInt(minimum, maximum) 
{
    return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
}



function windowResized() 
{
	// If the user is a mobile, reload the 
	//  site if he switches portrait/landscape.
	// Resizing canvas doesn't give good results.
	if(mobileDetected)
	{
		var x = document.getElementById("canvas");

		var w2 = 500;
		var h2 = 750;

		// Portrait 
		if( window.innerWidth < window.innerHeight )
		{
			// Firefox on mobile returns wrong window.innerWidth
			//  if you don't use setTimeout()
			setTimeout(function ()
			{
				x.style.marginLeft  = '0px';
				x.style.width  = window.innerWidth; 
				x.style.height = window.innerWidth * (h2/w2); 

			}, 0);
		}
		// Landscape 
		else
		{
			// Firefox on mobile returns wrong window.innerWidth
			//  if you don't use setTimeout()
			setTimeout(function ()
			{
				x.style.height      = window.innerHeight ;
				x.style.width       = window.innerHeight * (w2/h2);
				x.style.marginLeft  = window.innerWidth/2 - ((w2/h2)*window.innerHeight)/2;

			}, 0);
		}
		
		//window.location.reload(); // refresh page
	}
	// If the user isn't on a mobile, keep the 
	//  canvas the same size of the screen.
	else
	{
  		resizeCanvas(windowWidth, windowHeight);
	}
}




