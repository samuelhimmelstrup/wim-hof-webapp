// import { db } from '../../firebase/clientApp';
// import { collection, doc, setDoc, getDoc, addDoc } from 'firebase/firestore';


// const handler = (req, res) => {
//     fetch sessions fra databasen
// }

//     const docRef = doc(db, 'predefinedSessions', 'Session1');
//     const docSnap = await getDoc(docRef);
//     if (docSnap) {
//       console.log('Document data:', docSnap);
//     } else {
//       console.log('No such document!');
//     }


// DATA FORMAT OVERVIEW:
// metadata (title, number of rounds, level)
// sessionData

export const DUMMY_SESSIONS = [
    { 
        id: 10,
        title: 'Quick Test',
        level: 'Beginner',
        noOfRounds: 3,
        sessionData:[
        { 
            round: 1,
            breaths: 4,
            breathPace: 'quick',
            hold: 4,
            silentHold: false,
            musicUrl: '/sounds/beat.mp3'
        },
        { 
            round: 2,
            breaths: 6,
            breathPace: 'quick', 
            hold: 8,
            silentHold: false,
            musicUrl: '/sounds/beat.mp3' 
        },
        { 
            round: 3,
            breaths: 4,
            breathPace: 'slow', // ('slow', 'medium') 
            hold: 10,
            silentHold: false,
            musicUrl: '/sounds/beat.mp3' 
        }
        ]
    },
    { 
        id: 11,
        title: 'Walla Billa',
        level: 'Intermediate',
        noOfRounds: 4,
        sessionData:[
            { 
                round: 1,
                breaths: 2,
                breathPace: 'slow',
                hold: 4,
                silentHold: true,
                musicUrl: '/sounds/beat.mp3'
            },
            { 
                round: 2,
                breaths: 3,
                breathPace: 'slow', 
                hold: 4,
                silentHold: false,
                musicUrl: '/sounds/beat.mp3' 
            },
            { 
                round: 3,
                breaths: 4,
                breathPace: 'slow', // ('slow', 'medium') 
                hold: 6,
                silentHold: false,
                musicUrl: '/sounds/beat.mp3' 
            },
            { 
                round: 4,
                breaths: 4,
                breathPace: 'quick', // ('slow', 'medium') 
                hold: 6,
                silentHold: false,
                musicUrl: '/sounds/beat.mp3' 
            }
            ]
    },
    { 
        id: 12,
        title: 'Real type',
        level: 'Advanced',
        noOfRounds: 5,
        sessionData:[
            { 
                round: 1,
                breaths: 30,
                breathPace: 'quick',
                hold: 90,
                silentHold: false,
                musicUrl: '/sounds/beat.mp3'
            },
            { 
                round: 2,
                breaths: 30,
                breathPace: 'medium', 
                hold: 90,
                silentHold: false,
                musicUrl: '/sounds/beat.mp3' 
            },
            { 
                round: 3,
                breaths: 30,
                breathPace: 'quick', 
                hold: 120,
                silentHold: false,
                musicUrl: '/sounds/beat.mp3' 
            },
            { 
                round: 4,
                breaths: 40,
                breathPace: 'quick', 
                hold: 120,
                silentHold: false,
                musicUrl: '/sounds/beat.mp3' 
            },
            { 
                round: 5,
                breaths: 40,
                breathPace: 'quick',
                hold: 150,
                silentHold: false,
                musicUrl: '/sounds/beat.mp3' 
            },
            ]
    },  
    { 
        id: 14,
        title: 'Hala Hala',
        level: 'Beginner',
        noOfRounds: 3,
        sessionData:[
        { 
            round: 1,
            breaths: 8,
            breathPace: 'quick',
            hold: 8,
            silentHold: false,
            musicUrl: '/sounds/beat.mp3'
        },
        { 
            round: 2,
            breaths: 6,
            breathPace: 'medium', 
            hold: 8,
            silentHold: false,
            musicUrl: '/sounds/beat.mp3' 
        },
        { 
            round: 3,
            breaths: 4,
            breathPace: 'slow', // ('slow', 'medium') 
            hold: 10,
            silentHold: false,
            musicUrl: '/sounds/beat.mp3' 
        }
        ]
    },
    { 
        id: 15,
        title: 'Dont Give Up',
        level: 'Intermediate',
        noOfRounds: 4,
        sessionData:[
            { 
                round: 1,
                breaths: 8,
                breathPace: 'quick',
                hold: 8,
                silentHold: false,
                musicUrl: '/sounds/beat.mp3'
            },
            { 
                round: 2,
                breaths: 6,
                breathPace: 'medium', 
                hold: 8,
                silentHold: false,
                musicUrl: '/sounds/beat.mp3' 
            },
            { 
                round: 3,
                breaths: 4,
                breathPace: 'slow', // ('slow', 'medium') 
                hold: 6,
                silentHold: false,
                musicUrl: '/sounds/beat.mp3' 
            },
            { 
                round: 4,
                breaths: 4,
                breathPace: 'quick', // ('slow', 'medium') 
                hold: 6,
                silentHold: false,
                musicUrl: '/sounds/beat.mp3' 
            }
            ]
    },
    { 
        id: 16,
        title: 'Yes Boss',
        level: 'Advanced',
        noOfRounds: 5,
        sessionData:[
            { 
                round: 1,
                breaths: 8,
                breathPace: 'quick',
                hold: 8,
                silentHold: false,
                musicUrl: '/sounds/beat.mp3'
            },
            { 
                round: 2,
                breaths: 6,
                breathPace: 'medium', 
                hold: 8,
                silentHold: false,
                musicUrl: '/sounds/beat.mp3' 
            },
            { 
                round: 3,
                breaths: 4,
                breathPace: 'slow', // ('slow', 'medium') 
                hold: 6,
                silentHold: false,
                musicUrl: '/sounds/beat.mp3' 
            },
            { 
                round: 4,
                breaths: 4,
                breathPace: 'quick', // ('slow', 'medium') 
                hold: 6,
                silentHold: false,
                musicUrl: '/sounds/beat.mp3' 
            },
            { 
                round: 5,
                breaths: 4,
                breathPace: 'quick', // ('slow', 'medium') 
                hold: 6,
                silentHold: false,
                musicUrl: '/sounds/beat.mp3' 
            },
            ]
    }, 
    { 
        id: 17,
        title: 'Shawarma Session',
        level: 'Beginner',
        noOfRounds: 3,
        sessionData:[
        { 
            round: 1,
            breaths: 8,
            breathPace: 'quick',
            hold: 8,
            silentHold: false,
            musicUrl: '/sounds/beat.mp3'
        },
        { 
            round: 2,
            breaths: 6,
            breathPace: 'medium', 
            hold: 8,
            silentHold: false,
            musicUrl: '/sounds/beat.mp3' 
        },
        { 
            round: 3,
            breaths: 4,
            breathPace: 'slow', // ('slow', 'medium') 
            hold: 10,
            silentHold: false,
            musicUrl: '/sounds/beat.mp3' 
        }
        ]
    },
    { 
        id: 18,
        title: 'Dont Give Up',
        level: 'Intermediate',
        noOfRounds: 4,
        sessionData:[
            { 
                round: 1,
                breaths: 8,
                breathPace: 'quick',
                hold: 8,
                silentHold: false,
                musicUrl: '/sounds/beat.mp3'
            },
            { 
                round: 2,
                breaths: 6,
                breathPace: 'medium', 
                hold: 8,
                silentHold: false,
                musicUrl: '/sounds/beat.mp3' 
            },
            { 
                round: 3,
                breaths: 4,
                breathPace: 'slow', // ('slow', 'medium') 
                hold: 6,
                silentHold: false,
                musicUrl: '/sounds/beat.mp3' 
            },
            { 
                round: 4,
                breaths: 4,
                breathPace: 'quick', // ('slow', 'medium') 
                hold: 6,
                silentHold: false,
                musicUrl: '/sounds/beat.mp3' 
            }
            ]
    },
    { 
        id: 19,
        title: 'Yes Boss',
        level: 'Advanced',
        noOfRounds: 5,
        sessionData:[
            { 
                round: 1,
                breaths: 8,
                breathPace: 'quick',
                hold: 8,
                silentHold: false,
                musicUrl: '/sounds/beat.mp3'
            },
            { 
                round: 2,
                breaths: 6,
                breathPace: 'medium', 
                hold: 8,
                silentHold: false,
                musicUrl: '/sounds/beat.mp3' 
            },
            { 
                round: 3,
                breaths: 4,
                breathPace: 'slow', // ('slow', 'medium') 
                hold: 6,
                silentHold: false,
                musicUrl: '/sounds/beat.mp3' 
            },
            { 
                round: 4,
                breaths: 4,
                breathPace: 'quick', // ('slow', 'medium') 
                hold: 6,
                silentHold: false,
                musicUrl: '/sounds/beat.mp3' 
            },
            { 
                round: 5,
                breaths: 4,
                breathPace: 'quick', // ('slow', 'medium') 
                hold: 6,
                silentHold: false,
                musicUrl: '/sounds/beat.mp3' 
            },
            ]
    },  
    { 
        id: 20,
        title: 'Better You Now',
        level: 'Beginner',
        noOfRounds: 3,
        sessionData:[
        { 
            round: 1,
            breaths: 8,
            breathPace: 'quick',
            hold: 8,
            silentHold: false,
            musicUrl: '/sounds/beat.mp3'
        },
        { 
            round: 2,
            breaths: 6,
            breathPace: 'medium', 
            hold: 8,
            silentHold: false,
            musicUrl: '/sounds/beat.mp3' 
        },
        { 
            round: 3,
            breaths: 4,
            breathPace: 'slow', // ('slow', 'medium') 
            hold: 10,
            silentHold: false,
            musicUrl: '/sounds/beat.mp3' 
        }
        ]
    },
    { 
        id: 21,
        title: 'Dont Give Up',
        level: 'Intermediate',
        noOfRounds: 4,
        sessionData:[
            { 
                round: 1,
                breaths: 8,
                breathPace: 'quick',
                hold: 8,
                silentHold: false,
                musicUrl: '/sounds/beat.mp3'
            },
            { 
                round: 2,
                breaths: 6,
                breathPace: 'medium', 
                hold: 8,
                silentHold: false,
                musicUrl: '/sounds/beat.mp3' 
            },
            { 
                round: 3,
                breaths: 4,
                breathPace: 'slow', // ('slow', 'medium') 
                hold: 6,
                silentHold: false,
                musicUrl: '/sounds/beat.mp3' 
            },
            { 
                round: 4,
                breaths: 4,
                breathPace: 'quick', // ('slow', 'medium') 
                hold: 6,
                silentHold: false,
                musicUrl: '/sounds/beat.mp3' 
            }
            ]
    },
    { 
        id: 22,
        title: 'Yes Boss',
        level: 'Advanced',
        noOfRounds: 5,
        sessionData:[
            { 
                round: 1,
                breaths: 8,
                breathPace: 'quick',
                hold: 8,
                silentHold: false,
                musicUrl: '/sounds/beat.mp3'
            },
            { 
                round: 2,
                breaths: 6,
                breathPace: 'medium', 
                hold: 8,
                silentHold: false,
                musicUrl: '/sounds/beat.mp3' 
            },
            { 
                round: 3,
                breaths: 4,
                breathPace: 'slow', // ('slow', 'medium') 
                hold: 6,
                silentHold: false,
                musicUrl: '/sounds/beat.mp3' 
            },
            { 
                round: 4,
                breaths: 4,
                breathPace: 'quick', // ('slow', 'medium') 
                hold: 6,
                silentHold: false,
                musicUrl: '/sounds/beat.mp3' 
            },
            { 
                round: 5,
                breaths: 4,
                breathPace: 'quick', // ('slow', 'medium') 
                hold: 6,
                silentHold: false,
                musicUrl: '/sounds/beat.mp3' 
            },
            ]
    }, 
    ]

