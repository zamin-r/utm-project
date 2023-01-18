// This was a simple approach that I took to handling the different selection cases to decide on what screen should appear depending on the selection made by the user.
// It's probably not the most clean or effective way, I will definitely look into improving it once I learn how to

function mediumSelector() {
    if (document.getElementById('q_2_email').checked == true) {
        document.getElementById('email_source').style.display = "block";
    }
    if (document.getElementById('q_2_email').checked == false) {
        document.getElementById('email_source').style.display = "none";
    }
    if (document.getElementById('q_2_cpc').checked == true) {
        document.getElementById('cpc_source').style.display = "block";
    }
    if (document.getElementById('q_2_cpc').checked == false) {
        document.getElementById('cpc_source').style.display = "none";
    }
    if (document.getElementById('q_2_social').checked == true) {
        document.getElementById('socialmedia_source').style.display = "block";
    }
    if (document.getElementById('q_2_social').checked == false) {
        document.getElementById('socialmedia_source').style.display = "none";
    }

    if (document.getElementById('q_2_site').checked == true) {
        document.getElementById('site_source').style.display = "block";
    }
    if (document.getElementById('q_2_site').checked == false) {
        document.getElementById('site_source').style.display = "none";
    }

    if (document.getElementById('q_2_video').checked == true) {
        document.getElementById('video_source').style.display = "block";
    }
    if (document.getElementById('q_2_video').checked == false) {
        document.getElementById('video_source').style.display = "none";
    }
}


