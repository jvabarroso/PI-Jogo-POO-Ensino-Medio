
    function showQuiz() {
        document.getElementById('view-intro').classList.remove('active');
        document.getElementById('view-quiz').classList.add('active');
    }

    function resetGame() {
        const selected = document.querySelector('input[name="quiz"]:checked');
        if (selected) {
            alert("Parabéns, jovem mago! Você dominou a Sobrecarga.");
            document.getElementById('view-quiz').classList.remove('active');
            document.getElementById('view-intro').classList.add('active');
        } else {
            alert("Selecione uma resposta antes de conjurar a magia!");
        }
    }
