const buttonOpenModal = document.getElementById('openModal');

buttonOpenModal.addEventListener('click', function() {
    let modalWrapper = document.getElementById('modalWrapper');
    modalWrapper
        .classList
        .remove('invisible')
})

document.addEventListener('keydown', function(event) {
    const isEscKey = event.key === 'Escape'
    if (isEscKey) {
        let modalWrapper = document.getElementById('modalWrapper')
        modalWrapper
            .classList
            .add('invisible')
    }
})