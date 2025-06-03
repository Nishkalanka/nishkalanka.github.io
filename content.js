// Ждем, пока весь HTML-документ будет загружен
document.addEventListener('DOMContentLoaded', () => {
    // Используем fetch API для загрузки JSON-файла
    fetch('content.json')
        .then(response => {
            // Проверяем, успешно ли загружен файл (статус 200 OK)
            if (!response.ok) {
                // Если нет, выбрасываем ошибку
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            // Парсим ответ как JSON
            return response.json();
        })
        .then(data => {
            
            document.getElementById('hero__title').textContent = data.heroSection.title;
            document.getElementById('hero__subtitle').textContent = data.heroSection.subtitle;
            document.getElementById('hero__btn').textContent = data.heroSection.ctaText;
            document.getElementById('hero__img').style.backgroundImage = `url(${data.heroSection.backgroundImage})`;

            document.getElementById('about__title').textContent = data.aboutSection.title;

            //const featureSection = document.getElementById('features__title').textContent = data.featureSection.title;

        })
        .catch(error => {
            // Обработка ошибок, если файл не загрузился или не распарсился
            console.error('Ошибка загрузки или обработки контента:', error);
            // Можно показать пользователю сообщение об ошибке на странице
            document.body.innerHTML = '<h2 style="text-align: center; color: red;">Не удалось загрузить контент. Пожалуйста, попробуйте позже.</h2>';
        });
});
