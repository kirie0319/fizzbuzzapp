'use strict';

{
  const btn = document.getElementById('btn');

  btn.addEventListener('click', () => {
      const fizzNum = Number(document.getElementById('fizznum').value);
      const buzzNum = Number(document.getElementById('buzznum').value);
      if(!Number.isInteger(fizzNum) || !Number.isInteger(buzzNum) || fizzNum === 0 || buzzNum === 0) {
        let E_ul = document.createElement('ul');
        let E_li = document.createElement('li');
        E_li.textContent = '整数値を入力してください';
        E_ul.appendChild(E_li);
        document.body.appendChild(E_ul);
        return;
      }

      let ul = document.createElement('ul');
    
      for(let i = 0; i < 100; i++) {
        let li = document.createElement('li')
        if(i % fizzNum === 0 && i % buzzNum === 0) {
          li.textContent = 'FizzBuzz' + i;
        } else if(i % fizzNum === 0) {
          li.textContent = 'Fizz' + i;
        } else if(i % buzzNum === 0) {
          li.textContent = 'Buzz' + i;
        } else {
          li.textContent = '';
        }
        
        ul.appendChild(li);
      }
      document.body.appendChild(ul)
    (li);
    
  });
  


  





}