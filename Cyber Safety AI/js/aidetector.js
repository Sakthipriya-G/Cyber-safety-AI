const phishingKeywords = ["free","offer","click","prize","winner","verify","urgent","bank"];
const scamKeywords = ["otp","password","account","login","bank","click","win","prize","urgent"];

function scoreText(text, keywords) {
    text = text.toLowerCase();
    let score = 0;
    keywords.forEach(word => { if(text.includes(word)) score++; });
    return score;
}

function advancedLinkDetector(link) {
    const score = scoreText(link, phishingKeywords);
    if(score >= 2) return "Dangerous Link ⚠️";
    else if(score === 1) return "Suspicious Link ⚠️";
    else return "Safe Link ✅";
}

function advancedMessageDetector(msg) {
    const score = scoreText(msg, scamKeywords);
    if(score >= 3) return "Potential Scam ⚠️";
    else if(score === 1 || score === 2) return "Suspicious Message ⚠️";
    else return "Message Seems Safe ✅";
}

function checkLink() { document.getElementById("linkResult").innerText = advancedLinkDetector(document.getElementById("linkInput").value); }
function checkMessage() { document.getElementById("msgResult").innerText = advancedMessageDetector(document.getElementById("messageInput").value); }