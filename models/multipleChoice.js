class multipleChoice extends Question {
    constructor(type, id, content, answers) {
        super(type, id, content, answers);
      }
    
      render(index) {
        let answersHTML = "";
        for (let item of this.answers) {
          answersHTML += `<div>
            <input value="${item.id}" class="answer-${this.id}" type="radio" name="answer-${this.id}"  />
            <label class="lead">${item.content}</label>
          </div>`;
        }
    
        return `
          <div>
            <p class="lead font-italic" style="font-size: 30px;">
              Câu ${index}: ${this.content}
            </p>
            ${answersHTML}
          </div>
          `;
      }
    
      checkExact() {
        const inputList = document.getElementsByClassName(`answer-${this.id}`);
        let inputResul;
        for(let item of inputList){
          if(item.checked){
            inputResul = item.value;
          }
        }

        if(!inputResul){
          return false;
        }

        for(let answer of this.answers){
          if(answer.id === inputResul){
            return answer.exact;
          }
        }

        return false;
      }
}