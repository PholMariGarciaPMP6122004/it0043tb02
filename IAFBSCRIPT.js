document.addEventListener('DOMContentLoaded', function() {
    const flexContainer = document.getElementById('flexContainer');
    const gapInput = document.getElementById('gapInput');
    const directionButtons = document.querySelectorAll('.flex-direction');
    const justifyButtons = document.querySelectorAll('.justify-content');
    const alignButtons = document.querySelectorAll('.align-items');
    const flexGrowInputs = document.querySelectorAll('.flex-grow-input');
    const resetButton = document.getElementById('resetButton');
    const boxes = document.querySelectorAll('.flex-item');

    gapInput.addEventListener('input', function() {
        flexContainer.style.gap = `${gapInput.value}px`;
    });

    directionButtons.forEach(button => {
        button.addEventListener('click', function() {
            flexContainer.style.flexDirection = button.getAttribute('data-direction');
            setActiveButton(directionButtons, button);
        });
    });

    justifyButtons.forEach(button => {
        button.addEventListener('click', function() {
            flexContainer.style.justifyContent = button.getAttribute('data-justify');
            setActiveButton(justifyButtons, button);
        });
    });

    alignButtons.forEach(button => {
        button.addEventListener('click', function() {
            flexContainer.style.alignItems = button.getAttribute('data-align');
            setActiveButton(alignButtons, button);
        });
    });

    flexGrowInputs.forEach(input => {
        input.addEventListener('input', function() {
            const boxIndex = input.getAttribute('id').replace('box', '').replace('Grow', '');
            const box = document.getElementById(`box${boxIndex}`);
            box.style.flexGrow = input.value;
        });
    });

    resetButton.addEventListener('click', function() {
        flexContainer.style.flexDirection = 'row';
        flexContainer.style.justifyContent = 'flex-start';
        flexContainer.style.alignItems = 'flex-start';
        flexContainer.style.gap = '0px';
        boxes.forEach(box => box.style.flexGrow = '0');
        flexGrowInputs.forEach(input => input.value = '0');
        gapInput.value = 0;
        resetActiveButtons();
    });

    function setActiveButton(buttonGroup, activeButton) {
        buttonGroup.forEach(button => button.classList.remove('active'));
        activeButton.classList.add('active');
    }

    function resetActiveButtons() {
        [...directionButtons, ...justifyButtons, ...alignButtons].forEach(button => button.classList.remove('active'));
    }
});

