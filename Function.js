var answerImg1 = document.querySelector ("#answerImg1");
var answerImg2 = document.querySelector ("#answerImg2");
var answerImg3 = document.querySelector ("#answerImg3");
var answerImg4 = document.querySelector ("#answerImg4");
var answerText1 = document.querySelector ("#answerText1");
var answerText2 = document.querySelector ("#answerText2");
var answerText3 = document.querySelector ("#answerText3");
var answerText4 = document.querySelector ("#answerText4");
var questionNumber = document.querySelector ("#questionNumber");
var questionText = document.querySelector ("#questionText");
var startOver = document.querySelector ("#startOver");
var teams = [0,0,0,0,0,0]; // mta,hta,bj,mn,hb,mh
var teamNames = ["Maccabi Tel Aviv","Hapoel Tel Aviv","Beitar Jerusalem", "Maccabi Netanya", "Hapoel Be'er Sheva","Maccabi Haifa"];
var logos = ["https://upload.wikimedia.org/wikipedia/he/archive/8/82/20140117202710%21Maccabi_tlv_fc.png","https://www.resporter.co.il/sites/resporter/UserContent/images/logos/%D7%94%D7%A4%D7%95%D7%A2%D7%9C%20%D7%AA%D7%9C%20%D7%90%D7%91%D7%99%D7%91.jpg","https://upload.wikimedia.org/wikipedia/he/4/49/NewFCBJ.png","http://www.fcmn.co.il/images/logo.png","http://aduma.co.il/wp-content/uploads/2018/11/Hapoel-Beer-Sheva-FC-512x512-PES-Logos-Blog.png","https://upload.wikimedia.org/wikipedia/he/archive/7/7b/20130904223943%21Maccabi-h.png"];
var winnerIndex = [];
var questionOrder = 0;

startOver.addEventListener("click", function(){
    location.reload();
});

answerImg1.addEventListener("click", function(){
    questionOrder ++;
    teams = updatePoints (questionOrder, 1, teams);
    changeQuestion(questionOrder);
    if (questionOrder === 5) {
        checkResult(teams,winnerIndex);
        showResult(winnerIndex,teamNames,logos);
    }
});

answerImg2.addEventListener("click", function(){
    questionOrder ++;
    teams = updatePoints (questionOrder, 2, teams);
    changeQuestion(questionOrder);
    if (questionOrder === 5) {
        checkResult(teams,winnerIndex);
        showResult(winnerIndex,teamNames,logos);
    }
});

answerImg3.addEventListener("click", function(){
    questionOrder ++;
    teams = updatePoints (questionOrder, 3, teams);
    changeQuestion(questionOrder);
    if (questionOrder === 5) {
        checkResult(teams,winnerIndex);
        showResult(winnerIndex,teamNames,logos);
    }
});

answerImg4.addEventListener("click", function(){
    questionOrder ++;
    teams = updatePoints (questionOrder, 4, teams);
    changeQuestion(questionOrder);
    if (questionOrder === 5) {
        checkResult(teams,winnerIndex);
        showResult(winnerIndex,teamNames,logos);
    }
});

