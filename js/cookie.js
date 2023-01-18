// This was the best method I could come up with for putting together the finalized link. I'm unsure if I can make it cleaner, I would love to approach this design again


function getURL (){
    let connector,
        url = document.getElementById('url-input').value;
    if ( url.includes('?') ) {
        connector = '&'
    } else {
        connector = '?'
    }
    return  url + connector

}


function getMediumValue() {
    let cpcval = document.getElementById("q_2_cpc");
    let soval = document.getElementById("q_2_social")
    let emailval = document.getElementById("q_2_email");
    let siteval = document.getElementById("q_2_site");
    let vidval = document.getElementById("q_2_video");
    let resultmed = " ";
    if (cpcval.checked == true){
        let cval= document.getElementById("q_2_cpc").value;
        resultmed = cval;
    }
    if (soval.checked == true){
        let sval= document.getElementById("q_2_social").value;
        resultmed = sval;
    }
    if (emailval.checked == true){
        let eval= document.getElementById("q_2_email").value;
        resultmed = eval;
    }
    if (siteval.checked == true){
        let sival= document.getElementById("q_2_site").value;
        resultmed = sival;
    }
    if (vidval.checked == true){
        let vval= document.getElementById("q_2_video").value;
        resultmed = vval;
    }
    return document.getElementById("result").innerHTML= "utm_medium="+resultmed;
}

function getSourceValue() {
    let q3faceval = document.getElementById("q_3_facebook");
    let q3instaval = document.getElementById("q_3_instagram");
    let q3twitval = document.getElementById("q_3_twitter");
    let q3snapval = document.getElementById("q_3_snapchat");
    let q3linkval = document.getElementById("q_3_linkedin");
    let q3pintval = document.getElementById("q_3_pinterest");
    let q3gooval = document.getElementById('q_3_google');
    let q4faceval = document.getElementById('q_4_facebook');
    let q4instaval = document.getElementById('q_4_instagram');
    let q4twitval = document.getElementById("q_4_twitter");
    let q4snapval = document.getElementById("q_4_snapchat");
    let q4linkval = document.getElementById("q_4_linkedin");
    let q4pintval = document.getElementById("q_4_pinterest");
    let q5youval = document.getElementById('q_5_youtube');

    let resultsource = "";
    if (q3faceval.checked == true){
        let face = document.getElementById("q_3_facebook").value;
        resultsource = face;
    }
    if (q3instaval.checked == true){
        let instag= document.getElementById("q_3_instagram").value;
        resultsource = instag;
    }
    if (q3twitval.checked == true){
        let twit= document.getElementById("q_3_twitter").value;
        resultsource = twit;
    }
    if (q3snapval.checked == true){
        let snap= document.getElementById("q_3_snapchat").value;
        resultsource = snap;
    }
    if (q3linkval.checked == true){
        let link= document.getElementById("q_3_linkedin").value;
        resultsource = link;
    }
    if (q3pintval.checked == true){
        let pint= document.getElementById("q_3_pinterest").value;
        resultsource = pint;
    }
    if (q3gooval.checked == true) {
        let goog = document.getElementById("q_3_google").value;
        resultsource = goog;
    }
    if (q4faceval.checked == true){
        let face = document.getElementById("q_4_facebook").value;
        resultsource = face;
    }
    if (q4instaval.checked == true){
        let instag= document.getElementById("q_4_instagram").value;
        resultsource = instag;
    }
    if (q4twitval.checked == true){
        let twit= document.getElementById("q_4_twitter").value;
        resultsource = twit;
    }
    if (q4snapval.checked == true){
        let snap= document.getElementById("q_4_snapchat").value;
        resultsource = snap;
    }
    if (q4linkval.checked == true){
        let link= document.getElementById("q_4_linkedin").value;
        resultsource = link;
    }
    if (q4pintval.checked == true){
        let pint= document.getElementById("q_4_pinterest").value;
        resultsource = pint;
    }
    if (q5youval.checked == true){
        let youval= document.getElementById("q_5_youtube").value;
        resultsource = youval;
    }

    return document.getElementById("result").innerHTML= "&utm_source="+resultsource;
}


function getEmailSource() {
    let emailval = document.getElementById('email-input').value;
    if (emailval != '') {
        return emailval.split(' ').join('%20')
    } else {
        return ''
    }
}

function getSiteSource() {
    let anothersiteval = document.getElementById('site-input').value;
    if (anothersiteval != '') {
        return anothersiteval.split(' ').join('%20')
    } else {
        return ''
    }
}

function getCampaign() {
    let utmCampaign = document.getElementById('campaign').value;
    if (utmCampaign != '') {
        return '&utm_campaign=' + utmCampaign.split(' ').join('%20')
    } else {
        return ''
    }
}

// the %20 has to do with some sort of browser encoding feature for URL's. Basically, certain ASCII characters are replaced with a %20.

function finishedUTM() {
    let finished = "https://" + getURL() + getMediumValue() + getSourceValue() + getEmailSource() + getSiteSource() + getCampaign();
    return document.getElementById("result").innerHTML= finished;
}

