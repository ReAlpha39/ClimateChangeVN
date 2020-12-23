monogatari.script({
    // Part one
    'PartOne': [
        "reporter Tinjauan keadaan cuaca pada hari ini menunjukkan keadaan cuaca cerah di kota " +
        "diperkirakan suhu naik menjadi 32 derajat celcius. lalu lintas sekarang terlihat macet di sepanjang jalan",
        "arif Huaaaaaahhh...",
        "show scene kamarArifSiang with fadeIn duration 2s",
        "aku membuka mataku yang terpapar sinar mentari pagi.",
        "arif Wah pagi yang cerah.",
        "arif Tapi kok lebih panas ya dari kemaren.",
        "arif Matikan Ac dulu lah, sekalian buka jendela.",
        "Hmmm apakah kinan sudah bangun?",
        "show scene dalamRumah with fadeIn duration 2s",
        "arif Kinan, Kinan.",
        "play sound door_knock",
        "arif Aku masuk ya..",
        "play sound door_open",
        "show scene kamarKinanSiang with fadeIn duration 2s",
        "arif Ayo bangun, sudah pagi ni.",
        "play voice 001",
        "kinan huuuuhhh..",
        "dengan mata yang masih tertutup.",
        "play voice 002",
        "kinan 5 menit lagi kak...",
        "arif Eh jangan gitu, adek kan sudah besar, harus bangun pagi dong biar sehat",
        "play voice 003",
        "show character kinan piyamaNgantuk center with fadeInUp",
        "kinan Iya kaka..",
        "Kinan bangun dari tempat tidurnya.",
        {
            'Choice': {
                'Dialog': 'arif',
                'Yes': {
                    'Text': 'Suruh kinan buka jendela kamarnya',
                    'Do': 'jump buka_jendela'
                },
                'No': {
                    'Text': 'Suruh kinan mandi',
                    'Do': 'jump mandi'
                }
            }
        }
    ],

    'buka_jendela': [
        "show character kinan piyamaMeledek center with fadeIn",
        "play voice 004",
        "kinan heeeehh.. buat apa buka jendela? AC kan lebih dingin, kalau jendelanya dibuka kan jadi panas kaka.." +
        " kinan ngga mau, ntar kepanasan.",
        "arif hhhhmmmmm.",
        "show character kinan piyamaSenang  with fadeIn",
        "play voice 005",
        "kinan Iya kak, nanti kinan buka-in, kinan mau mandi dulu.",
        "jump partOneCont"
    ],

    'mandi': [
        "show character kinan piyamaMeledek with fadeIn",
        "play voice 006",
        "kinan Gak, kinan malas mandi, mau mager aja seharian tehe.",
        "arif hhhmmmmmm",
        "show character kinan piyamaSenang with fadeIn",
        "play voice 007",
        "kinan Iya kak, kakak juga jangan lupa mandi, bau tau..",
        "jump partOneCont"
    ],

    'partOneCont': [
        "Kinan pun berjalan menuju kamar mandi.",
        "show scene dalamRumah with fadeIn duration 2s",
        "arif Jangan lupa nanti buka jendela kamarmu ya.",
        "show character kinan piyamaBicara",
        "play voice 008",
        "kinan Siap kak.",
        //"Line 33",
        "hide character kinan",
        "show character kinan seragamBicara",
        "play voice 009",
        "kinan Buat apa sih buka jendela kaka? kan lebih enak ditutup aja terus " +
        "dihidupin ac biar dingin.",
        "arif Kinan tau beruang di kutub?",
        "show character kinan seragamBye",
        "play voice 010",
        "kinan Tau lah, kan kinan suka sama beruang. hehehe..",
        "arif Kalo Kinan gunakan AC terus menerus kasihan beruang di Kutub, " +
        "nanti es nya mencair tidak ngga ada tempat tinggal beruangnya. " +
        "mau liat beruangnya sedih ngga ada punya tempat tinggal lagi?",
        "show character kinan seragamBicara",
        "play voice 011",
        "kinan Ngga mau ah. Ntar beruangnya bisa mati, kinan kan jadi sedih.",
        "arif Kalo kinan sedih berarti Kinan sudah tau kan apa yang harus dilakuin?",
        "show character kinan seragamSenyum",
        "play voice 012",
        //(Note: klo cuma buka jendela sama aja boong)
        "kinan Oke kak, Kinan buka jendela dulu.",
        //"Line 43",
        "arif Hari ini kayanya buat roti bakar aja paling ya.",
        "Setelah beberapa menit membuat roti bakar.",
        "arif Akhirnya sudah jadi.",
        "show character kinan seragamBye",
        "play voice 013",
        "kinan Ayo kak kita berangkat bareng.",
        "arif Iya iya, semangat sekali Kinan.",
        "show character kinan seragamBye",
        "play voice 014",
        "kinan Hehehe..",
        "arif Nih bekal buat mu nanti di sekolah.",
        "show character kinan seragamSenyum",
        "play voice 015",
        "kinan Makasih kak",
        "(Need to change) Mereka berangkat ke sekola bersama - sama",
        "(sfx close_door)",
        "jump PartTwo"
    ]

});