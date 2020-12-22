monogatari.script({
    // Part one
    'PartOne': [
        "reporter Tinjauan keadaan cuaca pada hari ini menunjukkan keadaan cuaca cerah di kota " +
        "diperkirakan suhu naik menjadi 32 derajat celcius. lalu lintas sekarang terlihat macet di sepanjang jalan",
        "arif Huaaaaaahhh...",
        "aku membuka mataku yang terpapar sinar mentari pagi.",
        "arif Wah pagi yang cerah.",
        "arif Tapi kok lebih panas ya dari kemaren.",
        "arif Matikan Ac dulu lah, sekalian buka jendela.",
        "Hmmm apakah kinan sudah bangun?",
        //"Line 9",
        "play sound door_open",
        "arif Kinan, Kinan.",
        "arif Ayo bangun, sudah pagi ni.",
        "play voice 001",
        "kinan huuuuhhh..",
        "dengan mata yang masih tertutup.",
        "play voice 002",
        "kinan 5 menit lagi kak...",
        "arif Eh jangan gitu, adek kan sudah besar, harus bangun pagi dong biar sehat",
        "play voice 003",
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
        "play voice 004",
        "kinan heeeehh.. buat apa buka jendela? AC kan lebih dingin, kalau jendelanya dibuka kan jadi panas kaka.." +
        " kinan ngga mau, ntar kepanasan.",
        "arif hhhhmmmmm.",
        "play voice 005",
        "kinan Iya kak, nanti kinan buka-in, kinan mau mandi dulu.",
        "jump partOneCont"
    ],

    'mandi': [
        "play voice 006",
        "kinan Gak, kinan malas mandi, mau mager aja seharian tehe.",
        "arif hhhmmmmmm",
        "play voice 007",
        "kinan Iya kak, kakak juga jangan lupa mandi, bau tau..",
        "jump partOneCont"
    ],

    'partOneCont': [
        "Kinan pun berjalan menuju kamar mandi.",
        "arif Jangan lupa nanti buka jendela kamarmu ya.",
        "play voice 008",
        "kinan Siap kak.",
        "Line 33",
        "play voice 009",
        "kinan Buat apa sih buka jendela kaka? kan lebih enak ditutup aja terus " +
        "dihidupin ac biar dingin.",
        "arif Kinan tau beruang di kutub?",
        "play voice 010",
        "kinan Tau lah, kan kinan suka sama beruang. hehehe..",
        "arif Kalo Kinan gunakan AC terus menerus kasihan beruang di Kutub, " +
        "nanti es nya mencair tidak ngga ada tempat tinggal beruangnya. " +
        "mau liat beruangnya sedih ngga ada punya tempat tinggal lagi?",
        "play voice 011",
        "kinan Ngga mau ah. Ntar beruangnya bisa mati, kinan kan jadi sedih.",
        "arif Kalo kinan sedih berarti Kinan sudah tau kan apa yang harus dilakuin?",
        "play voice 012",
        //(Note: klo cuma buka jendela sama aja boong)
        "kinan Oke kak, Kinan buka jendela dulu.",
        //"Line 43",
        "arif Hari ini kayanya buat roti bakar aja paling ya.",
        "Setelah beberapa menit membuat roti bakar.",
        "arif Akhirnya sudah jadi.",
        "play voice 013",
        "kinan Ayo kak kita berangkat bareng.",
        "arif Iya iya, semangat sekali Kinan.",
        "play voice 014",
        "kinan Hehehe..",
        "arif Nih bekal buat mu nanti di sekolah.",
        "play voice 015",
        "kinan Makasih kak",
        "(Need to change) Mereka berangkat ke sekola bersama - sama",
        "(sfx close_door)",
        "jump PartTwo"
    ]

});