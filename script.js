let questionBlocks = [...document.querySelectorAll('.question-cont')];
const radioBtns = document.querySelector('.radio-black');
const footer = document.querySelector('.footer');
const btnStart = document.getElementById('start');
const btn = document.querySelectorAll('.button');
const redline = document.querySelector('.red-line');
const input = document.querySelector('.input');
const main = document.querySelector('.main');

let collectionOfWrongAnswers = []; // коллекция с неверно отвеченными карточками
let missedQuestions = []; // пропущенные вопросы
let sumRedlinesSegment = 0; // длинна одного сигмента линии прогресса
let temp = []; // вспомогательна переменная 
let questionLimit = 5; // лимит вопросов 
let numberOfQuestions = 0; // номер текущего вопроса 
let numberOfCorrectlyAnsweredQuestions = 0; // количество правильно отвеченных вопросов
let numberOfErrorsMade = 0; // количество неверно отвеченных вопросов 
let resultBlock = [];





const  UpdateArray = () => {
	
	let newArr = questionBlocks.filter((el) => el.dataset.state === "not passed");  // составле коллекцию блоков с вопросами и отвтами
	// if (newArr.length === 0){newArr = missedQuestions}; //если основные вопросы закончились, возвращаем впоросы из коллекции отложенных 
		const newArrLength = Math.floor(Math.random(1) * newArr.length);  // рандомное число в пределах коллекции вопросов
		const newQuestionBlock = newArr[newArrLength]; // забираем рандомный блок
		newQuestionBlock.dataset.state = 'passed';
		newQuestionBlock.classList.toggle('hidden');
		const answer = newQuestionBlock.lastElementChild.innerText; // забираем из блока ответ
		temp = [newQuestionBlock, answer]; // временное хронилище
		
	}

//----------------------------------------------

const incLengthRedLine = () => {
	const segmentLength = Math.floor(570/questionLimit);
	sumRedlinesSegment += segmentLength;
	redline.style.width = `${sumRedlinesSegment}px`;
}

//----------------------------------------------

function answerQuestionAndUpload([newQuestionBlock, correctAnswer]) {

	// const input = document.querySelector('.input');
	const userКesponse = input.value;

	if (userКesponse === "") {
		console.log('пустой ответ')
		input.style.backgroundColor = '#fca9a9';
		setTimeout(() => { input.style = '' }, 400);
		return;
	}

	if (userКesponse.toLowerCase().trim() === correctAnswer.toLowerCase().trim()) {
		numberOfCorrectlyAnsweredQuestions += 1;
		numberOfQuestions += 1;
		console.log('правельный ответ');
		getResultBlock(newQuestionBlock, correctAnswer, userКesponse, true);

	} if (userКesponse.toLowerCase().trim() !== correctAnswer.toLowerCase().trim()) {
		numberOfErrorsMade += 1;
		numberOfQuestions += 1;
		console.log(' не правельный ответ');
		collectionOfWrongAnswers.push(newQuestionBlock);
		getResultBlock(newQuestionBlock, correctAnswer, userКesponse, false);
	}
	
		newQuestionBlock.classList.toggle("hidden");
		document.querySelector('.input').value = "";

	if ((numberOfQuestions < questionLimit) && (missedQuestions !== 0)){

		incLengthRedLine();
		UpdateArray();
		
	}else {
		btn.forEach((el)=>{
		el.setAttribute("disabled","disabled")});
		input.setAttribute("disabled","disabled")
		
		const main = document.querySelector('.main');
		const divResults = document.createElement('div');
		const button = document.createElement('button');

		divResults.classList = 'results';
		divResults.innerHTML = `<p>Правильных ответов: <span style="color:green">${numberOfCorrectlyAnsweredQuestions}</span></p>
		<p>Неверных ответов: <span style="color:red">${numberOfErrorsMade}</span></p>`;
		main.prepend(divResults);
		
		button.classList = 'results-btn button';
		button.innerHTML = "Oтветы";
		divResults.append(button);

	} 
};

const skipQuestion = ([newQuestionBlock,]) =>{
	
	newQuestionBlock.dataset.state = 'missed';
	missedQuestions.push(newQuestionBlock);
	newQuestionBlock.classList.toggle("hidden");
	UpdateArray();
	document.querySelector('.input').value = "";
	
}

//----------------------------------------

//----------------------------------------

radioBtns.addEventListener('click', (event) => {
	let getNum = (num = 'all') => {
		return (num === 'all') ? questionBlocks.length : 30;
	};
	questionLimit = getNum(event.target.value);
})
//----------------------------------------

btnStart.addEventListener('click', (event) => {
	UpdateArray()
	incLengthRedLine();

	btn.forEach((el)=>{
		el.removeAttribute("disabled");
	})

	btnStart.setAttribute("disabled","disabled");
	input.removeAttribute("disabled");

	const radio = document.querySelectorAll('.radio');
	radio.forEach((el)=>{
		el.setAttribute("disabled","disabled");
	})

}, {once:true});

//----------------------------------------

document.addEventListener('click', (event) => {

	if (event.target.closest('.button')) {
		if (event.target.closest('.btn-ok')) {
		answerQuestionAndUpload(temp);
		
		}
		else if (event.target.closest('.btn-next')) {
		skipQuestion(temp)
		}
		else if (event.target.closest('.results-btn')) {

			event.target.setAttribute("disabled","disabled");
			main.classList.add('main-result');
			for( const el of resultBlock){
				main.append(el);
			}

			main.classList.add('main-result');
		}	
}
});

document.addEventListener('keydown',(e)=> {
	if (e.code === "Enter"){
		e.preventDefault();
		answerQuestionAndUpload(temp);
		
	}
	console.log(e.code)
})
//----------------------------------------


function getResultBlock(newQuestionBlock, correctAnswer, userКesponse, status) {
	console.log('проверка')
	const question = newQuestionBlock.firstElementChild.innerText;
	const div = document.createElement('div');
	div.innerHTML = `<p> Вопрос: ${question}</p><br><p> Правильный ответ: ${correctAnswer}</p><br><p> Ваш ответ: ${userКesponse}</p>`;
	(status === true)? div.style.backgroundColor = '#b4ffd6': div.style.backgroundColor = "#ffb4b4";
	div.classList = 'result-cont'
	resultBlock.push(div);
}

