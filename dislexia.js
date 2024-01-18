let cssText = `
@font-face {
    font-family: 'opendyslexic';
    src: url('${chrome.runtime.getURL('fonts/OpenDyslexic-Bold.otf')}');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'opendyslexic';
    src: url('${chrome.runtime.getURL('fonts/OpenDyslexic-Bold.otf')}');
    font-weight: normal;
    font-style: italic;
}

@font-face {
    font-family: 'opendyslexic';
    src: url('${chrome.runtime.getURL('fonts/OpenDyslexic-Bold.otf')}');
    font-weight: 700;
    font-style: normal;
}

@font-face {
    font-family: 'opendyslexic';
    src: url('${chrome.runtime.getURL('fonts/OpenDyslexic-Bold.otf')}');
    font-weight: 700;
    font-style: italic;
}
* {
	font-family: 'opendyslexic' !important;
}
`;

let style = document.createElement('style');
style.type = 'text/css';
style.id = 'opendyslexic';
style.appendChild(document.createTextNode(cssText));
document.head.appendChild(style);