// Task #-4
// car[1].name // Volvo

// const car = [
//   {name : 'audi'},
//   {name: 'Volvo'}
// ]
// console.log(car[1].name)
////////////////////////////////

// Task #-3
// car.sum() // return 3000000EUR

// const car ={
//   sum:() =>'3000000EUR',
// }
// console.log(car.sum());

/////////////////////////////////////
// Task #-2
// car.model.color // returns red

// const car = {
//   model: {
//     color: "red"
//   }
//
// };
// console.log(car.model.color);

// console.log(car.model.color);
//////////////////////////////////////
// Task #-1
// fruit[0][1]; // returns 'Apple'

// const fruit = [["gig", "Apple"]];
//  console.log(fruit[0][1]);
///////////////////////////////////////

// Task #0
// human.name('Jānis') // returns Jānis

//  const human = {
//   name:() =>"janis"
//  }
// console.log(human.name())

///////////////////////////////////////////
// Tasks #1
// math.sum()()(1,3).sum // return 13

// const math = {
//   sum: () => () => (x: number, y:number) => ({
//     sum: Number(`${x}${y}`),
//   }),
// };
//
// console.log(math.sum()()(1, 3).sum);

//////////////////////////////////////////////////
// Task #2
// human().rights[2][1].amendment[2].paragraph() // 'Lorem Ipsum'

// const human = () => ({
//   rights: [
//     [],
//     [],
//     [
//       [],
//       {
//         amendment: [
//           {},
//           {},
//           {
//             paragraph: () => 'Lorem Ipsum',
//           },
//         ],
//       },
//     ],
//   ] as any,
// });
//
// console.log(human().rights[2][1].amendment[2].paragraph());

//////////////////////////////////////////////////////////////
// Task #3
// returns powered x with y and sum powered by Z
// math(x, y)()()()()()()()()(z) //

// const math228 = (x: number, y: number) => () => () => () => () => () => () => () => () => (z: number) => (Math.pow((x + y), z))
// console.log(math228(2, 2)()()()()()()()()(3));

///////////////////////////////////////////////////////
// Task #4
// Take animal array from
// https://gist.github.com/borlaym/585e2e09dd6abd9b0d0a
// Filter out Animals with letters "A" "Z" "U" "G" and capitalize it

