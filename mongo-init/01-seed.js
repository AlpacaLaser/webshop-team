db = db.getSiblingDB("webshop");

db.products.insertMany(
[
  {
    Name: "Laptop",
    Description: "Nagyon szuper laptop",
    Price: NumberDecimal("299999"),
    Category: "Elektronika",
    Stock: NumberInt("5"),
    ImageUrl: "https://helios-i.mashable.com/imagery/articles/05djrP5PjtVB7CcMtvrTOAP/images-4.fill.size_2000x1125.v1723100793.jpg"
  },
  {
    Name: "iPhone 17",
    Description: "Nagyon okos telefon",
    Price: NumberDecimal("359999"),
    Category: "Elektronika",
    Stock: NumberInt("11"),
    ImageUrl: "https://www.apple.com/hu/iphone-17/images/overview/highlights/ceramic-shield/highlights_ceramic_shield_endframe__cbyipzki5iwi_large.jpg"
  },
  {
    Name: "Raspberry 5",
    Description: "ici-pici számítógép",
    Price: NumberDecimal("19999"),
    Category: "Elektronika",
    Stock: NumberInt("77"),
    ImageUrl: "https://assets.raspberrypi.com/static/8f6eca535dbb23a21eb41a748050e3a0/b0461/16gb.png"
  },
  {
    "Name": "Ultrabook Laptop",
    "Description": "Vékony és könnyű laptop irodai munkához",
    "Price": 329999,
    "Category": "Elektronika",
    "Stock": 8,
    "ImageUrl": "https://images.pexels.com/photos/4065617/pexels-photo-4065617.jpeg?cs=srgb&dl=pexels-cottonbro-4065617.jpg&fm=jpg"
  },
  {
    "Name": "Prémium Alumínium Laptop",
    "Description": "Modern kialakítású laptop mindennapi használatra",
    "Price": 419999,
    "Category": "Elektronika",
    "Stock": 6,
    "ImageUrl": "https://images.pexels.com/photos/8003992/pexels-photo-8003992.jpeg?cs=srgb&dl=pexels-darina-belonogova-8003992.jpg&fm=jpg"
  },
  {
    "Name": "Business Laptop",
    "Description": "Megbízható üzleti laptop hosszú üzemidővel",
    "Price": 389999,
    "Category": "Elektronika",
    "Stock": 11,
    "ImageUrl": "https://images.pexels.com/photos/4065623/pexels-photo-4065623.jpeg?cs=srgb&dl=pexels-cottonbro-4065623.jpg&fm=jpg"
  },
  {
    "Name": "Sötétszürke Notebook",
    "Description": "Elegáns notebook otthoni és céges használatra",
    "Price": 449999,
    "Category": "Elektronika",
    "Stock": 7,
    "ImageUrl": "https://images.pexels.com/photos/13323678/pexels-photo-13323678.jpeg?cs=srgb&dl=pexels-vizito-visitor-management-system-297236022-13323678.jpg&fm=jpg"
  },
  {
    "Name": "Kompakt Laptop",
    "Description": "Kis helyigényű, hordozható laptop",
    "Price": 279999,
    "Category": "Elektronika",
    "Stock": 13,
    "ImageUrl": "https://images.pexels.com/photos/1187692/pexels-photo-1187692.jpeg?cs=srgb&dl=pexels-krzysztof-niedziela-478974-1187692.jpg&fm=jpg"
  },
  {
    "Name": "Tartalomgyártó Laptop",
    "Description": "Laptop kreatív feladatokhoz és multimédiához",
    "Price": 499999,
    "Category": "Elektronika",
    "Stock": 5,
    "ImageUrl": "https://images.pexels.com/photos/15846543/pexels-photo-15846543.jpeg?cs=srgb&dl=pexels-rubaitulazad-15846543.jpg&fm=jpg"
  },
  {
    "Name": "Android Okostelefon",
    "Description": "Korszerű androidos készülék nagy kijelzővel",
    "Price": 149999,
    "Category": "Elektronika",
    "Stock": 19,
    "ImageUrl": "https://images.pexels.com/photos/969462/pexels-photo-969462.jpeg?cs=srgb&dl=pexels-fox-58267-969462.jpg&fm=jpg"
  },
  {
    "Name": "Fekete Okostelefon",
    "Description": "Stílusos fekete okostelefon alkalmazásokhoz és fotózáshoz",
    "Price": 179999,
    "Category": "Elektronika",
    "Stock": 14,
    "ImageUrl": "https://images.pexels.com/photos/17469129/pexels-photo-17469129.jpeg?cs=srgb&dl=pexels-soundarapandian-ms-150090807-17469129.jpg&fm=jpg"
  },
  {
    "Name": "Samsung Okostelefon",
    "Description": "Samsung készülék modern kijelzővel",
    "Price": 199999,
    "Category": "Elektronika",
    "Stock": 10,
    "ImageUrl": "https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?cs=srgb&dl=pexels-luckysam-47261.jpg&fm=jpg"
  },
  {
    "Name": "Prémium Apple Telefon",
    "Description": "Apple okostelefon prémium kivitelben",
    "Price": 429999,
    "Category": "Elektronika",
    "Stock": 8,
    "ImageUrl": "https://images.pexels.com/photos/22032429/pexels-photo-22032429.jpeg?cs=srgb&dl=pexels-laurachouette-22032429.jpg&fm=jpg"
  },
  {
    "Name": "Apple Pro Telefon",
    "Description": "Felsőkategóriás telefon többkamerás rendszerrel",
    "Price": 469999,
    "Category": "Elektronika",
    "Stock": 4,
    "ImageUrl": "https://images.pexels.com/photos/21008947/pexels-photo-21008947.jpeg?cs=srgb&dl=pexels-laurachouette-21008947.jpg&fm=jpg"
  },
  {
    "Name": "Zöld Okostelefon",
    "Description": "Modern kialakítású telefon letisztult dizájnnal",
    "Price": 159999,
    "Category": "Elektronika",
    "Stock": 16,
    "ImageUrl": "https://images.pexels.com/photos/33358389/pexels-photo-33358389.jpeg?cs=srgb&dl=pexels-zeleboba-33358389.jpg&fm=jpg"
  },
  {
    "Name": "Stúdió Fejhallgató",
    "Description": "Kiváló hangzás zenehallgatáshoz és munkához",
    "Price": 45999,
    "Category": "Elektronika",
    "Stock": 22,
    "ImageUrl": "https://images.pexels.com/photos/2919003/pexels-photo-2919003.jpeg?cs=srgb&dl=pexels-thepaintedsquare-2919003.jpg&fm=jpg"
  },
  {
    "Name": "Vezeték nélküli Fejhallgató",
    "Description": "Kényelmes wireless fejhallgató hosszú üzemidővel",
    "Price": 55999,
    "Category": "Elektronika",
    "Stock": 18,
    "ImageUrl": "https://images.pexels.com/photos/34075324/pexels-photo-34075324.jpeg?cs=srgb&dl=pexels-andy-lee-222330306-34075324.jpg&fm=jpg"
  },
  {
    "Name": "DJ Fejhallgató",
    "Description": "Masszív fejhallgató erőteljes hangzással",
    "Price": 62999,
    "Category": "Elektronika",
    "Stock": 9,
    "ImageUrl": "https://images.pexels.com/photos/20385205/pexels-photo-20385205.jpeg?cs=srgb&dl=pexels-paulseling-20385205.jpg&fm=jpg"
  },
  {
    "Name": "Pro Audio Fejhallgató",
    "Description": "Professzionális over-ear fejhallgató stúdiómunkához",
    "Price": 74999,
    "Category": "Elektronika",
    "Stock": 6,
    "ImageUrl": "https://images.pexels.com/photos/10433476/pexels-photo-10433476.jpeg?cs=srgb&dl=pexels-tstudio-34805588-10433476.jpg&fm=jpg"
  },
  {
    "Name": "Vezetékes Billentyűzet",
    "Description": "Egyszerű fekete billentyűzet mindennapi használatra",
    "Price": 8999,
    "Category": "Kiegészítő",
    "Stock": 35,
    "ImageUrl": "https://images.pexels.com/photos/8284886/pexels-photo-8284886.jpeg?cs=srgb&dl=pexels-ian-panelo-8284886.jpg&fm=jpg"
  },
  {
    "Name": "Minimalista Billentyűzet",
    "Description": "Letisztult megjelenésű modern billentyűzet",
    "Price": 12999,
    "Category": "Kiegészítő",
    "Stock": 28,
    "ImageUrl": "https://images.pexels.com/photos/19686530/pexels-photo-19686530.jpeg?cs=srgb&dl=pexels-mintworkspace-19686530.jpg&fm=jpg"
  },
  {
    "Name": "Irodai Billentyűzet",
    "Description": "Kényelmes billentyűzet hosszabb gépeléshez",
    "Price": 14999,
    "Category": "Kiegészítő",
    "Stock": 24,
    "ImageUrl": "https://images.pexels.com/photos/8284886/pexels-photo-8284886.jpeg?cs=srgb&dl=pexels-ian-panelo-8284886.jpg&fm=jpg"
  },
  {
    "Name": "Asztali Billentyűzet",
    "Description": "Stabil és tartós billentyűzet otthoni setuphoz",
    "Price": 10999,
    "Category": "Kiegészítő",
    "Stock": 31,
    "ImageUrl": "https://images.pexels.com/photos/19686530/pexels-photo-19686530.jpeg?cs=srgb&dl=pexels-mintworkspace-19686530.jpg&fm=jpg"
  },
  {
    "Name": "Kompakt Billentyűzet",
    "Description": "Kis méretű billentyűzet szűkebb helyekre",
    "Price": 16999,
    "Category": "Kiegészítő",
    "Stock": 21,
    "ImageUrl": "https://images.pexels.com/photos/8284886/pexels-photo-8284886.jpeg?cs=srgb&dl=pexels-ian-panelo-8284886.jpg&fm=jpg"
  },
  {
    "Name": "Belépőszintű 3D Nyomtató",
    "Description": "Kezdőknek ajánlott 3D nyomtató",
    "Price": 89999,
    "Category": "3D nyomtató",
    "Stock": 7,
    "ImageUrl": "https://images.pexels.com/photos/12698667/pexels-photo-12698667.jpeg?cs=srgb&dl=pexels-introspectivedsgn-12698667.jpg&fm=jpg"
  },
  {
    "Name": "Zárt Kamrás 3D Nyomtató",
    "Description": "Fejlettebb 3D nyomtató zárt kialakítással",
    "Price": 189999,
    "Category": "3D nyomtató",
    "Stock": 3,
    "ImageUrl": "https://images.pexels.com/photos/35595049/pexels-photo-35595049.jpeg?cs=srgb&dl=pexels-fox-58267-35595049.jpg&fm=jpg"
  },
  {
    "Name": "Műhely 3D Nyomtató",
    "Description": "Erősebb modell prototípusok készítéséhez",
    "Price": 154999,
    "Category": "3D nyomtató",
    "Stock": 5,
    "ImageUrl": "https://images.pexels.com/photos/19871866/pexels-photo-19871866.jpeg?cs=srgb&dl=pexels-jakubzerdzicki-19871866.jpg&fm=jpg"
  },
  {
    "Name": "Precíziós 3D Nyomtató",
    "Description": "Pontos nyomtatás részletes modellekhez",
    "Price": 174999,
    "Category": "3D nyomtató",
    "Stock": 4,
    "ImageUrl": "https://images.pexels.com/photos/30275792/pexels-photo-30275792.jpeg?cs=srgb&dl=pexels-jakubzerdzicki-30275792.jpg&fm=jpg"
  },
  {
    "Name": "Prototípus 3D Nyomtató",
    "Description": "Gyors prototípuskészítéshez tervezett nyomtató",
    "Price": 209999,
    "Category": "3D nyomtató",
    "Stock": 2,
    "ImageUrl": "https://images.pexels.com/photos/20688553/pexels-photo-20688553.jpeg?cs=srgb&dl=pexels-jakubzerdzicki-20688553.jpg&fm=jpg"
  },
  {
    "Name": "Programozási Könyv",
    "Description": "Hasznos könyv kezdő és haladó fejlesztőknek",
    "Price": 9999,
    "Category": "Könyv",
    "Stock": 27,
    "ImageUrl": "https://images.pexels.com/photos/32063097/pexels-photo-32063097.jpeg?cs=srgb&dl=pexels-martabranco-32063097.jpg&fm=jpg"
  },
  {
    "Name": "Szoftverfejlesztési Könyv",
    "Description": "Fejlesztési alapelveket bemutató szakmai könyv",
    "Price": 11999,
    "Category": "Könyv",
    "Stock": 20,
    "ImageUrl": "https://images.pexels.com/photos/7013243/pexels-photo-7013243.jpeg?cs=srgb&dl=pexels-cottonbro-7013243.jpg&fm=jpg"
  },
  {
    "Name": "Technológiai Szakkönyv",
    "Description": "Informatikai témájú könyv részletes magyarázatokkal",
    "Price": 13999,
    "Category": "Könyv",
    "Stock": 18,
    "ImageUrl": "https://images.pexels.com/photos/32063097/pexels-photo-32063097.jpeg?cs=srgb&dl=pexels-martabranco-32063097.jpg&fm=jpg"
  },
  {
    "Name": "Fejlesztői Kézikönyv",
    "Description": "Gyakorlati példákkal teli szakmai kézikönyv",
    "Price": 14999,
    "Category": "Könyv",
    "Stock": 15,
    "ImageUrl": "https://images.pexels.com/photos/7013243/pexels-photo-7013243.jpeg?cs=srgb&dl=pexels-cottonbro-7013243.jpg&fm=jpg"
  }
]

)