/* global monogatari */

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	}
});

// Define the notifications used in the game
monogatari.action ('notification').notifications ({
	'Welcome': {
		title: 'Welcome',
		body: 'This is the Monogatari VN Engine',
		icon: ''
	}
});

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({

});

// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {

});


// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {

});

// Define the music used in the game.
monogatari.assets ('music', {
	'morning': '1 Alongside Chirping Cicadas.mp3'
});

// Define the voice files used in the game.
monogatari.assets ('voices', {
	'001': '001.mp3',
	'002': '002.mp3',
	'003': '003.mp3',
	'004': '004.mp3',
	'005': '005.mp3',
	'006': '006.mp3',
	'007': '007.mp3',
	'008': '008.mp3',
	'009': '009.mp3',
	'010': '010.mp3',
	'011': '011.mp3',
	'012': '012.mp3',
	'013': '013.mp3',
	'014': '014.mp3',
});

// Define the sounds used in the game.
monogatari.assets ('sounds', {
	'door_open': 'SE_buka_pintu.mp3',
	'door_knock': 'SE_ketuk_pintu.mp3',
	'door_close': 'SE_tutup_pintu.mp3'
});

// Define the videos used in the game.
monogatari.assets ('videos', {

});

// Define the images used in the game.
monogatari.assets ('images', {

});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
	'school': 'school.jpg'
});


// Define the Characters
monogatari.characters ({
	'y': {
		name: 'Yui',
		color: '#5bcaff'
	},

	'arif': {
		name: 'Arif',
		directory: 'Arif',
		sprites: {
			normal: 'Arif_Half.png'
		}
	},

	'nadia': {
		name: 'Nadia',
		directory: 'Nadia',
		sprites: {
			normal: 'half_nadia.png'
		}
	},

	'p_andi': {
		name: 'Pak Andi',
		directory: 'Pak_Andi',
		sprites: {
			normal: 'half_pak_andi.png'
		}
	},

	'roy': {
		name: 'Roy',
		directory: 'Roy',
		sprites: {
			normal: 'half_roy.png'
		}
	},

	'kinan': {
		name: 'Kinan',
		directory: 'Kinan',
		sprites: {
			normal: 'Kinan_pajama_half.png'
		}
	},

	'reporter': {
		name: 'Reporter'
	}
});

monogatari.script ({
	// The game starts here.
	'Start': [
		'jump PartOne',
	]
});