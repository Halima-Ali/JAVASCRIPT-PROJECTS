const textarea= document.getElementById("textarea");
        const remainingChars= document.getElementById("remaining-chars");
        const max_chars= 250;

        textarea.addEventListener('input',()=>{
            
            const remaining=max_chars-textarea.value.length;
            const color= (remaining<=max_chars *0.1) ? 'red': null;
            remainingChars.textContent= `${remaining} charcters remaining `;
            remainingChars.style.color=color;

        });