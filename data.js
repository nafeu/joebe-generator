const GENERATORS = [
  {
    text: `Its |DECEPTION| tell you`,
    lookup: [
      {
        id: 'DECEPTION',
        default: 'a conspiracyi',
        variations: ['an illusioni', 'a rusei', 'a scami', 'a grifti']
      }
    ]
  },
  {
    text: `I actually installed |GAME| last night`,
    lookup: [
      {
        id: 'GAME',
        default: 'valorant',
        variations: ['overwatch', 'rainbow six seige', 'team fortress 2', 'counter-strike source', 'apex legends']
      }
    ]
  },
  {
    text: `Can't solo queue\nCan't play with the team\nGame |BROKE|\n|PLAYER| surrenders\n¯\\_(ツ)_/¯`,
    lookup: [
      {
        id: 'PLAYER',
        default: 'Scout god',
        variations: ['HONEY', 'FLOBAL ELITE', 'SPiGOT', 'tad', 'protim', 'LukeDankwalker', 'FoolishWizrd', 'Phrakture']
      },
      {
        id: 'BROKE',
        default: 'broken',
        variations: ['not working', 'glitching', 'barely playable', 'buggy', 'literally unplayable']
      }
    ]
  },
  {
    text: `Rip I went to sleep on the couch, |PLAYER| said we were waiting to play cs so I went and ate and layed down on the couch and now here we are`,
    lookup: [
      {
        id: 'PLAYER',
        default: 'Luke',
        variations: ['HONEY', 'FLOBAL ELITE', 'SPiGOT', 'tad', 'protim', 'LukeDankwalker', 'FoolishWizrd', 'Phrakture']
      }
    ]
  },
  {
    text: `worst solo queue of my life last night on |MAP|. 1 player using |INPUT|, no |PERI|. 1 player only |NUM1|hrs in cs, literally his |NUM2| match. and 1 guy absolute dogshit as well and no mic. Me and the 4th were trying to hold it together as we were getting |LOSS| but it went like |SCORE| in the end`,
    lookup: [
      {
        id: 'MAP',
        default: 'nuke',
        variations: ['mirage', 'dust 2', 'overpass', 'ancient', 'vertigo', 'office']
      },
      {
        id: 'INPUT',
        default: 'CONTROLLER',
        variations: ['JOYSTICK', 'TRACKPAD', 'DRAWING TABLET', 'TRACKBALL']
      },
      {
        id: 'PERI',
        default: 'mic',
        variations: ['monitor', 'keyboard', 'internet', 'desk', 'graphics card', 'motherboard']
      },
      {
        id: 'NUM1',
        default: '3',
        variations: ['4', '2', '5', '6', '1.5']
      },
      {
        id: 'NUM2',
        default: '4th',
        variations: ['3rd', '2nd', '5th', '6th', '7th']
      },
      {
        id: 'LOSS',
        default: 'STOMPED',
        variations: ['OWNED', 'DESTROYED', 'WRECKED', 'BONED', 'DOMINATED']
      },
      {
        id: 'SCORE',
        default: '7-13',
        variations: ['8-13', '10-13', '4-13', '6-13']
      }
    ]
  },
  {
    text: `stuck at |COUNT| wins in premier for the rest of my life`,
    lookup: [
      {
        id: 'COUNT',
        default: '8',
        variations: ['9', '4', '5', '6', '7']
      }
    ]
  },
  {
    text: `I take a |TIME| off work to play cs and nobody plays wtf`,
    lookup: [
      {
        id: 'TIME',
        default: 'week',
        variations: ['month', 'day', 'weekend']
      }
    ]
  },
  {
    text: `I'm ready to do some Ferrari peaks on |MAP|`,
    lookup: [
      {
        id: 'MAP',
        default: 'NUKE',
        variations: ['MIRAGE', 'DUST 2', 'OVERPASS', 'ANCIENT', 'VERTIGO', 'OFFICE']
      }
    ]
  },
  {
    text: `I can't solo queue any more`,
    lookup: []
  },
  {
    text: `bruh im actually malding`,
    lookup: []
  },
  {
    text: `im at 5999 so its my rankup match so no throwing`,
    lookup: []
  },
  {
    text: `Well we can't get a 5 man without a 4 man, and we can't get a 4 man without a 3 man, and so far we have a 2 man so come on |PLAYER| and be the 3rd man`,
    lookup: [
      {
        id: 'PLAYER',
        default: 'spigot',
        variations: ['honey', 'flobal elite', 'spigot', 'tad', 'protim', 'lukedankwalker', 'foolishwizrd', 'phrakture']
      }
    ]
  },
  {
    text: `Bruh i see how it is, |TIME| and no one replies for over an hour so i decide to hit the |LOCATION| instead of go straight home, and then yall decide to come outta the pipes and do a quick 5 man and then disapear when i get back`,
    lookup: [
      {
        id: 'TIME',
        default: '5:30',
        variations: ['6:32', '7:00', '4:20', '9:00', '10:00']
      },
      {
        id: 'LOCATION',
        default: 'mall',
        variations: ['convenience store', 'dentist', 'laundromat', 'department store', 'public swimming pool', 'board game store']
      }
    ]
  },
  {
    text: `so no one joined so i had to soloq and lost |NUMBER|\nbruh rip this is why im so low\ni was the lowest rank out of 9+1 unranked guys, didnt even bottom frag, got |PLACE| 17kills\nlost |LOSING_SCORE|`,
    lookup: [
      {
        id: 'NUMBER',
        default: '115',
        variations: ['163', '122', '142', '155', '191']
      },
      {
        id: 'PLACE',
        default: '3rd',
        variations: ['2nd', '4th', '5th']
      },
      {
        id: 'LOSING_SCORE',
        default: '11-13',
        variations: ['8-13', '10-13', '4-13', '6-13']
      }
    ]
  },
  {
    text: 'wait the whole weekend to play cs with teh boys 5 man and we play one L match',
    lookup: []
  },
  {
    text: 'So are we playing CS at 5 or not',
    lookup: []
  },
  {
    text: 'Tad spent 13000$ on skins, you want to look at them on LOW SETTINGS?',
    lookup: []
  },
  {
    text: `Can't believe no gamers`,
    lookup: []
  },
  {
    text: `THE EXACT QUOTE IS 'LOOK WHOS BACK ON TOP OF THE LEADERBOARD'`,
    lookup: []
  },
  {
    text: `Gamer roll call`,
    lookup: []
  },
  {
    text: 'Bruh I played with a guy last night with |HOURS|hrs and looked like he was playing on a |INPUT| and his game sense was -|NEGATIVE|',
    lookup: [
      {
        id: 'HOURS',
        default: '1600',
        variations: ['1700', '1800', '1900', '2000', '2100']
      },
      {
        id: 'INPUT',
        default: 'controller',
        variations: ['joystick', 'trackpad', 'drawing tablet', 'trackball']
      },
      {
        id: 'NEGATIVE',
        default: '5',
        variations: ['6', '7', '8', '9', '10', '11', '12']
      }
    ]
  },
  {
    "text": "bruh",
    "lookup": []
  },
  {
    "text": "csgo time?",
    "lookup": []
  },
  {
    "text": "what are these ranks'",
    "lookup": []
  },
  {
    "text": "time",
    "lookup": []
  },
  {
    "text": "ciesta?",
    "lookup": []
  },
  {
    "text": "@theswagengine gamer time\nya i got faceit\nnever played yet",
    "lookup": []
  },
  {
    "text": "cs time",
    "lookup": []
  },
  {
    "text": "ya we are on\ntrying to see how many we have\nno\nmm?\ni havent done faceit yet",
    "lookup": []
  },
  {
    "text": "busy till about midnight, then i am down for cs",
    "lookup": []
  },
  {
    "text": "its time",
    "lookup": []
  },
  {
    "text": "yo",
    "lookup": []
  },
  {
    "text": "It's time",
    "lookup": []
  },
  {
    "text": "csgo???\nim on\nThis is my rankup game",
    "lookup": []
  },
  {
    "text": "HOW IS THIS NOT THE RANK UP GAME\nLMFAO",
    "lookup": []
  },
  {
    "text": "How's he a Gold 2 and I didn't get the rankup\nBruh they were good teammates\nLol",
    "lookup": []
  },
  {
    "text": "BRUH\n!nextrankup\nbruh are u a bot\nLets go",
    "lookup": []
  },
  {
    "text": "brug",
    "lookup": []
  },
  {
    "text": "cs?",
    "lookup": []
  },
  {
    "text": "Still no rankup wtf\nI am on a streakkkkkkkkkkkkkkkkkkkkkkkkk\nLuke ranked up, and he is always 1-2 games ahead of me in the rankup, then we lost a few now im on a 5 win streak so it should be time\nI've made up the ELO from those losses for sure",
    "lookup": []
  },
  {
    "text": "Sorry i was asleep lol",
    "lookup": []
  },
  {
    "text": "When cs time\nI'm 1 game from rank up this time for sure so no throwing",
    "lookup": []
  },
  {
    "text": "When\nWatching tv with gf\nOk soon then",
    "lookup": []
  },
  {
    "text": "Coming now\nI like the Molly from outside onto hut, don't know how to do it but it's through the window lol",
    "lookup": []
  },
  {
    "text": "Made it back",
    "lookup": []
  },
  {
    "text": "I'm ready for another one",
    "lookup": []
  },
  {
    "text": "Propro is a hacker\nhow to kick propro\nLMFAO\nshhhhhhhhhhhhhhheeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeet\nHow does she slap",
    "lookup": []
  },
  {
    "text": "ok",
    "lookup": []
  },
  {
    "text": "yo",
    "lookup": []
  },
  {
    "text": "BRUH\nGET IN HEREEEEEEEEEE",
    "lookup": []
  },
  {
    "text": "I'm doing one before I start work for the day",
    "lookup": []
  },
  {
    "text": "LMFAO\nRANKS ARE WACK\nEnemy purple were calling me and green hackers all game\nand then enemy blue started doing it too lol",
    "lookup": []
  },
  {
    "text": "When's time",
    "lookup": []
  },
  {
    "text": "lol\nOur top frag all game was like \"just wait till they see my rank\" lmfao",
    "lookup": []
  },
  {
    "text": "Lets do thisssssss\nI'm ready to hit it\nleggo\nCZ was just here where he go",
    "lookup": []
  },
  {
    "text": "I just played and lost 13-16\nlol\ntime",
    "lookup": []
  },
  {
    "text": "on",
    "lookup": []
  },
  {
    "text": "time time?",
    "lookup": []
  },
  {
    "text": "Now we are gonna get stream sniped",
    "lookup": []
  },
  {
    "text": "Hello",
    "lookup": []
  },
  {
    "text": "That 8am CS hits different",
    "lookup": []
  },
  {
    "text": "When's time",
    "lookup": []
  },
  {
    "text": "Nah I was asleep",
    "lookup": []
  },
  {
    "text": "time",
    "lookup": []
  },
  {
    "text": "Lets go\nGamer time",
    "lookup": []
  },
  {
    "text": "rip\nliterally just started one\nno one replied for almost an hour so decided to solo q",
    "lookup": []
  },
  {
    "text": "nope\nGuys smurfing on the enemy team\n7-16\nsomething sus about them, walling or smurfing hard\nweird grenade throws they would make, or weird pre-fires with what we thought was no info\netc",
    "lookup": []
  },
  {
    "text": "Tell ur mum is gamer time and no interupting",
    "lookup": []
  },
  {
    "text": "Time\nSup",
    "lookup": []
  },
  {
    "text": "ok",
    "lookup": []
  },
  {
    "text": "time time",
    "lookup": []
  },
  {
    "text": "lol\nI havent started\nno point doing solo q",
    "lookup": []
  },
  {
    "text": "Are we ready?",
    "lookup": []
  },
  {
    "text": "letts gooooooo\nMust be nice 7-1 lol\nI am 3 win 5 losses\nlmfao\nI had a 8-9 win streak to my rank up to gold 1, and its been rocky road since then",
    "lookup": []
  },
  {
    "text": "lol",
    "lookup": []
  },
  {
    "text": "When time\nIts Saturday boys",
    "lookup": []
  },
  {
    "text": "@here cs time?\n@foolishwizrd @theswagengine @tad19",
    "lookup": []
  },
  {
    "text": "When CS time\n\"bunch of us playing 10:30-11\n\"\nbruh its 11:40",
    "lookup": []
  },
  {
    "text": "@tad19 @theswagengine time time time",
    "lookup": []
  },
  {
    "text": "lol\nJust finished 1\noffice, we had a toxic guy on our team, we were CT up 2-1 and he said we were trash and abandoned and got a 7 day ban LMFAO\nwe ended up winning 16-13\nok",
    "lookup": []
  },
  {
    "text": "@foolishwizrd you on for DnD tonight?",
    "lookup": []
  },
  {
    "text": "Done for tonight",
    "lookup": []
  },
  {
    "text": "Yeah queues",
    "lookup": []
  },
  {
    "text": "Is it time?\nMmmmmmmmm\nWhy\nWe only had that problem with Protim cause he's silver 2 I thought",
    "lookup": []
  },
  {
    "text": "TIME?!\nWasn't that 30 min ago",
    "lookup": []
  },
  {
    "text": "booting\nI'm in\nYo how long does it take to boooooot",
    "lookup": []
  },
  {
    "text": "ya",
    "lookup": []
  },
  {
    "text": "I am down in a bit",
    "lookup": []
  },
  {
    "text": "soon soon\nmm\nim bottin\nbooton",
    "lookup": []
  },
  {
    "text": "Looking at new Internet with Teksavy\n75mbit for 68$ or 300mb for 94$\nAnyone got and thoughts on which one?\nIt would be just me and my gf, right now we are sharing with the upstairs neighbors",
    "lookup": []
  },
  {
    "text": "What's happening",
    "lookup": []
  },
  {
    "text": "@foolishwizrd time?\ntim e",
    "lookup": []
  },
  {
    "text": "I think we can spam them harder than that",
    "lookup": []
  },
  {
    "text": "is it gamer time\nrip",
    "lookup": []
  },
  {
    "text": "Gamer time later",
    "lookup": []
  },
  {
    "text": "now",
    "lookup": []
  },
  {
    "text": "ok im back\nre-booting",
    "lookup": []
  },
  {
    "text": "Gamer time?\ntill 9pm",
    "lookup": []
  },
  {
    "text": "Anyone down for a quick game?",
    "lookup": []
  },
  {
    "text": "Kk",
    "lookup": []
  },
  {
    "text": "anyone joining?\nNuke starting soon soon",
    "lookup": []
  },
  {
    "text": "Didn't rank up lol",
    "lookup": []
  },
  {
    "text": "out for now",
    "lookup": []
  },
  {
    "text": "im out\ntomorrow tho",
    "lookup": []
  },
  {
    "text": "Tonight",
    "lookup": []
  },
  {
    "text": "Bruh why is there porn in the just counter strike general chat",
    "lookup": []
  },
  {
    "text": "Gamer time around 10 maybe\nGotta make some food with gf",
    "lookup": []
  },
  {
    "text": "Ok",
    "lookup": []
  },
  {
    "text": "time itm eime timeimt mietmiet",
    "lookup": []
  },
  {
    "text": "mmmmm\nrank up lets go",
    "lookup": []
  },
  {
    "text": "Huh\nI can do 1 or 2 later\nAfter 9 for sure",
    "lookup": []
  },
  {
    "text": "Maybe\nHard into tarkov wipe\nLuke working",
    "lookup": []
  },
  {
    "text": "wot\ncs?\\",
    "lookup": []
  },
  {
    "text": "YEE\ni can do 1\n5 min cs game",
    "lookup": []
  },
  {
    "text": "few more mintues",
    "lookup": []
  },
  {
    "text": "@foolishwizrd want to do a ciesta before dnd?",
    "lookup": []
  },
  {
    "text": "Ciesta tonight",
    "lookup": []
  },
  {
    "text": "Dammit\nIt's already 9",
    "lookup": []
  },
  {
    "text": "Everyone\nYou mean @here",
    "lookup": []
  },
  {
    "text": "Yee\nI've retired from tarkov\nBack to cs",
    "lookup": []
  },
  {
    "text": "It's time\nTo duduudududuel",
    "lookup": []
  },
  {
    "text": "im on",
    "lookup": []
  },
  {
    "text": "where is everyone",
    "lookup": []
  },
  {
    "text": "get in here",
    "lookup": []
  },
  {
    "text": "we in one",
    "lookup": []
  },
  {
    "text": "Gamer time\nGF is gone for the weekend and I'm off tomorrow, that means exactly nothing changes\ngamer timeeeeeeeeeeee",
    "lookup": []
  },
  {
    "text": "Pretty good in my 2 bedroom apartment\nWith my office lmfao\n😜",
    "lookup": []
  },
  {
    "text": "Its time",
    "lookup": []
  },
  {
    "text": "CS when",
    "lookup": []
  },
  {
    "text": "IM TRYING\n12 KILLS and my team isnt helping, we loosing",
    "lookup": []
  },
  {
    "text": "Team sucks\nI got the best everything, kills, least deaths, most assists, most hs, adr, and lowest rank and we loose",
    "lookup": []
  },
  {
    "text": "lets do it",
    "lookup": []
  },
  {
    "text": "Is it happening?",
    "lookup": []
  },
  {
    "text": "@here'\ncs",
    "lookup": []
  },
  {
    "text": "we in one\njust started\n1-2 for us",
    "lookup": []
  },
  {
    "text": "Straight outta Toronto cause York aint torronto",
    "lookup": []
  },
  {
    "text": "come",
    "lookup": []
  },
  {
    "text": "CS when?",
    "lookup": []
  },
  {
    "text": "Yo where the counter strikers at",
    "lookup": []
  },
  {
    "text": "Im bootin",
    "lookup": []
  },
  {
    "text": "Just did one\nno ones on",
    "lookup": []
  },
  {
    "text": "Saturday night whers the boyus",
    "lookup": []
  },
  {
    "text": "not tonight",
    "lookup": []
  },
  {
    "text": "CS?\nBooting at 4:35pm! Bruh",
    "lookup": []
  },
  {
    "text": "20 min?",
    "lookup": []
  },
  {
    "text": "?",
    "lookup": []
  },
  {
    "text": "Lol\nOk",
    "lookup": []
  },
  {
    "text": "huh\nready?",
    "lookup": []
  },
  {
    "text": "CS?",
    "lookup": []
  },
  {
    "text": "Huh",
    "lookup": []
  },
  {
    "text": "👀",
    "lookup": []
  },
  {
    "text": "ya we on",
    "lookup": []
  },
  {
    "text": "Time?\n@foolishwizrd I'm bootinnnnnn",
    "lookup": []
  },
  {
    "text": "Lets get the gang together",
    "lookup": []
  },
  {
    "text": "Where's the gang\n@here  Cs soon say jizz",
    "lookup": []
  },
  {
    "text": "b r u h\nya and i WASNT INVITED\nnow im here early and no one wants to\nlol\nsmh\nsavages",
    "lookup": []
  },
  {
    "text": "Ok\non",
    "lookup": []
  },
  {
    "text": "okokokokok\nbootin",
    "lookup": []
  },
  {
    "text": "Lukes dead",
    "lookup": []
  },
  {
    "text": "we doing dnd",
    "lookup": []
  },
  {
    "text": "Nope",
    "lookup": []
  },
  {
    "text": "dnd and elite dangerous",
    "lookup": []
  },
  {
    "text": "Sorry I was doing some work\nI can do one if it's still happening",
    "lookup": []
  },
  {
    "text": "lol\nhes not even in discord\nLooks like the libs are trying to cancel us\n@tad19 = lib confirmed",
    "lookup": []
  },
  {
    "text": "as long as no throwing\nI havent played all week, i just want my 0.32c case drop",
    "lookup": []
  },
  {
    "text": "Is it time?\nYou guys in a game or no?",
    "lookup": []
  },
  {
    "text": "Yo\nI'm here now",
    "lookup": []
  },
  {
    "text": "Ight\nhere for sure\non\ntime\nget in here\nhere we goooooooo",
    "lookup": []
  },
  {
    "text": "This game was constant stress lol\nThese ranks lkmfao",
    "lookup": []
  },
  {
    "text": "Bruujhhh disrespecting me like that",
    "lookup": []
  },
  {
    "text": "Ya I needs get food too\nI just woke up\nWhat u cook\nTell me\nYee\nBRUH\nDisrespect X2 today sheeeeesh\nYa his secret recipe is applebees\nI get my sauce directly from the president",
    "lookup": []
  },
  {
    "text": "👍",
    "lookup": []
  },
  {
    "text": "I'm gonna head downtown get some food\nFirst time leaving the house since Sunday lmfao",
    "lookup": []
  },
  {
    "text": "Gamer soon?\nJust picking up",
    "lookup": []
  },
  {
    "text": "I need 10",
    "lookup": []
  },
  {
    "text": "I'm home\nBe on in 5",
    "lookup": []
  },
  {
    "text": "Hello",
    "lookup": []
  },
  {
    "text": "hello",
    "lookup": []
  },
  {
    "text": "Luke's coming\nI gottem\nI cast message",
    "lookup": []
  },
  {
    "text": "waiting on you #5",
    "lookup": []
  },
  {
    "text": "Bro got a whole party watching him play cs",
    "lookup": []
  },
  {
    "text": "Guess what I just got",
    "lookup": []
  },
  {
    "text": "Just woke up",
    "lookup": []
  },
  {
    "text": "wo why not in the OF chat lol",
    "lookup": []
  },
  {
    "text": "gf and I gonna watch suicide squad",
    "lookup": []
  },
  {
    "text": "I'll be on later",
    "lookup": []
  },
  {
    "text": "Sorry I was asleep",
    "lookup": []
  },
  {
    "text": "CS?",
    "lookup": []
  },
  {
    "text": "Sorry I went to bed at like 7 lol",
    "lookup": []
  },
  {
    "text": "Working but ya later\nAlso recognizing the living room",
    "lookup": []
  },
  {
    "text": "I'm down",
    "lookup": []
  },
  {
    "text": "10 min?",
    "lookup": []
  },
  {
    "text": "Its tine\nwe here",
    "lookup": []
  },
  {
    "text": "huh???????",
    "lookup": []
  },
  {
    "text": "Hello?",
    "lookup": []
  },
  {
    "text": "What",
    "lookup": []
  },
  {
    "text": "Huh",
    "lookup": []
  },
  {
    "text": "Hello",
    "lookup": []
  },
  {
    "text": "Huh",
    "lookup": []
  },
  {
    "text": "When gamer time\nRip",
    "lookup": []
  },
  {
    "text": "I guess",
    "lookup": []
  },
  {
    "text": "It's it time\nHello\nWe have a 5 man\nFoolish, dank, me, tad, booty\n@.lukedankwalker\nI'm booting",
    "lookup": []
  },
  {
    "text": "leggo\nget in here",
    "lookup": []
  },
  {
    "text": "whats a donda?",
    "lookup": []
  },
  {
    "text": "huh\nwhats a donda\nwhen gamer time",
    "lookup": []
  },
  {
    "text": "Kk",
    "lookup": []
  },
  {
    "text": "Everyone\nIncluding Jeff Bezos\nComing",
    "lookup": []
  },
  {
    "text": "pew pew time",
    "lookup": []
  },
  {
    "text": "is that one of them smart watches\nwhat apps does it have",
    "lookup": []
  },
  {
    "text": "When's the rank up",
    "lookup": []
  },
  {
    "text": "Gamer time",
    "lookup": []
  },
  {
    "text": "cs?",
    "lookup": []
  },
  {
    "text": "cs",
    "lookup": []
  },
  {
    "text": "we starting one",
    "lookup": []
  },
  {
    "text": "dont think theres a 7:30 game",
    "lookup": []
  },
  {
    "text": "not now",
    "lookup": []
  },
  {
    "text": "not 4 me tonight",
    "lookup": []
  },
  {
    "text": "Gamer time 2night",
    "lookup": []
  },
  {
    "text": "Kk",
    "lookup": []
  },
  {
    "text": "@everyone it's 9ish, time?",
    "lookup": []
  },
  {
    "text": "@foolishwizrd @theswagengine @tad19 @.lukedankwalker",
    "lookup": []
  },
  {
    "text": "Crickets",
    "lookup": []
  },
  {
    "text": "Omg",
    "lookup": []
  },
  {
    "text": "@joeliepolieolie69 @foolishwizrd @.lukedankwalker @tad19 10:30",
    "lookup": []
  },
  {
    "text": "Booting\nWhere Chris and luke",
    "lookup": []
  },
  {
    "text": "😂",
    "lookup": []
  },
  {
    "text": "12-12",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker",
    "lookup": []
  },
  {
    "text": "\"booting\"\nHUH",
    "lookup": []
  },
  {
    "text": "HUH?!??!\n11:20 + 15 = 11:35????\n???????",
    "lookup": []
  },
  {
    "text": "Cs",
    "lookup": []
  },
  {
    "text": "It says you guys are on CS right now lmfao",
    "lookup": []
  },
  {
    "text": "Yo\nTime?\nComing\nBooting",
    "lookup": []
  },
  {
    "text": "lmfao\nIT WAS A PRANK\nlol\nhe threw a molly at me and i hopped in",
    "lookup": []
  },
  {
    "text": "Kk",
    "lookup": []
  },
  {
    "text": "No more pranks\nNo more funny business\nOr someone's going to jail tonight",
    "lookup": []
  },
  {
    "text": "Kk",
    "lookup": []
  },
  {
    "text": "I'm coming\nI thought we waiting for luke\nBootin",
    "lookup": []
  },
  {
    "text": "I'm guessing 10:15 after tad faps",
    "lookup": []
  },
  {
    "text": "??",
    "lookup": []
  },
  {
    "text": "??\nWhat about 920",
    "lookup": []
  },
  {
    "text": "It's 10:20",
    "lookup": []
  },
  {
    "text": "I'm bootinghhh\nI gotta unplug my work PC and reboot etc\nBootinn\nI have the biggest boots\nYou said 1020\nI said what about 920",
    "lookup": []
  },
  {
    "text": "BOOT",
    "lookup": []
  },
  {
    "text": "we got 4",
    "lookup": []
  },
  {
    "text": "Later",
    "lookup": []
  },
  {
    "text": "L8r",
    "lookup": []
  },
  {
    "text": "Ok 10:30\nBut what about 920",
    "lookup": []
  },
  {
    "text": "Bootin",
    "lookup": []
  },
  {
    "text": "That's how much of a shit show that game was lmfao\n;)\nOur next match we got put with that same team again on inferno and we won 16-14",
    "lookup": []
  },
  {
    "text": "15 min?",
    "lookup": []
  },
  {
    "text": "Time now",
    "lookup": []
  },
  {
    "text": "Roll up the rim to win",
    "lookup": []
  },
  {
    "text": "Booting",
    "lookup": []
  },
  {
    "text": "im booted",
    "lookup": []
  },
  {
    "text": "hello?\nwhat about 920",
    "lookup": []
  },
  {
    "text": "we ready to start\n@tad19 please",
    "lookup": []
  },
  {
    "text": "3 30 bombs are we still dont win",
    "lookup": []
  },
  {
    "text": "CS?",
    "lookup": []
  },
  {
    "text": "time\nim starting one up",
    "lookup": []
  },
  {
    "text": "Probably gonna do another D2 match at 8pm if anyone wants in",
    "lookup": []
  },
  {
    "text": "whoops\nwant to do a D2 real quick?",
    "lookup": []
  },
  {
    "text": "but its the fastest\ngot 45 min\nsearching d2",
    "lookup": []
  },
  {
    "text": "what about 920",
    "lookup": []
  },
  {
    "text": "ya\ngame will be done by then\n9-6 for us and its a 5v3 lol",
    "lookup": []
  },
  {
    "text": "16-6 we won lmfao\n6 minutes to win 7 rounds lmfao",
    "lookup": []
  },
  {
    "text": "12pm cs",
    "lookup": []
  },
  {
    "text": "cs now\nwe in\nwe on\n@foolishwizrd CS not VS",
    "lookup": []
  },
  {
    "text": "Rankup game today lets go",
    "lookup": []
  },
  {
    "text": "@everyone Labour day CS?\nmeans we start early\nstick it to the man",
    "lookup": []
  },
  {
    "text": "@everyone starting one up in 3 min",
    "lookup": []
  },
  {
    "text": "what",
    "lookup": []
  },
  {
    "text": "all solo1 with 1 retard who left, vs a 5 man with gold 4,2,1 and a silver 1",
    "lookup": []
  },
  {
    "text": "wheres the gamers",
    "lookup": []
  },
  {
    "text": "yo why dont we ever play the csgo battleroyal mode lmfao",
    "lookup": []
  },
  {
    "text": "cs when, im ready",
    "lookup": []
  },
  {
    "text": "@everyone its time",
    "lookup": []
  },
  {
    "text": "starting it up last chance\nrip",
    "lookup": []
  },
  {
    "text": "yeah\nof course\nno one replied\nme and luke\nup 4-1",
    "lookup": []
  },
  {
    "text": "@tad19 @foolishwizrd ?",
    "lookup": []
  },
  {
    "text": "Working till later",
    "lookup": []
  },
  {
    "text": "BRUH, EVERYONE IN THOSE SCREENSHOTS ARE HIGHER RANKS THAN ME",
    "lookup": []
  },
  {
    "text": "I'm down at 1010",
    "lookup": []
  },
  {
    "text": "Gold 3 and 4 and MG isn't higher than me?\nCause my team was better than me and so was the enemy team?\nThe silver 1 is obviously a troll etc in a 5 stack with a g4\nNah wait till 10pm for the whole squad",
    "lookup": []
  },
  {
    "text": "1010",
    "lookup": []
  },
  {
    "text": "Time\nLol nah\nBootin",
    "lookup": []
  },
  {
    "text": "yea",
    "lookup": []
  },
  {
    "text": "Nah I'm working\nGot my mid year raise today 😎",
    "lookup": []
  },
  {
    "text": "12%",
    "lookup": []
  },
  {
    "text": "195 neeve street yo that's in the ghetto lmfao\nI used to rent around the corner on alice",
    "lookup": []
  },
  {
    "text": "19 amberwood looks swag\n\"if you're at least 55 years young' yo wtf\nIs it a retirement community?\nI'd buy that house\nI assume there is a condo fee, cause it says you don't need to upkeep the outside",
    "lookup": []
  },
  {
    "text": "9foot ceiling eh, I won't hit my head\nGood room for VR too I won't smash the controllers into the ceiling",
    "lookup": []
  },
  {
    "text": "Why you guys looking at houses anyways\nDone work now, bootin",
    "lookup": []
  },
  {
    "text": "I'm retired",
    "lookup": []
  },
  {
    "text": "You made the valorant chat on slow mode\nBruh",
    "lookup": []
  },
  {
    "text": "Can't believe they did you like that",
    "lookup": []
  },
  {
    "text": "I'm retired\nMight just get my weekly drops and that's jt",
    "lookup": []
  },
  {
    "text": "Csgo\nLol\nI'll do 1",
    "lookup": []
  },
  {
    "text": "I am\nEveryone take a smoke break\nWhat do you think",
    "lookup": []
  },
  {
    "text": "I'm booting\nRebooting\n6\nSounds like you need a second smoke break\n4\n2",
    "lookup": []
  },
  {
    "text": "Do you ever just wipe and wipe and wipe and wipe and there's still shit?\nThat's what my computer is doing\n1",
    "lookup": []
  },
  {
    "text": "🎮👾",
    "lookup": []
  },
  {
    "text": "Terrorists win\nTerrorists planted the bomb\nBomb site B",
    "lookup": []
  },
  {
    "text": "Hello?",
    "lookup": []
  },
  {
    "text": "bbbrrruuuuhhhhtthhheerrrr",
    "lookup": []
  },
  {
    "text": "Huh\nHello\nI'm ready for something",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker\nWhy's it so hard to get the squad together\nLuke's at work",
    "lookup": []
  },
  {
    "text": "I wanna do duos on Lake lol\nAnd battleroyal mode",
    "lookup": []
  },
  {
    "text": "K",
    "lookup": []
  },
  {
    "text": "I'm here",
    "lookup": []
  },
  {
    "text": "NOPE\n13-16",
    "lookup": []
  },
  {
    "text": "in an alternate universe luke was here and because of his rank we didnt get q'd with them lol",
    "lookup": []
  },
  {
    "text": "Yo i just noticed, as of July 2021 STEAM is now charging sales tax on digital purchases, because of new Canadian Government rules",
    "lookup": []
  },
  {
    "text": "Bought Hardspace: Shipbreaker",
    "lookup": []
  },
  {
    "text": "No gamer for me tonight",
    "lookup": []
  },
  {
    "text": "Later",
    "lookup": []
  },
  {
    "text": "Later time\nNormal time",
    "lookup": []
  },
  {
    "text": "Yo\nI'll boot?\nComing",
    "lookup": []
  },
  {
    "text": "@everyone  5 man in the next game?\nLooks like 25 min\nTad/jizz in one 6:2",
    "lookup": []
  },
  {
    "text": "15:8\neveryone ready?\n@foolishwizrd @.lukedankwalker\ntime time time",
    "lookup": []
  },
  {
    "text": "hello",
    "lookup": []
  },
  {
    "text": "Just woke up",
    "lookup": []
  },
  {
    "text": "Maybe later",
    "lookup": []
  },
  {
    "text": "Yo\nWhat's the status",
    "lookup": []
  },
  {
    "text": "@everyone time\ngotta get my drop\ndoing one in 5 min or so if no one joins up\n@phantom_cooper @.lukedankwalker",
    "lookup": []
  },
  {
    "text": "hello",
    "lookup": []
  },
  {
    "text": "I think it's time we switch to csgo ranked gun game 😎🎮\nLet's be competitive gun game players",
    "lookup": []
  },
  {
    "text": "🍰",
    "lookup": []
  },
  {
    "text": "?",
    "lookup": []
  },
  {
    "text": "CS time for me",
    "lookup": []
  },
  {
    "text": "Finally over 1000 hours",
    "lookup": []
  },
  {
    "text": "Yo\nJust woke up",
    "lookup": []
  },
  {
    "text": "Ok\nBoot time\n@.lukedankwalker\ni am bvooted",
    "lookup": []
  },
  {
    "text": "luke is walking home, he said do 1 without him\nhis computer is an abacus\ntoo much cat hair in the intake manafolds\nwhats that black circle\nlmfao",
    "lookup": []
  },
  {
    "text": "If we de-rank then we will get more wins",
    "lookup": []
  },
  {
    "text": "Just got up",
    "lookup": []
  },
  {
    "text": "Did you guys play?",
    "lookup": []
  },
  {
    "text": "@everyone  time for cs?",
    "lookup": []
  },
  {
    "text": "I'm gonna do one soon, just waking up",
    "lookup": []
  },
  {
    "text": "Votin\nI'll be on later",
    "lookup": []
  },
  {
    "text": "im ready\ntook 1:40hr to vote jesus",
    "lookup": []
  },
  {
    "text": "Tonight we deep rock and roll",
    "lookup": []
  },
  {
    "text": "Yee",
    "lookup": []
  },
  {
    "text": "Food\n@foolishwizrd @.lukedankwalker what time for deep rock?",
    "lookup": []
  },
  {
    "text": "Rip\nI missed all the chaos\nSlept 12 hours",
    "lookup": []
  },
  {
    "text": "Later",
    "lookup": []
  },
  {
    "text": "Wtf is insertion\nThe new map?",
    "lookup": []
  },
  {
    "text": "gamer time",
    "lookup": []
  },
  {
    "text": "i wanna try the new stuff for sure",
    "lookup": []
  },
  {
    "text": "Restart your modem and router",
    "lookup": []
  },
  {
    "text": "its time",
    "lookup": []
  },
  {
    "text": "bruh ive been asleep like 14 hourts",
    "lookup": []
  },
  {
    "text": "re-ranked to silver master",
    "lookup": []
  },
  {
    "text": "Gamer?",
    "lookup": []
  },
  {
    "text": "I\nDECLARE\nGAMERTIME",
    "lookup": []
  },
  {
    "text": "vs a 5 man of all gold novas lol\nwheres my tream",
    "lookup": []
  },
  {
    "text": "fucking csgo\nim uninstalling this piece of shit game man\nevery night im just fucking raging",
    "lookup": []
  },
  {
    "text": "1 guy, fucking from south amercia or whatever never on comms, bottom fragging, lagged out 1 time, afk for 60 seconds at least 3 times, made us loose the round at least once because of it, 2v2 and hes afk, another guy, it is 15-9 and 2v2 we win, then he team kills me with an awp as i am defusing and runs away and we loose 16-9, literally greifing, also not on comms, defending the south american guy in chat\nwaste of 37 minutes, and i top fragged\njust literally a waste of time\nthis isnt fun\nsince they removed the 'bot' feature this game litterally in un-playable\nLuke and I had a game last night, it was 5-4 from round 1 because a guy left in warmup after joining, nothing we could do about it",
    "lookup": []
  },
  {
    "text": "I play with you guys and constantly bottom frag because youre all stuck in silver hell with the rest of us, and whenever i play solo i can actually do good then my entire team cant even just play the game properly\nif i top frag my team is trash and we loose, there is no incentive to me being high on the leaderboard\nnah i suck at a game i have 1000 hours in",
    "lookup": []
  },
  {
    "text": "Can't even get better at the gameplay because i have to fight the game iteself with shitty teammates, griefers, afk, and no bots so we cant even kick\nThey are incentivized to get kicked so they get to leave a game they are going to loose and get no elo loss and get into a new game faster which they might win",
    "lookup": []
  },
  {
    "text": "Past 10pm, wheres the gamers",
    "lookup": []
  },
  {
    "text": "texted him",
    "lookup": []
  },
  {
    "text": "ya",
    "lookup": []
  },
  {
    "text": "here\n@foolishwizrd  time",
    "lookup": []
  },
  {
    "text": "Time?",
    "lookup": []
  },
  {
    "text": "starting one",
    "lookup": []
  },
  {
    "text": "got a W",
    "lookup": []
  },
  {
    "text": "@everyone  cs before dnd?",
    "lookup": []
  },
  {
    "text": "Lol that egirl had JOE on her forehead last night 😂\nYo if I abandon then I can't play anyways",
    "lookup": []
  },
  {
    "text": "LOL\nYou got a derank?\nYou did a normal comp office? How did you get that team\nI'm ready to insert tonight, I've found my calling camping office",
    "lookup": []
  },
  {
    "text": "9pm for me",
    "lookup": []
  },
  {
    "text": "Time?\nBootin",
    "lookup": []
  },
  {
    "text": "@foolishwizrd @joeliepolieolie69",
    "lookup": []
  },
  {
    "text": "@joeliepolieolie69  @foolishwizrd",
    "lookup": []
  },
  {
    "text": "im not paying for an altlol",
    "lookup": []
  },
  {
    "text": "Its rankup day gamers\nAll of us silvers are going to GOld1 today",
    "lookup": []
  },
  {
    "text": "Huh?\nLuke and I did 2 and we lost both",
    "lookup": []
  },
  {
    "text": "Time?",
    "lookup": []
  },
  {
    "text": "Be on In like 10\nJust gonna make some noodles",
    "lookup": []
  },
  {
    "text": "On\n@foolishwizrd ?",
    "lookup": []
  },
  {
    "text": "@foolishwizrd ITS TIME\non",
    "lookup": []
  },
  {
    "text": "hello\ni thought we were starting",
    "lookup": []
  },
  {
    "text": "huh\n?\ngot dam just sat for 40 min in this queue for everyone to leave",
    "lookup": []
  },
  {
    "text": "Swag said he was too tired\nThen TAD left the chat without saying anything either\nAt one point Tad said start, so i started it, and it said he had to restart his game, and he did and never came back\nWe just got beat by a 5 man of asian characters\nThey got at least 3 zeus's on us, 2 knives, and at least 5 shot gun kills\nstupid",
    "lookup": []
  },
  {
    "text": "Not whatever Chris did last night 😂",
    "lookup": []
  },
  {
    "text": "I am going for a burger then gamer time",
    "lookup": []
  },
  {
    "text": "Ready",
    "lookup": []
  },
  {
    "text": "Time?",
    "lookup": []
  },
  {
    "text": "@foolishwizrd ????",
    "lookup": []
  },
  {
    "text": "@foolishwizrd ??",
    "lookup": []
  },
  {
    "text": "I'm gonna start working on the battle pass, if I get far enough into it I'll buy it to make some money on the cases",
    "lookup": []
  },
  {
    "text": "Damn what",
    "lookup": []
  },
  {
    "text": "It's gamer time",
    "lookup": []
  },
  {
    "text": "................\nShort Premier mode on Inferno\nMy team SUCKED LITERAL ASS",
    "lookup": []
  },
  {
    "text": "wtf is this",
    "lookup": []
  },
  {
    "text": "time?",
    "lookup": []
  },
  {
    "text": "short preimier, their top frag was a silver 2\nlmfao\nbruh\nso many smurfs",
    "lookup": []
  },
  {
    "text": "Lmao\nYou guys ready?\n@everyone time time?",
    "lookup": []
  },
  {
    "text": "yo ready ready",
    "lookup": []
  },
  {
    "text": "Rip",
    "lookup": []
  },
  {
    "text": "@foolishwizrd hello",
    "lookup": []
  },
  {
    "text": "Time?\nNo throwing today",
    "lookup": []
  },
  {
    "text": "Rip",
    "lookup": []
  },
  {
    "text": "I'm ready",
    "lookup": []
  },
  {
    "text": "Ya",
    "lookup": []
  },
  {
    "text": "you cant do that\nthats illegal",
    "lookup": []
  },
  {
    "text": "im on",
    "lookup": []
  },
  {
    "text": "lets go",
    "lookup": []
  },
  {
    "text": "Yo",
    "lookup": []
  },
  {
    "text": "gamer\ntime\nwhy do you want to emulate gta2 on an xbox, just emulate it on pc\nyou can just put linux on your pc lmfao\nim booted",
    "lookup": []
  },
  {
    "text": "Lol",
    "lookup": []
  },
  {
    "text": "My people\nNot a gold in sight",
    "lookup": []
  },
  {
    "text": "cs",
    "lookup": []
  },
  {
    "text": "HACKS\nHow can this be a just counterstrike group if we don't play counterstrike",
    "lookup": []
  },
  {
    "text": "Ya\nThe Royal we\nI'll be queueing tonight too",
    "lookup": []
  },
  {
    "text": "Probably right now",
    "lookup": []
  },
  {
    "text": "cs?",
    "lookup": []
  },
  {
    "text": "Sounds like no 10 man",
    "lookup": []
  },
  {
    "text": "CS time???\n@everyone  Anyone for a cs?",
    "lookup": []
  },
  {
    "text": "nice",
    "lookup": []
  },
  {
    "text": "CS?",
    "lookup": []
  },
  {
    "text": "I'm doing a cs now",
    "lookup": []
  },
  {
    "text": "cs????",
    "lookup": []
  },
  {
    "text": "wee just finished",
    "lookup": []
  },
  {
    "text": "wot\nhello?",
    "lookup": []
  },
  {
    "text": "???",
    "lookup": []
  },
  {
    "text": "Yee let's go\ngf is gone for the weekend so it's CRAZY GAMER TIME\nJK that's all the time\n3am is battlefield beta",
    "lookup": []
  },
  {
    "text": "The real reason we play cs lol\nPerformance issues",
    "lookup": []
  },
  {
    "text": "12gb I think\nIt wasn't huge\n🍆\nMaybe 17\nLmfaoooo\nWhat about power wash simulator\nFps power wash",
    "lookup": []
  },
  {
    "text": "@everyone 9:05 where is the gamers",
    "lookup": []
  },
  {
    "text": "sheesh\nUpdate today\n[MAPS]\n– Dust 2\n— Re-tired visblocker from T spawn to mid\n— Blocked unintended wallbang",
    "lookup": []
  },
  {
    "text": "They put a tire on top????",
    "lookup": []
  },
  {
    "text": "re-tired != retired lmfao\nthey trolled us",
    "lookup": []
  },
  {
    "text": "hes here brugh",
    "lookup": []
  },
  {
    "text": "I blame vertigo",
    "lookup": []
  },
  {
    "text": "Where the gamers",
    "lookup": []
  },
  {
    "text": "Foolish was there too but he left at the last round when he died lol\nBruh these guys trying to tell me vertigo will be fine, nah man that's a clan that plays vertigo probably, we don't play vertigo we play NUKE\nThey were all gold 3 like wtf",
    "lookup": []
  },
  {
    "text": "Ye\nWhich is why we need to train nuke lmfao",
    "lookup": []
  },
  {
    "text": "Ya\nHello\nBattlefield beta\nCs",
    "lookup": []
  },
  {
    "text": "Hello\nHow many times I gotta say hello\n@tad19  @foolishwizrd  @phantom_cooper\n@.lukedankwalker is here",
    "lookup": []
  },
  {
    "text": "You're playing with us\nGet on",
    "lookup": []
  },
  {
    "text": "tad\nhelloooooo",
    "lookup": []
  },
  {
    "text": "Joe got top frag and we won",
    "lookup": []
  },
  {
    "text": "Microsoft selling us a fight we already finished smh",
    "lookup": []
  },
  {
    "text": "Lol\nYou missed all the battlefield moments ™️\nGetting some food then gamer time",
    "lookup": []
  },
  {
    "text": "gamers...\nassemble...",
    "lookup": []
  },
  {
    "text": "CS?\nBattlefield?",
    "lookup": []
  },
  {
    "text": "XD\nhahaha",
    "lookup": []
  },
  {
    "text": "doing bf with zach right now",
    "lookup": []
  },
  {
    "text": "Bf now but CS too",
    "lookup": []
  },
  {
    "text": "What\nYes",
    "lookup": []
  },
  {
    "text": "Yo\nHere",
    "lookup": []
  },
  {
    "text": "im hjere",
    "lookup": []
  },
  {
    "text": "RIP Just Counterstrike\nRename the sub",
    "lookup": []
  },
  {
    "text": "lmfao\nYou heard it here folks it is morally acceptable 🙂\ntbh yes they suck, it is not an acceptable solution to track down a wiiu and a copy of the game to play a game, both of which will be used, and nintendo will get no money from that sale lol\nThis is why everyone wants the zelda games rereleased on the swtich etc",
    "lookup": []
  },
  {
    "text": "i think i gotta update my switch before i can download metroid dread",
    "lookup": []
  },
  {
    "text": "Yeah Nintendo never puts things on sale\nAnd yeah I would never buy a switch if I couldn't of hacked it\nThe only game I played 100% was smash bros, every other switch game I've played maybe an hour or less",
    "lookup": []
  },
  {
    "text": "Gamer time?",
    "lookup": []
  },
  {
    "text": "@everyone thanksgiving ciesta?",
    "lookup": []
  },
  {
    "text": "idk\nthanks giving\nim doing 1",
    "lookup": []
  },
  {
    "text": "53 minute game lmfao",
    "lookup": []
  },
  {
    "text": "PURCHASED",
    "lookup": []
  },
  {
    "text": "I already have an i5 8600k\nIt's overclocked to 5ghz\nThis is going in a second PC anyways\nThe only way to buy a cheap gpu seems to be prebuilds and combos",
    "lookup": []
  },
  {
    "text": "Coming",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker @foolishwizrd\nSorted by controversial",
    "lookup": []
  },
  {
    "text": "CS?",
    "lookup": []
  },
  {
    "text": "@everyone CS?\nTad + jizz +++++",
    "lookup": []
  },
  {
    "text": "booted\n@.lukedankwalker",
    "lookup": []
  },
  {
    "text": "@joeliepolieolie69 @tad19\nsc\ncs",
    "lookup": []
  },
  {
    "text": "It's a fresh character, and they give you all the quest items you need in messages and it doesn't expire. I did a reserve run and killed 1 scav and heard nothing else and got out with 300k of loot\nThen they gave me a 8 question survey about inertia and weight",
    "lookup": []
  },
  {
    "text": "Don't embarrass the man",
    "lookup": []
  },
  {
    "text": "Got the JUICE",
    "lookup": []
  },
  {
    "text": "I don't need the i7 multithreading just raw GHz which means i5 is fine\nMultithreading is best used for like streaming and workloads that aren't gaming\nMost games don't use multitreading\nK series i5 you can overclock\nMy current cpu is overclocked to 5.1ghz I think, I put it down to 5ghz for heat",
    "lookup": []
  },
  {
    "text": "gamer time\n\"An i7 is a \"better\" choice is you're a pro animator or motion graphics artist who needs to do rendering. The extra cost will be used - and likely tax deductible if you use your machine for work.\n\nThe i5 is a \"better\" choice if you're building a gaming PC on a budget. You won't be paying for features you don't need then.\"",
    "lookup": []
  },
  {
    "text": "Where's the gamers",
    "lookup": []
  },
  {
    "text": "when i built my PC i went for the 1080ti which was the best non titan at the time, so i saved 150$ on cpu cause i knew it didnt matter anyways lol\ngpu better",
    "lookup": []
  },
  {
    "text": "where are the gamers\n@everyone  cs???",
    "lookup": []
  },
  {
    "text": "You don't need a core i9 to download feet pics",
    "lookup": []
  },
  {
    "text": "CS",
    "lookup": []
  },
  {
    "text": "the system is broken",
    "lookup": []
  },
  {
    "text": "Nuh uh I post most games",
    "lookup": []
  },
  {
    "text": "Lol",
    "lookup": []
  },
  {
    "text": "Cs\n@everyone  cs",
    "lookup": []
  },
  {
    "text": "Why are you @ing jerbear lmfao\nhe dont play cs\nits 10pm thats gamer time",
    "lookup": []
  },
  {
    "text": "im on\n@everyone cs time",
    "lookup": []
  },
  {
    "text": "cs\n@foolishwizrd lets go",
    "lookup": []
  },
  {
    "text": "@foolishwizrd  we starting\nya got 1 min",
    "lookup": []
  },
  {
    "text": "saturday morning mm lmfao",
    "lookup": []
  },
  {
    "text": "LOL these ranks\nrankup in crackhead hours",
    "lookup": []
  },
  {
    "text": "Huh",
    "lookup": []
  },
  {
    "text": "Sup",
    "lookup": []
  },
  {
    "text": "Time?",
    "lookup": []
  },
  {
    "text": "RANKUP GAME BABY\nSILVER MASTER\n@.lukedankwalker",
    "lookup": []
  },
  {
    "text": "He's at work party",
    "lookup": []
  },
  {
    "text": "Yo\nAre you started?\nI'm gonna booooot\nHuu\nHuh",
    "lookup": []
  },
  {
    "text": "yeah",
    "lookup": []
  },
  {
    "text": "@everyone cs?\nim booted\nTime to get that bravo case",
    "lookup": []
  },
  {
    "text": "botting cs game now",
    "lookup": []
  },
  {
    "text": "Huh\nWhy so many ats",
    "lookup": []
  },
  {
    "text": "Watched Dune, the movie is wack, also didn't know it's just only a Part 1 so movie left me disappointed we didn't see how it ends",
    "lookup": []
  },
  {
    "text": "@everyone cs time\nhonestly its just a \"IMAX movie\", just there for the special effects, not really a good movie\nIntesteller or Blade Runner were better IMAX movies\nThis is 2.5hr, it needed to be 3hr complete movie",
    "lookup": []
  },
  {
    "text": "bro check your white privileges' at the door\nIts like hobbit being split into 3 movies\nDune was one book and one movie now it is two\nbased on the trailer i expected the whole movie",
    "lookup": []
  },
  {
    "text": "look mom\nput it on the fridge",
    "lookup": []
  },
  {
    "text": "gamer, time",
    "lookup": []
  },
  {
    "text": "yeah\n@everyone get in here, cs shot dust winning spee lets go",
    "lookup": []
  },
  {
    "text": "my eggo",
    "lookup": []
  },
  {
    "text": "What the actual fuck just happened\n62-10 gold 2 and they had 2 gold 4's",
    "lookup": []
  },
  {
    "text": "???\nits noon on my flex day lmfao\ni got up at 7:30\nam",
    "lookup": []
  },
  {
    "text": "was playing takorv all morning, just won a dust cs\nwas all golf 4/3's mainly so hopefully rankup soon",
    "lookup": []
  },
  {
    "text": "Yeah 😂",
    "lookup": []
  },
  {
    "text": "CS tonight\nBe there or be square",
    "lookup": []
  },
  {
    "text": "Rank up night",
    "lookup": []
  },
  {
    "text": "LETS GO GAMERSSSSSSSSSSSSSSSSSSSSSSSS",
    "lookup": []
  },
  {
    "text": "It's gamer time",
    "lookup": []
  },
  {
    "text": "Hi\n@everyone im starting a cs",
    "lookup": []
  },
  {
    "text": "hi",
    "lookup": []
  },
  {
    "text": "o\nthis for me?\nI blocked anmurath on twitch LMFAO\nno cs tonight\ndnd\nhalloween\nspooky",
    "lookup": []
  },
  {
    "text": "bruh shes retarted\n4 hours into streaming it says \"be right back changing into halloween bikini\" and i go play a game of cs and come back 30 min later and it still says that\nshes not even streaming and 12k people watching\nthen when she finally did come back she didnt do anything lmfao\nher chat is literally just spams to follow her on socials\nand her asmr is that too, she just constantly says follow my socials\nthere are so many other egirls that have more personality or actually do something on stream or talk to chat\nI wouldn't be suprised if she was a lizard person just like zuckerburg",
    "lookup": []
  },
  {
    "text": "wheres the gmers",
    "lookup": []
  },
  {
    "text": "cs",
    "lookup": []
  },
  {
    "text": "Anyone want to help me with the guardian missions for the battle pass?",
    "lookup": []
  },
  {
    "text": "They can't keep getting away with this!",
    "lookup": []
  },
  {
    "text": "cs?\n@tad19 cs?\nI need someone to help me with battlepass guardian missions",
    "lookup": []
  },
  {
    "text": "Yee\nI hate going out to eat now\nI'd rather do takeout\nFrom what Luke's said about the waitresses making bank\nNuh uh\nLike it's their job to bring you food and ask you what you want why am I tipping them 5$\nI'd rather tip the cook tbh\nWhen I get takeout at my favorite Indian place in Guelph I give them 1$ cause it's family run",
    "lookup": []
  },
  {
    "text": "I don't tip at FRIGGEN dominos when I pickup the pizza cause the machine prompts you for tip",
    "lookup": []
  },
  {
    "text": "Kolta club, or Helmand kabab\nKolta for Indian food, Helmand for briani rice\nYee Harvard\nNo frills plaza",
    "lookup": []
  },
  {
    "text": "I equate dominos to McDonald's cause I don't do delivery",
    "lookup": []
  },
  {
    "text": "CS???",
    "lookup": []
  },
  {
    "text": "hello\nluke is awal\nAWOL\nhes in the cord but not talking",
    "lookup": []
  },
  {
    "text": "@jerbear107 I just got gamepass pc 3 months for 1$, let me know what you want to play lol",
    "lookup": []
  },
  {
    "text": "I'm gonna install Squadrons",
    "lookup": []
  },
  {
    "text": "What\nYeah still like 20 bucks\nGamepass is 1$ 🤠\nAnd includes deep rock\nSquadrons tonight",
    "lookup": []
  },
  {
    "text": "Guys, I don't want to play deep rock\nGet game pass for 1$, you get 10 hours to try battlefield in a week or two, you get halo next month, and you can try out 100 games",
    "lookup": []
  },
  {
    "text": "That's why I'm only doing it for 3 months\nFor 1$\nGonna play all the games I've been meaning to try , and that's fine when it's over\nBy Feb 3rd 2022, halo will be put, battlefield will be out, tsrkov will have an update and a wipe",
    "lookup": []
  },
  {
    "text": "...........................................................................\n-__________________________-",
    "lookup": []
  },
  {
    "text": "Ya\n@everyone CS later",
    "lookup": []
  },
  {
    "text": "Sorry I just slept again from like 8pm-now\nIt was my day off lol\nNah just a 6 hr nap",
    "lookup": []
  },
  {
    "text": "lol\ni could do a cs",
    "lookup": []
  },
  {
    "text": "@tad19 cs?",
    "lookup": []
  },
  {
    "text": "Here we go gamers\nHard drive is full",
    "lookup": []
  },
  {
    "text": "nut",
    "lookup": []
  },
  {
    "text": "CS?",
    "lookup": []
  },
  {
    "text": "CS\nya i can play forza on gamepass nov 9th\n@everyone  cs",
    "lookup": []
  },
  {
    "text": "nah just the 1$ one\nlol im good im good\nim ready for cs, was eating dinner",
    "lookup": []
  },
  {
    "text": "1030\n@tad19  help me do guardian missions",
    "lookup": []
  },
  {
    "text": "leggo",
    "lookup": []
  },
  {
    "text": "'Windows' + Shift + S",
    "lookup": []
  },
  {
    "text": "The dream\nI'm crying\n😢",
    "lookup": []
  },
  {
    "text": "gamers",
    "lookup": []
  },
  {
    "text": "cs?",
    "lookup": []
  },
  {
    "text": "Bruh I'm poopin",
    "lookup": []
  },
  {
    "text": "bruh\nno",
    "lookup": []
  },
  {
    "text": "cs time",
    "lookup": []
  },
  {
    "text": "what",
    "lookup": []
  },
  {
    "text": "so what are you actually working at",
    "lookup": []
  },
  {
    "text": "^Asian Club",
    "lookup": []
  },
  {
    "text": "Bruh how are there hate crimes in Sarnia when everyone's white\n😂\nWho they hating on",
    "lookup": []
  },
  {
    "text": "Ye",
    "lookup": []
  },
  {
    "text": "Currently free on epic games\n@foolishwizrd gamer",
    "lookup": []
  },
  {
    "text": "Everyone in the lobby was a higher rank than me\nAnd my team was in a 3 stack not calling out, and the enemy is a 5 stack",
    "lookup": []
  },
  {
    "text": "Cool",
    "lookup": []
  },
  {
    "text": "Why not get the 1$ game pass, play Forza for three months, cancel, and then buy the game for cheaper (probably) if you're still playing it in February\nIt's gamer time",
    "lookup": []
  },
  {
    "text": "Tarkov update is 7gb",
    "lookup": []
  },
  {
    "text": "cs soon?",
    "lookup": []
  },
  {
    "text": "here\nonline",
    "lookup": []
  },
  {
    "text": "we are gaming\nliterally",
    "lookup": []
  },
  {
    "text": "its literally gamer time",
    "lookup": []
  },
  {
    "text": "For all the back of house bros\nLmfao",
    "lookup": []
  },
  {
    "text": "Started watching No time to die and gf fell asleep in the first 40 min, so I guess I'm watching it later\nGamer time",
    "lookup": []
  },
  {
    "text": "cs?",
    "lookup": []
  },
  {
    "text": "#bottomfrag",
    "lookup": []
  },
  {
    "text": "5 stack unranked lmfao\nwheres the gamers\nliterally 0 gamers",
    "lookup": []
  },
  {
    "text": "-titty streamer \"its so hot\"\njoe in chat - \"portable air-conditioner you put in the window, like 200$\"\n-titty streamer \"i have one, buy its winter why would i hook it up\"\nFUCKING DUMB IDIOT OPEN THE WINDOW THEN?!?!?!?!!?!?!?!\nalso she said shes broke, bitch got 6058 subs\nye\nlmfao\n\"im sweaty\" lkmfao\nfucking dumb too",
    "lookup": []
  },
  {
    "text": "lol youre watching? i closed it ages ago",
    "lookup": []
  },
  {
    "text": "Lol\nShe says shes never had sex\nBut she owns a house with her boyfriend\nYou guys hear amuranth bought a gas station? 🤣\nLmfaooo\nFor 4 million\nShe paid 1 mill and got a 3 mill loan\nAnd for \"tax reasons\"\nThey are money pits",
    "lookup": []
  },
  {
    "text": "What the fuck kinda race is that 😂\nThis isn't nascar\nThis is mexico",
    "lookup": []
  },
  {
    "text": "When gamer time",
    "lookup": []
  },
  {
    "text": "ye",
    "lookup": []
  },
  {
    "text": "Possible leaked release for halo multiplayer on monday",
    "lookup": []
  },
  {
    "text": "Ya but Pringles and some source code says it's Monday for multiplayer",
    "lookup": []
  },
  {
    "text": "CS",
    "lookup": []
  },
  {
    "text": "@everyone cs",
    "lookup": []
  },
  {
    "text": "ya exploiting lmfao, farming afk\nxp/skill/money/spins farming\nya\nwhile afk\nbruh you know what you did\nyou posted the screenshot the other day\nyou literally posted screenshots lol",
    "lookup": []
  },
  {
    "text": "@tad19 i thought we were doing cs",
    "lookup": []
  },
  {
    "text": "yes yes yes yes yes",
    "lookup": []
  },
  {
    "text": "Nik @ Night",
    "lookup": []
  },
  {
    "text": "L anyways",
    "lookup": []
  },
  {
    "text": "Protim is in deep",
    "lookup": []
  },
  {
    "text": "im just finishing dinner with gf\nyeah\ndnd time",
    "lookup": []
  },
  {
    "text": "lmfaoooooooooooooo\ngot another one\non a basic wheel spin",
    "lookup": []
  },
  {
    "text": "I agree with the cheating thing, you cant tell if there are any cheaters like 96-0 cause you cant see the scoreboard",
    "lookup": []
  },
  {
    "text": "😂",
    "lookup": []
  },
  {
    "text": "@everyone HALO INFITINITE OUT ON STEAM\n25GB GO GO GO\nMy face when ya'll dont #believe",
    "lookup": []
  },
  {
    "text": "intersting\n4k textures optional",
    "lookup": []
  },
  {
    "text": "at GN1 you are above 51.9% of players. GN1 is where you are better than average based on number of active accounts",
    "lookup": []
  },
  {
    "text": "Nah\nI got it downloaded and started\nIn a meeting tho",
    "lookup": []
  },
  {
    "text": "Hasn't this game been out for.... 2 months? Lmfao holu",
    "lookup": []
  },
  {
    "text": "Played 2 matches , good, fps was like 30 but I had my miner on by accident lol, didn't change settings or do tutorial yet",
    "lookup": []
  },
  {
    "text": "lol\nIts gamer season",
    "lookup": []
  },
  {
    "text": "30 KILLS 14 DEATHS gamers\nthe gamers are back",
    "lookup": []
  },
  {
    "text": "The wasp is insaine\n32 and 7, got a 15 kill streak",
    "lookup": []
  },
  {
    "text": "HERE\nhaloin",
    "lookup": []
  },
  {
    "text": "here\nwe here\nwe on halop",
    "lookup": []
  },
  {
    "text": "There's definitely some fuckery going on with mouse vs controller on pc",
    "lookup": []
  },
  {
    "text": "@jerbear107 's bedroom right now\nAfter that trailer",
    "lookup": []
  },
  {
    "text": "Forza 5 update\nThey removed the super wheelspin from the whillys jeep\nRip the exploit\nShoulda farmed it more\nLmfao",
    "lookup": []
  },
  {
    "text": "Cs tonight?\nNeed to get my DROPS",
    "lookup": []
  },
  {
    "text": "Hello?",
    "lookup": []
  },
  {
    "text": "didnt even get a drop wtf",
    "lookup": []
  },
  {
    "text": "There gonna be riots\nHe's gonna have to go into witness protection",
    "lookup": []
  },
  {
    "text": "cs???\nIm down for CS, Halo, or Forza",
    "lookup": []
  },
  {
    "text": "Pliz sir can I have some CS",
    "lookup": []
  },
  {
    "text": "CS tonight\nI have to build my new desk chair, and were watching 10 rings, so maybe 10:30?\nNeed to get my Cs drops",
    "lookup": []
  },
  {
    "text": "CS at 11",
    "lookup": []
  },
  {
    "text": "Finishing movie still",
    "lookup": []
  },
  {
    "text": "Let's go\nWhere's jizz and foolish",
    "lookup": []
  },
  {
    "text": "@everyone its time\nCS\nthen halo\n1-1 me rust",
    "lookup": []
  },
  {
    "text": "y",
    "lookup": []
  },
  {
    "text": "Mass effect legendary trilogy possible Gamepass leak? Let's gooooo",
    "lookup": []
  },
  {
    "text": "Dnd",
    "lookup": []
  },
  {
    "text": "i can do cs at 12",
    "lookup": []
  },
  {
    "text": "Ya",
    "lookup": []
  },
  {
    "text": "m back on the grind",
    "lookup": []
  },
  {
    "text": "Me IRLHALO",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker\ntryu this",
    "lookup": []
  },
  {
    "text": "Hello\nits gamer time",
    "lookup": []
  },
  {
    "text": "its time for some fiesta",
    "lookup": []
  },
  {
    "text": "Huh",
    "lookup": []
  },
  {
    "text": "round 2, one personal already abandoned, and one person left\nfucking gay ass csgp\nwe surrendered on round 2\nenemy was a 5 stack\nof gold 3-gold 1",
    "lookup": []
  },
  {
    "text": "Where are the gamers\ntime to WAKE UP\nIts my day off",
    "lookup": []
  },
  {
    "text": "CS?",
    "lookup": []
  },
  {
    "text": "@everyone cs time?",
    "lookup": []
  },
  {
    "text": "Time?\nJizz?",
    "lookup": []
  },
  {
    "text": "rip\nim starting one\ngoodbye cruel world",
    "lookup": []
  },
  {
    "text": "Ring FIt\nSwitch game",
    "lookup": []
  },
  {
    "text": "Cs",
    "lookup": []
  },
  {
    "text": "No gamers?",
    "lookup": []
  },
  {
    "text": "CS when",
    "lookup": []
  },
  {
    "text": "Your hand ain't symmetrical tho\nCS missions?",
    "lookup": []
  },
  {
    "text": "I don't even need to tell you what time it is",
    "lookup": []
  },
  {
    "text": "H A  L L   O",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker @jerbear107\nYou already know when the 12.12 release will be\nDEC 12TH?!",
    "lookup": []
  },
  {
    "text": "yee cs missions",
    "lookup": []
  },
  {
    "text": "Its time",
    "lookup": []
  },
  {
    "text": "Not tonight",
    "lookup": []
  },
  {
    "text": "Some quick halo now",
    "lookup": []
  },
  {
    "text": "Are we gaming or what\nI need 4 wins",
    "lookup": []
  },
  {
    "text": "No gamers here",
    "lookup": []
  },
  {
    "text": "Rip\nBye bye rank",
    "lookup": []
  },
  {
    "text": "What rank are you now",
    "lookup": []
  },
  {
    "text": "Daum",
    "lookup": []
  },
  {
    "text": "That's not a rank that's a lifestyle",
    "lookup": []
  },
  {
    "text": "its time for some pre-nut halo",
    "lookup": []
  },
  {
    "text": "New star wars game",
    "lookup": []
  },
  {
    "text": "🤷",
    "lookup": []
  },
  {
    "text": "Lol Battlefield already 40% off on EA store\n48$ instead of 80$",
    "lookup": []
  },
  {
    "text": "Halo wont even launch anymore\nWhenever I click play it brings up the microsoft soft \"gaming services\"",
    "lookup": []
  },
  {
    "text": "As soon as my gamepass trial is done in Feb, I am uninstalling gamepass and reinstalling Halo in Steam, never going back\nMicrosofts software is so stupidly buggy",
    "lookup": []
  },
  {
    "text": "I had to do a bunch of shit to get it to work. Repair / Reset : Halo Infinite + Xbox app + Gaming Services. Then I had to reinstall Halo but it wasn't working, so I had to install some other random 1gb game, then try and reinstall halo again, and it worked\nand it didnt have to redownload halo, it kept all the files, but it had to reinstall it for 1 minute",
    "lookup": []
  },
  {
    "text": "I mean, I'll torrent it 😉",
    "lookup": []
  },
  {
    "text": "bruh im 3 hours in\nJust got to the base of the tower\nand then ZACH wanted to play multiplayer",
    "lookup": []
  },
  {
    "text": "Just played some campaign, gonna do work now, be on later for multiplayer",
    "lookup": []
  },
  {
    "text": "SLAYER, FFA, FIESTA, AND SWAT being added next week on the 14th\nNew playlists nice",
    "lookup": []
  },
  {
    "text": "Just coded in my vacation time, I am off dec 14- Jan 10 back to work\nIt's , gamer month",
    "lookup": []
  },
  {
    "text": "Lmfao\nBruh you're in the university system, everyone gets 2 weeks off over Xmas before classes start again",
    "lookup": []
  },
  {
    "text": "im on",
    "lookup": []
  },
  {
    "text": "hi",
    "lookup": []
  },
  {
    "text": "Rip",
    "lookup": []
  },
  {
    "text": "MERRY TARKOVMUS\nBruh",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker  Don't do chemical Part 4, it is bugged and tanks your trader rep into oblivion\nAlso, I just did a scav, and i was in for like 10 minutes looting all of factory, and then i extract and get \"authorization error\" and the game kicks me out to the launcher. wtf",
    "lookup": []
  },
  {
    "text": "Lol\nWhen I finally loaded back in, it let me transfer my stuff from my scav anyways",
    "lookup": []
  },
  {
    "text": "Yeah it's every 6 months and we are usually done by month 3 or 4.\nWe get to the point we have so much money we can't spend it all\nIt's fun at the beginning because everyone's poor and it's more risk/reward , and you have to decide if it's worth using good gear or saving it. You can kill someone who has like some bolts or something and you've just obliterated his whole day because he has to find it again. When a wipe happens everything matters again, when we are all chadded up with unlimited money nothing matters",
    "lookup": []
  },
  {
    "text": "I gotta halo tonoght\nNeed to win 2 oddball matches",
    "lookup": []
  },
  {
    "text": "I'm good on all those, need 1 more rye crouton",
    "lookup": []
  },
  {
    "text": "I HAVE NO HUD\nAND I CANT PRESS ESCAPE AND OPEN THE MENU",
    "lookup": []
  },
  {
    "text": "Don't threaten me with a good time\nTarkov\nSee ya have a bahn-thai @phantom_cooper",
    "lookup": []
  },
  {
    "text": "Slow downnnnn\nI got stash 2 and generator 2 stared\nHow can you help that bastard peacekeeper when therapist is in DESPRATE NEED of a gas analyzer to HELP PEOPLE, all peacekeeper cares about is his tiger tanks\nWait, peacekeeper = protim? 🤔\nThey both talk a lot about tiger tanks\nOk boomer",
    "lookup": []
  },
  {
    "text": "That's your choice, me and gf aren't going to have kids 🤷\nGame just isn't for you then\nSame with people on halo subreddit complaining they have family/job and can't grind battlepass, just isn't made for you\nBuddy she played animal Crossing till midnight last night",
    "lookup": []
  },
  {
    "text": "😂 the goal is to get good\nYa ok bud 😂😂😂😂😂😂",
    "lookup": []
  },
  {
    "text": ">battlefield - BUGS\n>halo - BUGS\nThose are fully released games\nI got into a halo match yesterday with NO HUB and couldnt see the objective or scoreboard or anything\nWe were playing with you the other day and we got disconnected like 4 times before we got in a big team game\nThat loading issue is 100% on your end",
    "lookup": []
  },
  {
    "text": "So Luke , Jerry, and I playing all the time isn't \"playing with the boys?\"\nYou're upset cause you can't pick this game up like cod and be good when we have said multiple times there are so many layers to understand this game and we have so much knowledge built up from like 4 years of tsrkov and multiple wipes so we know what we're doing. Jerry even told you to go watch pestily raid series.",
    "lookup": []
  },
  {
    "text": "Ya and when halo came out no one wanted to play CSGO anymore, and now tarkov wipes and no one wants to play halo anymore, it's what happens\nHere we go 😂\nZach, the game is not built for you\nAre you mad some Helly Kitty barbie game isnt fun for you?\nThis game is meant for serious 'hardcore' features and strategic gameplay\nIf you don't want all the economic bullshit, play pubg or battlefield hazard zone or hunt showdown, or squad or DayZ",
    "lookup": []
  },
  {
    "text": "HEYYYYYYYYYYYYYYYYYYY thats pretty good",
    "lookup": []
  },
  {
    "text": "Getting off for the night\nKilled a guy on interchange with 2 E-drills lmfao, also got level 20, so i was able to start workbench 2 and illumination 2.\nFound this key\ndebating selling it\nMaybe this wipe I will start going shoreline and learn it a bit with all the keys im getting\nFirst i need a docs case",
    "lookup": []
  },
  {
    "text": "When's time",
    "lookup": []
  },
  {
    "text": "This is insaine\nwe need to start shooter born in heaven lol",
    "lookup": []
  },
  {
    "text": "Flea market, you get 2 sell slots till 30 flea rep, which takes 150 million worth of goods sold.\nlmfao rip",
    "lookup": []
  },
  {
    "text": "Scaving on interchange, wait 12 minutes to get in game, spawn with 43 minutes left, right down the hall from tech light 2nd floor, i run over to it, hear something, say friendly just a scav friendly, die, under 1 min.",
    "lookup": []
  },
  {
    "text": "cs",
    "lookup": []
  },
  {
    "text": "first game back boys",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker",
    "lookup": []
  },
  {
    "text": "Did someone say, database ? 🤩",
    "lookup": []
  },
  {
    "text": "not yet\nbut maybe in future\nI would say more of a batch job architect right now 😎\nI think it is if the whole theater building is 1000 peopole\nso if your theater is small with like 5 screens you might be ok\nbut if its a big cineplex with like 12-15 screens they will reduce numbers",
    "lookup": []
  },
  {
    "text": "Dead Gluhar and some minons with a dead player. And Gluhar defended the tech room so i got a AESA no one grabbed, extracted with 20 seconds left",
    "lookup": []
  },
  {
    "text": "Rip\nEverywhere 50% now,",
    "lookup": []
  },
  {
    "text": "No food after midnight has a new website\nthis is going to be the most up to date version",
    "lookup": []
  },
  {
    "text": "I thought CS was last night",
    "lookup": []
  },
  {
    "text": "gamer time",
    "lookup": []
  },
  {
    "text": "Tarkov down down",
    "lookup": []
  },
  {
    "text": "Still down, did cooking / dishes / shower and stil ldown",
    "lookup": []
  },
  {
    "text": "Is this dog whistling?\nIs this POLITICS IN MY VIDEO GAMES",
    "lookup": []
  },
  {
    "text": "Helllo?",
    "lookup": []
  },
  {
    "text": "Uh, tell me how i did this lmfaoooooooooooooooooooooooooooo\nIM UPSIDE DOWN",
    "lookup": []
  },
  {
    "text": "Im shitposting in general\nTarkov time\nJust got my 2nd vax\nSo we better game before the demons take me",
    "lookup": []
  },
  {
    "text": "My normal reserve scav helicopter area run, 16 minutes\nBitcoin, scope, factory key, paracord, hose, diary, medtools, 2 hot rods, gunpowder, quest weapon parts",
    "lookup": []
  },
  {
    "text": "Gas Analyser from tech drop down room\nthere was another playre scav coming up the stairs and i beat him to the room\nand im like what are you doing and hes like looking for gas analysers, ill wait and hide in this room till youre done\nLMFAO\ni got it and was like ight theres some stuff in here for you see you and jumped out the window and extracted",
    "lookup": []
  },
  {
    "text": "Looks like a gun to me\nAll top tier parts\nBut didn't buy a new lower? LoL",
    "lookup": []
  },
  {
    "text": "Hygienist is sick, appointment moved to Feb, where does that lead me, back to tarkov\noh jeez",
    "lookup": []
  },
  {
    "text": "o shittttttttttttt",
    "lookup": []
  },
  {
    "text": "got all my gpus\nnut",
    "lookup": []
  },
  {
    "text": "Trying to do shooter born in heaven on shoreline, this some bullshit lol",
    "lookup": []
  },
  {
    "text": "intersting\ndo they also spawn with better loot?\nFreelook with ADSing a scope got removed\nalso, didnt know this, there are two rangefinders. one you can mount on a rail, and the other is hand held\ni got a lot of quest progress today\nneed 1 more ragman quest and i can get stash 3\ngot workshop 3 and generator 3\nlvl30",
    "lookup": []
  },
  {
    "text": "Logging out see ya",
    "lookup": []
  },
  {
    "text": "Huh\nSee you sunday night",
    "lookup": []
  },
  {
    "text": "Huhhhh",
    "lookup": []
  },
  {
    "text": "Boss?\nWith ap\nThose are the first tv rigs I've seen\nI want to level up Ragman and start buying the rig from him\nWater bottle trade",
    "lookup": []
  },
  {
    "text": "What changed with the ump\nUmp sucked last wipe",
    "lookup": []
  },
  {
    "text": "Bruh what is this, just valorant?\nNo shit posting in general",
    "lookup": []
  },
  {
    "text": "I'm on my laptop\nTarkov hideout management simulator",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker\nthis is outrageious\nits unfair\n8 x >lvl15 bear and usec dogtags for the rsass\nor get peacekeeper to lvl 4\nor get marked room key and get one that way by luck",
    "lookup": []
  },
  {
    "text": "No shit posting in general\nOnly protim can do that",
    "lookup": []
  },
  {
    "text": "Nice\n7n40 is new ammo right?\nI think it's good",
    "lookup": []
  },
  {
    "text": "New Christmas gift is out\nA ammo box, keycard holder, scar, ammo, mags, Santa beard",
    "lookup": []
  },
  {
    "text": "What's that PC 2?\nCan it play tarkov?",
    "lookup": []
  },
  {
    "text": "Yeah I do\nHow do you have one on FACTORY\nBookshelf?",
    "lookup": []
  },
  {
    "text": "Huh?",
    "lookup": []
  },
  {
    "text": "Win 11 probably can't play tarkov LMFAO",
    "lookup": []
  },
  {
    "text": "Guys I'm so bored help",
    "lookup": []
  },
  {
    "text": "For 2022 I'm taking my vacation in the summer\nFuck Christmas vacation\nWish it was gamer time",
    "lookup": []
  },
  {
    "text": "Merry tarkovmas\nI'm not gaming cause I'm at the future in-laws for christmas\nBut we literally ain't doing nothing\nI told Mel why didn't we just come for 2 days Instead of 4",
    "lookup": []
  },
  {
    "text": "Huh\nWat\nJust did a scav, took 7 min to load, I got a big backpack and rig, I run around reserve for 8 min looting drawers and stuff, and I'm looting a weapon crate inside a tent and I get headshot by a player scav from God knows where\nNever saw him never heard him\nThis \"play tarkov on low settings on my laptop and make some money over Christmas \" has worked 0/2 times so far lol",
    "lookup": []
  },
  {
    "text": "Never mind, luck still shines on me tonight, gpu in a computer in black bishop tech building",
    "lookup": []
  },
  {
    "text": "Cause my car's shit lmfao\nMaybe next time\nLast year I stayed home completely and only she went",
    "lookup": []
  },
  {
    "text": "Tarkov update today\n4 hours starting 3am\nLol\nI just did three scavs, only died on the first\nThought you were scaving 24/7 to make money\nHad a prapor daily quest today to hand in 5 FIR flashbangs, grenade case came in clutch cause I had them lol",
    "lookup": []
  },
  {
    "text": "I need to get from lvl 30 to 32 to get stash 3 upgrade , and get a few therapist quests done to get med 3 then Intel 2 then Bitcoin 1\nStuck on hideout for now",
    "lookup": []
  },
  {
    "text": "Ya summit sucks\nWhat he do\nTakes a bit to get use to it, first raid def was rough, I agree still doesn't feel right, I can't move out of cover and aim at a sniper scav and shoot him before he fires at me",
    "lookup": []
  },
  {
    "text": "Maybe first movement (pressing D) no inertia then stop and second key (pressing A) there's inertia so it takes time to move back to cover\nY'all need Jesus",
    "lookup": []
  },
  {
    "text": "NICE\nTime to play csgo",
    "lookup": []
  },
  {
    "text": "PREY and it's dlc mooncrash are free to keep on epic store today only\nGet it\nAmazing game\n@foolishwizrd @.lukedankwalker @jerbear107 @tad19",
    "lookup": []
  },
  {
    "text": "Gamer night tomorrow boys\nI'm still off for 2 weeks",
    "lookup": []
  },
  {
    "text": "Ya but now it's free free",
    "lookup": []
  },
  {
    "text": "Already got 1000/1000 on Xbox 😎",
    "lookup": []
  },
  {
    "text": "100.4m headshot on shoreline\nget rektd",
    "lookup": []
  },
  {
    "text": "Wtf\nWTF\nWoods 3 kills???\nYou got your quest tho?\nDaum you really did steal their Christmas guns wtf\nHow\nUse them, strip the parts down and use the base gun with m80, it's a better rfb",
    "lookup": []
  },
  {
    "text": "Gaming PC is using ethernet now\nIt was on WIFI cause my long ethernet cable was being used for my living room PC\nLiving room PC i just rebuilt and now is on WIFI\nWell I dont have gigabit lol I have like techsavy 300mbs\nfor me and gf and she only uses phone and netflix\nWhy would I pay for it if i wouldnt use it\nim in a house not an apartment building",
    "lookup": []
  },
  {
    "text": "Nice\nI'm in vr\nYou up?",
    "lookup": []
  },
  {
    "text": "AIRDROPS ON TARKOV",
    "lookup": []
  },
  {
    "text": "it says two minutes, but it was more like 15 seconds. i spawned at unknown key body, ran on top of the bus stop and looked across the river, saw a guy, and shot him",
    "lookup": []
  },
  {
    "text": "Found all the insurance fraud in the reserve bunker. Vector with AP ammo, ump, svd, gzhel\nThe vector even has the red advanced tube lmfao",
    "lookup": []
  },
  {
    "text": "2ND GPU today on scav reserve",
    "lookup": []
  },
  {
    "text": "\"Not enough space in stash\" jesusssssssssssssss",
    "lookup": []
  },
  {
    "text": "Cool\nI killed Santa 2x in about 3 hpurs\nSo thats how things are going lol\nSanta's a bitch",
    "lookup": []
  },
  {
    "text": "Nice",
    "lookup": []
  },
  {
    "text": "Getting some food then gamer time",
    "lookup": []
  },
  {
    "text": "Soon\nBeen slerping",
    "lookup": []
  },
  {
    "text": "Military Tube!!!!!!",
    "lookup": []
  },
  {
    "text": "Sat on interchange by the scav extract, and had 4-5 player scavs come over and i killed them all. one of them said \"common man\" as he died lol. They literally brought me all the loot plus the good stuff they spawned with like a labs card and a tetriz lmfao",
    "lookup": []
  },
  {
    "text": "Niceeee",
    "lookup": []
  },
  {
    "text": "You bought a house? I read that as you moved into a new place",
    "lookup": []
  },
  {
    "text": "Found lukes Reddit account",
    "lookup": []
  },
  {
    "text": "@joeliepolieolie69  \"PLAYING ESCAPE FROM TARKOV\" WHAT\nAnother convert\n🎉",
    "lookup": []
  },
  {
    "text": "🤣",
    "lookup": []
  },
  {
    "text": "my first sucessful player scav rouge looting",
    "lookup": []
  },
  {
    "text": "Nice\nDo reserve\nWe can do Woods/shoreline together\nI got back my slick + mdr + helmet\nNo idea what happe ed\nIt's the raid I lagged and the guy keddered me",
    "lookup": []
  },
  {
    "text": "Nice\nI remember you saying you'll never use SVD again",
    "lookup": []
  },
  {
    "text": "Hello\nI'm in the tarkovverse",
    "lookup": []
  },
  {
    "text": "Yeah I am, deep in the tarkovverse",
    "lookup": []
  },
  {
    "text": "@jerbear107 I'm back",
    "lookup": []
  },
  {
    "text": "Killa is a MENANCE\nIn 10 HOURS we only saw him ONCE\nAND HE LAZER'D US\nIN THE GARAGE\nPeople are complaining about Reserve raider spawn chance, and I haven't seen too many people complain about Killa, but i have a theory they will increase the spawns soon, its been a month since wipe\nThere is no way it is 25% for Killa. Its more like 5%\nI'm gonna take a Killa hiatius and finish shooter born in heaven, insomnia, and do the guide",
    "lookup": []
  },
  {
    "text": "It's random distribution right, so on average he should be 25% of raids he should be there. So sometimes we won't be him for 16 raids, other times we will see him back to back. But that's not happening.",
    "lookup": []
  },
  {
    "text": "There ain't any",
    "lookup": []
  },
  {
    "text": "Amazing weekly quest, 42k xp for fuzes and splits",
    "lookup": []
  },
  {
    "text": "Because he's disabled\nWait, that's not tarkov\nHold up\nThat's illegal\nWhat is this, just counterstrike?",
    "lookup": []
  },
  {
    "text": "Chillin\nTaking a Killa hiatus\nWatched book of boba Fett 4 episodes and working on hawkeye",
    "lookup": []
  },
  {
    "text": "Also I got a week and a half left on Gamepass, going to play a few of those games before I loose it,",
    "lookup": []
  },
  {
    "text": "?",
    "lookup": []
  },
  {
    "text": "How\nThey all already dead?",
    "lookup": []
  },
  {
    "text": "Cool, now let's do it again\nCall me when you find Killa\n🪖",
    "lookup": []
  },
  {
    "text": "daum",
    "lookup": []
  },
  {
    "text": "My uncle works for nintendo\nGame isn't even out till Friday",
    "lookup": []
  },
  {
    "text": "Amaranth 🌈🤣🌈",
    "lookup": []
  },
  {
    "text": "2 tank batteries LMFAO",
    "lookup": []
  },
  {
    "text": "CS at 9 exact\nIf there's dust 2 then where's dust 3?",
    "lookup": []
  },
  {
    "text": "Huh?????\nWatching a movie , gamer time later for sure",
    "lookup": []
  },
  {
    "text": "Rip\nI thought we all computer experts here",
    "lookup": []
  },
  {
    "text": "Gamer time soon",
    "lookup": []
  },
  {
    "text": "cs soon\njust making some dumplings",
    "lookup": []
  },
  {
    "text": "Im ready for gaming",
    "lookup": []
  },
  {
    "text": "huh?",
    "lookup": []
  },
  {
    "text": "im here brother",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker",
    "lookup": []
  },
  {
    "text": "I haven't been trying",
    "lookup": []
  },
  {
    "text": "Working?\nBut this is /r/antiwork",
    "lookup": []
  },
  {
    "text": "Are we gaming tonight\ngf is gone for the weekend\nHitting up zehrs for some party food",
    "lookup": []
  },
  {
    "text": "lol",
    "lookup": []
  },
  {
    "text": "FEW HOURS\nbruh instant noodles in the microwave\nput ckin in oven for 40 min and we can do a match",
    "lookup": []
  },
  {
    "text": "Ya\n5 man CS let's go",
    "lookup": []
  },
  {
    "text": "I guess later",
    "lookup": []
  },
  {
    "text": "rip",
    "lookup": []
  },
  {
    "text": "Dnd tonight",
    "lookup": []
  },
  {
    "text": "Sold my bravo case\nI got 44$ in steam wallet now",
    "lookup": []
  },
  {
    "text": "It's called gambling bro\nYou should know about that\nIt coulda gone to 55-60\nbut the new operation caused it to go down",
    "lookup": []
  },
  {
    "text": "Halo infinite is crashing everytime I load up the campaign, I walk for 2 seconds and it crashes, so I uninstalled it lol\n2nd time i have had issues launching / crashing. Microsoft launcher sucks\nStarting playing no man's sky instead, it's alright so far\nGuess I'm not beating the campaign",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker @jerbear107 There is no way this guy doesn't have radar. How the heck does he know to slow peak a corner and see a milimeter of his helmet sticking out over a box. Or in the dark basement I couldn't even see him on the video where Killa was and he shot him.\nAt 25% spawn rate, this guy must have done 400 raids to look for Killa at minimum",
    "lookup": []
  },
  {
    "text": "Tarkov is taking up 10.5/11gb of my gpu VRAM wtf\nthats probably whats crashing",
    "lookup": []
  },
  {
    "text": "You heard me",
    "lookup": []
  },
  {
    "text": "Wheres the gamers",
    "lookup": []
  },
  {
    "text": "Just woke up",
    "lookup": []
  },
  {
    "text": "Loggin",
    "lookup": []
  },
  {
    "text": "First ash12 factory raid\nworked",
    "lookup": []
  },
  {
    "text": "🤷",
    "lookup": []
  },
  {
    "text": "10\nWatching tv",
    "lookup": []
  },
  {
    "text": "Yee\n@.lukedankwalker @joeliepolieolie69 @tad19 @foolishwizrd 10pm cs",
    "lookup": []
  },
  {
    "text": "Ye",
    "lookup": []
  },
  {
    "text": "Lol",
    "lookup": []
  },
  {
    "text": "Just having dinner\nWait a bit\nJust like 10 min",
    "lookup": []
  },
  {
    "text": "Yo put it in the only fans chat",
    "lookup": []
  },
  {
    "text": "Not yet",
    "lookup": []
  },
  {
    "text": "Let's see some ID",
    "lookup": []
  },
  {
    "text": "All your messages are hidden amongst the only fans",
    "lookup": []
  },
  {
    "text": "You said you were done at like 7pm or something\nNah its deep learning tarkov time\nmaybe in a bit",
    "lookup": []
  },
  {
    "text": "wot",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker  @jerbear107\n@.lukedankwalker  @jerbear107\n@.lukedankwalker  @jerbear107\n@.lukedankwalker  @jerbear107\n@.lukedankwalker  @jerbear107\n@.lukedankwalker  @jerbear107\n@.lukedankwalker  @jerbear107\n@.lukedankwalker  @jerbear107\nI DID IT\nITS FUCKING OVER\nITS. FUCKING. OVER.",
    "lookup": []
  },
  {
    "text": "Nice. Ya I've gotten 3 military tubes in past 3 days",
    "lookup": []
  },
  {
    "text": "I swear mom I only bought books from chapters\nGamer time",
    "lookup": []
  },
  {
    "text": "Killa got revenge\nI THOUGHT I HAD HIM\nlol",
    "lookup": []
  },
  {
    "text": "Gamers unite",
    "lookup": []
  },
  {
    "text": "Gangs all online now 😉\n@jerbear107 Streaming Starwars at 3am???",
    "lookup": []
  },
  {
    "text": "Kill again",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker @jery\nIts literally that easy man\nALT + LEAN with the Ash twelve 2 shot to the head, just like the guide video said XD\nHe murdered 2 people so I knew his general location, and I saw his head peaking over a barrier and I shot him 2x",
    "lookup": []
  },
  {
    "text": "Also nailed it\nKilled 28 people \"in the mall\" in 27 raids",
    "lookup": []
  },
  {
    "text": "Wheres the gamers",
    "lookup": []
  },
  {
    "text": "First Woods raid, got Shturman and his key, and one guard. the other guard ran for cover and I left him alone. Got out\nOn to Reserve\nOh wait, you have to kill Tagila before Gluhar now",
    "lookup": []
  },
  {
    "text": "I'm on bruh\nYa if the gangs here",
    "lookup": []
  },
  {
    "text": "Itss wed\nLuke is doing DND with cookie",
    "lookup": []
  },
  {
    "text": "Meep Meep\nMaybe the reson I can't find Killa/Tagila\nIs because IM the killa\nI was teh Killa all along",
    "lookup": []
  },
  {
    "text": "Ping",
    "lookup": []
  },
  {
    "text": "Factory massacure\n+1 labs card from a player scav",
    "lookup": []
  },
  {
    "text": "@joeliepolieolie69 @tad19",
    "lookup": []
  },
  {
    "text": "@tad19 last call for cs?",
    "lookup": []
  },
  {
    "text": "Killa has force push lmfao",
    "lookup": []
  },
  {
    "text": "Fuck em\nmy dad cant get across the sarnia bridge\nand the 402 is shutdown because farmers are parking their farm equipment on the 402 and leaving it there\nHe had to take the back highways all the way to hamilton to drop people off\nThese truckers aren;t protesting, they are fucking with the economy, and USA and Russian agents are interfeering in it\nPeople had to cancel their flights back from whereever to Detroit, and get them rescheduled on a Toronto bound flight, just to get home",
    "lookup": []
  },
  {
    "text": "because my dad cant pick them up in detroit cause sarnia bridge and ambasator bridge are fucked\nMy dad said one couple paid 1000 to rebook a flight to toronto last minute\ncause they are already out of provence\nno\nfood is spoiling in trucks\ngas is 1.60\ncar plants are shutting down in windsor because they cant get their parts from detroit\nand clearly, it is impacting my dads \"economy\"\nhe uses the infrastructure of the birdges and 400's to drive",
    "lookup": []
  },
  {
    "text": "We paid for them with taxes and the truckers are blocking access\nNo one is forcing them to get the vaccine, either get it, quit your job, or switch to domestic trucking only",
    "lookup": []
  },
  {
    "text": "Gamers unite on gamer night",
    "lookup": []
  },
  {
    "text": "thanks",
    "lookup": []
  },
  {
    "text": "Gamers\nGamer time",
    "lookup": []
  },
  {
    "text": "oh shit we partying?",
    "lookup": []
  },
  {
    "text": "Bruh\nI was trying to CS yesterday\n@everyone CS tonight",
    "lookup": []
  },
  {
    "text": "idk no ones on yet",
    "lookup": []
  },
  {
    "text": "bruh\ny",
    "lookup": []
  },
  {
    "text": "This \"Welcome2TarkovTV\" killed me the other day. I don't remember how but it was sussy. He sat in D2 with a voice changer saying \"hello help me im lost\" for almost 20 minutes while i was camping D2 as well. He finally got impatitent and walked into my room and i blasted him.",
    "lookup": []
  },
  {
    "text": "bullshit",
    "lookup": []
  },
  {
    "text": "Wherres the gamers",
    "lookup": []
  },
  {
    "text": "Ew\nYa but no one likes vertigo\nA better one would be workout cause that's my favourite map\n🤩\nWhere's the gamers",
    "lookup": []
  },
  {
    "text": "No one's here for cs\nRip",
    "lookup": []
  },
  {
    "text": "Don't know who that is",
    "lookup": []
  },
  {
    "text": "Lol\nCS tonight?",
    "lookup": []
  },
  {
    "text": "yo",
    "lookup": []
  },
  {
    "text": "Eliminate 50 scavs in the next week and I get 136k XP lmfao\nThats half a level\nThats like a whole raids worth of xp per scav kill lol",
    "lookup": []
  },
  {
    "text": "Nah\nGamer time is like 10pm",
    "lookup": []
  },
  {
    "text": "CS soon?",
    "lookup": []
  },
  {
    "text": "Ya\nI just woke up\nDay off , and I was up till 8am lol\nNeed to do some stuff then gamer time all night",
    "lookup": []
  },
  {
    "text": "He ain't on",
    "lookup": []
  },
  {
    "text": "Hello\nFresh\nI'm coming\nBootin\nJust finished this with gf\nShelf",
    "lookup": []
  },
  {
    "text": "this.shelf\njust finished THIS with gf\nTHIS.SHELF",
    "lookup": []
  },
  {
    "text": "Sir this is a wendys",
    "lookup": []
  },
  {
    "text": "@jerbear107 You still asleep in your chair?",
    "lookup": []
  },
  {
    "text": "Jesus",
    "lookup": []
  },
  {
    "text": "@jerbear107 time again?",
    "lookup": []
  },
  {
    "text": "Thats my 3rd evasion armband lol",
    "lookup": []
  },
  {
    "text": "DND at 9\nScav loot on lighthouse\nBuilding 1,2,3, train station\nSpawned with keycard\n820k if i straight vendor it",
    "lookup": []
  },
  {
    "text": "730k if no keycard",
    "lookup": []
  },
  {
    "text": "Switching to dnd group, be back here at 12",
    "lookup": []
  },
  {
    "text": "nice\nwe back here now\nDVL and T-5000 is tied basically\nwhichever you can get cheaper\nDVL you have to put range finder on top\nT-5000 you can put it on the side",
    "lookup": []
  },
  {
    "text": "M700 is worst then both of them",
    "lookup": []
  },
  {
    "text": "Nice\nAnd a stim you probably need for samples",
    "lookup": []
  },
  {
    "text": "Yo\nI just woke up\nI'm down tho\nI need 5-10 min",
    "lookup": []
  },
  {
    "text": "@foolishwizrd  tiume?",
    "lookup": []
  },
  {
    "text": "MOM I WAS HERE",
    "lookup": []
  },
  {
    "text": "Me and Jerry vs a 5 man up on pride rock on lighthouse",
    "lookup": []
  },
  {
    "text": "Later 4 me\ngf ain't even home yet\nProbs 9:30 - 10 for me",
    "lookup": []
  },
  {
    "text": "Can we make a schedule for cs similar to dnd?\ngf is starting to get annoyed I stay up late every day\nIf I know which days are for cs/gaming then I can tell her which days are off gaming",
    "lookup": []
  },
  {
    "text": "Yup\n'Gamer girl gets DESTROYED by 5 men on shoreline'",
    "lookup": []
  },
  {
    "text": "'You won't believe what happens next (Gone Wrong) (Gone SEXUAL) (18+)'\nOk but seriously like let's make a schedule, because it's not every day gamer time for tad and foolish, so when are their schedules for gaming",
    "lookup": []
  },
  {
    "text": "But we always have Sunday night off",
    "lookup": []
  },
  {
    "text": "No but I want to be able to tell her when we're gonna be doing cs",
    "lookup": []
  },
  {
    "text": "Yee",
    "lookup": []
  },
  {
    "text": "When have I ever lost on purpose? I'm a winner",
    "lookup": []
  },
  {
    "text": "?\nYou're selling your deagle for eldenring?",
    "lookup": []
  },
  {
    "text": "Rip\nY\nYour deag",
    "lookup": []
  },
  {
    "text": "How long have you had it?\nWhat did you get it for and how much it sell for\nI've never tried a souls game\nDo you need to know what's going on with the others to play this one?",
    "lookup": []
  },
  {
    "text": "Then why do people already know what build they want to do etc",
    "lookup": []
  },
  {
    "text": "Apparently tarkov usd conversion follows real life conversion rates with roubles. USD is now 139 in tarkov instead of around 150 lmfao\nPuttin MADE MY USD PURCHASES 10% MORE EXPENSIVE WTF LOL",
    "lookup": []
  },
  {
    "text": "pre-nut\n@phantom_cooper @jerbear107\ngangs all here",
    "lookup": []
  },
  {
    "text": "I'm at gf's mom's for the weekend\nCS is tuesdays\nRip u\nSo many nights I'm sitting on for cs and no one joins up",
    "lookup": []
  },
  {
    "text": "Nah",
    "lookup": []
  },
  {
    "text": "At gf's mom's\nCS Tuesday",
    "lookup": []
  },
  {
    "text": "Only new map should be WORKOUT",
    "lookup": []
  },
  {
    "text": "Actually?",
    "lookup": []
  },
  {
    "text": "Huh",
    "lookup": []
  },
  {
    "text": "Im back boys",
    "lookup": []
  },
  {
    "text": "gamer time all night",
    "lookup": []
  },
  {
    "text": "Yes\n👍",
    "lookup": []
  },
  {
    "text": "Yup",
    "lookup": []
  },
  {
    "text": "Just send the @",
    "lookup": []
  },
  {
    "text": "@tad19 @.lukedankwalker",
    "lookup": []
  },
  {
    "text": "DOUBLE RANKUP\nGold 1 and Silver Master",
    "lookup": []
  },
  {
    "text": "Just going to bed lol\nMight game in the morning before work",
    "lookup": []
  },
  {
    "text": "This is the funniest bug I have seen lol",
    "lookup": []
  },
  {
    "text": "8:30\nNah\n@foolishwizrd 8:30\nGotta watch Snowpiercer with gf first\nTrain tuesdays\nThen csgo train",
    "lookup": []
  },
  {
    "text": "830",
    "lookup": []
  },
  {
    "text": "Yup",
    "lookup": []
  },
  {
    "text": "you can",
    "lookup": []
  },
  {
    "text": "ya",
    "lookup": []
  },
  {
    "text": "Daum what\nMaybe you should rest? Lmfao",
    "lookup": []
  },
  {
    "text": "Nah not gaming today\nHaven't even eaten yet",
    "lookup": []
  },
  {
    "text": "Can't yet",
    "lookup": []
  },
  {
    "text": "Huh",
    "lookup": []
  },
  {
    "text": "gamer night\nok\ngf is going out for dinner with 'the girls' ya know so gotta drive her at 6:30 then pick her up idk 8:30",
    "lookup": []
  },
  {
    "text": "im good now till about 8:30",
    "lookup": []
  },
  {
    "text": "?",
    "lookup": []
  },
  {
    "text": "when ciesta",
    "lookup": []
  },
  {
    "text": "Rip sounds like a no",
    "lookup": []
  },
  {
    "text": "I'm heading to bed",
    "lookup": []
  },
  {
    "text": "Well",
    "lookup": []
  },
  {
    "text": "Wheres the gamers",
    "lookup": []
  },
  {
    "text": "wheres the gamers\n@foolishwizrd @.lukedankwalker @joeliepolieolie69",
    "lookup": []
  },
  {
    "text": "CS before DND? @foolishwizrd",
    "lookup": []
  },
  {
    "text": "Yo\n\"tHeY cAn jUsT pAy tHeM iN EuRoS\"\nBruh I was rite\nNo paypal\nLol\nI'm about to",
    "lookup": []
  },
  {
    "text": "Yeah it says we still don't know if it's happening or not\nHe posted an update that Russia said it's not going to do that",
    "lookup": []
  },
  {
    "text": "Lol",
    "lookup": []
  },
  {
    "text": "Can we do 8:40?\nMight be ready at 8:40\n8:30*\nJust finishing making dinner so maybe 8:40",
    "lookup": []
  },
  {
    "text": "Ok 840",
    "lookup": []
  },
  {
    "text": "Comin\n?",
    "lookup": []
  },
  {
    "text": "HELLO",
    "lookup": []
  },
  {
    "text": "Gamer time at 9",
    "lookup": []
  },
  {
    "text": "Sure\nI'll get on\n@foolishwizrd @.lukedankwalker @joeliepolieolie69",
    "lookup": []
  },
  {
    "text": "im on...",
    "lookup": []
  },
  {
    "text": "I thought the new schedule was tuesdays cs\nwtf",
    "lookup": []
  },
  {
    "text": "???",
    "lookup": []
  },
  {
    "text": "hello",
    "lookup": []
  },
  {
    "text": "WHAT A SCAMMMMMMMM\nphysical bitcoin for 80k robules reward lol\nStill did it though lol",
    "lookup": []
  },
  {
    "text": "Rip bozo?\nTad never even got on\nGhosted me after 1 minute",
    "lookup": []
  },
  {
    "text": "I'm still waiting for chicken in the oven",
    "lookup": []
  },
  {
    "text": "I gotta eat dinner\nI'm down later\nIt's wedensday Luke is busy\nFoolish is on modern warfare rn",
    "lookup": []
  },
  {
    "text": "Sup\nOuch",
    "lookup": []
  },
  {
    "text": "Yo\nSorry I had a on-call work thing\nComing",
    "lookup": []
  },
  {
    "text": "Darth v1",
    "lookup": []
  },
  {
    "text": "Echo Darth",
    "lookup": []
  },
  {
    "text": "Not yet",
    "lookup": []
  },
  {
    "text": "Gamers\nRiseup",
    "lookup": []
  },
  {
    "text": "Yoyo\nComing",
    "lookup": []
  },
  {
    "text": "bruh",
    "lookup": []
  },
  {
    "text": "@jerbear107 @.lukedankwalker\nnew weekly\nfuck my life",
    "lookup": []
  },
  {
    "text": "Nice\nI did 12 factory runs last night in 3 hours. Was on a 10 survive streak and then died only 1 time to a ks23 to the legs. I killed at least 2 people per every raid\nNot sure yet if I'm gonna attempt those 24 labs raids\nGonna have to buy violet and yellow, try to buy black\nI'm at 68 million\n217 million in stash",
    "lookup": []
  },
  {
    "text": "Rip",
    "lookup": []
  },
  {
    "text": "Sorry I've been asleep since 4pm",
    "lookup": []
  },
  {
    "text": "Yee",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker\nwhos on\ntad youre not even on\n@theswagengine s on, @foolishwizrds on, im on",
    "lookup": []
  },
  {
    "text": "hello\n@.lukedankwalker",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker @joeliepolieolie69  @theswagengine",
    "lookup": []
  },
  {
    "text": "What",
    "lookup": []
  },
  {
    "text": "Nice what route did you take",
    "lookup": []
  },
  {
    "text": "Nah yesterday we said no CS today\n☝️\nChris did\nChris brings the team together lol",
    "lookup": []
  },
  {
    "text": "Was gonna play Zelda but gf is bailing on me lol\nSo maybe 1 cs\nBooting\n@everyone I'm booting",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker @phantom_cooper",
    "lookup": []
  },
  {
    "text": "@tad19 we gonna do one if you want in",
    "lookup": []
  },
  {
    "text": "Huh",
    "lookup": []
  },
  {
    "text": "yo\nim booting\nafter what @foolishwizrd\ni dont think they started yet",
    "lookup": []
  },
  {
    "text": "Bootin\n@foolishwizrd @joeliepolieolie69 @theswagengine",
    "lookup": []
  },
  {
    "text": "@foolishwizrd get in here we waiting for you",
    "lookup": []
  },
  {
    "text": "I thought you said DND was cancled cause st pats day",
    "lookup": []
  },
  {
    "text": "Soon\nWaiting for like right\nLuke",
    "lookup": []
  },
  {
    "text": "If you had the beta from the closed beta, you still have the beta now\nIm downloading now\nLuke and Chris should be able to download too i think they got keys",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker @jerbear107 new tarkov event. The riders are trying to capture tagilla alive, so he left factory and is staying with his brother Killa on Interchange. And raiders now spawn on factory but not sure when / how often. It seems like they spawn in the middle of the raid. They looking for tagilla.\nLet's go boys factory weekend raider farming 😎",
    "lookup": []
  },
  {
    "text": "Bruh\nIs this a shitpost?",
    "lookup": []
  },
  {
    "text": "Your shitpost got copywrite striked",
    "lookup": []
  },
  {
    "text": "Huh",
    "lookup": []
  },
  {
    "text": "Sup\n@.lukedankwalker @foolishwizrd",
    "lookup": []
  },
  {
    "text": "Kkkk\nBooting",
    "lookup": []
  },
  {
    "text": "Booting\non\ntad started without us",
    "lookup": []
  },
  {
    "text": "Smh 9:31 is past 9:30 u right\nTad started\nWe can do one or wait\n3 man\nKk",
    "lookup": []
  },
  {
    "text": "@tad19  youre muted and deffended",
    "lookup": []
  },
  {
    "text": "Killed a player scav that spawned in with a tank battery on factory lmfaoooooo\nHe was struggling\n@tad19 youre muted",
    "lookup": []
  },
  {
    "text": "@jerbear107 join up?",
    "lookup": []
  },
  {
    "text": "Sounds like you overpaid for a broken laptop lmfao",
    "lookup": []
  },
  {
    "text": "CS lster",
    "lookup": []
  },
  {
    "text": "I'll play in a bit",
    "lookup": []
  },
  {
    "text": "Ok 10:30\n10:30 or 11 which is it",
    "lookup": []
  },
  {
    "text": "im booted, playing zelda till we're ready",
    "lookup": []
  },
  {
    "text": "@phantom_cooper told you lol 50 hits\nHow did someone even find that",
    "lookup": []
  },
  {
    "text": "@joeliepolieolie69  cs with the boys?",
    "lookup": []
  },
  {
    "text": "Bruh it ain't even 5pm yet\nShe ugly",
    "lookup": []
  },
  {
    "text": "I'm working\nAlso yesterday Luke said we're retiring again",
    "lookup": []
  },
  {
    "text": "Yo\nComin\nJust saw this\nIght\n???",
    "lookup": []
  },
  {
    "text": "Bruh",
    "lookup": []
  },
  {
    "text": "I will do 1 if everyone's down\n@.lukedankwalker  @foolishwizrd we trying to do 1",
    "lookup": []
  },
  {
    "text": "Ok\nYe\nBootin\n@foolishwizrd gangs al lhere",
    "lookup": []
  },
  {
    "text": "That's a no from me dog maybe later",
    "lookup": []
  },
  {
    "text": "I can do one maybe 11 or 1130",
    "lookup": []
  },
  {
    "text": "Ya whenever\nJust @ me",
    "lookup": []
  },
  {
    "text": "Ok\nWake up bozos it's rise and grind time @foolishwizrd",
    "lookup": []
  },
  {
    "text": "We doing on?\nOr 9?\n@everyone 8 or 9 CS?",
    "lookup": []
  },
  {
    "text": "Kk",
    "lookup": []
  },
  {
    "text": "Ok",
    "lookup": []
  },
  {
    "text": "Yo\nOk",
    "lookup": []
  },
  {
    "text": "Kk\nKkk",
    "lookup": []
  },
  {
    "text": "I'm out rn\nPlaying pool with gf's work friends\nLater tho",
    "lookup": []
  },
  {
    "text": "I also gotta queue something up for work so I gotta do that while we queue CS or something",
    "lookup": []
  },
  {
    "text": "Can't yet",
    "lookup": []
  },
  {
    "text": "I'm home\n@everyone what's the status, should I boot?",
    "lookup": []
  },
  {
    "text": "Well are they in a game or not or are they doing another one , if so tell me to boot",
    "lookup": []
  },
  {
    "text": "O I see everyone got off without replying\nRip me\n🤡\nProtim booting?",
    "lookup": []
  },
  {
    "text": "Rip",
    "lookup": []
  },
  {
    "text": "When we doing cs",
    "lookup": []
  },
  {
    "text": "B4",
    "lookup": []
  },
  {
    "text": "Who @'d me\nCan we get a cs game together before 9pm dnd?",
    "lookup": []
  },
  {
    "text": "@everyone cs time\nFoolish and Dank are down\n@tad19  ?",
    "lookup": []
  },
  {
    "text": "V.A.T.S. ^^^^^",
    "lookup": []
  },
  {
    "text": "Yo CS tonight?",
    "lookup": []
  },
  {
    "text": "@everyone gamer time tonight?",
    "lookup": []
  },
  {
    "text": "Ya\n@joeliepolieolie69 @theswagengine @tad19 @foolishwizrd",
    "lookup": []
  },
  {
    "text": "Where's the gamers",
    "lookup": []
  },
  {
    "text": "Community - “Air filter”\n\nBSG - “Air filter\n\nCommunity - “is”\n\nBSG - “is”\n\nCommunity - “broken”\n\nBSG - “broken”\n\nCommunity - “Air filter is broken”\n\nBSG - “aquamaries are OP”",
    "lookup": []
  },
  {
    "text": "@foolishwizrd CS time man\n@everyone CS?",
    "lookup": []
  },
  {
    "text": "I just woke up\nGotta eat with gf, then season finale of Snowpiercer to watch",
    "lookup": []
  },
  {
    "text": "What's up",
    "lookup": []
  },
  {
    "text": "Working",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker CS?\nWtf\nI've been working\nLol\n@.lukedankwalker cssss",
    "lookup": []
  },
  {
    "text": "Bed time\nLater\nBeen up since 11pm\nIf we want to rank up then no more messing around",
    "lookup": []
  },
  {
    "text": "Sup",
    "lookup": []
  },
  {
    "text": "Oh",
    "lookup": []
  },
  {
    "text": "Well wake him up pro\nIt's gamer time",
    "lookup": []
  },
  {
    "text": "Mirage + L + Carried + Ratio\nOffice is fun\n@everyone when CS?",
    "lookup": []
  },
  {
    "text": "Ouch\nWhen q",
    "lookup": []
  },
  {
    "text": "Yo",
    "lookup": []
  },
  {
    "text": "Yo\n@everyone CS???",
    "lookup": []
  },
  {
    "text": "Nobody knows what's going on lmfaooo",
    "lookup": []
  },
  {
    "text": "Hi\nHohoho",
    "lookup": []
  },
  {
    "text": "im on\n@.lukedankwalker\nsquad up",
    "lookup": []
  },
  {
    "text": "no we chillin",
    "lookup": []
  },
  {
    "text": "@foolishwizrd are you trying to game?",
    "lookup": []
  },
  {
    "text": "@theswagengine we doing another one",
    "lookup": []
  },
  {
    "text": "CS later boys",
    "lookup": []
  },
  {
    "text": "Soon ish",
    "lookup": []
  },
  {
    "text": "What's the status\nShould I boot?\nKkkkkkk\nComing",
    "lookup": []
  },
  {
    "text": "No rankup\nI only died SIX TIMES LMFAO\n16-3",
    "lookup": []
  },
  {
    "text": "W",
    "lookup": []
  },
  {
    "text": "Boys, we have COVID again\nGotta collect all the variants or it's not worth it\ngf took a rapid test this morning and it's positive",
    "lookup": []
  },
  {
    "text": "we playing dnd",
    "lookup": []
  },
  {
    "text": "@everyone cs",
    "lookup": []
  },
  {
    "text": "@everyone CS?",
    "lookup": []
  },
  {
    "text": "Where is @everyone",
    "lookup": []
  },
  {
    "text": "Alright, I'm q'ing\nHello",
    "lookup": []
  },
  {
    "text": "O\nI see how it is\nLukes on the enemy team",
    "lookup": []
  },
  {
    "text": "Fucking luke man\nMy whole team hated him lol",
    "lookup": []
  },
  {
    "text": "yup yup",
    "lookup": []
  },
  {
    "text": "huh",
    "lookup": []
  },
  {
    "text": "What's up",
    "lookup": []
  },
  {
    "text": "Where are the gamers",
    "lookup": []
  },
  {
    "text": "He said no gaming tonight but does that mean not at all or not till modnight",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker Cs after work?",
    "lookup": []
  },
  {
    "text": "Where's the C's Bois",
    "lookup": []
  },
  {
    "text": "@everyone want to do a cs?",
    "lookup": []
  },
  {
    "text": "I'm doing one",
    "lookup": []
  },
  {
    "text": "@phantom_cooper @.lukedankwalker",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker CS before your dnd tonight?",
    "lookup": []
  },
  {
    "text": "So\nCs",
    "lookup": []
  },
  {
    "text": "Sorry I was sleeping",
    "lookup": []
  },
  {
    "text": "RIP",
    "lookup": []
  },
  {
    "text": "Yeah\nCS when\n@everyone CS when?",
    "lookup": []
  },
  {
    "text": "I'm done work\nMaking a samwhich\nReady tho",
    "lookup": []
  },
  {
    "text": "Ya\n5am gonna do that to me\nNotice I was the only silver\nTo be fair, our top frag got 2 aces. And on CT side I was anchoring B and the T's never ever went B it was always rushing long or mid",
    "lookup": []
  },
  {
    "text": "Sorry I slept",
    "lookup": []
  },
  {
    "text": "Gamer time now tho",
    "lookup": []
  },
  {
    "text": "I sleep, again\nNow I work",
    "lookup": []
  },
  {
    "text": "I'm bout to cs",
    "lookup": []
  },
  {
    "text": "lol wtf\nThey were loosing / throwing the entire game\nit was so werid\nthey kept hiding\ngame took FOREVER\nthen like 3 of them abandonded near the end",
    "lookup": []
  },
  {
    "text": "CS today?",
    "lookup": []
  },
  {
    "text": "No one's awake",
    "lookup": []
  },
  {
    "text": "Throwing out some OG gamer history today",
    "lookup": []
  },
  {
    "text": "Yee OG pirates on IRC CHAT",
    "lookup": []
  },
  {
    "text": "Who @'d me",
    "lookup": []
  },
  {
    "text": "I thought you said they were doing that to try and keep you and you were like nah\nBe sure they were trying to buy a second restaurant\n@everyone CS time?",
    "lookup": []
  },
  {
    "text": "huh",
    "lookup": []
  },
  {
    "text": "Gamers\nRise\nUp",
    "lookup": []
  },
  {
    "text": "I was sleep\nNow I wake",
    "lookup": []
  },
  {
    "text": "@everyone crackhead hour cS time",
    "lookup": []
  },
  {
    "text": "huhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh???????????????????????\nOur gold 3's did worse then their silver 3",
    "lookup": []
  },
  {
    "text": "Ok cs today",
    "lookup": []
  },
  {
    "text": "Huh",
    "lookup": []
  },
  {
    "text": "@everyone CS?",
    "lookup": []
  },
  {
    "text": "Google ?\nThe OG speech to text software is dragon naturally speaking.\nI think nowadays it's just google products\nLike my pixel has built in speach to text for writing things\n@everyone csgo at 6pm?",
    "lookup": []
  },
  {
    "text": "@everyone  its time, wheres the gamers",
    "lookup": []
  },
  {
    "text": "@everyone CS?",
    "lookup": []
  },
  {
    "text": "Kk\nBooting\n@joeliepolieolie69 @.lukedankwalker",
    "lookup": []
  },
  {
    "text": "Yo",
    "lookup": []
  },
  {
    "text": "I'm gonna do an early cs",
    "lookup": []
  },
  {
    "text": "My team was actually retarted\norange had it out for me the entire game\nverbal abuse and body blocking me when i was awping\nlast round they killed me 15 seconds after round started and he just t-bagged me all game\nidk what their problem was\nthey were so trash",
    "lookup": []
  },
  {
    "text": "our 5th was braindead and we bullied him for a few rounds and he left, then we won with 4 man vs 5man lmfaoooooooooooooo",
    "lookup": []
  },
  {
    "text": "Tarkov patch wedensday 3am for 2 hrs",
    "lookup": []
  },
  {
    "text": "I think you mean, go back to bed nothing to see here\nAlso I don't think this is a wipe?\nDLSS update, possibly expanding lighthouse map and new bosses\nImproved the speed of loading into a raid\nPoggers",
    "lookup": []
  },
  {
    "text": "Well, we doing this",
    "lookup": []
  },
  {
    "text": "Yeah poggers\nNo wind sound while loading\nNo drop shotting scavs\nScavs with inertia",
    "lookup": []
  },
  {
    "text": "@everyone CS soon?",
    "lookup": []
  },
  {
    "text": "Cssss",
    "lookup": []
  },
  {
    "text": "Booting",
    "lookup": []
  },
  {
    "text": "Amuranth is retiring, @tad19 is on suicide watch\nLMFo\nLMFAO",
    "lookup": []
  },
  {
    "text": "@everyone CS?",
    "lookup": []
  },
  {
    "text": "Yo sorry I was playing zelda\nWhat's upppp",
    "lookup": []
  },
  {
    "text": "Ok\n@everyone CS at 6?",
    "lookup": []
  },
  {
    "text": "I'm here",
    "lookup": []
  },
  {
    "text": "Ya wait 5 minutes",
    "lookup": []
  },
  {
    "text": "?top frag\n?gets harassed for everything\n?classic",
    "lookup": []
  },
  {
    "text": "Eating dinner",
    "lookup": []
  },
  {
    "text": "Happy fish day",
    "lookup": []
  },
  {
    "text": "Huh\nIt's spring\nEaster",
    "lookup": []
  },
  {
    "text": "C$ 2 nite\n@everyone c$ 2nite\nYo has anyone seen @tad19 ?",
    "lookup": []
  },
  {
    "text": "Huah?",
    "lookup": []
  },
  {
    "text": "Ya",
    "lookup": []
  },
  {
    "text": "Coming",
    "lookup": []
  },
  {
    "text": "So whens queue",
    "lookup": []
  },
  {
    "text": "88888?????\nHow about 6 @.lukedankwalker",
    "lookup": []
  },
  {
    "text": "@everyone  gamer time?",
    "lookup": []
  },
  {
    "text": "@everyone gamer time? One game.",
    "lookup": []
  },
  {
    "text": "Rip",
    "lookup": []
  },
  {
    "text": "Hello",
    "lookup": []
  },
  {
    "text": "Hello\nWhat's the status\nI'll join after this 1",
    "lookup": []
  },
  {
    "text": "They in a game\nI am down after",
    "lookup": []
  },
  {
    "text": "Ping me",
    "lookup": []
  },
  {
    "text": "@joeliepolieolie69 get in here we got tons of room",
    "lookup": []
  },
  {
    "text": "Huh\nStreaming what\nCS?\nNah I'm on the work pc\nHello\nUm ok",
    "lookup": []
  },
  {
    "text": "@everyone gamer time when?",
    "lookup": []
  },
  {
    "text": "Huh\nI thought you had exams or something",
    "lookup": []
  },
  {
    "text": "Happy 4.20 burna squad",
    "lookup": []
  },
  {
    "text": "Boston Texas?\nRip",
    "lookup": []
  },
  {
    "text": "CS when today?",
    "lookup": []
  },
  {
    "text": "@everyone CS when?\nI'm ready",
    "lookup": []
  },
  {
    "text": "Showering, I'll be down in 10",
    "lookup": []
  },
  {
    "text": "Bootin",
    "lookup": []
  },
  {
    "text": "idk\nim in cs now\nrip",
    "lookup": []
  },
  {
    "text": "join",
    "lookup": []
  },
  {
    "text": "Hello",
    "lookup": []
  },
  {
    "text": "Hello\n@.lukedankwalker",
    "lookup": []
  },
  {
    "text": "Machine learning model for \"am I the asshole\" Reddit automated ML responses lol",
    "lookup": []
  },
  {
    "text": "Hello\nCS?",
    "lookup": []
  },
  {
    "text": "@everyone CS?\n@phantom_cooper what",
    "lookup": []
  },
  {
    "text": "Wheres the Cs at",
    "lookup": []
  },
  {
    "text": "I don't see @.lukedankwalker @phantom_cooper",
    "lookup": []
  },
  {
    "text": "Nein",
    "lookup": []
  },
  {
    "text": "Ah\nThe negotiator",
    "lookup": []
  },
  {
    "text": "😂😂😂😂",
    "lookup": []
  },
  {
    "text": "Rip\nRip tarkov",
    "lookup": []
  },
  {
    "text": "Tarkov added new high end barters to lvl 1 traders. Possibly pre wipe event related to the new lighthouse trader. Watch out for April 28th Thursday news\n@everyone CS tonight let's go 😎☝️",
    "lookup": []
  },
  {
    "text": "Huh????\nAye aye captain",
    "lookup": []
  },
  {
    "text": "@everyone CS time come on",
    "lookup": []
  },
  {
    "text": "Me too .me too\nNo Chris, so just @theswagengine @.lukedankwalker @tad19 ?",
    "lookup": []
  },
  {
    "text": "Anyone playing CS at the Intel booth LMFAO\nAlso I see hard space shipbreaker on that central banner SICK\nFull release is in May\n@everyone CS at 12:30??",
    "lookup": []
  },
  {
    "text": "Ight",
    "lookup": []
  },
  {
    "text": "Bruh\nRip\nHuh\nCs\nThe gamers have abandoned me",
    "lookup": []
  },
  {
    "text": "You heard me",
    "lookup": []
  },
  {
    "text": "I carried in the first half\nVibes were good on the whole team\ngreen was shit forever and then picked it up\ngood team work",
    "lookup": []
  },
  {
    "text": "@everyone whens Saturday CS?",
    "lookup": []
  },
  {
    "text": "Youre retired from cs",
    "lookup": []
  },
  {
    "text": "Lol\nWell I'm doing some shopping. Then gonna go home and cook chicken and veg, then I'm ready\nI also got some power steering fluid + stop leak gonna see if it revives the car or not",
    "lookup": []
  },
  {
    "text": "Gamers rise up",
    "lookup": []
  },
  {
    "text": "im in",
    "lookup": []
  },
  {
    "text": "@everyone im starting up cs soon",
    "lookup": []
  },
  {
    "text": "im here\ni think Luke is at work so maybe we'll see him at 12:30 like last night\njust did one lost 14-16 lol\nyeah i can do more\n@everyone we starting CS in 10 minutes",
    "lookup": []
  },
  {
    "text": "go into kitchen to get another chicken breast and veg, put it in the microwave, there are 2 cold pizza pops from 4 hours ago in the microwave that i cooked XD\nrip\ni put them in while cooking cause i didnt want to wait 40 minutes to eat something",
    "lookup": []
  },
  {
    "text": "wheres the rank up?????",
    "lookup": []
  },
  {
    "text": "hello",
    "lookup": []
  },
  {
    "text": "jesus",
    "lookup": []
  },
  {
    "text": ".",
    "lookup": []
  },
  {
    "text": "@everyone CS?",
    "lookup": []
  },
  {
    "text": "Hi\nKkkkk",
    "lookup": []
  },
  {
    "text": "Well?",
    "lookup": []
  },
  {
    "text": "Yeah but I'm not going to join till we're ready bruh",
    "lookup": []
  },
  {
    "text": "Hello?\nI'm just on the couch, waiting for the call\n@everyone when?",
    "lookup": []
  },
  {
    "text": "Time\nYeah let's do it\n1 now and then we'll be ready for 7",
    "lookup": []
  },
  {
    "text": "Just played 3 now dnd",
    "lookup": []
  },
  {
    "text": "Yo\nIt's the middle of the work day",
    "lookup": []
  },
  {
    "text": "🤦",
    "lookup": []
  },
  {
    "text": "Soon\nI'm finishing work",
    "lookup": []
  },
  {
    "text": "Coning\n@everyone WAIT\nFor me",
    "lookup": []
  },
  {
    "text": "@everyone once more onto the breach?",
    "lookup": []
  },
  {
    "text": "Not you!\nWheres Luke",
    "lookup": []
  },
  {
    "text": "Norsemen",
    "lookup": []
  },
  {
    "text": "Ya",
    "lookup": []
  },
  {
    "text": "Brb",
    "lookup": []
  },
  {
    "text": "Ok",
    "lookup": []
  },
  {
    "text": "Why?",
    "lookup": []
  },
  {
    "text": "ya\nget back here",
    "lookup": []
  },
  {
    "text": "rip",
    "lookup": []
  },
  {
    "text": "Player base is having a MELTDOWN on the eft discord lmfao\nThey removed flee and traders\n\"but how are new players supposed to do anything?\"\nHow many new players are there this week during the middle of the wipe with no updates or drops etc, why choose this exact week to buy the game\nLol\nI bet it's like negligible\nPeople like \" we paid money for features that have been removed \" lmfao\nOthers saying they just won't play for the 5 days because this \"event sucks\"",
    "lookup": []
  },
  {
    "text": "5 day event where you can't buy/sell fom NPC or players, and the EFT Discord is salty",
    "lookup": []
  },
  {
    "text": "Raiders and everything 1% cost?",
    "lookup": []
  },
  {
    "text": "🤷",
    "lookup": []
  },
  {
    "text": "Sure",
    "lookup": []
  },
  {
    "text": "Lol\nNice 😎\nSo much copium\nSo many people like \"I don't like it so I'm not gonna play till they are back\" lmfao",
    "lookup": []
  },
  {
    "text": "People get forced to play a different way and they just would rather not play\nYo we said we wanted global quests , that's what this is\nOnepeg things 100billion needs to be donated and so far it's about 13billion since he made the video",
    "lookup": []
  },
  {
    "text": "Nah copium\nThey can't cope",
    "lookup": []
  },
  {
    "text": "Must be nice\nSometimes you get all the kills and still loose",
    "lookup": []
  },
  {
    "text": "Rechargeable shotgun shells",
    "lookup": []
  },
  {
    "text": "Have you guys beat the game yet",
    "lookup": []
  },
  {
    "text": "You can still progress the quests you have, but since the traders are hiding you can't get new quests or turn them in\nI like it\nWould be cool if they did this at the beginning of the wipe\nFirst 5 days no traders at all",
    "lookup": []
  },
  {
    "text": "You don't need traders to play the game, that's what hardcore is plus barter trades but those are mainly for like quest items.\nI think this is a test and they'll do this again for 5 days when the game wipes. It would prevent people from completing all the quests in the first 48 hours.\nFirst 5 days would be just using what you find and hoarding loot for when the traders unlock and then you start quests. Would help people that can only play on weekends if the game wipes on a Tuesday or whatever.\nI wouldn't say there is a lot of new people right now. But new people would be confused regardless of the event.",
    "lookup": []
  },
  {
    "text": "I see people on the discord saying they are running lighthouse back to back and getting tons of gear and loot, and the raids are empty be side everyone's salty. They are going to stack the loot for 5 days then put it all up on the flea at the end. I also saw another guy say he made 2-3 million just fencing stuff lol.",
    "lookup": []
  },
  {
    "text": "The majority of people have a stash full of gear that they are hoarding. This is the event that causes you to use some of it. If for some reason a person is broke and has no gear in their stash all the time, then they should learn how to get gear from scavs or in raid during this event. Maybe they can learn how to kill raiders or rouges and get some gear. Or they can learn some loot runs and save the expensive loot to sell in a few days.",
    "lookup": []
  },
  {
    "text": "Fence is now buying everything for the max value you would have gotten from the other traders. And they announced we need 1.5 trillion to pay, and we've paid 49 billion so far lol\nI got 80 million, I'll log in later and donate 40 mill",
    "lookup": []
  },
  {
    "text": "It's not all about quests though. You can still play the game and have fun. Still get XP and level up, and get skill XP. They've buffed the amount of money in safes and case registers apparently. Fence gives you lots of money for stuff. There's quests in tarkov to hand over like 6000usd to peacekeeper. This is basically another quest but it's a global quest. And ya loghtkeeper is blackmailing us as a player base, and until we donate enough we can't talk to the traders. So we gotta do money runs and just vendor it all to fence and donate.\nAgain I kinda think this is weird in the middle of the wipe, but I think this would be amazing at the start of the wipe with no traders for 5 days. It would allow everyone to start collecting gear and leveling up without the 'chads' beating all the quests in the first 48 hours before some people even have a chance to login",
    "lookup": []
  },
  {
    "text": "Yeah it's not all about quests, that's why I keep playing even after I get max traders? It's still fun to go lighthouse and kill stuff or factory. It's just like arena/deathmatch at that point.\nAnd all the 'casuals' complain about people rushing the game so if they did this at the beginning of the wipe that would extend the early game for 5 days as we would all be using scavanged gear",
    "lookup": []
  },
  {
    "text": "If csgo did an event where all long guns were removed and it was smgs only I bet people would complain but it would be fun. It would change how people played the game.\nI think any event that changes how people play the game is good. Weather that .ales it harder or easier. Since you can't use traders I'd prioritize extracting a gun and ammo over some barter items.\nAt the same time Id want to extract anything that sells good to fence to get more money and donate it\nOr hold on to expensive stuff in my junk boxes to put on the flea market when this is over on sunday\nWe did that whole night raids on factory thing for like 12 hours, it wasn't for quests it was just for fun and farming tagilla and killing players",
    "lookup": []
  },
  {
    "text": "Plus ya this event is less about gameplay and more about lore building. It's cool",
    "lookup": []
  },
  {
    "text": "Yes",
    "lookup": []
  },
  {
    "text": "@everyone when videogames?",
    "lookup": []
  },
  {
    "text": "No but you can. Any quests you already have you can get progress for.\nAnd any items you need to find in raid you can store in the quest stash\nYeah so when this event ends you turn them all in at once\nFarm rouges for guns. Kill other players. Use stuff you have\nIf you already had the quest active, it stays active\nYou can not accept new quests or turn in ones you've finished",
    "lookup": []
  },
  {
    "text": "In the midgame you have like 15 quests at the same time to do\nYes they can't turn it in but they can still complete a quest and do another one\nWhen event is over you can turn in 10 quests at once\nRight now the point is donating money and selling items to fence\nDepending on your \"progress through the wipe\" you have different goals. At the begining it's quests and making money. In the middle it's quests and spending the money to help you do quests. And at the end it's now farming XP to get to Kappa.",
    "lookup": []
  },
  {
    "text": "This event just made it so the point isn't quests it's money and donating\nPeople are pulling 200k roubles from the customs gas station cash registers\nAlso let's be honest, the only people still not done the majority of the quests are the people who aren't getting 5 quests done in a day. They probably only play once every few days and can work on their 1 quest. They aren't blasting through the quest tree right now.",
    "lookup": []
  },
  {
    "text": "-sent from my Samsung fridge",
    "lookup": []
  },
  {
    "text": "We ain't even playing tarkov anymore. When are we playing cs",
    "lookup": []
  },
  {
    "text": "True\nIt's basically all ARG stuff\nLol ya",
    "lookup": []
  },
  {
    "text": "Is there a CS",
    "lookup": []
  },
  {
    "text": "@everyone cs now?",
    "lookup": []
  },
  {
    "text": "I donated 50 million (plus 12 more after selling bitcoins)",
    "lookup": []
  },
  {
    "text": "Green disconnected 2x and i asked if anyone was queued with him and they say no.......\nthey were a 4 man\nthey were a FOUR MAN, AND HAD NO COMMUNICATION!!?!?!?!?\nThey were all retarded, didnt make a single play together the entire time\ni think purple, blue, and green with AFK at least one round each\nPisses me off man wtf",
    "lookup": []
  },
  {
    "text": "Alright @everyone where my T's and CT's at?",
    "lookup": []
  },
  {
    "text": "Yes",
    "lookup": []
  },
  {
    "text": "Im down for cs tonight, but I just woke up",
    "lookup": []
  },
  {
    "text": "Yoyo",
    "lookup": []
  },
  {
    "text": "I'm ready for cs whenever",
    "lookup": []
  },
  {
    "text": "yo\n@everyone another one",
    "lookup": []
  },
  {
    "text": "@joeliepolieolie69 we're gonna start one up in a minute, we're busy at 9pm and want to be done before then",
    "lookup": []
  },
  {
    "text": "Sleeping / working\nWe were up till like 5am lol",
    "lookup": []
  },
  {
    "text": "Gamer time tonight",
    "lookup": []
  },
  {
    "text": "@everyone CS time?",
    "lookup": []
  },
  {
    "text": "I'm coming too",
    "lookup": []
  },
  {
    "text": "Got the next 3 days off of work, due to working extra the past few months\nTime in lieu",
    "lookup": []
  },
  {
    "text": "Me too in next, ping me when ready\n@here ping me when ready",
    "lookup": []
  },
  {
    "text": "Ok\nComin",
    "lookup": []
  },
  {
    "text": "@everyone csgo update 300mb",
    "lookup": []
  },
  {
    "text": "Where everyone go\nI said I'd be right back",
    "lookup": []
  },
  {
    "text": "huh",
    "lookup": []
  },
  {
    "text": "Yo\nWhat's up",
    "lookup": []
  },
  {
    "text": "Yo",
    "lookup": []
  },
  {
    "text": "Gamer time",
    "lookup": []
  },
  {
    "text": "Ya 2nite",
    "lookup": []
  },
  {
    "text": "Huh\nOh I have no idea lol",
    "lookup": []
  },
  {
    "text": "I need to go buy food\nThen CS all night\nBeen sleeping all day\nLuke's probably at work still\nIdk about the rest\nBe back in 20\nJust going to McDonald",
    "lookup": []
  },
  {
    "text": "Zehrs closed at 9\nI'm back",
    "lookup": []
  },
  {
    "text": "I'll play\n@foolishwizrd @tad19 @theswagengine",
    "lookup": []
  },
  {
    "text": "Hello",
    "lookup": []
  },
  {
    "text": "Jesus",
    "lookup": []
  },
  {
    "text": "@everyone gamers please show up",
    "lookup": []
  },
  {
    "text": "Rogues were just added to CUSTOMS, WOODS, and SHORELINE - 30% spawn chance\n@.lukedankwalker @jerbear107\nEvent\nThey looking for someone / a phone",
    "lookup": []
  },
  {
    "text": "@everyone when gamer",
    "lookup": []
  },
  {
    "text": "Yo",
    "lookup": []
  },
  {
    "text": "Hello",
    "lookup": []
  },
  {
    "text": "🤷\nWhat's up\nNo one else is joining up\nI could join for a 2man\nOr wait to see if others get on",
    "lookup": []
  },
  {
    "text": "@everyone cssss??\nDaum\nHow does a mg only get 2 kills\n@.lukedankwalker ??",
    "lookup": []
  },
  {
    "text": "Lmfaoooo\nUse your alt",
    "lookup": []
  },
  {
    "text": "Coming ua\nYa\n@theswagengine one more",
    "lookup": []
  },
  {
    "text": "Later tonight",
    "lookup": []
  },
  {
    "text": "Yo",
    "lookup": []
  },
  {
    "text": "Q",
    "lookup": []
  },
  {
    "text": "Coming coming",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker @jerbear107 what do we think about Space Engineers. I've been kinda thinking of trying it, but no idea how hard it is etc, or what the gameplay loop is\nI think all the DLC is just purely cosmetic + more blocks\nso not sure, can just get the base game\n16$ aint bad",
    "lookup": []
  },
  {
    "text": "idk",
    "lookup": []
  },
  {
    "text": "🙂\nSmiles\n@.lukedankwalker",
    "lookup": []
  },
  {
    "text": "1.42$ lets go",
    "lookup": []
  },
  {
    "text": "Swag has been saying your name for like 5 minutes",
    "lookup": []
  },
  {
    "text": "Joebe2",
    "lookup": []
  },
  {
    "text": "what",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker @jerbear107\nDidn't know Pest wife was pergernant?",
    "lookup": []
  },
  {
    "text": "ya",
    "lookup": []
  },
  {
    "text": "Purchased, with CSGO funds",
    "lookup": []
  },
  {
    "text": "From dust 2 dust2",
    "lookup": []
  },
  {
    "text": "I was sleepin",
    "lookup": []
  },
  {
    "text": "I'm getting on soon\n@.lukedankwalker",
    "lookup": []
  },
  {
    "text": "The factory must flow",
    "lookup": []
  },
  {
    "text": "Nah later",
    "lookup": []
  },
  {
    "text": "Gamer time",
    "lookup": []
  },
  {
    "text": "Rip",
    "lookup": []
  },
  {
    "text": "Next one",
    "lookup": []
  },
  {
    "text": "Oh\nY\nWot\nEveryone only did 1?",
    "lookup": []
  },
  {
    "text": "Ok I'm just getting up",
    "lookup": []
  },
  {
    "text": "@jerbear107 starfield delayed to 2023 now",
    "lookup": []
  },
  {
    "text": "Gamers",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker",
    "lookup": []
  },
  {
    "text": "11-4 CT side to 15-15 T side lol",
    "lookup": []
  },
  {
    "text": "explains a lot",
    "lookup": []
  },
  {
    "text": "see ya",
    "lookup": []
  },
  {
    "text": "In a bit\nJust getting up",
    "lookup": []
  },
  {
    "text": "Ok",
    "lookup": []
  },
  {
    "text": "my team was retarted\ni was yelling at them all game\npurple and green were shitters\nwouldnt shut up\nwouldnt listen to anyone\nwouldnt follow bomb\netc",
    "lookup": []
  },
  {
    "text": "I was sleeping",
    "lookup": []
  },
  {
    "text": "Game didnt start because our 5th didnt join but WTF are these ranks",
    "lookup": []
  },
  {
    "text": "Yup",
    "lookup": []
  },
  {
    "text": "I was sleeping just got up",
    "lookup": []
  },
  {
    "text": "@everyone im doing a ciesta now if you up",
    "lookup": []
  },
  {
    "text": "Yee maybe 10:30",
    "lookup": []
  },
  {
    "text": "?\nI didn't say anything",
    "lookup": []
  },
  {
    "text": "Finishing up work\nGotta spend some time with gf",
    "lookup": []
  },
  {
    "text": "Nope",
    "lookup": []
  },
  {
    "text": "No gamer time tonight",
    "lookup": []
  },
  {
    "text": "Ya",
    "lookup": []
  },
  {
    "text": "Too tired\nFirst day back at office tomorrow\nNot permanent tho\nMe and gf watched half of the batman",
    "lookup": []
  },
  {
    "text": "Not yet",
    "lookup": []
  },
  {
    "text": "Workin",
    "lookup": []
  },
  {
    "text": "Hello",
    "lookup": []
  },
  {
    "text": "I'm coming",
    "lookup": []
  },
  {
    "text": "@theswagengine get in here\n@theswagengine its 6:40pm days over",
    "lookup": []
  },
  {
    "text": "Rip",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker borderlands 3 playthrough???????\nFree to keep on epic game store this week\nThey having a massive sale and 4 free games over the next weeks",
    "lookup": []
  },
  {
    "text": "Hello",
    "lookup": []
  },
  {
    "text": "Hello",
    "lookup": []
  },
  {
    "text": "Birds up\nWith wings",
    "lookup": []
  },
  {
    "text": "CS around 11-12 ish\nPlaying poker",
    "lookup": []
  },
  {
    "text": "Jk be home a little earlier than that\nIf gf is asleep around , 10:20. If not, maybe 11-12 lol",
    "lookup": []
  },
  {
    "text": "Gamers",
    "lookup": []
  },
  {
    "text": "😴",
    "lookup": []
  },
  {
    "text": "Hello",
    "lookup": []
  },
  {
    "text": "Hello\nCS?",
    "lookup": []
  },
  {
    "text": "@everyone CS time boot up",
    "lookup": []
  },
  {
    "text": "rdy",
    "lookup": []
  },
  {
    "text": "I'm back",
    "lookup": []
  },
  {
    "text": "CS today\n@joeliepolieolie69 @.lukedankwalker @foolishwizrd @theswagengine 5 man CS so no shitty teammates????",
    "lookup": []
  },
  {
    "text": "Huh",
    "lookup": []
  },
  {
    "text": "Dnd 2nite",
    "lookup": []
  },
  {
    "text": "Zero hype\nOverrated by Jerry",
    "lookup": []
  },
  {
    "text": "I thought youre off Sundays Mondays",
    "lookup": []
  },
  {
    "text": "@everyone gamer time?",
    "lookup": []
  },
  {
    "text": "I'm down",
    "lookup": []
  },
  {
    "text": "@everyone so cs?\nCs?\nFaze won?\n2-0",
    "lookup": []
  },
  {
    "text": "@everyone boot up it's happening 5 man\n@__honey__ @joeliepolieolie69 @theswagengine @.lukedankwalker",
    "lookup": []
  },
  {
    "text": "Ordered a new fan for my desktop, and a SSD for my living room PC\nCan put some games on it and game in the living room too\nMight try Witcher 3 finally, and been thinking of torrenting mass effect legendary",
    "lookup": []
  },
  {
    "text": "Nah\nI want the legendary experience\nI've already beaten 1-2-3 on Xbox, and I replayed 1 about 4 years ago",
    "lookup": []
  },
  {
    "text": "Huh",
    "lookup": []
  },
  {
    "text": "Making / eating dinner still",
    "lookup": []
  },
  {
    "text": "Hello",
    "lookup": []
  },
  {
    "text": "Holiday",
    "lookup": []
  },
  {
    "text": "Shipbreaker went 1.0 yesterday 😎\nI'll be gaming some of that tonight\nGotta show those anti union commies who's boss",
    "lookup": []
  },
  {
    "text": "Gamers",
    "lookup": []
  },
  {
    "text": "im on\nrip",
    "lookup": []
  },
  {
    "text": "@joeliepolieolie69 @theswagengine",
    "lookup": []
  },
  {
    "text": "Alright\ngamerssssss",
    "lookup": []
  },
  {
    "text": "@joeliepolieolie69 @theswagengine",
    "lookup": []
  },
  {
    "text": "gamers\nBioshock collection free to keep on epic store",
    "lookup": []
  },
  {
    "text": "Huh",
    "lookup": []
  },
  {
    "text": "Gamers?",
    "lookup": []
  },
  {
    "text": "I'm ready",
    "lookup": []
  },
  {
    "text": "bootin",
    "lookup": []
  },
  {
    "text": "Gamers",
    "lookup": []
  },
  {
    "text": "hello",
    "lookup": []
  },
  {
    "text": "hello\nhello",
    "lookup": []
  },
  {
    "text": "@everyone gamers",
    "lookup": []
  },
  {
    "text": "wtf\n6:30pm on saturday",
    "lookup": []
  },
  {
    "text": "W",
    "lookup": []
  },
  {
    "text": "Wheres the gamers",
    "lookup": []
  },
  {
    "text": "Hello\n@everyone CS when",
    "lookup": []
  },
  {
    "text": "@everyone guess it's that time let's gooo\nikm booted\ngamers\nyo its gamer time\nhuh\nwhy you copy me",
    "lookup": []
  },
  {
    "text": "Nah\nHuh",
    "lookup": []
  },
  {
    "text": "Gamers",
    "lookup": []
  },
  {
    "text": "@everyone gamers? Hello?",
    "lookup": []
  },
  {
    "text": "@everyone going to start a CS soon soon tm",
    "lookup": []
  },
  {
    "text": "Starting up",
    "lookup": []
  },
  {
    "text": "DND AT 9",
    "lookup": []
  },
  {
    "text": "Lifes not out to get you\nRe-ranked back to gold1\nLMFAO",
    "lookup": []
  },
  {
    "text": "I might do another CS\nIf we can get some peeps\nI just re-ranked tho\nno L's please",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker RIP the dream",
    "lookup": []
  },
  {
    "text": "At what point is it no longer a AK",
    "lookup": []
  },
  {
    "text": "Also 545x39 lol\nCome on Luke, sounds like you need to play more tarkov",
    "lookup": []
  },
  {
    "text": "@everyone  CS time",
    "lookup": []
  },
  {
    "text": "Yo",
    "lookup": []
  },
  {
    "text": "Gamers",
    "lookup": []
  },
  {
    "text": "wtf\n@foolishwizrd @.lukedankwalker @joeliepolieolie69 @theswagengine gamers please",
    "lookup": []
  },
  {
    "text": "I'm gonna warm up\nwhen gamer group\n12?",
    "lookup": []
  },
  {
    "text": "gamers?",
    "lookup": []
  },
  {
    "text": "g...g...gamers???\nhello",
    "lookup": []
  },
  {
    "text": "Gamers",
    "lookup": []
  },
  {
    "text": "@joeliepolieolie69 wanna do a cs?",
    "lookup": []
  },
  {
    "text": "ya we are 6-6 on dust",
    "lookup": []
  },
  {
    "text": "Not yet",
    "lookup": []
  },
  {
    "text": "I can do soon\nJust doing some dishes",
    "lookup": []
  },
  {
    "text": "ready??",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker @jerbear107 we gonna GET NUKED IN TARKOV",
    "lookup": []
  },
  {
    "text": "Lol",
    "lookup": []
  },
  {
    "text": "Ya",
    "lookup": []
  },
  {
    "text": "Bopoted\n@everyone cs?",
    "lookup": []
  },
  {
    "text": "gamers?",
    "lookup": []
  },
  {
    "text": "?????",
    "lookup": []
  },
  {
    "text": "hello gamers???",
    "lookup": []
  },
  {
    "text": "Hello",
    "lookup": []
  },
  {
    "text": "Gamers please",
    "lookup": []
  },
  {
    "text": "Gamers\nI was showering\nYou already in a game?\nIf not wait for me I'm coming\nBooting",
    "lookup": []
  },
  {
    "text": "what happened",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker what happened",
    "lookup": []
  },
  {
    "text": "ส็็็༼ ຈل͜ຈ༽ส้้้",
    "lookup": []
  },
  {
    "text": "?\n?\nWhat kinda viruses are you guys giving me\nMy discord and baulders broke\nMy internet broke\nI'm restarting the modem",
    "lookup": []
  },
  {
    "text": "Why do bad things happen to good people",
    "lookup": []
  },
  {
    "text": "cs?\n@everyone cs?",
    "lookup": []
  },
  {
    "text": "Starting",
    "lookup": []
  },
  {
    "text": "Hello hello hello\n@.lukedankwalker Well wake the fuck up Samurai, we have a Bombsite B to burn",
    "lookup": []
  },
  {
    "text": "I'm going to start one around 8;20",
    "lookup": []
  },
  {
    "text": "Cycle Frontier launched today. Only 13gb download it says, 30gb install",
    "lookup": []
  },
  {
    "text": "bruh its brand new\nthey had a few betas\nthis is official full launch",
    "lookup": []
  },
  {
    "text": "Got my games",
    "lookup": []
  },
  {
    "text": "@everyone gamers\nIt's cycle time",
    "lookup": []
  },
  {
    "text": "I fell asleep on the couch",
    "lookup": []
  },
  {
    "text": "Coming\nGetting a drink",
    "lookup": []
  },
  {
    "text": "This game was so fucked",
    "lookup": []
  },
  {
    "text": "Gamer time\n@jerbear107 @.lukedankwalker @phantom_cooper gamers",
    "lookup": []
  },
  {
    "text": "Gamer when?",
    "lookup": []
  },
  {
    "text": "No it's Skyrim in space",
    "lookup": []
  },
  {
    "text": "@everyone gamers?\nRise up",
    "lookup": []
  },
  {
    "text": "Dnd?",
    "lookup": []
  },
  {
    "text": "games, yua\nqs\nq's\nya",
    "lookup": []
  },
  {
    "text": "Brb\n15 min",
    "lookup": []
  },
  {
    "text": "Reduce\nReuse\nReCYCLE",
    "lookup": []
  },
  {
    "text": "I'm at work\nFuk this place\nOnly me and my manager showed up",
    "lookup": []
  },
  {
    "text": "My manager just left\n😂",
    "lookup": []
  },
  {
    "text": "Ya I left",
    "lookup": []
  },
  {
    "text": "@everyone cs cs cs",
    "lookup": []
  },
  {
    "text": "I ain't ready yet",
    "lookup": []
  },
  {
    "text": "READY NOW\ncycle gamers\nlets go",
    "lookup": []
  },
  {
    "text": "@everyone im ready whenever, just playing the cycle right now",
    "lookup": []
  },
  {
    "text": "Killed a guy with white armor but a blue gun?\nOne of my best loot raids. 15 minutes. 3 guns, and lots of money",
    "lookup": []
  },
  {
    "text": "We playing cycle in the nugget buddies chat",
    "lookup": []
  },
  {
    "text": "Chris and protim died, but i killed them in the end, and got 4 guns lol\nus 3 vs 2, vs 2 more that showed up",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker cs or cycle?",
    "lookup": []
  },
  {
    "text": "Just going to make dinner for 30-60 min then gamer time",
    "lookup": []
  },
  {
    "text": "Time for some tacos\nGamers",
    "lookup": []
  },
  {
    "text": "We need to cs tonight, gotta get my drops",
    "lookup": []
  },
  {
    "text": "Hello",
    "lookup": []
  },
  {
    "text": "Gamers please",
    "lookup": []
  },
  {
    "text": "gamers\nid be down\nno ones on yet tho",
    "lookup": []
  },
  {
    "text": "@joeliepolieolie69 we on",
    "lookup": []
  },
  {
    "text": "@phantom_cooper we moved chats",
    "lookup": []
  },
  {
    "text": "Release Notes for 6/15/2022\n2022.06.15 - \n\n[GAMEPLAY]\n– Reduced the M4A1-S magazine size to 20 bullets, with 80 in reserve.\n\n[MAPS]\nAncient:\n-Remove cratestack outside of “cave” location\n-Fixed pixelgap from inside “cave” towards T mid\n-Fixed ground clipping bugs in mid causing players to go slightly airborne\n-Smoothed out ground outside of “cave” down towards B ramp\n-Blocked archeological dig inside of “cave”\n-Smoothed out corners in “donut” room\n-Added additional cover near pillar on B\n-Blocked one sidepath exit towards A site, widened remaining exit\n-Fixed some visual glitches when looking out towards mid from “donut” room\n-Reduced wallbang damage through scaffolding at B site\n-Boosted light emitted from candles/lanterns\n\nInferno:\n-Increased bomb explosion damage from 500 to 620\n\nVertigo\n-Another attempt at fixing molly through floor bug at mid\n-Removed a position by ramp corner\n\nCache:\n-Fixed an exploit. (Thanks El_Exodus!)\n\nVineyard\n-Performance and stability improvements\n-Ivy now sways in the wind\n-Fixed displacement vphysics issues",
    "lookup": []
  },
  {
    "text": "Alright gamers\nT-Soon ™️",
    "lookup": []
  },
  {
    "text": "Time to recyle with the boys",
    "lookup": []
  },
  {
    "text": "maybe at 12",
    "lookup": []
  },
  {
    "text": "@everyone CS?",
    "lookup": []
  },
  {
    "text": "Im starting a CS\n@phantom_cooper get inhere",
    "lookup": []
  },
  {
    "text": "We in the end game now",
    "lookup": []
  },
  {
    "text": "Both\nEqual rights, equal lefts",
    "lookup": []
  },
  {
    "text": "@foolishwizrd ?",
    "lookup": []
  },
  {
    "text": "@everyone SO WHEN CS?!?",
    "lookup": []
  },
  {
    "text": "@everyone HELLO",
    "lookup": []
  },
  {
    "text": "@everyone TIME",
    "lookup": []
  },
  {
    "text": "That is cursed",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker @phantom_cooper cycle, CS, AND tarkov tonight???\nJust got up",
    "lookup": []
  },
  {
    "text": "COO",
    "lookup": []
  },
  {
    "text": "Huh",
    "lookup": []
  },
  {
    "text": "Yes when gamer time",
    "lookup": []
  },
  {
    "text": "Not yet",
    "lookup": []
  },
  {
    "text": "Gamers",
    "lookup": []
  },
  {
    "text": "Wheres @.lukedankwalker\nI was sleeping",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker ?",
    "lookup": []
  },
  {
    "text": "Gamers\nTime?",
    "lookup": []
  },
  {
    "text": "eating dinner and getting ready to go out",
    "lookup": []
  },
  {
    "text": "What could wrong",
    "lookup": []
  },
  {
    "text": "Games?\nWhere's the midnight crew at",
    "lookup": []
  },
  {
    "text": "wtffffffffffff",
    "lookup": []
  },
  {
    "text": "We just started",
    "lookup": []
  },
  {
    "text": "Yo\nGetting groceries with gf soon",
    "lookup": []
  },
  {
    "text": "im gaming",
    "lookup": []
  },
  {
    "text": "just in a game\nafter\nmaybe 15-20 min",
    "lookup": []
  },
  {
    "text": "fine with me\nim in the cycle,\n4:45",
    "lookup": []
  },
  {
    "text": "@everyone cs at 4:45 exactly",
    "lookup": []
  },
  {
    "text": "rip bozo purple",
    "lookup": []
  },
  {
    "text": "Nah he was a fucko",
    "lookup": []
  },
  {
    "text": "First Guelph had a 4 hour power outage this morning, now Rogers is fucking my ass via teksavy.\nWtf",
    "lookup": []
  },
  {
    "text": "I'm on teksavy\nWhich uses rogers",
    "lookup": []
  },
  {
    "text": "My Bitcoin profit for the day is like 10cents lmfao\nLol no, should be ~$2",
    "lookup": []
  },
  {
    "text": "Yo my internet is back out AGAIN\nAnd power was off for 5 minutes too sometime this morning\nWtf",
    "lookup": []
  },
  {
    "text": "Internet is back",
    "lookup": []
  },
  {
    "text": "No gamers here\nProbably gonna watch a movie with gf\nWhere's the jizz's of the world",
    "lookup": []
  },
  {
    "text": "@everyone yo can we manage to do a CS tonight?",
    "lookup": []
  },
  {
    "text": "yes\n@everyone squad up",
    "lookup": []
  },
  {
    "text": "Yo\nwe are already here",
    "lookup": []
  },
  {
    "text": "9-5 not us",
    "lookup": []
  },
  {
    "text": "Hello?\nIM back",
    "lookup": []
  },
  {
    "text": "I paid for CS and Tarkov didn't I?\nA BMW is pay to win anyways\nI got my eyes on a civic\nAlso pretty sure there are already software hacks for BMW lol",
    "lookup": []
  },
  {
    "text": "@foolishwizrd 10?",
    "lookup": []
  },
  {
    "text": "@everyone bppt\nboot",
    "lookup": []
  },
  {
    "text": "Actually im a gold 1",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker ^",
    "lookup": []
  },
  {
    "text": "From dust 2 dust 2",
    "lookup": []
  },
  {
    "text": "@everyone when c$?",
    "lookup": []
  },
  {
    "text": "Coming\nBooting",
    "lookup": []
  },
  {
    "text": "Nah work time",
    "lookup": []
  },
  {
    "text": "Huh?\nHuh\n♿ <- our team",
    "lookup": []
  },
  {
    "text": "Gamers rise up, its time for the night shift\nGive me 9?\njust frying some food",
    "lookup": []
  },
  {
    "text": "booting",
    "lookup": []
  },
  {
    "text": "tad already booted?",
    "lookup": []
  },
  {
    "text": "after",
    "lookup": []
  },
  {
    "text": "boot",
    "lookup": []
  },
  {
    "text": "@foolishwizrd @theswagengine @phantom_cooper\nwe starting in 10 seconds if no reply",
    "lookup": []
  },
  {
    "text": "Nah I'm done for today\nNab\nWe already did one\nWe got wrecked\nIt's 1:30\nNah",
    "lookup": []
  },
  {
    "text": "My mass effect is mass errect",
    "lookup": []
  },
  {
    "text": "Hello",
    "lookup": []
  },
  {
    "text": "hello\n@everyone huh?",
    "lookup": []
  },
  {
    "text": "yup yup",
    "lookup": []
  },
  {
    "text": "@foolishwizrd get in here\n@everyone CS soon, luke is eating",
    "lookup": []
  },
  {
    "text": "Ya CS with the team",
    "lookup": []
  },
  {
    "text": "Ya im here now when ready",
    "lookup": []
  },
  {
    "text": "@everyone gamerS?",
    "lookup": []
  },
  {
    "text": "Fuck Wrex, all my homies hate wrex, tried to kill him in a stand off and somehow convinced him to back down, lmfao\nAlso RIP ASH the space nazi @.lukedankwalker",
    "lookup": []
  },
  {
    "text": "I had the alien sex",
    "lookup": []
  },
  {
    "text": "@everyone CS gam,e",
    "lookup": []
  },
  {
    "text": "yes\nonline whenever",
    "lookup": []
  },
  {
    "text": "@everyone CS at 8pm\nSo far we got Tommy and Chris and me, I texted Luke as well\nno reply yet",
    "lookup": []
  },
  {
    "text": "@phantom_cooper hello",
    "lookup": []
  },
  {
    "text": "@phantom_cooper dust",
    "lookup": []
  },
  {
    "text": "@foolishwizrd ???????????????????",
    "lookup": []
  },
  {
    "text": "we were typing to you in game and you didnt reply 😦",
    "lookup": []
  },
  {
    "text": "He's Buma squad not Burna Squad\nLol",
    "lookup": []
  },
  {
    "text": "@everyone maybe cs at 8pm?",
    "lookup": []
  },
  {
    "text": "Yee that's why I said maybe 8\nIdk I gotta finish some work then down to gsme\nYo @foolishwizrd are there any \"illegal\" builds in snap ship tactics? Like the bulkhead, you only get 1 per saber, so if you get the fleet pack you'd have 2. But what if you wanted to make a build that for some reason had 3 bulkheads.\nBuy an extra card pack for 10$ and just don't put it on the model but have extra cards?",
    "lookup": []
  },
  {
    "text": "Idk I'm not used to model games. But it seems weird that theoretically I could build a optimal OP build that would require me to get 2 or 3 of the same packs , eg to put 2 bulkheads on all 3 of my ships in a 3vs3. Maybe that is a good strategy or something but it's almost impossible to pull off IRL but easy in digital",
    "lookup": []
  },
  {
    "text": "Daum propro with the facts and logic",
    "lookup": []
  },
  {
    "text": "Nice nice thanks man",
    "lookup": []
  },
  {
    "text": "I was more thinking like \"how\" to get those bulkheads or solar panel parts/cards lol\nNot really if it's effective\nLike if I buy the fleet pack and wanted a solar panel on all 3 of my ships I couldn't I would need an additional pack\nYee I was thinking I'd be worth to buy more card packs just to have the options , and just not have them on the model",
    "lookup": []
  },
  {
    "text": "LOL I saw that , they are daily rewards for STL files for the extra parts",
    "lookup": []
  },
  {
    "text": "👍\nWill you have all the ships, like the fleet pack? Or just a few?\nWatching the vids and stuff and getting fomo from the fleet pack hahahah, like if I'm going in might as well go all the way",
    "lookup": []
  },
  {
    "text": "I got this tub of nerf guns in the closet I never use, so thinking I'd 'bargain' with gf that I'd sell them hahahah. I would need the space anyways to store them\nYee the 2vs 1 lol",
    "lookup": []
  },
  {
    "text": "im on\ntexted luke",
    "lookup": []
  },
  {
    "text": "no reply\nmaybe we wait another hour\nyee im here, if its just me n you maybe we wait, ill play mass effect\nnot even pro here and he said 830",
    "lookup": []
  },
  {
    "text": "im here as well\n@phantom_cooper @.lukedankwalker @theswagengine",
    "lookup": []
  },
  {
    "text": "@everyone We are starting CS in 2 min, join up",
    "lookup": []
  },
  {
    "text": "@everyone second game starting hello????\nCS",
    "lookup": []
  },
  {
    "text": "Not me",
    "lookup": []
  },
  {
    "text": "Gamers , assemble",
    "lookup": []
  },
  {
    "text": "I redownloaded table top simulator and downloaded the snap ship tactics demo",
    "lookup": []
  },
  {
    "text": "im on\nmass effect",
    "lookup": []
  },
  {
    "text": "nope we just did",
    "lookup": []
  },
  {
    "text": "@foolishwizrd Luke and I going to try snap ships on table top simulator tonighyt",
    "lookup": []
  },
  {
    "text": "can thursters etc count as systems too?\nor cockpit, thruster, wings are their own catagory, and everything else is systems",
    "lookup": []
  },
  {
    "text": "yee",
    "lookup": []
  },
  {
    "text": "Paul Allen wtf",
    "lookup": []
  },
  {
    "text": "Just had a few hours nap\nGetting up now",
    "lookup": []
  },
  {
    "text": "look at us, a couple of boys, nay, a couple of MEN",
    "lookup": []
  },
  {
    "text": "we're here chris",
    "lookup": []
  },
  {
    "text": "what is this, some kind of Jolly Cooperators discord?",
    "lookup": []
  },
  {
    "text": "hello\ni am here",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker",
    "lookup": []
  },
  {
    "text": "No Luke dankwaller yet? I'm making food with gf still",
    "lookup": []
  },
  {
    "text": "1am theb\nI'll be there",
    "lookup": []
  },
  {
    "text": "@everyone CS soon hello?",
    "lookup": []
  },
  {
    "text": "DND till 12",
    "lookup": []
  },
  {
    "text": "we still doing dnd\nchris, me, proitim, lukle",
    "lookup": []
  },
  {
    "text": "I think we'll be ready soon\nWe are wrapping up",
    "lookup": []
  },
  {
    "text": "@foolishwizrd Still figuring out what I want to buy, but realized something, if you want to run 4 Lance's , you don't need 4 Lance sets, you need 2, because each comes with 2 chassis cards. So if you have a falix and sabre, you can run 4 Lance's , 2 model A and 2 model B, but you need sabre and falix wings, thrusters, weapons etc. If you wanted 4 stock Lance's it wouldn't work, but you could make it work if you tweak the builds.",
    "lookup": []
  },
  {
    "text": "Nah it's probably system ,32 using all your cpu",
    "lookup": []
  },
  {
    "text": "When gamers\nI just got up from a 5 hour nap\nJust setting dinner etc",
    "lookup": []
  },
  {
    "text": "Hellos",
    "lookup": []
  },
  {
    "text": "im in\n@foolishwizrd  im about to back the kickstarter\nif you want to join discord and see what ive selected\nim getting 2 of everything plus 1 of all the cards on their own, but im picking up the falix/wasp kits off amazon usa because its about 10$ cheaper that way, and then i get the models now and have something till next year\nso i will have 2 of every ship, but 3 of every card\nmight as well for 10$ each more, i mean thats really the thing you guys worked on anyways not the toy, and then i can do crazy things like 3 missiles launchers on a saber",
    "lookup": []
  },
  {
    "text": "The great missile debate",
    "lookup": []
  },
  {
    "text": "Apparently Adam Sandler was at milestones in Guelph",
    "lookup": []
  },
  {
    "text": "@foolishwizrd shotgun is so OP, that they go and add a second one to the starter pack LMFAO",
    "lookup": []
  },
  {
    "text": "@everyone huh",
    "lookup": []
  },
  {
    "text": "What happened to @.lukedankwalker",
    "lookup": []
  },
  {
    "text": "Idk thought it was dnd night for him because he said \"I can't wait\" but it's Tuesday lol\n@.lukedankwalker ? @phantom_cooper ?",
    "lookup": []
  },
  {
    "text": "Nope\n@everyone boot\nrip\nguess no game",
    "lookup": []
  },
  {
    "text": "@!foo\n@foolishwizrd hello?",
    "lookup": []
  },
  {
    "text": "Yo\nChris is going to the CON\n@.lukedankwalker CS?",
    "lookup": []
  },
  {
    "text": "rip",
    "lookup": []
  },
  {
    "text": "Understandable",
    "lookup": []
  },
  {
    "text": "Oui oui\nClassic",
    "lookup": []
  },
  {
    "text": "When the ciesta",
    "lookup": []
  },
  {
    "text": "Where he go?",
    "lookup": []
  },
  {
    "text": "Thats not true, thats impossible\nMy Amazon snap ships ordered on monday havent shipped yet, and says will be here Aug 8th",
    "lookup": []
  },
  {
    "text": "where\nare\nthe\ngamers",
    "lookup": []
  },
  {
    "text": "13-12",
    "lookup": []
  },
  {
    "text": "Get a bulkhead you bulkhead",
    "lookup": []
  },
  {
    "text": "@everyone cs?",
    "lookup": []
  },
  {
    "text": "huh",
    "lookup": []
  },
  {
    "text": "When gamer time?\nI might go back to sleep for a few hours",
    "lookup": []
  },
  {
    "text": "@everyone where the gaMERS",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker",
    "lookup": []
  },
  {
    "text": "rip\n@tad19 @joeliepolieolie69\n???",
    "lookup": []
  },
  {
    "text": "ya\n@tad19 @joeliepolieolie69",
    "lookup": []
  },
  {
    "text": "Not yet",
    "lookup": []
  },
  {
    "text": "My stomach killing me, been laying down\nLater for me still",
    "lookup": []
  },
  {
    "text": "5-10 min?\nI'll get up\nOk\nI'll come",
    "lookup": []
  },
  {
    "text": "im in",
    "lookup": []
  },
  {
    "text": "Spending the money",
    "lookup": []
  },
  {
    "text": "Finished my model\nImperial Light Cruiser\nStanding by\n1:492 scale\n265 pieces",
    "lookup": []
  },
  {
    "text": "K",
    "lookup": []
  },
  {
    "text": "wowzers\nim here boys",
    "lookup": []
  },
  {
    "text": "THE BOYS",
    "lookup": []
  },
  {
    "text": "brb",
    "lookup": []
  },
  {
    "text": "Mass errect",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker want to do a mid day CS?",
    "lookup": []
  },
  {
    "text": "Kk\nComin",
    "lookup": []
  },
  {
    "text": "Later",
    "lookup": []
  },
  {
    "text": "No bubble wrap in the thin ass Amazon bag\nRip\nOne of the boxes busted open at the top, but looks ok",
    "lookup": []
  },
  {
    "text": "Going to nap for a bit then I'll be back for CS and mass effect",
    "lookup": []
  },
  {
    "text": "Eta is now",
    "lookup": []
  },
  {
    "text": "???",
    "lookup": []
  },
  {
    "text": "?\nBruh\nI thought you're a computer man\nGonna go to sleep now and forever hold my peace\nTornado / thunder storm coming so expecting power and internet to go out lol",
    "lookup": []
  },
  {
    "text": "Ya but the issue was packet loss / lag",
    "lookup": []
  },
  {
    "text": "I'm coming",
    "lookup": []
  },
  {
    "text": "they were a 5 stack loosing to us, and then one awped the other on round start to get kicked, next round they surrendered\nwhy the fuck was i in this game lmfaoooo",
    "lookup": []
  },
  {
    "text": "Y",
    "lookup": []
  },
  {
    "text": "Later",
    "lookup": []
  },
  {
    "text": "That was a quick retirement",
    "lookup": []
  },
  {
    "text": "huh",
    "lookup": []
  },
  {
    "text": "jesus",
    "lookup": []
  },
  {
    "text": "jesus man stop looooooosing\nits 10:30 lets wait for luke\nim playing mass effect",
    "lookup": []
  },
  {
    "text": "think im going to head to bed",
    "lookup": []
  },
  {
    "text": "booting up\n@.lukedankwalker",
    "lookup": []
  },
  {
    "text": "DUDE WHAT THE ACTUAL FUCK JUST HAPPENED",
    "lookup": []
  },
  {
    "text": "These absolute cucks\nthese absolute animal idiots\nNow i have to wait all the way till monday..............",
    "lookup": []
  },
  {
    "text": "From FedEx?\nNever heard of that\nPicking it up from the sorting facilities?\nYa wtf\nIt's like he turned around and went nope too hot today not gonna bother\nOr some shit",
    "lookup": []
  },
  {
    "text": "It would take me an hour round trip to go to Cambridge fedex\nSo probably 15$ in gas lol",
    "lookup": []
  },
  {
    "text": "i ordered monday early am, and it didnt ship till wedensday, now its going to sit in cambridge till monday night like wtf\nvalve wtf\nshoulda shipped it tuesday",
    "lookup": []
  },
  {
    "text": "Just woke up",
    "lookup": []
  },
  {
    "text": "I partially retract my statement, but still wtf\nthey delivered it at 7pm, ive been asleep, its been outside for 8 hours and its been raining all week, good thing it didnt rain tonight\nabsoulte idiots",
    "lookup": []
  },
  {
    "text": "Purolator sucks, my office will ship me stuff with purolator, and they wont deliver it , they will place it at their 'pickup point' which is 10 minutes FURTHER from my office",
    "lookup": []
  },
  {
    "text": "For now\nI'm down for games whenever\nAbout to play some vr",
    "lookup": []
  },
  {
    "text": "Just played cod world at war zombies\nThe og map\nI got to round 10 lol",
    "lookup": []
  },
  {
    "text": "Gonna go to the mall, later",
    "lookup": []
  },
  {
    "text": "I'm out of the house",
    "lookup": []
  },
  {
    "text": "Rip",
    "lookup": []
  },
  {
    "text": "I'll be gaming most of the day, working on oncall stuff",
    "lookup": []
  },
  {
    "text": "Are we playing CS before dnd?\nI'm playing VR, would be down for 2 games , so 7:30-9?\nOr 7:15-9\nMessage me on steam if we are",
    "lookup": []
  },
  {
    "text": "Ok\nBootin",
    "lookup": []
  },
  {
    "text": "hello\n@everyone boot",
    "lookup": []
  },
  {
    "text": "RIP",
    "lookup": []
  },
  {
    "text": "Nope*\nWe did 2 already\nDnd",
    "lookup": []
  },
  {
    "text": "DND\nwe all in dnd\nluke and pro in dnd too goof\nthis server has a strict 'no feet pics' rule",
    "lookup": []
  },
  {
    "text": "How can he be that rank",
    "lookup": []
  },
  {
    "text": "Placing bets on what foolishs rank gonna be",
    "lookup": []
  },
  {
    "text": "When gamers\n@everyone when gamers\nGonna sleep for a bit",
    "lookup": []
  },
  {
    "text": "Huh",
    "lookup": []
  },
  {
    "text": "Now the entire ranking system is busted, people with high ranks are doing jack shit",
    "lookup": []
  },
  {
    "text": "Gonna tell the world what your rank is?",
    "lookup": []
  },
  {
    "text": "Well\nIs it that time already?\n@.lukedankwalker @joeliepolieolie69 @phantom_cooper ?\nIdk\nIt says he's active on discord\nAnd he's been posting csgo games all day",
    "lookup": []
  },
  {
    "text": "@everyone CS time?",
    "lookup": []
  },
  {
    "text": "@tad19 @joeliepolieolie69 @phantom_cooper",
    "lookup": []
  },
  {
    "text": "I'm booting",
    "lookup": []
  },
  {
    "text": "@tad19 ????\nyou stopped replying",
    "lookup": []
  },
  {
    "text": "me and luke in a game\nafter round 2",
    "lookup": []
  },
  {
    "text": "hello",
    "lookup": []
  },
  {
    "text": "jus got mcdonalds\nluke is afk it seems\nmight rest a bit then play VR half life alyx\ni could stream and discord from VR if yall want\nwatching youtube and digesting first",
    "lookup": []
  },
  {
    "text": "I ain't gaming till at least midnight, I gotta work\nI might do one around 12-12:30 when Luke's on",
    "lookup": []
  },
  {
    "text": "@everyone I could do one now if we're ready\nI executed a query and it's gonna take forever to run\nHuh",
    "lookup": []
  },
  {
    "text": "Huh\nDid you at me then un at me",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker @foolishwizrd did you know you can play into the breach on mobile from Netflix?\nDid you know Netflix had games on its android / iPhone app?\nI didnt",
    "lookup": []
  },
  {
    "text": "@foolishwizrd @.lukedankwalker we booting?\n@everyone we booting",
    "lookup": []
  },
  {
    "text": "Don't fuck it up\nWhere's luke",
    "lookup": []
  },
  {
    "text": "Ok\nI texted him, no reply yet\nHe's active on discord",
    "lookup": []
  },
  {
    "text": "True\nUr right",
    "lookup": []
  },
  {
    "text": "I'm still working\n@ me when Luke comes\nWow",
    "lookup": []
  },
  {
    "text": "i post screenshots so i can check ranks / stacks later on",
    "lookup": []
  },
  {
    "text": "Bruh\nGo to sleep\n🤣\nHe down ranked\nPro don't do it",
    "lookup": []
  },
  {
    "text": "Bruh\nTime to bait the team",
    "lookup": []
  },
  {
    "text": "Nah\nBruh",
    "lookup": []
  },
  {
    "text": "Now THATS Chinese",
    "lookup": []
  },
  {
    "text": "Wait for the gamets\nGamers",
    "lookup": []
  },
  {
    "text": "Hello\n@everyone hello booting I'm dad",
    "lookup": []
  },
  {
    "text": "@joeliepolieolie69 @.lukedankwalker",
    "lookup": []
  },
  {
    "text": "be back later",
    "lookup": []
  },
  {
    "text": "the one guys name\nyour 2nd place guy",
    "lookup": []
  },
  {
    "text": "Hi",
    "lookup": []
  },
  {
    "text": "5 year alt\nYeaj\nComin",
    "lookup": []
  },
  {
    "text": "Hello @everyone",
    "lookup": []
  },
  {
    "text": "I see @foolishwizrd @.lukedankwalker @theswagengine @tad19 all active\nThat should mean it's time\nJerry active too, wild card",
    "lookup": []
  },
  {
    "text": "im booting\ngonna do a short game to warmup",
    "lookup": []
  },
  {
    "text": "that was my 2\nim gonna work",
    "lookup": []
  },
  {
    "text": "Ok, that was always allowedddd\nGoing to bed\nDrinking water, going to bed on time\nProbably\nRound 4\nI'm tired as shit 24/7",
    "lookup": []
  },
  {
    "text": "Dnd",
    "lookup": []
  },
  {
    "text": "dnd",
    "lookup": []
  },
  {
    "text": "12",
    "lookup": []
  },
  {
    "text": "Nice\nThat means skins going up in price right?",
    "lookup": []
  },
  {
    "text": "@everyone gamer time?",
    "lookup": []
  },
  {
    "text": "Im booting so hard",
    "lookup": []
  },
  {
    "text": "Im uninstalling",
    "lookup": []
  },
  {
    "text": "I don't listen to ye-zey",
    "lookup": []
  },
  {
    "text": "Bruh I don't get the pings when you do here, you gotta do everyone\nHere is just people currently online on discord\n@everyone CS?",
    "lookup": []
  },
  {
    "text": "not yet\nNew update, new maps\n10 year birthday coin\nRIP CLIMB",
    "lookup": []
  },
  {
    "text": "hello\nno ones here\nalso do @everyone not @here\n@tad19 @joeliepolieolie69 @foolishwizrd @phantom_cooper @.lukedankwalker\nhello\nhellooooooooooo",
    "lookup": []
  },
  {
    "text": "Get your simp wallets out\n@.lukedankwalker @theswagengine  @phantom_cooper",
    "lookup": []
  },
  {
    "text": "are we gaming?\ni texted luke no reply\nassume he is asleep\nim about to start a solo\nChris afk too",
    "lookup": []
  },
  {
    "text": "ive been here since 8pm, god daum shoulda just done a solo",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker\n@.lukedankwalker\n@.lukedankwalker",
    "lookup": []
  },
  {
    "text": "nope that was 4",
    "lookup": []
  },
  {
    "text": "(Period)",
    "lookup": []
  },
  {
    "text": "What is your major malfunction solider",
    "lookup": []
  },
  {
    "text": "♿ <- you're team",
    "lookup": []
  },
  {
    "text": "Working, not tonight",
    "lookup": []
  },
  {
    "text": "Let me know if we get any downers\nDown ranks",
    "lookup": []
  },
  {
    "text": "I might do 1 if I can finish this piece I'm working on soon\nYa\nWhat's the status",
    "lookup": []
  },
  {
    "text": "Let me know when to boot",
    "lookup": []
  },
  {
    "text": "Ok",
    "lookup": []
  },
  {
    "text": "Not yet",
    "lookup": []
  },
  {
    "text": "Found @foolishwizrd 's alt\nHe's in my IT town hall lol",
    "lookup": []
  },
  {
    "text": "im going to do a cs\n@everyone cs",
    "lookup": []
  },
  {
    "text": "im in a game\nup 9-6",
    "lookup": []
  },
  {
    "text": "12-7",
    "lookup": []
  },
  {
    "text": "14-8",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker  bruh you started one?\nim 14-11",
    "lookup": []
  },
  {
    "text": "??????????????\nfrom 14-8 to 15-15, we threw so hard\nblue and green were gamer girls and they STUNK\nguess we waiting for luke now\nhes 6-7",
    "lookup": []
  },
  {
    "text": "hes down 8-9 now",
    "lookup": []
  },
  {
    "text": "@tad19 @joeliepolieolie69 @theswagengine we need 1 more",
    "lookup": []
  },
  {
    "text": "@phantom_cooper quit goofing , get in discord",
    "lookup": []
  },
  {
    "text": "Not gaming tonight",
    "lookup": []
  },
  {
    "text": "I'm pirating \"Into the Radius VR\"\nUsing a direct download cause I don't have my VPN right now",
    "lookup": []
  },
  {
    "text": "We don't game till the sun goes down",
    "lookup": []
  },
  {
    "text": "It works 😎 gonna play it tonight or tomorrow",
    "lookup": []
  },
  {
    "text": "I'm playing VR, might play CS in 1-2 hrs",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker ?",
    "lookup": []
  },
  {
    "text": "I hate this game\nbottom frag was brand new\nno one was listening\nthey would make it up cat and then,,,,, STOP\ni had to keep saying PUSH PUSH GO GO PUSH\nlike omg\nwe were up 8-13 and then i abandoned after we lost 6 in a row to 14-13\nfuck em\nAbsolute animal idiots",
    "lookup": []
  },
  {
    "text": "Not yet",
    "lookup": []
  },
  {
    "text": "Short game failure",
    "lookup": []
  },
  {
    "text": "what the actually heck man\nMG only gets TWO KILLS?!?!?!?",
    "lookup": []
  },
  {
    "text": "@everyone cs, i dont work tomorrow",
    "lookup": []
  },
  {
    "text": "Who's here\n@.lukedankwalker ?",
    "lookup": []
  },
  {
    "text": "I'll see if he's down\nHe's coming\nWait for us @tad19",
    "lookup": []
  },
  {
    "text": "@tad19 ??",
    "lookup": []
  },
  {
    "text": "@tad19 hello??\nwe are booted\nwaiting for u",
    "lookup": []
  },
  {
    "text": "Looks like ranks are BACK on the menu boys",
    "lookup": []
  },
  {
    "text": "@phantom_cooper we are in one mang",
    "lookup": []
  },
  {
    "text": "YES\nHELLLO\nWEVE BEEN PLAYING SINCE 4",
    "lookup": []
  },
  {
    "text": "starting game soon\ni will be back at 720 to start the game",
    "lookup": []
  },
  {
    "text": "?",
    "lookup": []
  },
  {
    "text": "luke left without saying anything\nim gonna play vr",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker I just got up, what's the status",
    "lookup": []
  },
  {
    "text": "idk\nwhen i pinged luke he got off",
    "lookup": []
  },
  {
    "text": "Rip",
    "lookup": []
  },
  {
    "text": "Just got done some VR, going to bed\nPlayed into the radius about 8 hours total now. Just saved up and got a M4 with Elcan specter scope, laser, suppressor, and 4 30 round mags\nNow I'm broke though so didn't get any ammo\nGotta farm a bit tomorrow then I'm hitting up the factory to do a quest to level up the trader\nGonna plant a bomb and blow open a door and get a briefcase",
    "lookup": []
  },
  {
    "text": "Wow",
    "lookup": []
  },
  {
    "text": "Hello\nWhat's the status\nAlso lol you can press E on the nuke vents to open and close them?\nI'm booting",
    "lookup": []
  },
  {
    "text": "@tad19 ???",
    "lookup": []
  },
  {
    "text": "Classic projection from tad\n📽️",
    "lookup": []
  },
  {
    "text": "Yo\nAnother great day for me to bait Tad\nActually maybe ill switch it up and bait Luke today\nNo one online yet\nShould be room though later",
    "lookup": []
  },
  {
    "text": "Nah I can't bait everyone at the same time\nIt has to be a focused effort",
    "lookup": []
  },
  {
    "text": "In a bit",
    "lookup": []
  },
  {
    "text": "We bought \"here to slay\" it's a boardgame, pretty fun\nWe playing it 1v1",
    "lookup": []
  },
  {
    "text": "Yo\n?\nI won best 3/5\nOk",
    "lookup": []
  },
  {
    "text": "@everyone CS in 30",
    "lookup": []
  },
  {
    "text": "I need another 10-15",
    "lookup": []
  },
  {
    "text": "Yee\nBe right there\nSorry\nim here im booted",
    "lookup": []
  },
  {
    "text": "Huh",
    "lookup": []
  },
  {
    "text": "@everyone when queues then.",
    "lookup": []
  },
  {
    "text": "Ya but where is everyone\nHuh",
    "lookup": []
  },
  {
    "text": "hello",
    "lookup": []
  },
  {
    "text": "@everyone boot\nwe are here",
    "lookup": []
  },
  {
    "text": "\"going to go get water\"\nwhere are you getting water from",
    "lookup": []
  },
  {
    "text": "He was \"drunk\"\nI'm the top frag now 😎",
    "lookup": []
  },
  {
    "text": "Hoping for sober Luke tonight",
    "lookup": []
  },
  {
    "text": "Yo\nBlame tad",
    "lookup": []
  },
  {
    "text": "Tad yells at us when we do good",
    "lookup": []
  },
  {
    "text": "@everyone when cs",
    "lookup": []
  },
  {
    "text": "Ya\n?\nWhen\nI'm down\nJust wait for more of the gang",
    "lookup": []
  },
  {
    "text": "Hello\nI'm comin\n@everyone Time\nwe ready",
    "lookup": []
  },
  {
    "text": "go home, youre drunk",
    "lookup": []
  },
  {
    "text": "Making dinner then maybe",
    "lookup": []
  },
  {
    "text": "boot up",
    "lookup": []
  },
  {
    "text": "Yo",
    "lookup": []
  },
  {
    "text": "@everyone yo",
    "lookup": []
  },
  {
    "text": "@everyone when's gaming time",
    "lookup": []
  },
  {
    "text": "Where's the crew",
    "lookup": []
  },
  {
    "text": "Gamers\nWe gotta wait for someone to carry 🏋️",
    "lookup": []
  },
  {
    "text": "Finally a lifter\nLuke dank lifter\n@everyone boot",
    "lookup": []
  },
  {
    "text": "@joeliepolieolie69 eta?\nshould we do a short without you?",
    "lookup": []
  },
  {
    "text": "huh\ni wanna run to mcdonalds then im down\nya",
    "lookup": []
  },
  {
    "text": "@__honey__ @tad19 @joeliepolieolie69 @joebe2 and 1 more",
    "lookup": []
  },
  {
    "text": "im here",
    "lookup": []
  },
  {
    "text": "@foolishwizrd boot",
    "lookup": []
  },
  {
    "text": "rankup on a short game?????\n@foolishwizrd please\nboot\n@foolishwizrd boot, we about to start without you\nwhere you at",
    "lookup": []
  },
  {
    "text": "Are you nuts\nWe did 3\nI'd do 1 more dust",
    "lookup": []
  },
  {
    "text": "Ok",
    "lookup": []
  },
  {
    "text": "Hello\nNo baiting today\nToday's my rankup",
    "lookup": []
  },
  {
    "text": "When gamers\nTWELVE\nNo one plays dnd, they just say they do and cancel every week",
    "lookup": []
  },
  {
    "text": "?\n?",
    "lookup": []
  },
  {
    "text": "Ya",
    "lookup": []
  },
  {
    "text": "@everyone boot",
    "lookup": []
  },
  {
    "text": "Still no rankup\nwtf",
    "lookup": []
  },
  {
    "text": "Just woke up",
    "lookup": []
  },
  {
    "text": "Just making some food",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker",
    "lookup": []
  },
  {
    "text": "Yo wheres my rankup",
    "lookup": []
  },
  {
    "text": "oh hes getting on alright\nand gonna carry me to a W\nyup yup yup\noh no\ndrunk luke cant carry\nalright guess we do one soon",
    "lookup": []
  },
  {
    "text": "i need a win\nrankup season",
    "lookup": []
  },
  {
    "text": "@foolishwizrd get in here",
    "lookup": []
  },
  {
    "text": "@theswagengine are you proud dad?\n♿ <- you're team",
    "lookup": []
  },
  {
    "text": "????????????????????????",
    "lookup": []
  },
  {
    "text": "literally cant get in a game\nrestarted my game",
    "lookup": []
  },
  {
    "text": "It says 5000 peolle\nGamer time later",
    "lookup": []
  },
  {
    "text": "Hanging with gf, game later",
    "lookup": []
  },
  {
    "text": "@everyone  its time",
    "lookup": []
  },
  {
    "text": "I literally can not get into a game",
    "lookup": []
  },
  {
    "text": "13 min queue",
    "lookup": []
  },
  {
    "text": "my team is throwing\n???????????????????????\nwe were down 7-0 on a short dust",
    "lookup": []
  },
  {
    "text": "@everyone gamers please\n@.lukedankwalker",
    "lookup": []
  },
  {
    "text": "Bruh where was the invites\n@.lukedankwalker get in hjere\n@.lukedankwalker\n@.lukedankwalker\n@.lukedankwalker\ngood thing i got a alt now",
    "lookup": []
  },
  {
    "text": "Luke is MIA\nassumed dead",
    "lookup": []
  },
  {
    "text": "@foolishwizrd @phantom_cooper",
    "lookup": []
  },
  {
    "text": "@foolishwizrd man come onm",
    "lookup": []
  },
  {
    "text": ".............",
    "lookup": []
  },
  {
    "text": "CS after dnd",
    "lookup": []
  },
  {
    "text": "cs\n@phantom_cooper get on\n@!pro\n@phantom_cooper @phantom_cooper @phantom_cooper",
    "lookup": []
  },
  {
    "text": "???",
    "lookup": []
  },
  {
    "text": "♿ <- you're team",
    "lookup": []
  },
  {
    "text": "Our bottom frag team killed the other random on round 1, round 2 the random team kills him at the begining of the round and gets kicked. So we are down 1-0 and now its a 5v4, i vote to surrender and then the team was aids/ass the whole game\nthey told me just get kills and its ok we'll win, i top frag\nfucking aids\nour bottom frag apparently never plays FPS games and has a 5 year coin, he was so ass, i was like great so its a 5v3 really",
    "lookup": []
  },
  {
    "text": "im on cooldown again\ngot 4 wins now",
    "lookup": []
  },
  {
    "text": "Out right now, later",
    "lookup": []
  },
  {
    "text": "Down to game, can't use my alt till 2am though\n@.lukedankwalker",
    "lookup": []
  },
  {
    "text": "Rip\nGood luck",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker ?",
    "lookup": []
  },
  {
    "text": "What\nYou said no\nDon't do it",
    "lookup": []
  },
  {
    "text": "Don't give in to the dark side",
    "lookup": []
  },
  {
    "text": "I'll be getting on CS soon",
    "lookup": []
  },
  {
    "text": "Ya\n@.lukedankwalker  im booted",
    "lookup": []
  },
  {
    "text": "5am cs be like",
    "lookup": []
  },
  {
    "text": "nvm beat em on the rematch",
    "lookup": []
  },
  {
    "text": "Just woke up",
    "lookup": []
  },
  {
    "text": "Ya",
    "lookup": []
  },
  {
    "text": "Booting",
    "lookup": []
  },
  {
    "text": "Lukes here\nin spirit",
    "lookup": []
  },
  {
    "text": "My team threw round 1, and was toxic / i think hacking or bunnyhop scripting\nThey teamkilled me when i was planting the bomb, then ran around for a minute before planting again\nthen they threateded to kick me even though we were winning the entire time and i was top frag\nso i just shut up\nfucking toxic game\nim playing on my alt so cant play unless 5 man\ngotta get it ranked quick\n4 more wins",
    "lookup": []
  },
  {
    "text": "BRUH\nWhat a fucking drop\nAlt account for the win\nive already gotten 2 > 2$ drops",
    "lookup": []
  },
  {
    "text": "our bottom two players had 0 kills and one abandoned and went to bed, he was queued with our other bottom frag\nthe enemy orange carried them the whole game, but the rest of his 5 stack sucked so bad, we won a 4vs5 lol",
    "lookup": []
  },
  {
    "text": "Are you alive now?\n@.lukedankwalker",
    "lookup": []
  },
  {
    "text": "Is it gamer time\n@.lukedankwalker ?\nMains?",
    "lookup": []
  },
  {
    "text": "Rip\nHe's dead Jim",
    "lookup": []
  },
  {
    "text": "I'm in for 12, If we have 5 I'd like to use my alt, almost got it ranked",
    "lookup": []
  },
  {
    "text": "Coming\nWaiting for luke\n@.lukedankwalker @phantom_cooper\nand wives boyfriends",
    "lookup": []
  },
  {
    "text": "some people even have plants they treat as kids",
    "lookup": []
  },
  {
    "text": "just by 1\nwe faced the same team 2x in a row\nwe think they smurfin\nnot me",
    "lookup": []
  },
  {
    "text": "My alt isn't ranked yet so not smurfing",
    "lookup": []
  },
  {
    "text": "Gamer?",
    "lookup": []
  },
  {
    "text": "the shittiest shit match making",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker \"i just need one more win to get a rank\"",
    "lookup": []
  },
  {
    "text": "@everyone Might have lost 3 in a row on the ALT, but won on the MAIN BABY\n@theswagengine are you proud dad\nNew highest rank, I got MG1 on the rank reset, went down to Gold4, and now back to MG1 and then legit rankup to MG2",
    "lookup": []
  },
  {
    "text": "@phantom_cooper our team was shitters/throwing/trolling and Luke abandoned",
    "lookup": []
  },
  {
    "text": "My alt isn't ranked yet\nBruh\nThat's my main",
    "lookup": []
  },
  {
    "text": "Huh",
    "lookup": []
  },
  {
    "text": "@everyone CS?",
    "lookup": []
  },
  {
    "text": "Wow RIPPPPPPPP\nHonestly, some of the worst games ive ever played trying to get my alt a rank lmfao\nToxic teammates, etc etc etc",
    "lookup": []
  },
  {
    "text": "I didn't purposely make my alt silver master though hahaa\nJust got home from a thing\nNo no, there were MAJOR L's as a 5 stack with my alt\n🤣\nTruth\nI solo q'd to MG2\nJust got home gotta see what we're doing",
    "lookup": []
  },
  {
    "text": "gf's been drinking so I think she's going to bed",
    "lookup": []
  },
  {
    "text": "I'm booted\nY'all need to add my alt as a friend if you haven't\nI can't see anyone online\ngotta rank my alt up\ngotta rank up to rank down",
    "lookup": []
  },
  {
    "text": "accept my application to burna squad",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker\nNo more silver alt",
    "lookup": []
  },
  {
    "text": "dnd",
    "lookup": []
  },
  {
    "text": "@everyone cs\n@everyone booted",
    "lookup": []
  },
  {
    "text": "y",
    "lookup": []
  },
  {
    "text": "Sleeping\nHuh\nI was gonna shower first",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker @joeliepolieolie69\nLets do 1 main game, then an alt game",
    "lookup": []
  },
  {
    "text": "im in game booted",
    "lookup": []
  },
  {
    "text": "boot up",
    "lookup": []
  },
  {
    "text": "♿ <- you're team",
    "lookup": []
  },
  {
    "text": "Probably a no from me",
    "lookup": []
  },
  {
    "text": "Y'all still awake lol",
    "lookup": []
  },
  {
    "text": "@joeliepolieolie69 in a CS?\nIt says jizz is online in cs",
    "lookup": []
  },
  {
    "text": "Ya'll stink\n@.lukedankwalker",
    "lookup": []
  },
  {
    "text": "Gamer time in 1.5 hr",
    "lookup": []
  },
  {
    "text": "Holy\nShit\nWe all getting rankup\nWe all getting rankup we don't deserve 🤣\nChris ranked up 2x in 3 games as well",
    "lookup": []
  },
  {
    "text": "Remember when we were all stuck in silver + gn1\nI can do one on the alt accounts\nGetting tired\n@foolishwizrd do you \"have covid\" or you got the vid\nDying?\nIsn't global like 0.1%?",
    "lookup": []
  },
  {
    "text": "Think I'm going to bed",
    "lookup": []
  },
  {
    "text": "Bruh what\nI think this is the second time using that excuse 🤣\nI only need my phone to login when I switch accounts, if I stay on the same it doesn't ask",
    "lookup": []
  },
  {
    "text": "Im booting a game",
    "lookup": []
  },
  {
    "text": "went from 7-1 losing to 16-7 winning because for some reason 2 of them abandoned at the same time and it became a 3vs5\nour two bottom frags had -1 and 0 kills when they abandoned lmfao\nthen we steam rolled to a 16-7",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker  u up?\ngreen circle",
    "lookup": []
  },
  {
    "text": "what happened",
    "lookup": []
  },
  {
    "text": "I'm down to game CSGO on alt or main if you get it sorted out\nI'll brb",
    "lookup": []
  },
  {
    "text": "We starting one\nOn the main",
    "lookup": []
  },
  {
    "text": "going out tonight too so maybe so cs",
    "lookup": []
  },
  {
    "text": "Maybe in 30 min",
    "lookup": []
  },
  {
    "text": "I won't be home yet",
    "lookup": []
  },
  {
    "text": "Just got home",
    "lookup": []
  },
  {
    "text": "im here",
    "lookup": []
  },
  {
    "text": "♿",
    "lookup": []
  },
  {
    "text": "@phantom_cooper boot",
    "lookup": []
  },
  {
    "text": "@tad19  we did like 5 today, and dnd",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker",
    "lookup": []
  },
  {
    "text": "Is this due to workplace hazards or due to other similarities between linecooks?",
    "lookup": []
  },
  {
    "text": "Nope",
    "lookup": []
  },
  {
    "text": "Sex , drugs, and rock and roll baby",
    "lookup": []
  },
  {
    "text": "Proof or no proof",
    "lookup": []
  },
  {
    "text": "Gonna sleep now for a bit, gamer time later",
    "lookup": []
  },
  {
    "text": "@everyone gamer?",
    "lookup": []
  },
  {
    "text": "Gamers\nWhat's it take\n@.lukedankwalker I thought you said you were 9-5 now",
    "lookup": []
  },
  {
    "text": "Alright I guess no gamers then",
    "lookup": []
  },
  {
    "text": "Rip",
    "lookup": []
  },
  {
    "text": "Rip x2\nTime for some turtle beaches",
    "lookup": []
  },
  {
    "text": "Me_irl - \"do you want to watch Andor?\"\ngf - \"and or what\"",
    "lookup": []
  },
  {
    "text": "Lol the scoreboard is broke\n@.lukedankwalker gamer?",
    "lookup": []
  },
  {
    "text": "I thought Luke is home, no reply, he's got dnd later, I'm down for now",
    "lookup": []
  },
  {
    "text": "Green bubble",
    "lookup": []
  },
  {
    "text": "Huh",
    "lookup": []
  },
  {
    "text": "@everyone ?",
    "lookup": []
  },
  {
    "text": "Luke keeps going green / yellow, think he's mia",
    "lookup": []
  },
  {
    "text": "Rip",
    "lookup": []
  },
  {
    "text": "my VAC is acting up",
    "lookup": []
  },
  {
    "text": "my lowercase h key isnt working in csgo lmfao\nwon on alt",
    "lookup": []
  },
  {
    "text": "Won the main too",
    "lookup": []
  },
  {
    "text": "I don't care about politics I care about killing GAMERS\nHappy or sad\ntake what back? lmgfao",
    "lookup": []
  },
  {
    "text": "Alright, you got me\n🤣\nNice super blurry graduation pic lmfao\nIntel gathering professional consultant and electronic surveillance expert.\nLMFAOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO",
    "lookup": []
  },
  {
    "text": "this boomer\n-  Professional competitive target shooting (hand guns/long riffles 95% accuracy)\nWow, we got a gamer over here\nwhats his K/D in MW2",
    "lookup": []
  },
  {
    "text": "Dood is wearing a wireless headset in all his photos",
    "lookup": []
  },
  {
    "text": "my new catch phrase\nIT IS OFFICAL AND I DID IT FOR OUR CHILDREN",
    "lookup": []
  },
  {
    "text": "nah we done after 1\nHoping I get my DMG in about 2 more wins 8)",
    "lookup": []
  },
  {
    "text": "gf going away for the weekend, where the gamers at\nI'm out for blood, gonna get me a DMG",
    "lookup": []
  },
  {
    "text": "Yup\nLol",
    "lookup": []
  },
  {
    "text": "@everyone CS?",
    "lookup": []
  },
  {
    "text": "Ye\nWe do a little mains, we do a little alts\nJoe get dmg",
    "lookup": []
  },
  {
    "text": "@everyone what's up chooms",
    "lookup": []
  },
  {
    "text": "@__honey__ @phantom_cooper",
    "lookup": []
  },
  {
    "text": "ye we done",
    "lookup": []
  },
  {
    "text": "The 2nd dr agreed?",
    "lookup": []
  },
  {
    "text": "Just woke up",
    "lookup": []
  },
  {
    "text": "Huh\nSounds alot like first map",
    "lookup": []
  },
  {
    "text": "office mains",
    "lookup": []
  },
  {
    "text": "Making food",
    "lookup": []
  },
  {
    "text": "doing another cs",
    "lookup": []
  },
  {
    "text": "classic midnight cs\nthats two in a row\n5 man of way higher rank\none of our guys abandoned like 8 rounds from the end",
    "lookup": []
  },
  {
    "text": "This is my alt that is gold 1 apparently",
    "lookup": []
  },
  {
    "text": "Nice",
    "lookup": []
  },
  {
    "text": "Nice\nDoing some on-call stuff , I'll be down later\nLet's wait for Luke he'll be home earlier",
    "lookup": []
  },
  {
    "text": "Ciesta",
    "lookup": []
  },
  {
    "text": "I'm coming\nWhat the heck, you can't do a \"reach the voice channel before joe\" without doing a @everyone",
    "lookup": []
  },
  {
    "text": "I lagged out",
    "lookup": []
  },
  {
    "text": "Reported",
    "lookup": []
  },
  {
    "text": "Sorry\nNo black egirls on twitch\nNot white = black",
    "lookup": []
  },
  {
    "text": "If you get hit by a bus you automatically pass all your exams 😱",
    "lookup": []
  },
  {
    "text": "He's walking here\nWhen cs\n@everyone boot",
    "lookup": []
  },
  {
    "text": "Hanging with gf now\nI'm out for now",
    "lookup": []
  },
  {
    "text": "I'd be down maybe 7:40 or 8, for 1\nDnd at 9",
    "lookup": []
  },
  {
    "text": "Probably 8 for me",
    "lookup": []
  },
  {
    "text": "I can do just before 8",
    "lookup": []
  },
  {
    "text": "@everyone time for one more",
    "lookup": []
  },
  {
    "text": "Im booted on the alt\nready to go\nwant to start queue by 8:05 @everyone\n\"Right wrist is safe just twisted my ankle so I can still game cs + DnD\"",
    "lookup": []
  },
  {
    "text": "@theswagengine 3 man with Scantron?\nalright last call starting one",
    "lookup": []
  },
  {
    "text": "Monday morning CS?\nI coulda cs'd",
    "lookup": []
  },
  {
    "text": "Dude what is with these ranks\n5 man vs 5 solo, and your highest rank is lower than their lowest , how does that make any sense, plus you have SILVERS",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker",
    "lookup": []
  },
  {
    "text": "Pvpve loot game like tarkov but dungeon crawling\nCurrently on beta\nI can in a few just gotta do dishes @everyone cs",
    "lookup": []
  },
  {
    "text": "Wait for me",
    "lookup": []
  },
  {
    "text": "@everyone booting",
    "lookup": []
  },
  {
    "text": "\"bottom of the leaderboard is a notoriously low ADR position\" -- @.lukedankwalker  probably because he sorts by ADR",
    "lookup": []
  },
  {
    "text": "Deploy the bear spray",
    "lookup": []
  },
  {
    "text": "Nice\nRound 2",
    "lookup": []
  },
  {
    "text": "@everyone when gamer time",
    "lookup": []
  },
  {
    "text": "@everyone ?\n@.lukedankwalker ?",
    "lookup": []
  },
  {
    "text": "Forgot luke not home till Close",
    "lookup": []
  },
  {
    "text": "@everyone huh?\ncs?",
    "lookup": []
  },
  {
    "text": "im booottteddd",
    "lookup": []
  },
  {
    "text": "brb 5 min",
    "lookup": []
  },
  {
    "text": "@foolishwizrd let me in bruh",
    "lookup": []
  },
  {
    "text": "Hanging with gf till she goes to bed, maybe 30 min\nTried out the archer\nHe spawns with the campfire which heals you if you rest at it, and he has a ability he can use 3x to heal 25hp",
    "lookup": []
  },
  {
    "text": "20 min",
    "lookup": []
  },
  {
    "text": "Booting",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker a game of CS before your dnd?",
    "lookup": []
  },
  {
    "text": "Classic",
    "lookup": []
  },
  {
    "text": "K",
    "lookup": []
  },
  {
    "text": "im cycling",
    "lookup": []
  },
  {
    "text": "Survived my first raid, killed a guy and got 2 green guns and green armor, and all 3 starting quests",
    "lookup": []
  },
  {
    "text": "cycle frontier\nfree to play\n2.0 just launched, with a wipe",
    "lookup": []
  },
  {
    "text": "Its like Darker Darker and Tarkov, but guns in space\nFeels like Apex mixed with tarkov\n3 man swuad",
    "lookup": []
  },
  {
    "text": "I mean let's go gamer time time to cycle\nCycle mains are back",
    "lookup": []
  },
  {
    "text": "@everyone early gamer time tonight, the cycle and cs\nFlex tomorrow so late night too\nProbably 4-5pm start",
    "lookup": []
  },
  {
    "text": "Only for the feds\nNice",
    "lookup": []
  },
  {
    "text": "This discord does not observe that holiday, because this discord is anti black, brown, yellow, and red people",
    "lookup": []
  },
  {
    "text": "Is it?\nI'm not RACIST I'm CHRISTIAN",
    "lookup": []
  },
  {
    "text": "Sorry I made a stop in Kitchener, 45 mun",
    "lookup": []
  },
  {
    "text": "im here\neatting dinner\nsorry we had a work bbq in kitchener at bingemans today, and i stayed extra late with gary, and then i wanted to go to the shoe store\nget me in next please @everyone",
    "lookup": []
  },
  {
    "text": "Yo\nIT XIDNT COME THROUGH",
    "lookup": []
  },
  {
    "text": "ill be back\ngoing to shower to try and stay up more",
    "lookup": []
  },
  {
    "text": "Oh I see how it is",
    "lookup": []
  },
  {
    "text": "@everyone gamers\nAll day every day\nIdk Luke probably home by 6, woolish fizzard is online",
    "lookup": []
  },
  {
    "text": "I'm playing The Cycle right now, down whenever",
    "lookup": []
  },
  {
    "text": "rip",
    "lookup": []
  },
  {
    "text": "Thought Thursday - sun is 9-5",
    "lookup": []
  },
  {
    "text": "ok",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker cs",
    "lookup": []
  },
  {
    "text": "Mauraders going early access on Oct 3rd",
    "lookup": []
  },
  {
    "text": "Going for groceries",
    "lookup": []
  },
  {
    "text": "@everyone what's everyone saying tonight",
    "lookup": []
  },
  {
    "text": "loooooool",
    "lookup": []
  },
  {
    "text": "wheres luke\nhuh\ny\n?????????????????????????????????????????????????????????????????????????????????????????",
    "lookup": []
  },
  {
    "text": "huh\ni booted",
    "lookup": []
  },
  {
    "text": "Chris and I are booted\nWhere's pro",
    "lookup": []
  },
  {
    "text": "@joeliepolieolie69 you coming?\nalts",
    "lookup": []
  },
  {
    "text": "Im doing a cs",
    "lookup": []
  },
  {
    "text": "We cycling",
    "lookup": []
  },
  {
    "text": "IM CYCLING\nluke in a game already",
    "lookup": []
  },
  {
    "text": "what game did you want to play?",
    "lookup": []
  },
  {
    "text": "Killed a 2 man who shot at me first 3 minutes before hand",
    "lookup": []
  },
  {
    "text": "No CS today",
    "lookup": []
  },
  {
    "text": "?\nCoulda had 10$ off but I opened TWO CSGO CASES\nRip",
    "lookup": []
  },
  {
    "text": "we did 1 a bit ago, sounds like thats it lol\nCache lost 12-16 and one guy left when he got knifed 2x in a row LMFAO\nat like 8-10",
    "lookup": []
  },
  {
    "text": "delete this\nare you crazy",
    "lookup": []
  },
  {
    "text": ".",
    "lookup": []
  },
  {
    "text": "Lol",
    "lookup": []
  },
  {
    "text": "About to do a little trolling",
    "lookup": []
  },
  {
    "text": "what a stupid fucking game\nthey had guys named I and II and one was auto muted\npretty sure they are throwing or hacking or idk\none of them abandoned once we started winning\nI guess they are de-ranking?",
    "lookup": []
  },
  {
    "text": "Apparently I got cheated on in the past few days",
    "lookup": []
  },
  {
    "text": "Bruh\nIt's those 9 assists\nDon't bottom frag tho 🥲",
    "lookup": []
  },
  {
    "text": "Truth",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker CS?",
    "lookup": []
  },
  {
    "text": "I'm going bowling Niko!",
    "lookup": []
  },
  {
    "text": "Wtf\nFishin",
    "lookup": []
  },
  {
    "text": "I got 9 days off starting Saturday\nAnd gf's going to BC to visit her friend monday-thursday\nSo party town",
    "lookup": []
  },
  {
    "text": "Well shes going with another friend so , sounds like a threesome",
    "lookup": []
  },
  {
    "text": "Just taking 3 days off but it works out to be 9 days due to the weekends, holiday, and my flex day",
    "lookup": []
  },
  {
    "text": "Yup",
    "lookup": []
  },
  {
    "text": "It's cause Tommy has HYGIENE",
    "lookup": []
  },
  {
    "text": "Joebe with the mirage top frag, suprising\n@tad19 wtf mang",
    "lookup": []
  },
  {
    "text": "L\nBruh shoulda stayed in town and go date the loney single women that couldnt go home for thanksgiving",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker ?",
    "lookup": []
  },
  {
    "text": "Where is everyone",
    "lookup": []
  },
  {
    "text": "Broke the loosing stream\nstreak",
    "lookup": []
  },
  {
    "text": "I think my main nvme ssd exploded\nI was gaming this morning, turned the game off, was sitting there and the power went out and I heard two explosions outside , probably transformers or something , then the power came back and my PC wouldn't boot and complaining about a bad drive and that I should replace it, and won't boot\n😦",
    "lookup": []
  },
  {
    "text": "I might have to rip the one I just got for the VR PC, and then reinstall windows etc, rip my data",
    "lookup": []
  },
  {
    "text": "Ya\nSamsung nvme 500gb 970 ssd, 4 years old\nShouldn't die like that\nIsn't it like 7 year warranty\nI have the PC in a surge protector",
    "lookup": []
  },
  {
    "text": "I can boot Ubuntu and access the drive in read only mode, it is saying windows is hybernated and can't mount\nNot sure what to do\nMaybe a way to save it, or I might just say fuck it and reinstall windows\nBackup the whole partition to one half of my new ssd",
    "lookup": []
  },
  {
    "text": "That's what IM SAYING\nIt's saying all 3 of my drives are hybernated and can't mount\nHave to mount in read only mode",
    "lookup": []
  },
  {
    "text": "All 3 of my harddrives in Linux are saying \"windows is hybernated, can't mount drive\". But the bios is saying the main SSD is iminant failure and I need to backup the data and replace the drive, and it's refusing to boot to windows at all\nBut I can mount the drive in read only mode in Linux and I can read the data\nYeah I solved that\nMy wallet isn't on the PC it's on the app, nicehash handles it\nThat's why it's 'nice'",
    "lookup": []
  },
  {
    "text": "I'm gonna rip the 1tb outta my VR PC, partition it in 2 spaces, then install windows on one, then copy the old drive which is 500gb into partion 2 on the 1tb, then I can sift through it\nLiterally, playing on it, turn game off, sitting at desktop, power out, power back, computer restarts, 'drive is faulty'\nPC is on a surge protector\nAnd I got a name brand power supply",
    "lookup": []
  },
  {
    "text": "10\nI got all 3 at the same time. Samsung nvme, Samsung SSD, and Seagate HDD. All 4 years old. And the nvme is the one that's saying it's bad",
    "lookup": []
  },
  {
    "text": "Turning the computer on, when it does it's self check, and I can't find a way past it, it's in bios, it says press F1 to go to setup that's it\nIt sounds like the bios thinks my ssd is gonna explode any second and it wants me to backup data if possible instead of booting to windows . Nah that's no option to skip\nBut I can access it in linux\nMaybe\nWarranty says 5 years or 300TB written, which ever comes first\nPretty sure I'm no where near 300tb\nNah my main drive\nI installed all my games to the second drice\nMain drive just has CS and cycle and that's about it",
    "lookup": []
  },
  {
    "text": "Yee\n🤷\nIt's probably on new egg",
    "lookup": []
  },
  {
    "text": "6/25/2018, cost me 260$ plus tax for a 500gb nvme",
    "lookup": []
  },
  {
    "text": "Yeah now it is\nThat was at the height of the nand shortage\nJust before covid and the GPU shortage\nWhat's going to be shortage next?",
    "lookup": []
  },
  {
    "text": "End of May I got a 1tb for 140$ same version Evo plus, so going to swap that\nFrom the VR pc\nThen I'll buy a new one for VR PC if needed after I wipe the drive\nSomehow gotta check the SMART stats and see how much data is written\nAnyways, drive gf to airport soon, then I gotta start working on that",
    "lookup": []
  },
  {
    "text": "Back\nProbably going to sleep",
    "lookup": []
  },
  {
    "text": "No, back from airport",
    "lookup": []
  },
  {
    "text": "Didnt start yet",
    "lookup": []
  },
  {
    "text": "Been sleeping since 8am",
    "lookup": []
  },
  {
    "text": "Gonna hit up the store for some food then I'm gonna get to it",
    "lookup": []
  },
  {
    "text": "Working on it",
    "lookup": []
  },
  {
    "text": "I got the VR computer back on so I got nicehash, steam, discord , etc on that working.",
    "lookup": []
  },
  {
    "text": "Rip see yas\nJust getting windows installed, it took me awhile to get it to start, i guess it didnt like my usb 3.0 or 3.1 ports",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker got windows running, Samsung says critical drive status but only 32tb written in 4 years. Warranty is 5 years or 300tb. See no where close, you said it would be close from caching etc",
    "lookup": []
  },
  {
    "text": "Samsung is saying the warranty is done through Newegg, which is weird\nI see nothing wrong other than \"critical warning\" ont he drive health. And the drive is read only mode, I can't write / delete anything. I googled and it said it's a feature to protect your data when the drive is faulty.",
    "lookup": []
  },
  {
    "text": "I got CSgo running now. I got most things reinstalled but still a few left plus headphone / mouse / keyboard settings.",
    "lookup": []
  },
  {
    "text": "Steam is nice, you just copy the folder over and all games work. Ea is ok, you have to 're download' every game but if you point it to the same folder it verifys and you're good. Epic games is a bitch, you have to download all games then either pause and copy over the game one by one then resume, or just say fuck it and reinstall\nGot CS and Cycle working, got my mass effect saves and got that working, thats about it thats critical",
    "lookup": []
  },
  {
    "text": "Newegg will RMA the drive 🎉",
    "lookup": []
  },
  {
    "text": "Yee\nYeah it's a lot, that would be like filling the entire drive 10 times a month for the entire 5 years.",
    "lookup": []
  },
  {
    "text": "Yee got lucky\nNothing super important, but would suck to loose my mass effect saves etc\nGoing to stop by work in a bit to say hi, then get some food and come home and sleep. I'll try to be up by 10pm maybe for gamer time all night",
    "lookup": []
  },
  {
    "text": "Bruh\n32 tbw\n32 terabytes wriiten\nOutta 300\nOn a 500gb drive",
    "lookup": []
  },
  {
    "text": "Bruh\nI'm gonna team kill you\nBruh\n♿ <- you're team\nSleeping, see ya guys later",
    "lookup": []
  },
  {
    "text": "Gamers",
    "lookup": []
  },
  {
    "text": "Ya @.lukedankwalker",
    "lookup": []
  },
  {
    "text": "Games\nJust waking up",
    "lookup": []
  },
  {
    "text": "Yup",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker",
    "lookup": []
  },
  {
    "text": "Cooking some 'fish fingers' I guess",
    "lookup": []
  },
  {
    "text": "Gamer time maybe 1am, getting gf from airport",
    "lookup": []
  },
  {
    "text": "Huh\nJust got home\nNo it's been 4 days\nGonna see what gf wants to do then maybe game time",
    "lookup": []
  },
  {
    "text": "I can probably do CS soon\ngf said she wants to shower etc\n@.lukedankwalker\nHow long till your episode is done?\nShould I wait a bit?\nTo boot",
    "lookup": []
  },
  {
    "text": "Bruh I thought it was twin peaks\n♿",
    "lookup": []
  },
  {
    "text": "Buma fugma Ligma squad",
    "lookup": []
  },
  {
    "text": "Hanging with gf, I'm done for later\nJust got up",
    "lookup": []
  },
  {
    "text": "Me irl\nSilver 2s lmfaoooo",
    "lookup": []
  },
  {
    "text": "Gamer?\n@.lukedankwalker",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker ?\nWhat is this BDSM\nhuh\n@.lukedankwalker\n?\noh shit hes got his air pods in",
    "lookup": []
  },
  {
    "text": "Long game for that\nwe lost the last two rounds at 1v1",
    "lookup": []
  },
  {
    "text": "Im trying out STALKER: Call of Pripyat",
    "lookup": []
  },
  {
    "text": "Bruh these no tutorial",
    "lookup": []
  },
  {
    "text": "Huhhhhhh\nAt whom\nWe are all Russian so how am I supposed to know who the bad guys are",
    "lookup": []
  },
  {
    "text": "Cheeki breeki",
    "lookup": []
  },
  {
    "text": "My first job some guys were like hey you want to come with us to rob some people and I was like yeah, then we killed them all, so I'm a bandit now?\nAnd my second job I came for security on a deal and some people followed us and there was a shootout and we killed everyone\nMaybe the TRUE monsters of the zone were us all along",
    "lookup": []
  },
  {
    "text": "Hello\nGamers",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker",
    "lookup": []
  },
  {
    "text": "Luke says \"away\" but i think hes at work idk",
    "lookup": []
  },
  {
    "text": "huh\\",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker",
    "lookup": []
  },
  {
    "text": "Not till later",
    "lookup": []
  },
  {
    "text": "Gamers",
    "lookup": []
  },
  {
    "text": "Gamers\nBooted, gotta hit the bathroom first",
    "lookup": []
  },
  {
    "text": "Be right there\n💩",
    "lookup": []
  },
  {
    "text": "My internet died",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker I got back on last night and tried Anomaly for 2 hours lol",
    "lookup": []
  },
  {
    "text": "I'm still discovering my thoughts",
    "lookup": []
  },
  {
    "text": "Hello gamers",
    "lookup": []
  },
  {
    "text": "Hello\nOk it's time",
    "lookup": []
  },
  {
    "text": "Huh\nMusic?\nI ain't into moosic",
    "lookup": []
  },
  {
    "text": "?",
    "lookup": []
  },
  {
    "text": "Yo",
    "lookup": []
  },
  {
    "text": "@everyone  gamers",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker  cs\n?",
    "lookup": []
  },
  {
    "text": "Probably a nobody, 20 deaths and 0 mvps\nLol did you forget about dnd?",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker up\nI just got up\nYo\nWant me to come?\nOr did you boot",
    "lookup": []
  },
  {
    "text": "Snip snap snip snap, you know what 3 snap ships does to a person @.lukedankwalker ?\nWe gotta try V2.10, and we gotta start trying those AI decks out",
    "lookup": []
  },
  {
    "text": "Fallout 3 GOTY free to keep on EPIC games",
    "lookup": []
  },
  {
    "text": "Sheesh 90$ plus tax",
    "lookup": []
  },
  {
    "text": "He's playing DND bozos\nWait\nIt's Thursday\nAm I the bozo",
    "lookup": []
  },
  {
    "text": "...\nWhat is this\n@.lukedankwalker",
    "lookup": []
  },
  {
    "text": "Late night CS vibes\nwtf\n5 man stack with a supreme and they can't even give ua a higher rank than their 2nd rank",
    "lookup": []
  },
  {
    "text": "Helix irl - \"how do these people have 2k hours in silver\"\nMe irl - \"this isn't silver man\"\nHelix irl - \"yes it is\"\nlmfao",
    "lookup": []
  },
  {
    "text": "@foolishwizrd is trans MGE\nIdentifying as MGE does not make you MGE\nWhere's tad when you need him for the anti trans hot takes, back me up on this tad",
    "lookup": []
  },
  {
    "text": "I'm down to game all weekend, gf is gone this weekend too",
    "lookup": []
  },
  {
    "text": "Bruh keep up, I'm mg1",
    "lookup": []
  },
  {
    "text": "That ain't 5, that's 3",
    "lookup": []
  },
  {
    "text": "@joeliepolieolie69 just get the basic G502 , it goes on sale all the time, you don't need the hero wireless one lol. The whole g502 line has like the best reviews\nIf you want to save a buck, it'll be black Friday soon and it's always on sale",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker gamer?",
    "lookup": []
  },
  {
    "text": "Ok ok ok\n@.lukedankwalker",
    "lookup": []
  },
  {
    "text": "Gonna play a bit of fallout 3",
    "lookup": []
  },
  {
    "text": "Mines 4 years old",
    "lookup": []
  },
  {
    "text": "Gamers",
    "lookup": []
  },
  {
    "text": "Bruh why is there porn in the general chat\nCan't tell who wants to play CS because can't find it",
    "lookup": []
  },
  {
    "text": "Down for CS\nI'm playing cycle right now",
    "lookup": []
  },
  {
    "text": "5 stack with a DMG that only got 7 kills\nThey were so bad\nThen at the end they called us try hards lmfaoooooooo\n4 of them were higher rank than our highest rank, and we had a Gold 2 the lowest",
    "lookup": []
  },
  {
    "text": "@everyone we doing a cs\nbrb doing garbage",
    "lookup": []
  },
  {
    "text": "@phantom_cooper we can try to invite 2 randos\n?\nidk\nwe need a 5\nSCANTRON is MGE, too hgih",
    "lookup": []
  },
  {
    "text": "Bruh, theres a onlyfans chanel, post them there\nSome people dont want to see that\nmaybe theres recovering porn addicts in here\nidk\nOr people looking at your monitor when youre playing cs with the boys and discord is open on the other channel",
    "lookup": []
  },
  {
    "text": "@theswagengine boot",
    "lookup": []
  },
  {
    "text": "Look whos on TOP of the leaderboard",
    "lookup": []
  },
  {
    "text": "?",
    "lookup": []
  },
  {
    "text": "Price is going UP",
    "lookup": []
  },
  {
    "text": "Around 11",
    "lookup": []
  },
  {
    "text": "The supply of miners will drop, slightly, the majority of mining is done by ASIC miner companies, not individual users. But that will cause the reward for mining to go up slightly. So miners will make more profit. But in a recession people won't have extra cash to buy Bitcoin and they'll probably sell it to pay bills, causing the price to go down\nAll the coins are in the shitter, so is eth mining.",
    "lookup": []
  },
  {
    "text": "Just mining and holding and hoping for a miracle\nHaven't reinstalled nicehash on my PC yet, just mining 30cents aday on the vr pc",
    "lookup": []
  },
  {
    "text": "Bruh why are you deleting messages from the chat\nI was asleep",
    "lookup": []
  },
  {
    "text": "RIP",
    "lookup": []
  },
  {
    "text": "ya, didnt know you JUST started\nneed more @everyone 's",
    "lookup": []
  },
  {
    "text": "Oh, thinking about buying one of these\nSmart water bottle, keeps track of how much water you drink and reminds you when to take a swig\nSeems cool, might make me drink more water\nGonna do some research and see if it's good\nYa it might keep track of how much LSD you drink\nYou do DRINK LSD don't you? /S",
    "lookup": []
  },
  {
    "text": "Bruh\nIt keeps track of how much water you drink automatically, tracks it to the app\nAnd reminds you to drink water\nSo if you want to drink say 2L of water a day, it will help you keep on pace to drink that much by the end of the day\nHealth and wellnessss\nMight be able to get work to pay for it too",
    "lookup": []
  },
  {
    "text": "Bruh you know what I mean, to drink more water",
    "lookup": []
  },
  {
    "text": "Got my warranty SSD in the mail",
    "lookup": []
  },
  {
    "text": "Yeah\nI mean I use filters at home, and at work they have super good filters,",
    "lookup": []
  },
  {
    "text": "Huh",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker @foolishwizrd dark and darker play test this weekend, it's live now",
    "lookup": []
  },
  {
    "text": "Gamer alarm",
    "lookup": []
  },
  {
    "text": "Probably not tonight for me",
    "lookup": []
  },
  {
    "text": "Think I'm too tired\nBeen up since 8:45am, been gaming all day with no boys",
    "lookup": []
  },
  {
    "text": "Read the chat",
    "lookup": []
  },
  {
    "text": "Later ya",
    "lookup": []
  },
  {
    "text": "Yee",
    "lookup": []
  },
  {
    "text": "gamers",
    "lookup": []
  },
  {
    "text": "@phantom_cooper join cordx",
    "lookup": []
  },
  {
    "text": "Ill be a bit\nPlaying board game with gf\nI'll be back\nWould do a CS then more dark and darker if we want",
    "lookup": []
  },
  {
    "text": "What's the status?",
    "lookup": []
  },
  {
    "text": "@everyone gamer time",
    "lookup": []
  },
  {
    "text": "@everyone cs",
    "lookup": []
  },
  {
    "text": "Work time not game time\nAll work and no play makes Joe a sad boy",
    "lookup": []
  },
  {
    "text": "Ewizabeth?\nI would like to game gamers",
    "lookup": []
  },
  {
    "text": "@everyone y'all didn't tell me it's gamer time",
    "lookup": []
  },
  {
    "text": "Not tonight we weren't\n@.lukedankwalker @phantom_cooper I'll be 1 more min",
    "lookup": []
  },
  {
    "text": "That moment when you wait so long for protim to sort his stash that you actually beat Assassin's Creed revelations",
    "lookup": []
  },
  {
    "text": "Starting assassin's Creed 3 today",
    "lookup": []
  },
  {
    "text": "Ya\n400mb UPDATE btw",
    "lookup": []
  },
  {
    "text": "@everyone gf just got home, I'll skip this round, give me another ping for the start of the next round",
    "lookup": []
  },
  {
    "text": "The Cycle continues",
    "lookup": []
  },
  {
    "text": "@everyone CS today",
    "lookup": []
  },
  {
    "text": "SUCK MY BIG FAT DONG\n#TrueRank",
    "lookup": []
  },
  {
    "text": "Gamers please",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker alt game css?\\",
    "lookup": []
  },
  {
    "text": "ill brb in a bit",
    "lookup": []
  },
  {
    "text": "Banned\nI did 3 already tonight I'm done. Solo q on main and won and rank up. And 2 bad games on alt with Joel, stupid ass teammates\nGonna cycle etc",
    "lookup": []
  },
  {
    "text": "I prefer a heavy mouse, so I'm gettin swole",
    "lookup": []
  },
  {
    "text": "@everyone when gamer tonight",
    "lookup": []
  },
  {
    "text": "Not yet",
    "lookup": []
  },
  {
    "text": "Gamers\nHello",
    "lookup": []
  },
  {
    "text": "nope",
    "lookup": []
  },
  {
    "text": "This is in Swedish, and different currency price lol\nBruh your VPN was on",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker when gamer time",
    "lookup": []
  },
  {
    "text": "Where's the gang",
    "lookup": []
  },
  {
    "text": "i could",
    "lookup": []
  },
  {
    "text": "ill brb in a bit, gaming deep rock, cycle, and AC3 tonight",
    "lookup": []
  },
  {
    "text": "i back",
    "lookup": []
  },
  {
    "text": "yes",
    "lookup": []
  },
  {
    "text": "@everyone gamers please",
    "lookup": []
  },
  {
    "text": "Bruh you're high\nYou inatal deeprock",
    "lookup": []
  },
  {
    "text": "Bruh\nWhere\nThe\nFuck\nThe gamers",
    "lookup": []
  },
  {
    "text": "Bro",
    "lookup": []
  },
  {
    "text": "When gamer today",
    "lookup": []
  },
  {
    "text": "Gamers",
    "lookup": []
  },
  {
    "text": "is that code for drugs?",
    "lookup": []
  },
  {
    "text": "this game sux's\nno ones on cs right now\ni just did a main game, gonna take a break then do a alt GN2 game",
    "lookup": []
  },
  {
    "text": "10:10 pliz\nI'll be there\n100%",
    "lookup": []
  },
  {
    "text": "I'm booting now\nIf you haven't started\nComing\nRip bozos",
    "lookup": []
  },
  {
    "text": "♿♿♿♿♿ <- you're team on Mirage",
    "lookup": []
  },
  {
    "text": "dude wtf\norange and yellow were from CHINA\nBusted ass 3rd world mics",
    "lookup": []
  },
  {
    "text": "Nah",
    "lookup": []
  },
  {
    "text": "My eyes are fucked I'm resting for a bit then deep rock",
    "lookup": []
  },
  {
    "text": "Sorry I set an alarm but still didn't feel like it so didn't get up for deep rock",
    "lookup": []
  },
  {
    "text": "Bought deep rock again",
    "lookup": []
  },
  {
    "text": "Bruh I played 2 last night\nYou guys played like 4\nLuke's on NNN\nHow hard is it to wipe shit from a 5 year old autistic kids ass????",
    "lookup": []
  },
  {
    "text": "Just bought The Cycle Frontier battle pass\nalready level 78/100 so why not",
    "lookup": []
  },
  {
    "text": "Bruh\nPost the only fans content in the only fans channel",
    "lookup": []
  },
  {
    "text": "Gottem",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker @foolishwizrd @phantom_cooper WHEN deeprock",
    "lookup": []
  },
  {
    "text": "I gotta go to bed early so I can't do 12\nProbably going to bed at 12",
    "lookup": []
  },
  {
    "text": "Probably between 7-8 for me\nNeed to make dinner with gf when she comes home",
    "lookup": []
  },
  {
    "text": "Closer to 7:30-8",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker I'll be on at 7:20",
    "lookup": []
  },
  {
    "text": "@everyone gamers?",
    "lookup": []
  },
  {
    "text": "@everyone ?",
    "lookup": []
  },
  {
    "text": "Did some, off now",
    "lookup": []
  },
  {
    "text": "Whenever\n@.lukedankwalker I can do whenever I'm ready",
    "lookup": []
  },
  {
    "text": "Hello\nGamers",
    "lookup": []
  },
  {
    "text": "Rip",
    "lookup": []
  },
  {
    "text": "just loaded in with my best stuff for the first time ever to go and try and kill the boss, i land, mic isnt working, i unplug and replug my mic, game freezes and crashes, i restart the game, im dead and back at the hub\nLiterally wtf",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker\n@joeliepolieolie69 probs no",
    "lookup": []
  },
  {
    "text": "Ok\nWe doing the rivals assignment",
    "lookup": []
  },
  {
    "text": "I'm finishing up a prod incident with network team, then I can game",
    "lookup": []
  },
  {
    "text": "Working on something still",
    "lookup": []
  },
  {
    "text": "Coming now\nYou either gotta smoke a little more rock, or a little less rock",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker ?\nAre we back?",
    "lookup": []
  },
  {
    "text": "????\nHELLO\n????",
    "lookup": []
  },
  {
    "text": "??",
    "lookup": []
  },
  {
    "text": "i did 4 deep rocks\ngot my new second weapons, and did industrial sabatoge\ndid a cs too",
    "lookup": []
  },
  {
    "text": "Wtf is this\nSome kobeashi Maru action",
    "lookup": []
  },
  {
    "text": "When are you off work\nI'm free now",
    "lookup": []
  },
  {
    "text": "Cycle has been going downhill all night rip my blood pressure",
    "lookup": []
  },
  {
    "text": "this game is stupid\n1 guy leaves after 6 rounds\nother guy 2 kills in 15 rounds",
    "lookup": []
  },
  {
    "text": "?????????????????????????????????????????????????????????????????????????????????????????????\nTHREE SILVER THREES\nVS A 5 MAN OF GOLD 1 AND 2\nAND A GUY LEAVES\nfuck this game man\nChopper was trash tier ass\nWe had to tell him to stop using AWP becuase he couldnt hit a single shot",
    "lookup": []
  },
  {
    "text": "Gamers\nPlease\n@.lukedankwalker deep, rock",
    "lookup": []
  },
  {
    "text": "I'm off Friday so gamer time all day",
    "lookup": []
  },
  {
    "text": "I went to bed at 4am, up now",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker @jerbear107\nApparently STREETS is confirmed for next patch",
    "lookup": []
  },
  {
    "text": "Huh\nOk\n@phantom_cooper @foolishwizrd\nYayayay\nYa ya ya ya",
    "lookup": []
  },
  {
    "text": "I'll do CS later\nGn2",
    "lookup": []
  },
  {
    "text": "@everyone sup\nGamer?",
    "lookup": []
  },
  {
    "text": "I'm playing cycle\nWaiting for gamers",
    "lookup": []
  },
  {
    "text": "Gamers please",
    "lookup": []
  },
  {
    "text": "Rip\nI'm on",
    "lookup": []
  },
  {
    "text": "Still sleeping",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker @phantom_cooper I'm up now\nSup",
    "lookup": []
  },
  {
    "text": "Gamers",
    "lookup": []
  },
  {
    "text": "@everyone cs",
    "lookup": []
  },
  {
    "text": "yes\nlets do one on the mains\ni just booted\nlucky\ni was queuing",
    "lookup": []
  },
  {
    "text": "yo\njoin up\n@tad19  and @joebe2\nwe just won\n@joeliepolieolie69 boot",
    "lookup": []
  },
  {
    "text": "@joeliepolieolie69 please\nboot\ni see you on mobile\nrip\nget a steam deck\n+monitor +mouse +kb",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker deep rock tonight?",
    "lookup": []
  },
  {
    "text": "rip",
    "lookup": []
  },
  {
    "text": "Gamers",
    "lookup": []
  },
  {
    "text": "@foolishwizrd @phantom_cooper @.lukedankwalker Deep rock, start the plaguefall assignment after Dnd?\nI can stay up till 2am",
    "lookup": []
  },
  {
    "text": "rip",
    "lookup": []
  },
  {
    "text": "Luke is rip 4-9pm and I think he said he's going to bed after work",
    "lookup": []
  },
  {
    "text": "@joeliepolieolie69 @tad19 CS time?\nI will join if we are ready\nI need to put some ribs in the oven though\nGamers",
    "lookup": []
  },
  {
    "text": "@everyone wait for me, 2 more min",
    "lookup": []
  },
  {
    "text": "LEM threw the game",
    "lookup": []
  },
  {
    "text": "Wait for Luke",
    "lookup": []
  },
  {
    "text": "Yoyo\nJust napped for 2hr",
    "lookup": []
  },
  {
    "text": "hi",
    "lookup": []
  },
  {
    "text": "gonna shower , be back in 25 min for gamer time\ncycle / deep rock",
    "lookup": []
  },
  {
    "text": "25 turned into 45\nI'll be there in 5",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker\n@BL;\nREADY",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker",
    "lookup": []
  },
  {
    "text": "Luke at 2:50am \"ughhh, im just gonna go lay down for a second\", me \"what didnt you just laydown or passout its been like an hour\", luke \"nah i just got home from work\"\nbruh what\nare you sleep walking\nman must be sleep walking",
    "lookup": []
  },
  {
    "text": "Rip",
    "lookup": []
  },
  {
    "text": "Bruh, you were here and said yeah let's game, then you went Awal for an hour, then you were sleep walking and said some wack shit on the mic then left a 2nd tims\nYa I'll be free after 5",
    "lookup": []
  },
  {
    "text": "Bruh, you were SLEEP WALKING I'm telling you\nI was in a cycle match and you joined up and said no problem take your time, then protim joined , then I got out of cycle and started up deep rock, protim was too, and we texted etc and you didn't join so we did a 2 man one for protim, then he left for bed, then like 30 min after that you came back and talked then left a 2nd time, but you acted like you never left at all and just got home",
    "lookup": []
  },
  {
    "text": "Lol",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker @phantom_cooper @foolishwizrd ? Deeprock?\nI'm down to jump on early",
    "lookup": []
  },
  {
    "text": "Bootin",
    "lookup": []
  },
  {
    "text": "I'll be back in 10\n@phantom_cooper ?\n@.lukedankwalker still in the chat",
    "lookup": []
  },
  {
    "text": "@foolishwizrd @phantom_cooper\ntime\ndeep rock",
    "lookup": []
  },
  {
    "text": "SUCK IT\n#TRUERANK",
    "lookup": []
  },
  {
    "text": "Gamer time",
    "lookup": []
  },
  {
    "text": "we had a guy leave after 4 rounds and we won lmfao\nthey had a guy leave on the last round for some reason\ni did so good with the Awp, i was CT mid and would get their suicide player every time",
    "lookup": []
  },
  {
    "text": "making dinner\nmaybe in 30-40",
    "lookup": []
  },
  {
    "text": "@joeliepolieolie69 ?\n@everyone fyi I downloaded cod warzone 2.0 DMZ",
    "lookup": []
  },
  {
    "text": "gamerx",
    "lookup": []
  },
  {
    "text": "why are you sick",
    "lookup": []
  },
  {
    "text": "Zaaaaaaaam dudes\nSuper spreader event\nI mean, I'm seeing articles saying they are suggesting we mask up again\nBut because I'm not a bleeding snowflake liberal I wont\nBecause mu' liberties'",
    "lookup": []
  },
  {
    "text": "What firmware\nYou mean my 5G firmware?",
    "lookup": []
  },
  {
    "text": "Maybe late later",
    "lookup": []
  },
  {
    "text": "????\n♿ <- tad",
    "lookup": []
  },
  {
    "text": "Gamer time soon",
    "lookup": []
  },
  {
    "text": "Gamers please\n@joeliepolieolie69 want to do a gn2 cs?",
    "lookup": []
  },
  {
    "text": "????????",
    "lookup": []
  },
  {
    "text": "rip",
    "lookup": []
  },
  {
    "text": "I absolutely shit on these kids\nlmfao\n32 and 7\nwe rushed B for the final round, save mac10 rush, i got 2 entry frag and got their AWP, and killed the last 3 with the AWP for the ACEEEEEEE win",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker deep rock tonight?\nim in cycle right now",
    "lookup": []
  },
  {
    "text": "My new highest value loot raid ever\nKilled this guy after i was trying to get out, got 2 purp guns and a blue armor from him\nI did 2 oil drills and also killed a crusher who got a 2x drop",
    "lookup": []
  },
  {
    "text": "Not today or Saturday?",
    "lookup": []
  },
  {
    "text": "Gamers\nWhen",
    "lookup": []
  },
  {
    "text": "Next week on free epic games",
    "lookup": []
  },
  {
    "text": "Lol this is #3 i think, did a basically naked run last night before getting off and got blasted by some twitch streamer and i reported him for walling lol, he ran right for me",
    "lookup": []
  },
  {
    "text": "WHOLE\nLE\nSHIT\nAWP and M4A1-S NERF\nDUST 2 REMOVED FROM ACTIVY DUTY\nHO\nLE\nSHIT\nBruh ANUBIS IS A SHIT MAP @.lukedankwalker",
    "lookup": []
  },
  {
    "text": "yes'",
    "lookup": []
  },
  {
    "text": "be back later\nmaybe deep rock if luke gets on\nif not some cycle",
    "lookup": []
  },
  {
    "text": "Rip",
    "lookup": []
  },
  {
    "text": "bruh what do you got\ncovid?\nAre you still going to work>",
    "lookup": []
  },
  {
    "text": "Might try out cod",
    "lookup": []
  },
  {
    "text": "I don't quite 'get' Cod DMZ if that makes any sense\nTheres no tutorial etc, any doesn't really tell you why youre there or what youre doing\nDoesn't tell you how your 'stash' works either",
    "lookup": []
  },
  {
    "text": "I thought cod is the casual game\nTarkov you gotta watch videos before you can even start, cod is supposed to be self explanatory",
    "lookup": []
  },
  {
    "text": "When gamer time",
    "lookup": []
  },
  {
    "text": "Gamers",
    "lookup": []
  },
  {
    "text": "@everyone gamers",
    "lookup": []
  },
  {
    "text": "Im with Lord @tad19 on this one\nGamers stand up\nWe are oppressed",
    "lookup": []
  },
  {
    "text": "game4rs\nim gonna do one",
    "lookup": []
  },
  {
    "text": "Gamers please",
    "lookup": []
  },
  {
    "text": "gf is gone till Wednesday night\nI've been doing deep rock solo q with randos\nGoing good so far hazard 4\nI joined one right near the end so I barely had to help lol",
    "lookup": []
  },
  {
    "text": "@everyone gonna do a cs if anyone wants in\nGot a hot date with destiny on Inferno",
    "lookup": []
  },
  {
    "text": "i won\ngot carried by other mges",
    "lookup": []
  },
  {
    "text": "Going to try some more DMZ if anyone wants to hop in",
    "lookup": []
  },
  {
    "text": "dude i suck today, i keep getting downed by the AI and as solo i got no one to revieve me\nyesterday was a lot easier",
    "lookup": []
  },
  {
    "text": "I am working still, maybe another hour, off tomorrow\nBut yes",
    "lookup": []
  },
  {
    "text": "I'll check in at 10:45 still gotta do some stuff",
    "lookup": []
  },
  {
    "text": "@everyone I'm ready for gamer time\n@.lukedankwalker",
    "lookup": []
  },
  {
    "text": "cycle going down for maintenance\nyou know what time it is\nCS",
    "lookup": []
  },
  {
    "text": "man fuck this game\nbroken ass bitch\nmy team didnt even know how the fuck to play CSGO basically\nand we get a 5 stack with DMGs\nyoure telling me theres not a single dmg etc solo queuing at 3am so we can at leats have a black rank?\nthis is retarded",
    "lookup": []
  },
  {
    "text": "Sorry I was sleeping all day\n@.lukedankwalker gamer",
    "lookup": []
  },
  {
    "text": "@phantom_cooper @foolishwizrd deep rock?",
    "lookup": []
  },
  {
    "text": "@foolishwizrd wtf?",
    "lookup": []
  },
  {
    "text": "@foolishwizrd BRUH",
    "lookup": []
  },
  {
    "text": "Completed my first drill in Cycle Frontier, holy shit\nTook 40 min and i had to kill 2 guys\nI sat in a tower for 20 minutes watching and waiting, saw other people killing each other lol\nI was lucky, the two guys that came to attack my drill with both very low gear",
    "lookup": []
  },
  {
    "text": "At leasst this 3am game was even ranks lmfao\neven enough\nwe had one person AFK/computer issues for like 4 rounds too",
    "lookup": []
  },
  {
    "text": "EST or EDT\nChannel name is \"General\" bozo\nI won't make the 8pm game\nMaybe later some games",
    "lookup": []
  },
  {
    "text": "Going to zehrs\nGotta spend time with gf\n🍆🍑",
    "lookup": []
  },
  {
    "text": "@everyone gamers at 10:30?\nDeep rock?",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker rock n stone\nOh it's Wednesday my dudes",
    "lookup": []
  },
  {
    "text": "we done for the night",
    "lookup": []
  },
  {
    "text": "Ya that's right\nSanta Claus says the N word in csgo at 3am\nSanta Claus is a GAMER",
    "lookup": []
  },
  {
    "text": "@everyone gamers, assemble",
    "lookup": []
  },
  {
    "text": "Kkkkkk",
    "lookup": []
  },
  {
    "text": "I'll do 1 if Luke is still making food\n@.lukedankwalker wanna do 6:45?",
    "lookup": []
  },
  {
    "text": "Ok. Booting\nMain or alt\n@tad19 main or alt\nMGE or gn2",
    "lookup": []
  },
  {
    "text": "Ok I booted main\nI wanna play inferno\nWatched some vids on dissecting some inferno gameplay",
    "lookup": []
  },
  {
    "text": "we are loosing 9-11 in cs\n7pm",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker @phantom_cooper im ready",
    "lookup": []
  },
  {
    "text": "i had to buy some black friday deals\nand luke went for shower and to go get some food\nhe said 1 hour\nso i guess 10-10:15ish\ni bought the desk",
    "lookup": []
  },
  {
    "text": "super cheap, but unknown on the quality\ni coudlnt find bad reviews\nand alternatives are 2-4x the price so.,..",
    "lookup": []
  },
  {
    "text": "yo",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker deeprock?",
    "lookup": []
  },
  {
    "text": "@everyone gamer time 12:15?",
    "lookup": []
  },
  {
    "text": "Cricket's\n1am now",
    "lookup": []
  },
  {
    "text": "Gonna watch another episode with gf\nThen gamer\n1am",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker ?",
    "lookup": []
  },
  {
    "text": "They just had a event, but ya gettin close",
    "lookup": []
  },
  {
    "text": "Almost time for me to take my yearly vacation 😎",
    "lookup": []
  },
  {
    "text": "Yes\nLovely day for some inferno\nI'll boot",
    "lookup": []
  },
  {
    "text": "ok we wait 10-15 min",
    "lookup": []
  },
  {
    "text": "I watched a vid about m4 vs m4a1s, still not sure which I want to use now\nI wish you could swap it mid game\nThoughts?\nIsn't it only warmup and not once the game starts?\nM4a1s for A site dust 2. M4 for B site dust 2\nAccuracy\nIf your aim not good",
    "lookup": []
  },
  {
    "text": "@tad19 ?",
    "lookup": []
  },
  {
    "text": "20 club",
    "lookup": []
  },
  {
    "text": "@joeliepolieolie69  pliz\nmute tad",
    "lookup": []
  },
  {
    "text": "@tad19 you done?",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker are you gaming tonight?",
    "lookup": []
  },
  {
    "text": "Yo\nComing",
    "lookup": []
  },
  {
    "text": "alright\nim back\ncycle time\nrip gamers\nLuke = gone\nChris = gone\nPro = gone\nrip",
    "lookup": []
  },
  {
    "text": "Sleep rock\nHad some amazing cycle matches last night\nWas up till 9am",
    "lookup": []
  },
  {
    "text": "Ladies please\nI'm getting on now\nWhat are we playing\nDeep rock?\nCS?",
    "lookup": []
  },
  {
    "text": "@tad19 @joeliepolieolie69 @joebe2 @__honey__ @foolishwizrd\n5 man\noh\nrip\nbruh the AUDACITY",
    "lookup": []
  },
  {
    "text": "Bruh is there a secret 3rd discord where you post even more only-fans content and play secret cs games without us?",
    "lookup": []
  },
  {
    "text": "We played 2 games yesterday lol\nMinus Chris and luke",
    "lookup": []
  },
  {
    "text": "no its dnd time bozo",
    "lookup": []
  },
  {
    "text": "@everyone CS? or Deep rock?\nor if not , cycle\nim gonna do a cs",
    "lookup": []
  },
  {
    "text": "What's up gamers\n3:40 CS too early",
    "lookup": []
  },
  {
    "text": "@everyone gamers",
    "lookup": []
  },
  {
    "text": "Bombsite B is a notoriously low frag position, when the enemy never goes B",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker @foolishwizrd @phantom_cooper im ready for deep rock when its time",
    "lookup": []
  },
  {
    "text": "y\nIn contrast to my 16-4 win on main with 8 kills 9 deaths, to gold2 32 kills and 7 deaths lmfaooooooooooooooooooooooo\nalso rank upo",
    "lookup": []
  },
  {
    "text": "@foolishwizrd @phantom_cooper\ntime",
    "lookup": []
  },
  {
    "text": "im still rockin and stonin",
    "lookup": []
  },
  {
    "text": "i finished plaugefall part 2, working on scout promotion #2 now",
    "lookup": []
  },
  {
    "text": "theres 8 of us in this lobby lmfao wtf\nwtf is happening\nis this a mod",
    "lookup": []
  },
  {
    "text": "14 of us now lmfaoooooooooooooooooooooooo",
    "lookup": []
  },
  {
    "text": "we are all trying to fit in the pod LMFAOOOOOOO\n16x survival bonus lmfao",
    "lookup": []
  },
  {
    "text": "WE HAVE 3 dreadnaughts all at once lol",
    "lookup": []
  },
  {
    "text": "that was chaos",
    "lookup": []
  },
  {
    "text": "Nah\nThat's 8760 hours, I only got 1300hrs + about 80hrs on the alt.",
    "lookup": []
  },
  {
    "text": "Ok\nBootying\nInferno",
    "lookup": []
  },
  {
    "text": "bruh its the steam tuesday maintenance\ni cant login\nworked now",
    "lookup": []
  },
  {
    "text": "im in\nhello",
    "lookup": []
  },
  {
    "text": "5 becomes 10, 10 becomes 15\ni could have done a whole VALORANT match in this time",
    "lookup": []
  },
  {
    "text": "Just throwing out garbage\nBrb\nI'm booted",
    "lookup": []
  },
  {
    "text": "Destroy dust2 December starts tomorrow",
    "lookup": []
  },
  {
    "text": "So when CS?",
    "lookup": []
  },
  {
    "text": "Ya\nYOU said no more late night gaming",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker",
    "lookup": []
  },
  {
    "text": "@phantom_cooper sike its deep rock time",
    "lookup": []
  },
  {
    "text": "I thought we said 9:30?\nI gotta hang with gf for a bit first",
    "lookup": []
  },
  {
    "text": "i thought we said 9:30!\nim here now\nready to gamers",
    "lookup": []
  },
  {
    "text": "Get em jizz\nDown with tyranny",
    "lookup": []
  },
  {
    "text": "No posting in general chat, this belongs in shitposting\nSo says the king",
    "lookup": []
  },
  {
    "text": "So?\nBanned",
    "lookup": []
  },
  {
    "text": "Any gamers?",
    "lookup": []
  },
  {
    "text": "I guess\nBruh\nYou said no more late night gamin",
    "lookup": []
  },
  {
    "text": "\"but it's just a special military operation\"",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker\nHuh",
    "lookup": []
  },
  {
    "text": "Making dinner",
    "lookup": []
  },
  {
    "text": "You still csing?\nOk booting",
    "lookup": []
  },
  {
    "text": "No onlyfans in general",
    "lookup": []
  },
  {
    "text": "?",
    "lookup": []
  },
  {
    "text": "Huh",
    "lookup": []
  },
  {
    "text": "Coming",
    "lookup": []
  },
  {
    "text": "Jk I'm not coming",
    "lookup": []
  },
  {
    "text": "Later",
    "lookup": []
  },
  {
    "text": "I'm just going in the shower",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker ?",
    "lookup": []
  },
  {
    "text": "Huh\nOnly if @.lukedankwalker is down",
    "lookup": []
  },
  {
    "text": "Yo",
    "lookup": []
  },
  {
    "text": "I'm just finishing some work then I'll do 1 quick cs\nThen bed",
    "lookup": []
  },
  {
    "text": "@everyone cs time\nbruh if i sleep during the day i should work at night lmfao",
    "lookup": []
  },
  {
    "text": "orange was literally thowing, buying, playing postitions, and just never shooting",
    "lookup": []
  },
  {
    "text": "Bruh I will be taking a full week of the moment tarkov wipes lmfao",
    "lookup": []
  },
  {
    "text": "Later for me",
    "lookup": []
  },
  {
    "text": "I'm gonna need minimum 30 more min, gonna shower and I'm waiting for things to load",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker gamer?",
    "lookup": []
  },
  {
    "text": "Coming back\n@.lukedankwalker",
    "lookup": []
  },
  {
    "text": "Maybe 8:10",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker maybe a CS at 6?\nI'm just running to the mall and food",
    "lookup": []
  },
  {
    "text": "@everyone CS at 6:15\nThen I gotta go to pickup gf just after 7",
    "lookup": []
  },
  {
    "text": "Booting\nImagine\nBooting\nGogogoog",
    "lookup": []
  },
  {
    "text": "Huh\nWhat about dnd",
    "lookup": []
  },
  {
    "text": "Ok\nComing",
    "lookup": []
  },
  {
    "text": "@nylertorton @tad19",
    "lookup": []
  },
  {
    "text": "@__honey__ @.lukedankwalker",
    "lookup": []
  },
  {
    "text": "Steam game awards at 8pm\nI just woke up... Lmfao\nWent to bed at what, 5am?",
    "lookup": []
  },
  {
    "text": "Finally",
    "lookup": []
  },
  {
    "text": "Not yet\nSteam awards and food",
    "lookup": []
  },
  {
    "text": "Still watching game awards",
    "lookup": []
  },
  {
    "text": "Ehhhh I'm trying to win my steam deck here\nYa I'm watching in my living room",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker yo",
    "lookup": []
  },
  {
    "text": "ya idk wtf that was about",
    "lookup": []
  },
  {
    "text": "CS/deeprock in maybe 1 hr",
    "lookup": []
  },
  {
    "text": "Kk",
    "lookup": []
  },
  {
    "text": "My discord is fried",
    "lookup": []
  },
  {
    "text": "Discord pushed a broken update , everyone is @'ing them on twitter",
    "lookup": []
  },
  {
    "text": "gamers\n@everyone gamers",
    "lookup": []
  },
  {
    "text": "So we know my true rank is G4>MGE so far",
    "lookup": []
  },
  {
    "text": "CS at 12 after DND",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker deeprock?",
    "lookup": []
  },
  {
    "text": "Yo",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker",
    "lookup": []
  },
  {
    "text": "Ye",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker sorry went to check if gf was up for work and she asked for lunch/breakfast\nBrb in 10",
    "lookup": []
  },
  {
    "text": "Coming now",
    "lookup": []
  },
  {
    "text": "I'm a Workout man myself but we all can't have what we want",
    "lookup": []
  },
  {
    "text": "What's up",
    "lookup": []
  },
  {
    "text": "Just having a shower\n15 min?",
    "lookup": []
  },
  {
    "text": "Comin\nMains? Alts?\n@.lukedankwalker mains, alts?",
    "lookup": []
  },
  {
    "text": "MOM GET THE CAMERA\n@tad19 @foolishwizrd @theswagengine",
    "lookup": []
  },
  {
    "text": "Beat Assassin's Creed 3",
    "lookup": []
  },
  {
    "text": "Bruhs what are these ranks\n@.lukedankwalker ?",
    "lookup": []
  },
  {
    "text": "I'm out for now",
    "lookup": []
  },
  {
    "text": "Dark isn't until like 4am or something.\nAlso I said I'm out for now",
    "lookup": []
  },
  {
    "text": "Nope",
    "lookup": []
  },
  {
    "text": "I just woke up",
    "lookup": []
  },
  {
    "text": "I'll be on soon",
    "lookup": []
  },
  {
    "text": "L\nMaybe like 11",
    "lookup": []
  },
  {
    "text": "You dodos I said maybe 11",
    "lookup": []
  },
  {
    "text": "Omg",
    "lookup": []
  },
  {
    "text": "I'm home now\nGo na chill till Lukes on for dnd / deep rock",
    "lookup": []
  },
  {
    "text": "No shitposting in general. Final Warning!\nLiteral shitposting",
    "lookup": []
  },
  {
    "text": "gamers",
    "lookup": []
  },
  {
    "text": "i guess in like 10-15 min\nim in a deep rock rn",
    "lookup": []
  },
  {
    "text": "@everyone cs",
    "lookup": []
  },
  {
    "text": "@nylertorton ??\n@.lukedankwalker ??\n@nylertorton join now or we starting",
    "lookup": []
  },
  {
    "text": "5?",
    "lookup": []
  },
  {
    "text": "Not till later",
    "lookup": []
  },
  {
    "text": "Can't for me",
    "lookup": []
  },
  {
    "text": "Trying to do some more work, and then need to pack etc. Probably no dark and darker for me.\nLeaving tomorrow, idk what time, I should work in the morning so probably afternoon",
    "lookup": []
  },
  {
    "text": "Nope",
    "lookup": []
  },
  {
    "text": "Gamers\nI could do a alt account CS?",
    "lookup": []
  },
  {
    "text": "Could say the same to you\nDon't you live at home?",
    "lookup": []
  },
  {
    "text": "Im gonna try a CS on my laptop on the alt account\nNo promises on skill",
    "lookup": []
  },
  {
    "text": "Soon ish, I'm setting it up",
    "lookup": []
  },
  {
    "text": "Im off, lag too hard to cs\nBe back home monday night\nif tarkov wipes ill try and scav",
    "lookup": []
  },
  {
    "text": "Gamers\nDeath stranding is supposedly free to keep tomorrow on epic games store",
    "lookup": []
  },
  {
    "text": "How's Christmas bozos",
    "lookup": []
  },
  {
    "text": "Monday night king 🎄",
    "lookup": []
  },
  {
    "text": "I'll be home tonight maybe around 4pm or so\nGamer time",
    "lookup": []
  },
  {
    "text": "Merry Christmas to EVERYONE, including that bitch princess that framed us for murdering the king and got our shop raided by the FBI.",
    "lookup": []
  },
  {
    "text": "@everyone gamers when?\nJust unpacking",
    "lookup": []
  },
  {
    "text": "Rip\nJust played 2hrs of deep rock, finished the xmas stuff\nHeading to bed I think, will be up tomorrow early for gaming, I'm off tomorrow\nWill probably do deep rock core hunt , maybe deep dive, and cs",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker yo",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker back",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker I'll be back in 5-10\nJust showered etc",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker back",
    "lookup": []
  },
  {
    "text": "dmg squad",
    "lookup": []
  },
  {
    "text": "Where are the gamers",
    "lookup": []
  },
  {
    "text": "daum dood\ni could do a cs",
    "lookup": []
  },
  {
    "text": "@tad19 ?",
    "lookup": []
  },
  {
    "text": "yo",
    "lookup": []
  },
  {
    "text": "@everyone we gaming tonight or do y'all have plans?",
    "lookup": []
  },
  {
    "text": "LMAO\ndrunk or bad? 5 stack",
    "lookup": []
  },
  {
    "text": "What about tarkov\nI gotta start doing shoreline",
    "lookup": []
  },
  {
    "text": "Well boot up for some games then\n@.lukedankwalker",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker CS and deeprock?",
    "lookup": []
  },
  {
    "text": "boot up",
    "lookup": []
  },
  {
    "text": "Not for me",
    "lookup": []
  },
  {
    "text": "I'm chilling with gf and running scav runs inbetween, I'll be on on later",
    "lookup": []
  },
  {
    "text": "Can't aim cause his mouse hits the fish oil pills when he does a 180",
    "lookup": []
  },
  {
    "text": "Ya maybe 1 then more tark",
    "lookup": []
  },
  {
    "text": "Not yet",
    "lookup": []
  },
  {
    "text": "going out 4 a bit",
    "lookup": []
  },
  {
    "text": "Hello hello helllo",
    "lookup": []
  },
  {
    "text": "@everyone im doing a cs",
    "lookup": []
  },
  {
    "text": "Ya",
    "lookup": []
  },
  {
    "text": "a bit after ya",
    "lookup": []
  },
  {
    "text": "ioll be 7:15, just finishing a raid",
    "lookup": []
  },
  {
    "text": "ready\n@tad19 @joeliepolieolie69",
    "lookup": []
  },
  {
    "text": "All gamers please report for duty",
    "lookup": []
  },
  {
    "text": "@joeliepolieolie69 @tad19 pliz\njoin from web if discord app not working\nbruh\nno shit\nare you stupid or something?\nwe are litterally starting\nyou have like 1 min to join\nif it says READY im accepting",
    "lookup": []
  },
  {
    "text": "Bozos",
    "lookup": []
  },
  {
    "text": "Csgo hit a new all time concurrent player count today during the major",
    "lookup": []
  },
  {
    "text": "You're team",
    "lookup": []
  },
  {
    "text": "RIP",
    "lookup": []
  },
  {
    "text": "I'm on call, I gotta work, we are doing a deployment\nLater massive i",
    "lookup": []
  },
  {
    "text": "Whom\nWhen\nWhere's the gamers\n15 min?\nOh\nOk I boot",
    "lookup": []
  },
  {
    "text": "dnd tonight, cant",
    "lookup": []
  },
  {
    "text": "going out to get some food\nalso deep rock",
    "lookup": []
  },
  {
    "text": "Working",
    "lookup": []
  },
  {
    "text": "Working\nTill at least 4pm",
    "lookup": []
  },
  {
    "text": "Is it ultrawide or normal\nI can't till later",
    "lookup": []
  },
  {
    "text": "ya",
    "lookup": []
  },
  {
    "text": "gamers?",
    "lookup": []
  },
  {
    "text": "@everyone ?",
    "lookup": []
  },
  {
    "text": "Dnd at 9\nCould do now or 8",
    "lookup": []
  },
  {
    "text": "nope",
    "lookup": []
  },
  {
    "text": "soon maybe for me",
    "lookup": []
  },
  {
    "text": "When game",
    "lookup": []
  },
  {
    "text": "When\nI'm just getting up",
    "lookup": []
  },
  {
    "text": "I gotta shovel some",
    "lookup": []
  },
  {
    "text": "im in the cord\npliz no mirage or i kill myself",
    "lookup": []
  },
  {
    "text": "im readyu whenever",
    "lookup": []
  },
  {
    "text": "We already did bruh",
    "lookup": []
  },
  {
    "text": "dnd till 12, then maybe or deep rock\nHopefully its 60$ and not free to play, on the one hand i hate paying for videogames, on the other hand, hopefully less cheaters if not free to play",
    "lookup": []
  },
  {
    "text": "@everyone need a 5th",
    "lookup": []
  },
  {
    "text": "huh",
    "lookup": []
  },
  {
    "text": "no gamers here",
    "lookup": []
  },
  {
    "text": "And on the third day, Jesus ROSE UP",
    "lookup": []
  },
  {
    "text": "@everyone please",
    "lookup": []
  },
  {
    "text": "@theswagengine @foolishwizrd @.lukedankwalker CS at 7pm then? 1 game",
    "lookup": []
  },
  {
    "text": "Bootvootovoot\nLuke is coming\nWe got a 5\n7pm means 7pm wtf",
    "lookup": []
  },
  {
    "text": "we ready, waiting on you tad for #5",
    "lookup": []
  },
  {
    "text": "Bruh\nWe played yesterday",
    "lookup": []
  },
  {
    "text": "At Costco",
    "lookup": []
  },
  {
    "text": "Gamers",
    "lookup": []
  },
  {
    "text": "No gamers here",
    "lookup": []
  },
  {
    "text": "yee",
    "lookup": []
  },
  {
    "text": "G_amers",
    "lookup": []
  },
  {
    "text": "no gamers here",
    "lookup": []
  },
  {
    "text": "see\nno gamers",
    "lookup": []
  },
  {
    "text": "@everyone gamers cs",
    "lookup": []
  },
  {
    "text": "Nope",
    "lookup": []
  },
  {
    "text": "0️⃣",
    "lookup": []
  },
  {
    "text": "its 9\n@theswagengine @nylertorton",
    "lookup": []
  },
  {
    "text": "Huh",
    "lookup": []
  },
  {
    "text": "@everyone I can do the next one if you're doing another",
    "lookup": []
  },
  {
    "text": "huhhhh??!?!?",
    "lookup": []
  },
  {
    "text": "????????????\nwe had a guy abandon\nhow the fuck am i in this game lol",
    "lookup": []
  },
  {
    "text": "Not till later",
    "lookup": []
  },
  {
    "text": "Tuesdays after 6pm is steam maintenance",
    "lookup": []
  },
  {
    "text": "Nope",
    "lookup": []
  },
  {
    "text": "Play valorant",
    "lookup": []
  },
  {
    "text": "Don't you people have jobs\nI'm on flex today\nId be down for 1",
    "lookup": []
  },
  {
    "text": "@everyone gamers rise up",
    "lookup": []
  },
  {
    "text": "@tad19  please",
    "lookup": []
  },
  {
    "text": "Tad PLEASE\nHurry\nAlinity has her tits out on STREAM RIGHT NOW\nHURRY\nBOOT\nYOU'RE MISSIN GIT",
    "lookup": []
  },
  {
    "text": "NOT LIKE THISS",
    "lookup": []
  },
  {
    "text": "????",
    "lookup": []
  },
  {
    "text": "Absolute cucks here\nI'm switching to just-valorant server",
    "lookup": []
  },
  {
    "text": "yes\nShoulda been cs at 2\n@everyone cs at 5",
    "lookup": []
  },
  {
    "text": "BRUH\nWhat\nAbsolute animals\nThe lot of ya",
    "lookup": []
  },
  {
    "text": "Bruh alinitys stream",
    "lookup": []
  },
  {
    "text": "Man where the gamers\nCan't believe I got cucked 2x today over 4 hours",
    "lookup": []
  },
  {
    "text": "10 min\nplaying deep rock\n@everyone cs\n?????????????????????????????????????????????????????????????????????????????????\nim on FLEX\nthat means i have the day off BOZO",
    "lookup": []
  },
  {
    "text": "@tad19 ready",
    "lookup": []
  },
  {
    "text": "TAD",
    "lookup": []
  },
  {
    "text": "Bro",
    "lookup": []
  },
  {
    "text": "BRUH\nTAD TOOK THE WEEK OFF\nDOESNT EVN PLAY",
    "lookup": []
  },
  {
    "text": "Also, eastern, Friday night gamers, noone plays wtf",
    "lookup": []
  },
  {
    "text": "playng a deep rock right now]\nno ones here yet anyways",
    "lookup": []
  },
  {
    "text": "im down\nim on\n@everyone cs at 12:30 for sure\nbruh",
    "lookup": []
  },
  {
    "text": "@nylertorton i see you",
    "lookup": []
  },
  {
    "text": "Is it past 12:30???",
    "lookup": []
  },
  {
    "text": "@tad19 boot\n@joeliepolieolie69 boot i see you",
    "lookup": []
  },
  {
    "text": "yup",
    "lookup": []
  },
  {
    "text": "Bruh we already did",
    "lookup": []
  },
  {
    "text": "Nope",
    "lookup": []
  },
  {
    "text": "Hey big man\nGamer time",
    "lookup": []
  },
  {
    "text": "@everyone yes it is time",
    "lookup": []
  },
  {
    "text": "Bruh",
    "lookup": []
  },
  {
    "text": "@everyone cs",
    "lookup": []
  },
  {
    "text": "@theswagengine we are booted",
    "lookup": []
  },
  {
    "text": "Tuesday steam maintenance",
    "lookup": []
  },
  {
    "text": "We got valorant smokes boys",
    "lookup": []
  },
  {
    "text": "Wtf are SUB TICKS\nFucking pym particles\nWe're going deeper\nNot 128 tick, fucking SUB tick\nOh shit\nIs that you?",
    "lookup": []
  },
  {
    "text": "i dont think i got it\nrip\nchecked main and alt",
    "lookup": []
  },
  {
    "text": "Tad's gone underground\nYou saying Tad would LIE to us?!??!",
    "lookup": []
  },
  {
    "text": "I can't believe cs2 is announced and no one is gaming",
    "lookup": []
  },
  {
    "text": "@everyone cs lets go",
    "lookup": []
  },
  {
    "text": "no more cs for me",
    "lookup": []
  },
  {
    "text": "Still no cs2 invite for me",
    "lookup": []
  },
  {
    "text": "CS?\non the alt",
    "lookup": []
  },
  {
    "text": "Ya",
    "lookup": []
  },
  {
    "text": "Not in the cord yet\nObviously not booted\n@everyone CS or gay",
    "lookup": []
  },
  {
    "text": "hurry up and boot\ntad",
    "lookup": []
  },
  {
    "text": "Downloading Diablo 4 beta",
    "lookup": []
  },
  {
    "text": "bro too many servers",
    "lookup": []
  },
  {
    "text": "Dead game btw",
    "lookup": []
  },
  {
    "text": "Diablo 4 anyone",
    "lookup": []
  },
  {
    "text": "Going out till 10pm or 11pm",
    "lookup": []
  },
  {
    "text": "Bruh who plays CS, it's all about Diablo\nYes",
    "lookup": []
  },
  {
    "text": "It's open beta",
    "lookup": []
  },
  {
    "text": "I took a week off work to play cs. And no one plays wtf",
    "lookup": []
  },
  {
    "text": "Tad VAC banned from OF confirmed",
    "lookup": []
  },
  {
    "text": "??",
    "lookup": []
  },
  {
    "text": "@everyone cs?\n@joeliepolieolie69  i see you\n@_d.a.n.a\nthats 4 so far",
    "lookup": []
  },
  {
    "text": "rip have a good night guys\nWe got 4 still\n@joeliepolieolie69 comin?",
    "lookup": []
  },
  {
    "text": "ya we q'd\ncache\nits gonna be a fast game lol\nwe loosing",
    "lookup": []
  },
  {
    "text": "@__honey__ its looking good for you",
    "lookup": []
  },
  {
    "text": "@__honey__ we are ready\nok we're ready",
    "lookup": []
  },
  {
    "text": "I took a week off work to play cs. And no one plays wtf",
    "lookup": []
  },
  {
    "text": "same\nme too",
    "lookup": []
  },
  {
    "text": "im down\nturn notifications off\nBut then you'll miss all the fun\nso\nrip",
    "lookup": []
  },
  {
    "text": "@joeliepolieolie69 ?\n@everyone we have 4 we need 1 more",
    "lookup": []
  },
  {
    "text": "we're already in a game bozo\nwe called you",
    "lookup": []
  },
  {
    "text": "Cycle Froniter updated /wiped\nTime to make this a Just Cycle discord",
    "lookup": []
  },
  {
    "text": "THE CYCLE FRONTIER rumours have literally changed my life. This is no joke. A few weeks ago I was in a really dark place. Then, one fateful night, my friend asked me: “How would react if THE CYCLE FRONTIER update dropped tomorrow?”. For the rest of the night I was shook. I truly believed that if that update had dropped the next, I would have died of excitement .Not joking. I don’t think my weak body that is not used to work, stress or even sport could have handled the update.I think I would have died of shock or a heart attack if THE CYCLE FRONTIER update came back then. This motivated me. I have a lot of sport since then, started going to bed at reasonable times and waking up in the morning again. I eat healthily now and I have decided to quit university, because I cannot have something in my life that stresses me when the update drops. I think I am ready for THE CYCLE FRONTIER now. Bring it on Mr. Newell. I am ready when you are. Are you ready for THE CYCLE FRONTIER? How long do you think the 3kliksphilips video will be, or rather how many will there be in one month? Man, I am so happy. I love this game.",
    "lookup": []
  },
  {
    "text": "Nope",
    "lookup": []
  },
  {
    "text": "She said LEave me alone",
    "lookup": []
  },
  {
    "text": "Nope",
    "lookup": []
  },
  {
    "text": "5 man is so non inclusive.\nIt should be 5 folk",
    "lookup": []
  },
  {
    "text": "I think since this is a CS server, we should have some sort of symbol for the non-cs players, like a star or something, and they could wear it so we know they aren't CS players",
    "lookup": []
  },
  {
    "text": "Huh",
    "lookup": []
  },
  {
    "text": "I voted for Maxime Bernier and i'd do it again god damit",
    "lookup": []
  },
  {
    "text": "I took a week off work to play THE CYCLE FRONTIER. And no one plays wtf",
    "lookup": []
  },
  {
    "text": "CS soon?",
    "lookup": []
  },
  {
    "text": "I didnt get it on either",
    "lookup": []
  },
  {
    "text": "Bit after 6 maybe",
    "lookup": []
  },
  {
    "text": "gf just got home, going out to get some food",
    "lookup": []
  },
  {
    "text": "What is wrong with @CS\nI don't see how\nA notification is a notification\nYou can mute @ notifications",
    "lookup": []
  },
  {
    "text": "Bruh we JUST played and everyone got off",
    "lookup": []
  },
  {
    "text": "Ya when",
    "lookup": []
  },
  {
    "text": "WHERE THE HECK IS THE GAMERS",
    "lookup": []
  },
  {
    "text": "2HEN\nwhen\n7?\nrip",
    "lookup": []
  },
  {
    "text": "@CS EVERYONE CS",
    "lookup": []
  },
  {
    "text": "@everyone we are booting",
    "lookup": []
  },
  {
    "text": "I took a week off work to play cs. And no one plays wtf",
    "lookup": []
  },
  {
    "text": "Gamers",
    "lookup": []
  },
  {
    "text": "?",
    "lookup": []
  },
  {
    "text": "@joeliepolieolie69 no not yet\nthey want to do FACEIT gross",
    "lookup": []
  },
  {
    "text": "@tad19 bringing back segregation wtf\nsends us to the back of the bus\nno they had 3 for Faceit",
    "lookup": []
  },
  {
    "text": "Tad you said one game wtf",
    "lookup": []
  },
  {
    "text": "@CS cs cs?",
    "lookup": []
  },
  {
    "text": "Damage Given to \"khob$\" - 88 in 3 hits\nDamage Given to \"HONEY\" - 11 in 1 hit\nwoulda had him\nDamage Taken from \"khob$\" - 105 in 3 hits",
    "lookup": []
  },
  {
    "text": "Damage to teammates is reduced",
    "lookup": []
  },
  {
    "text": "@CS lets go",
    "lookup": []
  },
  {
    "text": "I'm out for Easter till Sunday night",
    "lookup": []
  },
  {
    "text": "Kid getting a tan from that monitor\nGen x parents to melenials  - \"don't sit too close to the tv you'll go blind\"\nGen z - ^",
    "lookup": []
  },
  {
    "text": "Facts",
    "lookup": []
  },
  {
    "text": "CS at like 6",
    "lookup": []
  },
  {
    "text": "I'll be home soon ish\ngf is driving????\nYa exactly\nCause it's gf's car\nMy car is busted",
    "lookup": []
  },
  {
    "text": "Bruh\nIt was HER mom's we visited lol\nSend me 120$ cause she wants to Lego flowers set\nNo PayPal only bitcoin\n12MBC51Pt4JKbtdoNkEymHAcjFmdRgeHkf\nBTC",
    "lookup": []
  },
  {
    "text": "Bruh you can't send eth to a BTC address",
    "lookup": []
  },
  {
    "text": "@CS just got home, jumping in the shower, I'll be on for 6",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker @phantom_cooper",
    "lookup": []
  },
  {
    "text": "DND",
    "lookup": []
  },
  {
    "text": "CS Deez nuts",
    "lookup": []
  },
  {
    "text": "yrd\nyes\n@CS booting",
    "lookup": []
  },
  {
    "text": "I took a week off work to play cs. And no one plays wtf\nBruh go to sleep",
    "lookup": []
  },
  {
    "text": "I took a week off work to play cs. And no one plays wtf",
    "lookup": []
  },
  {
    "text": "Oh boy\nI'm in office so see you at 6",
    "lookup": []
  },
  {
    "text": "Those characters are 33 btw",
    "lookup": []
  },
  {
    "text": "What dentist is open past 5pm.\nI'm going home now\nI can queue at 4:30",
    "lookup": []
  },
  {
    "text": "Still driving",
    "lookup": []
  },
  {
    "text": "Hone\nHome*\nHOME",
    "lookup": []
  },
  {
    "text": "a wins a win",
    "lookup": []
  },
  {
    "text": "Anyone down for some dirty Cs rn ?\nThis is the 3:49am @CS alarm, just for TAD\nI took a week off work to play cs. And no one plays wtf",
    "lookup": []
  },
  {
    "text": "Are we gaming today or what, im off",
    "lookup": []
  },
  {
    "text": "CS? In THIS economy?",
    "lookup": []
  },
  {
    "text": "guys\nthe Cycle / CS / Dark and Darker / Deep Rock rumor's have literally changed my life",
    "lookup": []
  },
  {
    "text": "What the heck is this",
    "lookup": []
  },
  {
    "text": "not for me tonight\ngotta build a shelf then dnd",
    "lookup": []
  },
  {
    "text": "Nope",
    "lookup": []
  },
  {
    "text": "Sorry boys but dark and darker takes priority",
    "lookup": []
  },
  {
    "text": "That's a no from me",
    "lookup": []
  },
  {
    "text": "Play CS VR",
    "lookup": []
  },
  {
    "text": "I have over 500 hours in the cycle frontier because none of you play CS wtf\nI took a week off work to play cs. And no one plays wtf\nCS at 6? Going to COSTCO soon",
    "lookup": []
  },
  {
    "text": "havent left yet so maybe 630",
    "lookup": []
  },
  {
    "text": "Sell em @phantom_cooper , buy a steam deck",
    "lookup": []
  },
  {
    "text": "I'm still busy",
    "lookup": []
  },
  {
    "text": "Hey me too",
    "lookup": []
  },
  {
    "text": "imagine spending 2000$ in cases to open a 120$ knife",
    "lookup": []
  },
  {
    "text": "@CS PLEASE, i take a week off work and nobody plays wtf",
    "lookup": []
  },
  {
    "text": "YEAH\nlets get some mroe W",
    "lookup": []
  },
  {
    "text": "I took a week off work to play cs. And no one plays wtf",
    "lookup": []
  },
  {
    "text": "No crypto scams in the chat please",
    "lookup": []
  },
  {
    "text": "I ain't playing cs if y'all smooth brains are playing it on steam deck",
    "lookup": []
  },
  {
    "text": "I'm out",
    "lookup": []
  },
  {
    "text": "what IS up GAMERS",
    "lookup": []
  },
  {
    "text": "ggggggggggamers",
    "lookup": []
  },
  {
    "text": "gamers\nwith a hard G",
    "lookup": []
  },
  {
    "text": "booting soon\nin chat",
    "lookup": []
  },
  {
    "text": "we got 5 in game",
    "lookup": []
  },
  {
    "text": "Y'all need a 5th? 😎",
    "lookup": []
  },
  {
    "text": "Got the leak for the new legend of Zelda game\n🎉🎉🎉",
    "lookup": []
  },
  {
    "text": "\"game backups\"\nNintendo sent me the early copy and I downloaded it onto my switch then lost the game in an unfortunate boating accident",
    "lookup": []
  },
  {
    "text": "Not for me",
    "lookup": []
  },
  {
    "text": "Bruh how many times you gonna at cs\nIf we didn't come yet we ain't coming lol",
    "lookup": []
  },
  {
    "text": "gf and I starting Zelda right now",
    "lookup": []
  },
  {
    "text": "Gimme that fish bussy",
    "lookup": []
  },
  {
    "text": "i need 10 and i will",
    "lookup": []
  },
  {
    "text": "Bought a new skin",
    "lookup": []
  },
  {
    "text": "♿♿♿♿♿ <- you're team, but unironicly",
    "lookup": []
  },
  {
    "text": "Hello\nWhat\nNo not yet\n????\nRip",
    "lookup": []
  },
  {
    "text": "If youre using usb to transfer make sure you're plugged into usb 3.0, and make sure you copy and not cut",
    "lookup": []
  },
  {
    "text": "8:40p I'm gonna start gaming",
    "lookup": []
  },
  {
    "text": "Look at Mr moneybags over here not living in a 10foot/10foot cube",
    "lookup": []
  },
  {
    "text": "Hello\nI heard a CircuS was in town",
    "lookup": []
  },
  {
    "text": "Ok",
    "lookup": []
  },
  {
    "text": "@CS  cs o clouck",
    "lookup": []
  },
  {
    "text": "Gamers",
    "lookup": []
  },
  {
    "text": "A csgo pro WOULD say mirage , fuck",
    "lookup": []
  },
  {
    "text": "CLASSIC BROKEN 1.5MILL CONCURENT PLAYERS MATCH MAKING",
    "lookup": []
  },
  {
    "text": "What\nWhat\nOk\nWait for me\nComing",
    "lookup": []
  },
  {
    "text": "@everyone  GAMERSSSSSSSSSSSSSSS\nDOUBLE RANKUP ACROSS THE SKY\nDOUBLE RANKUP ACROSS THE SKY\nDOUBLE RANKUP ACROSS THE SKY\nDOUBLE RANKUP ACROSS THE SKY\nDOUBLE RANKUP ACROSS THE SKY\nDOUBLE RANKUP ACROSS THE SKY\nDOUBLE RANKUP ACROSS THE SKY\nDOUBLE RANKUP ACROSS THE SKY\nDOUBLE RANKUP ACROSS THE SKY\nDOUBLE RANKUP ACROSS THE SKY\nDOUBLE RANKUP ACROSS THE SKY\n♿♿♿♿♿ <- WE're team\\",
    "lookup": []
  },
  {
    "text": "Gamers",
    "lookup": []
  },
  {
    "text": "@CS cs",
    "lookup": []
  },
  {
    "text": "Gamers when",
    "lookup": []
  },
  {
    "text": "maybe right before dnd, if not aftrer for sure",
    "lookup": []
  },
  {
    "text": "12pm",
    "lookup": []
  },
  {
    "text": "Vic Day CS when?",
    "lookup": []
  },
  {
    "text": "im online when its gamer time",
    "lookup": []
  },
  {
    "text": "gamers please",
    "lookup": []
  },
  {
    "text": "I should be down for like 12, just doing some work",
    "lookup": []
  },
  {
    "text": "al;t account hours",
    "lookup": []
  },
  {
    "text": "cant tonight",
    "lookup": []
  },
  {
    "text": "CS before DND tonight? @.lukedankwalker @foolishwizrd @tad19\nVertigo, Agency, Office? lmfao",
    "lookup": []
  },
  {
    "text": "mayb at 12",
    "lookup": []
  },
  {
    "text": "Cs",
    "lookup": []
  },
  {
    "text": "CS?",
    "lookup": []
  },
  {
    "text": "I'll be on soon\nBeen sleeping on the couch",
    "lookup": []
  },
  {
    "text": "@CS cs time",
    "lookup": []
  },
  {
    "text": "Wheres the gamers",
    "lookup": []
  },
  {
    "text": "Jesus Christ gamers",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker @tad19 @foolishwizrd cs tonight?",
    "lookup": []
  },
  {
    "text": "Gamers",
    "lookup": []
  },
  {
    "text": "♿",
    "lookup": []
  },
  {
    "text": "CS soon wait for xris",
    "lookup": []
  },
  {
    "text": "Kk\nCommin",
    "lookup": []
  },
  {
    "text": "gamers",
    "lookup": []
  },
  {
    "text": "cs\nSome egirl unironically made this ASMR cringe",
    "lookup": []
  },
  {
    "text": "you cant get kicked if we do 2+ man",
    "lookup": []
  },
  {
    "text": "@tad19  @nylertorton ?",
    "lookup": []
  },
  {
    "text": "not my gamers",
    "lookup": []
  },
  {
    "text": "I was sleepin\nUmmm let me see if I'm done all my work",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker\n@CS  cs",
    "lookup": []
  },
  {
    "text": "@CS we need 1 more\n@tad19 @nylertorton @__honey__ pliz",
    "lookup": []
  },
  {
    "text": "rip we already in\nwe got a random",
    "lookup": []
  },
  {
    "text": "nope",
    "lookup": []
  },
  {
    "text": "Rip",
    "lookup": []
  },
  {
    "text": "The question you should be asking is what is @CS\nGoing to the mall but I'll be back in 2hr to game",
    "lookup": []
  },
  {
    "text": "I'm still out",
    "lookup": []
  },
  {
    "text": "Home now",
    "lookup": []
  },
  {
    "text": "gamers",
    "lookup": []
  },
  {
    "text": "im right on time",
    "lookup": []
  },
  {
    "text": "@CS ?",
    "lookup": []
  },
  {
    "text": "I took a day off work to play cs. And no one plays wtf\n♿♿♿♿",
    "lookup": []
  },
  {
    "text": "Epic\nBut I think we're gonna go grab a drink 🍻\nI've been gaming since like 9am",
    "lookup": []
  },
  {
    "text": "ill be back later",
    "lookup": []
  },
  {
    "text": "Me you homo , don't stare too much",
    "lookup": []
  },
  {
    "text": "♿♿♿♿ <- you're team",
    "lookup": []
  },
  {
    "text": "Gamersssss",
    "lookup": []
  },
  {
    "text": "gamers please",
    "lookup": []
  },
  {
    "text": "ya @CS",
    "lookup": []
  },
  {
    "text": "full monkey\nim booted",
    "lookup": []
  },
  {
    "text": "@CS  last call game is queued",
    "lookup": []
  },
  {
    "text": "downranked the alt",
    "lookup": []
  },
  {
    "text": "just 'TALKING' counterstrike",
    "lookup": []
  },
  {
    "text": "Gamers please",
    "lookup": []
  },
  {
    "text": "No it's a cry for help",
    "lookup": []
  },
  {
    "text": "@CS cs at 8 sharp\n@.lukedankwalker\n@__honey__ \n@theswagengine \n@theprince1498",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker",
    "lookup": []
  },
  {
    "text": "triggered",
    "lookup": []
  },
  {
    "text": "Ggggggggggamers\n@.lukedankwalker",
    "lookup": []
  },
  {
    "text": "I'm in\nBooting\nYou are NOT team\nL\nRatio",
    "lookup": []
  },
  {
    "text": "@CS  we need 1 more for a 5 stack",
    "lookup": []
  },
  {
    "text": "Gggggamers",
    "lookup": []
  },
  {
    "text": "@CS gamers please",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker cs",
    "lookup": []
  },
  {
    "text": "@CS we got 4 now with Luke\nwe in Lobby",
    "lookup": []
  },
  {
    "text": "No early CS today",
    "lookup": []
  },
  {
    "text": "Gamers",
    "lookup": []
  },
  {
    "text": "gamers please",
    "lookup": []
  },
  {
    "text": "Huh\n♿🥵",
    "lookup": []
  },
  {
    "text": "gmersd",
    "lookup": []
  },
  {
    "text": "I took a week off work to play DEEP ROCK. And no one plays wtf\nI took a week off work to play CYCLE. And no one plays wtf\nI took a week off work to play CSGO. And no one plays wtf",
    "lookup": []
  },
  {
    "text": "g a m er s today?",
    "lookup": []
  },
  {
    "text": "apparently we dont play cs in this sad discord anymore",
    "lookup": []
  },
  {
    "text": "Gamers please\nWtf",
    "lookup": []
  },
  {
    "text": "Booting\n@CS we doing a game boot up",
    "lookup": []
  },
  {
    "text": "Nope\nDnd",
    "lookup": []
  },
  {
    "text": "Gamers\nDeep rock day",
    "lookup": []
  },
  {
    "text": "@CS cs?",
    "lookup": []
  },
  {
    "text": "who the fuck is Smokey Dazer\nBetter be global elite",
    "lookup": []
  },
  {
    "text": "Chris kicked out of the nugget buddies chat shake my head lol\nAlso this discord is Tad's private only fans discord",
    "lookup": []
  },
  {
    "text": "Maybe 11",
    "lookup": []
  },
  {
    "text": "Just got home\nShowering then gamers",
    "lookup": []
  },
  {
    "text": "Ok see you in 30 then",
    "lookup": []
  },
  {
    "text": "Gamers",
    "lookup": []
  },
  {
    "text": "At 1800 hours or in 18 hrs",
    "lookup": []
  },
  {
    "text": "As opposed to the steam deck lol",
    "lookup": []
  },
  {
    "text": "#bigdeckproblems",
    "lookup": []
  },
  {
    "text": "I took a week off work to play cs. And no one plays wtf",
    "lookup": []
  },
  {
    "text": "gamers",
    "lookup": []
  },
  {
    "text": "@CS CS?",
    "lookup": []
  },
  {
    "text": "Gamers please",
    "lookup": []
  },
  {
    "text": "@CS a game of CS?",
    "lookup": []
  },
  {
    "text": "Huh",
    "lookup": []
  },
  {
    "text": "Next one for me",
    "lookup": []
  },
  {
    "text": "🤓",
    "lookup": []
  },
  {
    "text": "Gamers",
    "lookup": []
  },
  {
    "text": "Hello",
    "lookup": []
  },
  {
    "text": "I'm just built different",
    "lookup": []
  },
  {
    "text": "Holy fuck\n20% ofd\nSell those cases\nTriggered",
    "lookup": []
  },
  {
    "text": "Guys should I get one\nI don't leave the house",
    "lookup": []
  },
  {
    "text": "Bruh it's corporate BBQ day in Kitchener",
    "lookup": []
  },
  {
    "text": "I think I might have to pass on the steam deck, if I spent 400$ I might as well spend it on a new desktop cpu, like a 13th gen intel",
    "lookup": []
  },
  {
    "text": "I'm in Kitchener heading home so CS in an hour maybe?",
    "lookup": []
  },
  {
    "text": "Just got home",
    "lookup": []
  },
  {
    "text": "Ok",
    "lookup": []
  },
  {
    "text": "@CS games tonight?",
    "lookup": []
  },
  {
    "text": "gamers please",
    "lookup": []
  },
  {
    "text": "CS?",
    "lookup": []
  },
  {
    "text": "Are we gaming today? @CS",
    "lookup": []
  },
  {
    "text": "@CS cs?",
    "lookup": []
  },
  {
    "text": "I took a week off work to play cs. And no one plays wtf\ndisapointed in this server shake my head\nno cs games for 36hrs",
    "lookup": []
  },
  {
    "text": "(0_о)‎ : !ranks\n● (0_о)‎ : Goomba has 210 wins (GNM)\n● (0_о)‎ : Goomba has 210 wins (GNM)\n● (0_о)‎ : IIIII has 226 wins (MGE)\n● (0_о)‎ : the right cheek has 87 wins (GN3)\n● (0_о)‎ : Baited_By_Joebe has 64 wins (MG1)\n● (Counter-Terrorist) 𐂃𐂃‎ @ CT Start :  if you unmuted me let me know\n● (0_о)‎ : (0_о) has 169 wins (MG2)\n● (0_о)‎ : Got Small Meat, It Is What It Is has 135 wins (MG2)\n● (0_о)‎ : not hacking has 49 wins (MG2)\n● (0_о)‎ : 𐂃𐂃 has 208 wins (GN2)\nwtf is this\ngame started and we all got doxed in the chat",
    "lookup": []
  },
  {
    "text": "sussy teammates",
    "lookup": []
  },
  {
    "text": "on my alt and accidently did short game",
    "lookup": []
  },
  {
    "text": "cs",
    "lookup": []
  },
  {
    "text": "Maybe 3pm for me, at Pearson airport",
    "lookup": []
  },
  {
    "text": "you could look at getting a 3ds / 3dsxl / new 3dsxl / 2ds / new 2dsxl (whichever you like the most, i have a new 3dsxl personally) and then hack it easily, and get 3ds games + whatever emulators you want like gba advanced etc",
    "lookup": []
  },
  {
    "text": "bruh how small are your eyes, bigger screen",
    "lookup": []
  },
  {
    "text": "@CS  ?",
    "lookup": []
  },
  {
    "text": "taking a break for some tv then doing a cs and a deep rock",
    "lookup": []
  },
  {
    "text": "Gamers please",
    "lookup": []
  },
  {
    "text": "Booting",
    "lookup": []
  },
  {
    "text": "@CS gamers please",
    "lookup": []
  },
  {
    "text": "@theprince1498 @theswagengine @.lukedankwalker @tad19 @joebe2",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker @theprince1498 @__honey__\n@CS we have 4 we need one more",
    "lookup": []
  },
  {
    "text": "get in here\n@theprince1498 ??",
    "lookup": []
  },
  {
    "text": "Cs later\nDon't you degens work?",
    "lookup": []
  },
  {
    "text": "Playing CS early what about later\nBruh I'm in office today\nI probably work 5 hr a day too but I at least pretend to work till ~5pm",
    "lookup": []
  },
  {
    "text": "Tad is the 1%",
    "lookup": []
  },
  {
    "text": "@CS cs",
    "lookup": []
  },
  {
    "text": "@CS cs",
    "lookup": []
  },
  {
    "text": "I just got up",
    "lookup": []
  },
  {
    "text": "another @CS ?",
    "lookup": []
  },
  {
    "text": "OOF\na wins a win\ncarried by MGs",
    "lookup": []
  },
  {
    "text": "@CS gamers today or I riot",
    "lookup": []
  },
  {
    "text": "Gamers please",
    "lookup": []
  },
  {
    "text": "@CS gamers plz",
    "lookup": []
  },
  {
    "text": "@CS we're putting a team together",
    "lookup": []
  },
  {
    "text": "@CS hello",
    "lookup": []
  },
  {
    "text": "??¿??????\n¿??¿??¿????¿",
    "lookup": []
  },
  {
    "text": "Bruh\nI'm in the office, after 5, for me",
    "lookup": []
  },
  {
    "text": "Is this a CS discord or a little baby blues clues discord\n@tad19 hello",
    "lookup": []
  },
  {
    "text": "believe it or not.. dead\n@CS gamers please\nits time",
    "lookup": []
  },
  {
    "text": "I mean, a wins a win am i right",
    "lookup": []
  },
  {
    "text": "I think I've re decided to get a steam deck",
    "lookup": []
  },
  {
    "text": "@CS gamers",
    "lookup": []
  },
  {
    "text": "-Joebe2 reacted ♿",
    "lookup": []
  },
  {
    "text": "Liers",
    "lookup": []
  },
  {
    "text": "@CS can we get a team? if not im battlebitting",
    "lookup": []
  },
  {
    "text": "@CS time",
    "lookup": []
  },
  {
    "text": "22 minutes",
    "lookup": []
  },
  {
    "text": "bigol 5 man",
    "lookup": []
  },
  {
    "text": "Bruh tad is censoring my posts",
    "lookup": []
  },
  {
    "text": "Does Chris have admin?\nThen it was Chris lol\nBurh CHRIS is censoring my posts\nI am down for CS, gf has a guest over , so after they leave\nhopefully sometime in the next 30ish minutes",
    "lookup": []
  },
  {
    "text": "im ready\n@CS cs longgame in 15min",
    "lookup": []
  },
  {
    "text": "@CS comeon\n@.lukedankwalker",
    "lookup": []
  },
  {
    "text": "tad?\nlol",
    "lookup": []
  },
  {
    "text": "I went to sleep",
    "lookup": []
  },
  {
    "text": "@tad19 how is the Miyoo Mini Plus, what are you playing on it",
    "lookup": []
  },
  {
    "text": "ya cs\nafter i get the steamdeck, i might get a Miyoo mini plus\ni got the 3dsxl for emulators but meh\n@CS at 4",
    "lookup": []
  },
  {
    "text": "@tad19 ?",
    "lookup": []
  },
  {
    "text": "@CS @tad19",
    "lookup": []
  },
  {
    "text": "ya 3dsxl is best for ds/3ds, and i played gba and gb on it too\nalright 4pm means 4pm now its 4:$5\n@CS 5pm comon boot up",
    "lookup": []
  },
  {
    "text": "you be better off with one of the emulators than a vita\n@CS everyone gamer time",
    "lookup": []
  },
  {
    "text": "@everyone gamers",
    "lookup": []
  },
  {
    "text": "@tad19 i bought the Miyoo Mini+ too\n@CS pliz",
    "lookup": []
  },
  {
    "text": "@CS today\nI've been gaming all morning, id be down for 3:30",
    "lookup": []
  },
  {
    "text": "qwhere, are the gamers\n@CS gamers",
    "lookup": []
  },
  {
    "text": "bruh",
    "lookup": []
  },
  {
    "text": "Ok\nMaking some eggs",
    "lookup": []
  },
  {
    "text": "@CS last call we booted",
    "lookup": []
  },
  {
    "text": "@CS ?",
    "lookup": []
  },
  {
    "text": "@CS any gamers?",
    "lookup": []
  },
  {
    "text": "@CS gamers",
    "lookup": []
  },
  {
    "text": "@CS gamerssssssss\ngamers",
    "lookup": []
  },
  {
    "text": "@CS we are doing one rgiht now",
    "lookup": []
  },
  {
    "text": "Me and honey just did 2",
    "lookup": []
  },
  {
    "text": "I'd be down for a 6pm",
    "lookup": []
  },
  {
    "text": "I guess 615 no one here yet",
    "lookup": []
  },
  {
    "text": "@CS lets go\n@.lukedankwalker",
    "lookup": []
  },
  {
    "text": "@CS we got 3 boot up",
    "lookup": []
  },
  {
    "text": "CS o clock?\nBooting 2",
    "lookup": []
  },
  {
    "text": "WE RAN INTO A GUY THAT ALSO DOES YOURE TEAM\nWHAT ARE THE ODS\nhe said he got it from a guy on overpass, we are playing overpass now lmfao",
    "lookup": []
  },
  {
    "text": "we just did 2, i think we on break",
    "lookup": []
  },
  {
    "text": "lol its ALT time",
    "lookup": []
  },
  {
    "text": "bruh just dont go on twitter\nandroid you can set time limits every day on apps\nI have a 30 minute timer on youtube so i dont lay in bed on my phone on youtube, ill go to the tv if i wanna watch stuff",
    "lookup": []
  },
  {
    "text": "I ain't 36\nI ain't even 30\n@CS are we gaming again?",
    "lookup": []
  },
  {
    "text": "???\n@CS cs??",
    "lookup": []
  },
  {
    "text": "@CS we have 3",
    "lookup": []
  },
  {
    "text": "@__honey__ WE NEED A 5TH RIGHT NOW",
    "lookup": []
  },
  {
    "text": "Bruh looks like the slums\nDrug lab?",
    "lookup": []
  },
  {
    "text": "@everyone gamers @CS",
    "lookup": []
  },
  {
    "text": "Could do one in a bit\nWe battle bit now",
    "lookup": []
  },
  {
    "text": "I'm in office so can't",
    "lookup": []
  },
  {
    "text": "Got my steam deck",
    "lookup": []
  },
  {
    "text": "Nope",
    "lookup": []
  },
  {
    "text": "Nope\nI ain't cs'in after that horrible display yesterday lmfao",
    "lookup": []
  },
  {
    "text": "My Miyoo mini plus I guess is on airmail from Hong Kong, it's already in Toronto , nice\nHonestly more hyped for that right now vs steam deck lol",
    "lookup": []
  },
  {
    "text": "huyh\nshould do deep rock",
    "lookup": []
  },
  {
    "text": "Beuh\nIf you're having computer problems I ain't playing lmfaooo",
    "lookup": []
  },
  {
    "text": "If you're a toxic player and you love to talk trash after winning a game, instead try typing \"gg\" after a game, it stands for \"git gud\" and it will totally embarrass the enemy. If you really want to make them mad, say \"ggwp\", it stands for \"git gud, weak player\".",
    "lookup": []
  },
  {
    "text": "Don't be toxic",
    "lookup": []
  },
  {
    "text": "Did Tad post this?",
    "lookup": []
  },
  {
    "text": "Where are da boys",
    "lookup": []
  },
  {
    "text": "@CS lets go",
    "lookup": []
  },
  {
    "text": "Battlebit is alright",
    "lookup": []
  },
  {
    "text": "We won\nIm booting",
    "lookup": []
  },
  {
    "text": "Gamers gamers gamers gamers",
    "lookup": []
  },
  {
    "text": "Gamers please , I'll be back at 330 and alone for next few hours gamers gamers gamers",
    "lookup": []
  },
  {
    "text": "dnd at 9, so gamers at 12",
    "lookup": []
  },
  {
    "text": "still dnd",
    "lookup": []
  },
  {
    "text": "@CS gamers\nnot sure\n@.lukedankwalker",
    "lookup": []
  },
  {
    "text": "alt office",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker wakeup gamer its time to burn this office",
    "lookup": []
  },
  {
    "text": "Our randommmm",
    "lookup": []
  },
  {
    "text": "gamers\n@.lukedankwalker",
    "lookup": []
  },
  {
    "text": "@CS gamers",
    "lookup": []
  },
  {
    "text": "@tad19 which game are you playing on the mini",
    "lookup": []
  },
  {
    "text": "ya but which onessssss",
    "lookup": []
  },
  {
    "text": "Wow gonna make me quit work early eh\nBooting\nBooting so hard",
    "lookup": []
  },
  {
    "text": "we still booting",
    "lookup": []
  },
  {
    "text": "@CS gamers? @theprince1498 ?",
    "lookup": []
  },
  {
    "text": "Ok",
    "lookup": []
  },
  {
    "text": "@CS when gamer time?\nI gotta finish working and get groceries",
    "lookup": []
  },
  {
    "text": "Gamers maybe?",
    "lookup": []
  },
  {
    "text": "@gamers @CS ?",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker ?",
    "lookup": []
  },
  {
    "text": "THATS IT\nIM RETIRING",
    "lookup": []
  },
  {
    "text": "im verifying so hard right now",
    "lookup": []
  },
  {
    "text": "Holyyyyy crap, god tier, now THATS a burna squad play",
    "lookup": []
  },
  {
    "text": "When gamers?",
    "lookup": []
  },
  {
    "text": "@CS?",
    "lookup": []
  },
  {
    "text": "everybody get in we're playing CS",
    "lookup": []
  },
  {
    "text": "Helloooo",
    "lookup": []
  },
  {
    "text": "It's gonna be us",
    "lookup": []
  },
  {
    "text": "I fall asleep on the couch for 2hrs and still no gamers man",
    "lookup": []
  },
  {
    "text": "@CS ?????",
    "lookup": []
  },
  {
    "text": "im gonna do a cs\n@CS anyone for ranked or even unranked?",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker \n@tad19 \n@foolishwizrd \nlvl2 you happy lol\nits friday\nshe works tomorrow",
    "lookup": []
  },
  {
    "text": "lvl3 lets go",
    "lookup": []
  },
  {
    "text": "There we go, I am now higher profile lvl than Luke's alt lol\nI spent like 0.80$ on badges\nand i have a csgo badge now too",
    "lookup": []
  },
  {
    "text": "Bought a GLOCK too, for my alt lol\nthats all im gonna do on the alt, i got 1.15$ left over for something else maybe",
    "lookup": []
  },
  {
    "text": "Gamers tonight",
    "lookup": []
  },
  {
    "text": "@CS when",
    "lookup": []
  },
  {
    "text": "playing battle bit with the boys, cs later",
    "lookup": []
  },
  {
    "text": "@CS @tad19 ?",
    "lookup": []
  },
  {
    "text": "@tad19 ???",
    "lookup": []
  },
  {
    "text": "@CS ???",
    "lookup": []
  },
  {
    "text": "Why so early CS",
    "lookup": []
  },
  {
    "text": "@CS ?",
    "lookup": []
  },
  {
    "text": "@CS anytime",
    "lookup": []
  },
  {
    "text": "@CS ???",
    "lookup": []
  },
  {
    "text": "@CS ??? but for real now",
    "lookup": []
  },
  {
    "text": "gamers\nspamming the chats to get high trust factor",
    "lookup": []
  },
  {
    "text": "hes going to bed\n@CS we have 3",
    "lookup": []
  },
  {
    "text": "@CS tonight? Just going out for a bit then I'll be back",
    "lookup": []
  },
  {
    "text": "You matched unranked for some reason\nGamers soon but not yet for me",
    "lookup": []
  },
  {
    "text": "@foolishwizrd boot",
    "lookup": []
  },
  {
    "text": "I'm be back for the next, going to go shower cause you're still half way",
    "lookup": []
  },
  {
    "text": "Ok I'll be next next, going to office tomorrow so I gotta shave up",
    "lookup": []
  },
  {
    "text": "Be back in 5",
    "lookup": []
  },
  {
    "text": "you see what CS has become????????????\nwtf is this\nour team was throwing since round 2",
    "lookup": []
  },
  {
    "text": "Big throw energy",
    "lookup": []
  },
  {
    "text": "Gmayers\nI'm only doing short games from now on",
    "lookup": []
  },
  {
    "text": "Gamers\n@.lukedankwalker",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker ?\nSorry I slept on the couch for a bit, long day in the office\n@CS short game?",
    "lookup": []
  },
  {
    "text": "ok i guess",
    "lookup": []
  },
  {
    "text": "gamers gamers gamer @CS",
    "lookup": []
  },
  {
    "text": "Classic",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker cs?",
    "lookup": []
  },
  {
    "text": "@CS again soon?\nI haven't done a wingman on Lake in awhile\nOr danger zone, If anyone is down to do a danger zone",
    "lookup": []
  },
  {
    "text": "@CS ?>??",
    "lookup": []
  },
  {
    "text": "@CS ready for cs whenever",
    "lookup": []
  },
  {
    "text": "kk\n@CS its time\n@CS booted boot boot boot",
    "lookup": []
  },
  {
    "text": "@CS ??? @tad19",
    "lookup": []
  },
  {
    "text": "deranks all around",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker gamers",
    "lookup": []
  },
  {
    "text": "R I P\nbut we gotta download baulders gate\nits over 100gb",
    "lookup": []
  },
  {
    "text": "at least start the torrent XD",
    "lookup": []
  },
  {
    "text": "Gamers gamers gamers",
    "lookup": []
  },
  {
    "text": "@CS whenever",
    "lookup": []
  },
  {
    "text": "@CS lets go",
    "lookup": []
  },
  {
    "text": "@CS we booted @theswagengine",
    "lookup": []
  },
  {
    "text": "@theswagengine ???",
    "lookup": []
  },
  {
    "text": "?",
    "lookup": []
  },
  {
    "text": "@CS PLIZ",
    "lookup": []
  },
  {
    "text": "Gamers please",
    "lookup": []
  },
  {
    "text": "@CS ??",
    "lookup": []
  },
  {
    "text": "cs",
    "lookup": []
  },
  {
    "text": "@CS ???",
    "lookup": []
  },
  {
    "text": "helo\nhello",
    "lookup": []
  },
  {
    "text": "bruh wtf is this\ncs server and no one plays cs\n♿♿♿♿♿ <- you're team\nI took a week off work to play cs. And no one plays wtf\n﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽ ﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽ ﷽﷽ ﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽ ﷽﷽ ﷽﷽﷽ ﷽﷽\n﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽ ﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽ ﷽﷽ ﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽ ﷽﷽ ﷽﷽﷽ ﷽﷽\n﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽ ﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽ ﷽﷽ ﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽ ﷽﷽ ﷽﷽﷽ ﷽﷽",
    "lookup": []
  },
  {
    "text": "@tad19 @tad19 @tad19\n@nylertorton \n@phrakturemusic",
    "lookup": []
  },
  {
    "text": "Doin a cs",
    "lookup": []
  },
  {
    "text": "Ya gamers\nWell I tired at every other time, might as well try at 4am",
    "lookup": []
  },
  {
    "text": "CS?\nbooted",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker",
    "lookup": []
  },
  {
    "text": "@theswagengine boot",
    "lookup": []
  },
  {
    "text": "Chris is at gen con\nNah I'm not doing more cs\nNah\nNot getting trolled any more today",
    "lookup": []
  },
  {
    "text": "@phantom_cooper ballders",
    "lookup": []
  },
  {
    "text": "2L8QP8EGHHHGKB",
    "lookup": []
  },
  {
    "text": "Can you wait 10 min?\nOr less\nOk 827",
    "lookup": []
  },
  {
    "text": "G A M E R S",
    "lookup": []
  },
  {
    "text": "@CS get me on the next",
    "lookup": []
  },
  {
    "text": "Gamers?",
    "lookup": []
  },
  {
    "text": "@tad19 you didnt say anything you just got off",
    "lookup": []
  },
  {
    "text": "whats theis new case?\nsays new\nyou dont have to buy the case+key, you just buy the package and get a drop?",
    "lookup": []
  },
  {
    "text": "going to be doing baldurs gate soon",
    "lookup": []
  },
  {
    "text": "CS lame\nUsually it's me trying to queue\nNo one queues",
    "lookup": []
  },
  {
    "text": "not me\nbowling",
    "lookup": []
  },
  {
    "text": "Dead game",
    "lookup": []
  },
  {
    "text": "gaming all day",
    "lookup": []
  },
  {
    "text": "Aug 21 is the 11th birthday of CSGO, possibly cs2 release date? Or rumors are at least by Sept 23rd as there is some CS2 major events or leaderboards etc",
    "lookup": []
  },
  {
    "text": "Just had some gamerfuel for the gamer time",
    "lookup": []
  },
  {
    "text": "dead game",
    "lookup": []
  },
  {
    "text": "too busy watching egirls on Twitch",
    "lookup": []
  },
  {
    "text": "Dead game\nTad needs to reinstate the 2 game a week rule or you're BANNED\nSmh name of the server is JUSTCS and can't even get a queue going so tad invites his wife's BF's kids to the server smh\nSmhmh\nShould rename the server 'just killmenow'",
    "lookup": []
  },
  {
    "text": "Remember kids , ask your parent or guardian before going online",
    "lookup": []
  },
  {
    "text": "If the game is not Tarkovs gate 3 then it's a dead game\nI'm probably going to bed been up g@ming since 2am",
    "lookup": []
  },
  {
    "text": "gf outta town for the weekend, what am i gonna do mang",
    "lookup": []
  },
  {
    "text": "only if you post in the OF channel",
    "lookup": []
  },
  {
    "text": "Has your borther played with me?\nThought not\nSo how does he know Flobal is the only good player",
    "lookup": []
  },
  {
    "text": "Some of us never fell",
    "lookup": []
  },
  {
    "text": "At this hour?",
    "lookup": []
  },
  {
    "text": "The only voting I do is voting which map to ban",
    "lookup": []
  },
  {
    "text": "Shopping\nTouching grass for first time since Thursday last week",
    "lookup": []
  },
  {
    "text": "It's gamer time in the city\nFriday night LEDs (or OLEDs)",
    "lookup": []
  },
  {
    "text": "nuke?\n5 mang?\nbruh\nline starts when you join the discord bud\n\"im already booted\"",
    "lookup": []
  },
  {
    "text": "\"only good player in this server\"\nhughest rank bruh",
    "lookup": []
  },
  {
    "text": "GAMERS",
    "lookup": []
  },
  {
    "text": "GAMERS",
    "lookup": []
  },
  {
    "text": "No CS here\nHoney already played and left",
    "lookup": []
  },
  {
    "text": "bruh",
    "lookup": []
  },
  {
    "text": "im here",
    "lookup": []
  },
  {
    "text": "bruh we are here\nhello\nhello\ngamers\n@CS @here\nhello\nH 3 11 1 0",
    "lookup": []
  },
  {
    "text": "See ya, have a bahn tahime",
    "lookup": []
  },
  {
    "text": "Still working",
    "lookup": []
  },
  {
    "text": "I'm time for gamers now",
    "lookup": []
  },
  {
    "text": "I'm still working\n4 day weekend 4 me",
    "lookup": []
  },
  {
    "text": "I checked no beta on main\nDidn't check alt",
    "lookup": []
  },
  {
    "text": "wtf\nverifying so hard right now",
    "lookup": []
  },
  {
    "text": "oh great, lukes going to have to spend 3 compt games setting up his buy binds while throwing the entire game or he can't play\nwhat\nyou dont have jump bound to mouse wheel???\nsuck my entire dick and balls\n@CS SUCK\n@CS MY\n@CS ENTIRE",
    "lookup": []
  },
  {
    "text": "haters gonna hate i guess",
    "lookup": []
  },
  {
    "text": "REPORTING TAD\n♿♿♿♿♿ <- you're team",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker",
    "lookup": []
  },
  {
    "text": "I'm a MUTHAFUCKIN starboy",
    "lookup": []
  },
  {
    "text": "imagine having the letters CS in your name\n@CS wheres the gang",
    "lookup": []
  },
  {
    "text": "brb",
    "lookup": []
  },
  {
    "text": "Wheres the gamers",
    "lookup": []
  },
  {
    "text": "@jerbear107 starfield?\n@CS cs2?\ni play both sides so i always end up on top",
    "lookup": []
  },
  {
    "text": "im anyone\n@CS  930",
    "lookup": []
  },
  {
    "text": "Did you get your disabled parking pass in the mail yet?",
    "lookup": []
  },
  {
    "text": "Mother fucker really watching Titanic one handed because of Leo\nI'm a mother fucking starboy tonight",
    "lookup": []
  },
  {
    "text": "One game wtf\nI'm gonna shower first so maybe 20 minutes for me at least if you want",
    "lookup": []
  },
  {
    "text": "What does that mean",
    "lookup": []
  },
  {
    "text": "like midnight\nits dnd night\nsundays",
    "lookup": []
  },
  {
    "text": "@CS  cs2 today?",
    "lookup": []
  },
  {
    "text": "Ya with the new ranking system\nAlso I learned today the number ranking is only for premier and the 'per map rank' excludes premier mode\nI want to play the other maps with the per map rank in cs2\nRight now no point playing Anubis etc if we don't have at least a general idea of some strats we can do",
    "lookup": []
  },
  {
    "text": "@CS 2\n?",
    "lookup": []
  },
  {
    "text": "Hello hello\n@CS ?",
    "lookup": []
  },
  {
    "text": "Basically the 'number' is just how much you're through the rank, so 0-1000 is rank 1, 1001 to 2000 is rank 2 etc. You're on your relegation match which means if you loose the next one you're gonna downrank.\nIt will also show if you're on a 'promotion match' meaning you'll rank up on the next win\nYou're right at 12k so youll loose Elo and go down to 11xxx basically meaning you went down a rank",
    "lookup": []
  },
  {
    "text": "anyone for cs2?\n@.lukedankwalker cs2?",
    "lookup": []
  },
  {
    "text": "Hello\nCS CS CS bootin",
    "lookup": []
  },
  {
    "text": "cs2\nwe need 2 more",
    "lookup": []
  },
  {
    "text": "we already started",
    "lookup": []
  },
  {
    "text": "Why'd everyone leave\nNo one playing any other games?\nI had dinner now I'm booting Starfield",
    "lookup": []
  },
  {
    "text": "not me",
    "lookup": []
  },
  {
    "text": "idk luke was complaing about acidently picking up his dropped pistol when he bought a pistol or something , pressing E",
    "lookup": []
  },
  {
    "text": "Bruh you guys really making me quit work early eh",
    "lookup": []
  },
  {
    "text": "Can we do 5:10?",
    "lookup": []
  },
  {
    "text": "@CS need 2 more\n♿♿♿♿♿ <- you're team",
    "lookup": []
  },
  {
    "text": "I'm doing the garbage brb",
    "lookup": []
  },
  {
    "text": "@tad19 ?",
    "lookup": []
  },
  {
    "text": "What IS up GAMERS",
    "lookup": []
  },
  {
    "text": "@CS cs2?",
    "lookup": []
  },
  {
    "text": "Who else\nWhere's the GAMERS",
    "lookup": []
  },
  {
    "text": "I want to get my 22'500 premier rank, just 3 more wins",
    "lookup": []
  },
  {
    "text": "@CS 9pm CS2",
    "lookup": []
  },
  {
    "text": "Gamers?\nI'm booting\nNeed 2 more",
    "lookup": []
  },
  {
    "text": "@tad19 we hear you\nbruh",
    "lookup": []
  },
  {
    "text": "@CS 2?\n@CS cs2\n@.lukedankwalker ?\n@CS we need 2",
    "lookup": []
  },
  {
    "text": "@CS need 2 more",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker\n@CS we need 1 more\n@CS we need just 1 more, or 3 more\n@.lukedankwalker\n♿♿♿♿♿ <- you're team",
    "lookup": []
  },
  {
    "text": "Later",
    "lookup": []
  },
  {
    "text": "Where the gamers at\nCs2?",
    "lookup": []
  },
  {
    "text": "another cs2 update\n400mb",
    "lookup": []
  },
  {
    "text": "Honey and I did 2\nHoney left",
    "lookup": []
  },
  {
    "text": "👍",
    "lookup": []
  },
  {
    "text": "Spigot said 930",
    "lookup": []
  },
  {
    "text": "@CS at 930\n@CS 2",
    "lookup": []
  },
  {
    "text": "@CS 2 soon?",
    "lookup": []
  },
  {
    "text": "@CS gamers?\nI'm down for cs2 , or alt csgo",
    "lookup": []
  },
  {
    "text": "Cs2 enjoyers",
    "lookup": []
  },
  {
    "text": "@CS down for another cs2? I can boot\nOk",
    "lookup": []
  },
  {
    "text": "hell ya 223 points\n@CS need 2 more , have 3",
    "lookup": []
  },
  {
    "text": "@tad19 pliz",
    "lookup": []
  },
  {
    "text": "@CS cs2\n@tad19 @.lukedankwalker",
    "lookup": []
  },
  {
    "text": "@CS cs2, need 1 or 3 people?\n@tad19 @.lukedankwalker",
    "lookup": []
  },
  {
    "text": "@CS gamers cs2",
    "lookup": []
  },
  {
    "text": "Gamers\nGamer roll call",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker",
    "lookup": []
  },
  {
    "text": "Ok",
    "lookup": []
  },
  {
    "text": "@tad19 boot for 5 man",
    "lookup": []
  },
  {
    "text": "@CS need 1",
    "lookup": []
  },
  {
    "text": "we have 4 right now\nwe need 1 more\ndnd tonight so we busy from 9-12\n5gLTE",
    "lookup": []
  },
  {
    "text": "FYI Shroud is currently at 11700 premier rank",
    "lookup": []
  },
  {
    "text": "THE EXACT QUOTE IS 'LOOK WHOS BACK ON TOP OF THE LEADERBOARD'",
    "lookup": []
  },
  {
    "text": "Later for me\n6 or 7",
    "lookup": []
  },
  {
    "text": "Yee",
    "lookup": []
  },
  {
    "text": "Ya I guess 9pm for me too",
    "lookup": []
  },
  {
    "text": "I thought tad said 9",
    "lookup": []
  },
  {
    "text": "I'll be ready for 8 or 9. I'm on my rankup game so save one for me",
    "lookup": []
  },
  {
    "text": "Not yet",
    "lookup": []
  },
  {
    "text": "@CS where everyone go?\n@CS are we doing anymore?",
    "lookup": []
  },
  {
    "text": "ight ight 9 it is",
    "lookup": []
  },
  {
    "text": "9",
    "lookup": []
  },
  {
    "text": "Biotin",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker ????\ntheres still another round bruh\n@.lukedankwalker\nwe're still in\nhurry back\n@.lukedankwalker",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker hurrrrrryyy",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker we lost 16-14, we had 3 more rounds after you left",
    "lookup": []
  },
  {
    "text": "Nah",
    "lookup": []
  },
  {
    "text": "Look at this quality merchandise I rescued from the office",
    "lookup": []
  },
  {
    "text": "Lifted",
    "lookup": []
  },
  {
    "text": "CS ur mum\nԅ(≖‿≖ԅ) <---- Me on my way to fuck your mother\nI'll fix that\nI'm in the office\nGonna go to best buy by the mall first on the way home\nWebcam for my only fans",
    "lookup": []
  },
  {
    "text": "But then I'm cutting into the profits\nI can probably game at 6, but I gotta pick gf up from work around 7",
    "lookup": []
  },
  {
    "text": "Gordon/stone is fuckeddddd\nI forgot students",
    "lookup": []
  },
  {
    "text": "Going home",
    "lookup": []
  },
  {
    "text": "Im booting right now really",
    "lookup": []
  },
  {
    "text": "brb\n15 min",
    "lookup": []
  },
  {
    "text": "I just got home again\nNeed a few\n@CS cs2 again\nneed 2",
    "lookup": []
  },
  {
    "text": "Halo MCC gamers???? We should buy?",
    "lookup": []
  },
  {
    "text": "@CS gamers when?",
    "lookup": []
  },
  {
    "text": "Gmrs",
    "lookup": []
  },
  {
    "text": "@CS hello wake up",
    "lookup": []
  },
  {
    "text": "Sure\n@.lukedankwalker\nGreen boys\ntheres a 3gb cs update",
    "lookup": []
  },
  {
    "text": "L",
    "lookup": []
  },
  {
    "text": "why dont you play nuke with us you coward",
    "lookup": []
  },
  {
    "text": "@CS when round 2\nim back",
    "lookup": []
  },
  {
    "text": "Can we get a @CS together? We got like and I, and flobal / spigot said they'd be on. We need 1 more",
    "lookup": []
  },
  {
    "text": "Well we can't get a 5 man without a 4 man, and we can't get a 4 man without a 3 man, and so far we have a 2 man so come on spigot and be the 3rd man",
    "lookup": []
  },
  {
    "text": "Not for me, maybe later on",
    "lookup": []
  },
  {
    "text": "Later for me",
    "lookup": []
  },
  {
    "text": "I just woke up\nSoon soon tm",
    "lookup": []
  },
  {
    "text": "I'm still using eclipse ~~keybinds for vscode~~\nImagine using GitHub, man my team don't even use git half the time we push to production lmfao",
    "lookup": []
  },
  {
    "text": "Going to go for groceries, so 6pm+ for me",
    "lookup": []
  },
  {
    "text": "Gamers 9? I gotta make dinner",
    "lookup": []
  },
  {
    "text": "Cooking\nSoon",
    "lookup": []
  },
  {
    "text": "im booted, finishing cooking\nim at 5999 so its my rankup match so no throwing",
    "lookup": []
  },
  {
    "text": "you know him?\ntell him to carry us on his alt",
    "lookup": []
  },
  {
    "text": "@CS we need 2 more",
    "lookup": []
  },
  {
    "text": "new rank list",
    "lookup": []
  },
  {
    "text": "^ see you on Inferno",
    "lookup": []
  },
  {
    "text": "Gamers?",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker cs?",
    "lookup": []
  },
  {
    "text": "What's the status",
    "lookup": []
  },
  {
    "text": "booted",
    "lookup": []
  },
  {
    "text": "@CS need 2",
    "lookup": []
  },
  {
    "text": "@CS any more gamers?",
    "lookup": []
  },
  {
    "text": "💯\nGamers",
    "lookup": []
  },
  {
    "text": "@CS ??",
    "lookup": []
  },
  {
    "text": "@CS cs2",
    "lookup": []
  },
  {
    "text": "I've seen @phrakturemusic , @tad19 , @nylertorton , and @.lukedankwalker all pop their heads in, thats a 5man right there\nis that some kind of sex thing im not aware of?",
    "lookup": []
  },
  {
    "text": "so no one joined so i had to soloq and lost 115\nbruh rip this is why im so low\ni was the lowest rank out of 9+1 unranked guys, didnt even bottom frag, got 3rd 17kills\nlost 11-13",
    "lookup": []
  },
  {
    "text": "Costco, later",
    "lookup": []
  },
  {
    "text": "I think 6:30-7 for me",
    "lookup": []
  },
  {
    "text": "10mim",
    "lookup": []
  },
  {
    "text": "im hacking the mainframe",
    "lookup": []
  },
  {
    "text": "@CS we have a 5 man starting in 5ish minutes\n@theswagengine @phrakturemusic @joebe2 @__honey__ @tad19",
    "lookup": []
  },
  {
    "text": "@foolishwizrd take my spot",
    "lookup": []
  },
  {
    "text": "@CS ?",
    "lookup": []
  },
  {
    "text": "spiggot pliz",
    "lookup": []
  },
  {
    "text": "Need training day for ancient / Anubis",
    "lookup": []
  },
  {
    "text": "Our shittiest maps are mirage / vertigo. And also ancient / Anubis but we have been falling upwards on those maps and winning. But I feel we don't have complex strats / nades yet\nNah we goats on inferno\nOur graph shows inferno, ancient, nuke\nCan we go back to CSGO? I want to play dust2",
    "lookup": []
  },
  {
    "text": "???\n♿ <- you're",
    "lookup": []
  },
  {
    "text": "You need me to boot?\n@.lukedankwalker\nBooting",
    "lookup": []
  },
  {
    "text": "I think veto: Mirage, Vertigo, Overpass now.\nAnd choose between Ancient, Nuke Anubis\nInferno a floater\ntime to get POLITICAL",
    "lookup": []
  },
  {
    "text": "pp SAID THE HARD R",
    "lookup": []
  },
  {
    "text": "I thought everyone just got off",
    "lookup": []
  },
  {
    "text": "I'll do another too",
    "lookup": []
  },
  {
    "text": "@__honey__ pliz",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker ADD ONE TALLY TO THE VENT DIVE WIN COUNTTTTTTTTTTTT",
    "lookup": []
  },
  {
    "text": "you need to win to get a rankup, cant tie",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker come back for a 5th\nwe just won",
    "lookup": []
  },
  {
    "text": "^ gonna frame this and put it on the fridge",
    "lookup": []
  },
  {
    "text": "@tad19 ?",
    "lookup": []
  },
  {
    "text": "No CS for me today",
    "lookup": []
  },
  {
    "text": "That looks like less than a 10 inch bass for sure",
    "lookup": []
  },
  {
    "text": "Yes",
    "lookup": []
  },
  {
    "text": "I was in office all day\nPresenting In a meeting room all day\nTeaching analysts how to be developers",
    "lookup": []
  },
  {
    "text": "Home now\nI'm ready to do some Ferrari peaks on NUKE",
    "lookup": []
  },
  {
    "text": "two losees\nlike 13-4 and 13-2\n13k rank on their team with like 7 kills, 6k rank on this team with like 19",
    "lookup": []
  },
  {
    "text": "I think the dream is over\nHoney and I are tired and tilted\nLuke has dnd",
    "lookup": []
  },
  {
    "text": "So cs2 next week rumors?",
    "lookup": []
  },
  {
    "text": "Can we please play danger zone LOL\n@CS cs2, no throwing today Pliz\nI'm home early",
    "lookup": []
  },
  {
    "text": "I need a nap I think first",
    "lookup": []
  },
  {
    "text": "Hello\nI can't imagine because you guys got me stuck at 6'300",
    "lookup": []
  },
  {
    "text": "I'm down to clown @CS 2",
    "lookup": []
  },
  {
    "text": "im queing",
    "lookup": []
  },
  {
    "text": "i won\nwe threw a huge lead, it was like 11-3 and it ended up being 16-14 in OT",
    "lookup": []
  },
  {
    "text": "I carried\n(no proof)",
    "lookup": []
  },
  {
    "text": "I'm gonna do one more CS any takers?",
    "lookup": []
  },
  {
    "text": "Yee",
    "lookup": []
  },
  {
    "text": "6669\n100 players between me and luke\nim actually UP a bit, maybe solo queue is the way\nsub 10k players\nPhrakture and jobe show",
    "lookup": []
  },
  {
    "text": "Let's do it",
    "lookup": []
  },
  {
    "text": "We always playing",
    "lookup": []
  },
  {
    "text": "Yeah",
    "lookup": []
  },
  {
    "text": "yes @CS 2",
    "lookup": []
  },
  {
    "text": "Coming coming",
    "lookup": []
  },
  {
    "text": "Another CS soon",
    "lookup": []
  },
  {
    "text": "GAMERS?\n?",
    "lookup": []
  },
  {
    "text": "CS in the late afternoon?",
    "lookup": []
  },
  {
    "text": "Yo\nI am alive\nCs\nYou need one still or you're in one",
    "lookup": []
  },
  {
    "text": "id be down to game more, getting off as no ones here. @ the group if we doing something",
    "lookup": []
  },
  {
    "text": "@CS ?",
    "lookup": []
  },
  {
    "text": "I don't agree with the 90% of people being in 15000. I win one match and I move from top 69% to top 67%. Crazy.\nAnd for the top 1000 players to be from 15000-35000 doesn't make sense either. Some actual pros are only at like 25k\nLike I get it's a leaderboard, but once you're top 1000 above 20k does it really matter if you're at 30k or 31k? That's a difference of like 20 people. Where as 12k to 13k is like 10k people",
    "lookup": []
  },
  {
    "text": "Gamers pliz\nwhere",
    "lookup": []
  },
  {
    "text": "im gonna play on my alt, if anyone is down\nBooting right now\n@.lukedankwalker @nylertorton",
    "lookup": []
  },
  {
    "text": "Can't believe no gamers",
    "lookup": []
  },
  {
    "text": "gonna do another",
    "lookup": []
  },
  {
    "text": "won 2/3 on my alt\nteam of 3 guys at 11k and our team is all around 8k or less, and we beating them on ancient on CT and they surrendered at the half lol",
    "lookup": []
  },
  {
    "text": "^ I rest my case\n\"Just jump around corners and pretty consistantly kill people\"\ni slept 10am - 7pm, then 9pm-midnight\ncs? 🤡",
    "lookup": []
  },
  {
    "text": "no\n10am-6pm work from home\ni live in the basement\ntheres days i dont go outside for 2-3 days because gf goes to work all day and i work at home\nor i could just get flashbanged in CS",
    "lookup": []
  },
  {
    "text": "just counterstrike server starting to wake up, early morning cs????",
    "lookup": []
  },
  {
    "text": "That's not what I said, I said that the difference between 6700 and 6800 is like 1% of players. So you win a game and go up hugely in rank %.",
    "lookup": []
  },
  {
    "text": "1 game of CS before dnd?",
    "lookup": []
  },
  {
    "text": "queing alt right now",
    "lookup": []
  },
  {
    "text": "lost, it was 12-3 and we brought it back to 12-9. they had a guy hard carrying them , destroying us",
    "lookup": []
  },
  {
    "text": "im in at midnight for like 3 games",
    "lookup": []
  },
  {
    "text": "@CS send a notification when you are queuing for the next one",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker cs",
    "lookup": []
  },
  {
    "text": "@CS CS early?\nTldw: put all your settings on low",
    "lookup": []
  },
  {
    "text": "Tad spent 13000$ on skins, you want to look at them on LOW SETTINGS?",
    "lookup": []
  },
  {
    "text": "Also some of you play CS on HDDs so don't @ me in the chat",
    "lookup": []
  },
  {
    "text": "Same",
    "lookup": []
  },
  {
    "text": "I can do CS in a bit\nJust woke up\nJust a nap from 7;30pm-11:30pm",
    "lookup": []
  },
  {
    "text": "I see how it is\ntime for baited_by_joebe to play solo cs",
    "lookup": []
  },
  {
    "text": "Wow\nI'm for next next",
    "lookup": []
  },
  {
    "text": "You already have 5!",
    "lookup": []
  },
  {
    "text": "Ok\nWhy isn't he\nI'll come\nAre you guys in one or no? @tad19",
    "lookup": []
  },
  {
    "text": "bruh i can tell that you are in one\nLuke is streaming + i see it on steam",
    "lookup": []
  },
  {
    "text": "gotdam",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker csgo office",
    "lookup": []
  },
  {
    "text": "1pm cs2 drop?",
    "lookup": []
  },
  {
    "text": "Backing up your HACKS?!?!\nReported",
    "lookup": []
  },
  {
    "text": "Do we have cs2 yet?\nWhere's the updates ?",
    "lookup": []
  },
  {
    "text": "Is there a discord that's posting when they change the banner and what not\nI went on X and the banner is changed again\nWho's the lore masters",
    "lookup": []
  },
  {
    "text": "CS baby\n27gb update",
    "lookup": []
  },
  {
    "text": "HYPE HYPE HYPE\nHYPE\nedit: only 5.7gb update for me\nno more bumper boats?",
    "lookup": []
  },
  {
    "text": "SHROUD IS USING TAD'S PROFILE PICTURE LMFAOOOOOOOOOOOOOOOOOOOOOOOOO",
    "lookup": []
  },
  {
    "text": "WHERE THE FUCK IS DANGER ZONE\nOMG",
    "lookup": []
  },
  {
    "text": "cases are going UP",
    "lookup": []
  },
  {
    "text": "discords fucked",
    "lookup": []
  },
  {
    "text": "Discords working now",
    "lookup": []
  },
  {
    "text": "WE HAVE 4\nboot pliz",
    "lookup": []
  },
  {
    "text": "@nylertorton we cant play with 4 we need 5th\n@CS  pliz need 1\ndoing dust2",
    "lookup": []
  },
  {
    "text": "we stomped\n@CS we need 5th",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker boot\n@.lukedankwalker",
    "lookup": []
  },
  {
    "text": "beans and bacon , fuk em\nwe have 5, boot\n'pasta' - 'instant noodles'",
    "lookup": []
  },
  {
    "text": "An encounter with wildlife",
    "lookup": []
  },
  {
    "text": "Maybe",
    "lookup": []
  },
  {
    "text": "Imagine playing a competitive sport at 6pm\nAlso imagine hockey\n(not a competitive sport)",
    "lookup": []
  },
  {
    "text": "So are we playing CS at 5 or not",
    "lookup": []
  },
  {
    "text": "@CS boot",
    "lookup": []
  },
  {
    "text": "mirage globals\nthey added another bell now i don't know how to play baby shark",
    "lookup": []
  },
  {
    "text": "we won inferno too",
    "lookup": []
  },
  {
    "text": "we taking a break, where the 5 mans at",
    "lookup": []
  },
  {
    "text": "stream up",
    "lookup": []
  },
  {
    "text": "$25 buckos if you ever purchased a lootbox in fornite or rocket league",
    "lookup": []
  },
  {
    "text": "And the cycle continues",
    "lookup": []
  },
  {
    "text": "I've been sleeping",
    "lookup": []
  },
  {
    "text": "going to hit mcdoanlds then ill be back",
    "lookup": []
  },
  {
    "text": "Gonna try this out",
    "lookup": []
  },
  {
    "text": "@CS ?",
    "lookup": []
  },
  {
    "text": "@CS im ready to boot",
    "lookup": []
  },
  {
    "text": "cs",
    "lookup": []
  },
  {
    "text": "cs o clock",
    "lookup": []
  },
  {
    "text": "When's the CS today?\nBruh I played with a guy last night with 1600hrs and looked like he was playing on a controller and his game sense was -5\nOur whole team was ripping on him and he didn't even use the mic or text chat lol\nI don't think I can solo queue in this game for at least 1-2months till the ranks get stabilized, then I can play with people actually my rank",
    "lookup": []
  },
  {
    "text": "When CS?",
    "lookup": []
  },
  {
    "text": "cs pliz, i have an adiction\nfriday night / saturday night, where is the squad\nwhere is the queues",
    "lookup": []
  },
  {
    "text": "bruhs",
    "lookup": []
  },
  {
    "text": "@CS pliz boot\n@phrakturemusic ?",
    "lookup": []
  },
  {
    "text": "just won inferno on the alt to get my drops, doing another in 5 min",
    "lookup": []
  },
  {
    "text": "✅\n2 matches till rank",
    "lookup": []
  },
  {
    "text": "I think Phrak and I are 4/5 wins crackhead hours cs",
    "lookup": []
  },
  {
    "text": "CS PLIZ",
    "lookup": []
  },
  {
    "text": "♿",
    "lookup": []
  },
  {
    "text": "I am here whenever",
    "lookup": []
  },
  {
    "text": "HUH\nive been here",
    "lookup": []
  },
  {
    "text": "wait the whole weekend to play cs with teh boys 5 man and we play one L match\n😭",
    "lookup": []
  },
  {
    "text": "everyone bailed after 1 match\n'L match'",
    "lookup": []
  },
  {
    "text": "I can't we have dnd till 12",
    "lookup": []
  },
  {
    "text": "cs at 12 for me",
    "lookup": []
  },
  {
    "text": "@CS gamers",
    "lookup": []
  },
  {
    "text": "looks like we are waiting\nhurry up csssssscersss",
    "lookup": []
  },
  {
    "text": "Rip I went to sleep on the couch, Luke said we were waiting to play cs so I went and ate and layed down on the couch and now here we are",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker ?",
    "lookup": []
  },
  {
    "text": "Soon\n7:30",
    "lookup": []
  },
  {
    "text": "Bruh do yous not work\n/ s\nWtf is this early cs",
    "lookup": []
  },
  {
    "text": "I'm home",
    "lookup": []
  },
  {
    "text": "@CS 😭\nBruh i see how it is, 5:30 and no one replies for over an hour so i decide to hit the mall instead of go straight home, and then yall decide to come outta the pipes and do a quick 5 man and then disapear when i get back\nIts a conspiracyi tell you",
    "lookup": []
  },
  {
    "text": "bruh im actually malding\nworst solo queue of my life last night on nuke. 1 player using CONTROLLER, no mic. 1 player only 3hrs in cs, literally his 4th match. and 1 guy absolute dogshit as well and no mic. Me and the 4th were trying to hold it together as we were getting STOMPED but it went like 7-13 in the end\nI can't solo queue any more",
    "lookup": []
  },
  {
    "text": "Ya i fell asleep because everyone got off at 7:30!\n♿♿♿♿♿ <- you're team\n♿♿♿♿♿ <- you're team\n♿♿♿♿♿ <- you're team",
    "lookup": []
  },
  {
    "text": "At this hour?",
    "lookup": []
  },
  {
    "text": "Prospectors,\nToday’s news we share with a heavy heart.\n\nThe Cycle: Frontier will shut down on September 27, 2023.\n\nMaking this decision was very difficult for us, but ultimately it was a necessary one. You can find more information about this, as well as refunds, our final patch.\n\nWe are incredibly grateful for all your support during this wonderful journey, we couldn’t have done it without you! From the bottom of our hearts, thank you.",
    "lookup": []
  },
  {
    "text": "I take a week off work to play cs and nobody plays wtf\nAlso, I have a week off work next week to play cs2",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker",
    "lookup": []
  },
  {
    "text": "im awake",
    "lookup": []
  },
  {
    "text": "@CS have 3, need 2 more",
    "lookup": []
  },
  {
    "text": "how could you do this\n♿♿♿♿♿ <- you're team",
    "lookup": []
  },
  {
    "text": "@CS need 1 more pliz\n@.lukedankwalker wakeup",
    "lookup": []
  },
  {
    "text": "@.lukedankwalker add one win to the vent dive pistol round",
    "lookup": []
  },
  {
    "text": "why is it in spanish",
    "lookup": []
  },
  {
    "text": "team is actually throwing\nbruh im uninstalling cs\nstuck at 8 wins in premier for the rest of my life",
    "lookup": []
  },
  {
    "text": "tell the children how we LOST a game while WINNING 11-9\n>can't solo queue, teammates use CONTROLLERS\n>can't play 5 man, we throw\n¯\\_(ツ)_/¯\nguess i die",
    "lookup": []
  },
  {
    "text": "Tell em Tad\nTell Uncle Flobal what you did\nI can't say\nIt'll be on page 3 of my suicide note\n<:mcnuggets:870319759558856794>\nspoilers",
    "lookup": []
  },
  {
    "text": "thats it\nim doing it",
    "lookup": []
  },
  {
    "text": "I think we are more of a fortnite team tbh\ni'd be down for more\nbut youre the only one so\neveryone else tilted off",
    "lookup": []
  },
  {
    "text": "What we saying",
    "lookup": []
  },
  {
    "text": "Bruh you're only 30 min baned",
    "lookup": []
  },
  {
    "text": "I think I'm perma tilted now\nCan't play solo can't play with the team\nGame bugs out\nScoutgod surrenders\nCan't win\nRanks don't matter",
    "lookup": []
  },
  {
    "text": "In the dumpster\n¿",
    "lookup": []
  },
  {
    "text": "Can't solo queue\nCan't play with the team\nGame broken\nScout god surrenders\n¯\\_(ツ)_/¯",
    "lookup": []
  },
  {
    "text": "I'm purposefully writing hot memes at this point\nI actually installed valorant last night",
    "lookup": []
  },
  {
    "text": "Several posts on the CSGO subreddit are reporting that if you abandon a match, players can expect to take a 1000 Elo deduction. This is in comparison to a 100 to 200 elo lost from a defeat.\n@tad19 did you loose 1000 Elo from your abandon yesterday?",
    "lookup": []
  },
  {
    "text": "I'm going to gf's mom's for Thanksgiving weekend, so no CS unless it's....\nworst solo queue of my life last night on nuke. 1 player using CONTROLLER, no mic. 1 player only 3hrs in cs, literally his 4th match. and 1 guy absolute dogshit as well and no mic. Me and the 4th were trying to hold it together as we were getting STOMPED but it went like 7-13 in the end\nI can't solo queue any more\nCS with a CONTROLLER on STEAM DECK",
    "lookup": []
  },
  {
    "text": "Wtf that must be the most kills I've ever seen",
    "lookup": []
  },
  {
    "text": "HOLYYYY shit, new office Strat @.lukedankwalker @foolishwizrd @phantom_cooper @tad19\n-Adjust the weight of the vending machine\nIt mighta been patch already",
    "lookup": []
  },
  {
    "text": "CS on the TRAIN WIFI with a CONTROLLER",
    "lookup": []
  },
  {
    "text": "Tad posting from his alt account smh\nI won CLUE for the first time ever in like 10 games\n(also it was ham day)\n(and gf's mom overcooked the shit outta it)\nAlso I thought this was 'jist counterstrike' server not 'just wish each other happy Thanksgiving-strike' server",
    "lookup": []
  },
  {
    "text": "@joeliepolieolie69 I told them I had to be yellow and that I sexually identified as yellow, but gfs sister still HAD to be yellow\nSo no I was blue unfortunately\nSounds like what tad does to me when he also pics yellow in cs\nBecause I won and took the pic?\nBruh look at my profile pic\nOnly one on the server with an actual profile pic",
    "lookup": []
  },
  {
    "text": "Joel catfishing us all\nThat's something a catfish would say",
    "lookup": []
  },
  {
    "text": "I'll do one, just let me get my controller",
    "lookup": []
  },
  {
    "text": "Nop",
    "lookup": []
  },
  {
    "text": "Get a real PC losers\nAt least you were the 1% of something",
    "lookup": []
  },
  {
    "text": "@CS any gamers during the day this week? I am on vacation all week, if anyone down to play between 10am-7pm this week let me know\nI took a week off work to play cs. And no one plays wtf",
    "lookup": []
  },
  {
    "text": "Yee",
    "lookup": []
  },
  {
    "text": "123zxc123 has disconnected, waiting 3 more minutes before abandoning\ntemkashemke3 has disconnected, waiting 3 more minutes before abandoning\nWsonne has disconnected, waiting 3 more minutes before abandoning\nsniperkazxcahE has disconnected, waiting 3 more minutes before abandoning\nzxczayechka has disconnected, waiting 3 more minutes before abandoning",
    "lookup": []
  },
  {
    "text": "team surrendered",
    "lookup": []
  },
  {
    "text": "office mains\n15-2",
    "lookup": []
  },
  {
    "text": "nope\nme and luke did 2 premier and lost both, i need 2 more wins, luke needs 3 more.\nthen we did 3 office and won 2/3",
    "lookup": []
  },
  {
    "text": "lol\nwell this week i actually have off\nits a tad saying",
    "lookup": []
  },
  {
    "text": "bruh im actually malding\nfirst day back and 2 L's\nnever gonna get that 4000 rank",
    "lookup": []
  },
  {
    "text": "@CS when cs, early?\n@tad19 @nylertorton",
    "lookup": []
  },
  {
    "text": "@CS need honey and jizz and one more",
    "lookup": []
  },
  {
    "text": "@CS we need 1 plz",
    "lookup": []
  },
  {
    "text": "@CS any more games tonight?\n9pm spigot should be here\nI need my rank",
    "lookup": []
  },
  {
    "text": "Thank GOD\nI'm actually orgasming at those patch notes\n💦💦💦💦💦💦💦\n@CS get in here",
    "lookup": []
  },
  {
    "text": "2 new sklns",
    "lookup": []
  },
  {
    "text": "@CS we have 3 so far",
    "lookup": []
  },
  {
    "text": "@tad19 WTF\nI WAS USING THAT",
    "lookup": []
  },
  {
    "text": "starting real pronto",
    "lookup": []
  },
  {
    "text": "@CS we need 1",
    "lookup": []
  },
  {
    "text": "Where were you yesterday\nI'm out still",
    "lookup": []
  },
  {
    "text": "I'm out",
    "lookup": []
  },
  {
    "text": "Anymore games tonight?\nI'm home now just ate",
    "lookup": []
  },
  {
    "text": "@CS ?",
    "lookup": []
  },
  {
    "text": "Later",
    "lookup": []
  },
  {
    "text": "I'm in",
    "lookup": []
  },
  {
    "text": "bring it back",
    "lookup": []
  },
  {
    "text": "New cs2 update\nlots of small UI changes",
    "lookup": []
  },
  {
    "text": "@CS boot",
    "lookup": []
  },
  {
    "text": "@theprince1498 we here u",
    "lookup": []
  },
  {
    "text": "MOM GET THE CAMERA",
    "lookup": []
  },
  {
    "text": "MOM GET THE CAMERA\ntad - \"joes playing im not joining\"",
    "lookup": []
  },
  {
    "text": "@CS today?",
    "lookup": []
  },
  {
    "text": "@CS I'm booting\nI see tad booted solo",
    "lookup": []
  },
  {
    "text": "@CS ?",
    "lookup": []
  },
  {
    "text": "must be nice to play 41 games\nand win",
    "lookup": []
  },
  {
    "text": "9 kills but 10 assists on garbo mirage\neasy to rankup when you get ~350 elo a win\nand your team isnt PLAYING ON CONTROLLER\nAlso Tad too good to play with me now",
    "lookup": []
  },
  {
    "text": "im queieng soon",
    "lookup": []
  },
  {
    "text": "Bruh where's the @CS ?\nI was watching tv waiting",
    "lookup": []
  },
  {
    "text": "gamers",
    "lookup": []
  },
  {
    "text": "@theswagengine boot",
    "lookup": []
  },
  {
    "text": "@CS ?",
    "lookup": []
  },
  {
    "text": "Yes\nMe too",
    "lookup": []
  },
  {
    "text": "we need 1 more for a 5 man\ni guess comp",
    "lookup": []
  },
  {
    "text": "omfg\nim famous",
    "lookup": []
  },
  {
    "text": "worst solo queue of my life last night on mirage. 1 player using DRAWING TABLET, no graphics card. 1 player only 6hrs in cs, literally his 5th match. and 1 guy absolute dogshit as well and no mic. Me and the 4th were trying to hold it together as we were getting DOMINATED but it went like 6-13 in the end\ndrawing tablet with no graphics card",
    "lookup": []
  },
  {
    "text": "THE EXACT QUOTE IS 'LOOK WHOS BACK ON TOP OF THE LEADERBOARD'",
    "lookup": []
  },
  {
    "text": "anyone else for more cs",
    "lookup": []
  },
  {
    "text": "Classic\nIt worked last night",
    "lookup": []
  },
  {
    "text": "Also you need to have the closest to mid spawn, and you need a smoke + mac10",
    "lookup": []
  },
  {
    "text": "Yee I'm down\nWe won our only premier today",
    "lookup": []
  },
  {
    "text": "good thing we don't need to make ourselves CS2 bots\nwe dont need to\nwe already are",
    "lookup": []
  },
  {
    "text": "CS, its time",
    "lookup": []
  },
  {
    "text": "nice\nits not about the investment\nits about the friends we made along the way",
    "lookup": []
  },
  {
    "text": "bruh",
    "lookup": []
  },
  {
    "text": "we are winning 7-6 overpass, and playing with a 10k elo russian and his 4k elo friend, and the two stupid whiteboy soloq's start making fun of their russian accents, and for some reason this triggers yellow to team kill at start of round and gets kicked\nthen one of them starts saying the hard R and stuff, then at the end says his team is bad\nalso 2 rounds before we lost he starts team killing the other russian\nwe lost 8-13 bro\ni cant solo q",
    "lookup": []
  },
  {
    "text": "jk just started another soloq",
    "lookup": []
  },
  {
    "text": "?\nyou guys win?\nim still in the same game\nwe in OT",
    "lookup": []
  },
  {
    "text": "we tied\ni gained 61 elo\n@CS cs2 lets go\nif i was there i bet we woulda won lmfao",
    "lookup": []
  },
  {
    "text": "i shoulda been there",
    "lookup": []
  },
  {
    "text": "saturday night where are the gamers\nim here watching egirls alone",
    "lookup": []
  },
  {
    "text": "im quing again",
    "lookup": []
  },
  {
    "text": "another TIE OMG\nthis time i lost elo\nlost 58 elo, so +3",
    "lookup": []
  },
  {
    "text": "@CS we doing comp",
    "lookup": []
  },
  {
    "text": "@CS next one",
    "lookup": []
  },
  {
    "text": "i played like 11 games today\nsome arent showing yet so not sure",
    "lookup": []
  },
  {
    "text": "CS",
    "lookup": []
  },
  {
    "text": "cscscs",
    "lookup": []
  },
  {
    "text": "Bruh where was the @ cs",
    "lookup": []
  },
  {
    "text": "Can't solo queue\nCan't play with the team\nGame barely playable\nHONEY surrenders\n¯\\_(ツ)_/¯\nWell we can't get a 5 man without a 4 man, and we can't get a 4 man without a 3 man, and so far we have a 2 man so come on flobal elite and be the 3rd man",
    "lookup": []
  },
  {
    "text": "I actually installed apex legends last night\nstuck at 8 wins in premier for the rest of my life",
    "lookup": []
  },
  {
    "text": "so no one joined so i had to soloq and lost 191\nbruh rip this is why im so low\ni was the lowest rank out of 9+1 unranked guys, didnt even bottom frag, got 2nd 17kills\nlost 10-13",
    "lookup": []
  },
  {
    "text": "yee\nwhere joebegpt",
    "lookup": []
  },
  {
    "text": "im at 5999 so its my rankup match so no throwing",
    "lookup": []
  },
  {
    "text": "Maybe 12",
    "lookup": []
  },
  {
    "text": "You in one?\nI can come",
    "lookup": []
  },
  {
    "text": "12",
    "lookup": []
  },
  {
    "text": "whats the status",
    "lookup": []
  },
  {
    "text": "@CS im down for 1",
    "lookup": []
  },
  {
    "text": "Workin",
    "lookup": []
  },
  {
    "text": "Maybe 5",
    "lookup": []
  },
  {
    "text": "I might be able to sneak one right now",
    "lookup": []
  },
  {
    "text": "@CS need 5th",
    "lookup": []
  },
  {
    "text": "Ok\nBooting",
    "lookup": []
  },
  {
    "text": "@CS one more for mirage",
    "lookup": []
  },
  {
    "text": "I checked zerogpt and it said 0%",
    "lookup": []
  }
];
