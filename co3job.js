( function () {
	var strHeader = 'Hej udvikler',
		strText = 'Elsker du at lave hjemmesider? Det gør vi også og vi mangler udviklere! Du burde lige gå ind og kigge på https://co3.dk/om-os/karriere - når du nu aligevel er her!',
		strLogoUrl = 'https://co3.dk/files/templates/designs/co3-2020/_assets/img/co3-logo-web-rgb.svg',
		boolIsDarkMode = window.matchMedia && window.matchMedia( '(prefers-color-scheme: dark)' ).matches,
		objLogo = new Image();

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
				'background-color: #ddd',
			],
			style = arrBaseStyles.concat( boolIsDarkMode ? arrDarkStyle : arrLightStyle ).join( ';' );

		console.log( `%c${strHeader} - ${strText}`, style);
	}
	objLogo.src = strLogoUrl;
} )();
