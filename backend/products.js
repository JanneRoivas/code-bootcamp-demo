

const productList =
    [
        {"id": 1, "tyyppi":"Kakut","nimi": "Täytekakku","kuvaus":"", "ainesosat": "Vehnäjauho, sokeri, vesi, mansikka (12 %), kananmuna, laktoositon kerma, tärkkelyssiirappi, rypsiöljy, emulgointiaineet (E471, E475), kovetettu kasvirasva (palmu, kookos), maitojauhe, maitoproteiini, muunnettu maissitärkkelys, nostatusaineet (E450, E500), stabilointiaineet (E263, E340), sakeuttamisaineet (E440, E401, E463), happamuudensäätöaine (E330), suola, säilöntäaine (E202), väri (E120) ja aromit."},
        {"id": 2, "tyyppi":"Kakut","nimi": "Juustokakku","kuvaus":"Klassinen, ihanan täyteläinen juustokakku, jossa maistuu häivähdys sitruunaa. Tarjoile marjojen tai marjasoseen kera!","ainesosat": "Laktoositon tuorejuusto 30 % [MAITO, KERMA, suola, sakeuttamisaineet (E407, E410), säilöntäaine (E202), hapate], KANANMUNA, sokeri, VEHNÄJAUHO, laktoositon MAITORAHKA, laktoositon VOI, perunajauho, nostatusaine (E503ii) ja aromit (vanilliini, sitruuna)."},
        {"id": 3, "tyyppi":"Kakut","nimi": "Sacherkakku","kuvaus":"Klassikkojen klassikko, yksi suosituimmista ja kehutuimmista tuotteistamme. Täyteläinen, suklainen elämys, joka tuo annoksen luksusta arjenkin keskelle. Sopii erinomaisesti myös juhlapöytään isommallekin porukalle!","ainesosat": "Sokeri, VEHNÄJAUHO, rypsiöljy, vesi, kaakaojauhe, aprikoosi, KANANMUNA, kovetettu kookosrasva, kaakaomassa, kaakaovoi, tärkkelys (VEHNÄ, peruna), glukoosisiirappi, konjakki, nostatusaineet (E450, E500), emulgointiaineet (E472e, E471, auringonkukkalesitiini), sakeuttamisaineet (E440, E452), happamuudensäätöaineet (E330, E333), säilöntäaine (E202), väri (E160a), suola ja aromit (mm. vanilja). Kakun suklaakuorrute saattaa sisältää pienen määrän pähkinää ja maitoa. LAKTOOSITON"},
        {"id": 4, "tyyppi":"Kakut","nimi": "Käpykakku","kuvaus":"Klassinen käpykakku, joka hurmaa perinteisyydellään vaativammankin herkkusuun.", "ainesosat": "Kakkupohja (kananmuna, vehnäjauho, sokeri, kaakaojauhe, nostatusaineet [E450, E500], emulgointiaineet [E471, E475], suola, säilöntäaine [E202], aromi), marsipaani (24 %)(sokeri, manteli, glukoosisiirappi, makeutusaine [E420], värit [E160a, E120, E150c, E153], säilöntäaine [E202]), kasvirasvasekoite (kasvirasva ja -öljy (rypsi, palmu, kookos), sokeri, vesi, suola, emulgointiaine [E475], aromit, happamuudensäätöaine [E330]), vadelmahillo (sokeri, vadelma, vesi, hyytelöimisaineet [E440, E1422], happamuudensäätöaineet [E330, E333], säilöntäaine [E202]), vesi ja sokeri."},
        {"id": 5, "tyyppi":"Leivokset","nimi": "Tryffelipallo","kuvaus":"", "ainesosat": "Sokeri, vehnäjauho, kananmuna, rypsiöljy, mustaherukka, vesi, marjat ja hedelmät vaihtelevina osuuksina (mansikka, vadelma, porkkana, ananas, aprikoosi), kasvirasva (palmu, kookos), glukoosisiirappi, kaakaojauhe, rommi, kaakaomassa, muunnettu tärkkelys (maissi, peruna), emulgointiaineet (E471, E475, soija– ja auringonkukkalesitiini), sakeuttamis-aineet (E422, E440), nostatusaineet (E450, E500), jodioitu suola, happa-muudensäätöaine (E330, E333), säilöntäaineet (E202, E281), väri (E120, E160a, punajuuri), kaneli ja aromit (mm. vanilliini)."},
        {"id": 6, "tyyppi":"Leivokset","nimi": "Rommileivos","kuvaus":"Täyteläinen Rommileivos kruunaa kahvihetken. Rapsakka, suklainen kuori ja vadelmainen rommitäyte vievät kielen mennessään ja hurmaavat vaativammankin herkkusuun. Maista ja ihastu!"},
        {"id": 7, "tyyppi":"Leivokset","nimi": "Mokkapalat","kuvaus":"Perinteiset, kuohkeat mokkapalat kätevässä 4 leivoksen pakkauksessa!","ainesosat": "Vehnäjauho, sokeri, kananmuna, rypsiöljy, vesi, laktoositon voi, kaakaojauhe, kahvijauhe, nostatusaineet (E450, E500), kasvirasva (palmu, kookos), suola, ravintokuitu (polydekstroosi), emulgointiaineet (E471, E477, E481), sakeuttamisaineet (E415, E1442 maissi), värit (E100, E101, E120, E131, E160a) ja aromit."},
        {"id": 8, "tyyppi":"Pullat","nimi": "Korvapuusti","kuvaus":"Perinteinen klassikkopulla tuo mieleen muistot mummolasta. Leivottu aitoon voihin, kotimaisista raaka-aineista. Voisiko perinteistä korvapuustia kukaan vastustaa?", "ainesosat": "Vehnäjauho, sokeri, vesi, laktoositon voi, kasvirasva (rypsi, palmu), kananmuna, muunnettu tärkkelys, kaneli, perunarae, hiiva, vehnägluteeni, maitoproteiini, suola, kardemumma, emulgointiaine (E472e) ja aromit."},
        {"id": 9, "tyyppi":"Pullat","nimi": "Omena - vaniljapulla","kuvaus":"Herkulliset, perinteitä kunnioittaen leivotut omena-vaniljapullat tuovat piristyksen arjen keskelle. Kuohkea koostumus ja täyteläinen maku hurmaavat monenlaiset herkuttelijat!","ainesosat": "Vehnäjauho, sokeri, omena (11 %), vesi, laktoositon voi, kasvirasva (rypsi, kookos), kananmuna, hiiva, maitoproteiini, suola, kardemumma, muunnettu tärkkelys (peruna, maissi), emulgointiaineet (E471e, E481) ja aromit (mm. vanilja)."},
        {"id": 10, "tyyppi":"Pullat","nimi": "Hedelmä-rahkatäytepitko","kuvaus":"Keväisessä pitkossa mehevä rahkatäyte sekä raikas, kotimainen hedelmätäyte, jossa ananasta ja aprikoosia.","ainesosat": "Ainesosat: Vehnäjauho, sokeri, vesi, laktoositon voi (maito), rypsiöljy, laktoositon maitorahka (3%), ananas (3%), kannamuna, aprikoosi (1%), hiiva, jodioitu suola, kardemumma, muunnettu tärkkelys (maissi, peruna), sakeuttamisaine (E466), emulgointiaineet (E471, E481), värit (E160a, E171) ja nostatusaineet (E450, E500). Tuote sisältää 25 % hedelmä- ja rahkatäytettä."},
        {"id": 11, "tyyppi":"Tortut","nimi": "Mustaherukka-vanilja kääretorttu","kuvaus":"Herkullinen kääretorttu kahvipöytään.", "ainesosat": "Sokeri, vehnäjauho, kananmuna, kasviöljy ja -rasva (rypsi, palmu, kookos), mustaherukka (10 %), vesi, glukoosisiirappi, emulgointiaineet (E471, E475), sakeuttamisaineet (E422, E440), maissitärkkelys, nostatusaineet (E450, E500), suola, happamuudensäätöaine (E330), säilöntäaine (E202) ja aromit (mm. vanilliini)."},
        {"id": 12, "tyyppi":"Tortut","nimi": "Mansikka-vaniljakääretorttu","kuvaus":"Klassikko-kääretorttu sopii moneen makuun. Täyteläinen mansikan ja vaniljan makuinen täyte ja kuohkea koostumus hurmaavat koko perheen!","ainesosat": "Sokeri, vehnäjauho, kananmuna, rypsiöljy, mansikka (12 %), kasvirasva (SG-palmu, kookos), vesi, glukoosisiirappi, emulgointiaineet (E471, E475), sakeuttamisaineet (E422, E440), maissitärkkelys, nostatusaineet (E450, E500), suola, happamuudensäätöaine (E330), säilöntäaineet (E202, E281), väri (E120) ja aromit (mm. vanilliini)."},
        {"id": 13, "tyyppi":"Tortut","nimi": "Laskiaispulla","kuvaus":"Perinteinen Laskiaspulla, jossa on kotimainen vadelmahillosilmä.", "ainesosat": "VEHNÄJAUHO, laktoositon KERMA (13 %), vadelmatäyte (13 %) [sokeri, vadelma, vesi, hyytelöimisaineet (E1442 peruna, E440), happamuudensäätöaineet(E330, E333), säilöntäaine (E202)], kovetettu kasvirasva ja -öljy (palmu, rapsi, auringonkukka, maissi, SOIJA), sokeri, vesi, KANANMUNA, hiiva, VEHNÄGLUTEENI, jodioitu suola, kardemumma, kasviproteiini, stabilointiaineet (E420, E463), emulgointiaineet (E472e, SOIJALESITIINI, E472b), väri (E160a) ja aromit."},
        {"id": 14, "tyyppi":"Tortut","nimi": "Runebergin torttu","kuvaus":"Voilla leivottu Runebergintorttu, joka on maustettu aidolla punssilla ja maistuvilla manteleilla ja viimeistelty kotimaisella, runsasmarjaisella vadelmahillolla","ainesosat":"VEHNÄJAUHO, sokeri, laktoositon voi (MAITO), vadelmahillo [sokeri, vadelma, vesi, hyytelöimisaine (E440), happamuudensäätöaine (E330), säilöntäaine (E202)], kuorrute [sokeri, vesi, glukoosisiirappi, kasvirasva (palmu)], KANANMUNA, vesi, appelsiininkuori, MANTELI, arrakkipunssi, kardemumma, aromit (sitruuna, vanilliini), nostatusaineet (E450, E500, E503) ja jodioitu suola."},
        {"id": 15, "tyyppi":"Tortut","nimi": "Tippaleipä","kuvaus":"Perinteiset vappuherkut taattuun Elosen laatuun.","ainesosat": "Kasvirasva (palmuöljy), vehnäjauho, vesi, sokeri, kananmuna, maitojauhe, suola, emulgointiaineet (E471, E475) ja vanilliini."}
    ]
    /*
let categories = []
for (i=0;i<productList.length;i++){
    if (productList[i].tyyppi != (productList[i-1].tyyppi)){
        categories[i].tyyppi = productList[i].tyyppi
    } else {categories[i].tyyppi = ""}
}*/

let categories = productList.map(productList => productList.tyyppi)
categoryList = [...new Set(categories)];
console.log(categoryList)

const getProducts = (req,res) =>
    res.send(productList)

const getCategories = (req,res) => 
    res.send(categoryList)
    
const getKakut = (req,res) => 
    res.send(productList.filter((productList) =>
    productList.tyyppi == "Kakut"))

const addProduct = (req,res) => {
    const product = req.body;
    product.id = (productList.slice(-1)[0] || {id: 0}.id +1);
    productList.push(product);
    res.send(product)
}

const deleteProduct = (req,res) => {
    const id = req.params.id;
    const index = productList.findIndex(product => product.id === parseInt(id));
    if (index > -1) {
        const deletedProduct = productList.splice(index,1);
        res.send(deletedProduct)
    }else{
        res.status(404).send('Not found')
    }
}


    module.exports = {
        getProducts,
        getCategories,
        getKakut,
        addProduct,
        deleteProduct
    }