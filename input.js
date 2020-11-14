// !Teams array
let groups = [
    ['Al Ahli FC', 'Esteghlal(TAJ) FC', 'Al Shorta', 'Al Hilal'],
    ['Pakhtakor', 'Shabab Dubai', 'Shahr Khodro', 'Tractor Sazi'],
    ['Persepolis', 'Al Taawoun', 'Al Duhail', 'Sharjah'] ,  
    ['Al Nassr', 'Al Saad', 'Sepahan', 'Al Ain'],   
    ['FC Seoul', 'Beijing FC', 'Melbourne Victory', 'Chiangrai'],
    ['Guangzhou', 'Vissel Kobe', 'Shanghai SIPG', 'Sydney FC'],
    ['Perth Glory', 'Shanghai Shenhua', 'Johor Darul', 'Yokohama F.Marinos'],
    ['FC Tokyo', 'Suwon Samsung', 'Jeonbuk Hyundai', 'Ulsan Hyundai' ], 
]

exports.groupStage = () =>{
    for(i=0 ; i< groups.length; i++){
        groupList = groups[i]
        console.log(`Group ${i+1}`, groupList);
    }
}

//!Groups
exports.groupObj = {
    A1:{
        name: "Al Ahli FC",
        points: 0,
        goalsScored: 0,
        goalsConceded: 0,
        goalDifference: 0

    },
    A2:{
        name: "Esteghlal(TAJ) FC",
        points: 0,
        goalsScored: 0,
        goalsConceded: 0,
        goalDifference: 0

    },
    A3:{
        name: "AL Shorta",
        points: 0,
        goalsScored: 0,
        goalsConceded: 0,
        goalDifference: 0

    },
    A4:{
        name: "AL Hilal",
        points: 0,
        goalsScored: 0,
        goalsConceded: 0,
        goalDifference: 0

    },
    B1:{
        name: "Pakhtakor",
        points: 0,
        goalsScored: 0,
        goalsConceded: 0,
        goalDifference: 0

    },
    B2:{
        name: "Shabab Dubai",
        points: 0,
        goalsScored: 0,
        goalsConceded: 0,
        goalDifference: 0

    },
    B3:{
        name: "Shahr Khodro",
        points: 0,
        goalsScored: 0,
        goalsConceded: 0,
        goalDifference: 0

    },
    B4:{
        name: "Tractor Sazi",
        points: 0,
        goalsScored: 0,
        goalsConceded: 0,
        goalDifference: 0

    },
    C1:{
        name: "Persepolis",
        points: 0,
        goalsScored: 0,
        goalsConceded: 0,
        goalDifference: 0

    },
    C2:{
        name: "Al Taawoun",
        points: 0,
        goalsScored: 0,
        goalsConceded: 0,
        goalDifference: 0

    },
    C3:{
        name: "Al Duhail",
        points: 0,
        goalsScored: 0,
        goalsConceded: 0,
        goalDifference: 0

    },
    C4:{
        name: "Sharjah",
        points: 0,
        goalsScored: 0,
        goalsConceded: 0,
        goalDifference: 0

    },
    D1:{
        name: "Al Nassr",
        points: 0,
        goalsScored: 0,
        goalsConceded: 0,
        goalDifference: 0

    },
    D2:{
        name: "Al Saad",
        points: 0,
        goalsScored: 0,
        goalsConceded: 0,
        goalDifference: 0

    },
    D3:{
        name: "Sepahan",
        points: 0,
        goalsScored: 0,
        goalsConceded: 0,
        goalDifference: 0

    },
    D4:{
        name: "Al Ain",
        points: 0,
        goalsScored: 0,
        goalsConceded: 0,
        goalDifference: 0

    },
    E1:{
        name: "FC Seoul",
        points: 0,
        goalsScored: 0,
        goalsConceded: 0,
        goalDifference: 0

    },
    E2:{
        name: "Beijing FC",
        points: 0,
        goalsScored: 0,
        goalsConceded: 0,
        goalDifference: 0

    },
    E3:{
        name: "Melbourne Victory",
        points: 0,
        goalsScored: 0,
        goalsConceded: 0,
        goalDifference: 0

    },
    E4:{
        name: "Chiangrai",
        points: 0,
        goalsScored: 0,
        goalsConceded: 0,
        goalDifference: 0

    },
    F1:{
        name: "Guangzhou",
        points: 0,
        goalsScored: 0,
        goalsConceded: 0,
        goalDifference: 0

    },
    F2:{
        name: "Vissel Kobe",
        points: 0,
        goalsScored: 0,
        goalsConceded: 0,
        goalDifference: 0

    },
    F3:{
        name: "Shanghai SIPG",
        points: 0,
        goalsScored: 0,
        goalsConceded: 0,
        goalDifference: 0

    },
    F4:{
        name: "Sydney FC",
        points: 0,
        goalsScored: 0,
        goalsConceded: 0,
        goalDifference: 0

    },
    G1:{
        name: "Perth Glory",
        points: 0,
        goalsScored: 0,
        goalsConceded: 0,
        goalDifference: 0

    },
    G2:{
        name: "Shanghai Shenhua",
        points: 0,
        goalsScored: 0,
        goalsConceded: 0,
        goalDifference: 0

    },
    G3:{
        name: "Johor Darul",
        points: 0,
        goalsScored: 0,
        goalsConceded: 0,
        goalDifference: 0

    },
    G4:{
        name: "Yokohama F.Marinos",
        points: 0,
        goalsScored: 0,
        goalsConceded: 0,
        goalDifference: 0

    },
    H1:{
        name: "FC Tokyo",
        points: 0,
        goalsScored: 0,
        goalsConceded: 0,
        goalDifference: 0

    },
    H2:{
        name: "Suwon Samsung",
        points: 0,
        goalsScored: 0,
        goalsConceded: 0,
        goalDifference: 0

    },
    H3:{
        name: "Jeonbuk Hyundai",
        points: 0,
        goalsScored: 0,
        goalsConceded: 0,
        goalDifference: 0

    },
    H4:{
        name: "Ulsan Hyundai",
        points: 0,
        goalsScored: 0,
        goalsConceded: 0,
        goalDifference: 0

    },
}