const array = [
  "Aardvark",
  "Albatross",
  "Alligator",
  "Alpaca",
  "Ant",
  "Anteater",
  "Antelope",
  "Ape",
  "Armadillo",
  "Donkey",
  "Baboon",
  "Badger",
  "Barracuda",
  "Bat",
  "Bear",
  "Beaver",
  "Bee",
  "Bison",
  "Boar",
  "Buffalo",
  "Butterfly",
  "Camel",
  "Capybara",
  "Caribou",
  "Cassowary",
  "Cat",
  "Caterpillar",
  "Cattle",
  "Chamois",
  "Cheetah",
  "Chicken",
  "Chimpanzee",
  "Chinchilla",
  "Chough",
  "Clam",
  "Cobra",
  "Cockroach",
  "Cod",
  "Cormorant",
  "Coyote",
  "Crab",
  "Crane",
  "Crocodile",
  "Crow",
  "Curlew",
  "Deer",
  "Dinosaur",
  "Dog",
  "Dogfish",
  "Dolphin",
  "Dotterel",
  "Dove",
  "Dragonfly",
  "Duck",
  "Dugong",
  "Dunlin",
  "Eagle",
  "Echidna",
  "Eel",
  "Eland",
  "Elephant",
  "Elk",
  "Emu",
  "Falcon",
  "Ferret",
  "Finch",
  "Fish",
  "Flamingo",
  "Fly",
  "Fox",
  "Frog",
  "Gaur",
  "Gazelle",
  "Gerbil",
  "Giraffe",
  "Gnat",
  "Gnu",
  "Goat",
  "Goldfinch",
  "Goldfish",
  "Goose",
  "Gorilla",
  "Goshawk",
  "Grasshopper",
  "Grouse",
  "Guanaco",
  "Gull",
  "Hamster",
  "Hare",
  "Hawk",
  "Hedgehog",
  "Heron",
  "Herring",
  "Hippopotamus",
  "Hornet",
  "Horse",
  "Human",
  "Hummingbird",
  "Hyena",
  "Ibex",
  "Ibis",
  "Jackal",
  "Jaguar",
  "Jay",
  "Jellyfish",
  "Kangaroo",
  "Kingfisher",
  "Koala",
  "Kookabura",
  "Kouprey",
  "Kudu",
  "Lapwing",
  "Lark",
  "Lemur",
  "Leopard",
  "Lion",
  "Llama",
  "Lobster",
  "Locust",
  "Loris",
  "Louse",
  "Lyrebird",
  "Magpie",
  "Mallard",
  "Manatee",
  "Mandrill",
  "Mantis",
  "Marten",
  "Meerkat",
  "Mink",
  "Mole",
  "Mongoose",
  "Monkey",
  "Moose",
  "Mosquito",
  "Mouse",
  "Mule",
  "Narwhal",
  "Newt",
  "Nightingale",
  "Octopus",
  "Okapi",
  "Opossum",
  "Oryx",
  "Ostrich",
  "Otter",
  "Owl",
  "Oyster",
  "Panther",
  "Parrot",
  "Partridge",
  "Peafowl",
  "Pelican",
  "Penguin",
  "Pheasant",
  "Pig",
  "Pigeon",
  "Pony",
  "Porcupine",
  "Porpoise",
  "Quail",
  "Quelea",
  "Quetzal",
  "Rabbit",
  "Raccoon",
  "Rail",
  "Ram",
  "Rat",
  "Raven",
  "Red deer",
  "Red panda",
  "Reindeer",
  "Rhinoceros",
  "Rook",
  "Salamander",
  "Salmon",
  "Sand Dollar",
  "Sandpiper",
  "Sardine",
  "Scorpion",
  "Seahorse",
  "Seal",
  "Shark",
  "Sheep",
  "Shrew",
  "Skunk",
  "Snail",
  "Snake",
  "Sparrow",
  "Spider",
  "Spoonbill",
  "Squid",
  "Squirrel",
  "Starling",
  "Stingray",
  "Stinkbug",
  "Stork",
  "Swallow",
  "Swan",
  "Tapir",
  "Tarsier",
  "Termite",
  "Tiger",
  "Toad",
  "Trout",
  "Turkey",
  "Turtle",
  "Viper",
  "Vulture",
  "Wallaby",
  "Walrus",
  "Wasp",
  "Weasel",
  "Whale",
  "Wildcat",
  "Wolf",
  "Wolverine",
  "Wombat",
  "Woodcock",
  "Woodpecker",
  "Worm",
  "Wren",
  "Yak",
  "Zebra",
];
const words = ["a","z","u","g"];
const animals = array.map((lower) => {
  return lower.toLowerCase();
});

const result= animals.filter((animal) => animal.includes("a"||"z"||"u"||"g")).map((animal) =>animal.split('')
    .reduce((a, c) => a + (/[azug]/i.test(c) ? c.toUpperCase() : c.toLowerCase()), ''));

console.log(result);

//////////////////////////////////////////////////////////////////
// Task #5
// take array from https://stackoverflow.com/a/20623472/2927424
// filter out countries that have less than 6 characters
// modify array without nativeName key

