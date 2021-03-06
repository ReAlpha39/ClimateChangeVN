monogatari.script({
    // Part two
    'PartTwo': [
        "show scene jalanSiang with fadeIn duration 2s",
        "play music bgm02 with loop",
        "Sesampainya di persimpangan",
        "show character kinan seragamSenyum with fadeIn",
        "play voice 016",
        "kinan Kak, pergi dulu ya. Bye - bye.",
        "arif Hati - hati ya dek.",
        "hide character kinan with fadeOutRight duration 1s",
        "show background jalanSiang",
        "show scene jalanSiang with fadeOut duration 1s",
        ".....",
        "Tidak lama kemudian, Roy teman sekelasku menghampiriku " +
        "dengan motornya.",
        "show background #000000",
        "show scene jalanSiang with fadeIn duration 1s",
        "play sound motorStop",
        "show character roy normal with fadeInLeft duration 1s",
        "play voice 017",
        "roy Hey Arif.",
        "arif Eh ada Roy.",
        //"show character  with fadeIn",
        "play voice 018",
        "roy Sendiri aja? mana pacar mu? hahah", //Ekspresi ngejek ketawa
        {
            'Choice': {
                'Dialog': 'arif',
                'Yes': {
                    'Text': 'Aku ngga punya pacar kok',
                    'Do': 'jump partTwo_One'
                },
                'No': {
                    'Text': 'Pacarku masih dipinjam orang lain',
                    'Do': 'jump partTwo_Two'
                }
            }
        }
    ],

    'partTwo_One': [
        "arif Aku ngga punya pacar kok",
        "hide character roy",
        "show character roy tertawaSenang",
        "play voice 019",
        "roy Dasar ngenes amat kamu rif, hahahah",
        "arif Kok punya temen kayak gini ya..",
        "show character roy senyum",
        "play voice 020",
        "roy Oh gitu ya kamu rif.",
        "jump partTwoCont"
    ],

    'partTwo_Two': [
        "arif Pacarku masih dipinjam orang lain.",
        "show character roy tertawaSenang",
        "play voice 021",
        "roy Ah, bisa aja kamu Rif. bilang aja jomblo susah amat dah",
        "arif Iya nih aku jomblo, cariin kek pacar buat ku. hehehe..",
        "show character roy tertawaSenang",
        "play voice 022",
        "roy Aman, disekolah banyak kok cewek. hahah..",
        "jump partTwoCont"
    ],

    'partTwoCont': [
        //"show character  with fadeIn",
        "play voice 023",
        'roy Mo bareng ga pake motor ku ini?',
        {
            'Choice': {
                'Dialog': 'arif',
                'Yes': {
                    'Text': 'Hayuk gas',
                    'Do': 'jump partTwo_Three'
                },
                'No': {
                    'Text': 'Ga ah, mending jalan kaki biar lebih sehat',
                    'Do': 'jump partTwo_Four'
                }
            }
        }
    ],

    'partTwo_Three': [
        "arif Hayuk gas",
        "show character roy normal",
        "play voice 024",
        "roy Ayo naik",
        "Kemudian aku pun naik ke motor arif",
        "play sound motorStart",
        "show background jalanSiang",
        "show scene jalanSiang with fadeOut duration 1s",
        "wait 1000",
        "show scene jalanSiang with fadeIn duration 1s",
        "Beberapa menit kemudian",
        "stop sound with fade 3",
        "play sound motorJalan",
        //"show character roy bicara with fadeIn",
        "play voice 029",
        "roy Tuh ada Nadia, Rif.",
        "arif Mau disamperin kah?",
        //"show character roy bicara with fadeIn",
        "play voice 030",
        "roy Ayok",
        "stop sound motorJalan with fade 3",
        "play sound motorStop",
        "jump partTwoCont_Two"
    ],

    'partTwo_Four': [
        "arif Ga ah, mending jalan kaki biar lebih sehat",
        "show character roy senyum",
        "play voice 025",
        "roy Ya elah, jalan kaki ma lama.",
        "show character roy senyum",
        "play voice 026",
        "roy Mending naik motor aja, biar cepat sampai.",
        "arif Makasih roy, tapi ku pengen jalan kaki aja.",
        "show character roy bicara",
        "play voice 027",
        "roy Ya udah lah, bareng aja sama kamu.",
        "arif Gapapa nih?",
        "show character roy bicara",
        "play voice 028",
        "roy Ya gapapa.",
        "hide character roy with fadeOut",
        "Beberapa menit kemudian",
        "play sound motorDorong with loop",
        "show character roy bicara with fadeIn",
        "play voice 029",
        "roy Tuh ada Nadia, Rif.",
        "arif Mau disamperin kah?",
        "show character roy bicara",
        "play voice 030",
        "roy Ayok",
        "stop sound motorDorong with fade 3",
        "hide character roy with fadeOut",
        "jump partTwoCont_Two"
    ],

    'partTwoCont_Two': [
        //Line 111 & 112
        //hmm wakannai
        "arif Pagi Nadia.",
        "show character nadia sekolahSenyum with fadeIn",
        "play voice 031",
        "nadia Eh ada Arif sama Roy, pagi juga.",
        "show character nadia sekolahSenyum at right with move transition 1s",
        "show character roy senyum at left with fadeIn",
        //"show character nadia sekolahSenyum at right",
        "play voice 032",
        "roy Pagi Nadia.",
        "show character nadia sekolahBicara at right",
        "play voice 033",
        "nadia Sejak kapan kamu bawa motor ke sekolah sih Roy?",
        "show character roy bicara at left",
        "play voice 034",
        "roy Baru tadi pagi.",
        //"show character  with fadeIn",
        "play voice 035",
        "nadia Rumah mu kan dekat, masa masih bawa motor juga.",
        "show character roy marah at left",
        "play voice 036",
        "roy Ih biarin, kan motorku juga.",
        //"show character roy marah with fadeIn",
        "play voice 037",
        "roy Dah lah mau cabut dulu",
        //"show character  with fadeIn",
        "play voice 038",
        "roy Bye.",
        //Line 124
        "arif Eh turunin aku dulu. Biar aku bareng sama Nadia aja.",
        "show character roy ngambek at left",
        "play voice 039",
        "roy Oke deh",
        "hide character roy with fadeOutLeft",
        "play sound motorStart",
        "Akupun turun dari motor Roy & dia langsung pergi.",
        "show character nadia sekolahNormal at center with move transition 1s",
        "play voice 040",
        "nadia Lah kenapa ga bareng sama Roy?",
        "arif Gapapa sih, mau bareng sama kamu aja.",
        "show character nadia sekolahBicara",
        "play voice 041",
        "nadia Hoooo...",
        "arif Ngomong ngomong, tadi si Roy ngambek tuh.",
        "show character nadia sekolahKaget",
        "play voice 042",
        "nadia Hah ngambek!?",
        "arif Iya pas kamu nasehatin tadi.",
        "show character nadia sekolahBicara",
        "play voice 043",
        "nadia Oalah, aku nasehatin supaya dia tuh sadar jangan bawa motor ke sekolah.",
        "show character nadia sekolahSenyum",
        "play voice 044",
        "nadia Karena bisa menabah efek dari rumah kaca.",
        //hmm bukannya si arif uda paham ya sama rumah kaca?
        //ref. script part one
        "arif Huhh? Rumah kaca?? Maksudmu pelajaran kita minggu kemaren ya.",
        //"show character  with fadeIn",
        "play voice 045",
        "nadia Iya, nah kalo misalnya terjadi secara terus menerus jadinya suhu di bumi jadi panas.",
        "arif Wah, Kamu pintar banget Nad. Aku aja masih bingung tentang pembahasan kemaren.",
        "show character nadia sekolahKaget",
        "play voice 046",
        "nadia hehh!!", //(Muka malu)
        "arif Kenapa Nad?", //Donkan ternyata ini protagonist
        "show character nadia sekolahMalu",
        "play voice 047",
        "nadia E... e... gak ada.", // hmm menarik2
        "arif Oalah. Kirain kenapa.", //Ngga peka emng v:
        "show character nadia sekolahBicara",
        "play voice 048",
        "nadia Dah keburu telat nih, ayok cepat.",
        "arif Oke",
        "stop music bgm02 with fade 3",
        "show background jalanSiang",
        "show scene jalanSiang with fadeOut duration 1s",
        "wait 1000",
        "show scene #000000",
        "jump PartThree"
    ]
});