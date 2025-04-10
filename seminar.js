const selection1 = document.getElementById("ArtsOfBusinessAndEntrepreneursSeminar");
const selection2 = document.getElementById("BusinessandArtificialIntellgenceSeminar");
const nameParticipant = document.getElementById("competitionParticipant1");
const phoneNumber = document.getElementById("phoneNumber");
let seminarChoosen;
let participantName
let numberPhone


function submitSeminar() {
    if (selection1.checked) {
        seminarChoosen = `Arts Of Business And Entrepreneurs Seminar`;
    } else if (selection2.checked) {
        seminarChoosen = `Business and Artificial Intellgence Seminar`;
    } else {
        window.alert("Choose a seminar you wanted to attend!");
        return;
    }

    if (nameParticipant.value !== "") {
        participantName = nameParticipant.value;
    } else {
        window.alert("Insert your name for registration!");
        return;
    }

    if (phoneNumber.value !== "") {
        numberPhone = phoneNumber.value;
    } else {
        window.alert("Insert your phone number for registration!");
        return;
    }
    if(confirm(`Seminar : ${seminarChoosen}\nName        : ${participantName}\nPhone Number: ${numberPhone}`)){
        window.alert("You have registered");
        window.location.href = "index.html";
    }
}