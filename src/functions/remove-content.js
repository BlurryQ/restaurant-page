export default function removeContent() {
    const CONTENT = document.getElementById("content")

    while(CONTENT.firstChild) {
        CONTENT.removeChild(CONTENT.firstChild)
    }
    
    return
}
