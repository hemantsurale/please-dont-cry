

/* 
*	Kauã Melo - 02/28/2016
*	Fortaleza - Brasil
*	virtual.kaua@gmail.com
*
*	www.kauamelo.com
*/



function microphone()
{
	var spectrum = fft.analyze();
	var vol = mic.getLevel();

	var maximo = max(spectrum);
	var index;
 
	// Threshold to determine if
	// the baby is crying or laughing
	// h < -extremesThreshold  -> Laughing
	// h >  extremesThreshold  -> Crying
	var extremesThreshold = 75;


	// if baby is crying
	if(h > extremesThreshold)
	{
		// Decreases happiness 2% and anger 0.1%
		happy = happy - 0.02*happy;
		angry = angry - 0.001*angry;
	}
	// if baby is laughing
	else if (h < - extremesThreshold)
	{
		// Decreases happiness 0.1% and anger 2%
		happy = happy - 0.001*happy;
		angry = angry - 0.02*angry;
	}
	// Between crying and laughing
	else
	{
		// Decreases happiness and anger in 1%
		happy = happy - 0.01*happy;
		angry = angry - 0.01*angry;
	}


	// if it's loud enough 
	if(vol > 0.07)
	{
		// Get the index of the maximum spectrum value 
		for(i = 0; i< spectrum.length; i++)
		{
			if(spectrum[i] == maximo)
			{
				index = i;
			}
		}


		// user is speaking with a "happy" voice
		if(index > 17) 
		{
			// if baby is laughing
			if (h < - extremesThreshold)
			{
				happy+=4;
				angry =0;
			}
			// if baby isn't crying
			else if(h < extremesThreshold)
			{
				happy+=1;
				angry-=1;
			}
			// if the baby is crying, no
			// happiness influences him... 
			// Just the silence can make him
			// back to the normal mood.
		}
		// user is speaking with an "angry" voice
		else 
		{
			// if baby is crying
			if(h> extremesThreshold) 
			{
				angry+=4;
				//happy=0;
			}
			// if baby is sad but not crying yet
			else
			{
				angry+=2;
				happy-=1;
			}
		}
	}

	// keeps happy and angry between 0 and 100
	happy = constrain(happy, 0, 100);
	angry = constrain(angry, 0, 100);

	mood = happy - angry;
}

