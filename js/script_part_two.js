monogatari.script({
    // Part two
    'PartTwo': [
        "Sesampainya di persimpangan",
        "play voice 016",
        "kinan Kak, pergi dulu ya. bye - bye",
        "arif Hati - hati ya dek.",
        "Tidak lama kemudian, Roy teman sekelasku menghampiriku " +
        "dengan motornya.",
        //Sfx motor
        //"play voice 017",
        "roy Hey Arif.",
        "arif Eh ada Roy.",
        //"play voice 018",
        "roy Sendiri aja? mana pacar mu? hahah", //Ekspresi ngejek ketawa
        {
            'Choice': {
                'Dialog': 'arif',
                'Yes': {
                    'Text': 'Aku ngga punya pacar kok',
                    'Do': 'jump partTwo_One'
                },
                'No': {
                    'Text': 'Pacarku masih dipinjam orang lain. (Note: Sambil tertawa??)',
                    'Do': 'jump partTwo_Two'
                }
            }
        }
    ],

    'partTwo_One': [
        "arif Aku ngga punya pacar kok",
        //"play voice 019",
        "roy Dasar ngenes amat kamu rif, hahahah",
        "arif Kok punya temen kayak gini ya..",
        //"play voice 020",
        "roy Oh gitu ya kamu rif.",
        "jump partTwoCont"
    ],

    'partTwo_Two': [
        "arif Pacarku masih dipinjam orang lain.",
        //"play voice 021",
        "roy Ah, bisa aja kamu Rif. bilang aja jomblo susah amat dah",
        "arif Iya nih aku jomblo, cariin kek pacar buat ku. hehehe..",
        //"play voice 022",
        "roy Aman, disekolah banyak kok cewek. hahah..",
        "jump partTwoCont"
    ],

    'partTwoCont': [
        //"play voice 023",
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
        //"play voice 024",
        "roy Ayo naik",
        "Kemudian aku pun naik ke motor arif",
        //sfx knalpot motor
        "jump partTwoCont_Two"
    ],

    'partTwo_Four': [
        "arif Ga ah, mending jalan kaki biar lebih sehat",
        //"play voice 025",
        "roy Ya elah, jalan kaki ma lama.",
        //"play voice 026",
        "roy Mending naik motor aja, biar cepat sampai.",
        "arif Makasih roy, tapi ku pengen jalan kaki aja.",
        //"play voice 027",
        "roy Ya udah lah, bareng aja sama kamu.",
        "arif Gapapa nih?",
        //"play voice 028",
        "roy Ya gapapa.",
        "jump partTwoCont_Two"
    ],

    'partTwoCont_Two': [
        "Beberapa menit kemudian",
        //"play voice 029",
        "roy Tuh ada Nadia, Rif.",
        "arif Mau disamperin kah?",
        //"play voice 030,
        "roy Ayok",
        //Line 111 & 112
        //hmm wakannai
        "arif Pagi Nadia.",
        "play voice 031",
        "nadia Eh ada Arif sama Roy, pagi juga.",
        //"play voice 032",
        "roy Pagi Nadia.",
        "play voice 033",
        "nadia Sejak kapan kamu bawa motor ke sekolah sih Roy?",
        //"play voice 034",
        "roy Baru tadi pagi.",
        "play voice 035",
        "nadia Rumah mu kan dekat, masa masih bawa motor juga.",
        //"play voice 036",
        "roy Ih biarin, kan motorku juga.",
        //"play voice 037",
        "roy Dah lah mau cabut dulu",
        //"play voice 038",
        "roy Bye.",
        //Line 124
        "arif Eh turunin aku dulu. Biar aku bareng ma Nadia aja.",
        //"play voice 039",
        "roy Oke deh",
        "Akupun turun dari motor Roy & dia langsung cabut.",
        "play voice 040",
        "nadia Lah kenapa ga bareng sama Roy?",
        "arif Gapapa sih, mau bareng sama kamu aja.",
        "play voice 041",
        "nadia Hoooo...",
        "arif Ngomong ngomong, tadi si Roy ngambek tuh.",
        "play voice 042",
        "nadia Hah ngambek!?",
        "arif Iya pas kamu nasehatin tadi.",
        "play voice 043",
        "nadia Oalah, aku nasehatin supaya dia tuh sadar jangan bawa motor ke sekolah.",
        "play voice 044",
        "nadia Karena bisa menabah efek dari rumah kaca.",
        //hmm bukannya si arif uda paham ya sama rumah kaca?
        //ref. script part one
        "arif Huhh? Rumah kaca?? Maksud mu pelajaran kita minggu kemaren ya.",
        "play voice 045",
        "nadia Iya, nah kalo misalnya terjadi secara terus menerus jadinya suhu di bumi jadi panas.",
        "arif Wah, Kamu pintar banget nad. aku aja masih bingung tentang pembahasan kemaren.",
        "play voice 046",
        "nadia hehh!!", //(Muka malu)
        "arif Kenapa Nad?", //Donkan ternyata ini protagonist
        "play voice 047",
        "nadia e... e... gak ada.", // hmm menarik2
        "arif Oalah. kirain kenapa.", //Ngga peka emng v:
        "play voice 048",
        "nadia dah keburu telat nih, ayok cepat",
        "arif Oke",
        "jump PartThree"
    ]
});