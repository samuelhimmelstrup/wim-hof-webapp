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
        id: 9,
        title: 'Quick Test',
        level: 'beginner',
        musicUrl: '/sounds/ambient1.mp3',
        sessionData:[
        { 
            round: 1,
            breaths: 2,
            breathPace: 'quick',
            hold: 2,
            silentHold: false,
        }
        ]
    },
    { 
        id: 10,
        title: 'Quick Test 2',
        level: 'beginner',
        musicUrl: '/sounds/ambient1.mp3',
        sessionData:[
        { 
            round: 1,
            breaths: 2,
            breathPace: 'quick',
            hold: 2,
            silentHold: true,
        },
        { 
            round: 2,
            breaths: 2,
            breathPace: 'quick',
            hold: 2,
            silentHold: false,
        },
        { 
            round: 3,
            breaths: 2,
            breathPace: 'slow',
            hold: 2,
            silentHold: false,
        },
        ]
    },
    { 
        id: 11,
        title: 'Glory',
        level: 'intermediate',
        musicUrl: '/sounds/ambient1.mp3',
        sessionData:[
            { 
                round: 1,
                breaths: 20,
                breathPace: 'medium',
                hold: 90,
                silentHold: false,
            },
            { 
                round: 2,
                breaths: 25,
                breathPace: 'medium', 
                hold: 100,
                silentHold: false,
            },
            { 
                round: 3,
                breaths: 25,
                breathPace: 'quick',
                hold: 120,
                silentHold: false,
            },
            { 
                round: 4,
                breaths: 30,
                breathPace: 'quick',
                hold: 120,
                silentHold: false,
            }
            ]
    },
    { 
        id: 12,
        title: 'Deep',
        level: 'advanced',
        musicUrl: '/sounds/ambient1.mp3',
        sessionData:[
            { 
                round: 1,
                breaths: 30,
                breathPace: 'slow',
                hold: 90,
                silentHold: false,
            },
            { 
                round: 2,
                breaths: 30,
                breathPace: 'medium', 
                hold: 90,
                silentHold: false,
            },
            { 
                round: 3,
                breaths: 30,
                breathPace: 'medium', 
                hold: 120,
                silentHold: false,
            },
            { 
                round: 4,
                breaths: 40,
                breathPace: 'quick', 
                hold: 120,
                silentHold: false,
            },
            { 
                round: 5,
                breaths: 40,
                breathPace: 'quick',
                hold: 150,
                silentHold: false,
            },
            ]
    },  
    { 
        id: 14,
        title: 'Easy',
        level: 'beginner',
        musicUrl: '/sounds/ambient1.mp3',
        sessionData:[
        { 
            round: 1,
            breaths: 20,
            breathPace: 'medium',
            hold: 60,
            silentHold: false,
        },
        { 
            round: 2,
            breaths: 30,
            breathPace: 'medium', 
            hold: 90,
            silentHold: false,
        },
        { 
            round: 3,
            breaths: 30,
            breathPace: 'medium', 
            hold: 90,
            silentHold: false,
        }
        ]
    },
    { 
        id: 15,
        title: 'Dont Give Up',
        level: 'intermediate',
        musicUrl: '/sounds/ambient1.mp3',
        sessionData:[
            { 
                round: 1,
                breaths: 25,
                breathPace: 'medium',
                hold: 90,
                silentHold: false,
            },
            { 
                round: 2,
                breaths: 25,
                breathPace: 'medium', 
                hold: 90,
                silentHold: false,
            },
            { 
                round: 3,
                breaths: 30,
                breathPace: 'medium', 
                hold: 120,
                silentHold: false,
            },
            { 
                round: 4,
                breaths: 30,
                breathPace: 'quick', 
                hold: 120,
                silentHold: false,
            }
            ]
    },
    { 
        id: 16,
        title: 'Rapido',
        level: 'advanced',
        musicUrl: '/sounds/ambient1.mp3',
        sessionData:[
            { 
                round: 1,
                breaths: 25,
                breathPace: 'quick',
                hold: 90,
                silentHold: false,
            },
            { 
                round: 2,
                breaths: 25,
                breathPace: 'quick', 
                hold: 120,
                silentHold: false,
            },
            { 
                round: 3,
                breaths: 30,
                breathPace: 'quick', 
                hold: 120,
                silentHold: false,
            },
            { 
                round: 4,
                breaths: 30,
                breathPace: 'quick', 
                hold: 120,
                silentHold: false,
            },
            { 
                round: 5,
                breaths: 35,
                breathPace: 'quick', 
                hold: 150,
                silentHold: false,
            },
            ]
    }, 
    { 
        id: 17,
        title: 'Take it slow',
        level: 'beginner',
        musicUrl: '/sounds/ambient1.mp3',
        sessionData:[
        { 
            round: 1,
            breaths: 15,
            breathPace: 'slow',
            hold: 60,
            silentHold: false,
        },
        { 
            round: 2,
            breaths: 15,
            breathPace: 'slow', 
            hold: 60,
            silentHold: false,
        },
        { 
            round: 3,
            breaths: 15,
            breathPace: 'slow', 
            hold: 90,
            silentHold: false,
        }
        ]
    },
    { 
        id: 18,
        title: 'Always Loved',
        level: 'intermediate',
        musicUrl: '/sounds/ambient1.mp3',
        sessionData:[
            { 
                round: 1,
                breaths: 20,
                breathPace: 'medium',
                hold: 60,
                silentHold: false,
            },
            { 
                round: 2,
                breaths: 25,
                breathPace: 'medium', 
                hold: 80,
                silentHold: false,
            },
            { 
                round: 3,
                breaths: 30,
                breathPace: 'slow', 
                hold: 100,
                silentHold: false,
            },
            { 
                round: 4,
                breaths: 35,
                breathPace: 'quick', 
                hold: 120,
                silentHold: false,
            }
            ]
    },
    { 
        id: 19,
        title: 'Hard Work',
        level: 'advanced',
        musicUrl: '/sounds/ambient1.mp3',
        sessionData:[
            { 
                round: 1,
                breaths: 40,
                breathPace: 'medium',
                hold: 120,
                silentHold: false,
            },
            { 
                round: 2,
                breaths: 40,
                breathPace: 'medium', 
                hold: 120,
                silentHold: false,
            },
            { 
                round: 3,
                breaths: 40,
                breathPace: 'medium', 
                hold: 150,
                silentHold: false,
            },
            { 
                round: 4,
                breaths: 40,
                breathPace: 'quick', 
                hold: 150,
                silentHold: false,
            },
            { 
                round: 5,
                breaths: 40,
                breathPace: 'slow', 
                hold: 180,
                silentHold: false,
            },
            ]
    },  
    { 
        id: 20,
        title: 'Better You',
        level: 'beginner',
        musicUrl: '/sounds/ambient1.mp3',
        sessionData:[
        { 
            round: 1,
            breaths: 8,
            breathPace: 'quick',
            hold: 8,
            silentHold: false,
        },
        { 
            round: 2,
            breaths: 6,
            breathPace: 'medium', 
            hold: 8,
            silentHold: false,
        },
        { 
            round: 3,
            breaths: 4,
            breathPace: 'slow', 
            hold: 10,
            silentHold: false,
        }
        ]
    },
    { 
        id: 21,
        title: 'Dont Give Up',
        level: 'intermediate',
        musicUrl: '/sounds/ambient1.mp3',
        sessionData:[
            { 
                round: 1,
                breaths: 8,
                breathPace: 'quick',
                hold: 8,
                silentHold: false,
            },
            { 
                round: 2,
                breaths: 6,
                breathPace: 'medium', 
                hold: 8,
                silentHold: false,
            },
            { 
                round: 3,
                breaths: 4,
                breathPace: 'slow', 
                hold: 6,
                silentHold: false,
            },
            { 
                round: 4,
                breaths: 4,
                breathPace: 'quick', 
                hold: 6,
                silentHold: false,
            }
        ]
    }
]

