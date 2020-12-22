monogatari.script({
    // Scene Sekolah
    'PartThree': [
        //sfx open door
        "siswaOne Hey.", //Rada aneh, knpa ngga
        "siswaTwo Halo.",//kek biasa aja seperti "Pagi"?
        "siswaOne Ngomong ngomong, Kalian tau nggak " +
        "kalo skrng di daerah kita sudah terlalu panas?",
        "siswaTwo Ya nih, aku juga ngerasa begitu.",
        "Dulu kan daerah kita dingin ya.", //Dulu? tahun brpa? lul
        "siswaTwo Iya, dulu itu bisa sampe 18-25 derajat aja, "+
        "skrng saya dengar berita pagi tadi malah suhunya 35 derajat.",
        "siswaOne Serius lu?",
        "siswaTwo Iya serius.",
        "siswaOne Apa jangan jangan di daerah kita banyak yang "+
        "make kendaraan makanya jadi panas ya.",
        "siswaTwo Bisa jadi sih.",
        "siswaOne Waduh aku kesini malah bawa sepeda motor loh.",
        "siswaTwo Besok jangan bawa deh coba untuk 1 bulan dulu. "+
        "Biar kita bareng gitu pergi ke sekolah jalan kaki.",
        "siswaOne Oke siap.",
        "nadia Tuh dengerin gak yg teman lain bilang?",
        "roy Ah bodoh lah, aku mah santai aja. panas kek gini mah biasa.",
        "arif Gak usah gitu lah Roy, ntar nambah panas lagi kalo kamu bawa motor.",
        "nadia Betul tuh roy.",
        "roy Dah lah. Bahas topik lain ngapa?", //(Ngotot)
        //sfx buka pintu
        //Andi sensei masuk kelas.
        "p_andi Selamat pagi semua.",
        "p_andi Pagi ini kita akan mnmperdalam materi tentang rumah kaca.",
        "p_andi Sebelum masuk ke materi, disini bapak bakal mengulang materi minggu kemaren.",
        "p_andi Bapak akan memberikan 1 pertanyaan buat kelas ini sebelum masuk ke materi.",
        "p_andi Pertanyaannya adalah Efek rumah kaca disebabkan oleh "+
        "meningkatnya emisi gas. Apa saja gas tersebut?",
        //Improvisasi Line 180
        "Tidak ada seseorang pun yang menjawab.", //typical murid
        "p_andi Kok diam nih, ok saya tunjuk aja ya orangnya.", //typical guru
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
        "p_andi Yup betul sekali, tidak hanya senyawa CO2 "+
        "tetapi ada juga gas lain ada yang tau?",
        "jump partThreeCont"
    ],

    'partThree_Two': [
        //harusnya "Jawabannya kurang tepat" biar halus gitu
        "p_andi jawabannya salah, ada yang tau gas apa saja?",
        "jump partThreeCont"
    ],

    'partThreeCont': [
        "Nadia mengangkat tangannya.",
        "p_andi Ya nadia, silahkan dijawab.",
        "nadia Efek rumah kaca disebabkan oleh meningkatnya emisi "+
        "gas-gas seperti karbondioksida, metana, dinitrooksida, dan CFC "+
        "atau chlorofluorocarbons.",
        "p_andi Yup tepat sekali, gas gas itulah nanti yang membuat energi "+
        "matahari terperangkap dalam atmosfer bumi.",
        "p_andi Sehingga akan meningkatkan efek pemanasan tambahan "+
        "terhadap permukaan bumi atau yang kita kenal dengan pemanasan global.",
        "Pak Andi pun menjelaskan materinya kepada kami.",
        "Saking asiknya belajar bersama pak andi, tanpa sadar bel istirahat pun berbunyi.",
        "end",
        "jump PartFour"
    ]

});