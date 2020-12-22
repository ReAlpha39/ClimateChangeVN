monogatari.script({
    // Scene Hiruyasumi
    'PartFour': [
        "Hiruyasumi",
        "arif Makan bareng yok Roy",
        "roy Ayok lah.",
        "roy Ikut ngga Nad?",
        "nadia Boleh.",
        //Aku, Nadia, dan Roy pergi ke kantin.
        "Setelah itu kami pun makan siang dan mengikuti pelajaran hingga akhir",
        //bell sekolah
        //Tak lama kemudian roy tiba tiba menghampiri ku.
        "roy Rif, mau ikut ga nih?",
        "arif Kemana?",
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
        "roy Ada rekomendasi ngga?",
        "arif Ke Mall gimana?",
        "roy Boleh nih. Bareng aja ya kita ntar.",
        "arif Oke sip.",
        "jump partFourCont"
    ],

    'partFour_Two': [
        "arif Hmmm, keknya ga deh.",
        "roy Gue ga ada teman nih Rif, temenin dong.",
        "arif Gimana ya?",
        "roy Ayolah kita ke mall ngabisin waktu, ntar ku bayarin dah.",
        //Impro "Eee.. oke deh."
        "arif hmm... ges kan",
        "jump partFourCont"
    ],

    'partFourCont': [
        //Nadia datang menghampiri ku dan Roy.
        "nadia Kalian pada bahas apa nih?",
        "arif Mau ngabisin waktu nih, dari pada ngga ada kerjaan dirumah.",
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
        "nadia Ayo, mumpung ga ada tugas dari guru nih.",
        "jump partFourContTwo"
    ],

    'partFour_Four': [
        "arif Mmm...",
        "nadia Gimana kalo kita ke mall aja?",
        "roy E... Iya sih kita juga rencana mau ke mall.",
        "nadia Aku ikut ya. Hehe...",
        "jump partFourContTwo"
    ],

    'partFourContTwo': [
        "roy Lu ikut juga, motor ku cuman muat 2 org.",
        "nadia Kan aku bisa naik KRL.",
        "roy Waduh...",
        "nadia Kenapa ga senang kah aku ikut?", //(muka marah)
        "roy E.. e... gak kok.",
        "arif Dah lah jangan berantem.",
        "arif Ini mau ngumpul dimana?",
        "roy Di depan stasiun aja gimana?",
        "nadia Boleh tuh.",
        "arif Setuju nih.",
        "roy Oke ayok gas.",
        "nadia Aku mau ganti pakaian dulu, kalian duluan aja.",
        "arif Oke deh.",
        "nadia Mau pulang dulu nih, bye.",
        "arif Bye Nad.",
        "roy Bye juga.",
        "end"
    ]

});