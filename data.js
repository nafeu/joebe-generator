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
];