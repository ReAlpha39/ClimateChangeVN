monogatari.script({
    // Part two
    'PartTwo': [
        "Sesampainya di persimpangan",
        "kinan Kak, pergi dulu ya. bye - bye",
        "arif Hati - hati ya dek.",
        "Tidak lama kemudian, Roy teman sekelasku menghampiriku " +
        "dengan motornya.",
        //Sfx motor
        "roy Hey Arif.",
        "arif Eh ada Roy.",
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
        "roy Dasar ngenes amat kamu rif, hahahah",
        "arif Kok punya temen kayak gini ya..",
        "roy Oh gitu ya kamu rif.",
        "jump partTwoCont"
    ],

    'partTwo_Two': [
        "arif Pacarku masih dipinjam orang lain.",
        "roy Ah, bisa aja kamu Rif. bilang aja jomblo susah amat dah",
        "arif Iya nih aku jomblo, cariin kek pacar buat ku. hehehe..",
        "roy Aman, disekolah banyak kok cewek. hahah..",
        "jump partTwoCont"
    ],

    'partTwoCont': [
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
        "roy Ayo naik",
        "Kemudian aku pun naik ke motor arif",
        //sfx knalpot motor
        "jump partTwoCont_Two"
    ],

    'partTwo_Four': [
        "arif Ga ah, mending jalan kaki biar lebih sehat",
        "roy Ya elah, jalan kaki ma lama.",
        "roy Mending naik motor aja, biar cepat sampai.",
        "arif Makasih roy, tapi ku pengen jalan kaki aja.",
        "roy Ya udah lah, bareng aja sama kamu.",
        "arif Gapapa nih?",
        "roy Ya gapapa.",
        "jump  partTwoCont_Two"
    ],

    'partTwoCont_Two': [
        "Beberapa menit kemudian",
        "roy Tuh ada Nadia, Rif.",
        "arif Mau disamperin kah?",
        "roy Ayok",
        //Line 111 & 112
        //hmm wakannai
        "arif Pagi Nadia.",
        "nadia Eh ada Arif sama Roy, pagi juga.",
        "roy agi Nadia.",
        "nadia Sejak kapan kamu bawa motor ke sekolah sih Roy?",
        "roy Baru tadi pagi.",
        "nadia Rumah mu kan dekat, masa masih bawa motor juga.",
        "roy Ih biarin, kan motorku juga.",
        "roy Dah lah mau cabut dulu",
        "roy Bye.",
        //Line 124
        "arif Eh turunin aku dulu. Biar aku bareng ma Nadia aja.",
        "roy Oke deh",
        "Akupun turun dari motor Roy & dia langsung cabut.",
        "nadia Lah kenapa ga bareng sama Roy?",
        "arif Gapapa sih, mau bareng sama kamu aja.",
        "nadia Hoooo...",
        "arif Ngomong ngomong, tadi si Roy ngambek tuh.",
        "nadia Hah ngambek!?",
        "arif Iya pas kamu nasehatin tadi.",
        "nadia Oalah, aku nasehatin supaya dia tuh sadar jangan bawa motor ke sekolah.",
        "nadia Karena bisa menabah efek dari rumah kaca.",
        //hmm bukannya si arif uda paham ya sama rumah kaca?
        //ref. script part one
        "arif Huhh? Rumah kaca?? Maksud mu pelajaran kita minggu kemaren ya.",
        "nadia Iya, nah kalo misalnya terjadi secara terus menerus jadinya suhu di bumi jadi panas.",
        "arif Wah, Kamu pintar banget nad. aku aja masih bingung tentang pembahasan kemaren.",
        "nadia hehh!!", //(Muka malu)
        "arif Kenapa Nad?", //Donkan ternyata ini protagonist
        "nadia e... e... gak ada.", // hmm menarik2
        "arif Oalah. kirain kenapa.", //Ngga peka emng v:
        "nadia dah keburu telat nih, ayok cepat",
        "arif Oke",
        "end"
        //"jump PartThree"
    ]
});