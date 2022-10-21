function removeRippleElementExists() {
    const rippleExists = document.querySelectorAll('.ripple-element.ripple-element-off');
    if (rippleExists.length) {
        rippleExists.item(0).remove();
    }
}

function createRippleElement(event: any, $target: Element) {
    const $ripple = document.createElement('div');
    $ripple.classList.add(
        'ripple-element',
        `n-${document.querySelectorAll('.ripple-element')?.length || 0}`
    );
    const startingPositionRelativeToClick = $target.classList.contains('starting-position-click');
    if (startingPositionRelativeToClick) {
        $ripple.style.top = `${event.layerY}px`;
        $ripple.style.left = `${event.layerX}px`;
    }
    return $ripple;
}

function addRippleEffect(elementRipple: Element) {
    elementRipple.addEventListener('mousedown', (event: MouseEvent) => {
        const $target = event.currentTarget as Element;
        const $ripple = createRippleElement(event, $target);

        $target.appendChild($ripple);
        setTimeout(() => {
            $ripple.classList.add('ripple-element-on');
        }, 0);
    });

    elementRipple.addEventListener('mouseleave', () => {
        const rippleElement = document.querySelector('.ripple-element:not(.ripple-element-off)');
        if (rippleElement) {
            rippleElement.classList.add('ripple-element-off');
            setTimeout(() => {
                removeRippleElementExists();
            }, 500);
        }
    });

    elementRipple.addEventListener('mouseup', () => {
        const rippleElement = document.querySelector('.ripple-element:not(.ripple-element-off)');
        if (rippleElement) {
            rippleElement.classList.add('ripple-element-off');
            setTimeout(() => {
                removeRippleElementExists();
            }, 500);
        }
    });
}

function ripple() {
    Array.from(document.querySelectorAll('.ripple')).forEach((elementRipple) => {
        addRippleEffect(elementRipple);
    });
}

export { ripple, addRippleEffect };
