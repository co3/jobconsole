( function () {
	var boolActive = true,
		strHeader = 'Pssst! … ',
		strText = 'Vi hedder Co3, og vi har bygget dette website. Vi har vokseværk, og vi har mange fede projekter i pibelinen, som du har mulighed for at få ansvaret for. Tag et kig forbi vores ledige stillinger her: https://co3.dk/om-os/karriere. Udover at bygge fede løsninger, holder vi fede fester, og at sige vi er gode til bordfodbold, vil være en underdrivelse. Vi glæder os til at møde dig!',
		strLogoUrl = 'https://co3.dk/files/templates/designs/co3-2020/_assets/img/co3-logo-web-rgb.svg',
		boolIsDarkMode = window.matchMedia && window.matchMedia( '(prefers-color-scheme: dark)' ).matches,
		objLogo = new Image();

	if(boolActive === true){
		objLogo.onload = function () {
			var arrBaseStyles = [
					'display: inline-block',
					'font-family: Work Sans, Helvetica Neue, Arial, sans-serif',
					'background-repeat: no-repeat',
					'background-size:5em;',
					'background-position: 1em 1.5em',
					'background-image:url(' + strLogoUrl + ')',
					'padding: 5.5em 1em 2em',
					'border-radius: 1em',
					'font-size: 1.2em',
					'margin:1em'
				],
				arrDarkStyle = [
					'color: rgba(0,0,0,.85)',
					'background-color: #ffffff',
				],

				arrLightStyle = [
					'color: #1f1f1f',
					'background-color: #EBE4DE',
				],
				style = arrBaseStyles.concat( boolIsDarkMode ? arrDarkStyle : arrLightStyle ).join( ';' );

			console.log( `%c${strHeader} ${strText}`, style);
		}
		objLogo.src = strLogoUrl;
	}
	
} )();
