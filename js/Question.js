class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Name");
    this.input2 = createInput("Option Number");
    this.button = createButton('Submit');
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
  }

  display(){
    this.title.html("Amogh's Google Quiz");
    this.title.position(540, 10);
    
   
    this.question.html("Question:- Who is the founder of 'GOOGLE' " )
    this.question.position(520, 100);
    this.option1.html("1: Mark Zuckerberg - Eduardo Saverin " );
    this.option1.position(520, 140);
    this.option2.html("2: Larry Page - Sergey Brin" );
    this.option2.position(520, 180);
    this.option3.html("3: Steve Jobs - Steve Wozniak - Ronald Wayne" );
    this.option3.position(520, 220);
    this.option4.html("4: Kevin Systrom" );
    this.option4.position(520, 260);

    this.input1.position(500, 350);
    this.input2.position(700, 350);
    this.button.position(615, 400);
    this.button.size(140)

    this.button.mousePressed(()=>{
      
      
      this.title.hide();
      this.input1.hide();
      this.input2.hide();
      
      this.button.hide();
      this.question.hide();
      this.option1.hide();
      this.option2.hide();
      this.option3.hide();
      this.option4.hide();
     submit.visible = true;
     googleApps.visible = false;

      


      contestant.name = this.input1.value();
      contestant.answer = this.input2.value();
      contestantCount+=1;
      contestant.index = contestantCount;
      contestant.update();
      contestant.updateCount(contestantCount);
    });
  }
}
