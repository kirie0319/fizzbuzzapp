'use strict';

{
  const btn = document.getElementById('btn');

  btn.addEventListener('click', () => {
      const fizzNum = Number(document.getElementById('fizznum').value);
      const buzzNum = Number(document.getElementById('buzznum').value);
      const output = document.getElementById('output');
      output.innerHTML = '';
      if (!Number.isInteger(fizzNum) || !Number.isInteger(buzzNum) || fizzNum === 0 || buzzNum === 0) {
        output.textContent = '整数値を入力してください';
        return;
      }
    
      for (let i = 1; i < 100; i++) {
        const li = document.createElement('p')
        if (i % fizzNum === 0 && i % buzzNum === 0) {
          li.textContent = 'FizzBuzz' + i;
        } else if (i % fizzNum === 0) {
          li.textContent = 'Fizz' + i;
        } else if (i % buzzNum === 0) {
          li.textContent = 'Buzz' + i;
        } else {
          li.textContent = '';
        }
        
        output.appendChild(li);
      }
      document.body.appendChild(output);
    
  });
  


  





}