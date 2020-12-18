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
        "arif Ga ah, mending jalan kaki biar lebih sehat"
    ],

    'partTwoCont_Two': [

    ]
});