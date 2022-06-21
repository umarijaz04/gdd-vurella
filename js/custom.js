// window.history.forward(1);

const hover = (element) =>
  element.setAttribute("src", "./images/globr-icon-red.png");
const unhover = (element) =>
  element.setAttribute("src", "./images/globr-icon.png");

let forgotRecaptcha = true;
let captchaContainerForgot = null;
// less and read more
$(document).ready(() => {
  // $("#Home").load("header.html");
  // $("#Contactus").load("footer.html");
  // $("#copyright").load("copyright.html");

  // cancel forgot password popup and show Login popup
  $("#cancel-forgot").on("click", (e) => {
    $("#DropdownFormEmail").css("border-color", "#b9b9b9");
    $("#DropdownFormEmail").val("");
    $("#dropdownLogin").fadeIn(500);
    $("#dropdownForgot").fadeOut(500);
  });

  // close request sent
  $("#close-request").on("click", (e) => {
    $("#dropdownRequestSent").fadeOut(500);
  });

  $(".call").hide();
  $(".show_call").on("click", function () {
    let txt = $(".call").is(":visible")
      ? "Show more features<br /><i style='margin-top: 10px' class='las la-angle-down'></i>"
      : "Show less features<br /><i style='margin-top: 10px' class='las la-angle-up'></i>";
    $(".show_call").html(txt);
    $(this).parent().parent().siblings(".call").slideToggle(200);
  });

  $(".agent").hide();
  $(".show_agent").on("click", function () {
    let txt = $(".agent").is(":visible")
      ? "Show more features<br /><i style='margin-top: 10px' class='las la-angle-down'></i>"
      : "Show less features<br /><i style='margin-top: 10px' class='las la-angle-up'></i>";
    $(".show_agent").html(txt);
    $(this).parent().parent().siblings(".agent").slideToggle(200);
  });

  $(".supervisor").hide();
  $(".show_supervisor").on("click", function () {
    let txt = $(".supervisor").is(":visible")
      ? "Show more features<br /><i style='margin-top: 10px' class='las la-angle-down'></i>"
      : "Show less features<br /><i style='margin-top: 10px' class='las la-angle-up'></i>";
    $(".show_supervisor").html(txt);
    $(this).parent().parent().siblings(".supervisor").slideToggle(200);
  });

  $(".wallboard").hide();
  $(".show_wallboard").on("click", function () {
    let txt = $(".wallboard").is(":visible")
      ? "Show more features<br /><i style='margin-top: 10px' class='las la-angle-down'></i>"
      : "Show less features<br /><i style='margin-top: 10px' class='las la-angle-up'></i>";
    $(".show_wallboard").html(txt);
    $(this).parent().parent().siblings(".wallboard").slideToggle(200);
  });

  getUrlVars = () => {
    var vars = [],
      hash;
    var hashes = window.location.href
      .slice(window.location.href.indexOf("?") + 1)
      .split("&");
    for (var i = 0; i < hashes.length; i++) {
      hash = hashes[i].split("=");
      vars.push(hash[0]);
      vars[hash[0]] = hash[1];
    }
    return vars;
  };

  if (getUrlVars()["lang"] != "undefined") {
    $("#ctry").text(getUrlVars()["ctry"]);
    $("#lang").text(getUrlVars()["lang"]);
  }

  ResetEmail = async (email) => {
    await fetch("https://api.vurella.com/api/reset?email=" + email, {
      method: "GET",
    })
      .then((response) => response.text())
      .then((data) => {
        if (data.replace(/['"]+/g, "") === "OK") {
          $("#DropdownFormEmail").val("");
          $("#dropdownForgot").fadeOut(500);
          $("#dropdownRequestSent").fadeIn(1000);
        } else {
          alert(data.replace(/['"]+/g, ""));
        }
        $("#forgot-submit").prop("disabled", false);
        grecaptcha.reset(captchaContainerForgot);
        forgotRecaptcha = false;
        console.log("Success:", data);
      })
      .catch((error) => {
        $("#forgot-submit").prop("disabled", false);
        grecaptcha.reset(captchaContainerForgot);
        forgotRecaptcha = false;
        console.error("Error:", error);
      });
  };

  $("#forgot-password").on("click", (e) => {
    // if ($("#forgotRecaptchaDiv").html().length == 0) {
    //   let loadCaptcha = () => {
    //     captchaContainerForgot = grecaptcha.render("forgotRecaptchaDiv", {
    //       sitekey: "6LfwgVIUAAAAAE3RiU5nQ7IIRrOollsFOnrGabMy",
    //       // sitekey: "6LfgIIUbAAAAAJ6wwYV2wRtWC7UMbAM44n_GKGD7",
    //       callback: function (response) {
    //         console.log(response);
    //         forgotRecaptcha = true;
    //       },
    //       "expired-callback": function (response) {
    //         console.log(response);
    //         forgotRecaptcha = false;
    //       },
    //     });
    //   };
    //   loadCaptcha();
    // }
    $("#dropdownLogin").fadeOut(500);
    $("#dropdownForgot").fadeIn(1000);
  });

  $("#password-reset-form").on("submit", (e) => {
    if ($("#DropdownFormEmail").val() == "") {
      $("#DropdownFormEmail").css("border-color", "#bf1e2d");
    } else {
      $("#DropdownFormEmail").css("border-color", "#b9b9b9");
    }

    if ($("#DropdownFormEmail").val() != "" && forgotRecaptcha != false) {
      $("#forgot-submit").prop("disabled", true);
      ResetEmail($("#DropdownFormEmail").val());
    }

    e.preventDefault();
  });

  $(document).on("click", (e) => {
    if (e.target.id == "partnerLogin") return;
    //For descendants of menu_content being clicked, remove this check if you do not want to put constraint on descendants.
    if ($(e.target).closest("#partnerLogin").length) return;

    //Do processing of click event here for every element except with id menu_content
    $("#dropdownLogin").fadeOut(500);
    $("#dropdownForgot").fadeOut(500);
    $("#dropdownRequestSent").fadeOut(500);
  });

  getCookie = (name) => {
    // Split cookie string and get all individual name=value pairs in an array
    var cookieArr = document.cookie.split(";");

    // Loop through the array elements
    for (var i = 0; i < cookieArr.length; i++) {
      var cookiePair = cookieArr[i].split("=");

      /* Removing whitespace at the beginning of the cookie name
    and compare it with the given string */
      if (name == cookiePair[0].trim()) {
        // Decode the cookie value and return
        return decodeURIComponent(cookiePair[1]);
      }
    }

    // Return null if not found
    return null;
  };

  // Login popup
  $("#partnerLogin").on("click", () => {
    if (getCookie("email") !== null) {
      window.location.replace("/partner-portal.html");
    } else {
      const login = $("#dropdownLogin").css("display");
      const forgot = $("#dropdownForgot").css("display");
      const requestSent = $("#dropdownRequestSent").css("display");
      if (login === "block") {
        $("#dropdownLogin").fadeOut(500);
      } else {
        if (forgot === "block") {
          $("#dropdownForgot").fadeOut(500);
        } else {
          if (requestSent === "block") {
            $("#dropdownRequestSent").fadeOut(500);
          } else {
            $("#dropdownLogin").slideToggle("fast");
          }
        }
      }
    }
  });

  $("#partnerLogout").on("click", () => {
    document.cookie = "email=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    window.location.replace("/");
  });

  // login form
  Login = async (username, password) => {
    await fetch(
      "https://api.vurella.com/api/user?email=" +
        username +
        "&password=" +
        password,
      { method: "GET" }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.length === 0) {
          $("#DropdownFormPassword").val("");
          $("#ajaxLoader").modal("hide");
          alert("Invalid username or password");
        } else {
          $("#ajaxLoader").modal("hide");
          //save cookie and redirect
          document.cookie = "email=" + username;
          window.location.replace("/partner-portal.html");
        }
        console.log("Success:", data);
      })
      .catch((error) => {
        $("#ajaxLoader").modal("hide");
        console.log("Error:", error);
      });
    $("#login-submit").prop("disabled", false);
    $("#register-login").prop("disabled", false);
  };

  $("#login-form").on("submit", (e) => {
    if ($("#DropdownFormUserName").val() == "") {
      $("#DropdownFormUserName").css("border-color", "#bf1e2d");
    } else {
      $("#DropdownFormUserName").css("border-color", "#b9b9b9");
    }
    if ($("#DropdownFormPassword").val() == "") {
      $("#DropdownFormPassword").css("border-color", "#bf1e2d");
    } else {
      $("#DropdownFormPassword").css("border-color", "#b9b9b9");
    }

    if (
      $("#DropdownFormUserName").val() != "" &&
      $("#DropdownFormPassword").val() != ""
    ) {
      $("#login-submit").prop("disabled", true);
      $("#register-login").prop("disabled", true);
      $("#ajaxLoader").modal("show");
      Login($("#DropdownFormUserName").val(), $("#DropdownFormPassword").val());
    }

    e.preventDefault();
  });

  // smooth scroll
  $("#tell-me-more").on("click", () => {
    $("html, body").animate(
      {
        scrollTop: $("#vSUITE").offset().top - $(".page_header").height(),
      },
      700
    );
  });
  $("#more-details").on("click", () => {
    $("html, body").animate(
      {
        scrollTop: $("#MoreDetails").offset().top - $(".page_header").height(),
      },
      700
    );
  });
  $("#media-more-details").on("click", () => {
    $("html, body").animate(
      {
        scrollTop: $("#MoreDetails").offset().top - $(".page_header").height(),
      },
      700
    );
  });
  $("#media-call-recording").on("click", () => {
    $("html, body").animate(
      {
        scrollTop:
          $("#CallRecording").offset().top - $(".page_header").height(),
      },
      700
    );
  });
  $("#media-rainbow-solutions").on("click", () => {
    $("html, body").animate(
      {
        scrollTop:
          $("#RainbowSolutions").offset().top - $(".page_header").height(),
      },
      700
    );
  });
  $("#request-demo").on("click", () => {
    $("html, body").animate(
      {
        scrollTop: $("#RequestDemo").offset().top - $(".page_header").height(),
      },
      700
    );
  });
  $("#call-handling").on("click", () => {
    $("html, body").animate(
      {
        scrollTop: $("#CallHandling").offset().top - $(".page_header").height(),
      },
      700
    );
  });
  $("#agent-features").on("click", () => {
    $("html, body").animate(
      {
        scrollTop:
          $("#AgentFeatures").offset().top - $(".page_header").height(),
      },
      700
    );
  });
  $("#supervisor-features").on("click", () => {
    $("html, body").animate(
      {
        scrollTop:
          $("#SupervisorFeatures").offset().top - $(".page_header").height(),
      },
      700
    );
  });
  $("#wallboard").on("click", () => {
    $("html, body").animate(
      {
        scrollTop: $("#Wallboard").offset().top - $(".page_header").height(),
      },
      700
    );
  });
  $("#recording-methods").on("click", () => {
    $("html, body").animate(
      {
        scrollTop:
          $("#RecordingMethods").offset().top - $(".page_header").height(),
      },
      700
    );
  });
  $("#pci").on("click", () => {
    $("html, body").animate(
      {
        scrollTop: $("#PCI").offset().top - $(".page_header").height(),
      },
      700
    );
  });
  $("#user-features").on("click", () => {
    $("html, body").animate(
      {
        scrollTop: $("#UserFeatures").offset().top - $(".page_header").height(),
      },
      700
    );
  });
  $("#cti-features").on("click", () => {
    $("html, body").animate(
      {
        scrollTop: $("#CTIFeatures").offset().top - $(".page_header").height(),
      },
      700
    );
  });
  $("#bespoke-integration").on("click", () => {
    $("html, body").animate(
      {
        scrollTop:
          $("#BespokeIntegration").offset().top - $(".page_header").height(),
      },
      700
    );
  });
  $("#home").on("click", () => {
    $("html, body").animate(
      {
        scrollTop: $("#Home").offset().top,
      },
      700
    );
  });
  $("#our-channel").on("click", () => {
    $("html, body").animate(
      {
        scrollTop: $("#OurChannel").offset().top,
      },
      700
    );
  });
  $("#contact-us").on("click", () => {
    $("html, body").animate(
      {
        scrollTop: $("#Contactus").offset().top - $(".page_header").height(),
      },
      700
    );
  });
  $("#v-suite").on("click", () => {
    $("html, body").animate(
      {
        scrollTop: $("#vSUITE").offset().top - $(".page_header").height(),
      },
      700
    );
  });
  $("#rainbow-solutions").on("click", () => {
    $("html, body").animate(
      {
        scrollTop:
          $("#RainbowSolutions").offset().top - $(".page_header").height(),
      },
      700
    );
  });
  $("#features").on("click", () => {
    $("html, body").animate(
      {
        scrollTop: $("#CallHandling").offset().top - $(".page_header").height(),
      },
      700
    );
  });
  $("#recording-features").on("click", () => {
    $("html, body").animate(
      {
        scrollTop:
          $("#RecordingMethods").offset().top - $(".page_header").height(),
      },
      700
    );
  });
  $("#c-features").on("click", () => {
    $("html, body").animate(
      {
        scrollTop: $("#CTIFeatures").offset().top - $(".page_header").height(),
      },
      700
    );
  });
  $("#requestdemo").on("click", () => {
    $("html, body").animate(
      {
        scrollTop: $("#RequestDemo").offset().top - 70,
      },
      700
    );
  });
  $("#footer-home").on("click", () => {
    $("html, body").animate(
      {
        scrollTop: $("#Home").offset().top,
      },
      700
    );
  });
  $("#footer-our-channel").on("click", () => {
    $("html, body").animate(
      {
        scrollTop: $("#OurChannel").offset().top,
      },
      700
    );
  });
  $("#footer-v-suite").on("click", () => {
    $("html, body").animate(
      {
        scrollTop: $("#vSUITE").offset().top - $(".page_header").height(),
      },
      700
    );
  });
  $("#footer-rainbow-solutions").on("click", () => {
    $("html, body").animate(
      {
        scrollTop:
          $("#RainbowSolutions").offset().top - $(".page_header").height(),
      },
      700
    );
  });
  $("#product-resources").on("click", () => {
    $("html, body").animate(
      {
        scrollTop:
          $("#productResources").offset().top - $(".page_header").height(),
      },
      700
    );
  });
  $("#btnTicketGo").on("click", () => {
    $("html, body").animate(
      {
        scrollTop:
          $("#trialLicenses").offset().top - $(".page_header").height(),
      },
      700
    );
  });
});
