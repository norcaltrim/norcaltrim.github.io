// lovingly lifted from: http://www.html5rocks.com/en/tutorials/forms/constraintvalidation/#toc-safari

function safariRequiredShim(callback) {
    let forms = document.getElementsByTagName('form');
    for (let i = 0; i < forms.length; i++) {
        forms[i].addEventListener('submit', function(event) {
            //Prevent submission if checkValidity on the form returns false.
            if (!event.target.checkValidity()) {
                event.preventDefault();
                callback();
            }
        }, false);
    }
}

module.exports = safariRequiredShim;
