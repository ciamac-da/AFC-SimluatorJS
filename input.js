// !Teams array
let groups = [
    ['Al Ahli FC', 'Esteghlal FC', 'Al Shorta', 'Al Hilal'],
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