function updatePoints (question, answer, array) {
    if (question === 1) {
        if (answer === 1) {
            array[0] += 2;
            array[1] += 1;
            array[2] += 1;
            array[3] += 1;
            array[4] += 0;
            array[5] += 3;
            return array;
        }
        if (answer === 2) {
            array[0] += 3;
            array[1] += 3;
            array[2] += 3;
            array[3] += 3;
            array[4] += 0;
            array[5] += 2;
            return array;
        }
        if (answer === 3) {
            array[0] += 2;
            array[1] += 1;
            array[2] += 3;
            array[3] += 1;
            array[4] += 3;
            array[5] += 1;
            return array;
        }
        if (answer === 4) {
            array[0] += 2;
            array[1] += 2;
            array[2] += 2;
            array[3] += 1;
            array[4] += 1;
            array[5] += 2;
            return array;
        }
    }

    if (question === 2) {
        if (answer === 1) {
            array[0] += 3;
            array[1] += 0;
            array[2] += 4;
            array[3] += 3;
            array[4] += 3;
            array[5] += 1;
            return array;
        }
        if (answer === 2) {
            array[0] += 3;
            array[1] += 1;
            array[2] += 0;
            array[3] += 3;
            array[4] += 1;
            array[5] += 1;
            return array;
        }
        if (answer === 3) {
            array[0] += 0;
            array[1] += 3;
            array[2] += 0;
            array[3] += 0;
            array[4] += 0;
            array[5] += 0;
            return array;
        }
        if (answer === 4) {
            array[0] += 1;
            array[1] += 1;
            array[2] += 2;
            array[3] += 1;
            array[4] += 1;
            array[5] += 1;
            return array;
        }
    }

    if (question === 3) {
        if (answer === 1) {
            array[0] += 1;
            array[1] += 2;
            array[2] += 1;
            array[3] += 2;
            array[4] += 0;
            array[5] += 3;
            return array;
        }
        if (answer === 2) {
            array[0] += 4;
            array[1] += 0;
            array[2] += 2;
            array[3] += 1;
            array[4] += 1;
            array[5] += 0;
            return array;
        }
        if (answer === 3) {
            array[0] += 0;
            array[1] += 0;
            array[2] += 4;
            array[3] += 1;
            array[4] += 0;
            array[5] += 0;
            return array;
        }
        if (answer === 4) {
            array[0] += 0;
            array[1] += 0;
            array[2] += 0;
            array[3] += 4;
            array[4] += 0;
            array[5] += 0;
            return array;
        }
    }

    if (question === 4) {
        if (answer === 1) {
            array[0] += 1;
            array[1] += 0;
            array[2] += 2;
            array[3] += 4;
            array[4] += 4;
            array[5] += 0;
            return array;
        }
        if (answer === 2) {
            array[0] += 2;
            array[1] += 0;
            array[2] += 4;
            array[3] += 0;
            array[4] += 0;
            array[5] += 0;
            return array;
        }
        if (answer === 3) {
            array[0] += 2;
            array[1] += 2;
            array[2] += 0;
            array[3] += 0;
            array[4] += 0;
            array[5] += 2;
            return array;
        }
        if (answer === 4) {
            array[0] += 0;
            array[1] += 0;
            array[2] += 0;
            array[3] += 0;
            array[4] += 0;
            array[5] += 0;
            return array;
        }
    }

    if (question === 5) {
        if (answer === 1) {
            array[0] += 5;
            array[1] += 2;
            array[2] += 1;
            array[3] += 1;
            array[4] += 1;
            array[5] += 2;
            return array;
        }
        if (answer === 2) {
            array[0] += 1;
            array[1] += 3;
            array[2] += 2;
            array[3] += 3;
            array[4] += 2;
            array[5] += 2;
            return array;
        }
        if (answer === 3) {
            array[0] += 2;
            array[1] += 1;
            array[2] += 5;
            array[3] += 5;
            array[4] += 2;
            array[5] += 2;
            return array;
        }
        if (answer === 4) {
            array[0] += 0;
            array[1] += 0;
            array[2] += 0;
            array[3] += 5;
            array[4] += 0;
            array[5] += 0;
            return array;
        }
    }
    
}

