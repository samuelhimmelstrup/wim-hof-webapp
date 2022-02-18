import styles from "../../styles/BreathingSessions.module.css"
import Link from "next/link"
import { useCollection } from "react-firebase-hooks/firestore";
import { app, db } from "../../firebase/clientApp";
import { collection, doc, setDoc, getDoc, addDoc } from "firebase/firestore";
import { useEffect } from "react";
import ItemWrapper from "../../layout/ItemWrapper"
import Wrapper from "../../layout/Wrapper"



// Map out list of predefined sessions here
// In link tags with href = /BreathingSessions/id

function BreathingSessions(props) {

  // PATHETIC ATTEMPT AT DATABASE READ/WRITE 
  // const docRef = doc(db, "predefinedSessions", "Session1");
  // const docSnap = getDoc(docRef);
  // console.log((docSnap))

  // useEffect(() => {
  //   const docRef = doc(db, "predefinedSessions", "Session1");
  //   const docSnap = getDoc(docRef);
  //   if (docSnap) {
  //     console.log("Document data:", docSnap);
  //   } else {
  //     console.log("No such document!");
  //   }
  // }, [])

  // const postToDb = async () => {
  //   try {
  //     await setDoc(doc(db, "predefinedSessions", "Session2"), { 
  //       title: "Walla Billa Session",
  //       level: "Beginner",
  //       sessionData:[
  //         { 
  //           round: 1,
  //           breaths: 2,
  //           breathType: "quick",
  //           hold: 5,
  //           silentHold: false
  //         },
  //         { 
  //           round: 2,
  //           breaths: 4,
  //           breathType: "normal", 
  //           hold: 8,
  //           silentHold: false 
  //         },
  //         { 
  //           round: 3,
  //           breaths: 4,
  //           breathType: "slow", // ("slow", "normal") 
  //           hold: 10,
  //           silentHold: false 
  //         }
  //       ]
  //     });
  //   }
  //   catch {
  //     console.log("youre fucked");
  //   }
  // }


  // DUMMY DATA
  const TWO_DUMMY_SESSIONS = [
    { 
      id: 10,
      title: "Walla Billa Session",
      level: "Beginner",
      sessionData:[
        { 
          round: 1,
          breaths: 2,
          breathType: "quick",
          hold: 5,
          silentHold: false
        },
        { 
          round: 2,
          breaths: 4,
          breathType: "normal", 
          hold: 8,
          silentHold: false 
        },
        { 
          round: 3,
          breaths: 4,
          breathType: "slow", // ("slow", "normal") 
          hold: 10,
          silentHold: false 
        }
      ]
    },
    { 
      id: 11,
      title: "Hold ud Session!",
      level: "Intermediate",
      sessionData:[
        { 
          round: 1,
          breaths: 4,
          breathType: "quick",
          hold: 10,
          silentHold: false
        },
        { 
          round: 2,
          breaths: 6,
          breathType: "normal", 
          hold: 8,
          silentHold: false 
        },
        { 
          round: 3,
          breaths: 5,
          breathType: "slow", // ("slow", "normal") 
          hold: 7,
          silentHold: false 
        }
      ]
    },

  ]

  return (
    <Wrapper>

      {TWO_DUMMY_SESSIONS.map(session => {
        const { id, title, sessionData } = session; // how to get round by round data to show?
        
        return (
            <Link href={"/BreathingSessions/" + id}>
              <div>
                <ItemWrapper key={id}>
                  <div>
                    <h1>{title}</h1>
                  </div> 
                </ItemWrapper>
              </div>
            </Link>
          )}
        )
      }

    </Wrapper>
  )
}

export default BreathingSessions;