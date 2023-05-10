
const checkBrowserCompatibility = () => {
    "speechSynthesis" in window
        ? console.log("Text to Speech supported!")
        : console.log("Text to Speech not supported")
}

checkBrowserCompatibility()

// TODO: define called function
function speechRender(texttovoice) {
    let utterance = new SpeechSynthesisUtterance(texttovoice);
    speechSynthesis.speak(utterance);

}


const escapeHtml = (unsafe) => {
    return unsafe.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#039;');
}

function getCurrentTime() {
    let now = new Date();
    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');
    return hours + ':' + minutes + ':' + seconds;
}

formatResponse = (retMsg) => {

    single_lines = retMsg.split("\n")

    for (var i = 0; i < single_lines.length; i++) {

        if (single_lines[i].startsWith("___")) {
            HandleGPTCommandRequest(single_lines[i])
        }
    }

    retMsg = escapeHtml(retMsg)
    retMsg = retMsg.replaceAll(/```([\s\S]+)```/g, "<br/><pre class='code'>\$1</pre><br/>");

    retMsg = retMsg.replaceAll("\n", "<br/>");

    curTime = getCurrentTime();
    retMsg = `<br/><br/><span class='chatgpt'>ChatGPT:</span><small>${curTime}</small> <br/>` + retMsg + "<br/>";

    return retMsg
}

session_total_prompt_tokens = 0
session_total_completion_tokens = 0
session_total_tokens = 0
session_time_taken_secs = 0
session_calls_done = 0
session_avg_time_taken = 0


function CallGetPolicyAPI() {
    user_request = $("#chat_box").val()

    topic = "summarize " + $("#chat_box").val() + "’s privacy policy and if not summarize whatever you can find";

    model_name = "gpt-3.5-turbo";

    if (model_name.length === 0 || (model_name !== "gpt-3.5-turbo" && model_name !== "gpt-3.5-turbo-0301" && model_name !== "gpt-4")) {
        model_name = "gpt-3.5-turbo"
    }

    num_responses = parseInt($("#num_gens").val())

    if (num_responses.length === 0 || num_responses === 0) {
        num_responses = 1
    }

    msgs = [];
    msgs = [
        { "role": "user", "content": topic }
    ]
    send_message = {
        url: user_request
    };


    success_behavior2 = function (reply_message) {

        console.log("Got a response back from ChatGPT -- the response is:")
        console.log(reply_message)


        window.setTimeout(function () { $("#status_message").html("."); }, 1500);

        //$("#chat_response").append(retMsg);
        textOutputResponse = reply_message.message;
        reply_message = formatResponse(reply_message.message);
        // TODO: assign global variable value from reply_message
        $("#chat_response").html(reply_message);
        $("#chat_response").scrollTop($("#chat_response")[0].scrollHeight);


    };

    curTime = getCurrentTime();
    show_msg = `<br/><br/><span class='you'>You: </span> <small>${curTime}</small><br/>` + user_request

    $("#chat_response").append(show_msg);
    var ajaxTime = new Date().getTime();
    var api_url = window.location.protocol + "//" + window.location.host + "/postpolicy";
    $.ajax({
        type: "POST",
        url: api_url,
        data: JSON.stringify(send_message),
        success: success_behavior2,
        contentType: 'application/json; charset=utf-8',
        dataType: "json"
    }).done(function (data) {

        secs = ((new Date().getTime() - ajaxTime) / 1000).toFixed(2);

        session_time_taken_secs += parseFloat(secs);
        session_calls_done += 1;

        session_avg_time_taken = (session_time_taken_secs / session_calls_done).toFixed(2);

        $("#last_time_taken").html(secs + " sec");
        $("#avg_time_taken").html(session_avg_time_taken + " sec");



    }).fail(function (data) {

        $("#status_message").css("color", "red").html("Error with previous request. Please check the logs or try again.");
        console.log(data);

        setTimeout(function () {
            $("#status_message").css("color", "black").html(".");
        }, 3000);
    })
}