function changeQuestion (question) {
    
    if(question === 1) {
        questionNumber.textContent = "2";
        questionText.textContent = "Who are you going to vote in the elections?";
        answerImg1.src="https://cdn.theyeshivaworld.com/wp-content/uploads/2018/01/bibi.jpg?w=640";
        answerText1.textContent = "Bibi";
        answerImg2.src="https://images.haarets.co.il/image/fetch/w_478,h_357,q_auto,c_fill,f_auto/fl_any_format.preserve_transparency.progressive:none/https://www.haaretz.co.il/polopoly_fs/1.1371298.1317146691!/image/2101882042.jpg";
        answerText2.textContent = "Gantz";
        answerImg3.src="https://www.emeknews.co.il/wp-content/uploads/2018/01/43fb9972-4c14-4f17-b19b-b9f56455d631-848x636.jpg";
        answerText3.textContent = "Gabay";
        answerImg4.src="https://s1.kikar.co.il/th/data/auto/nadm/ms/lhkpp5ty__w643h441q95.jpg";
        answerText4.textContent = "Other";
    }

    if (question === 2){
        questionNumber.textContent = "3";
        questionText.textContent = "Who is the best player in the list?";
        answerImg1.src="https://cdn.images.dailystar.co.uk/dynamic/122/photos/344000/900x738/1174344.jpg";
        answerText1.textContent = "Bercovitch";
        answerImg2.src="http://www.ynet.co.il/PicServer2/20022007/1074053/IMG_4710_wa.jpg";
        answerText2.textContent = "Nimni";
        answerImg3.src="https://img.wcdn.co.il/f_auto,w_700,t_18/7/3/3/9/733978-46.jpg";
        answerText3.textContent = "Ohana";
        answerImg4.src="https://img.wcdn.co.il/f_auto,w_700,t_18/9/2/0/7/920757-46.jpg";
        answerText4.textContent = "Machnes";
    }

    if (question === 3){
        questionNumber.textContent = "4";
        questionText.textContent = "What is your favorite food??";
        answerImg1.src="https://img.mako.co.il/2012/07/31/chicken_w_cuscus_afik_c.jpg";
        answerText1.textContent = "Kuskus";
        answerImg2.src="https://www.thegalmont.com/files/hotel/hotel-a/08-generic/galmont-hotel-sushi-bar-01.jpg";
        answerText2.textContent = "Sushi";
        answerImg3.src="https://buffalorunranch.com/wp-content/uploads/2017/08/ribeye-1.jpg";
        answerText3.textContent = "Steak";
        answerImg4.src="https://img-s1.onedio.com/id-5800f2a42385620e0cc834e8/rev-0/raw/s-cda33c42784cceb33854b53e94e24a77b50cf3a4.jpg";
        answerText4.textContent = "Other";
    }

    if (question === 4){
        questionNumber.textContent = "5";
        questionText.textContent = "If your team will win the league you are going to:";
        answerImg1.src="https://trita.org/assets/uploads/news/5b8fe97860513-11308141.jpg";
        answerText1.textContent = "Sleep";
        answerImg2.src="https://static1.squarespace.com/static/586b20acd482e9282495c368/t/5ba896d9104c7b4a52b7ba57/1537775877667/party-5afeb203ba5c5.jpg?format=1500w";
        answerText2.textContent = "A Party";
        answerImg3.src="http://www.land-of-the-bible.com/sites/default/files/Week%209a%20The%20Western%20Wall.jpg";
        answerText3.textContent = "The Kotel";
        answerImg4.src="https://images.haarets.co.il/image/fetch/w_478,h_357,q_auto,c_fill,f_auto/fl_any_format.preserve_transparency.progressive:none/https://www.haaretz.co.il/polopoly_fs/1.594182.1327596111!/image/1972425650.jpg";
        answerText4.textContent = "Become religious";
    }
}

function checkResult (teams,winnerIndex) {
    max = 0;
    index = 0;
    counter = 0;
    while (counter < 4) {
            for (var i=0; i<teams.length; i++) {
                if (teams[i] > max) {
                    max = teams[i];
                    index = teams.indexOf(max);
                }
            }
            winnerIndex.push([index,max]);
            teams[index] = 0;
            counter ++;
            max=0;
            index=0;
    }
}

function showResult (winnerIndex,teamNames,logos) {
    var first = Number(winnerIndex[0][0]);
    var second = Number(winnerIndex[1][0]);
    var third = Number(winnerIndex[2][0]);
    var fourth = Number(winnerIndex[3][0]);
    var resultsSum = function() {
        var sum = 0;
        for (i=0; i<winnerIndex.length; i++){
            sum = sum + winnerIndex[1][i];
        }
        return sum;
    }
    questionNumber.textContent = "Results:";
    questionText.textContent = "Your favorite team according to your answers:";
    
    answerImg1.src = logos[first];
    answerText1.textContent = "1. " + teamNames[first];
    answerText1.classList.remove("quizAnswer");
    answerText1.classList.add("quizAnswerFinal");
    answerImg1.classList.remove("quizImg");
    answerImg1.classList.add("logo");
    
    answerImg2.src = logos[second]
    answerText2.textContent = "2. " + teamNames[second];
    answerText2.classList.remove("quizAnswer");
    answerText2.classList.add("quizAnswerFinal");
    answerImg2.classList.remove("quizImg");
    answerImg2.classList.add("logo");
    
    answerImg3.src = logos[third]
    answerText3.textContent = "3. " + teamNames[third];
    answerText3.classList.remove("quizAnswer");
    answerText3.classList.add("quizAnswerFinal");
    answerImg3.classList.remove("quizImg");
    answerImg3.classList.add("logo");
    
    answerImg4.src = logos[fourth]
    answerText4.textContent = "4. " + teamNames[fourth];
    answerText4.classList.remove("quizAnswer");
    answerText4.classList.add("quizAnswerFinal");
    answerImg4.classList.remove("quizImg");
    answerImg4.classList.add("logo");
}