function checkfieldEmpty(value: string, inputElementForm: HTMLInputElement) {
    if (value) {
        inputElementForm.parentElement.classList.add('not-empty');
    } else {
        inputElementForm.parentElement.classList.remove('not-empty');
    }
}

export default function formField() {
    Array.from(document.querySelectorAll('.form-field')).forEach(
        (elementForm: HTMLInputElement) => {
            const $inputFormField = elementForm.querySelector(
                '.input-form-field'
            ) as HTMLInputElement;

            elementForm.addEventListener('click', () => {
                $inputFormField.focus();
            });

            Array.from(elementForm.querySelectorAll('button')).forEach(
                (elementForm: HTMLInputElement) => {
                    elementForm.addEventListener('mousedown', () => {
                        setTimeout(() => {
                            $inputFormField.focus();
                        }, 0);
                    });
                }
            );
        }
    );

    Array.from(document.getElementsByClassName('input-form-field')).forEach(
        (inputElementForm: HTMLInputElement) => {
            checkfieldEmpty(inputElementForm.value, inputElementForm);
            inputElementForm.addEventListener('input', (event) => {
                const target = event.currentTarget as HTMLInputElement;
                checkfieldEmpty(target.value, inputElementForm);
            });
        }
    );
}
