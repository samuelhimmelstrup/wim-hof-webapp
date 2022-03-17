
export const BreathPaceValues = {
    slow: 6,
    medium: 4,
    quick: 2
}

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
            breaths: 4,
            breathPace: 'quick',
            hold: 4,
            silentHold: false,
        },
        { 
            breaths: 4,
            breathPace: 'quick',
            hold: 4,
            silentHold: true,
        },
        { 
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
                breaths: 20,
                breathPace: 'medium',
                hold: 90,
                silentHold: false,
            },
            { 
                breaths: 25,
                breathPace: 'medium', 
                hold: 100,
                silentHold: false,
            },
            { 
                breaths: 25,
                breathPace: 'quick',
                hold: 120,
                silentHold: false,
            },
            { 
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
                breaths: 30,
                breathPace: 'slow',
                hold: 90,
                silentHold: false,
            },
            { 
                breaths: 30,
                breathPace: 'medium', 
                hold: 90,
                silentHold: false,
            },
            { 
                breaths: 30,
                breathPace: 'medium', 
                hold: 120,
                silentHold: false,
            },
            { 
                breaths: 40,
                breathPace: 'quick', 
                hold: 120,
                silentHold: false,
            },
            { 
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
            breaths: 20,
            breathPace: 'medium',
            hold: 60,
            silentHold: false,
        },
        { 
            breaths: 30,
            breathPace: 'medium', 
            hold: 90,
            silentHold: false,
        },
        { 
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
                breaths: 25,
                breathPace: 'medium',
                hold: 90,
                silentHold: false,
            },
            { 
                breaths: 25,
                breathPace: 'medium', 
                hold: 90,
                silentHold: false,
            },
            { 
                breaths: 30,
                breathPace: 'medium', 
                hold: 120,
                silentHold: false,
            },
            { 
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
                breaths: 25,
                breathPace: 'quick',
                hold: 90,
                silentHold: false,
            },
            { 
                breaths: 25,
                breathPace: 'quick', 
                hold: 120,
                silentHold: false,
            },
            { 
                breaths: 30,
                breathPace: 'quick', 
                hold: 120,
                silentHold: false,
            },
            { 
                breaths: 30,
                breathPace: 'quick', 
                hold: 120,
                silentHold: false,
            },
            { 
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
        level: 'beginner',
        musicUrl: '/sounds/ambient1.mp3',
        sessionData:[
        { 
            breaths: 15,
            breathPace: 'slow',
            hold: 60,
            silentHold: false,
        },
        { 
            breaths: 15,
            breathPace: 'slow', 
            hold: 60,
            silentHold: false,
        },
        { 
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
                breaths: 20,
                breathPace: 'medium',
                hold: 60,
                silentHold: false,
            },
            { 
                breaths: 25,
                breathPace: 'medium', 
                hold: 80,
                silentHold: false,
            },
            { 
                breaths: 30,
                breathPace: 'slow', 
                hold: 100,
                silentHold: false,
            },
            { 
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
                breaths: 40,
                breathPace: 'medium',
                hold: 120,
                silentHold: false,
            },
            { 
                breaths: 40,
                breathPace: 'medium', 
                hold: 120,
                silentHold: false,
            },
            { 
                breaths: 40,
                breathPace: 'medium', 
                hold: 150,
                silentHold: false,
            },
            { 
                breaths: 40,
                breathPace: 'quick', 
                hold: 150,
                silentHold: false,
            },
            { 
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
            breaths: 8,
            breathPace: 'quick',
            hold: 8,
            silentHold: false,
        },
        { 
            breaths: 6,
            breathPace: 'medium', 
            hold: 8,
            silentHold: false,
        },
        { 
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
                breaths: 8,
                breathPace: 'quick',
                hold: 8,
                silentHold: false,
            },
            { 
                breaths: 6,
                breathPace: 'medium', 
                hold: 8,
                silentHold: false,
            },
            { 
                breaths: 4,
                breathPace: 'slow', 
                hold: 6,
                silentHold: false,
            },
            { 
                breaths: 4,
                breathPace: 'quick', 
                hold: 6,
                silentHold: false,
            }
        ]
    }
]

