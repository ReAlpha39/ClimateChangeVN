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
	'015': '015.mp3',
	'016': '016.mp3',
	'017': '017.mp3',
	'018': '018.mp3',
	'019': '019.mp3',
	'020': '020.mp3',
	'021': '021.mp3',
	'022': '022.mp3',
	'023': '023.mp3',
	'024': '024.mp3',
	'025': '025.mp3',
	'026': '026.mp3',
	'027': '027.mp3',
	'028': '028.mp3',
	'029': '029.mp3',
	'030': '030.mp3',
	'031': '031.mp3',
	'032': '032.mp3',
	'033': '033.mp3',
	'034': '034.mp3',
	'035': '035.mp3',
	'036': '036.mp3',
	'037': '037.mp3',
	'038': '038.mp3',
	'039': '039.mp3',
	'040': '040.mp3',
	'041': '041.mp3',
	'042': '042.mp3',
	'043': '043.mp3',
	'044': '044.mp3',
	'045': '045.mp3',
	'046': '046.mp3',
	'047': '047.mp3',
	'048': '048.mp3',
	'049': '049.mp3',
	'050': '050.mp3',
	'051': '051.mp3',
	'052': '052.mp3',
	'053': '053.mp3',
	'054': '054.mp3',
	'055': '055.mp3',
	'056': '056.mp3',
	'057': '057.mp3',
	'058': '058.mp3',
	'059': '059.mp3',
	'060': '060.mp3',
	'061': '061.mp3',
	'062': '062.mp3',
	'063': '063.mp3',
	'064': '064.mp3',
	'065': '065.mp3',
	'066': '066.mp3',
	'067': '067.mp3',
	'068': '068.mp3',
	'069': '069.mp3',
	'070': '070.mp3',
	'071': '071.mp3',
	'072': '072.mp3',
	'073': '073.mp3',
	'074': '074.mp3',
	'075': '075.mp3',
	'076': '076.mp3',
	'077': '077.mp3',
	'078': '078.mp3',
	'079': '079.mp3',
	'080': '080.mp3',
	'081': '081.mp3',
	'082': '082.mp3',
	'083': '083.mp3',
	'084': '084.mp3',
	'085': '085.mp3',
	'086': '086.mp3',
	'087': '087.mp3',
	'088': '088.mp3',
	'089': '089.mp3',
	'090': '090.mp3',
	'091': '091.mp3',
	'092': '092.mp3',
	'093': '093.mp3',
	'094': '094.mp3',
	'095': '095.mp3',
	'096': '096.mp3',
	'097': '097.mp3',
	'098': '098.mp3',
	'099': '099.mp3',
	'100': '100.mp3',
	'101': '101.mp3',
	'102': '102.mp3',
	'103': '103.mp3',
	'104': '104.mp3',
	'105': '105.mp3',
	'106': '106.mp3',
	'107': '107.mp3',
	'108': '108.mp3',
	'109': '109.mp3',
	'110': '110.mp3',
	'111': '111.mp3',
	'112': '112.mp3',
	'113': '113.mp3',
	'114': '114.mp3',
	'115': '115.mp3',
	'116': '116.mp3',
	'117': '117.mp3',
	'118': '118.mp3',
	'119': '119.mp3',
	'120': '120.mp3',
	'121': '121.mp3',
	'122': '122.mp3',
	'123': '123.mp3',
	'124': '124.mp3',
	'125': '125.mp3',
	'126': '126.mp3',
	'127': '127.mp3',
	'128': '128.mp3',
	'129': '129.mp3',
	'130': '130.mp3',
	'131': '131.mp3',
	'132': '132.mp3',
	'133': '133.mp3',
	'134': '134.mp3',
	'135': '135.mp3',
	'136': '136.mp3',
	'137': '137.mp3',
	'138': '138.mp3',
	'139': '139.mp3',
	'140': '140.mp3',
	'141': '141.mp3',
	'142': '142.mp3',
	'143': '143.mp3',
	'144': '144.mp3',
	'145': '145.mp3',
	'146': '146.mp3',
	'147': '147.mp3',
	'148': '148.mp3',
	'149': '149.mp3',
	'150': '150.mp3',
	'151': '151.mp3',
	'152': '152.mp3',
	'153': '153.mp3',
	'154': '154.mp3',
	'155': '155.mp3',
	'156': '156.mp3',
	'157': '157.mp3'
});

