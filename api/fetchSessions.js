
export const BreathPaceValues = {
    slow: 6,
    medium: 4,
    quick: 2,
}

export const defaultWimHofRound = {
    type: 'Wim Hof',
    breaths: 30,
    breathPace: 'medium',
    hold: 90,
    silentHold: false
}

export const defaultBoxRound = {
    type: 'Box',
    cycles: 25,
    breathPace: 4
}

// DATA FORMAT OVERVIEW: // metadata (title, number of rounds, level)
// sessionData

export const DUMMY_SESSIONS = [
    { 
        id: 7,
        title: 'Mix Breath Test',
        sessionType: 'Mix',
        level: 'beginner',
        musicUrl: '/sounds/ambient1.mp3',
        sessionData:[
        { 
            type: 'Box',
            cycles: 10,
            breathPace: 4,
        },
        {
            type: 'Wim Hof', 
            breaths: 2,
            breathPace: 'quick',
            hold: 2,
            silentHold: false,
        }
        ]
    },
    { 
        id: 8,
        title: 'Box Breath Test',
        sessionType: 'Box',
        level: 'beginner',
        musicUrl: '/sounds/ambient1.mp3',
        sessionData:[
        { 
            type: 'Box',
            cycles: 10,
            breathPace: 4,
        }
        ]
    },
    { 
        id: 9,
        title: 'Quick Test',
        sessionType: 'Wim Hof',
        level: 'beginner',
        musicUrl: '/sounds/ambient1.mp3',
        sessionData:[
        {    
            type: 'Wim Hof', 
            breaths: 2,
            breathPace: 'slow',
            hold: 2,
            silentHold: false,
        }
        ]
    },
    { 
        id: 10,
        title: 'Quick Test 2',
        sessionType: 'Wim Hof',
        level: 'beginner',
        musicUrl: '/sounds/ambient1.mp3',
        sessionData:[
        { 
            type: 'Wim Hof', 
            breaths: 4,
            breathPace: 'medium',
            hold: 4,
            silentHold: false,
        },
        { 
            type: 'Wim Hof', 
            breaths: 4,
            breathPace: 'quick',
            hold: 4,
            silentHold: true,
        },
        { 
            type: 'Wim Hof', 
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
        sessionType: 'Wim Hof',
        level: 'intermediate',
        musicUrl: '/sounds/ambient1.mp3',
        sessionData:[
            { 
                type: 'Wim Hof', 
                breaths: 20,
                breathPace: 'medium',
                hold: 90,
                silentHold: false,
            },
            { 
                type: 'Wim Hof', 
                breaths: 25,
                breathPace: 'medium', 
                hold: 100,
                silentHold: false,
            },
            { 
                type: 'Wim Hof', 
                breaths: 25,
                breathPace: 'quick',
                hold: 120,
                silentHold: false,
            },
            { 
                type: 'Wim Hof', 
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
        sessionType: 'Wim Hof',
        level: 'advanced',
        musicUrl: '/sounds/ambient1.mp3',
        sessionData:[
            { 
                type: 'Wim Hof', 
                breaths: 30,
                breathPace: 'slow',
                hold: 90,
                silentHold: false,
            },
            { 
                type: 'Wim Hof', 
                breaths: 30,
                breathPace: 'medium', 
                hold: 90,
                silentHold: false,
            },
            { 
                type: 'Wim Hof', 
                breaths: 30,
                breathPace: 'medium', 
                hold: 120,
                silentHold: false,
            },
            { 
                type: 'Wim Hof', 
                breaths: 40,
                breathPace: 'quick', 
                hold: 120,
                silentHold: false,
            },
            { 
                type: 'Wim Hof', 
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
        sessionType: 'Wim Hof',
        level: 'beginner',
        musicUrl: '/sounds/ambient1.mp3',
        sessionData:[
        { 
            type: 'Wim Hof', 
            breaths: 20,
            breathPace: 'medium',
            hold: 60,
            silentHold: false,
        },
        { 
            type: 'Wim Hof', 
            breaths: 30,
            breathPace: 'medium', 
            hold: 90,
            silentHold: false,
        },
        { 
            type: 'Wim Hof', 
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
        sessionType: 'Wim Hof',
        level: 'intermediate',
        musicUrl: '/sounds/ambient1.mp3',
        sessionData:[
            { 
                type: 'Wim Hof', 
                breaths: 25,
                breathPace: 'medium',
                hold: 90,
                silentHold: false,
            },
            { 
                type: 'Wim Hof', 
                breaths: 25,
                breathPace: 'medium', 
                hold: 90,
                silentHold: false,
            },
            { 
                type: 'Wim Hof', 
                breaths: 30,
                breathPace: 'medium', 
                hold: 120,
                silentHold: false,
            },
            { 
                type: 'Wim Hof', 
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
        sessionType: 'Wim Hof',
        level: 'advanced',
        musicUrl: '/sounds/ambient1.mp3',
        sessionData:[
            { 
                type: 'Wim Hof', 
                breaths: 25,
                breathPace: 'quick',
                hold: 90,
                silentHold: false,
            },
            { 
                type: 'Wim Hof', 
                breaths: 25,
                breathPace: 'quick', 
                hold: 120,
                silentHold: false,
            },
            { 
                type: 'Wim Hof', 
                breaths: 30,
                breathPace: 'quick', 
                hold: 120,
                silentHold: false,
            },
            { 
                type: 'Wim Hof', 
                breaths: 30,
                breathPace: 'quick', 
                hold: 120,
                silentHold: false,
            },
            { 
                type: 'Wim Hof', 
                breaths: 35,
                breathPace: 'quick', 
                hold: 150,
                silentHold: false,
            },
            ]
    }, 
    { 
        id: 17,
        title: 'Take It Slow',
        sessionType: 'Wim Hof',
        level: 'beginner',
        musicUrl: '/sounds/ambient1.mp3',
        sessionData:[
        { 
            type: 'Wim Hof', 
            breaths: 15,
            breathPace: 'slow',
            hold: 60,
            silentHold: false,
        },
        { 
            type: 'Wim Hof', 
            breaths: 15,
            breathPace: 'slow', 
            hold: 60,
            silentHold: false,
        },
        { 
            type: 'Wim Hof', 
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
        sessionType: 'Wim Hof',
        level: 'intermediate',
        musicUrl: '/sounds/ambient1.mp3',
        sessionData:[
            { 
                type: 'Wim Hof', 
                breaths: 20,
                breathPace: 'medium',
                hold: 60,
                silentHold: false,
            },
            { 
                type: 'Wim Hof', 
                breaths: 25,
                breathPace: 'medium', 
                hold: 80,
                silentHold: false,
            },
            { 
                type: 'Wim Hof', 
                breaths: 30,
                breathPace: 'slow', 
                hold: 100,
                silentHold: false,
            },
            { 
                type: 'Wim Hof', 
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
        sessionType: 'Wim Hof',
        level: 'advanced',
        musicUrl: '/sounds/ambient1.mp3',
        sessionData:[
            { 
                type: 'Wim Hof', 
                breaths: 40,
                breathPace: 'medium',
                hold: 120,
                silentHold: false,
            },
            { 
                type: 'Wim Hof', 
                breaths: 40,
                breathPace: 'medium', 
                hold: 120,
                silentHold: false,
            },
            { 
                type: 'Wim Hof', 
                breaths: 40,
                breathPace: 'medium', 
                hold: 150,
                silentHold: false,
            },
            { 
                type: 'Wim Hof', 
                breaths: 40,
                breathPace: 'quick', 
                hold: 150,
                silentHold: false,
            },
            { 
                type: 'Wim Hof', 
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
        sessionType: 'Wim Hof',
        level: 'beginner',
        musicUrl: '/sounds/ambient1.mp3',
        sessionData:[
        { 
            type: 'Wim Hof', 
            breaths: 8,
            breathPace: 'quick',
            hold: 8,
            silentHold: false,
        },
        { 
            type: 'Wim Hof', 
            breaths: 6,
            breathPace: 'medium', 
            hold: 8,
            silentHold: false,
        },
        { 
            type: 'Wim Hof', 
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
        sessionType: 'Wim Hof',
        level: 'intermediate',
        musicUrl: '/sounds/ambient1.mp3',
        sessionData:[
            { 
                type: 'Wim Hof', 
                breaths: 8,
                breathPace: 'quick',
                hold: 8,
                silentHold: false,
            },
            { 
                type: 'Wim Hof', 
                breaths: 6,
                breathPace: 'medium', 
                hold: 8,
                silentHold: false,
            },
            { 
                type: 'Wim Hof', 
                breaths: 4,
                breathPace: 'slow', 
                hold: 6,
                silentHold: false,
            },
            { 
                type: 'Wim Hof', 
                breaths: 4,
                breathPace: 'quick', 
                hold: 6,
                silentHold: false,
            }
        ]
    }
]