function CallChatGPT() {

    user_request = $("#chat_box").val()
    api_key = $("#openai_key").val()

    if ((api_key.length == 0) || (api_key === "OPEN_AI_API_KEY")) {

        $("#status_message").css("color", "red").html("Please add an API key 👉🏼")

        setTimeout(function () { $("#status_message").css("color", "black"); $("#status_message").html(".") }, 4000)
        return;
    }


    topic = "summarize " + $("#chat_box").val() + "’s privacy policy and if not summarize whatever you can find in three short bullet points";


    if (topic.length > 0) {
        topic_type = $("input[name='topic']:checked").attr("data")

        custom_prefix = $("input[name='topic']:checked").attr("custom_prefix") ? $("input[name='topic']:checked").attr("custom_prefix") : "";

        if (custom_prefix.length > 0) {
            user_request = custom_prefix + user_request;

            // If this is just a technology topic, use this common pattern:
        } else if (topic_type == "technology") {

            user_request = "I am working on, " + topic + ". Please help me with " + user_request;
        }
    }

    openai_url = "https://api.openai.com/v1/chat/completions"

    //custom_func_list_str = ""




    model_name = "gpt-3.5-turbo"

    if (model_name.length === 0 || (model_name !== "gpt-3.5-turbo" && model_name !== "gpt-3.5-turbo-0301" && model_name !== "gpt-4")) {
        model_name = "gpt-3.5-turbo"
    }


    num_responses = parseInt($("#num_gens").val())

    if (num_responses.length === 0 || num_responses === 0) {
        num_responses = 1
    }

    msgs = [];
    msgs = [
        {
            "role": "system",
            "content": "You are a helpful coding assistant and may be sometimes asked other questions and given tasks."
        },
        { "role": "user", "content": topic }
    ]
    send_message = {
        model: model_name,
        messages: msgs,
        n: num_responses,
    };

    if ($("#enable_max_tokens").is(":checked")) {

        max_tokens = $("#max_tokens").val()

        if (max_tokens.length === 0 || max_tokens === 0) {
            max_tokens = 2000
        }

        send_message["max_tokens"] = max_tokens
    }

    success_behavior = function (reply_message) {

        console.log("Got a response back from ChatGPT")
        console.log(reply_message)

        retMsg = ""

        for (i = 0; i < reply_message.choices.length; i++) {

            curMsg = reply_message.choices[i].message.content;
            // $("#status_message").html("<span class='sending'>got reply</span>");
            curMsg = formatResponse(curMsg)

            retMsg += curMsg

            $("#status_message").append("<span class='sending'>got reply</span>");
        }

        window.setTimeout(function () { $("#status_message").html("."); }, 1500);

        $("#chat_response").append(retMsg);
        $("#chat_response").scrollTop($("#chat_response")[0].scrollHeight);

        $("#prompt_tokens").html(reply_message.usage.completion_tokens);
        $("#completion_tokens").html(reply_message.usage.prompt_tokens);
        $("#total_tokens").html(reply_message.usage.total_tokens);

        session_total_completion_tokens += reply_message.usage.completion_tokens;
        session_total_prompt_tokens += reply_message.usage.prompt_tokens;
        session_total_tokens += reply_message.usage.total_tokens;

        $("#total_prompt_tokens").html(session_total_completion_tokens);
        $("#total_completion_tokens").html(session_total_prompt_tokens);
        $("#total_session_tokens").html(session_total_tokens);
    };

    curTime = getCurrentTime();
    show_msg = `<br/><br/><span class='you'>You: </span> <small>${curTime}</small><br/>` + user_request

    $("#chat_response").append(show_msg);
    $("#chat_response").scrollTop($("#chat_response")[0].scrollHeight);


    var ajaxTime = new Date().getTime();

    $.ajax({
        type: "POST",
        url: openai_url,
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', 'Bearer ' + api_key);
        },
        data: JSON.stringify(send_message),
        success: success_behavior,
        contentType: 'application/json; charset=utf-8',
        dataType: "json"
    }).done(function (data) {

        secs = ((new Date().getTime() - ajaxTime) / 1000).toFixed(2);

        session_time_taken_secs += parseFloat(secs);
        session_calls_done += 1;

        session_avg_time_taken = (session_time_taken_secs / session_calls_done).toFixed(2);

        $("#last_time_taken").html(secs + " sec");
        $("#avg_time_taken").html(session_avg_time_taken + " sec");


    }).fail(function (data) {

        $("#status_message").css("color", "red").html("Error with previous request. Please check the logs or try again.");
        console.log(data);

        setTimeout(function () {
            $("#status_message").css("color", "black").html(".");
        }, 3000);
    })
};

send_request = function () {

    $("#status_message").html("<span class='sending'>Sending message...</span>")

    CallChatGPT()
};

send_request2 = function () {

    var host = window.location.host;
    console.log('host::' + host);

    $("#status_message").html("<span class='sending'>Sending message...</span>")

    CallGetPolicyAPI()
};
function buildCustomActionsList() {

    txt = ""

    $.each(custom_functions, function (key, value) {

        txt += `
<hr/>
                <b class="action_name">${value["action_name"]}</b>
                <p>${value["user_description"]}</p>
                <p>Example Usage:<br/> ${value["user_request_pattern"]}</p>
`
    });

    $(".chat_actions_available_list").html(txt)
}

// TODO: declare global var

var textOutputResponse;

// TODO: declare calling function


function speechOutput() {
    var single_lines = textOutputResponse.split(". ")
    for (var i = 0; i < single_lines.length; i++) {
        speechRender(single_lines [i]);

    }

}


$("document").ready(function () {
    $("#tabs").tabs();

    $("#max_tokens").html($("#num_tokens").val())
    $("#tabs").tabs("option", "active", 0);
    $(".min_max").click(function () {

        console.log("Clicked on min/max button")
        console.log("found elements: ", $(this).siblings(".wrapper"))
        $(this).parent("h6").siblings(".wrapper").toggle();
    });


    $(document).keypress(function (e) {
        if ((e.keyCode == 10 || e.keyCode == 13) && (e.ctrlKey || e.metaKey)) {
            send_request();
        }
    });

    $("#send_button").click(function () {
        send_request2();
    })

    $("#send_button2").click(function () {
        send_request2();
    })

    // TODO: bind to text to speech button
    $("#submit-button").click(function () {
        speechOutput();
    })


    $(".api_settings").find(".min_max").click();
    $(".usage_reference").find(".min_max").click();


    console.log('iframe location:::' + location.href);
    let urlObject = new URL(location.href);
    console.log('currentURL from iframe:::' + urlObject.searchParams.get('currentURL'));
    let currentURLObject = new URL(urlObject.searchParams.get('currentURL'));
    console.log("current hostname::" + currentURLObject.hostname);
    $("#chat_box").val(currentURLObject.hostname)

    if (currentURLObject.hostname.length > 0) {
        send_request2();
    }
});

