monogatari.script({
    // Part one
    'PartOne': [
        "play sound burung_short with loop",
        "arif Huaaaaaahhh...",
        "show scene kamarArifSiang with fadeIn duration 2s",
        "play music bgm01 with loop",
        "aku membuka mataku yang terpapar sinar mentari pagi.",
        "arif Wah pagi yang cerah.",
        "stop sound burung_short with fade 3",
        "arif Tapi kok lebih panas ya dari kemarin.",
        "arif Matikan Ac dulu lah, sekalian buka jendela.",
        "Kira-Kira Kinan sudah bangun dulu ya?",
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
        "show character kinan piyamaKaget center with fadeIn",
        "play voice 004",
        "kinan heeeehh.. buat apa buka jendela? AC kan lebih dingin, kalau jendelanya dibuka kan jadi panas kaka.." +
        " kinan ngga mau, ntar kepanasan.",
        "arif hhhhmmmmm.",
        "show character kinan piyamaSenang  with fadeIn",
        "play voice 005",
        "kinan Iya kak, nanti Kinan bukain, Kinan mau mandi dulu.",
        "hide character kinan with fadeOut duration 2s",
        "jump partOneCont"
    ],

    'mandi': [
        "show character kinan piyamaMeledek with fadeIn",
        "play voice 006",
        "kinan Gak, kinan malas mandi, mau tiduran aja seharian tehe.",
        "arif hhhmmmmmm",
        "show character kinan piyamaSenang with fadeIn",
        "play voice 007",
        "kinan Iya kak, kakak juga jangan lupa mandi, bau tau..",
        "hide character kinan with fadeOut duration 2s",
        "jump partOneCont"
    ],

    'partOneCont': [
        "Kinan pun berjalan menuju kamar mandi.",
        "show scene dalamRumah with fadeIn duration 2s",
        "arif Jangan lupa nanti buka jendela kamarmu ya.",
        "show character kinan piyamaBicara",
        "play voice 008",
        "kinan Siap kak.",
        //"Line 33", need to edit the effect
        //"hide character kinan with fadeOut",
        "show scene #000000 with fadeIn 2s",
        "wait 100",
        "show scene dalamRumah with fadeIn duration 2s",
        "show character kinan seragamBicara with fadeIn",
        "play voice 009",
        "kinan Buat apa sih buka jendela kaka? kan lebih enak ditutup aja terus " +
        "dihidupin ac biar dingin.",
        "arif Kinan tau beruang di kutub?",
        "show character kinan seragamBye",
        "play voice 010",
        "kinan Tau lah, kan kinan suka sama beruang. hehehe..",
        "arif Kalo kinan gunain AC terus menerus, nanti es ditempat " +
        "tinggal berung itu jadi mencair, emangnya kinan mau kalo beruangnya " +
        "sedih karena es ditempat tinggalnya mencair?",
        "show character kinan seragamSedih",
        "play voice 011",
        "kinan Ngga mau ah. Ntar beruangnya bisa mati, kinan kan jadi sedih.",
        "arif Kalo kinan sedih berarti Kinan sudah tau kan apa yang harus dilakuin?",
        "show character kinan seragamSenyum",
        "play voice 012",
        //(Note: klo cuma buka jendela sama aja boong)
        "kinan Oke kak, Kinan buka jendela dulu.",
        "hide character kinan with fadeOut duration 2s",
        "show scene #000000 with fadeIn 2s",
        "wait 100",
        "show scene dalamRumah with fadeIn duration 2s",
        //"Line 43",
        "arif Hari ini kayanya buat roti bakar aja paling ya.",
        "show scene #000000 with fadeIn 2s",
        "Setelah beberapa menit membuat roti bakar.",
        "show scene dalamRumah with fadeIn duration 2s",
        "arif Akhirnya sudah jadi.",
        "show character kinan seragamBye",
        "play voice 013",
        "kinan Ayo kak kita berangkat bareng.",
        "arif Iya iya, semangat sekali Kinan.",
        "show character kinan seragamBye",
        "play voice 014",
        "kinan Hehehe..",
        "arif Ini bekal buat Kinan nanti di sekolah.",
        "show character kinan seragamSenyum",
        "play voice 015",
        "kinan Makasih kakak.",
        "hide character kinan with fadeOut duration 1s",
        "stop music bgm01 with fade 3",
        "show scene #000000 with fadeIn duration 2s",
        "Kami pun berangkat ke sekolah bersama - sama.",
        //"(sfx close_door)",
        "jump PartTwo"
    ]

});