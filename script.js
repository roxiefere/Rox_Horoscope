function nameExists(x) {
    if (x == "") {
        alert("Please Enter Name");
        return false;
    }
}

function realDate(x, y) {
    if (x == "" || y == "") {
        alert("GET BACK TIME TRAVELER! THAT DAY DOESN'T EXIST!");
        return false;
    }
    if (y == 2 && (x == 31 || x == 30 || x == 29)) {
        alert("GET BACK TIME TRAVELER! THAT DAY DOESN'T EXIST!");
        return false;
    }
    if (x == 31 && (y == 9 || x == 4 || x == 6 || x == 11)) {
        alert("GET BACK TIME TRAVELER! THAT DAY DOESN'T EXIST!");
        return false;
    }
    if (x >= 32 || y >= 13) {
        alert("GET BACK TIME TRAVELER! THAT DAY DOESN'T EXIST!");
        return false;
    }
}

function birthday(x, y){
    var birth = "";
    var today = new Date();
    var date = today.getDate();
    var month = today.getMonth() +1 ;
    if(x == date && y == month){
        birth = "Woah, Happy Birthday!";
    }
    return birth;
}

function findSign(x, y){
    if((y == 1 && x >= 20) || (y == 2 && x <= 18)){
        return 1;
    }
    if((y == 2 && x >= 219) || (y == 3 && x <= 20)){
        return 2;
    }
    if((y == 3 && x >= 21) || (y == 4 && x <= 19)){
        return 3;
    }
    if((y == 4 && x >= 20) || (y == 5 && x <= 20)){
        return 4;
    }
    if((y == 5 && x >= 21) || (y == 6 && x <= 20)){
        return 5;
    }
    if((y == 6 && x >= 21) || (y == 7 && x <= 22)){
        return 6;
    }
    if((y == 7 && x >= 23) || (y == 8 && x <= 22)){
        return 7;
    }
    if((y == 8 && x >= 23) || (y == 9 && x <= 22)){
        return 8;
    }
    if((y == 9 && x >= 23) || (y == 10 && x <= 22)){
        return 9;
    }
    if((y == 10 && x >= 23) || (y == 11 && x <= 21)){
        return 10;
    }
    if((y == 11 && x >= 22) || (y == 12 && x <= 21)){
        return 11;
    }
    if((y == 12 && x >= 22) || (y == 1 && x <= 19)){
        return 12;
    }
}

function returnSign(x, y){
    var s = findSign(x, y);
    var sign = "";
    if(s == 1) {
        sign = "Aquarius";
    }
    if(s == 2) {
        sign = "Pisces";
    }
    if(s == 3) {
        sign = "Aries";
    }
    if(s == 4) {
        sign = "Taurus";
    }
    if(s== 5) {
        sign = "Gemini";
    }
    if(s == 6) {
        sign = "Cancer";
    }
    if(s == 7) {
        sign = "Leo";
    }
    if(s == 8) {
        sign = "Virgo";
    }
    if(s == 9) {
        sign = "Libra";
    }
    if(s == 10) {
        sign = "Scorpio";
    }
    if(s == 11) {
        sign = "Sagittarius";
    }
    if(s == 12) {
        sign = "Capricorn";
    }
    return sign;
}

