let questionsList = [];
const fetchQuestion = async () => {
    try {
        let res = await axios({
            url: "https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/questions",
            method: "GET",
        });

        return res.data;

    } catch (err) {
        console.log(err);
    };
}

const renderQuestion = () => {
    let htmlContent = '';
  
    for (let item in questionsList) {
        htmlContent += questionsList[item].render(+item + 1);
    }
    document.getElementById('questionsContainer').innerHTML = htmlContent;
};

const mapData = (data = []) => {
    questionsList = data.map((item) => {
        const { questionType, id, content, answers } = item;

        if (questionType === 1) {
            return new multipleChoice(questionType, id, content, answers);
        } else {
            return new fillnBlank(questionType, id, content, answers);
        }
    });
};


const submit = () => {
    let count = 0;
    for(let item of questionsList){
        if(item.checkExact()){
            count++;
        }
    }

    alert('Diem cua ban la: ' + count + 'Tren tong so: ' + questionsList.length);
}



fetchQuestion().then((data) => {
    //code khi question list đã có
    mapData(data);
    renderQuestion();
});
