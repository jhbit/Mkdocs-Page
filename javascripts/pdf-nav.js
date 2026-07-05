document.addEventListener("DOMContentLoaded", function () {
  var params = new URLSearchParams(window.location.search);
  var pdfName = params.get("pdf");
  var pageNum = parseInt(params.get("page"));
  if (pdfName && pageNum) {
    setTimeout(function () {
      var iframe = document.getElementById("pdf-" + pdfName);
      if (iframe) {
        iframe.contentWindow.postMessage({ type: "goToPage", page: pageNum }, "*");
      }
    }, 2000);
  }
});
