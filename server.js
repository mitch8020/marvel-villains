const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

let villains = {
  // Captain America: The First Avenger
  'red skull': {
    'name': 'Johann Shmidt',
    'alias': 'Red Skull',
    'media': ['Captain America: The First Avenger'],
    'powers': ['enhanced strength','enhanced mobility','enhanced endurance','accelerated healing','enhanced intelligence','immortality','levitation','partial omniscience'],
    'trivia': 'Unlike his comic book counterpart who has a mask, this version of Red Skull\'s appearance is biological, due to him ingesting a version of the Super-Soldier Serum.',
    'quote': 'You could have the power of the gods! Yet you wear a flag on your chest and think you fight a battle of nations! I have seen the future, Captain! There are no flags!',
    'image': 'https://static.wikia.nocookie.net/marveldatabase/images/1/11/Johann_Schmidt_%28Earth-199999%29_from_Avengers_Infinity_War_003.png/revision/latest?cb=20220205171943',
    'wiki-link': 'https://marvel.fandom.com/wiki/Johann_Schmidt_(Earth-199999)'
  },
  // Agent Carter
  'doctor faustus': {
    'name': 'Dr. Johann Fennhoff',
    'alias': 'Doctor Faustus',
    'media': ['Agent Carter'],
    'powers': ['hypnotism','psychology','spy'],
    'trivia': 'Dr. Fennhoff is seen reading the play The Tragical History of the Life and Death of Doctor Faustus by English playwright Christopher Marlowe during World War II.',
    'quote': '... My greatest weapon has always been my voice... so well modulated and pitched that my very word can either be totally consoling... or destructively jarring!',
    'image': 'https://static.wikia.nocookie.net/marveldatabase/images/c/c0/Johann_Fennhoff_%28Earth-199999%29_from_Marvel%27s_Agent_Carter_Season_1_7.jpg/revision/latest/scale-to-width-down/572?cb=20190201122938',
    'wiki-link': 'https://marvel.fandom.com/wiki/Johann_Fennhoff_(Earth-199999)'
  },
  // Captain Marvel'
  'yon-rogg': {
    'name': 'Yon-Rogg',
    'alias': 'Yon-Rogg',
    'media': ['Captain Marvel'],
    'powers': ['superhuman strength','superhuman durability','superhuman agility','regenerative healing factor'],
    'trivia': 'Jude Law portrays Yon-Rogg in 2019 film Captain Marvel.',
    'quote': 'I want you to be the best version of yourself.',
    'image': 'https://static.wikia.nocookie.net/marveldatabase/images/2/28/Yon-Rogg_%28Earth-199999%29_from_Captain_Marvel_%28film%29_Poster.jpg/revision/latest/scale-to-width-down/700?cb=20190307162253',
    'wiki-link': 'https://marvel.fandom.com/wiki/Yon-Rogg_(Earth-199999)'    
  },
  // Iron Man
  'iron monger': {
    'name': 'Obadiah Stane',
    'alias': 'Iron Monger',
    'media': ['Iron Man'],
    'powers': ['iron monger armor','superhuman strength','flight','weapons'],
    'trivia': 'According to Bridges himself, Iron Monger wasn\'t originally going to die in Iron Man.',
    'quote': 'We\'re iron mongers, we make weapons, and what we do keeps the world from falling into chaos.',
    'image': 'https://marvel.fandom.com/wiki/Obadiah_Stane_(Earth-199999)',
    'wiki-link': 'https://static.wikia.nocookie.net/marveldatabase/images/4/41/Obadiah_Stane_%28Earth-199999%29_from_Iron_Man_%28film%29_0002.jpg/revision/latest/scale-to-width-down/700?cb=20120209164433'
  },
  // Iron Man 2
  'whiplash': {
    'name': 'Ivan Antonovich Vanko',
    'alias': 'Whiplash',
    'media': ['Iron Man 2'],
    'powers': ['hand-to-hand combatant','deceptively intelligent','whiplash harness','whiplash armor'],
    'trivia': 'Vanko utilized the name Boris Turgenov in order to enter the United States, in Earth-616, Boris Turgenov was a KGB agent and the second wearer of the Crimson Dynamo armor.',
    'quote': 'If you can make God bleed, people will cease to believe in him, and there will be blood in the water and the sharks will come. All I have to do is sit here and watch as the world will consume you.',
    'image': 'https://static.wikia.nocookie.net/marveldatabase/images/6/6d/Ivan_Vanko_%28Whiplash%29_%28Earth-199999%29_in_Whiplash_Armor_%28Earth-199999%29_from_Iron_Man_2_%28film%29_003.jpg/revision/latest?cb=20120216172310',
    'wiki-link': 'https://marvel.fandom.com/wiki/Ivan_Vanko_(Whiplash)_(Earth-199999)'
  },
  'justin hammer': {
    'name': 'Justin Hammer',
    'alias': 'Justin Hammer',
    'media': ['Iron Man 2'],
    'powers': [null],
    'quote': 'Tony and I… Tony… I love Tony Stark. Tony loves me. We\’re not competitors. Him being out of the picture created tremendous opportunities for Hammer Industries, you know? Everything that Tony and I do is a health competition...Is he driving?',
    'trivia': 'Rockwell auditioned for the role of Tony Stark in the first film before it was given to Robert Downey Jr. Rockwell accepted the role of Hammer without reading a script.',
    'image': 'https://static.wikia.nocookie.net/marveldatabase/images/0/03/Justin_Hammer_%28Earth-199999%29_from_Iron_Man_2_%28film%29_0001.jpg/revision/latest/scale-to-width-down/700?cb=20130420160717',
    'wiki-link': 'https://marvel.fandom.com/wiki/Justin_Hammer_(Earth-199999)'
  },
  // The Incredible Hulk
  'abomination': {
    'name': 'Emil Blonsky',
    'alias': 'Abomination',
    'media': ['The Incredible Hulk'],
    'powers': ['artificially enhanced physiology','superhuman strength','superhuman speed','superhuman stamina','superhuman durability','regenerative healing factor','retractable skeletal spikes','expert soldier','acrobat'],
    'trivia': 'Blonsky is never referred to as \"the Abomination\" in The Incredible Hulk; however, before his final transformation, Dr. Sterns says \"I don\'t know what you already have in you, the mixture could be an abomination\". His alias is later given by the S.H.I.E.L.D. agents who take him into custody, as mentioned in \"The Consultant.\" Coulson says that Fury\'s superiors \"really don\'t like it when you call him that.\"',
    'quote': 'I\'ve had missions go wrong, and seen good people go down, all because someone didn\'t tell them what they were walking into. I moved on because that\'s the job, and that\'s what we do.',
    'image': 'https://static.wikia.nocookie.net/marveldatabase/images/5/54/Emil_Blonsky_%28Earth-199999%29_from_Shang-Chi_and_the_Legends_of_the_Ten_Rings_001.jpg/revision/latest/scale-to-width-down/699?cb=20210906095704',
    'wiki-link': 'https://marvel.fandom.com/wiki/Emil_Blonsky_(Earth-199999)'
  },
  'general ross': {
    'name': 'Thaddeus Ross',
    'alias': 'Thunderbolt Ross',
    'media': ['The Incredible Hulk'],
    'powers': [null],
    'trivia': 'The Red Hulk, General Ross\'s gamma-irradiated form across many continuities, appears in the Incredible Hulk video game as an alternate costume for the Hulk.',
    'quote': 'Damn it! We\'d have had snipers on target in three more minutes. I wanna know who jumped the gun.',
    'image': 'https://static.wikia.nocookie.net/marveldatabase/images/f/f2/Thaddeus_Ross_%28Earth-199999%29_from_Captain_America-_Civil_War_001.jpg/revision/latest/scale-to-width-down/700?cb=20160501170253',
    'wiki-link': 'https://marvel.fandom.com/wiki/Thaddeus_Ross_(Earth-199999)'
  },
  // Thor
  'laufey': {
    'name': 'Laufey',
    'alias': 'Laufey',
    'media': ['Thor'],
    'powers': ['superhuman strength','durability','longevity','cold manipulation'],
    'trivia': 'The actor who portrays Laufey, Colm Feore, would later portray Donald Menken in The Amazing Spider-Man 2.',
    'quote': 'We are beyond diplomacy now, All-Father. You\'ll get what he came for: war, and death.',
    'image': 'https://static.wikia.nocookie.net/marveldatabase/images/e/eb/Laufey_%28Earth-199999%29_from_Thor_%28film%29_0003.jpg/revision/latest?cb=20170214225109',
    'wiki-link': 'https://marvel.fandom.com/wiki/Laufey_(Earth-199999)'
  },
  'loki': {
    'name': 'Loki Laufeyson',
    'alias': 'Loki',
    'media': ['Thor','The Avengers'],
    'powers': ['superhuman strength','superhuman reflexes','superhuman durability','superhuman longevity','sorcery','illusion projection','duplication casting','cold immunity','strategist','arcane lore','expert combatant'],
    'trivia': 'Tom Hiddleston originally auditioned for the role of Thor before it was given to Chris Hemsworth.',
    'quote': 'I am Loki, of Asgard, and I am burdened with glorious purpose.',
    'image': 'https://static.wikia.nocookie.net/marveldatabase/images/e/e2/Loki_Laufeyson_%28Earth-199999%29_from_Thor_Ragnarok_0001_.jpg/revision/latest/scale-to-width-down/700?cb=20171024020206',
    'wiki-link': 'https://marvel.fandom.com/wiki/Loki_Laufeyson_(Earth-199999)'
  },
  // The Avengers (Loki -> See Thor)

  // Iron Man 3
  'aldrich killian': {
    'name': 'Aldrich Killian',
    'alias': '\"Mandarin\"',
    'media': ['Iron Man 3'],
    'powers': ['extremis virus','enhanced agility','exothermic reaction','superhuman strength','tissue regeneration','fire-breathing','master strategist'],
    'trivia': 'Early into the development of Iron Man 3, Nikolaj Coster-Waldau was considered for the role of Killian.',
    'quote': 'No, I\'m a visionary. But I do own a maniac and he takes the stage tonight.',
    'image': 'https://static.wikia.nocookie.net/marveldatabase/images/8/8b/Aldrich_Killian_%28Earth-199999%29_from_Iron_Man_3_%28film%29_poster_003.jpg/revision/latest?cb=20130218174952',
    'wiki-link': 'https://marvel.fandom.com/wiki/Aldrich_Killian_(Earth-199999)'
  },
  'trevor slattery': {
    'name': 'Trevor Slattery',
    'alias': '\"Mandarin\"',
    'media': ['Iron Man 3'],
    'powers': ['acting','alcoholism','drug addiction','induced narcolepsy'],
    'trivia': 'Trevor, along with his acting ability, is referenced in LEGO Marvel Super Heroes with the Trophy \"The Toast of Croydon\" for naming a custom character after his first name.',
    'quote': 'My name is Trevor, Trevor Slattery... What? No. An understudy? Absolutely not. Don\'t hurt the face! I\'m an actor.',
    'image': 'https://static.wikia.nocookie.net/marveldatabase/images/5/56/Shang-Chi_and_the_Legend_of_the_Ten_Rings_poster_015.jpg/revision/latest/scale-to-width-down/670?cb=20210909140444',
    'wiki-link': 'https://marvel.fandom.com/wiki/Trevor_Slattery_(Earth-199999)'
  },
  // Thor: The Dark World
  'malekith': {
    'name': 'Malekith',
    'alias': 'Malekith',
    'media': ['Thor: The Dark World'],
    'powers': ['dark elf physiology','superhuman strength','superhuman durability','superhuman reflexes','superhuman longevity','aether manipulation','reality warping','regeneration','dark energy manipulation','physical enhancements'],
    'trivia': 'The version featured in the movie-inspired comic "Citadel of Spires" more resembles the main universe\'s Malekith than the one featured in Thor: The Dark World.',
    'quote': 'The Asgardians will suffer as we have suffered. I will reclaim the Aether. I will restore our world. And I will put an end to this poisoned universe.',
    'image': 'https://static.wikia.nocookie.net/marveldatabase/images/2/27/Malekith_%28Earth-199999%29_from_Thor_The_Dark_World_001.png/revision/latest?cb=20170309221542',
    'wiki-link': 'https://marvel.fandom.com/wiki/Malekith_(Earth-199999)'
  },
  // Captain America: The Winter Soldier
  'alexander pierce': {
    'name': 'Alexander Pierce',
    'alias': 'Alexander Pierce',
    'media': ['Captain America: The Winter Soldier'],
    'powers': [null],
    'trivia': 'Robert Redford portrayed Alexander Pierce in the film Captain America: The Winter Soldier.',
    'quote': 'Captain, to build a better world, sometimes means tearing the old one down... And that makes enemies.',
    'image': 'https://static.wikia.nocookie.net/marveldatabase/images/2/2e/Alexander_Pierce_%28Earth-199999%29_from_Captain_America_The_Winter_Soldier_002.png/revision/latest/scale-to-width-down/700?cb=20190125094609',
    'wiki-link': 'https://marvel.fandom.com/wiki/Alexander_Pierce_(Earth-199999)'
  },
  'winter soldier': {
    'name': 'James Buchanan \"Bucky\" Barnes',
    'alias': 'Winter Soldier',
    'media': ['Captain America: The Winter Soldier'],
    'powers': ['artificially enhanced physiology','superhuman strength','superhuman durability','superhuman speed','superhuman reflexes','enhanced agility','enhanced stamina','accelerated healing','master martial artist','selective hearing','expert pilot','military training'],
    'trivia': 'Bucky\'s star sign is Pisces.',
    'quote': 'It always ends in a fight.',
    'image': 'https://static.wikia.nocookie.net/marveldatabase/images/c/c9/The_Falcon_and_the_Winter_Soldier_poster_004_textless.jpg/revision/latest/scale-to-width-down/666?cb=20210309163901',
    'wiki-link': 'https://marvel.fandom.com/wiki/James_Buchanan_Barnes_(Earth-199999)'
  },
  // Guardians of the Galaxy
  'ronan the accuser': {
    'name': 'Ronan',
    'alias': 'Ronan the Accuser',
    'media': ['Guardians of the Galaxy'],
    'powers': ['kree physiology','superhuman strength','superhuman agility','superhuman durability','expert tactician','master combatant'],
    'trivia': 'Lee Pace portrays Ronan in the films Guardians of the Galaxy, and Captain Marvel.',
    'quote': 'I will unfurl one thousand years of Kree justice on Xandar, and burn it to its core! Then, Thanos, I\'m coming for you.',
    'image': 'https://static.wikia.nocookie.net/marveldatabase/images/c/c7/Ronan_%28Earth-199999%29_from_Guardians_of_the_Galaxy_%28film%29_poster_001.jpg/revision/latest/scale-to-width-down/698?cb=20180520193758',
    'wiki-link': 'https://marvel.fandom.com/wiki/Ronan_(Earth-199999)'
  },
  // Guardians of the Galaxy Vol. 2
  'ego': {
    'name': 'Ego',
    'alias': 'Ego',
    'media': ['Guardians of the Galaxy Vol. 2'],
    'powers': ['celestial physiology','superhuman condition','near-immortality','matter manipulation','planetary form','avatar creation','self-reconstitution','shape shifting','energy manipulation','biological manipulation'],
    'trivia': 'The film rights to Ego the Living Planet were originally held by 20th Century Fox. When the Deadpool crew had to ask Marvel Studios for permission to use a version of the character Negasonic Teenage Warhead, that eschewed essentially everything but the character\'s name, Marvel agreed in exchange for regaining the rights to use Ego.',
    'quote': 'Over thousands of years, I implanted thousands of extensions of myself on thousands of worlds. I need to fulfill life\'s one true purpose – to grow and spread, covering all that exists, until everything is... me!',
    'image': 'https://static.wikia.nocookie.net/marveldatabase/images/1/1d/Ego_%28Earth-199999%29_from_Guardians_of_the_Galaxy_Vol._2_%28film%29_002.jpg/revision/latest/scale-to-width-down/699?cb=20170425043618',
    'wiki-link': 'https://marvel.fandom.com/wiki/Ego_(Earth-199999)'
  },
  // Avengers: Age of Ultron
  'ultron': {
    'name': 'Ultron',
    'alias': 'Ultron',
    'media': ['Avengers: Age of Ultron'],
    'powers': ['cyborg body','superhuman strength','superhuman durability','energy discharge','flight','gravity manipulation','network access','body temperature manipulation','transferable consciousness','genius-level intellect','expert hacker','expert engineer'],
    'trivia': 'Ultron wears a red cloak when the Maximoff twins encounter him in the Sokovian church, referencing his alter ego of the Crimson Cowl from the comics.',
    'quote': 'Do you see the beauty of it? The inevitability? You rise, only to fall. You, Avengers, you are my meteor, my swift and terrible sword, and the Earth will crack with the weight of your failure. Purge me from your computers; turn my own flesh against me. It means nothing. When the dust settles, the only thing living in this world will be metal.',
    'image': 'https://static.wikia.nocookie.net/marveldatabase/images/7/7c/Ultron_%28Earth-199999%29_from_Avengers_Age_of_Ultron_002.jpg/revision/latest?cb=20150725024625',
    'wiki-link': 'https://marvel.fandom.com/wiki/Ultron_(Earth-199999)'
  },
  // Ant-Man
  'yellowjacket': {
    'name': 'Darren Cross',
    'alias': 'Yellowjacket',
    'media': ['Ant-Man'],
    'powers': ['size reduction','density compaction','yellowjacket sting','flight'],
    'trivia': 'Corey Stoll portrays Darren Cross in the film Ant-Man.',
    'quote': 'What laws? Of man? The laws of nature transcend the laws of man. And I\'ve transcended the laws of nature.',
    'image': 'https://static.wikia.nocookie.net/marveldatabase/images/d/d5/Darren_Cross_%28Earth-199999%29_from_Marvel%27s_Ant-Man_001.jpg/revision/latest/scale-to-width-down/696?cb=20150716220122',
    'wiki-link': 'https://marvel.fandom.com/wiki/Darren_Cross_(Earth-199999)'
  },
  // Captain America: Civil War
  'baron zemo': {
    'name': 'Helmut Zemo',
    'alias': 'Baron Zemo',
    'media': ['Captain America: Civil War'],
    'powers': ['master strategist','skilled combatant'],
    'trivia': 'Ann Russo, the wife of Anthony Russo, who co-directed Captain America: Civil War, gave the voice of Zemo\'s wife in the audio message he listens to.',
    'quote': 'I admit it. This war is my doing. The Avengers destroyed my home. They stole my family from me. So what better revenge than to have them fight each other, and tear themselves apart? ',
    'image': 'https://static.wikia.nocookie.net/marveldatabase/images/3/3c/The_Falcon_and_the_Winter_Soldier_poster_006_textless.jpg/revision/latest/scale-to-width-down/667?cb=20210309163939',
    'wiki-link': 'https://marvel.fandom.com/wiki/Helmut_Zemo_(Earth-199999)'
  },
  // Black Widow
  'taskmaster': {
    'name': 'Antonia Dreykov',
    'alias': 'Taskmaster',
    'media': ['Black Widow'],
    'powers': ['photographic reflexes','master martial artist','shield mastery','sword mastery','knife mastery','master marksman','master acrobat','master tactician'],
    'trivia': 'All the promotional material for Black Widow hid who portrayed Taskmaster to hide her gender. Only the opening credits of the movie confirmed the participation of Antonia\'s actress Olga Kurylenko.',
    'quote': '[about her father, Dreykov] ...Is he gone?',
    'image': 'https://static.wikia.nocookie.net/marveldatabase/images/0/0d/Black_Widow_%28film%29_poster_016_textless.jpg/revision/latest/scale-to-width-down/666?cb=20210708113720',
    'wiki-link': 'https://marvel.fandom.com/wiki/Antonia_Dreykov_(Earth-199999)'
  },
  'general dreykov': {
    'name': 'Dreykov',
    'alias': 'General Dreykov',
    'media': ['Black Widow'],
    'powers': [null],
    'trivia': 'Ray Winstone portrayed General Dreykov in the film Black Widow.',
    'quote': 'When you look into the eyes of a child you have raised, no mask in the world can hide that.',
    'image': 'https://static.wikia.nocookie.net/marveldatabase/images/a/a8/General_Dreykov_%28Earth-199999%29_from_Black_Widow_%28film%29_001.png/revision/latest?cb=20210709214557',
    'wiki-link': 'https://marvel.fandom.com/wiki/General_Dreykov_(Earth-199999)'
  },
  // Black Panther
  'killmonger': {
    'name': 'Erik Stevens',
    'alias': 'Killmonger',
    'media': ['Black Panther'],
    'powers': ['enhanced physiology','superhuman strength','superhuman durability','superhuman speed','superhuman agility','superhuman stamina','enhanced reflexes','master martial artist','multilingual','us navy seal training','gifted intelligence'],
    'trivia': 'Killmonger\'s initial suit bears resemblence to Vegeta\'s outfit from Dragon Ball Z, which Michael B. Jordan has been open about being a fan of.',
    'quote': 'Why, so you can lock me up? Nah. Just bury me in the ocean with my ancestors who jumped from ships, \'cause they knew death was better than bondage.',
    'image': 'https://static.wikia.nocookie.net/marveldatabase/images/7/78/N%27Jadaka_%28Earth-199999%29_from_Black_Panther_%28film%29_005.jpg/revision/latest?cb=20180220195031',
    'wiki-link': 'https://marvel.fandom.com/wiki/N%27Jadaka_(Earth-199999)'
  },
  // Spider-Man: Homecoming
  'vulture': {
    'name': 'Adrian Toomes',
    'alias': 'Vulture',
    'media': ['Spider-Man: Homecoming'],
    'powers': ['master tactician','master strategist','expert shooter','vulture\'s wings'],
    'trivia': 'Keaton has portrayed another bird-themed comic book character called Birdman from the film of the same name',
    'quote': 'How do you think your buddy Stark paid for that tower? Or any of his little toys? Those people, Pete, those people up there- The rich and the powerful - they do whatever they want! Guys like us? Like you and me? They don\'t care about us. We build their roads and fight all their wars and everything, but they don\'t care about us. We have to pick up after \'em, we have to eat their table-scraps... that\'s how it is.',
    'image': 'https://static.wikia.nocookie.net/marveldatabase/images/5/5a/Adrian_Toomes_%28Earth-199999%29_from_Spider-Man_Homecoming_001.jpg/revision/latest?cb=20170927214338',
    'wiki-link': 'https://marvel.fandom.com/wiki/Adrian_Toomes_(Earth-199999)'
  },
  // Doctor Strange
  'dormammu': {
    'name': 'Dormammu',
    'alias': 'Destroyer of Worlds',
    'media': ['Doctor Strange'],
    'powers': ['dark dimension manipulation','immortality','power bestowal','reality warping'],
    'trivia': 'The producers of Doctor Strange originally had Tony Todd provide the voice of Dormammu, but in the end went with Cumberbatch instead.',
    'quote': 'We seek not to conquer this world, Doctor; we seek to hand it over to Dormammu, who is the intent of all evolution.',
    'image': 'https://static.wikia.nocookie.net/marveldatabase/images/1/1d/Dormammu_%28Earth-199999%29_from_Doctor_Strange_%28film%29_001.jpg/revision/latest/scale-to-width-down/700?cb=20161120141514',
    'wiki-link': 'https://marvel.fandom.com/wiki/Dormammu_(Earth-199999)'
  },
  'kaecilius': {
    'name': 'Kaecilius',
    'alias': 'The Zealot',
    'media': ['Doctor Strange'],
    'powers': ['eldritch magic manipulation','dark dimension manipulation','reality warping','expert hand-to-hand combatant'],
    'trivia': 'Unlike his comic book counterpart, this version of Kaecilius was not a follower of Mordo.',
    'quote': '\"Mister...\"\n\"Doctor.\"\n\"...Mister Doctor?\"\n\"It\'s Strange.\"\n\"Maybe. Who am I to judge?\"',
    'image': 'https://static.wikia.nocookie.net/marveldatabase/images/6/6e/Kaecilius_%28Earth-199999%29_from_Doctor_Strange_%28film%29_001.png/revision/latest/scale-to-width-down/590?cb=20161029133301',
    'wiki-link': 'https://marvel.fandom.com/wiki/Kaecilius_(Earth-199999)'
  },
  // Thor: Raganarok
  'hela': {
    'name': 'Hela Odinsdottir',
    'alias': 'Goddess of Death',
    'media': ['Thor: Raganarok'],
    'powers': ['asgardian physiology','connection to asgard','pseudo-immortality','weapon conjuring','geokinesis','necromancy','acrobatics','martial arts','occult knowledge'],
    'trivia': 'Hela\'s ability to conjure weapons known as the Necroswords from her body is based off the Nightsword and All-Black the Necrosword wielded by Gorr the God Butcher from Thor: God of Thunder.',
    'quote': 'I am Hela, Odin\’s first born, Commander of the legions of Asgard, the rightful heir to the throne, and the Goddess of Death. My father is dead. As are the princes. You\’re welcome. We were once the seat of absolute power in the Cosmos. Our supremacy was unchallenged, yet Odin stopped at Nine Realms. Our destiny is to rule over all others. And I am here to restore that power. Kneel before me... and rise into the ranks of my great conquest.',
    'image': 'https://static.wikia.nocookie.net/marveldatabase/images/6/6c/Thor_Ragnarok_poster_009_textless.jpg/revision/latest/scale-to-width-down/700?cb=20190721083835',
    'wiki-link': 'https://marvel.fandom.com/wiki/Hela_Odinsdottir_(Earth-199999)'
  },
  // Ant-Man and the Wasp
  'ghost': {
    'name': 'Ava Starr',
    'alias': 'Ghost',
    'media': ['Ant-Man and the Wasp'],
    'powers': ['quantum instability','intangibility','invisibility','quantum existence','experienced combatant','experienced spy','expert strategist'],
    'trivia': 'Hannah John-Kamen portrays Ava Starr in the film Ant-Man and the Wasp. RaeLynn Bratten potrayed the character as a child in flashbacks.',
    'quote': 'Every cell in my body is torn apart and stitched back together, over and over every day.',
    'image': 'https://static.wikia.nocookie.net/marveldatabase/images/7/75/Ava_Starr_%28Earth-199999%29_from_Ant-Man_and_the_Wasp_%28film%29_promo_art_001.jpg/revision/latest?cb=20180707042829',
    'wiki-link': 'https://marvel.fandom.com/wiki/Ava_Starr_(Earth-199999)'
  },
  // Avengers: Infinity War
  'thanos': {
    'name': 'Thanos',
    'alias': 'Mad Titan',
    'media': ['Avengers: Infinity War','Avengers: Endgame'],
    'powers': ['superhuman physiology','superhuman strength','superhuman reflexes','superhuman durability','superhuman longevity','master manipulator','master combatant'],
    'trivia': 'Avengers: Infinity War and Avengers: Endgame co-director Joe Russo has repeatedly stated that Thanos is roughly a thousand years old.',
    'quote': 'I know what it\'s like to lose. To feel so desperately that you\'re right... yet to fail nonetheless. It\'s frightening. Turns the legs to jelly. I ask you; to what end? Dread it. Run from it. Destiny arrives all the same. And now, it\'s here. Or should I say... I am.',
    'image': 'https://static.wikia.nocookie.net/marveldatabase/images/b/bc/Thanos_%28Earth-199999%29_from_Avengers_Infinity_War_-_The_Official_Movie_Special_001.jpg/revision/latest/scale-to-width-down/700?cb=20180501065444',
    'wiki-link': 'https://marvel.fandom.com/wiki/Thanos_(Earth-199999)'
  },
  'ebony maw': {
    'name': 'Ebony Maw',
    'alias': 'The Maw',
    'media': ['Avengers: Infinity War','Avengers: Endgame'],
    'powers': ['telekinesis','levitation'],
    'trivia': 'Ebony Maw\'s portrayal was inspired in part by Mephisto\'s role as Thanos\' right hand in Infinity Gauntlet.',
    'quote': 'Hear me and rejoice. You have had the privilege of being saved by the great Titan. You may think this is suffering, no. It is salvation. The universal scale tips toward balance because of your sacrifice. Smile. For even in death, you have become children of Thanos.',
    'image': 'https://static.wikia.nocookie.net/marveldatabase/images/b/b9/Ebony_Maw_%28Earth-199999%29_from_Avengers_Infinity_War_003.jpg/revision/latest/scale-to-width-down/700?cb=20180511013205',
    'wiki-link': 'https://marvel.fandom.com/wiki/Ebony_Maw_(Earth-199999)'
  },
  'cull obsidian': {
    'name': 'Cull Obsidian',
    'alias': 'Cull Obsidian',
    'media': ['Avengers: Infinity War','Avengers: Endgame'],
    'powers': ['superhuman strength','superhuman durability','expert combatant'],
    'trivia': 'In the comics, Cull Obsidian is named Black Dwarf, whereas \"Cull Obsidian\" is simply another name of the Black Order.',
    'quote': '[grunt]',
    'image': 'https://static.wikia.nocookie.net/marveldatabase/images/b/b6/Cull_Obsidian_%28Earth-199999%29_from_Avengers_Infinity_War_001.jpg/revision/latest?cb=20180510170656',
    'wiki-link': 'https://marvel.fandom.com/wiki/Cull_Obsidian_(Earth-199999)'
  },
  'proxima midnight': {
    'name': 'Proxima Midnight',
    'alias': 'Proxima Midnight',
    'media': ['Avengers: Infinity War','Avengers: Endgame'],
    'powers': ['expert combatant'],
    'trivia': 'Carrie Coon portrays Proxima Midnight in the film Avengers: Infinity War, with additional motion capture provided, and stunts performed, by Monique Ganderton, due to Coon being pregnant while filming her scenes.',
    'quote': 'He\'ll die alone. As will you.',
    'image': 'https://static.wikia.nocookie.net/marveldatabase/images/4/4a/Proxima_Midnight_%28Earth-199999%29_from_Avengers_Infinity_War_003.png/revision/latest/scale-to-width-down/700?cb=20220205173059',
    'wiki-link': 'https://marvel.fandom.com/wiki/Proxima_Midnight_(Earth-199999)'
  },
  'corvus glaive': {
    'name': 'Corvus Glaive',
    'alias': 'Corvus Glaive',
    'media': ['Avengers: Infinity War','Avengers: Endgame'],
    'powers': ['expert combatant'],
    'trivia': 'Michael James Shaw has stated that, while it is not acknowledged in Avengers: Infinity War, Corvus Glaive and Proxima Midnight are also a married couple in the Marvel Cinematic Universe, similar to their Earth-616 counterparts.',
    'quote': 'I thought you were formidable, machine. But you\'re dying, like any man.',
    'image': 'https://static.wikia.nocookie.net/marveldatabase/images/e/e2/Corvus_Glaive_%28Earth-199999%29_from_Avengers_Infinity_War_002.jpg/revision/latest/scale-to-width-down/660?cb=20220205164624',
    'wiki-link': 'https://marvel.fandom.com/wiki/Corvus_Glaive_(Earth-199999)'
  },
  // Avengers: Endgame (Thanos -> See Avengers: Infinity War)

  // WandaVision
  'agatha harkness': {
    'name': 'Agatha Harkness',
    'alias': 'Agnes the Nosy Neighbor',
    'media': ['WandaVision'],
    'powers': ['sorcery','spellcasting','protection spell','possession spell','power-bestowment spell','telekinesis','telepathy','telepathic manipulation','telepathic immunity','memory sharing','memory access','power stealing','flight','transmutation','teleportation','conjuration','longevity','energy manipulation','energy bolts','energy constructs','master manipulator'],
    'trivia': 'The exterior of Ralph\'s house (which Agatha takes over) is the same as the house used by the main witch character in the 1960s sitcom Bewitched.',
    'quote': 'I take power from the undeserving. It\'s kind of my thing. You\'re clearly in over your little red head. So, why don\'t you surrender your magic to someone who knows what to do with it?',
    'image': 'https://static.wikia.nocookie.net/marveldatabase/images/a/ad/Agatha_Harkness_%28Earth-199999%29_from_WandaVision_Season_1_9_001.jpg/revision/latest/scale-to-width-down/700?cb=20210306114051',
    'wiki-link': 'https://marvel.fandom.com/wiki/Agatha_Harkness_(Earth-199999)'
  },
  // The Falcon and the Winter Soldier
  'karli morgenthau': {
    'name': 'Karli Morgenthau',
    'alias': 'Karli Morgenthau',
    'media': ['The Falcon and the Winter Soldier'],
    'powers': ['superhuman strength'],
    'trivia': 'This character, along with the Flag Smashers group, is based off the male character Karl Morgenthau, an individual who goes by \"Flag-Smasher\" in the comics.',
    'quote': 'Because you wanted to control the world that hurt you, but I wanted to change it. I\'m not interested in power or an empire. I have a bigger dream',
    'image': 'https://static.wikia.nocookie.net/marveldatabase/images/8/8d/The_Falcon_and_the_Winter_Soldier_poster_008_textless.jpg/revision/latest/scale-to-width-down/700?cb=20210405081731',
    'wiki-link': 'https://marvel.fandom.com/wiki/Karli_Morgenthau_(Earth-199999)'
  },
  'john walker': {
    'name': 'Jonathan F. \"John\" Walker',
    'alias': 'U.S. Agent',
    'media': ['The Falcon and the Winter Soldier'],
    'powers': ['artificially enhanced physiology','enhanced healing factor','enhanced strength','enhanced durability','enhanced speed','enhanced agility','enhanced stamina','master combatant','master shield-man','expert marksman'],
    'trivia': 'Wyatt Russell is the son of actor Kurt Russell, who also appeared in the Marvel Cinematic Universe as Ego in the film Guardians of the Galaxy Vol. 2.',
    'quote': 'I am Captain America!',
    'image': 'https://static.wikia.nocookie.net/marveldatabase/images/d/dc/Jonathan_Walker_%28Earth-199999%29_from_Marvel_Legends_002.jpg/revision/latest/scale-to-width-down/700?cb=20210519112523',
    'wiki-link': 'https://marvel.fandom.com/wiki/Jonathan_Walker_(Earth-199999)'
  },
  'sharon carter': {
    'name': 'Sharon Carter',
    'alias': 'Power Broker',
    'media': ['The Falcon and the Winter Soldier'],
    'powers': [null],
    'trivia': 'Sharon was believed by the Avengers to be one of the victims of Thanos, as her image was listed among those of their missing allies. However, Sharon had survived and was living in Madripoor to stay under the radar and avoid extradition.',
    'quote': 'Compromise where you can. Where you can\'t, don\'t. Even if everyone is telling you that something wrong is something right. Even if the whole world is telling you to move, it is your duty to plant yourself like a tree, look them in the eye, and say \'No, you move\'.',
    'image': 'https://static.wikia.nocookie.net/marveldatabase/images/2/20/Sharon_Carter_%28Earth-199999%29_from_The_Falcon_and_the_Winter_Soldier_Season_1_6_001.jpg/revision/latest/scale-to-width-down/666?cb=20210423094646',
    'wiki-link': 'https://marvel.fandom.com/wiki/Sharon_Carter_(Earth-199999)'
  },
  // Shang-Chi and the Legend of the Ten Rings
  'mandarin': {
    'name': 'Xu Wenwu',
    'alias': 'Mandarin',
    'media': ['Shang-Chi and the Legend of the Ten Rings'],
    'powers': ['ten rings empowerment','advanced longevity','energy manipulation','energy blasts','energy chain','force field generation','master martial artist','master marksman','master acrobat','super-genius intelligence','bilingualism'],
    'trivia': 'Wenwu\'s ten rings are modelled after the iron rings used in the martial art Hung Gar rather than finger rings, and don\'t possess elemental powers. According to Shang-Chi and the Legend of the Ten Rings producer Jonathan Schwartz, these changes were made to avoid comparisons with the Infinity Gauntlet. Schwartz has stated the inspiration was the 1978 movie The 36th Chamber of Shaolin.',
    'quote': 'I trained you so the most dangerous people in the world couldn\'t kill you.',
    'image': 'https://static.wikia.nocookie.net/marveldatabase/images/6/63/Shang-Chi_and_the_Legend_of_the_Ten_Rings_poster_005_Textless.jpg/revision/latest/scale-to-width-down/666?cb=20210906095709',
    'wiki-link': 'https://marvel.fandom.com/wiki/Xu_Wenwu_(Earth-199999)'
  },
  // Eternals
  'arishem': {
    'name': 'Arishem',
    'alias': 'Arishem the Judge',
    'media': ['Eternals'],
    'powers': ['immortality','cosmic energy manipulation','telepathy','memory sharing','telepathic illusion','telekinesis','atmokinesis','aerokinesis','electrokinesis','geokinesis','pyrogenesis','interstellar teleportation','life creation'],
    'trivia': 'Arishem is a Celestial credited with the creation of the universe\'s first Sun.',
    'quote': 'You have chosen to sacrifice a Celestial, for the people of this planet. I will spare them, but your memories will show me if they are worthy to live. And I will return, for judgement.',
    'image': 'https://static.wikia.nocookie.net/marveldatabase/images/a/ab/Arishem_%28Earth-199999%29_from_Eternals_%28film%29.png/revision/latest?cb=20211108040420',
    'wiki-link': 'https://marvel.fandom.com/wiki/Arishem_(Earth-199999)'
  },
  'ikaris': {
    'name': 'Ikaris',
    'alias': 'Ikarus',
    'media': ['Eternals'],
    'powers': ['near-immortality','cosmic energy manipulation','optical beams','enhanced strength','enhanced durability','enhanced stamina','flight'],
    'trivia': 'Ikaris was an Eternal created by the Celestials in the World Forge.',
    'quote': 'Do you think it was easy to live with the truth? To know that one day all this would end? If we gave humanity the choice, how many of them would be willing to die so that billions more could be born?',
    'image': 'https://static.wikia.nocookie.net/marveldatabase/images/1/1f/Eternals_%28film%29_poster_004_textless.jpg/revision/latest/scale-to-width-down/666?cb=20211109172709',
    'wiki-link': 'https://marvel.fandom.com/wiki/Ikaris_(Earth-199999)'
  },
  // Spider-Man: Far From Home
  'mysterio': {
    'name': 'Quentin Beck',
    'alias': 'Mysterio',
    'media': ['Spider-Man: Far From Home'],
    'powers': ['engineer','deception','mysterio suit'],
    'trivia': 'In very preliminary versions of the story of Spider-Man: Far From Home, Mysterio was going to be a Skrull.',
    'quote': 'You\'ll see, Peter. People... need to believe. And nowadays, they\'ll believe anything.',
    'image': 'https://static.wikia.nocookie.net/marveldatabase/images/9/9c/Quentin_Beck_%28Earth-199999%29_from_Spider-Man_Far_from_Home_promotional_art_001.jpg/revision/latest/scale-to-width-down/700?cb=20190628175259',
    'wiki-link': 'https://marvel.fandom.com/wiki/Quentin_Beck_(Earth-199999)'
  },
  // Spider-Man: No Way Home
  'green goblin': {
    'name': 'Dr. Norman Osborn',
    'alias': 'Green Goblin',
    'media': ['Spider-Man: No Way Home'],
    'powers': ['goblin formula','superhuman strength','superhuman speed','superhuman stamina','superhuman durability','regenerative healing factor','superhuman agility','superhuman reflexes','gifted intelligence','expert engineer','expert marksman','skilled combatant','master acrobat','goblin armor'],
    'trivia': 'Due to the established rules in the Marvel Multiverse pertaining to alternate realities and time travel, which also apply in the Marvel Cinematic Universe as per Avengers: Endgame, it is assumed that this version of the Green Goblin can\'t be the exact same one from the 2002 film. This is because his depowerement and return to his original timeline would have to create a divergence from Earth-96283.',
    'quote': 'I\'ve watched you from behind Norman\'s cowardly eyes. Struggling to have everything you want, while the world tries to make you choose. Gods don\'t have to choose. We take.',
    'image': 'https://static.wikia.nocookie.net/marveldatabase/images/7/77/Norman_Osborn_%28Earth-TRN925%29_from_Spider-Man_No_Way_Home_001.jpg/revision/latest/scale-to-width-down/700?cb=20220312081304',
    'wiki-link': 'https://marvel.fandom.com/wiki/Norman_Osborn_(Earth-TRN925)'
  },
  'doctor octopus': {
    'name': 'Dr. Otto Octavius',
    'alias': 'Doctor Octopus',
    'media': ['Spider-Man: No Way Home'],
    'powers': ['mechanical arms','superhuman striking force','telescoping','wall-climbing and traveling','genius intelligence'],
    'trivia': 'Alfred Molina portrays Doctor Octopus in the film Spider-Man: No Way Home, reprising his role from 2004\'s Spider-Man 2. Molina was digitally de-aged to resemble his portrayal in 2004.',
    'quote': 'You\'re flying out into the darkness to fight a ghost.',
    'image': 'https://static.wikia.nocookie.net/marveldatabase/images/6/6b/Otto_Octavius_%28Earth-TRN926%29_from_Spider-Man_No_Way_Home_Promotional_001.jpg/revision/latest/scale-to-width-down/700?cb=20211220175645',
    'wiki-link': 'https://marvel.fandom.com/wiki/Otto_Octavius_(Earth-TRN926)'
  },
  'sandman': {
    'name': 'Flint Marko',
    'alias': 'Sandman',
    'media': ['Spider-Man: No Way Home'],
    'powers': ['body conversion-sand','superhuman strength','density control','shape-shifting','sand conversion'],
    'trivia': 'The shots of Flint when he returns to his human form appear to be recycled archived footage from Spider-Man 3, namely alternate takes of Flint\'s reaction to his arm disintegrating in contact with water during his fight against Spider-Man.',
    'quote': 'I have a daughter, and I wanna see her. But he\'s not gonna send anyone home \'till he\'s finished his little science project back there.',
    'image': 'https://static.wikia.nocookie.net/marveldatabase/images/6/68/Flint_Marko_%28Earth-TRN927%29_from_Spider-Man_No_Way_Home_002.png/revision/latest?cb=20220320171746',
    'wiki-link': 'https://marvel.fandom.com/wiki/Flint_Marko_(Earth-TRN927)'
  },
  'lizard': {
    'name': 'Curt Connors',
    'alias': 'Lizard',
    'media': ['Spider-Man: No Way Home'],
    'powers': ['reptilian physiology','superhuman strength','superhuman speed','superhuman durability','superhuman agility','superhuman reflexes','superhuman stamina','superhuman senses','regenerating healing factor','claws','tail','genius intelligence'],
    'trivia': 'Connors has a genius-level intellect and is a world-renowned herpetologist.',
    'quote': 'When you try to fix people, there are always consequences.',
    'image': 'https://static.wikia.nocookie.net/marveldatabase/images/4/4f/Curtis_Connors_%28Earth-TRN928%29_from_Spider-Man_No_Way_Home_002.jpg/revision/latest/scale-to-width-down/699?cb=20220317045848',
    'wiki-link': 'https://marvel.fandom.com/wiki/Curtis_Connors_(Earth-TRN928)'
  },
  'electro': {
    'name': 'Maxwell \"Max\" Dillon',
    'alias': 'Electro',
    'media': ['Spider-Man: No Way Home'],
    'powers': ['physiology mutated/electrostatic energy generation','lightning bolt projection','energy projection','energy blasts','electrical absorption','electroreception','electrical detection','electrocution','recharging','immunity to electricity','gifted intelligence','expert engineer'],
    'trivia': 'In a few moments when Max uses his powers, a star mask manifests on his face, a reference to the mask worn by his comic version.',
    'quote': 'You\'re not going to take this away from me.',
    'image': 'https://static.wikia.nocookie.net/marveldatabase/images/f/fd/Maxwell_Dillon_%28Earth-TRN929%29_from_Spider-Man_No_Way_Home_001.png/revision/latest/scale-to-width-down/699?cb=20220328221618',
    'wiki-link': 'https://marvel.fandom.com/wiki/Maxwell_Dillon_(Earth-TRN929)'
  },
  // Hawkeye
  'kingpin': {
    'name': 'Wilson Fisk',
    'alias': 'Kingpin',
    'media': ['Hawkeye'],
    'powers': ['multilingual','hand-to-hand combat'],
    'trivia': 'According to Foggy Nelson, Fisk was born around 1963.',
    'quote': 'I always thought that I was the Samaritan in that story. It\'s funny, isn\'t it? How even the best of men can be... deceived by their true nature. It means that I\'m not the Samaritan. That I\'m not the priest, or the Levite. That I am the ill intent... who set upon the traveler on a road that he should not have been on.',
    'image': 'https://static.wikia.nocookie.net/marveldatabase/images/f/fd/Wilson_Fisk_%28Earth-199999%29_from_Hawkeye_%28TV_series%29_Season_1_6_001.jpg/revision/latest/scale-to-width-down/606?cb=20211228004053',
    'wiki-link': 'https://marvel.fandom.com/wiki/Wilson_Fisk_(Earth-199999)'
  },
  // Moon Knight
  'arthur harrow': {
    'name': 'Arthur Harrow',
    'alias': 'Moon Knight',
    'media': ['Moon Knight'],
    'powers': ['divine empowerment','life-force absorption','multilingualism'],
    'trivia': 'Harrow is fluent in several languages including English, Mandarin, and Arabic.',
    'quote': 'It\'s maddening, isn\'t it? The voice in your head. Relentless, forever unsatisfied. No matter how hard you try to please, it devours you until there\'s nothing left but a hollow shell. And the more you ask for help, the more you begin to sound like the boy who cried wolf.',
    'image': 'https://static.wikia.nocookie.net/marveldatabase/images/e/ee/Arthur_Harrow_%28Earth-199999%29_from_Moon_Knight_%28TV_series%29_Season_1_1_0001.png/revision/latest/scale-to-width-down/700?cb=20220407200915',
    'wiki-link': 'https://marvel.fandom.com/wiki/Arthur_Harrow_(Earth-199999)'
  },
  // Doctor Strange in the Multiverse of Madness
  'scarlet witch': {
    'name': 'Wanda Maximoff',
    'alias': 'Scarlet Witch',
    'media': ['Doctor Strange in the Multiverse of Madness'],
    'powers': ['micro-cellular manipulation','psionic energy manipulation','levitation','psionic force-field generation','neuro-electric sensitivity','hypnosis','chaos magic','reality warping','probability manipulation','time manipulation','conjuration','teleportation','matter manipulation','electricity manipulation','weather manipulation','fire manipulation','protection spell','magic absorption','astral projection','trained combatant','espionage','bilingualism'],
    'trivia': 'Wanda was born 12 minutes after Pietro.',
    'quote': 'You break the rules and become the hero. I do it and I become the enemy. That doesn\'t seem fair.',
    'image': 'https://static.wikia.nocookie.net/marveldatabase/images/c/c8/Wanda_Maximoff_%28Earth-199999%29_from_Doctor_Strange_in_the_Multiverse_of_Madness_Promo_001.jpg/revision/latest/scale-to-width-down/700?cb=20220504145159',
    'wiki-link': 'https://marvel.fandom.com/wiki/Wanda_Maximoff_(Earth-199999)'
  },
  'unknown': {
    'name': 'unknown',
    'alias': 'unknown',
    'media': ['unknown'],
    'powers': ['unknown'],
    'trivia': 'unknown',
    'quote': 'unknown',
    'image': 'unknown',
    'wiki-link': 'unknown'
  }
}

app.get('/', (req,res)=>{
  res.sendFile(__dirname + '/index.html')
})

app.get('/css/reset.css', (req,res)=>{
  res.sendFile(__dirname + '/css/reset.css')
})

app.get('/css/style.css', (req,res)=>{
  res.sendFile(__dirname + '/css/style.css')
})

app.get('/villains', (req,res)=>{
  res.json(villains)
})

app.get('/villains/:name', (req,res)=>{
  const villainName = req.params.name.toLowerCase()
  if(villains[villainName]){
      res.json(villains[villainName])
  }else{
      res.json(villains['unknown'])
  }
})

app.listen(process.env.PORT || PORT, ()=>{
  console.log(`Your server is running on PORT: ${PORT}! GO CATCH IT!!!`)
})