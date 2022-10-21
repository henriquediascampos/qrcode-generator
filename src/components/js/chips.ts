export default function chips() {
    Array.from(document.querySelectorAll('.chips')).forEach((formChipsElement: HTMLDivElement) => {
        const containerChips = createChipContainer();
        const controlHeight = createChipContainerControlHeight();
        formChipsElement.appendChild(containerChips);
        formChipsElement.appendChild(controlHeight);

        const inputFormField = formChipsElement.querySelector(
            '.input-form-field'
        ) as HTMLInputElement;

        inputFormField.classList.add('invisible-text');

        inputFormField.addEventListener('change', () => {
            const textContentchips = inputFormField.value.split(',').filter((text) => text.trim());
            if (textContentchips?.length) {
                textContentchips.forEach((text) => {
                    const $CHIP = document.createElement('div');
                    $CHIP.textContent = text;
                    $CHIP.classList.add('container', 'chip');
                    containerChips.appendChild($CHIP);
                });
            } else {
                containerChips.innerHTML = '';
            }

            controlHeight.style.height = `${containerChips.offsetHeight}px`;
        });
    });
}

function createChipContainer(): HTMLDivElement {
    const containerChips = document.createElement('div');
    containerChips.classList.add('container', 'row', 'container-chips');
    return containerChips;
}

function createChipContainerControlHeight(): HTMLDivElement {
    const containerChips = document.createElement('div');
    containerChips.classList.add('chip-control-height');
    return containerChips;
}
