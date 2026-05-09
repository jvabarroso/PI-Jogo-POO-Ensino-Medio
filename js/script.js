    (function() {
        const mageDiv = document.getElementById('mockMageCard');
        const quizDiv = document.getElementById('mockQuizCard');
        const praticar = document.getElementById('mockPraticar');
        const explicar = document.getElementById('mockExplicar');
        const verificar = document.getElementById('mockVerificar');
        const feedback = document.getElementById('mockFeedback');
        const voltar = document.getElementById('mockVoltar');

        function showQuiz() {
            mageDiv.classList.add('hidden-mock');
            quizDiv.classList.remove('hidden-mock');
            // Limpa seleção anterior
            document.querySelectorAll('input[name="quizOverload"]').forEach(r => r.checked = false);
            if (feedback) feedback.innerHTML = "📖 Selecione a alternativa correta e confira!";
        }
        function showMage() {
            quizDiv.classList.add('hidden-mock');
            mageDiv.classList.remove('hidden-mock');
        }

        praticar?.addEventListener('click', (e) => { e.preventDefault(); showQuiz(); });
        voltar?.addEventListener('click', (e) => { e.preventDefault(); showMage(); });

        explicar?.addEventListener('click', () => {
            const toast = document.createElement('div');
            toast.className = 'toast-mock';
            toast.innerHTML = '🧙 Explicação: Sobrecarga = mesmo nome do método, ASSINATURAS diferentes (quantidade/tipo de parâmetros). Permite múltiplas versões do mesmo feitiço!';
            document.body.appendChild(toast);
            setTimeout(() => toast.remove(), 4000);
        });

        verificar?.addEventListener('click', () => {
            const selected = document.querySelector('input[name="quizOverload"]:checked');
            if (!selected) {
                feedback.innerHTML = "⚠️ Selecione uma alternativa antes de verificar!";
                feedback.style.borderLeftColor = "#ff8a9f";
                return;
            }
            const isCorrect = (selected.value === "1");
            if (isCorrect) {
                feedback.innerHTML = "✅✨ CORRETO! ✨✅<br> Sobrecarga (overloading) = mesmo nome, parâmetros diferentes (tipo ou quantidade). Excelente, mago!";
                feedback.style.background = "#0a3a1e80";
                feedback.style.borderLeftColor = "#a3e635";
            } else {
                let msg = "";
                if (selected.value === "0") msg = "❌ Parâmetros idênticos geram conflito. Sobrecarga exige assinaturas diferentes.";
                else if (selected.value === "2") msg = "❌ Nomes diferentes não caracterizam sobrecarga (seriam métodos distintos).";
                else if (selected.value === "3") msg = "❌ 'override' é usado em sobrescrita (herança), não sobrecarga.";
                else msg = "❌ Incorreto. A resposta certa: mesmo nome com parâmetros diferentes.";
                feedback.innerHTML = `${msg}<br> 🔁 Tente novamente!`;
                feedback.style.background = "#4a001a80";
                feedback.style.borderLeftColor = "#ff7f7f";
            }
        });

        // Permite clicar em qualquer lugar da opção para selecionar o radio
        document.querySelectorAll('.quiz-option').forEach(option => {
            option.addEventListener('click', (e) => {
                const radio = option.querySelector('.quiz-radio');
                if (radio && !radio.checked) {
                    radio.checked = true;
                }
            });
        });
    })();