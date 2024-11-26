const contactDialogOpenBtn = document.querySelectorAll('.contactDialogOpenBtn');
const contactDialog = document.querySelector('.contactDialog');
const closeDialogBtn = document.querySelector('#closeDialogBtn');

contactDialogOpenBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        contactDialog.showModal();
        document.body.classList.add('modal-open');
    });
});

closeDialogBtn.addEventListener('click', () => {
    contactDialog.close();
    document.body.classList.remove('modal-open');
});