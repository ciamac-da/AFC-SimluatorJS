const { groupStage, groupObj } = require("./input.js")
groupStage()

const simulator = () => {
    // All teams
    let totalTeams = Object.keys(groupObj).length
    // Schedule
    let gamePlan = [[1,2], [3,4], [1,3], [2,4], [1,4], [2,3], [2,1], [4,3], [3,1], [4,2], [4,1], [3,2]]
    let charCode = "A".charCodeAt(0)

    for(let i=charCode; i < (charCode + (totalTeams /4)); i++){
        
        let group = String.fromCharCode(i)

        for( let j=0 ; j < gamePlan.length; j++){

            let t1 = group + gamePlan[j][0]
            let t2 = group + gamePlan[j][1]

            // Get Teams from object
            let team1 = groupObj[t1]
            let team2 = groupObj[t2]
            
            // Randomize the score
            let goalsTeam1 = Math.round(Math.random() + 3)
            let goalsTeam2 = Math.round(Math.random() + 3)

            team1.goalsScored += goalsTeam1
            team1.goalsConceded += goalsTeam2
            team2.goalsScored += goalsTeam2
            team2.goalsConceded += goalsTeam1

            let resultDifference = goalsTeam1 - goalsTeam2

            // Points logic
            if( resultDifference > 0 ) {
                team1.points += 3
            } else if( resultDifference < 0) {
                team2.points += 3
            } else {
                team1.points += 1
                team2.points += 1
            }
            console.log(`Group Match: ${team1.name} vs. ${team2.name} ${goalsTeam1}:${goalsTeam2}`)
            
        }
    }
    let groupTable = []
    let knockOutStageTeams = []

    for(let j= charCode; j < (charCode + (totalTeams / 4)); j++){
        let group1 = String.fromCharCode(j)
        for(let i=0; i < 4; i++){
            let t1 = group1 +(i+1)
            let team = groupObj[t1]

            groupTable.push([team.name, team.points, team.goalsScored, team.goalsConceded])
        }
        groupTable.sort(function(a,b){
            if(a[1] === b[1]) {
                return a[5] - b[5]
            }
            return b[1] - a[1]
        })
        knockOutStageTeams = knockOutStageTeams.concat(groupTable.slice(0,2))
        console.log('Group Stage Final Table:', groupTable)
        groupTable = []

    }
    let best16 = []
    for(let i = 0; i < knockOutStageTeams.length; i++){
        best16.push({name: knockOutStageTeams[i].slice(0,1).toString(), totalGoals: 0, guestGoals:0})
        
    }
    
    console.log(best16)
    let best8 = []
    let best4 = []
    let best2 = []
    //Schedule for the knockOut phase    
    let knockOut16 = [[0,3], [3,0], [4,7], [7,4], [8,11], [11,8], [12,15], [15,12], [2,1], [1,2], [6,5], [5,6], [10,9],[9,10], [14,13],[13,14]] 
    let knockOut8  = [[0,1], [1,0], [2,3], [3,2],[4,5], [5,4], [6,7], [7,6]] 
    let semiFinal  = [[0,1], [1,0], [2,3], [3,2]]
    let final      = [[0,1]]    
    let winner     = ''
    
    
    //KnockOut function for all stages
    const knockOutFunc = (teamsQual, schedule, teamsWinerArr=[], stage ) =>{
        
        let pot1=[]; 
        let pot2=[];
        
        for(let i = 0; i <schedule.length; i++){
            let t1 = schedule[i][0]
            let t2 = schedule[i][1]
            
            let team1 = teamsQual[t1]
            let team2 = teamsQual[t2]
            
            
            let goalsTeam1 = Math.round(Math.random() * 3)
            let goalsTeam2 = Math.round(Math.random() * 3)
            
        team1.totalGoals += goalsTeam1
        team2.totalGoals += goalsTeam2
        team2.guestGoals += goalsTeam2
        
        console.log(`${stage}: ${team1.name} vs. ${team2.name} ${goalsTeam1}:${goalsTeam2}`)
        
        pot1.push(team1)
        pot2.push(team2)

  // The final match condition because is the only match thah the teams plays just once
  if(stage === 'Final-Match'){
    if(goalsTeam1 > goalsTeam2){
        console.log(`The Winner is ${team1.name}`)
    } else if (goalsTeam2 > goalsTeam1){
        console.log(`The Winner is ${team2.name}`)
    }else{
        if ( Math.random() > .5 ){
            console.log(`The winner is ${team1.name} after penalty`)
        } else {
            console.log(`The winner is ${team2.name} after penalty`)

        }
    }
}
}
for(let j = 0; j<pot1.length -1; j += 2){
            
    let score1 = pot1[j]
    let score2 = pot2[j]
    // goal diffence
     if( score1.totalGoals > score2.totalGoals ){
         teamsWinerArr.push(pot1[j])
     } else if(score1.totalGoals < score2.totalGoals){
         teamsWinerArr.push(pot2[j])
     } else { // guest goal difference
        // console.log('guest goals!!!')
        if( score1.guestGoals > score2.guestGoals ){
            teamsWinerArr.push(pot1[j])
        } else if (score1.guestGoals < score2.guestGoals) {
            teamsWinerArr.push(pot2[j])
        } else { // penalty
            // console.log('penalty!!!',score1.totalGoals,score2.totalGoals,score1.guestGoals,score2.guestGoals)
            if ( Math.random() > .5 ){
                teamsWinerArr.push(pot1[j])
            } else {
                teamsWinerArr.push(pot2[j])
            }
        }
     }
}



return teamsWinerArr
}
    knockOutFunc(best16, knockOut16, best8, 'Best of 16')
    knockOutFunc(best8, knockOut8, best4, 'Quater-Final')
    knockOutFunc(best4, semiFinal, best2, 'Semi-Final')
    knockOutFunc(best2, final, winner, 'Final-Match' )

        
}
simulator()