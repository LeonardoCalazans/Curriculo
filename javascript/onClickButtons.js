const onClickLink = (link) => {
    return window.open(`https://${link}`);
}

const onClickSendEmail = () => {
    document.location = "mailto:leonardo-calazans@outlook.com?subject=Hello!&body=Hello!";
}

const onClickDownload = () => {
    window.open('Curriculo-LeonardoCalazans.pdf');
}