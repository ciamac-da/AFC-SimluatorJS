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
    
}