export const Cookie = {
	title: "Cookie",
	number: "10",
	difficultyLevel: "5",
	id: "cookie ",
	list: [
		{
			question: "Что такое localstorage и Cookie?",
			answer: "Это способ хранения данных на клиентской стороне."
		},
		{
			question: "Как доступны Cookie через js?",
			answer: "document.cookie"
		},
		{
			question: "Cookie представляют собой строку из пар ключ- значение, разделенных  (; )?",
			answer: "Да"
		},
		{
			question: "Как забрать ключи из Cookie?",
			answer: "document.cookie.splite(‘; ’)"
		},
		{
			question: "document.cookie = ‘collor’ перезаписывает cookie или дополняет? ",
			answer: "дополняет"
		},
		{
			question: "Что такое localstorage?",
			answer: "Объекты веб-хранилища"
		},
		{
			question: "Что такое sessionStorage ?",
			answer: "Объекты веб-хранилища"
		},
		{
			question: "Данные сохраняются после перезапуска браузера в..",
			answer: "localStorage"
		},
		{
			question: "Данные сохраняются после после обновления страницы в..",
			answer: "sessionStorage "
		},
		{
			question: "Какой вид имеют данные, которые сохраняются в localStorage и sessionStorage ",
			answer: "ключ значение"
		},
		{
			question: "Объекты веб-хранилища не отправляются на сервер при каждом запросе?",
			answer: "нет"
		},
		{
			question: "Сервер не может манипулировать объектами хранилища через HTTP-заголовки?",
			answer: "нет"
		},
		{
			question: "Разные протоколы или поддомены могут получить доступ к данным друг друга?",
			answer: "нет"
		},
		{
			question: "Как сохранить пару ключ/значение в localStorage и sessionStorage?",
			answer: "setItem(key, value)"
		},
		{
			question: "Как получить данные по ключу key в localStorage и sessionStorage?",
			answer: "getItem(key)"
		},
		{
			question: "Как удалить данные с ключом key в localStorage и sessionStorage?",
			answer: "removeItem(key)"
		},
		{
			question: "Как удалить всё в localStorage и sessionStorage?",
			answer: "clear()"
		},
		{
			question: "Как получить ключ на заданной позиции в localStorage и sessionStorage?",
			answer: "key(index)"
		},
		{
			question: "Как получить количество элементов в хранилище в localStorage и sessionStorage? ",
			answer: "length "
		},
		{
			question: "Почему не рекомендуется писать так localStorage.test = 2, (это связано с тем, что в качестве ключа можно записать какое слово)? ",
			answer: "Ключевое"
		},
		{
			question: "Объекты веб-хранилища можно перебрать в цикле?",
			answer: "Нет"
		},
		{
			question: "Ключ и значение должны быть строками в localStorage и sessionStorage?",
			answer: "Да"
		},
		{
			question: "Мы можем использовать JSON для хранения объектов в localStorage и sessionStorage?",
			answer: "Да"
		},
		{
			question: "В каких рамках существует sessionStorage ?",
			answer: "текущая вкладка браузера"
		},
		{
			question: "Какое событие генерируется, после обновления данных в localStorage или sessionStorage?",
			answer: "storage"
		},
	]
}