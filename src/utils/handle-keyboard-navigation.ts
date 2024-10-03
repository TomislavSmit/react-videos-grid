const handleKeyboardNavigation = (event: KeyboardEvent) => {
    const activeElement = document.activeElement as HTMLElement

    if (
        !activeElement ||
        !activeElement.classList.contains('movie-grid-item')
    ) {
        return
    }

    const items = Array.from(
        document.querySelectorAll('.movie-grid-item')
    ) as HTMLElement[]
    const currentIndex = items.indexOf(activeElement)

    const navigate = (direction: number) => {
        const nextIndex = currentIndex + direction

        if (nextIndex >= 0 && nextIndex < items.length) {
            items[nextIndex].focus()
        }
    }

    switch (event.key) {
        case 'ArrowRight':
            navigate(1)
            break
        case 'ArrowLeft':
            navigate(-1)
            break
        case 'ArrowDown':
            navigate(6)
            break
        case 'ArrowUp':
            navigate(-6)
            break
        case 'Enter':
        case 'NumpadEnter':
            return activeElement.id
    }
}

export { handleKeyboardNavigation }
