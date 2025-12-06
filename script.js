// Ждём загрузки страницы
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Демо кнопка
    const demoBtn = document.getElementById('demoBtn');
    const output = document.getElementById('output');
    
    demoBtn.addEventListener('click', function() {
        const messages = [
            "🎉 Отлично! Ты сделал первый клик!",
            "🚀 Код работает идеально!",
            "💡 Продолжай в том же духе!",
            "🌟 Ты молодец! Так держать!",
            "⚡ Интерактивность — это круто!"
        ];
        
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        output.innerHTML = `<p style="color: #667eea; font-size: 1.2rem;">${randomMessage}</p>`;
        
        // Анимация
        output.style.animation = 'none';
        setTimeout(() => {
            output.style.animation = 'pulse 0.5s';
        }, 10);
    });
    
    // 2. Счётчик
    const countElement = document.getElementById('count');
    const incrementBtn = document.getElementById('increment');
    const decrementBtn = document.getElementById('decrement');
    
    let count = 0;
    
    incrementBtn.addEventListener('click', function() {
        count++;
        updateCounter();
        animateButton(this);
    });
    
    decrementBtn.addEventListener('click', function() {
        if (count > 0) {
            count--;
            updateCounter();
            animateButton(this);
        }
    });
    
    function updateCounter() {
        countElement.textContent = count;
        
        // Меняем цвет в зависимости от значения
        if (count >= 10) {
            countElement.style.color = '#e74c3c';
        } else if (count >= 5) {
            countElement.style.color = '#f39c12';
        } else {
            countElement.style.color = '#333';
        }
    }
    
    // 3. Отображение текущего времени
    function updateTime() {
        const now = new Date();
        const options = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        };
        
        const timeString = now.toLocaleDateString('ru-RU', options);
        document.getElementById('currentTime').textContent = timeString;
    }
    
    // Обновляем время каждую секунду
    updateTime();
    setInterval(updateTime, 1000);
    
    // 4. Анимация кнопок
    function animateButton(button) {
        button.style.transform = 'scale(0.9)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 150);
    }
    
    // 5. Добавляем CSS для анимации
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }
    `;
    document.head.appendChild(style);
    
    // 6. Приветствие в консоли
    console.log('%c🚀 Хакатон проект загружен!', 'color: #764ba2; font-size: 16px; font-weight: bold;');
    console.log('%cРедактируй файлы в левой панели и сохраняй (Ctrl+S)', 'color: #667eea;');
});