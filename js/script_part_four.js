monogatari.script({
    // Scene Hiruyasumi
    'PartFour': [
        "Hiruyasumi",
        "arif Makan bareng yok Roy",
        "play voice 080",
        "roy Ayok lah.",
        "play voice 081",
        "roy Ikut ngga Nad?",
        "play voice 082",
        "nadia Boleh.",
        //Aku, Nadia, dan Roy pergi ke kantin.
        "Setelah itu kami pun makan siang dan mengikuti pelajaran hingga akhir",
        //bell sekolah
        //Tak lama kemudian roy tiba tiba menghampiri ku.
        "play voice 083",
        "roy Rif, mau ikut ga nih?",
        "arif Kemana?",
        "play voice 084",
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
        "play voice 085",
        "roy Ada rekomendasi ngga?",
        "arif Ke Mall gimana?",
        "play voice 086",
        "roy Boleh nih. Bareng aja ya kita ntar.",
        "arif Oke sip.",
        "jump partFourCont"
    ],

    'partFour_Two': [
        "arif Hmmm, keknya ga deh.",
        "play voice 087",
        "roy Gue ga ada teman nih Rif, temenin dong.",
        "arif Gimana ya?",
        "play voice 088",
        "roy Ayolah kita ke mall ngabisin waktu, ntar ku bayarin dah.",
        //Impro "Eee.. oke deh."
        "arif hmm... ges kan",
        "jump partFourCont"
    ],

    'partFourCont': [
        //Nadia datang menghampiri ku dan Roy.
        "play voice 089",
        "nadia Kalian pada bahas apa nih?",
        "arif Mau ngabisin waktu nih, dari pada ngga ada kerjaan dirumah.",
        "play voice 090",
        "nadia Emangnya pada mau ngabisin waktu dimana?",
        {
            'Choice': {
                'Dialog': 'arif',
                'Yes': {
                    'Text': 'ini mau pergi ke mall, mau ikut gak Nad?',
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
        "arif ini mau pergi ke mall, mau ikut gak Nad?",
        "play voice 091",
        "nadia Ayo, mumpung ga ada tugas dari guru nih.",
        "jump partFourContTwo"
    ],

    'partFour_Four': [
        "arif Mmm...",
        "play voice 092",
        "nadia Gimana kalo kita ke mall aja?",
        "play voice 093",
        "roy E... Iya sih kita juga rencana mau ke mall.",
        "play voice 094",
        "nadia Aku ikut ya. Hehe...",
        "jump partFourContTwo"
    ],

    'partFourContTwo': [
        "play voice 095",
        "roy Lu ikut juga, motor ku cuman muat 2 org.",
        "play voice 096",
        "nadia Kan aku bisa naik KRL.",
        "play voice 097",
        "roy Waduh...",
        "play voice 098",
        "nadia Kenapa ga senang kah aku ikut?", //(muka marah)
        "play voice 099",
        "roy E.. e... gak kok.",
        "arif Dah lah jangan berantem.",
        "arif Ini mau ngumpul dimana?",
        "play voice 100",
        "roy Di depan stasiun aja gimana?",
        "play voice 101",
        "nadia Boleh tuh.",
        "arif Setuju nih.",
        "play voice 102",
        "roy Oke ayok gas.",
        "play voice 103",
        "nadia Aku mau ganti pakaian dulu, kalian duluan aja.",
        "arif Oke deh.",
        "play voice 104",
        "nadia Mau pulang dulu nih, bye.",
        "arif Bye Nad.",
        "play voice 105",
        "roy Bye juga.",
        "jump PartFive"
    ]

});