monogatari.script({
    // Part one
    'PartOne': [
        "Reporter Tinjauan keadaan cuaca pada hari ini menunjukkan keadaan cuaca cerah di kota" +
        "diperkirakan suhu naik menjadi 32 derajat celcius. lalu lintas sekarang terlihat macet di sepanjang jalan",
        "arif Huaaaaaahhh",
        "aku membuka mataku yang terpapar sinar mentari pagi",
        "arif Wah pagi yang cerah",
        "Matikan AC dan buka jendela rumah",
        "Hmmm apakah kinan sudah bangun?",
        "Line 9",
        "play sound open_door",
        "arif Kinan, Kinan.",
        "arif Ayo bangun, sudah pagi ni",
        "kinan huuuuhhh",
        "dengan mata yang masih tertutup",
        "kinan 5 menit lagi kak...",
        "arif Eh jangan gitu, adek kan sudah besar, harus bangun pagi dong biar sehat",
        "kinan Iya kak..",
        "Kinan bangun dari tempat tidurnya",
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
        "kinan heeeehh.. buat apa buka jendela? AC kan lebih dingin, kalau jendelanya dibuka kan jadi panas.." +
        " kinan ngga mau, ntar kepanasan",
        "arif hhhhmmmmm",
        "kinan Iya kak, nanti kinan buka-in, kinan mau mandi dulu",
        "jump partOneCont"
    ],

    'mandi': [
        "kinan Gak, kinan malas mandi, mau mager aja seharian tehe",
        "arif hhhmmmmmm",
        "kinan Iya kak, kakak juga jangan lupa mandi, bau tau..",
        "jump partOneCont"
    ],

    'partOneCont': [
        "Kinan pun berjalan menuju kamar mandi",
        "arif Jangan lupa nanti buka jendela kamarmu ya",
        "siap kak",
    ]

});