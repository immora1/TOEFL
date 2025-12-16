document.addEventListener('DOMContentLoaded', () => {
    const checkBtn = document.getElementById('check-btn');

    checkBtn.addEventListener('click', () => {
        // 获取所有题目卡片
        const questions = document.querySelectorAll('.question-card');

        questions.forEach(card => {
            const correctAnswer = card.dataset.answer; // 获取正确答案 (比如 "C")
            const feedbackDiv = card.querySelector('.feedback');
            
            // 获取用户选中的选项
            const selectedOption = card.querySelector('input[type="radio"]:checked');

            // 重置样式
            feedbackDiv.className = 'feedback';
            feedbackDiv.innerHTML = '';

            if (!selectedOption) {
                feedbackDiv.classList.add('wrong');
                feedbackDiv.innerHTML = '⚠️ 请先选择一个选项。';
            } else {
                const userAnswer = selectedOption.value;

                if (userAnswer === correctAnswer) {
                    feedbackDiv.classList.add('correct');
                    feedbackDiv.innerHTML = `<strong>✅ Correct!</strong> 答案正确。`;
                } else {
                    feedbackDiv.classList.add('wrong');
                    feedbackDiv.innerHTML = `<strong>❌ Incorrect.</strong> 正确答案是 <strong>${correctAnswer}</strong>。`;
                }
            }
        });
    });
});