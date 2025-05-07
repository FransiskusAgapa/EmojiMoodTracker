function setMood(emoji, mood, color) {
      document.getElementById('moodDisplay').textContent = emoji + ' ' + mood;
      document.body.style.backgroundColor = color;

      // Save to local storage
      const entry = { emoji, mood, time: new Date().toLocaleTimeString() };
      const history = JSON.parse(localStorage.getItem('moodHistory')) || [];
      history.unshift(entry); // add to beginning
      localStorage.setItem('moodHistory', JSON.stringify(history.slice(0, 5))); // keep last 5

      showHistory();
    }

    function showHistory() {
      const history = JSON.parse(localStorage.getItem('moodHistory')) || [];
      const list = document.getElementById('moodHistory');
      list.innerHTML = '';
      history.forEach(entry => {
        const li = document.createElement('li');
        li.textContent = `${entry.time} — ${entry.emoji} ${entry.mood}`;
        list.appendChild(li);
      });
    }

    // Load previous history on start
    showHistory();