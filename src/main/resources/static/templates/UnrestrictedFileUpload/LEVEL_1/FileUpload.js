function addingEventListenerToFetchCarInfoButton() {
  document.getElementById("upload").addEventListener("click", function() {
    var form = document.getElementById("file");
    var file = form.files[0];
    var formData = new FormData();
    formData.append("file", file);
    let url = getUrlForVulnerabilityLevel();
    doPostAjaxCall(fetchCarInfoCallBack, url, true, formData);
  });
}
addingEventListenerToFetchCarInfoButton();

function fetchCarInfoCallBack(data) {
  document.getElementById("uploaded_file_info").innerHTML =
    data.isValid ? "File uploaded at location:" + data.content : data.content;
}
