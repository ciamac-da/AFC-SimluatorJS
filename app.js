const { groupStage, groupObj } = require("./input.js")
groupStage()

const simulator = () => {
    // All teams
    let teams = Object.keys(groupObj).length
    // Schedule
    let gamePlan = [[1,2], [3,4], [1,3], [2,4], [1,4], [2,3], [2,1], [4,3], [3,1], [4,2], [4,1], [3,2]]
    let char = "A".charCodeAt(0)

    for(let i=char; i < (char + (teams /4)); i++){
        
        let group = String.fromCharCode(i)

        for( let j=0 ; j < gamePlan.length; i++){

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
            team2.goalsScored += goalsTeam1
            team2.goalsConceded += goalsTeam1

            let resultDifference = goalsTeam1 - goalsTeam2

            // Points logic
            if( resultDifference > 0 ) {
                team1.points += 3
            } else if( resultDiff < 0) {
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

    for(let j= char; j < (char + (teams / 4)); j++){
        let group1 = string.fromCharCode(j)
        for(let i=0; i < 4; i++){
            let t1 = group1 +(i+i)
            let team = groupObj[t1]

            groupTable.push([team.name, team.points, team.goalsScored, team.goalsConceded])
        }
        groupTable.sort(function(a,b){
            if(a[1] === b[1]) {
                return a[5] - b[5]
            }
            return b[1] - a[1]
        })

        
    }
}