function returnHoro(x,y){
    var s = findSign(x, y);
    var horo = "";
    if(s == 1) {
        horo = "Emotions stemming from past experiences might cause you to assume undue responsibilities, particularly concerning family members. This is fine as long as you realize what you're doing is as much for you as for the other person. Whatever tasks you assume may allow you to release old traumas and give form to your plans and ambitions. And don't be surprised if those you help today go to bat for you later.";
    }
    if(s == 2) {
        horo = "Relatives or neighbors may come to you today asking for favors. Some may know exactly what buttons to push in order to get you to do what they want. Don't be sucked into guilt or other negative emotions. Help others if you wish, Pisces, but recognize that you're doing it because you want to and not because you feel you have to. You might even learn something about yourself in the process.";
    }
    if(s == 3) {
        horo = "A temporary lack of belief in your abilities might have you hesitating to start a project or take on a task that you'd normally snap up. This could involve something you've wanted to try or helping someone else. Your faith in yourself should never flag, but if it does, it's important to remember that hard work can be as important as talent - and you aren't afraid of that!";
    }
    if(s == 4) {
        horo = "A phone conversation with someone who lives far away might have you feeling a bit sad, reflecting on how much you miss that person. This can lead to pondering about your life. You might question the direction you seem to be moving in, and consider other possible options. You're likely to be cautious when it comes to making final decisions, Taurus. You will consider every detail.";
    }
    if(s == 5) {
        horo = "Today you might be in a reflective and meditative mood. You may think about mundane matters, such as how to increase your income, or more complex issues, such as the purpose of life. You aren't likely to want to do much socializing today, Gemini. It's probably the perfect day to stay in, relax, and enjoy your own company. Reading could prove especially informative now.";
    }
    if(s == 6) {
        horo = "Obligations to friends and groups could interfere with time that you want to spend with your partner. A number of visitors in your home might demand more of your time, energy, and attention, and you might find this disconcerting. You're no one's servant, Cancer. You're entitled to enjoy yourself. Save some time for your mate at the end of the day.";
    }
    if(s == 7) {
        horo = "You might wake up this morning and decide your home is a total wreck. The desire to spend the day cleaning and sprucing up your house might prove almost obsessive. Do what you have to do, but don't get so caught up that you forget about the big picture. Whatever you do today, Leo, view it in its proper perspective. The world won't end if your house isn't flawlessly clean.";
    }
    if(s == 8) {
        horo = "Extra time and attention that you have been devoting to your career should pay off about now. You've worked hard to be where you are, and you aren't through climbing the ladder of success just yet. You aren't likely to rest on your laurels. Today you might spend a lot of time planning your next goal. A little ingenuity will definitely pay off here, Virgo. Use whatever advantages you have.";
    }
    if(s == 9) {
        horo = "An older visitor could come to your home, possibly to help you with some work that needs to be done. Family members may have abandoned you for the day to go out and do their own thing. You will welcome the company as well as the help. Practical matters, such as the household budget, might need attention, so set aside some time to work out the details.";
    }
    if(s == 10) {
        horo = "Today you might perform some service to people who live in your neighborhood. Perhaps you will chauffeur people around to do their shopping. Perhaps you will help people with household tasks. Pets may also need some attention. Whatever it is, you will enjoy it, and be appreciated as well. Expect to have a very busy day. You will certainly sleep soundly tonight.";
    }
    if(s == 11) {
        horo = "Meticulous and sincere effort on your part may have led to a recent increase in income. Today you might be thinking of reworking your budget. While others might throw caution to the wind at a time like this, today you might go too far in the opposite direction. Be careful and realistic, Sagittarius, but don't be overly frugal. You've worked hard to get where you are and you deserve a reward.";
    }
    if(s == 12) {
        horo = "A sense of duty toward family members, children, and your sweetheart may cause you to take on responsibilities today that you wouldn't normally assume. Sincere efforts on behalf of those you care about are likely to bring the results you want. It won't just make you happy but will also please those you are helping. This not only makes you feel appreciated, it will also boost your physical strength.";
    }
    return horo;
}

function pickImage(x, y){
    var s = returnSign(x, y);
    var res = s.toLowerCase();
    return "images/" + res + "200" + ".png";
}

function submit(){
    var name = document.getElementById("Name").value;
    var d = parseInt(document.getElementById("Day").value);
    var m = parseInt(document.getElementById("Month").value);
    nameExists(name);
    realDate(d, m);
    document.getElementById("returnName").innerHTML = "Hey there " + name + ". " + birthday(d, m);
    document.getElementById("returnSign").innerHTML = "Your sign is: " + returnSign(d, m);
    document.getElementById("image").src = pickImage(d, m);
    document.getElementById("returnHoro").innerHTML = returnHoro(d, m);
}