// Define the sounds used in the game.
monogatari.assets ('sounds', {
	'door_open': 'SE_buka_pintu.mp3',
	'door_knock': 'SE_ketuk_pintu.mp3',
	'door_close': 'SE_tutup_pintu.mp3',
	'bell_sekolah': 'SE_Bel_Sekolah_v2.mp3',
	'burung_short': 'SE_burung_short.mp3',
	'jalanan': 'SE_jalan.mp3',
	'kemacetan': 'SE_Jalan_bising.mp3',
	'cicadas': 'SE_jangkrik.mp3',
	'jendela': 'SE_jendela.mp3',
	'kelas': 'SE_Siswa_v2.mp3',
	'cicadas2': 'SE_tonggaret.mp3',
	'motorStartRun': 'SE_engine_start.mp3',
	'motorStartIdle': 'SE_cub_engine_start_idling_loop.mp3',
	'motorStart': 'SE_cub_quickly_start.mp3',
	'motorStop': 'SE_engine_stop.mp3',
	'motorDorong': 'SE_cub_move_small_road.mp3',
	'motorIdle': 'SE_cub_idling_loop.mp3',
	'klakson': 'SE_klakson.mp3',
	'motorJalan': 'SE_motor jalan.mp3',
	'motorJalanSlow': 'SE_motor jalan_slow.mp3',

});

// Define the videos used in the game.
monogatari.assets ('videos', {

});

// Define the images used in the game.
monogatari.assets ('images', {

});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
	'dalamRumah': 'dalam_rumah_arif.png',
    'jalanRaya': 'jalan_raya.png',
    'jalanSiang': 'jalan_siang.png',
    'jalanSore': 'jalan_sore.png',
    'kamarArifMalam': 'kamar_arif_malam.png',
	'kamarArifSiang': 'kamar_arif_siang.png',
	'kamarKinanMalam': 'kamar_kinan_malam.png',
	'kamarKinanSiang': 'kamar_kinan_siang.png',
	'kamarNadia': 'kamar_nadia.png',
	'kelasSiang': 'kelas_siang.png',
	'kelasSore': 'kelas_sore.png',
	'langitSiang': 'langit_siang.png',
	'langitSore': 'langit_sore.png',
	'langitMalam': 'langit_malam.png',
	'lorongKelasSiang': 'lorongkelas_siang.png',
	'lorengkelasSore': 'lorongkelas_sore.png',
	'stasiun': 'stasiun.png',
	'stasiunSore': 'stasiun_sore.png'
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
			bebasNormal: 'normal_nadiabebas.png',
			sekolahNormal: 'normal_nadiasekolah.png',
			bebasBicara: 'bicara_nadiabebas.png',
			sekolahBicara: 'bicara_nadiasekolah.png',
			bebasGembira: 'gembira_nadiabebas.png',
			sekolahGembira: 'gembira_nadiasekolah.png',
			sekolahKaget: 'kaget_nadiasekolah.png',
			sekolahMalu: 'malu_nadiasekolah.png',
			bebasMarah: 'marah_nadiabebas.png',
			sekolahMarah: 'marah_nadiasekolah.png',
			bebasSenang: 'senang_nadiabebas.png',
			sekolahSenang: 'senang_nadiasekolah.png',
			bebasSenyum: 'senyum_nadiabebas.png',
			sekolahSenyum: 'senyum_nadiasekolah.png'
		}
	},

	'p_andi': {
		name: 'Pak Andi',
		directory: 'Pak_Andi',
		sprites: {
			normal: 'normal_pakandi.png',
			bicara: 'bicara_pakandi.png',
			senang: 'senang_pakandi.png'
		}
	},

	'roy': {
		name: 'Roy',
		directory: 'Roy',
		sprites: {
			normal: 'normal_roy.png',
			bicara: 'bicara_roy.png',
			gugup: 'gugup_roy.png',
			kaget: 'kaget_roy.png',
			marah: 'marah_roy.png',
			ngejek: 'mengejek_roy.png',
			murung: 'murung_roy.png',
			ngambek: 'ngambek_roy.png',
			senyum: 'senyum_roy.png',
			tertawaSenang: 'tertawa_senang_roy.png'

		}
	},

	'kinan': {
		name: 'Kinan',
		directory: 'Kinan',
		sprites: {
			piyamaNormal: 'normal_kinanpajama.png',
			seragamNormal: 'normal_kinanuniform.png',
			piyamaBicara: 'bicara_kinanpajama.png',
			seragamBicara: 'bicara_kinanuniform.png',
			seragamBye: 'fresh_gembira_kinanuniform.png',
			piyamaKaget: 'kaget_kinanpajama.png',
			piyamaMeledek: 'meledek_kinanpajama.png',
			piyamaNgantuk: 'ngantuk_kinanpajama.png',
			piyamaSedih: 'sedih_kinanpajama.png',
			seragamSedih: 'sedih_kinanuniform.png',
			piyamaSenang: 'senang_kinanpajama.png',
			seragamSenang: 'senang_kinanuniform.png',
			seragamSenyum: 'senang_kinanuniform.png',
		}
	},

	'reporter': {
		name: 'Reporter'
	},

	'siswaOne': {
		name: 'Siswa 1'
	},

	'siswaTwo': {
		name: 'Siswa 2'
	},

	'ibuNadia': {
		name: 'Ibu Nadia'
	},
});

monogatari.script ({
	// The game starts here.
	'Start': [
		'jump PartOne',
	]
});