const express = require('express');
const cors = require('cors');
const path = require('path');
const triggers = require('./database');

const app = express();
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/questions', (req, res) => {
  const questions = triggers
    .filter(trigger => trigger.question)
    .map(trigger => trigger.question);
  res.json(questions);
});

function getBestTriggerResponse(userMessage) {
    function levenshtein(a, b) {
        if (a.length === 0) return b.length;
        if (b.length === 0) return a.length;
        const matrix = [];
        for (let i = 0; i <= b.length; i++) { matrix[i] = [i]; }
        for (let j = 0; j <= a.length; j++) { matrix[0][j] = j; }
        for (let i = 1; i <= b.length; i++) {
            for (let j = 1; j <= a.length; j++) {
                const cost = b.charAt(i - 1) === a.charAt(j - 1) ? 0 : 1;
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + cost,
                    Math.min(matrix[i][j - 1] + 1, matrix[i - 1][j] + 1)
                );
            }
        }
        return matrix[b.length][a.length];
    }
    
    const normalize = (txt) =>
        txt.toLowerCase()
           .replace(/[.,/#!$%^&*;:{}=\-_`~()?]/g, "")
           .replace(/[ąćęłńóśźż]/g, c => "acelnoszz"["ąćęłńóśźż".indexOf(c)]);
        
    const messageWords = normalize(userMessage).split(/\s+/).filter(Boolean);
    
    let bestMatch = { score: 0, response: null };

    triggers.forEach(trigger => {
        const keywords = trigger.keywords.map(normalize);
        
        const matchCount = keywords.filter(kw =>
            messageWords.some(word => {
                return (kw.length >= 4 && word.startsWith(kw)) || 
                       (levenshtein(word, kw) <= 1);
            })
        ).length;
        
        if (matchCount >= trigger.required_count) {
            const precision = matchCount / keywords.length;
            const score = matchCount + precision;
            
            if (score > bestMatch.score) {
                bestMatch = { score: score, response: trigger.response };
            }
        }
    });
    
    return bestMatch.response;
}

app.get('/', (req, res) => {
  res.redirect('/chat.html');
});

app.get('/favicon.ico', (req, res) => {
  res.status(204).send();
});

app.post('/chat', (req, res) => {
    try {
        const { message } = req.body;
        if (!message) {
            return res.status(400).json({ error: 'Brak wiadomości' });
        }

        const triggerResponse = getBestTriggerResponse(message);
        
        if (triggerResponse) {
            return res.json({ response: triggerResponse });
        }

        return res.json({
            response: 'Przepraszam, nie do końca rozumiem. Czy możesz sformułować pytanie inaczej lub wybrać jedną z poniższych opcji?',
            showQuestions: true
        });

    } catch (error) {
        console.error('Błąd w endpoincie /chat:', error);
        res.status(500).json({
            error: 'Wystąpił błąd podczas przetwarzania Twojego zapytania.'
        });
    }
});

app.get('/chat.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'chat.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Serwer działa na porcie ${PORT}`));

module.exports = app;


