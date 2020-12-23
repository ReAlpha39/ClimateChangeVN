monogatari.script({
    // Scene Sekolah
    'PartThree': [
        //sfx open door
        //"play voice 049",
        "siswaOne Hey.", //Rada aneh, knpa ngga
        //"play voice 050",
        "siswaTwo Halo.",//kek biasa aja seperti "Pagi"?
        //"play voice 051",
        "siswaOne Ngomong ngomong, Kalian tau nggak " +
        "kalo skrng di daerah kita sudah terlalu panas?",
        //"play voice 052",
        "siswaTwo Ya nih, aku juga ngerasa begitu.",
        //"play voice 053",
        "siswaOne Dulu kan daerah kita dingin ya.", //Dulu? tahun brpa? lul
        //"play voice 054",
        "siswaTwo Iya, dulu itu bisa sampe 18-25 derajat aja, "+
        "skrng saya dengar berita pagi tadi malah suhunya 35 derajat.",
        //"play voice 055",
        "siswaOne Serius lu?",
        //"play voice 056",
        "siswaTwo Iya serius.",
        //"play voice 057",
        "siswaOne Apa jangan jangan di daerah kita banyak yang "+
        "make kendaraan makanya jadi panas ya.",
        //"play voice 058",
        "siswaTwo Bisa jadi sih.",
        //"play voice 059",
        "siswaOne Waduh aku kesini malah bawa sepeda motor loh.",
        //"play voice 060",
        "siswaTwo Besok jangan bawa deh coba untuk 1 bulan dulu. "+
        "Biar kita bareng gitu pergi ke sekolah jalan kaki.",
        //"play voice 061",
        "siswaOne Oke siap.",
        "play voice 062",
        "nadia Tuh dengerin gak yg teman lain bilang?",
        "play voice 063",
        "roy Ah bodoh lah, aku mah santai aja. panas kek gini mah biasa.",
        "arif Gak usah gitu lah Roy, ntar nambah panas lagi kalo kamu bawa motor.",
        "play voice 064",
        "nadia Betul tuh roy.",
        "play voice 065",
        "roy Dah lah. Bahas topik lain ngapa?", //(Ngotot)
        //sfx buka pintu
        //Andi sensei masuk kelas.
        "play voice 066",
        "p_andi Selamat pagi semua.",
        "play voice 067",
        "p_andi Pagi ini kita akan mnmperdalam materi tentang rumah kaca.",
        "play voice 068",
        "p_andi Sebelum masuk ke materi, disini bapak bakal mengulang materi minggu kemaren.",
        "play voice 069",
        "p_andi Bapak akan memberikan 1 pertanyaan buat kelas ini sebelum masuk ke materi.",
        "play voice 070",
        "p_andi Pertanyaannya adalah Efek rumah kaca disebabkan oleh "+
        "meningkatnya emisi gas. Apa saja gas tersebut?",
        //Improvisasi Line 180
        "Tidak ada seseorang pun yang menjawab.", //typical murid
        "play voice 071",
        "p_andi Kok diam nih, ok saya tunjuk aja ya orangnya.", //typical guru
        "play voice 072",
        "p_andi Ya Arif, silahkan dijawab.",
        {
            'Choice': {
                'Dialog': 'arif',
                'Yes': {
                    'Text': 'CO2 (Karbon dioksida)',
                    'Do': 'jump partThree_One'
                },
                'No': {
                    'Text': 'NO2 (nitrogen dioksida)',
                    'Do': 'jump partThree_Two'
                }
            }
        }
    ],

    'partThree_One': [
        "arif CO2 (Karbon dioksida).",
        "play voice 073",
        "p_andi Yup betul sekali, tidak hanya senyawa CO2 "+
        "tetapi ada juga gas lain ada yang tau?",
        "jump partThreeCont"
    ],

    'partThree_Two': [
        "arif NO2 (nitrogen dioksida)",
        //harusnya "Jawabannya kurang tepat" biar halus gitu
        "play voice 074",
        "p_andi jawabannya salah, ada yang tau gas apa saja?",
        "jump partThreeCont"
    ],

    'partThreeCont': [
        "Nadia mengangkat tangannya.",
        "play voice 075",
        "p_andi Ya Nadia, silahkan dijawab.",
        "play voice 076",
        "nadia Efek rumah kaca disebabkan oleh meningkatnya emisi "+
        "gas-gas seperti karbon dioksida, metana, dinitrooksida, dan CFC "+
        "atau chlorofluorocarbon.",
        "play voice 077",
        "p_andi Yup tepat sekali, gas gas itulah nanti yang membuat energi "+
        "matahari terperangkap dalam atmosfer bumi.",
        "play voice 078",
        "p_andi Sehingga akan meningkatkan efek pemanasan tambahan "+
        "terhadap permukaan bumi atau yang kita kenal dengan pemanasan global.",
        "Pak Andi pun menjelaskan materinya kepada kami.",
        "Saking asiknya belajar bersama pak andi, tanpa sadar bel istirahat pun berbunyi.",
        "jump PartFour"
    ]

});