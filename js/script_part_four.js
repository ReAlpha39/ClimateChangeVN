monogatari.script({
    // Scene Hiruyasumi
    'PartFour': [
        "play music bgm03 with loop",
        "arif Makan bareng yok Roy",
        "show character roy senyum with fadeIn",
        "play voice 079",
        "roy Ayok lah.",
        "show character roy bicara",
        "play voice 080",
        "roy Ikut ngga Nad?",
        "show character roy bicara at left with move transition 1s",
        "show character nadia sekolahSenyum at right with fadeIn",
        "play voice 081",
        "nadia Boleh.",
        "show background kelasSiang",
        "show scene kelasSiang with fadeOut duration 1s",
        "wait 1000",
        "show scene #000000",
        "Setelah itu kami pun makan siang dan mengikuti pelajaran hingga akhir",
        //bell sekolah
        //Tak lama kemudian roy tiba tiba menghampiri ku.
        "show scene kelasSore with fadeIn duration 1s",
        "wait 1000",
        "show character roy bicara with fadeIn",
        "play voice 082",
        "roy Rif, mau ikut ga nih?",
        "arif Kemana?",
        "show character roy senyum",
        "play voice 083",
        "roy Biasa ngabisin waktu lah.",
        {
            'Choice': {
                'Dialog': 'arif',
                'Yes': {
                    'Text': 'Boleh nih.',
                    'Do': 'jump partFour_One'
                },
                'No': {
                    'Text': 'Hmmm, keknya ga deh.',
                    'Do': 'jump partFour_Two'
                }
            }
        }
    ],

    'partFour_One': [
        "arif Boleh nih.",
        "show character roy bicara",
        "play voice 084",
        "roy Ada rekomendasi ngga?",
        "arif Ke Mall gimana?",
        "show character roy tertawaSenang",
        "play voice 085",
        "roy Boleh nih. Bareng aja ya kita ntar.",
        "arif Oke sip.",
        "jump partFourCont"
    ],

    'partFour_Two': [
        "arif Hmmm, keknya ga deh.",
        "show character roy normal",
        "play voice 086",
        "roy Gue ga ada teman nih Rif, temenin dong.",
        "arif Gimana ya?",
        "show character roy bicara",
        "play voice 087",
        "roy Ayolah kita ke mall ngabisin waktu, ntar ku bayarin dah.",
        //Impro "Eee.. oke deh."
        "arif hmm... ges kan",
        "jump partFourCont"
    ],

    'partFourCont': [
        //Nadia datang menghampiri ku dan Roy.
        "show character roy bicara at left with move transition 1s",
        "show character nadia sekolahNormal at right with fadeIn",
        "play voice 088",
        "nadia Kalian pada bahas apa nih?",
        "arif Mau ngabisin waktu nih, dari pada ngga ada kerjaan dirumah.",
        "show character nadia sekolahBicara at right",
        "play voice 089",
        "nadia Emangnya pada mau ngabisin waktu dimana?",
        {
            'Choice': {
                'Dialog': 'arif',
                'Yes': {
                    'Text': 'Ini mau pergi ke mall, mau ikut gak Nad?',
                    'Do': 'jump partFour_Three'
                },
                'No': {
                    'Text': 'Mmm...',
                    'Do': 'jump partFour_Four'
                }
            }
        }
    ],

    'partFour_Three': [
        "arif Ini mau pergi ke mall, mau ikut gak Nad?",
        "show character nadia sekolahGembira at right",
        "play voice 090",
        "nadia Ayo, mumpung ga ada tugas dari guru nih.",
        "jump partFourContTwo"
    ],

    'partFour_Four': [
        "arif Mmm...",
        "show character nadia sekolahSenang at right",
        "play voice 091",
        "nadia Gimana kalo kita ke mall aja?",
        "show character roy gugup at left",
        "play voice 092",
        "roy E... Iya sih kita juga rencana mau ke mall.",
        "show character nadia sekolahGembira at right",
        "play voice 093",
        "nadia Aku ikut ya. Hehe...",
        "jump partFourContTwo"
    ],

    'partFourContTwo': [
        "show character roy kaget at left",
        "play voice 094",
        "roy Lu ikut juga, motor ku cuman muat 2 orang.",
        "show character nadia sekolahBicara at right",
        "play voice 095",
        "nadia Kan aku bisa naik KRL.",
        "show character roy gugup at left",
        "play voice 096",
        "roy Waduh...",
        "show character nadia sekolahMarah at right",
        "play voice 097",
        "nadia Kenapa? ga senang kah aku ikut?", //(muka marah)
        //"show character roy gugup with fadeIn",
        "play voice 098",
        "roy E.. e... gak kok.",
        "arif Dah lah jangan berantem.",
        "arif Ini mau ngumpul dimana?",
        "show character roy bicara at left",
        "show character nadia sekolahNormal at right",
        "play voice 099",
        "roy Di depan stasiun aja gimana?",
        "show character nadia sekolahSenyum at right",
        "play voice 100",
        "nadia Boleh tuh.",
        "arif Setuju nih.",
        "show character roy tertawaSenang at left",
        "play voice 101",
        "roy Oke ayok gas.",
        "show character nadia sekolahBicara at right",
        "show character roy normal at left",
        "play voice 102",
        "nadia Aku mau ganti pakaian dulu, kalian duluan aja.",
        "arif Oke deh.",
        "show character nadia sekolahGembira at right",
        "play voice 103",
        "nadia Mau pulang dulu nih, bye.",
        "arif Bye Nad.",
        //"show character roy bicara with fadeIn",
        "play voice 104",
        "roy Bye juga.",
        "stop music bgm03 with fade 3",
        "hide character nadia sekolahGembira with fadeOutLeft",
        "jump PartFive"
    ]

});