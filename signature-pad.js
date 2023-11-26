(function () {
  const signData = {
    clearBtn: $("#clear"), //Button to clear signatures
    saveBtn: $("#save"), // Button to clear signatures
    canvas: $("#signature-pad"), // Canvas Element ID
    returnUrl: $("#signature_value"), // Input where returned URL will be Stored
    ajaxUrl: "/saveSignature", // Example URL
    customer_id: $("#customer_id").val(), // Customer Whose Signatures ARE
    csrfToken: $("#_token").val(), //CSRF TOKEN for
    strokeColor: "red", // Default stroke color
    strokeWidth: 2, // Default stroke width
  };

  $(document).ready(function () {
    initSignaturePad();
  });

  function initSignaturePad() {
    const canvas = signData.canvas.get(0);

    if (!canvas) {
      console.error("Canvas not found");
      return;
    }

    const context = canvas.getContext("2d");
    let drawing = false;
    let lastPos = null;

    function clearCanvas() {
      context.clearRect(0, 0, canvas.width, canvas.height);
    }

    signData.canvas.on("mousedown touchstart", function (e) {
      drawing = true;
      lastPos = e.type.includes("mouse")
        ? getMousePos(canvas, e)
        : getTouchPos(canvas, e);
    });

    signData.canvas.on("mousemove touchmove", function (e) {
      if (!drawing) return;
      e.preventDefault();
      const pos = e.type.includes("mouse")
        ? getMousePos(canvas, e)
        : getTouchPos(canvas, e);
      draw(canvas, context, lastPos, pos);
      lastPos = pos;
    });

    signData.canvas.on("mouseup touchend", function () {
      drawing = false;
    });

    signData.saveBtn.on("click", function () {
      const imageData = canvas.toDataURL("image/png");
      $.post(signData.ajaxUrl, {
        image: imageData,
        _token: signData.csrfToken,
        customer_id: signData.customer_id,
      })
        .done(function (data) {
          if (data.success) {
            console.log("Signature saved: ", data.msg);
            signData.returnUrl.val(data.url);
          } else {
            console.error("Error saving signature: ", data.msg);
          }
        })
        .fail(function (error) {
          console.error("Error in Ajax request: ", error);
        });
    });

    signData.clearBtn.on("click", clearCanvas);
  }

  function getMousePos(canvas, evt) {
    const rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top,
    };
  }

  function getTouchPos(canvas, evt) {
    const rect = canvas.getBoundingClientRect();
    const touch = evt.touches[0] || evt.changedTouches[0];
    return {
      x: touch.clientX - rect.left,
      y: touch.clientY - rect.top,
    };
  }

  function draw(canvas, context, startPos, endPos) {
    context.beginPath();
    context.moveTo(startPos.x, startPos.y);
    context.lineTo(endPos.x, endPos.y);
    context.strokeStyle = signData.strokeColor;
    context.lineWidth = signData.strokeWidth;
    context.stroke();
  }
})();
