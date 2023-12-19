document.addEventListener('DOMContentLoaded', function() {
    // Initial box generation
    generateBoxes();
  });
  
  function generateBoxes(num) {
    const boxContainer = document.getElementById('boxContainer');
    boxContainer.innerHTML = ''; // Clear existing boxes
  
    for (let i = 0; i < num; i++) {
      const box = document.createElement('div');
      box.className = 'box';
      box.style.bottom = i * (80 / num) + 'vh';
      box.style.left = i * (80 / num) + 'vw';
      box.style.width = 80/ num + 'vw';
      box.style.height = 80 / num + 'vh';
  
      boxContainer.appendChild(box);
    }
  }
  
  function handleGenerateClick() {
    const boxNumber = parseInt(document.getElementById('boxNumber').value);
    generateBoxes(boxNumber);
  }
  