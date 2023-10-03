export const React_JS = {
	title: "React",
	number: "1",
	difficultyLevel: "2",
	id: "React_JS",
	list: [
		{
			question: "Назовите библиотеку для создания пользовательских интерфейсов.",
			answer: "React"
		},
		{
			question: "Назовите основной подход React.",
			answer: "Компонентный"
		},
		{
			question: "Стадия, на которой React отслеживает изменения в узлах дереваРеактЭлементов.",
			answer: "Согласование"
		},
		{
			question: "Фаза переноса обновленных узлов в Дом дерево",
			answer: "Рендер"
		},
		{
			question: "Как создать новый React проект?",
			answer: "npx create-react-app"
		},
		{
			question: "Как запустить новый React проект?",
			answer: "npm start"
		},
		{
			question: "Как называются компоненты, в которых изменив значение мы изменяем состояние?",
			answer: "Управляемые"
		},
		{
			question: "Хуки можно использовать на любом уровне вложенности?",
			answer: "Нет"
		},
		{
			question: "Хук предназначенный для управления состоянием.",
			answer: "UseState()"
		},
		{
			question: "Как называют данные переданные в компонент?",
			answer: "Пропс"
		},
		{
			question: "Свойство пропса, которое хронит в себе вложеные в компонент данные (<myBtn> 'данные' </myBtn>?)",
			answer: "children"
		},
		{
			question: "Подвох с кнопкой и ее типом по умолчанию. Назовите тип кнопки по умолчанию.",
			answer: "Submit"
		},
		{
			question: "Какой хук применяют для неуправляемого компонента?",
			answer: "useRef()"
		},
		{
			question: "Как применить useRef() в компоненте. Во что нужно обернуть компонент? (Указать с тем, что в скобках (props, ...))",
			answer: "React.forwardRef(props, ref)"
		},
		{
			question: "Напишите фильтр для setPost() в котором возвращаются все посты кроме удаленного, используйте id. (без пробелов);",
			answer: "setPost(post.filter(p => p.id != post.id))"
		},
		{
			question: "Нюанс в функции сортировки постов. Что нужно сделать с объектом, который мы будем мутировать?",
			answer: "Копировать"
		},
		{
			question: "Что принимает в качестве параметров useMemo? Напишите в формате: useMemo(c…..., d...)",
			answer: "useMemo(callback, deps),"
		},
		{
			question: "Что делает useMemo с результатами вычислений?",
			answer: "Кэширует"
		},
		{
			question: "Как называет тот процесс, который создает useMemo()?",
			answer: "Мемизация"
		},
		{
			question: "В каком формате будет правильно передать аргументы в компонент? К примеру компонент это пост.",
			answer: "Post ={Post}"
		},
		{
			question: "Как инсталлировать пакет для анимации  в терминале для React? ",
			answer: "npm install react-transition-group --save"
		},
		{
			question: "Во что оборачиваем посты, когда применяем react-transition ?",
			answer: "TransitionGroup"
		},
		{
			question: "Тег для применения css настроек react-transition?",
			answer: "CSSTransition"
		},
		{
			question: "Как называется библиотека для осуществления запросов?",
			answer: "axios"
		},
		{
			question: "Метод axios применяемый для запросов",
			answer: "get()"
		},
		{
			question: "Что такое React?",
			answer: "Библиотека для создания пользовательских интерфейсов."
		},
		{
			question: "Что такое single и multy page application?",
			answer: "Концепция"
		},
		{
			question: "Этот Хук позволяет сохранить некоторый объект, который можно можно изменять и который хранится в течение всей жизни компонента.",
			answer: "useRef()"
		}

	
	]
}