// const array = [
//     {"code": "ab", "name": "Abkhaz", "nativeName": "аҧсуа"},
//     {"code": "aa", "name": "Afar", "nativeName": "Afaraf"},
//     {"code": "af", "name": "Afrikaans", "nativeName": "Afrikaans"},
//     {"code": "ak", "name": "Akan", "nativeName": "Akan"},
//     {"code": "sq", "name": "Albanian", "nativeName": "Shqip"},
//     {"code": "am", "name": "Amharic", "nativeName": "አማርኛ"},
//     {"code": "ar", "name": "Arabic", "nativeName": "العربية"},
//     {"code": "an", "name": "Aragonese", "nativeName": "Aragonés"},
//     {"code": "hy", "name": "Armenian", "nativeName": "Հայերեն"},
//     {"code": "as", "name": "Assamese", "nativeName": "অসমীয়া"},
//     {"code": "av", "name": "Avaric", "nativeName": "авар мацӀ, магӀарул мацӀ"},
//     {"code": "ae", "name": "Avestan", "nativeName": "avesta"},
//     {"code": "ay", "name": "Aymara", "nativeName": "aymar aru"},
//     {"code": "az", "name": "Azerbaijani", "nativeName": "azərbaycan dili"},
//     {"code": "bm", "name": "Bambara", "nativeName": "bamanankan"},
//     {"code": "ba", "name": "Bashkir", "nativeName": "башҡорт теле"},
//     {"code": "eu", "name": "Basque", "nativeName": "euskara, euskera"},
//     {"code": "be", "name": "Belarusian", "nativeName": "Беларуская"},
//     {"code": "bn", "name": "Bengali", "nativeName": "বাংলা"},
//     {"code": "bh", "name": "Bihari", "nativeName": "भोजपुरी"},
//     {"code": "bi", "name": "Bislama", "nativeName": "Bislama"},
//     {"code": "bs", "name": "Bosnian", "nativeName": "bosanski jezik"},
//     {"code": "br", "name": "Breton", "nativeName": "brezhoneg"},
//     {"code": "bg", "name": "Bulgarian", "nativeName": "български език"},
//     {"code": "my", "name": "Burmese", "nativeName": "ဗမာစာ"},
//     {"code": "ca", "name": "Catalan; Valencian", "nativeName": "Català"},
//     {"code": "ch", "name": "Chamorro", "nativeName": "Chamoru"},
//     {"code": "ce", "name": "Chechen", "nativeName": "нохчийн мотт"},
//     {"code": "ny", "name": "Chichewa; Chewa; Nyanja", "nativeName": "chiCheŵa, chinyanja"},
//     {"code": "zh", "name": "Chinese", "nativeName": "中文 (Zhōngwén), 汉语, 漢語"},
//     {"code": "cv", "name": "Chuvash", "nativeName": "чӑваш чӗлхи"},
//     {"code": "kw", "name": "Cornish", "nativeName": "Kernewek"},
//     {"code": "co", "name": "Corsican", "nativeName": "corsu, lingua corsa"},
//     {"code": "cr", "name": "Cree", "nativeName": "ᓀᐦᐃᔭᐍᐏᐣ"},
//     {"code": "hr", "name": "Croatian", "nativeName": "hrvatski"},
//     {"code": "cs", "name": "Czech", "nativeName": "česky, čeština"},
//     {"code": "da", "name": "Danish", "nativeName": "dansk"},
//     {"code": "dv", "name": "Divehi; Dhivehi; Maldivian;", "nativeName": "ދިވެހި"},
//     {"code": "nl", "name": "Dutch", "nativeName": "Nederlands, Vlaams"},
//     {"code": "en", "name": "English", "nativeName": "English"},
//     {"code": "eo", "name": "Esperanto", "nativeName": "Esperanto"},
//     {"code": "et", "name": "Estonian", "nativeName": "eesti, eesti keel"},
//     {"code": "ee", "name": "Ewe", "nativeName": "Eʋegbe"},
//     {"code": "fo", "name": "Faroese", "nativeName": "føroyskt"},
//     {"code": "fj", "name": "Fijian", "nativeName": "vosa Vakaviti"},
//     {"code": "fi", "name": "Finnish", "nativeName": "suomi, suomen kieli"},
//     {"code": "fr", "name": "French", "nativeName": "français, langue française"},
//     {"code": "ff", "name": "Fula; Fulah; Pulaar; Pular", "nativeName": "Fulfulde, Pulaar, Pular"},
//     {"code": "gl", "name": "Galician", "nativeName": "Galego"},
//     {"code": "ka", "name": "Georgian", "nativeName": "ქართული"},
//     {"code": "de", "name": "German", "nativeName": "Deutsch"},
//     {"code": "el", "name": "Greek, Modern", "nativeName": "Ελληνικά"},
//     {"code": "gn", "name": "Guaraní", "nativeName": "Avañeẽ"},
//     {"code": "gu", "name": "Gujarati", "nativeName": "ગુજરાતી"},
//     {"code": "ht", "name": "Haitian; Haitian Creole", "nativeName": "Kreyòl ayisyen"},
//     {"code": "ha", "name": "Hausa", "nativeName": "Hausa, هَوُسَ"},
//     {"code": "he", "name": "Hebrew (modern)", "nativeName": "עברית"},
//     {"code": "hz", "name": "Herero", "nativeName": "Otjiherero"},
//     {"code": "hi", "name": "Hindi", "nativeName": "हिन्दी, हिंदी"},
//     {"code": "ho", "name": "Hiri Motu", "nativeName": "Hiri Motu"},
//     {"code": "hu", "name": "Hungarian", "nativeName": "Magyar"},
//     {"code": "ia", "name": "Interlingua", "nativeName": "Interlingua"},
//     {"code": "id", "name": "Indonesian", "nativeName": "Bahasa Indonesia"},
//     {"code": "ie", "name": "Interlingue", "nativeName": "Originally called Occidental; then Interlingue after WWII"},
//     {"code": "ga", "name": "Irish", "nativeName": "Gaeilge"},
//     {"code": "ig", "name": "Igbo", "nativeName": "Asụsụ Igbo"},
//     {"code": "ik", "name": "Inupiaq", "nativeName": "Iñupiaq, Iñupiatun"},
//     {"code": "io", "name": "Ido", "nativeName": "Ido"},
//     {"code": "is", "name": "Icelandic", "nativeName": "Íslenska"},
//     {"code": "it", "name": "Italian", "nativeName": "Italiano"},
//     {"code": "iu", "name": "Inuktitut", "nativeName": "ᐃᓄᒃᑎᑐᑦ"},
//     {"code": "ja", "name": "Japanese", "nativeName": "日本語 (にほんご／にっぽんご)"},
//     {"code": "jv", "name": "Javanese", "nativeName": "basa Jawa"},
//     {"code": "kl", "name": "Kalaallisut, Greenlandic", "nativeName": "kalaallisut, kalaallit oqaasii"},
//     {"code": "kn", "name": "Kannada", "nativeName": "ಕನ್ನಡ"},
//     {"code": "kr", "name": "Kanuri", "nativeName": "Kanuri"},
//     {"code": "ks", "name": "Kashmiri", "nativeName": "कश्मीरी, كشميري‎"},
//     {"code": "kk", "name": "Kazakh", "nativeName": "Қазақ тілі"},
//     {"code": "km", "name": "Khmer", "nativeName": "ភាសាខ្មែរ"},
//     {"code": "ki", "name": "Kikuyu, Gikuyu", "nativeName": "Gĩkũyũ"},
//     {"code": "rw", "name": "Kinyarwanda", "nativeName": "Ikinyarwanda"},
//     {"code": "ky", "name": "Kirghiz, Kyrgyz", "nativeName": "кыргыз тили"},
//     {"code": "kv", "name": "Komi", "nativeName": "коми кыв"},
//     {"code": "kg", "name": "Kongo", "nativeName": "KiKongo"},
//     {"code": "ko", "name": "Korean", "nativeName": "한국어 (韓國語), 조선말 (朝鮮語)"},
//     {"code": "ku", "name": "Kurdish", "nativeName": "Kurdî, كوردی‎"},
//     {"code": "kj", "name": "Kwanyama, Kuanyama", "nativeName": "Kuanyama"},
//     {"code": "la", "name": "Latin", "nativeName": "latine, lingua latina"},
//     {"code": "lb", "name": "Luxembourgish, Letzeburgesch", "nativeName": "Lëtzebuergesch"},
//     {"code": "lg", "name": "Luganda", "nativeName": "Luganda"},
//     {"code": "li", "name": "Limburgish, Limburgan, Limburger", "nativeName": "Limburgs"},
//     {"code": "ln", "name": "Lingala", "nativeName": "Lingála"},
//     {"code": "lo", "name": "Lao", "nativeName": "ພາສາລາວ"},
//     {"code": "lt", "name": "Lithuanian", "nativeName": "lietuvių kalba"},
//     {"code": "lu", "name": "Luba-Katanga", "nativeName": ""},
//     {"code": "lv", "name": "Latvian", "nativeName": "latviešu valoda"},
//     {"code": "gv", "name": "Manx", "nativeName": "Gaelg, Gailck"},
//     {"code": "mk", "name": "Macedonian", "nativeName": "македонски јазик"},
//     {"code": "mg", "name": "Malagasy", "nativeName": "Malagasy fiteny"},
//     {"code": "ms", "name": "Malay", "nativeName": "bahasa Melayu, بهاس ملايو‎"},
//     {"code": "ml", "name": "Malayalam", "nativeName": "മലയാളം"},
//     {"code": "mt", "name": "Maltese", "nativeName": "Malti"},
//     {"code": "mi", "name": "Māori", "nativeName": "te reo Māori"},
//     {"code": "mr", "name": "Marathi (Marāṭhī)", "nativeName": "मराठी"},
//     {"code": "mh", "name": "Marshallese", "nativeName": "Kajin M̧ajeļ"},
//     {"code": "mn", "name": "Mongolian", "nativeName": "монгол"},
//     {"code": "na", "name": "Nauru", "nativeName": "Ekakairũ Naoero"},
//     {"code": "nv", "name": "Navajo, Navaho", "nativeName": "Diné bizaad, Dinékʼehǰí"},
//     {"code": "nb", "name": "Norwegian Bokmål", "nativeName": "Norsk bokmål"},
//     {"code": "nd", "name": "North Ndebele", "nativeName": "isiNdebele"},
//     {"code": "ne", "name": "Nepali", "nativeName": "नेपाली"},
//     {"code": "ng", "name": "Ndonga", "nativeName": "Owambo"},
//     {"code": "nn", "name": "Norwegian Nynorsk", "nativeName": "Norsk nynorsk"},
//     {"code": "no", "name": "Norwegian", "nativeName": "Norsk"},
//     {"code": "ii", "name": "Nuosu", "nativeName": "ꆈꌠ꒿ Nuosuhxop"},
//     {"code": "nr", "name": "South Ndebele", "nativeName": "isiNdebele"},
//     {"code": "oc", "name": "Occitan", "nativeName": "Occitan"},
//     {"code": "oj", "name": "Ojibwe, Ojibwa", "nativeName": "ᐊᓂᔑᓈᐯᒧᐎᓐ"},
//     {
//         "code": "cu",
//         "name": "Old Church Slavonic, Church Slavic, Church Slavonic, Old Bulgarian, Old Slavonic",
//         "nativeName": "ѩзыкъ словѣньскъ"
//     },
//     {"code": "om", "name": "Oromo", "nativeName": "Afaan Oromoo"},
//     {"code": "or", "name": "Oriya", "nativeName": "ଓଡ଼ିଆ"},
//     {"code": "os", "name": "Ossetian, Ossetic", "nativeName": "ирон æвзаг"},
//     {"code": "pa", "name": "Panjabi, Punjabi", "nativeName": "ਪੰਜਾਬੀ, پنجابی‎"},
//     {"code": "pi", "name": "Pāli", "nativeName": "पाऴि"},
//     {"code": "fa", "name": "Persian", "nativeName": "فارسی"},
//     {"code": "pl", "name": "Polish", "nativeName": "polski"},
//     {"code": "ps", "name": "Pashto, Pushto", "nativeName": "پښتو"},
//     {"code": "pt", "name": "Portuguese", "nativeName": "Português"},
//     {"code": "qu", "name": "Quechua", "nativeName": "Runa Simi, Kichwa"},
//     {"code": "rm", "name": "Romansh", "nativeName": "rumantsch grischun"},
//     {"code": "rn", "name": "Kirundi", "nativeName": "kiRundi"},
//     {"code": "ro", "name": "Romanian, Moldavian, Moldovan", "nativeName": "română"},
//     {"code": "ru", "name": "Russian", "nativeName": "русский язык"},
//     {"code": "sa", "name": "Sanskrit (Saṁskṛta)", "nativeName": "संस्कृतम्"},
//     {"code": "sc", "name": "Sardinian", "nativeName": "sardu"},
//     {"code": "sd", "name": "Sindhi", "nativeName": "सिन्धी, سنڌي، سندھی‎"},
//     {"code": "se", "name": "Northern Sami", "nativeName": "Davvisámegiella"},
//     {"code": "sm", "name": "Samoan", "nativeName": "gagana faa Samoa"},
//     {"code": "sg", "name": "Sango", "nativeName": "yângâ tî sängö"},
//     {"code": "sr", "name": "Serbian", "nativeName": "српски језик"},
//     {"code": "gd", "name": "Scottish Gaelic; Gaelic", "nativeName": "Gàidhlig"},
//     {"code": "sn", "name": "Shona", "nativeName": "chiShona"},
//     {"code": "si", "name": "Sinhala, Sinhalese", "nativeName": "සිංහල"},
//     {"code": "sk", "name": "Slovak", "nativeName": "slovenčina"},
//     {"code": "sl", "name": "Slovene", "nativeName": "slovenščina"},
//     {"code": "so", "name": "Somali", "nativeName": "Soomaaliga, af Soomaali"},
//     {"code": "st", "name": "Southern Sotho", "nativeName": "Sesotho"},
//     {"code": "es", "name": "Spanish; Castilian", "nativeName": "español, castellano"},
//     {"code": "su", "name": "Sundanese", "nativeName": "Basa Sunda"},
//     {"code": "sw", "name": "Swahili", "nativeName": "Kiswahili"},
//     {"code": "ss", "name": "Swati", "nativeName": "SiSwati"},
//     {"code": "sv", "name": "Swedish", "nativeName": "svenska"},
//     {"code": "ta", "name": "Tamil", "nativeName": "தமிழ்"},
//     {"code": "te", "name": "Telugu", "nativeName": "తెలుగు"},
//     {"code": "tg", "name": "Tajik", "nativeName": "тоҷикӣ, toğikī, تاجیکی‎"},
//     {"code": "th", "name": "Thai", "nativeName": "ไทย"},
//     {"code": "ti", "name": "Tigrinya", "nativeName": "ትግርኛ"},
//     {"code": "bo", "name": "Tibetan Standard, Tibetan, Central", "nativeName": "བོད་ཡིག"},
//     {"code": "tk", "name": "Turkmen", "nativeName": "Türkmen, Түркмен"},
//     {"code": "tl", "name": "Tagalog", "nativeName": "Wikang Tagalog, ᜏᜒᜃᜅ᜔ ᜆᜄᜎᜓᜄ᜔"},
//     {"code": "tn", "name": "Tswana", "nativeName": "Setswana"},
//     {"code": "to", "name": "Tonga (Tonga Islands)", "nativeName": "faka Tonga"},
//     {"code": "tr", "name": "Turkish", "nativeName": "Türkçe"},
//     {"code": "ts", "name": "Tsonga", "nativeName": "Xitsonga"},
//     {"code": "tt", "name": "Tatar", "nativeName": "татарча, tatarça, تاتارچا‎"},
//     {"code": "tw", "name": "Twi", "nativeName": "Twi"},
//     {"code": "ty", "name": "Tahitian", "nativeName": "Reo Tahiti"},
//     {"code": "ug", "name": "Uighur, Uyghur", "nativeName": "Uyƣurqə, ئۇيغۇرچە‎"},
//     {"code": "uk", "name": "Ukrainian", "nativeName": "українська"},
//     {"code": "ur", "name": "Urdu", "nativeName": "اردو"},
//     {"code": "uz", "name": "Uzbek", "nativeName": "zbek, Ўзбек, أۇزبېك‎"},
//     {"code": "ve", "name": "Venda", "nativeName": "Tshivenḓa"},
//     {"code": "vi", "name": "Vietnamese", "nativeName": "Tiếng Việt"},
//     {"code": "vo", "name": "Volapük", "nativeName": "Volapük"},
//     {"code": "wa", "name": "Walloon", "nativeName": "Walon"},
//     {"code": "cy", "name": "Welsh", "nativeName": "Cymraeg"},
//     {"code": "wo", "name": "Wolof", "nativeName": "Wollof"},
//     {"code": "fy", "name": "Western Frisian", "nativeName": "Frysk"},
//     {"code": "xh", "name": "Xhosa", "nativeName": "isiXhosa"},
//     {"code": "yi", "name": "Yiddish", "nativeName": "ייִדיש"},
//     {"code": "yo", "name": "Yoruba", "nativeName": "Yorùbá"},
//     {"code": "za", "name": "Zhuang, Chuang", "nativeName": "Saɯ cueŋƅ, Saw cuengh"}
// ];
// const result = array.filter(word => word.name.length < 6).map(function (objkey) {
//     return {code: objkey.code, name: objkey.name}
// });
//
//
// console.log(result);
/////////////////////////////////////////////////
