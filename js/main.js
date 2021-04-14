'use strict';

{
  const btn = document.getElementById('btn');

  btn.addEventListener('click', () => {
      const fizzNum = Number(document.getElementById('fizznum').value);
      const buzzNum = Number(document.getElementById('buzznum').value);
      if (!Number.isInteger(fizzNum) || !Number.isInteger(buzzNum) || fizzNum === 0 || buzzNum === 0) {
        const e_Ul = document.createElement('ul');
        const e_Li = document.createElement('li');
        e_Li.textContent = '整数値を入力してください';
        e_Ul.appendChild(e_Li);
        document.body.appendChild(e_Ul);
        return;
      }
      const ul = document.createElement('ul');
    
      for (let i = 1; i < 100; i++) {
        const li = document.createElement('li')
        if (i % fizzNum === 0 && i % buzzNum === 0) {
          li.textContent = 'FizzBuzz' + i;
        } else if (i % fizzNum === 0) {
          li.textContent = 'Fizz' + i;
        } else if (i % buzzNum === 0) {
          li.textContent = 'Buzz' + i;
        } else {
          li.textContent = '';
        }
        
        ul.appendChild(li);
      }
      document.body.appendChild(ul);

      if (ul.hasChildNodes()) {
        ul.removeChild();
      }
    
  });
  


  





}