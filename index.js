const Selection1 = document.getElementById("BusinessProposalCompetition");
const Selection2 = document.getElementById("BusinessPresentationCompetition");
const Selection3 = document.getElementById("InovativeEntrepreneursChallenge");
const teamLeaderName = document.getElementById("competitionParticipant1");
const teamMemberName = document.getElementById("competitionParticipantMember1");
const teamMemberName2 = document.getElementById("competitionParticipantMember2");
const phoneNumber = document.getElementById("phoneNumber");
let CompetitionChoose;
let participantTeamLeaderName;
let participantMemberName1;
let participantMemberName2;
let teamLeaderPhoneNumber;

function submitCompetition(){
    if(Selection1.checked){
        CompetitionChoose = `Competition    : Business Proposal Competition`
    } else if (Selection2.checked){
        CompetitionChoose = `Competition    : Business Presentation Competition`
    } else if (Selection3.checked){
        CompetitionChoose = `Competition    : Inovative Entrepreneurs Challenge`
    } else {
        window.alert("Choose a competition field!")
        return;
    }

    if(teamLeaderName.value === ""){
        window.alert("Name of the leader should be added (if you go alone, use your name as the leader)");
        return;
    }
    participantTeamLeaderName = `Team Leader     : ${teamLeaderName.value}`;
    participantMemberName1 = teamMemberName.value !== "" ? `Member team 1: ${teamMemberName.value}\n` : "";
    participantMemberName2 = teamMemberName2.value !== "" ? `Member team 2: ${teamMemberName2.value}\n` : "";
    if (phoneNumber.value === ""){
        window.alert("In order for easier contact, add your phone number");
        return
    }
    teamLeaderPhoneNumber = `Phone Number: ${phoneNumber.value}`;
    if (confirm(`${CompetitionChoose}\n${participantTeamLeaderName}\n${participantMemberName1}${participantMemberName2}${teamLeaderPhoneNumber}\n\nIs the information correct?`)){
        window.alert("You have registered")
        window.location.href = "index.html";
    }
}